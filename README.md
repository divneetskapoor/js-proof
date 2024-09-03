# Video NFT Collection

Welcome to the Video NFT Collection repository. This project is a simple JavaScript-based implementation designed to demonstrate the creation and management of Video Non-Fungible Tokens (NFTs). It includes functionality to mint NFTs, store them in a collection, and retrieve their details.

## Features

- *Mint Video NFTs*: Easily create Video NFTs with specific attributes such as ID, Course, Length, and Creator ID.
- *List All NFTs*: Display all minted Video NFTs in the collection, showcasing their details.
- *Get Total Supply*: Retrieve and display the total count of NFTs within the collection.

## Code Overview

### Data Structures

- *container*: An array that serves as the storage for all minted Video NFTs.

### Functions

- *mintNFT(id, course, length, creatorID)*: Mints a new Video NFT with the provided attributes and adds it to the container.

- *printVideoNFT(videoNFT)*: Outputs the details of a single Video NFT to the console, including its ID, course name, length, and creator ID.

- *listNFTs()*: Iterates over the container and prints the details of each Video NFT by invoking the printVideoNFT function.

- *getTotalSupply()*: Calculates and returns the total number of NFTs in the collection. Also, prints this value to the console.

### Example Usage

```javascript
// Minting Video NFTs
mintNFT(1000, "JS Proof Tutorial", 1, 4575);
mintNFT(1001, "ETH Proof Tutorial", 15, 9752);
mintNFT(1002, "AI Proof Tutorial", 27, 5423);
mintNFT(1003, "AVAX Proof Tutorial", 5, 9575);
mintNFT(1004, "Poly Proof Tutorial", 7, 9057);

// Listing all NFTs
listNFTs();

// Retrieving total supply
getTotalSupply();
