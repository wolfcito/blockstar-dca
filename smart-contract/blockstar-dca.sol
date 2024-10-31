// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract DCAPlan {
    IERC20 public wbtc;
    address public owner;
    uint256 public amountPerPeriod;
    uint256 public interval;
    uint256 public lastPurchaseTime;
    string public planName;
    bool public useETH;

    constructor(
        address _wbtcAddress,
        uint256 _amountPerPeriod,
        uint256 _interval,
        string memory _planName,
        bool _useETH
    ) {
        require(_amountPerPeriod >= 1e5, "Minimum amount is 0.1 units");

        wbtc = IERC20(_wbtcAddress);
        owner = msg.sender;
        amountPerPeriod = _amountPerPeriod;
        interval = _interval;
        planName = _planName;
        useETH = _useETH;
        lastPurchaseTime = block.timestamp;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function deposit() external payable onlyOwner {
        require(useETH, "This plan uses wBTC, not ETH");

    }

    function depositToken(uint256 _amount) external onlyOwner {
        require(!useETH, "This plan uses ETH, not wBTC");
        require(wbtc.transferFrom(msg.sender, address(this), _amount), "Deposit failed");
    }

    function executeDCA(address recipient) external onlyOwner {
        require(block.timestamp >= lastPurchaseTime + interval, "It is not time for the next purchase yet");

        lastPurchaseTime = block.timestamp;

        if (useETH) {
            require(address(this).balance >= amountPerPeriod, "Insufficient ETH balance");
            (bool success, ) = recipient.call{value: amountPerPeriod}("");
            require(success, "ETH transfer failed");
        } else {
            require(wbtc.transfer(recipient, amountPerPeriod), "wBTC purchase failed");
        }
    }

    function updatePlan(
        uint256 _amountPerPeriod,
        uint256 _interval,
        string memory _planName,
        bool _useETH
    ) external onlyOwner {
        require(_amountPerPeriod >= 1e5, "Minimum amount is 0.1 units");
        amountPerPeriod = _amountPerPeriod;
        interval = _interval;
        planName = _planName;
        useETH = _useETH;
    }
}
