
// variable to hold nft
const container = []
// function to mint NFT
// it takes some parameters as input (id,name,length,creatorID,videoHash)
function mintNFT(id,course,length,creatorID){

    // creatting an object to store the details of the NFT
    video = {
        id:id,
        course:course,
        length:length,
        creatorID:creatorID,
        
    }

    // adding the NFT to container
    container.push(video)
}

// function to print a single Video NFT
function printVideoNFT(videoNFT){
    console.log("ID: "+videoNFT.id)
    console.log("course: "+videoNFT.course)
    console.log("Length: "+videoNFT.length)
    console.log("CreatorID: "+videoNFT.creatorID)
    console.log("\n")
}

// function to print the NFT collection stored in list
function listNFTs(){
    for(let i=0;i<container.length;i++){
        console.log((i+1)+".")
        printVideoNFT(container[i])
    }
}

// function to print and return the number of NFTs stored in the list
function getTotalSupply(){
    console.log("Total NFTs: "+container.length)
    return container.length
}

// calling mintNFT function with few random data
mintNFT(1000,"JS Proof Tutorial",1,4575)
mintNFT(1001,"ETH Proof Tutorial",15,9752)
mintNFT(1002,"AI Proof Tutorial",27,5423)
mintNFT(1003,"AVAX Proof Tutorial",5,9575)
mintNFT(1004,"Poly Proof Tutorial",7,9057)

// calling listNFTs function to print the NFT collection
listNFTs()
console.log()

// calling getTotalSupply function to print the number of NFTs available in the list
getTotalSupply()
