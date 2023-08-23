---
title: "Subone (Graph Protocol)"
subtitle: "The Graph is a decentralized protocol for indexing and querying blockchain data. It makes it possible to query data that is difficult to query directly, such as the data from complex smart contracts or NFTs."
links: '{"source": "https://github.com/ankitsawho/GraphBlockChain", "demo": "", "video": ""}'
---

# SubOne Subgraph

The Graph works by creating a decentralized network of nodes that index the data from blockchains. These nodes are called indexers. The indexers then make the indexed data available to applications through APIs called subgraphs.

Subgraphs are open APIs that are defined using GraphQL, a query language that makes it easy to retrieve data from the blockchain. Applications can use subgraphs to query the indexed data and build powerful decentralized applications.

The Graph is a valuable tool for building decentralized applications. It makes it easy to access and query blockchain data, which can be used to build a wide variety of applications, such as:

-   Decentralized finance (DeFi) applications
-   NFT marketplaces
-   Supply chain applications
-   Data analytics applications
-   Game development platforms

The Graph is a rapidly growing protocol with a large and active community. It is the leading decentralized indexing protocol for Ethereum and is also supported by other blockchains, such as Avalanche and Solana.

Here are some of the benefits of using The Graph:

-   Decentralization: The Graph is a decentralized protocol, which means that it is not controlled by any single entity. This makes it more secure and resistant to censorship.
-   Scalability: The Graph is designed to be scalable, so it can be used to index large amounts of data.
-   Flexibility: The Graph can be used to index data from a variety of blockchains.
-   Community: The Graph has a large and active community of developers and users.

Contract deployed in polygon testnet mumbai

Install graph cli

```
npm install -g @graphprotocol/graph-cli
```

Initialize subgraph

```
graph init --studio subone
```

AuthN in cli

```
graph auth --studio 69bb0904f76af4ac227c85ad9735efd5
```

Build Subgraph

```
cd subone
graph codegen && graph build
```

Deploy subgraph

```
graph deploy --studio subone
```

[Link](https://thegraph.com/studio/subgraph/subone/)

<hr>
<img width="1440" alt="Screenshot 2023-06-12 at 02 14 55" src="https://github.com/ankitsawho/GraphBlockChain/assets/65439290/66e5ebf3-88af-40ee-b7db-4e3d118aa0e9">
