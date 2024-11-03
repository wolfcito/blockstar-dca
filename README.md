# DCA Master

## Table of Contents

- [About the Project](#about-the-project)
- [Demo](#demo)
- [How it Works](#how-it-works)
- [Built With](#built-with)
- [Team](#team)

---

## About the Project

In a context where financial decisions can be overwhelming and market volatility can lead to uncertainty, DCA emerges as an innovative and intuitive solution for those who want to build a stronger and more secure financial future.

Our platform is designed to simplify the investment process through Dollar-Cost Averaging (DCA), while learning about investing and personal finance through our in-app lessons. DCA Master aims to empower investors of all levels, regardless of their previous experience, by providing them with a clear and accessible path to investing.

---

## Demo

<aquí enlace demo>

---

## How it Works

DCA Master is a decentralized application (dApp) that allows users to easily make regular investments through their non-custodial wallets. Built around the Dollar-Cost Averaging (DCA) strategy, this platform offers a robust and long-term approach to managing volatility in the cryptocurrency markets.

With DCA Master, there’s no need to monitor markets closely to time purchases. Users can automate their investments based on their own criteria, providing greater control and ease of management. Our mission is to offer the necessary tools and educational resources to empower users to build diversified, resilient investment portfolios.

### Goals

The smart contracts of DCA Master are built with two primary goals:

1. **Enable Automatic Investments**: Allow users to automate investments according to their individual preferences in a user-friendly interface.
2. **Provide Financial Education**: Empower users to understand and leverage DCA strategies, even if they’re new to investment methods, enabling them to make informed financial decisions.

### Components

The project’s smart contracts include:

- **DCAPlan Contract**: The core of the DCA Master platform, designed to automate investments in wBTC or ETH based on a fixed amount and interval.
  - **Functions**:
    - **deposit**: Allows ETH deposits if the DCA plan is set to use ETH.
    - **depositToken**: For wBTC plans, enables the deposit of wBTC tokens by transferring from the owner’s address to the contract.
    - **executeDCA**: Executes the DCA operation, transferring either ETH or wBTC to a specified recipient based on the last purchase time and defined interval.
    - **updatePlan**: Allows updating the plan’s settings, including amount per period, interval, plan name, and asset type (ETH or wBTC).
  - **Modifiers**:
    - **onlyOwner**: Restricts certain functions to the plan owner, ensuring that only authorized users can make updates or execute purchases.

### User Journey

1. **Onboarding**: Users navigate to [https://blockstar-dca.vercel.app/](https://blockstar-dca.vercel.app/), connect their wallet, and begin the setup process.
2. **Plan Setup**: Users fill out a simple form to configure their DCA preferences, including investment amount, frequency, and asset type (ETH or wBTC), ensuring a smooth and user-friendly experience.
3. **Validation and Confirmation**: After verifying their information, users confirm their DCA plan, which then operates on a recurring basis without further user input.

---

## Built With

- **Vottun’s APIs**: Facilitates seamless integration with blockchain infrastructure for secure, decentralized transactions.
- **Arbitrum Sepolia**: Utilized as the blockchain network to enhance speed and scalability.

### Why Did Your Team Choose These Approaches?

We aim to transform people’s relationship with money and investments, providing them with a solution that reduces the fear and uncertainty often associated with the financial world. DCA Master is designed to help every investor take control of their finances, enjoy the investment process, and ultimately achieve their financial goals in a sustainable way.

---

## Experience Developing with Vottun APIs

Our experience integrating Vottun APIs was generally smooth, though a bit unconventional for developers accustomed to different workflows. By offloading complex blockchain interactions to Vottun’s APIs, we streamlined development and focused on creating a user-friendly interface.

We did encounter minor issues, such as incorrect reads that required redeploying the smart contract and regenerating an API key due to a typo, but working with TypeScript significantly improved the overall experience. As a suggestion, adding a simple “Hello World” example for reading and writing on the blockchain would exponentially aid developer adoption.

---

## Team

- **[María Fernanda López](https://x.com/Soymaferlopezp)** - Designer\
  I'm a Informatic engineer, Co-founder of Dosis Web3 and Ambassador Push Protocol Latam

- **[Krizula Metropulos](https://x.com/Zulakyz)** - Researcher\
  I’m a Computer engineer, crypto enthusiast and Co-founder of [@100DiasDeR](https://x.com/100diasder) an educational community about blockchain and Web3.

- **[Margy Aramendiz](https://x.com/maaadiz3)** - Project management\
  Crypto-enthusiast & Co-Founder 100 dias de research.

- **[Luis Fernando Ushiña(Wolfcito)](https://x.com/akawolfcito)** – Software Developer Engineer\
   A.K.A. Wolfcito, [ModeSpray's](https://x.com/ModeSpray) Founder, crypto enthusiast from Ecuador with a strong passion for Web3 and Blockchain technologies, bringing several years of experience in full-stack development.

---

## Repository and Social Links

- **GitHub Repository**: [https://github.com/wolfcito/blockstar-dca](https://github.com/wolfcito/blockstar-dca)
