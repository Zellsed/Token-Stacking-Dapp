const _NETWORK_ID = 17000;
let SELECT_CONTRACT = {};

SELECT_CONTRACT[_NETWORK_ID] = {
  network_name: "ETH Holesky",
  explorer: "https://holesky.etherscan.io/",
  STACKING: {
    sevenDays: {
      address: "0x51168d2D1B935932959Bd7617892a5C1DB7Fb0AA",
    },
    tenDays: {
      address: "0x18E6d0eb4Cf368b4089BdEE8158a46EAF5003aA3",
    },
    thirtyTwoDays: {
      address: "0xD4623098a915D254810dc9E8f210733E4108ebaD",
    },
    ninetyDays: {
      address: "0x4aafc4309Decf7Fc9cBD560a9c65A0052486f97b",
    },
    abi: [],
  },

  TOKEN: {
    symbol: "TBC",
    address: "0x66cD16968A1cd625b13103A6199BcE679Ead8ED0",
    abi: [],
  },
};

let countDownGlobal;

let web3;

let oContractToken;

let contractCall = "sevenDays";

let currentAddress;

let web3Main = new Web3("https://rpc.ankr.com/eth_holesky");

var notyf = new Notyf({
  duration: 3000,
  position: { x: "right", y: "bottom" },
});
