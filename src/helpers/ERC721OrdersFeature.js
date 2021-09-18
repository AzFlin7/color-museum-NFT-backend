const ERC721OrderFeatureABI = [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "zeroExAddress",
					"type": "address"
				},
				{
					"internalType": "contract IEtherTokenV06",
					"name": "weth",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "maker",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "nonce",
					"type": "uint256"
				}
			],
			"name": "ERC721OrderCancelled",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "enum LibNFTOrder.TradeDirection",
					"name": "direction",
					"type": "uint8"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "maker",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "taker",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "nonce",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "contract IERC20TokenV06",
					"name": "erc20Token",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "erc20TokenAmount",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "contract IERC721Token",
					"name": "erc721Token",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "erc721TokenId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "matcher",
					"type": "address"
				}
			],
			"name": "ERC721OrderFilled",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "enum LibNFTOrder.TradeDirection",
					"name": "direction",
					"type": "uint8"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "maker",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "taker",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "expiry",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "nonce",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "contract IERC20TokenV06",
					"name": "erc20Token",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "erc20TokenAmount",
					"type": "uint256"
				},
				{
					"components": [
						{
							"internalType": "address",
							"name": "recipient",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						},
						{
							"internalType": "bytes",
							"name": "feeData",
							"type": "bytes"
						}
					],
					"indexed": false,
					"internalType": "struct LibNFTOrder.Fee[]",
					"name": "fees",
					"type": "tuple[]"
				},
				{
					"indexed": false,
					"internalType": "contract IERC721Token",
					"name": "erc721Token",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "erc721TokenId",
					"type": "uint256"
				},
				{
					"components": [
						{
							"internalType": "contract IPropertyValidator",
							"name": "propertyValidator",
							"type": "address"
						},
						{
							"internalType": "bytes",
							"name": "propertyData",
							"type": "bytes"
						}
					],
					"indexed": false,
					"internalType": "struct LibNFTOrder.Property[]",
					"name": "erc721TokenProperties",
					"type": "tuple[]"
				}
			],
			"name": "ERC721OrderPreSigned",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "EIP712_DOMAIN_SEPARATOR",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "FEATURE_NAME",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "FEATURE_VERSION",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order",
					"name": "sellOrder",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "enum LibSignature.SignatureType",
							"name": "signatureType",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"internalType": "struct LibSignature.Signature",
					"name": "signature",
					"type": "tuple"
				},
				{
					"internalType": "uint256",
					"name": "ethAvailable",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "takerCallbackData",
					"type": "bytes"
				}
			],
			"name": "_buyERC721",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order[]",
					"name": "sellOrders",
					"type": "tuple[]"
				},
				{
					"components": [
						{
							"internalType": "enum LibSignature.SignatureType",
							"name": "signatureType",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"internalType": "struct LibSignature.Signature[]",
					"name": "signatures",
					"type": "tuple[]"
				},
				{
					"internalType": "bytes[]",
					"name": "callbackData",
					"type": "bytes[]"
				},
				{
					"internalType": "bool",
					"name": "revertIfIncomplete",
					"type": "bool"
				}
			],
			"name": "batchBuyERC721s",
			"outputs": [
				{
					"internalType": "bool[]",
					"name": "successes",
					"type": "bool[]"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256[]",
					"name": "orderNonces",
					"type": "uint256[]"
				}
			],
			"name": "batchCancelERC721Orders",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order[]",
					"name": "sellOrders",
					"type": "tuple[]"
				},
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order[]",
					"name": "buyOrders",
					"type": "tuple[]"
				},
				{
					"components": [
						{
							"internalType": "enum LibSignature.SignatureType",
							"name": "signatureType",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"internalType": "struct LibSignature.Signature[]",
					"name": "sellOrderSignatures",
					"type": "tuple[]"
				},
				{
					"components": [
						{
							"internalType": "enum LibSignature.SignatureType",
							"name": "signatureType",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"internalType": "struct LibSignature.Signature[]",
					"name": "buyOrderSignatures",
					"type": "tuple[]"
				}
			],
			"name": "batchMatchERC721Orders",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "profits",
					"type": "uint256[]"
				},
				{
					"internalType": "bool[]",
					"name": "successes",
					"type": "bool[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order",
					"name": "sellOrder",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "enum LibSignature.SignatureType",
							"name": "signatureType",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"internalType": "struct LibSignature.Signature",
					"name": "signature",
					"type": "tuple"
				},
				{
					"internalType": "bytes",
					"name": "callbackData",
					"type": "bytes"
				}
			],
			"name": "buyERC721",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "orderNonce",
					"type": "uint256"
				}
			],
			"name": "cancelERC721Order",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order",
					"name": "order",
					"type": "tuple"
				}
			],
			"name": "getERC721OrderHash",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "orderHash",
					"type": "bytes32"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order",
					"name": "order",
					"type": "tuple"
				}
			],
			"name": "getERC721OrderStatus",
			"outputs": [
				{
					"internalType": "enum LibNFTOrder.OrderStatus",
					"name": "status",
					"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "maker",
					"type": "address"
				},
				{
					"internalType": "uint248",
					"name": "nonceRange",
					"type": "uint248"
				}
			],
			"name": "getERC721OrderStatusBitVector",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "bitVector",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "addressOfNFT",
					"type": "address"
				}
			],
			"name": "getFeeForNFT",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getMarketOwner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order",
					"name": "sellOrder",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order",
					"name": "buyOrder",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "enum LibSignature.SignatureType",
							"name": "signatureType",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"internalType": "struct LibSignature.Signature",
					"name": "sellOrderSignature",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "enum LibSignature.SignatureType",
							"name": "signatureType",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"internalType": "struct LibSignature.Signature",
					"name": "buyOrderSignature",
					"type": "tuple"
				}
			],
			"name": "matchERC721Orders",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "profit",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "migrate",
			"outputs": [
				{
					"internalType": "bytes4",
					"name": "success",
					"type": "bytes4"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "onERC721Received",
			"outputs": [
				{
					"internalType": "bytes4",
					"name": "success",
					"type": "bytes4"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order",
					"name": "order",
					"type": "tuple"
				}
			],
			"name": "preSignERC721Order",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order",
					"name": "buyOrder",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "enum LibSignature.SignatureType",
							"name": "signatureType",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"internalType": "struct LibSignature.Signature",
					"name": "signature",
					"type": "tuple"
				},
				{
					"internalType": "uint256",
					"name": "erc721TokenId",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "unwrapNativeToken",
					"type": "bool"
				},
				{
					"internalType": "bytes",
					"name": "callbackData",
					"type": "bytes"
				}
			],
			"name": "sellERC721",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "addressOfNFT",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "fee",
					"type": "uint256"
				}
			],
			"name": "setFeeForNFT",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "marketOwnerCandidate",
					"type": "address"
				}
			],
			"name": "setMarketOwner",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order",
					"name": "order",
					"type": "tuple"
				},
				{
					"internalType": "uint256",
					"name": "erc721TokenId",
					"type": "uint256"
				}
			],
			"name": "validateERC721OrderProperties",
			"outputs": [],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "enum LibNFTOrder.TradeDirection",
							"name": "direction",
							"type": "uint8"
						},
						{
							"internalType": "address",
							"name": "maker",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "taker",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "expiry",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "contract IERC20TokenV06",
							"name": "erc20Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc20TokenAmount",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "address",
									"name": "recipient",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "amount",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "feeData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Fee[]",
							"name": "fees",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IERC721Token",
							"name": "erc721Token",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "erc721TokenId",
							"type": "uint256"
						},
						{
							"components": [
								{
									"internalType": "contract IPropertyValidator",
									"name": "propertyValidator",
									"type": "address"
								},
								{
									"internalType": "bytes",
									"name": "propertyData",
									"type": "bytes"
								}
							],
							"internalType": "struct LibNFTOrder.Property[]",
							"name": "erc721TokenProperties",
							"type": "tuple[]"
						}
					],
					"internalType": "struct LibNFTOrder.ERC721Order",
					"name": "order",
					"type": "tuple"
				},
				{
					"components": [
						{
							"internalType": "enum LibSignature.SignatureType",
							"name": "signatureType",
							"type": "uint8"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"internalType": "struct LibSignature.Signature",
					"name": "signature",
					"type": "tuple"
				}
			],
			"name": "validateERC721OrderSignature",
			"outputs": [],
			"stateMutability": "view",
			"type": "function"
		}
	]

export {
	ERC721OrderFeatureABI
}