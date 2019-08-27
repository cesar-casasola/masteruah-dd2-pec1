(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../truffle/build/contracts/MetaCoin.json":
/*!************************************************!*\
  !*** ../truffle/build/contracts/MetaCoin.json ***!
  \************************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"MetaCoin","abi":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"metadata":"{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getBalanceInEth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"receiver\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"sendCoin\",\"outputs\":[{\"name\":\"sufficient\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getBalance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/cesar/master/master-rcc/truffle/contracts/MetaCoin.sol\":\"MetaCoin\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/cesar/master/master-rcc/truffle/contracts/ConvertLib.sol\":{\"keccak256\":\"0x9f8249ffc0dee02477303cf8203490724bb1b4fa95529f57f045b050224f9f3f\",\"urls\":[\"bzzr://ec0c118542cc54ddb3becb123dd560e936da71468f994b39361c5a83c2e48aef\"]},\"/home/cesar/master/master-rcc/truffle/contracts/MetaCoin.sol\":{\"keccak256\":\"0x58a7063f80afdaa3eddf361e61b30df1d89db41906c152e665795080b0e45ff5\",\"urls\":[\"bzzr://ed518afced0296d8334abee42a303cd6120edfacb9c3ee019fbebfa390267fba\"]}},\"version\":1}","bytecode":"0x608060405234801561001057600080fd5b506127106000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103cd806100656000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637bd703e81461004657806390b98a111461009e578063f8b2cb4f14610104575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061015c565b6040518082815260200191505060405180910390f35b6100ea600480360360408110156100b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610200565b604051808215151515815260200191505060405180910390f35b6101466004803603602081101561011a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610359565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61018184610359565b60026040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b1580156101be57600080fd5b505af41580156101d2573d6000803e3d6000fd5b505050506040513d60208110156101e857600080fd5b81019080805190602001909291905050509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102515760009050610353565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea165627a7a72305820f52189076061e0bdbaba6b3b0a07f1ed34761d1d0501f7fece63b6d061440cf10029","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100415760003560e01c80637bd703e81461004657806390b98a111461009e578063f8b2cb4f14610104575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061015c565b6040518082815260200191505060405180910390f35b6100ea600480360360408110156100b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610200565b604051808215151515815260200191505060405180910390f35b6101466004803603602081101561011a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610359565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61018184610359565b60026040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b1580156101be57600080fd5b505af41580156101d2573d6000803e3d6000fd5b505050506040513d60208110156101e857600080fd5b81019080805190602001909291905050509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102515760009050610353565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea165627a7a72305820f52189076061e0bdbaba6b3b0a07f1ed34761d1d0501f7fece63b6d061440cf10029","sourceMap":"315:674:1:-;;;452:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;452:56:1;499:5;477:8;:19;486:9;477:19;;;;;;;;;;;;;;;:27;;;;315:674;;;;;;","deployedSourceMap":"315:674:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;315:674:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;778:117;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;778:117:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;511:264;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;511:264:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;898:89;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;898:89:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;778:117;837:4;853:10;:18;872:16;883:4;872:10;:16::i;:::-;889:1;853:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;853:38:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;853:38:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;853:38:1;;;;;;;;;;;;;;;;846:45;;778:117;;;:::o;511:264::-;575:15;623:6;600:8;:20;609:10;600:20;;;;;;;;;;;;;;;;:29;596:47;;;638:5;631:12;;;;596:47;671:6;647:8;:20;656:10;647:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;703:6;681:8;:18;690:8;681:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;739:8;718:38;;727:10;718:38;;;749:6;718:38;;;;;;;;;;;;;;;;;;767:4;760:11;;511:264;;;;;:::o;898:89::-;952:4;969:8;:14;978:4;969:14;;;;;;;;;;;;;;;;962:21;;898:89;;;:::o","source":"pragma solidity ^0.5.0;\n\nimport \"./ConvertLib.sol\";\n\n// This is just a simple example of a coin-like contract.\n// It is not standards compatible and cannot be expected to talk to other\n// coin/token contracts. If you want to create a standards-compliant\n// token, see: https://github.com/ConsenSys/Tokens. Cheers!\n\ncontract MetaCoin {\n\tmapping (address => uint) balances;\n\n\tevent Transfer(address indexed _from, address indexed _to, uint256 _value);\n\n\tconstructor() public {\n\t\tbalances[tx.origin] = 10000;\n\t}\n\n\tfunction sendCoin(address receiver, uint amount) public returns(bool sufficient) {\n\t\tif (balances[msg.sender] < amount) return false;\n\t\tbalances[msg.sender] -= amount;\n\t\tbalances[receiver] += amount;\n\t\temit Transfer(msg.sender, receiver, amount);\n\t\treturn true;\n\t}\n\n\tfunction getBalanceInEth(address addr) public view returns(uint){\n\t\treturn ConvertLib.convert(getBalance(addr),2);\n\t}\n\n\tfunction getBalance(address addr) public view returns(uint) {\n\t\treturn balances[addr];\n\t}\n}\n","sourcePath":"/home/cesar/master/master-rcc/truffle/contracts/MetaCoin.sol","ast":{"absolutePath":"/home/cesar/master/master-rcc/truffle/contracts/MetaCoin.sol","exportedSymbols":{"MetaCoin":[112]},"id":113,"nodeType":"SourceUnit","nodes":[{"id":18,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:1"},{"absolutePath":"/home/cesar/master/master-rcc/truffle/contracts/ConvertLib.sol","file":"./ConvertLib.sol","id":19,"nodeType":"ImportDirective","scope":113,"sourceUnit":17,"src":"25:26:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":112,"linearizedBaseContracts":[112],"name":"MetaCoin","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":23,"name":"balances","nodeType":"VariableDeclaration","scope":112,"src":"336:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":22,"keyType":{"id":20,"name":"address","nodeType":"ElementaryTypeName","src":"345:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"336:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":21,"name":"uint","nodeType":"ElementaryTypeName","src":"356:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"anonymous":false,"documentation":null,"id":31,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":30,"nodeType":"ParameterList","parameters":[{"constant":false,"id":25,"indexed":true,"name":"_from","nodeType":"VariableDeclaration","scope":31,"src":"389:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"389:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":27,"indexed":true,"name":"_to","nodeType":"VariableDeclaration","scope":31,"src":"412:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":26,"name":"address","nodeType":"ElementaryTypeName","src":"412:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":29,"indexed":false,"name":"_value","nodeType":"VariableDeclaration","scope":31,"src":"433:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":28,"name":"uint256","nodeType":"ElementaryTypeName","src":"433:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"388:60:1"},"src":"374:75:1"},{"body":{"id":41,"nodeType":"Block","src":"473:35:1","statements":[{"expression":{"argumentTypes":null,"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":34,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"477:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":37,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":35,"name":"tx","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1039,"src":"486:2:1","typeDescriptions":{"typeIdentifier":"t_magic_transaction","typeString":"tx"}},"id":36,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"origin","nodeType":"MemberAccess","referencedDeclaration":null,"src":"486:9:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"477:19:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"3130303030","id":38,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"499:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10000_by_1","typeString":"int_const 10000"},"value":"10000"},"src":"477:27:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":40,"nodeType":"ExpressionStatement","src":"477:27:1"}]},"documentation":null,"id":42,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":32,"nodeType":"ParameterList","parameters":[],"src":"463:2:1"},"returnParameters":{"id":33,"nodeType":"ParameterList","parameters":[],"src":"473:0:1"},"scope":112,"src":"452:56:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"592:183:1","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":56,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":51,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"600:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":54,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":52,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1027,"src":"609:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"609:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"600:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"id":55,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"623:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"600:29:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":59,"nodeType":"IfStatement","src":"596:47:1","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":57,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"638:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":50,"id":58,"nodeType":"Return","src":"631:12:1"}},{"expression":{"argumentTypes":null,"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":60,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"647:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":63,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":61,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1027,"src":"656:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":62,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"656:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"647:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":64,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"671:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"647:30:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":66,"nodeType":"ExpressionStatement","src":"647:30:1"},{"expression":{"argumentTypes":null,"id":71,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":67,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"681:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":69,"indexExpression":{"argumentTypes":null,"id":68,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"690:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"681:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":70,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"703:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"681:28:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":72,"nodeType":"ExpressionStatement","src":"681:28:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":74,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1027,"src":"727:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":75,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"727:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":76,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"739:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":77,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"749:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":73,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":31,"src":"718:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"718:38:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"EmitStatement","src":"713:43:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":80,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"767:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":50,"id":81,"nodeType":"Return","src":"760:11:1"}]},"documentation":null,"id":83,"implemented":true,"kind":"function","modifiers":[],"name":"sendCoin","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":44,"name":"receiver","nodeType":"VariableDeclaration","scope":83,"src":"529:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"529:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":46,"name":"amount","nodeType":"VariableDeclaration","scope":83,"src":"547:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"547:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"528:31:1"},"returnParameters":{"id":50,"nodeType":"ParameterList","parameters":[{"constant":false,"id":49,"name":"sufficient","nodeType":"VariableDeclaration","scope":83,"src":"575:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":48,"name":"bool","nodeType":"ElementaryTypeName","src":"575:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"574:17:1"},"scope":112,"src":"511:264:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":98,"nodeType":"Block","src":"842:53:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":93,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":85,"src":"883:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":92,"name":"getBalance","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":111,"src":"872:10:1","typeDescriptions":{"typeIdentifier":"t_function_internal_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view returns (uint256)"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"872:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"32","id":95,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"889:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"},"value":"2"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"expression":{"argumentTypes":null,"id":90,"name":"ConvertLib","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":16,"src":"853:10:1","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ConvertLib_$16_$","typeString":"type(library ConvertLib)"}},"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"convert","nodeType":"MemberAccess","referencedDeclaration":15,"src":"853:18:1","typeDescriptions":{"typeIdentifier":"t_function_delegatecall_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":96,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"853:38:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":89,"id":97,"nodeType":"Return","src":"846:45:1"}]},"documentation":null,"id":99,"implemented":true,"kind":"function","modifiers":[],"name":"getBalanceInEth","nodeType":"FunctionDefinition","parameters":{"id":86,"nodeType":"ParameterList","parameters":[{"constant":false,"id":85,"name":"addr","nodeType":"VariableDeclaration","scope":99,"src":"803:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":84,"name":"address","nodeType":"ElementaryTypeName","src":"803:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"802:14:1"},"returnParameters":{"id":89,"nodeType":"ParameterList","parameters":[{"constant":false,"id":88,"name":"","nodeType":"VariableDeclaration","scope":99,"src":"837:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"837:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"836:6:1"},"scope":112,"src":"778:117:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":110,"nodeType":"Block","src":"958:29:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":106,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"969:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":108,"indexExpression":{"argumentTypes":null,"id":107,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":101,"src":"978:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"969:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":105,"id":109,"nodeType":"Return","src":"962:21:1"}]},"documentation":null,"id":111,"implemented":true,"kind":"function","modifiers":[],"name":"getBalance","nodeType":"FunctionDefinition","parameters":{"id":102,"nodeType":"ParameterList","parameters":[{"constant":false,"id":101,"name":"addr","nodeType":"VariableDeclaration","scope":111,"src":"918:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":100,"name":"address","nodeType":"ElementaryTypeName","src":"918:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"917:14:1"},"returnParameters":{"id":105,"nodeType":"ParameterList","parameters":[{"constant":false,"id":104,"name":"","nodeType":"VariableDeclaration","scope":111,"src":"952:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":103,"name":"uint","nodeType":"ElementaryTypeName","src":"952:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"951:6:1"},"scope":112,"src":"898:89:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":113,"src":"315:674:1"}],"src":"0:990:1"},"legacyAST":{"absolutePath":"/home/cesar/master/master-rcc/truffle/contracts/MetaCoin.sol","exportedSymbols":{"MetaCoin":[112]},"id":113,"nodeType":"SourceUnit","nodes":[{"id":18,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:1"},{"absolutePath":"/home/cesar/master/master-rcc/truffle/contracts/ConvertLib.sol","file":"./ConvertLib.sol","id":19,"nodeType":"ImportDirective","scope":113,"sourceUnit":17,"src":"25:26:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":112,"linearizedBaseContracts":[112],"name":"MetaCoin","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":23,"name":"balances","nodeType":"VariableDeclaration","scope":112,"src":"336:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":22,"keyType":{"id":20,"name":"address","nodeType":"ElementaryTypeName","src":"345:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"336:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":21,"name":"uint","nodeType":"ElementaryTypeName","src":"356:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"anonymous":false,"documentation":null,"id":31,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":30,"nodeType":"ParameterList","parameters":[{"constant":false,"id":25,"indexed":true,"name":"_from","nodeType":"VariableDeclaration","scope":31,"src":"389:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"389:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":27,"indexed":true,"name":"_to","nodeType":"VariableDeclaration","scope":31,"src":"412:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":26,"name":"address","nodeType":"ElementaryTypeName","src":"412:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":29,"indexed":false,"name":"_value","nodeType":"VariableDeclaration","scope":31,"src":"433:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":28,"name":"uint256","nodeType":"ElementaryTypeName","src":"433:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"388:60:1"},"src":"374:75:1"},{"body":{"id":41,"nodeType":"Block","src":"473:35:1","statements":[{"expression":{"argumentTypes":null,"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":34,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"477:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":37,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":35,"name":"tx","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1039,"src":"486:2:1","typeDescriptions":{"typeIdentifier":"t_magic_transaction","typeString":"tx"}},"id":36,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"origin","nodeType":"MemberAccess","referencedDeclaration":null,"src":"486:9:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"477:19:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"3130303030","id":38,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"499:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10000_by_1","typeString":"int_const 10000"},"value":"10000"},"src":"477:27:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":40,"nodeType":"ExpressionStatement","src":"477:27:1"}]},"documentation":null,"id":42,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":32,"nodeType":"ParameterList","parameters":[],"src":"463:2:1"},"returnParameters":{"id":33,"nodeType":"ParameterList","parameters":[],"src":"473:0:1"},"scope":112,"src":"452:56:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"592:183:1","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":56,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":51,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"600:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":54,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":52,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1027,"src":"609:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"609:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"600:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"id":55,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"623:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"600:29:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":59,"nodeType":"IfStatement","src":"596:47:1","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":57,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"638:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":50,"id":58,"nodeType":"Return","src":"631:12:1"}},{"expression":{"argumentTypes":null,"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":60,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"647:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":63,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":61,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1027,"src":"656:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":62,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"656:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"647:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":64,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"671:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"647:30:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":66,"nodeType":"ExpressionStatement","src":"647:30:1"},{"expression":{"argumentTypes":null,"id":71,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":67,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"681:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":69,"indexExpression":{"argumentTypes":null,"id":68,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"690:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"681:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":70,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"703:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"681:28:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":72,"nodeType":"ExpressionStatement","src":"681:28:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":74,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1027,"src":"727:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":75,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"727:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":76,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"739:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":77,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"749:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":73,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":31,"src":"718:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"718:38:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"EmitStatement","src":"713:43:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":80,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"767:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":50,"id":81,"nodeType":"Return","src":"760:11:1"}]},"documentation":null,"id":83,"implemented":true,"kind":"function","modifiers":[],"name":"sendCoin","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":44,"name":"receiver","nodeType":"VariableDeclaration","scope":83,"src":"529:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"529:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":46,"name":"amount","nodeType":"VariableDeclaration","scope":83,"src":"547:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"547:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"528:31:1"},"returnParameters":{"id":50,"nodeType":"ParameterList","parameters":[{"constant":false,"id":49,"name":"sufficient","nodeType":"VariableDeclaration","scope":83,"src":"575:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":48,"name":"bool","nodeType":"ElementaryTypeName","src":"575:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"574:17:1"},"scope":112,"src":"511:264:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":98,"nodeType":"Block","src":"842:53:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":93,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":85,"src":"883:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":92,"name":"getBalance","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":111,"src":"872:10:1","typeDescriptions":{"typeIdentifier":"t_function_internal_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view returns (uint256)"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"872:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"32","id":95,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"889:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"},"value":"2"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"expression":{"argumentTypes":null,"id":90,"name":"ConvertLib","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":16,"src":"853:10:1","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ConvertLib_$16_$","typeString":"type(library ConvertLib)"}},"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"convert","nodeType":"MemberAccess","referencedDeclaration":15,"src":"853:18:1","typeDescriptions":{"typeIdentifier":"t_function_delegatecall_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":96,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"853:38:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":89,"id":97,"nodeType":"Return","src":"846:45:1"}]},"documentation":null,"id":99,"implemented":true,"kind":"function","modifiers":[],"name":"getBalanceInEth","nodeType":"FunctionDefinition","parameters":{"id":86,"nodeType":"ParameterList","parameters":[{"constant":false,"id":85,"name":"addr","nodeType":"VariableDeclaration","scope":99,"src":"803:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":84,"name":"address","nodeType":"ElementaryTypeName","src":"803:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"802:14:1"},"returnParameters":{"id":89,"nodeType":"ParameterList","parameters":[{"constant":false,"id":88,"name":"","nodeType":"VariableDeclaration","scope":99,"src":"837:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"837:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"836:6:1"},"scope":112,"src":"778:117:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":110,"nodeType":"Block","src":"958:29:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":106,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"969:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":108,"indexExpression":{"argumentTypes":null,"id":107,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":101,"src":"978:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"969:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":105,"id":109,"nodeType":"Return","src":"962:21:1"}]},"documentation":null,"id":111,"implemented":true,"kind":"function","modifiers":[],"name":"getBalance","nodeType":"FunctionDefinition","parameters":{"id":102,"nodeType":"ParameterList","parameters":[{"constant":false,"id":101,"name":"addr","nodeType":"VariableDeclaration","scope":111,"src":"918:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":100,"name":"address","nodeType":"ElementaryTypeName","src":"918:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"917:14:1"},"returnParameters":{"id":105,"nodeType":"ParameterList","parameters":[{"constant":false,"id":104,"name":"","nodeType":"VariableDeclaration","scope":111,"src":"952:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":103,"name":"uint","nodeType":"ElementaryTypeName","src":"952:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"951:6:1"},"scope":112,"src":"898:89:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":113,"src":"315:674:1"}],"src":"0:990:1"},"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{"5777":{"events":{"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"}},"links":{"ConvertLib":"0x7f917F5bf34da4Dc2DfcE1A790cf09dCF3199Fa8"},"address":"0xdD272f3bd6cC59F727CE2C85Bf3adDb62D4Bced2","transactionHash":"0x46426e2466c2cf8985238644f4ddf52e628d4441863d15eb752d4f855c368c0f"}},"schemaVersion":"3.0.13","updatedAt":"2019-08-26T16:14:55.781Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "../truffle/build/contracts/RCC.json":
/*!*******************************************!*\
  !*** ../truffle/build/contracts/RCC.json ***!
  \*******************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"RCC","abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"activate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"metadata":"{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"activate\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"sender\",\"type\":\"address\"},{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"INITIAL_SUPPLY\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"recipient\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isMinter\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See `IERC20.allowance`.\"},\"approve(address,uint256)\":{\"details\":\"See `IERC20.approve`.     * Requirements:     * - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See `IERC20.balanceOf`.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.\"},\"mint(address,uint256)\":{\"details\":\"See `ERC20._mint`.     * Requirements:     * - the caller must have the `MinterRole`.\"},\"totalSupply()\":{\"details\":\"See `IERC20.totalSupply`.\"},\"transfer(address,uint256)\":{\"details\":\"See `IERC20.transfer`.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See `IERC20.transferFrom`.     * Emits an `Approval` event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of `ERC20`;     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `value`. - the caller must have allowance for `sender`'s tokens of at least `amount`.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/cesar/master/master-rcc/truffle/contracts/RCC.sol\":\"RCC\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/cesar/master/master-rcc/truffle/contracts/RCC.sol\":{\"keccak256\":\"0x0e237c55d7e70fb872603cf782ee1e8198d401f0335c51ce0dd6af050610b007\",\"urls\":[\"bzzr://7915bbb74a482b8a61110ca78dc305428eb56384374da540ab40d838c545501b\"]},\"openzeppelin-solidity/contracts/access/Roles.sol\":{\"keccak256\":\"0xb002c378d7b82a101bd659c341518953ca0919d342c0a400196982c0e7e7bcdb\",\"urls\":[\"bzzr://bd34c1ce05b5b2b3a62fc02e160f6805b1cadd476854664f433c685b2fda8dad\"]},\"openzeppelin-solidity/contracts/access/roles/MinterRole.sol\":{\"keccak256\":\"0x63da54a7a5d4e4d82ac8d1f4f7f995fd8ef2b5fe1f2960b83e534fa37fb60910\",\"urls\":[\"bzzr://cea53b805426e40efadb24f2613aca39182462e9ecd23fde7aacf0c4b5885aaf\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x4ccf2d7b51873db1ccfd54ca2adae5eac3b184f9699911ed4490438419f1c690\",\"urls\":[\"bzzr://1604f5b6d6e916c154efd8c6720cda069e5ba32dfa0a9dedf2b42e5b02d07f89\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x852793a3c2f86d336a683b30d688ec3dcfc57451af5a2bf5975cda3b7191a901\",\"urls\":[\"bzzr://07fb42206812a17c1f71e548cfa5cec6f9aa1ae0ca5df870718ca4aa9759d1a5\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol\":{\"keccak256\":\"0x6df8d686813b2875e99928ecd07bf8ee6d7473bc6a95eb1190e8fdba86beda76\",\"urls\":[\"bzzr://b4a3a1136392be8723a0d9627d1626323e3891c98e88ca5ab48da1dada375580\"]},\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x90e8c2521653bbb1768b05889c5760031e688d9cd361f167489b89215e201b95\",\"urls\":[\"bzzr://aa8b45b57edafc3d67bc5d916327ea16807fae33f753ca163ae0c4061b789766\"]}},\"version\":1}","bytecode":"0x60806040526040518060400160405280600e81526020017f52656379636c696e6720436f696e0000000000000000000000000000000000008152506004908051906020019062000051929190620005d0565b506040518060400160405280600381526020017f5243430000000000000000000000000000000000000000000000000000000000815250600590805190602001906200009f929190620005d0565b506004600660006101000a81548160ff021916908360ff160217905550620f4240600755348015620000d057600080fd5b50620000e2336200015860201b60201c565b620000f633600754620001b960201b60201c565b6000600860006101000a81548160ff02191690831515021790555033600860016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200067f565b620001738160036200038360201b6200159c1790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200025d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b62000279816002546200046760201b620011c71790919060201c565b600281905550620002d7816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200046760201b620011c71790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b620003958282620004f060201b60201c565b1562000409576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080828401905083811015620004e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000579576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018062001ef06022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200061357805160ff191683800117855562000644565b8280016001018555821562000644579182015b828111156200064357825182559160200191906001019062000626565b5b50905062000653919062000657565b5090565b6200067c91905b80821115620006785760008160009055506001016200065e565b5090565b90565b611861806200068f6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806340c10f19116100a25780639865027511610071578063986502751461050e578063a457c2d714610518578063a9059cbb1461057e578063aa271e1a146105e4578063dd62ed3e146106405761010b565b806340c10f191461038957806370a08231146103ef57806395d89b4114610447578063983b2d56146104ca5761010b565b806323b872dd116100de57806323b872dd1461025b5780632ff2e9dc146102e1578063313ce567146102ff57806339509351146103235761010b565b806306fdde0314610110578063095ea7b31461019357806318160ddd146101f95780631c5a9d9c14610217575b600080fd5b6101186106b8565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561015857808201518184015260208101905061013d565b50505050905090810190601f1680156101855780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101df600480360360408110156101a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610756565b604051808215151515815260200191505060405180910390f35b61020161076d565b6040518082815260200191505060405180910390f35b6102596004803603602081101561022d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610777565b005b6102c76004803603606081101561027157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061080d565b604051808215151515815260200191505060405180910390f35b6102e96108be565b6040518082815260200191505060405180910390f35b6103076108c4565b604051808260ff1660ff16815260200191505060405180910390f35b61036f6004803603604081101561033957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108d7565b604051808215151515815260200191505060405180910390f35b6103d56004803603604081101561039f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061097c565b604051808215151515815260200191505060405180910390f35b6104316004803603602081101561040557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f0565b6040518082815260200191505060405180910390f35b61044f610a38565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561048f578082015181840152602081019050610474565b50505050905090810190601f1680156104bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61050c600480360360208110156104e057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ad6565b005b610516610b40565b005b6105646004803603604081101561052e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b4b565b604051808215151515815260200191505060405180910390f35b6105ca6004803603604081101561059457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bf0565b604051808215151515815260200191505060405180910390f35b610626600480360360208110156105fa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c07565b604051808215151515815260200191505060405180910390f35b6106a26004803603604081101561065657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c24565b6040518082815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561074e5780601f106107235761010080835404028352916020019161074e565b820191906000526020600020905b81548152906001019060200180831161073157829003601f168201915b505050505081565b6000610763338484610cab565b6001905092915050565b6000600254905090565b3373ffffffffffffffffffffffffffffffffffffffff16600860019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107d157600080fd5b600860009054906101000a900460ff1661080a576107ee81610ad6565b6001600860006101000a81548160ff0219169083151502179055505b50565b600061081a848484610ea2565b6108b384336108ae85600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461113e90919063ffffffff16565b610cab565b600190509392505050565b60075481565b600660009054906101000a900460ff1681565b6000610972338461096d85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111c790919063ffffffff16565b610cab565b6001905092915050565b600061098733610c07565b6109dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061177a6030913960400191505060405180910390fd5b6109e6838361124f565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ace5780601f10610aa357610100808354040283529160200191610ace565b820191906000526020600020905b815481529060010190602001808311610ab157829003601f168201915b505050505081565b610adf33610c07565b610b34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061177a6030913960400191505060405180910390fd5b610b3d8161140a565b50565b610b4933611464565b565b6000610be63384610be185600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461113e90919063ffffffff16565b610cab565b6001905092915050565b6000610bfd338484610ea2565b6001905092915050565b6000610c1d8260036114be90919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d31576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806118126024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610db7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117586022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f28576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806117ed6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806117356023913960400191505060405180910390fd5b610fff816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461113e90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611092816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111c790919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000828211156111b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b600080828401905083811015611245576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611307816002546111c790919063ffffffff16565b60028190555061135e816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111c790919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b61141e81600361159c90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b61147881600361167790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611545576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117cb6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6115a682826114be565b15611619576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61168182826114be565b6116d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806117aa6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a723058202af9507749e173c67d99266aa46f5baa8b25b153cd25df52779ef4d29405c9730029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061010b5760003560e01c806340c10f19116100a25780639865027511610071578063986502751461050e578063a457c2d714610518578063a9059cbb1461057e578063aa271e1a146105e4578063dd62ed3e146106405761010b565b806340c10f191461038957806370a08231146103ef57806395d89b4114610447578063983b2d56146104ca5761010b565b806323b872dd116100de57806323b872dd1461025b5780632ff2e9dc146102e1578063313ce567146102ff57806339509351146103235761010b565b806306fdde0314610110578063095ea7b31461019357806318160ddd146101f95780631c5a9d9c14610217575b600080fd5b6101186106b8565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561015857808201518184015260208101905061013d565b50505050905090810190601f1680156101855780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101df600480360360408110156101a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610756565b604051808215151515815260200191505060405180910390f35b61020161076d565b6040518082815260200191505060405180910390f35b6102596004803603602081101561022d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610777565b005b6102c76004803603606081101561027157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061080d565b604051808215151515815260200191505060405180910390f35b6102e96108be565b6040518082815260200191505060405180910390f35b6103076108c4565b604051808260ff1660ff16815260200191505060405180910390f35b61036f6004803603604081101561033957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108d7565b604051808215151515815260200191505060405180910390f35b6103d56004803603604081101561039f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061097c565b604051808215151515815260200191505060405180910390f35b6104316004803603602081101561040557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f0565b6040518082815260200191505060405180910390f35b61044f610a38565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561048f578082015181840152602081019050610474565b50505050905090810190601f1680156104bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61050c600480360360208110156104e057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ad6565b005b610516610b40565b005b6105646004803603604081101561052e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b4b565b604051808215151515815260200191505060405180910390f35b6105ca6004803603604081101561059457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bf0565b604051808215151515815260200191505060405180910390f35b610626600480360360208110156105fa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c07565b604051808215151515815260200191505060405180910390f35b6106a26004803603604081101561065657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c24565b6040518082815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561074e5780601f106107235761010080835404028352916020019161074e565b820191906000526020600020905b81548152906001019060200180831161073157829003601f168201915b505050505081565b6000610763338484610cab565b6001905092915050565b6000600254905090565b3373ffffffffffffffffffffffffffffffffffffffff16600860019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107d157600080fd5b600860009054906101000a900460ff1661080a576107ee81610ad6565b6001600860006101000a81548160ff0219169083151502179055505b50565b600061081a848484610ea2565b6108b384336108ae85600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461113e90919063ffffffff16565b610cab565b600190509392505050565b60075481565b600660009054906101000a900460ff1681565b6000610972338461096d85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111c790919063ffffffff16565b610cab565b6001905092915050565b600061098733610c07565b6109dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061177a6030913960400191505060405180910390fd5b6109e6838361124f565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ace5780601f10610aa357610100808354040283529160200191610ace565b820191906000526020600020905b815481529060010190602001808311610ab157829003601f168201915b505050505081565b610adf33610c07565b610b34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061177a6030913960400191505060405180910390fd5b610b3d8161140a565b50565b610b4933611464565b565b6000610be63384610be185600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461113e90919063ffffffff16565b610cab565b6001905092915050565b6000610bfd338484610ea2565b6001905092915050565b6000610c1d8260036114be90919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d31576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806118126024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610db7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117586022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f28576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806117ed6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806117356023913960400191505060405180910390fd5b610fff816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461113e90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611092816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111c790919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000828211156111b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b600080828401905083811015611245576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611307816002546111c790919063ffffffff16565b60028190555061135e816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111c790919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b61141e81600361159c90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b61147881600361167790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611545576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117cb6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6115a682826114be565b15611619576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61168182826114be565b6116d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806117aa6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a723058202af9507749e173c67d99266aa46f5baa8b25b153cd25df52779ef4d29405c9730029","sourceMap":"162:577:3:-;;;204:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;244:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;299:1;275:25;;;;;;;;;;;;;;;;;;;;332:7;303:36;;455:111;8:9:-1;5:2;;;30:1;27;20:12;5:2;455:111:3;275:22:6;286:10;275;;;:22;;:::i;:::-;481:33:3;487:10;499:14;;481:5;;;:33;;:::i;:::-;531:5;519:9;;:17;;;;;;;;;;;;;;;;;;552:10;544:5;;:18;;;;;;;;;;;;;;;;;;162:577;;737:119:6;793:21;806:7;793:8;:12;;;;;;:21;;;;:::i;:::-;841:7;829:20;;;;;;;;;;;;737:119;:::o;5771:302:8:-;5865:1;5846:21;;:7;:21;;;;5838:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5929:24;5946:6;5929:12;;:16;;;;;;:24;;;;:::i;:::-;5914:12;:39;;;;5984:30;6007:6;5984:9;:18;5994:7;5984:18;;;;;;;;;;;;;;;;:22;;;;;;:30;;;;:::i;:::-;5963:9;:18;5973:7;5963:18;;;;;;;;;;;;;;;:51;;;;6050:7;6029:37;;6046:1;6029:37;;;6059:6;6029:37;;;;;;;;;;;;;;;;;;5771:302;;:::o;260:175:5:-;337:18;341:4;347:7;337:3;;;:18;;:::i;:::-;336:19;328:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:4;401;:11;;:20;413:7;401:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;260:175;;:::o;834:176:7:-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;779:200:5:-;851:4;894:1;875:21;;:7;:21;;;;867:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;952:4;:11;;:20;964:7;952:20;;;;;;;;;;;;;;;;;;;;;;;;;945:27;;779:200;;;;:::o;162:577:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"162:577:3:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;162:577:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;204:37;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;204:37:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2453:145:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2453:145:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1514:89;;;:::i;:::-;;;;;;;;;;;;;;;;;;;569:166:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;569:166:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;3055:252:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3055:252:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;303:36:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;275:25;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3702:203:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3702:203:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;502:140:9;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;502:140:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1661:108:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1661:108:8;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;244:28:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;244:28:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;560:90:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;560:90:6;;;;;;;;;;;;;;;;;;;:::i;:::-;;656:75;;;:::i;:::-;;4392:213:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4392:213:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1972:153;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1972:153:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;447:107:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;447:107:6;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2183:132:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2183:132:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;204:37:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2453:145:8:-;2518:4;2534:36;2543:10;2555:7;2564:5;2534:8;:36::i;:::-;2587:4;2580:11;;2453:145;;;;:::o;1514:89::-;1558:7;1584:12;;1577:19;;1514:89;:::o;569:166:3:-;424:10;415:19;;:5;;;;;;;;;;;:19;;;407:28;;;;;;638:9;;;;;;;;;;;633:96;;669:19;679:8;669:9;:19::i;:::-;714:4;702:9;;:16;;;;;;;;;;;;;;;;;;633:96;569:166;:::o;3055:252:8:-;3144:4;3160:36;3170:6;3178:9;3189:6;3160:9;:36::i;:::-;3206:73;3215:6;3223:10;3235:43;3271:6;3235:11;:19;3247:6;3235:19;;;;;;;;;;;;;;;:31;3255:10;3235:31;;;;;;;;;;;;;;;;:35;;:43;;;;:::i;:::-;3206:8;:73::i;:::-;3296:4;3289:11;;3055:252;;;;;:::o;303:36:3:-;;;;:::o;275:25::-;;;;;;;;;;;;;:::o;3702:203:8:-;3782:4;3798:79;3807:10;3819:7;3828:48;3865:10;3828:11;:23;3840:10;3828:23;;;;;;;;;;;;;;;:32;3852:7;3828:32;;;;;;;;;;;;;;;;:36;;:48;;;;:::i;:::-;3798:8;:79::i;:::-;3894:4;3887:11;;3702:203;;;;:::o;502:140:9:-;576:4;350:20:6;359:10;350:8;:20::i;:::-;342:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;592:22:9;598:7;607:6;592:5;:22::i;:::-;631:4;624:11;;502:140;;;;:::o;1661:108:8:-;1718:7;1744:9;:18;1754:7;1744:18;;;;;;;;;;;;;;;;1737:25;;1661:108;;;:::o;244:28:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;560:90:6:-;350:20;359:10;350:8;:20::i;:::-;342:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;624:19;635:7;624:10;:19::i;:::-;560:90;:::o;656:75::-;699:25;713:10;699:13;:25::i;:::-;656:75::o;4392:213:8:-;4477:4;4493:84;4502:10;4514:7;4523:53;4560:15;4523:11;:23;4535:10;4523:23;;;;;;;;;;;;;;;:32;4547:7;4523:32;;;;;;;;;;;;;;;;:36;;:53;;;;:::i;:::-;4493:8;:84::i;:::-;4594:4;4587:11;;4392:213;;;;:::o;1972:153::-;2041:4;2057:40;2067:10;2079:9;2090:6;2057:9;:40::i;:::-;2114:4;2107:11;;1972:153;;;;:::o;447:107:6:-;503:4;526:21;539:7;526:8;:12;;:21;;;;:::i;:::-;519:28;;447:107;;;:::o;2183:132:8:-;2255:7;2281:11;:18;2293:5;2281:18;;;;;;;;;;;;;;;:27;2300:7;2281:27;;;;;;;;;;;;;;;;2274:34;;2183:132;;;;:::o;7117:329::-;7226:1;7209:19;;:5;:19;;;;7201:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7306:1;7287:21;;:7;:21;;;;7279:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7388:5;7358:11;:18;7370:5;7358:18;;;;;;;;;;;;;;;:27;7377:7;7358:27;;;;;;;;;;;;;;;:35;;;;7424:7;7408:31;;7417:5;7408:31;;;7433:5;7408:31;;;;;;;;;;;;;;;;;;7117:329;;;:::o;5079:422::-;5194:1;5176:20;;:6;:20;;;;5168:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5277:1;5256:23;;:9;:23;;;;5248:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5350:29;5372:6;5350:9;:17;5360:6;5350:17;;;;;;;;;;;;;;;;:21;;:29;;;;:::i;:::-;5330:9;:17;5340:6;5330:17;;;;;;;;;;;;;;;:49;;;;5412:32;5437:6;5412:9;:20;5422:9;5412:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;5389:9;:20;5399:9;5389:20;;;;;;;;;;;;;;;:55;;;;5476:9;5459:35;;5468:6;5459:35;;;5487:6;5459:35;;;;;;;;;;;;;;;;;;5079:422;;;:::o;1274:179:7:-;1332:7;1364:1;1359;:6;;1351:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1410:9;1426:1;1422;:5;1410:17;;1445:1;1438:8;;;1274:179;;;;:::o;834:176::-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;5771:302:8:-;5865:1;5846:21;;:7;:21;;;;5838:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5929:24;5946:6;5929:12;;:16;;:24;;;;:::i;:::-;5914:12;:39;;;;5984:30;6007:6;5984:9;:18;5994:7;5984:18;;;;;;;;;;;;;;;;:22;;:30;;;;:::i;:::-;5963:9;:18;5973:7;5963:18;;;;;;;;;;;;;;;:51;;;;6050:7;6029:37;;6046:1;6029:37;;;6059:6;6029:37;;;;;;;;;;;;;;;;;;5771:302;;:::o;737:119:6:-;793:21;806:7;793:8;:12;;:21;;;;:::i;:::-;841:7;829:20;;;;;;;;;;;;737:119;:::o;862:127::-;921:24;937:7;921:8;:15;;:24;;;;:::i;:::-;974:7;960:22;;;;;;;;;;;;862:127;:::o;779:200:5:-;851:4;894:1;875:21;;:7;:21;;;;867:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;952:4;:11;;:20;964:7;952:20;;;;;;;;;;;;;;;;;;;;;;;;;945:27;;779:200;;;;:::o;260:175::-;337:18;341:4;347:7;337:3;:18::i;:::-;336:19;328:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:4;401;:11;;:20;413:7;401:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;260:175;;:::o;510:180::-;589:18;593:4;599:7;589:3;:18::i;:::-;581:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;678:5;655:4;:11;;:20;667:7;655:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;510:180;;:::o","source":"pragma solidity ^0.5.1;\n\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol\";\n\ncontract RCC is ERC20, ERC20Mintable  {\n\n\tstring public name = \"Recycling Coin\";\n\tstring public symbol = \"RCC\";\n\tuint8 public decimals = 4;\n\tuint public INITIAL_SUPPLY = 1000000;\n\n\tbool _activate;\n\taddress owner;\n\n\t modifier onlyOwner {\n        require(owner == msg.sender);\n        _;\n    }\n\tconstructor() public {\n\t  _mint(msg.sender, INITIAL_SUPPLY);\n\t  _activate = false;   \n\t  owner = msg.sender;\n\t}\n\n\tfunction activate(address _address) onlyOwner public { \n        if (!_activate){       \n            addMinter(_address);\n            _activate = true;\n        }\n    }\n\n\n}","sourcePath":"/home/cesar/master/master-rcc/truffle/contracts/RCC.sol","ast":{"absolutePath":"/home/cesar/master/master-rcc/truffle/contracts/RCC.sol","exportedSymbols":{"RCC":[244]},"id":245,"nodeType":"SourceUnit","nodes":[{"id":171,"literals":["solidity","^","0.5",".1"],"nodeType":"PragmaDirective","src":"0:23:3"},{"absolutePath":"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol","file":"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol","id":172,"nodeType":"ImportDirective","scope":245,"sourceUnit":1238,"src":"25:63:3","symbolAliases":[],"unitAlias":""},{"absolutePath":"openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol","file":"openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol","id":173,"nodeType":"ImportDirective","scope":245,"sourceUnit":1266,"src":"89:71:3","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":174,"name":"ERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":1237,"src":"178:5:3","typeDescriptions":{"typeIdentifier":"t_contract$_ERC20_$1237","typeString":"contract ERC20"}},"id":175,"nodeType":"InheritanceSpecifier","src":"178:5:3"},{"arguments":null,"baseName":{"contractScope":null,"id":176,"name":"ERC20Mintable","nodeType":"UserDefinedTypeName","referencedDeclaration":1265,"src":"185:13:3","typeDescriptions":{"typeIdentifier":"t_contract$_ERC20Mintable_$1265","typeString":"contract ERC20Mintable"}},"id":177,"nodeType":"InheritanceSpecifier","src":"185:13:3"}],"contractDependencies":[707,1237,1265,1334],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":244,"linearizedBaseContracts":[244,1265,707,1237,1334],"name":"RCC","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":180,"name":"name","nodeType":"VariableDeclaration","scope":244,"src":"204:37:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":178,"name":"string","nodeType":"ElementaryTypeName","src":"204:6:3","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":{"argumentTypes":null,"hexValue":"52656379636c696e6720436f696e","id":179,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"225:16:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_412c88105bbfe74898ce694e945cf585624bc4bf02a2af6bc7186b0fd5f25598","typeString":"literal_string \"Recycling Coin\""},"value":"Recycling Coin"},"visibility":"public"},{"constant":false,"id":183,"name":"symbol","nodeType":"VariableDeclaration","scope":244,"src":"244:28:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":181,"name":"string","nodeType":"ElementaryTypeName","src":"244:6:3","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":{"argumentTypes":null,"hexValue":"524343","id":182,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"267:5:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_352c9c90ec54ea24541cbe65963af13956516a7b3efdbe04610b553e861a169b","typeString":"literal_string \"RCC\""},"value":"RCC"},"visibility":"public"},{"constant":false,"id":186,"name":"decimals","nodeType":"VariableDeclaration","scope":244,"src":"275:25:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"},"typeName":{"id":184,"name":"uint8","nodeType":"ElementaryTypeName","src":"275:5:3","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"value":{"argumentTypes":null,"hexValue":"34","id":185,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"299:1:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_4_by_1","typeString":"int_const 4"},"value":"4"},"visibility":"public"},{"constant":false,"id":189,"name":"INITIAL_SUPPLY","nodeType":"VariableDeclaration","scope":244,"src":"303:36:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":187,"name":"uint","nodeType":"ElementaryTypeName","src":"303:4:3","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"31303030303030","id":188,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"332:7:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1000000_by_1","typeString":"int_const 1000000"},"value":"1000000"},"visibility":"public"},{"constant":false,"id":191,"name":"_activate","nodeType":"VariableDeclaration","scope":244,"src":"343:14:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":190,"name":"bool","nodeType":"ElementaryTypeName","src":"343:4:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":193,"name":"owner","nodeType":"VariableDeclaration","scope":244,"src":"360:13:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":192,"name":"address","nodeType":"ElementaryTypeName","src":"360:7:3","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"body":{"id":203,"nodeType":"Block","src":"397:56:3","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":199,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":196,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":193,"src":"415:5:3","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":197,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1349,"src":"424:3:3","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":198,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"424:10:3","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"415:19:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":195,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1352,1353],"referencedDeclaration":1352,"src":"407:7:3","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":200,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"407:28:3","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":201,"nodeType":"ExpressionStatement","src":"407:28:3"},{"id":202,"nodeType":"PlaceholderStatement","src":"445:1:3"}]},"documentation":null,"id":204,"name":"onlyOwner","nodeType":"ModifierDefinition","parameters":{"id":194,"nodeType":"ParameterList","parameters":[],"src":"397:0:3"},"src":"378:75:3","visibility":"internal"},{"body":{"id":222,"nodeType":"Block","src":"476:90:3","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":208,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1349,"src":"487:3:3","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":209,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"487:10:3","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":210,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":189,"src":"499:14:3","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":207,"name":"_mint","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1123,"src":"481:5:3","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,uint256)"}},"id":211,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"481:33:3","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":212,"nodeType":"ExpressionStatement","src":"481:33:3"},{"expression":{"argumentTypes":null,"id":215,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":213,"name":"_activate","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"519:9:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"66616c7365","id":214,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"531:5:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"src":"519:17:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":216,"nodeType":"ExpressionStatement","src":"519:17:3"},{"expression":{"argumentTypes":null,"id":220,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":217,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":193,"src":"544:5:3","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":218,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1349,"src":"552:3:3","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":219,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"552:10:3","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"544:18:3","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":221,"nodeType":"ExpressionStatement","src":"544:18:3"}]},"documentation":null,"id":223,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":205,"nodeType":"ParameterList","parameters":[],"src":"466:2:3"},"returnParameters":{"id":206,"nodeType":"ParameterList","parameters":[],"src":"476:0:3"},"scope":244,"src":"455:111:3","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":242,"nodeType":"Block","src":"622:113:3","statements":[{"condition":{"argumentTypes":null,"id":231,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"637:10:3","subExpression":{"argumentTypes":null,"id":230,"name":"_activate","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"638:9:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":241,"nodeType":"IfStatement","src":"633:96:3","trueBody":{"id":240,"nodeType":"Block","src":"648:81:3","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":233,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":225,"src":"679:8:3","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":232,"name":"addMinter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":665,"src":"669:9:3","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":234,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"669:19:3","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":235,"nodeType":"ExpressionStatement","src":"669:19:3"},{"expression":{"argumentTypes":null,"id":238,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":236,"name":"_activate","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"702:9:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":237,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"714:4:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"702:16:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":239,"nodeType":"ExpressionStatement","src":"702:16:3"}]}}]},"documentation":null,"id":243,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":228,"modifierName":{"argumentTypes":null,"id":227,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":204,"src":"605:9:3","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"605:9:3"}],"name":"activate","nodeType":"FunctionDefinition","parameters":{"id":226,"nodeType":"ParameterList","parameters":[{"constant":false,"id":225,"name":"_address","nodeType":"VariableDeclaration","scope":243,"src":"587:16:3","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":224,"name":"address","nodeType":"ElementaryTypeName","src":"587:7:3","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"586:18:3"},"returnParameters":{"id":229,"nodeType":"ParameterList","parameters":[],"src":"622:0:3"},"scope":244,"src":"569:166:3","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":245,"src":"162:577:3"}],"src":"0:739:3"},"legacyAST":{"absolutePath":"/home/cesar/master/master-rcc/truffle/contracts/RCC.sol","exportedSymbols":{"RCC":[244]},"id":245,"nodeType":"SourceUnit","nodes":[{"id":171,"literals":["solidity","^","0.5",".1"],"nodeType":"PragmaDirective","src":"0:23:3"},{"absolutePath":"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol","file":"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol","id":172,"nodeType":"ImportDirective","scope":245,"sourceUnit":1238,"src":"25:63:3","symbolAliases":[],"unitAlias":""},{"absolutePath":"openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol","file":"openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol","id":173,"nodeType":"ImportDirective","scope":245,"sourceUnit":1266,"src":"89:71:3","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":174,"name":"ERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":1237,"src":"178:5:3","typeDescriptions":{"typeIdentifier":"t_contract$_ERC20_$1237","typeString":"contract ERC20"}},"id":175,"nodeType":"InheritanceSpecifier","src":"178:5:3"},{"arguments":null,"baseName":{"contractScope":null,"id":176,"name":"ERC20Mintable","nodeType":"UserDefinedTypeName","referencedDeclaration":1265,"src":"185:13:3","typeDescriptions":{"typeIdentifier":"t_contract$_ERC20Mintable_$1265","typeString":"contract ERC20Mintable"}},"id":177,"nodeType":"InheritanceSpecifier","src":"185:13:3"}],"contractDependencies":[707,1237,1265,1334],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":244,"linearizedBaseContracts":[244,1265,707,1237,1334],"name":"RCC","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":180,"name":"name","nodeType":"VariableDeclaration","scope":244,"src":"204:37:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":178,"name":"string","nodeType":"ElementaryTypeName","src":"204:6:3","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":{"argumentTypes":null,"hexValue":"52656379636c696e6720436f696e","id":179,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"225:16:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_412c88105bbfe74898ce694e945cf585624bc4bf02a2af6bc7186b0fd5f25598","typeString":"literal_string \"Recycling Coin\""},"value":"Recycling Coin"},"visibility":"public"},{"constant":false,"id":183,"name":"symbol","nodeType":"VariableDeclaration","scope":244,"src":"244:28:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":181,"name":"string","nodeType":"ElementaryTypeName","src":"244:6:3","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":{"argumentTypes":null,"hexValue":"524343","id":182,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"267:5:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_352c9c90ec54ea24541cbe65963af13956516a7b3efdbe04610b553e861a169b","typeString":"literal_string \"RCC\""},"value":"RCC"},"visibility":"public"},{"constant":false,"id":186,"name":"decimals","nodeType":"VariableDeclaration","scope":244,"src":"275:25:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"},"typeName":{"id":184,"name":"uint8","nodeType":"ElementaryTypeName","src":"275:5:3","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"value":{"argumentTypes":null,"hexValue":"34","id":185,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"299:1:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_4_by_1","typeString":"int_const 4"},"value":"4"},"visibility":"public"},{"constant":false,"id":189,"name":"INITIAL_SUPPLY","nodeType":"VariableDeclaration","scope":244,"src":"303:36:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":187,"name":"uint","nodeType":"ElementaryTypeName","src":"303:4:3","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"31303030303030","id":188,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"332:7:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1000000_by_1","typeString":"int_const 1000000"},"value":"1000000"},"visibility":"public"},{"constant":false,"id":191,"name":"_activate","nodeType":"VariableDeclaration","scope":244,"src":"343:14:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":190,"name":"bool","nodeType":"ElementaryTypeName","src":"343:4:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":193,"name":"owner","nodeType":"VariableDeclaration","scope":244,"src":"360:13:3","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":192,"name":"address","nodeType":"ElementaryTypeName","src":"360:7:3","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"body":{"id":203,"nodeType":"Block","src":"397:56:3","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":199,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":196,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":193,"src":"415:5:3","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":197,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1349,"src":"424:3:3","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":198,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"424:10:3","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"415:19:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":195,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1352,1353],"referencedDeclaration":1352,"src":"407:7:3","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":200,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"407:28:3","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":201,"nodeType":"ExpressionStatement","src":"407:28:3"},{"id":202,"nodeType":"PlaceholderStatement","src":"445:1:3"}]},"documentation":null,"id":204,"name":"onlyOwner","nodeType":"ModifierDefinition","parameters":{"id":194,"nodeType":"ParameterList","parameters":[],"src":"397:0:3"},"src":"378:75:3","visibility":"internal"},{"body":{"id":222,"nodeType":"Block","src":"476:90:3","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":208,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1349,"src":"487:3:3","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":209,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"487:10:3","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":210,"name":"INITIAL_SUPPLY","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":189,"src":"499:14:3","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":207,"name":"_mint","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1123,"src":"481:5:3","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,uint256)"}},"id":211,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"481:33:3","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":212,"nodeType":"ExpressionStatement","src":"481:33:3"},{"expression":{"argumentTypes":null,"id":215,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":213,"name":"_activate","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"519:9:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"66616c7365","id":214,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"531:5:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"src":"519:17:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":216,"nodeType":"ExpressionStatement","src":"519:17:3"},{"expression":{"argumentTypes":null,"id":220,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":217,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":193,"src":"544:5:3","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":218,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1349,"src":"552:3:3","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":219,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"552:10:3","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"544:18:3","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":221,"nodeType":"ExpressionStatement","src":"544:18:3"}]},"documentation":null,"id":223,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":205,"nodeType":"ParameterList","parameters":[],"src":"466:2:3"},"returnParameters":{"id":206,"nodeType":"ParameterList","parameters":[],"src":"476:0:3"},"scope":244,"src":"455:111:3","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":242,"nodeType":"Block","src":"622:113:3","statements":[{"condition":{"argumentTypes":null,"id":231,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"637:10:3","subExpression":{"argumentTypes":null,"id":230,"name":"_activate","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"638:9:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":241,"nodeType":"IfStatement","src":"633:96:3","trueBody":{"id":240,"nodeType":"Block","src":"648:81:3","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":233,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":225,"src":"679:8:3","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":232,"name":"addMinter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":665,"src":"669:9:3","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":234,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"669:19:3","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":235,"nodeType":"ExpressionStatement","src":"669:19:3"},{"expression":{"argumentTypes":null,"id":238,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":236,"name":"_activate","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":191,"src":"702:9:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":237,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"714:4:3","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"702:16:3","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":239,"nodeType":"ExpressionStatement","src":"702:16:3"}]}}]},"documentation":null,"id":243,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":228,"modifierName":{"argumentTypes":null,"id":227,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":204,"src":"605:9:3","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"605:9:3"}],"name":"activate","nodeType":"FunctionDefinition","parameters":{"id":226,"nodeType":"ParameterList","parameters":[{"constant":false,"id":225,"name":"_address","nodeType":"VariableDeclaration","scope":243,"src":"587:16:3","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":224,"name":"address","nodeType":"ElementaryTypeName","src":"587:7:3","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"586:18:3"},"returnParameters":{"id":229,"nodeType":"ParameterList","parameters":[],"src":"622:0:3"},"scope":244,"src":"569:166:3","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":245,"src":"162:577:3"}],"src":"0:739:3"},"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{"5777":{"events":{"0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6":{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event","signature":"0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"},"0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692":{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event","signature":"0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"}},"links":{},"address":"0xAa765ea7f393D6669a87648843a0ec6acEE7f1cf","transactionHash":"0xbdf747f4e3cdf72b74e5b41070c4a6a0c65b0111b922d0bfcb1e6b3372a5e739"}},"schemaVersion":"3.0.13","updatedAt":"2019-08-26T16:14:56.619Z","devdoc":{"methods":{"allowance(address,address)":{"details":"See `IERC20.allowance`."},"approve(address,uint256)":{"details":"See `IERC20.approve`.     * Requirements:     * - `spender` cannot be the zero address."},"balanceOf(address)":{"details":"See `IERC20.balanceOf`."},"decreaseAllowance(address,uint256)":{"details":"Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."},"increaseAllowance(address,uint256)":{"details":"Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address."},"mint(address,uint256)":{"details":"See `ERC20._mint`.     * Requirements:     * - the caller must have the `MinterRole`."},"totalSupply()":{"details":"See `IERC20.totalSupply`."},"transfer(address,uint256)":{"details":"See `IERC20.transfer`.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."},"transferFrom(address,address,uint256)":{"details":"See `IERC20.transferFrom`.     * Emits an `Approval` event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of `ERC20`;     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `value`. - the caller must have allowance for `sender`'s tokens of at least `amount`."}}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "../truffle/build/contracts/RccDao.json":
/*!**********************************************!*\
  !*** ../truffle/build/contracts/RccDao.json ***!
  \**********************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"RccDao","abi":[{"inputs":[{"name":"rcc_address","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"ask_address","type":"address"},{"indexed":false,"name":"associatted_address","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"Ask","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"ask_address","type":"address"},{"indexed":false,"name":"associatted_address","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"Delivered","type":"event"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"name","type":"string"},{"name":"ref","type":"string"},{"name":"minter","type":"bool"},{"name":"supply","type":"bool"}],"name":"newAssociated","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"disableAssociated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"enabledAssociated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAssociatedList","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getAssociated","outputs":[{"name":"name","type":"string"},{"name":"enabled","type":"bool"},{"name":"ref","type":"string"},{"name":"supply","type":"bool"},{"name":"minter","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"_address","type":"address"},{"name":"amount","type":"uint256"},{"name":"message","type":"string"}],"name":"ask","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"_address","type":"address"},{"name":"amount","type":"uint256"},{"name":"message","type":"string"}],"name":"deliver","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"metadata":"{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"id\",\"type\":\"uint256\"},{\"name\":\"_address\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"},{\"name\":\"message\",\"type\":\"string\"}],\"name\":\"deliver\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"},{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"ref\",\"type\":\"string\"},{\"name\":\"minter\",\"type\":\"bool\"},{\"name\":\"supply\",\"type\":\"bool\"}],\"name\":\"newAssociated\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"getAssociated\",\"outputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"enabled\",\"type\":\"bool\"},{\"name\":\"ref\",\"type\":\"string\"},{\"name\":\"supply\",\"type\":\"bool\"},{\"name\":\"minter\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getAssociatedList\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"enabledAssociated\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"id\",\"type\":\"uint256\"},{\"name\":\"_address\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"},{\"name\":\"message\",\"type\":\"string\"}],\"name\":\"ask\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"disableAssociated\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"rcc_address\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"ask_address\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"associatted_address\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"message\",\"type\":\"string\"}],\"name\":\"Ask\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"ask_address\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"associatted_address\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"message\",\"type\":\"string\"}],\"name\":\"Delivered\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/cesar/master/master-rcc/truffle/contracts/RccDao.sol\":\"RccDao\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/cesar/master/master-rcc/truffle/contracts/RCC.sol\":{\"keccak256\":\"0x0e237c55d7e70fb872603cf782ee1e8198d401f0335c51ce0dd6af050610b007\",\"urls\":[\"bzzr://7915bbb74a482b8a61110ca78dc305428eb56384374da540ab40d838c545501b\"]},\"/home/cesar/master/master-rcc/truffle/contracts/RccDao.sol\":{\"keccak256\":\"0xe3c56d3b3864ccb18cc88e0b7c71ec5da0d90094f773a10024adaef566db1d71\",\"urls\":[\"bzzr://1eec24e88de0747a9274df212a74c59c8511df99f423bb816be4295e7cb4c16d\"]},\"openzeppelin-solidity/contracts/access/Roles.sol\":{\"keccak256\":\"0xb002c378d7b82a101bd659c341518953ca0919d342c0a400196982c0e7e7bcdb\",\"urls\":[\"bzzr://bd34c1ce05b5b2b3a62fc02e160f6805b1cadd476854664f433c685b2fda8dad\"]},\"openzeppelin-solidity/contracts/access/roles/MinterRole.sol\":{\"keccak256\":\"0x63da54a7a5d4e4d82ac8d1f4f7f995fd8ef2b5fe1f2960b83e534fa37fb60910\",\"urls\":[\"bzzr://cea53b805426e40efadb24f2613aca39182462e9ecd23fde7aacf0c4b5885aaf\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x4ccf2d7b51873db1ccfd54ca2adae5eac3b184f9699911ed4490438419f1c690\",\"urls\":[\"bzzr://1604f5b6d6e916c154efd8c6720cda069e5ba32dfa0a9dedf2b42e5b02d07f89\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x852793a3c2f86d336a683b30d688ec3dcfc57451af5a2bf5975cda3b7191a901\",\"urls\":[\"bzzr://07fb42206812a17c1f71e548cfa5cec6f9aa1ae0ca5df870718ca4aa9759d1a5\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol\":{\"keccak256\":\"0x6df8d686813b2875e99928ecd07bf8ee6d7473bc6a95eb1190e8fdba86beda76\",\"urls\":[\"bzzr://b4a3a1136392be8723a0d9627d1626323e3891c98e88ca5ab48da1dada375580\"]},\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x90e8c2521653bbb1768b05889c5760031e688d9cd361f167489b89215e201b95\",\"urls\":[\"bzzr://aa8b45b57edafc3d67bc5d916327ea16807fae33f753ca163ae0c4061b789766\"]}},\"version\":1}","bytecode":"0x608060405234801561001057600080fd5b506040516020806116138339810180604052602081101561003057600080fd5b8101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050611541806100d26000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806352f762f61161005b57806352f762f61461045d57806379f7992e146104bc5780638503818614610518578063abb76afa1461061f5761007d565b80632115897914610082578063281d120c146101895780632b7b90e914610313575b600080fd5b61016f6004803603608081101561009857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100e957600080fd5b8201836020820111156100fb57600080fd5b8035906020019184600183028401116401000000008311171561011d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061067b565b604051808215151515815260200191505060405180910390f35b610311600480360360a081101561019f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156101dc57600080fd5b8201836020820111156101ee57600080fd5b8035906020019184600183028401116401000000008311171561021057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561027357600080fd5b82018360208201111561028557600080fd5b803590602001918460018302840111640100000000831117156102a757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035151590602001909291908035151590602001909291905050506108d4565b005b6103556004803603602081101561032957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b08565b604051808060200186151515158152602001806020018515151515815260200184151515158152602001838103835288818151815260200191508051906020019080838360005b838110156103b757808201518184015260208101905061039c565b50505050905090810190601f1680156103e45780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b8381101561041d578082015181840152602081019050610402565b50505050905090810190601f16801561044a5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610465610e93565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104a857808201518184015260208101905061048d565b505050509050019250505060405180910390f35b6104fe600480360360208110156104d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f21565b604051808215151515815260200191505060405180910390f35b6106056004803603608081101561052e57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561057f57600080fd5b82018360208201111561059157600080fd5b803590602001918460018302840111640100000000831117156105b357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506110a2565b604051808215151515815260200191505060405180910390f35b6106616004803603602081101561063557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611216565b604051808215151515815260200191505060405180910390f35b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff16156108cc57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b385856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561077b57600080fd5b505af115801561078f573d6000803e3d6000fd5b505050506040513d60208110156107a557600080fd5b8101908080519060200190929190505050507fa2e0c4912eca16ce9de7edec1240e5e996163c0864c1c6418eba04376be5da488533868686604051808681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561088d578082015181840152602081019050610872565b50505050905090810190601f1680156108ba5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a15b949350505050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461092d57600080fd5b6000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905084816000019080519060200190610988929190611470565b50838160020190805190602001906109a1929190611470565b50828160030160016101000a81548160ff021916908315150217905550818160030160006101000a81548160ff02191690831515021790555060038690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508215610b0057600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663983b2d56876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015610ae757600080fd5b505af1158015610afb573d6000803e3d6000fd5b505050505b505050505050565b606060006060600080600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615610bd4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4173736f63696174656420697320616c72656164792064697361626c65642e0081525060200191505060405180910390fd5b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff16848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ddd5780601f10610db257610100808354040283529160200191610ddd565b820191906000526020600020905b815481529060010190602001808311610dc057829003601f168201915b50505050509450828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e795780601f10610e4e57610100808354040283529160200191610e79565b820191906000526020600020905b815481529060010190602001808311610e5c57829003601f168201915b505050505092509450945094509450945091939590929450565b60606003805480602002602001604051908101604052809291908181526020018280548015610f1757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610ecd575b5050505050905090565b60003373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f7c57600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1661103e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4173736f63696174656420697320616c726561647920656e61626c65642e000081525060200191505060405180910390fd5b6001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff02191690831515021790555060019050919050565b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff161561120e577f657ad2f6ee451f7c8f6c2b25b440c85647fb34aa4e034d000fc9f26cbb4786238533868686604051808681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111cf5780820151818401526020810190506111b4565b50505050905090810190601f1680156111fc5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a15b949350505050565b60003373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461127157600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615611334576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4173736f63696174656420697320616c72656164792064697361626c65642e0081525060200191505060405180910390fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff021916908315150217905550600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff161561146757600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663986502756040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561144e57600080fd5b505af1158015611462573d6000803e3d6000fd5b505050505b60019050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106114b157805160ff19168380011785556114df565b828001600101855582156114df579182015b828111156114de5782518255916020019190600101906114c3565b5b5090506114ec91906114f0565b5090565b61151291905b8082111561150e5760008160009055506001016114f6565b5090565b9056fea165627a7a723058206b79c493318317a7600bd676c07f524111383ff341ae1e132fa4614af3da57d10029","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061007d5760003560e01c806352f762f61161005b57806352f762f61461045d57806379f7992e146104bc5780638503818614610518578063abb76afa1461061f5761007d565b80632115897914610082578063281d120c146101895780632b7b90e914610313575b600080fd5b61016f6004803603608081101561009857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100e957600080fd5b8201836020820111156100fb57600080fd5b8035906020019184600183028401116401000000008311171561011d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061067b565b604051808215151515815260200191505060405180910390f35b610311600480360360a081101561019f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156101dc57600080fd5b8201836020820111156101ee57600080fd5b8035906020019184600183028401116401000000008311171561021057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561027357600080fd5b82018360208201111561028557600080fd5b803590602001918460018302840111640100000000831117156102a757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035151590602001909291908035151590602001909291905050506108d4565b005b6103556004803603602081101561032957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b08565b604051808060200186151515158152602001806020018515151515815260200184151515158152602001838103835288818151815260200191508051906020019080838360005b838110156103b757808201518184015260208101905061039c565b50505050905090810190601f1680156103e45780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b8381101561041d578082015181840152602081019050610402565b50505050905090810190601f16801561044a5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b610465610e93565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104a857808201518184015260208101905061048d565b505050509050019250505060405180910390f35b6104fe600480360360208110156104d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f21565b604051808215151515815260200191505060405180910390f35b6106056004803603608081101561052e57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561057f57600080fd5b82018360208201111561059157600080fd5b803590602001918460018302840111640100000000831117156105b357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506110a2565b604051808215151515815260200191505060405180910390f35b6106616004803603602081101561063557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611216565b604051808215151515815260200191505060405180910390f35b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff16156108cc57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b385856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561077b57600080fd5b505af115801561078f573d6000803e3d6000fd5b505050506040513d60208110156107a557600080fd5b8101908080519060200190929190505050507fa2e0c4912eca16ce9de7edec1240e5e996163c0864c1c6418eba04376be5da488533868686604051808681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561088d578082015181840152602081019050610872565b50505050905090810190601f1680156108ba5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a15b949350505050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461092d57600080fd5b6000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905084816000019080519060200190610988929190611470565b50838160020190805190602001906109a1929190611470565b50828160030160016101000a81548160ff021916908315150217905550818160030160006101000a81548160ff02191690831515021790555060038690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508215610b0057600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663983b2d56876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015610ae757600080fd5b505af1158015610afb573d6000803e3d6000fd5b505050505b505050505050565b606060006060600080600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615610bd4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4173736f63696174656420697320616c72656164792064697361626c65642e0081525060200191505060405180910390fd5b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff16848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ddd5780601f10610db257610100808354040283529160200191610ddd565b820191906000526020600020905b815481529060010190602001808311610dc057829003601f168201915b50505050509450828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e795780601f10610e4e57610100808354040283529160200191610e79565b820191906000526020600020905b815481529060010190602001808311610e5c57829003601f168201915b505050505092509450945094509450945091939590929450565b60606003805480602002602001604051908101604052809291908181526020018280548015610f1757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610ecd575b5050505050905090565b60003373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f7c57600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1661103e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4173736f63696174656420697320616c726561647920656e61626c65642e000081525060200191505060405180910390fd5b6001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff02191690831515021790555060019050919050565b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff161561120e577f657ad2f6ee451f7c8f6c2b25b440c85647fb34aa4e034d000fc9f26cbb4786238533868686604051808681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111cf5780820151818401526020810190506111b4565b50505050905090810190601f1680156111fc5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a15b949350505050565b60003373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461127157600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615611334576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4173736f63696174656420697320616c72656164792064697361626c65642e0081525060200191505060405180910390fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff021916908315150217905550600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff161561146757600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663986502756040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561144e57600080fd5b505af1158015611462573d6000803e3d6000fd5b505050505b60019050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106114b157805160ff19168380011785556114df565b828001600101855582156114df579182015b828111156114de5782518255916020019190600101906114c3565b5b5090506114ec91906114f0565b5090565b61151291905b8082111561150e5760008160009055506001016114f6565b5090565b9056fea165627a7a723058206b79c493318317a7600bd676c07f524111383ff341ae1e132fa4614af3da57d10029","sourceMap":"46:3441:4:-;;;421:120;8:9:-1;5:2;;;30:1;27;20:12;5:2;421:120:4;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;421:120:4;;;;;;;;;;;;;;;;479:10;471:5;;:18;;;;;;;;;;;;;;;;;;509:11;499:3;;:22;;;;;;;;;;;;;;;;;;421:120;46:3441;;;;;;","deployedSourceMap":"46:3441:4:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;46:3441:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3194:286;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;3194:286:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;3194:286:4;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;3194:286:4;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;3194:286:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3194:286:4;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1035:688;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;1035:688:4;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1035:688:4;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1035:688:4;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1035:688:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1035:688:4;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1035:688:4;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1035:688:4;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1035:688:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1035:688:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2533:396;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2533:396:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2533:396:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2533:396:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2416:107;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2416:107:4;;;;;;;;;;;;;;;;;2154:252;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2154:252:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2944:244;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;2944:244:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;2944:244:4;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2944:244:4;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;2944:244:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2944:244:4;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1735:408;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1735:408:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3194:286;3291:4;3311:11;:21;3323:8;3311:21;;;;;;;;;;;;;;;:28;;;;;;;;;;;;3307:159;;;3354:3;;;;;;;;;;;:11;;;3366:8;3376:6;3354:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3354:29:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3354:29:4;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3354:29:4;;;;;;;;;;;;;;;;;3403:52;3413:2;3417:10;3429:8;3439:6;3447:7;3403:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3403:52:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3307:159;3194:286;;;;;;:::o;1035:688::-;603:10;594:19;;:5;;;;;;;;;;;:19;;;586:28;;;;;;1256:29;1288:11;:21;1300:8;1288:21;;;;;;;;;;;;;;;1256:53;;1355:4;1337:10;:15;;:22;;;;;;;;;;;;:::i;:::-;;1386:3;1369:10;:14;;:20;;;;;;;;;;;;:::i;:::-;;1419:6;1399:10;:17;;;:26;;;;;;;;;;;;;;;;;;1455:6;1435:10;:17;;;:26;;;;;;;;;;;;;;;;;;1537:15;1558:8;1537:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1537:30:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1641:6;1637:71;;;1662:3;;;;;;;;;;;:13;;;1676:8;1662:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1662:23:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1662:23:4;;;;1637:71;624:1;1035:688;;;;;:::o;2533:396::-;2596:18;2616:12;2630:17;2649:11;2662;2694;:21;2706:8;2694:21;;;;;;;;;;;;;;;:29;;;;;;;;;;;;2693:30;2685:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2777:11;:21;2789:8;2777:21;;;;;;;;;;;;;;;:26;;2805:11;:21;2817:8;2805:21;;;;;;;;;;;;;;;:29;;;;;;;;;;;;2836:11;:21;2848:8;2836:21;;;;;;;;;;;;;;;:25;;2863:11;:21;2875:8;2863:21;;;;;;;;;;;;;;;:28;;;;;;;;;;;;2893:11;:21;2905:8;2893:21;;;;;;;;;;;;;;;:28;;;;;;;;;;;;2769:153;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2533:396;;;;;;;:::o;2416:107::-;2466:16;2501:15;2494:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2416:107;:::o;2154:252::-;2225:4;603:10;594:19;;:5;;;;;;;;;;;:19;;;586:28;;;;;;2258:11;:21;2270:8;2258:21;;;;;;;;;;;;;;;:29;;;;;;;;;;;;2250:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2364:4;2332:11;:21;2344:8;2332:21;;;;;;;;;;;;;;;:29;;;:36;;;;;;;;;;;;;;;;;;2395:4;2388:11;;2154:252;;;:::o;2944:244::-;3037:4;3057:11;:21;3069:8;3057:21;;;;;;;;;;;;;;;:28;;;;;;;;;;;;3053:121;;;3117:46;3121:2;3125:10;3137:8;3147:6;3155:7;3117:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3117:46:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3053:121;2944:244;;;;;;:::o;1735:408::-;1806:4;603:10;594:19;;:5;;;;;;;;;;;:19;;;586:28;;;;;;1840:11;:21;1852:8;1840:21;;;;;;;;;;;;;;;:29;;;;;;;;;;;;1839:30;1831:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1947:5;1915:11;:21;1927:8;1915:21;;;;;;;;;;;;;;;:29;;;:37;;;;;;;;;;;;;;;;;;2032:11;:21;2044:8;2032:21;;;;;;;;;;;;;;;:28;;;;;;;;;;;;2028:78;;;2075:3;;;;;;;;;;;:18;;;:20;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2075:20:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2075:20:4;;;;2028:78;2132:4;2125:11;;1735:408;;;:::o;46:3441::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.5.1;\n\nimport \"./RCC.sol\";\n\ncontract RccDao {\n    \n    event Ask(\n        uint id,\n        address ask_address,\n        address associatted_address,\n        uint amount,\n        string message\n    );\n\n    event Delivered(\n        uint id,\n        address ask_address,\n        address associatted_address,\n        uint amount,\n        string message\n    );\n\n    address owner;\n    RCC rcc;\n    \n    \n    constructor(address rcc_address) public {\n        owner = msg.sender;\n        rcc = RCC(rcc_address);             \n    }\n\n    \n    \n    modifier onlyOwner {\n        require(owner == msg.sender);\n        _;\n    }\n    \n    struct Associated {        \n        string name;\n        bool enabled;\n        string ref ;\n        bool supply;\n        bool minter;\n    }    \n    \n \n    // Cada Asociado tiene su dirección con la que opera sobre la DAO\n    mapping (address => Associated) _associated;\n\n    \n    // Necesario para obtener la lista completa de asociados.\n    address[] internal _associatedList;\n        \n\n    function newAssociated(address _address, string memory name, string memory ref, bool minter, bool supply) onlyOwner public {\n    \n        // Primero hay que comprobar que el assoiciado ya existe\n        \n        \n        Associated storage associated = _associated[_address]; \n                \n        associated.name = name;\n        associated.ref = ref;\n        associated.minter = minter;\n        associated.supply = supply;\n        \n        // Se añade el asociado a la tabla de asociados\n        _associatedList.push(_address);\n        \n        // Se añade como Minter al nuevo asociado\n        if (minter){\n            rcc.addMinter(_address);            \n        }\n        \n    }\n    \n \n    function disableAssociated(address _address) onlyOwner public returns (bool) {\n        \n        require(!_associated[_address].enabled, \"Associated is already disabled.\");\n        _associated[_address].enabled = false;\n        \n        // Se elimina la propiedad de Minter al asociado\n        if (_associated[_address].minter){\n            rcc.renounceMinter();\n        }\n         \n        return true;\n    }\n    \n     function enabledAssociated(address _address) onlyOwner public returns (bool) {\n        \n        require(_associated[_address].enabled, \"Associated is already enabled.\");\n        _associated[_address].enabled = true;\n         \n        return true;\n    }\n    \n    function getAssociatedList() view public returns (address[] memory) {\n        return _associatedList;\n    }\n    \n    function getAssociated(address _address ) view public returns (string memory name, bool enabled, string memory ref, bool supply, bool minter) {\n        require(!_associated[_address].enabled, \"Associated is already disabled.\");\n        return (_associated[_address].name, _associated[_address].enabled, _associated[_address].ref, _associated[_address].supply, _associated[_address].minter);\n    }\n    \n    \n    function ask(uint id, address _address, uint amount, string memory message ) public returns (bool) {\n        if (_associated[_address].minter){            \n            emit Ask(id, msg.sender, _address, amount, message);\n        }        \n    }\n\n    function deliver(uint id, address _address, uint amount, string memory message ) public returns (bool) {\n        if (_associated[_address].minter){\n            rcc.approve(_address, amount);\n\n            emit Delivered(id, msg.sender, _address, amount, message);\n        }        \n    }\n    \n}","sourcePath":"/home/cesar/master/master-rcc/truffle/contracts/RccDao.sol","ast":{"absolutePath":"/home/cesar/master/master-rcc/truffle/contracts/RccDao.sol","exportedSymbols":{"RccDao":[570]},"id":571,"nodeType":"SourceUnit","nodes":[{"id":246,"literals":["solidity","^","0.5",".1"],"nodeType":"PragmaDirective","src":"0:23:4"},{"absolutePath":"/home/cesar/master/master-rcc/truffle/contracts/RCC.sol","file":"./RCC.sol","id":247,"nodeType":"ImportDirective","scope":571,"sourceUnit":245,"src":"25:19:4","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":570,"linearizedBaseContracts":[570],"name":"RccDao","nodeType":"ContractDefinition","nodes":[{"anonymous":false,"documentation":null,"id":259,"name":"Ask","nodeType":"EventDefinition","parameters":{"id":258,"nodeType":"ParameterList","parameters":[{"constant":false,"id":249,"indexed":false,"name":"id","nodeType":"VariableDeclaration","scope":259,"src":"92:7:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":248,"name":"uint","nodeType":"ElementaryTypeName","src":"92:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":251,"indexed":false,"name":"ask_address","nodeType":"VariableDeclaration","scope":259,"src":"109:19:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":250,"name":"address","nodeType":"ElementaryTypeName","src":"109:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":253,"indexed":false,"name":"associatted_address","nodeType":"VariableDeclaration","scope":259,"src":"138:27:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":252,"name":"address","nodeType":"ElementaryTypeName","src":"138:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":255,"indexed":false,"name":"amount","nodeType":"VariableDeclaration","scope":259,"src":"175:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":254,"name":"uint","nodeType":"ElementaryTypeName","src":"175:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":257,"indexed":false,"name":"message","nodeType":"VariableDeclaration","scope":259,"src":"196:14:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":256,"name":"string","nodeType":"ElementaryTypeName","src":"196:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"82:134:4"},"src":"73:144:4"},{"anonymous":false,"documentation":null,"id":271,"name":"Delivered","nodeType":"EventDefinition","parameters":{"id":270,"nodeType":"ParameterList","parameters":[{"constant":false,"id":261,"indexed":false,"name":"id","nodeType":"VariableDeclaration","scope":271,"src":"248:7:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":260,"name":"uint","nodeType":"ElementaryTypeName","src":"248:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":263,"indexed":false,"name":"ask_address","nodeType":"VariableDeclaration","scope":271,"src":"265:19:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":262,"name":"address","nodeType":"ElementaryTypeName","src":"265:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":265,"indexed":false,"name":"associatted_address","nodeType":"VariableDeclaration","scope":271,"src":"294:27:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":264,"name":"address","nodeType":"ElementaryTypeName","src":"294:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":267,"indexed":false,"name":"amount","nodeType":"VariableDeclaration","scope":271,"src":"331:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":266,"name":"uint","nodeType":"ElementaryTypeName","src":"331:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":269,"indexed":false,"name":"message","nodeType":"VariableDeclaration","scope":271,"src":"352:14:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":268,"name":"string","nodeType":"ElementaryTypeName","src":"352:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"238:134:4"},"src":"223:150:4"},{"constant":false,"id":273,"name":"owner","nodeType":"VariableDeclaration","scope":570,"src":"379:13:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":272,"name":"address","nodeType":"ElementaryTypeName","src":"379:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":275,"name":"rcc","nodeType":"VariableDeclaration","scope":570,"src":"398:7:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"},"typeName":{"contractScope":null,"id":274,"name":"RCC","nodeType":"UserDefinedTypeName","referencedDeclaration":244,"src":"398:3:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"value":null,"visibility":"internal"},{"body":{"id":291,"nodeType":"Block","src":"461:80:4","statements":[{"expression":{"argumentTypes":null,"id":283,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":280,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":273,"src":"471:5:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":281,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1397,"src":"479:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":282,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"479:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"471:18:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":284,"nodeType":"ExpressionStatement","src":"471:18:4"},{"expression":{"argumentTypes":null,"id":289,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":285,"name":"rcc","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":275,"src":"499:3:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":287,"name":"rcc_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":277,"src":"509:11:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":286,"name":"RCC","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":244,"src":"505:3:4","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_RCC_$244_$","typeString":"type(contract RCC)"}},"id":288,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"505:16:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"src":"499:22:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"id":290,"nodeType":"ExpressionStatement","src":"499:22:4"}]},"documentation":null,"id":292,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":278,"nodeType":"ParameterList","parameters":[{"constant":false,"id":277,"name":"rcc_address","nodeType":"VariableDeclaration","scope":292,"src":"433:19:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":276,"name":"address","nodeType":"ElementaryTypeName","src":"433:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"432:21:4"},"returnParameters":{"id":279,"nodeType":"ParameterList","parameters":[],"src":"461:0:4"},"scope":570,"src":"421:120:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":302,"nodeType":"Block","src":"576:56:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":298,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":295,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":273,"src":"594:5:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":296,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1397,"src":"603:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":297,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"603:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"594:19:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":294,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1400,1401],"referencedDeclaration":1400,"src":"586:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":299,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"586:28:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":300,"nodeType":"ExpressionStatement","src":"586:28:4"},{"id":301,"nodeType":"PlaceholderStatement","src":"624:1:4"}]},"documentation":null,"id":303,"name":"onlyOwner","nodeType":"ModifierDefinition","parameters":{"id":293,"nodeType":"ParameterList","parameters":[],"src":"576:0:4"},"src":"557:75:4","visibility":"internal"},{"canonicalName":"RccDao.Associated","id":314,"members":[{"constant":false,"id":305,"name":"name","nodeType":"VariableDeclaration","scope":314,"src":"678:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":304,"name":"string","nodeType":"ElementaryTypeName","src":"678:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":307,"name":"enabled","nodeType":"VariableDeclaration","scope":314,"src":"699:12:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":306,"name":"bool","nodeType":"ElementaryTypeName","src":"699:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":309,"name":"ref","nodeType":"VariableDeclaration","scope":314,"src":"721:10:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":308,"name":"string","nodeType":"ElementaryTypeName","src":"721:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":311,"name":"supply","nodeType":"VariableDeclaration","scope":314,"src":"742:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":310,"name":"bool","nodeType":"ElementaryTypeName","src":"742:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":313,"name":"minter","nodeType":"VariableDeclaration","scope":314,"src":"763:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":312,"name":"bool","nodeType":"ElementaryTypeName","src":"763:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"name":"Associated","nodeType":"StructDefinition","scope":570,"src":"642:139:4","visibility":"public"},{"constant":false,"id":318,"name":"_associated","nodeType":"VariableDeclaration","scope":570,"src":"868:43:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated)"},"typeName":{"id":317,"keyType":{"id":315,"name":"address","nodeType":"ElementaryTypeName","src":"877:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"868:31:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated)"},"valueType":{"contractScope":null,"id":316,"name":"Associated","nodeType":"UserDefinedTypeName","referencedDeclaration":314,"src":"888:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated"}}},"value":null,"visibility":"internal"},{"constant":false,"id":321,"name":"_associatedList","nodeType":"VariableDeclaration","scope":570,"src":"985:34:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":319,"name":"address","nodeType":"ElementaryTypeName","src":"985:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":320,"length":null,"nodeType":"ArrayTypeName","src":"985:9:4","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"},{"body":{"id":381,"nodeType":"Block","src":"1158:565:4","statements":[{"assignments":[337],"declarations":[{"constant":false,"id":337,"name":"associated","nodeType":"VariableDeclaration","scope":381,"src":"1256:29:4","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated"},"typeName":{"contractScope":null,"id":336,"name":"Associated","nodeType":"UserDefinedTypeName","referencedDeclaration":314,"src":"1256:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated"}},"value":null,"visibility":"internal"}],"id":341,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":338,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"1288:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":340,"indexExpression":{"argumentTypes":null,"id":339,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":323,"src":"1300:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1288:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"nodeType":"VariableDeclarationStatement","src":"1256:53:4"},{"expression":{"argumentTypes":null,"id":346,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":342,"name":"associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":337,"src":"1337:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated storage pointer"}},"id":344,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":305,"src":"1337:15:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":345,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"1355:4:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1337:22:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":347,"nodeType":"ExpressionStatement","src":"1337:22:4"},{"expression":{"argumentTypes":null,"id":352,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":348,"name":"associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":337,"src":"1369:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated storage pointer"}},"id":350,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"ref","nodeType":"MemberAccess","referencedDeclaration":309,"src":"1369:14:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":351,"name":"ref","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"1386:3:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1369:20:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":353,"nodeType":"ExpressionStatement","src":"1369:20:4"},{"expression":{"argumentTypes":null,"id":358,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":354,"name":"associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":337,"src":"1399:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated storage pointer"}},"id":356,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"minter","nodeType":"MemberAccess","referencedDeclaration":313,"src":"1399:17:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":357,"name":"minter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"1419:6:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"src":"1399:26:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":359,"nodeType":"ExpressionStatement","src":"1399:26:4"},{"expression":{"argumentTypes":null,"id":364,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":360,"name":"associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":337,"src":"1435:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated storage pointer"}},"id":362,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"supply","nodeType":"MemberAccess","referencedDeclaration":311,"src":"1435:17:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":363,"name":"supply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":331,"src":"1455:6:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"src":"1435:26:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":365,"nodeType":"ExpressionStatement","src":"1435:26:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":369,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":323,"src":"1558:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":366,"name":"_associatedList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":321,"src":"1537:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":368,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1537:20:4","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":370,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1537:30:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":371,"nodeType":"ExpressionStatement","src":"1537:30:4"},{"condition":{"argumentTypes":null,"id":372,"name":"minter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"1641:6:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":380,"nodeType":"IfStatement","src":"1637:71:4","trueBody":{"id":379,"nodeType":"Block","src":"1648:60:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":376,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":323,"src":"1676:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":373,"name":"rcc","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":275,"src":"1662:3:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"id":375,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addMinter","nodeType":"MemberAccess","referencedDeclaration":713,"src":"1662:13:4","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$returns$__$","typeString":"function (address) external"}},"id":377,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1662:23:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":378,"nodeType":"ExpressionStatement","src":"1662:23:4"}]}}]},"documentation":null,"id":382,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":334,"modifierName":{"argumentTypes":null,"id":333,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":303,"src":"1141:9:4","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1141:9:4"}],"name":"newAssociated","nodeType":"FunctionDefinition","parameters":{"id":332,"nodeType":"ParameterList","parameters":[{"constant":false,"id":323,"name":"_address","nodeType":"VariableDeclaration","scope":382,"src":"1058:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":322,"name":"address","nodeType":"ElementaryTypeName","src":"1058:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":325,"name":"name","nodeType":"VariableDeclaration","scope":382,"src":"1076:18:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":324,"name":"string","nodeType":"ElementaryTypeName","src":"1076:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":327,"name":"ref","nodeType":"VariableDeclaration","scope":382,"src":"1096:17:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":326,"name":"string","nodeType":"ElementaryTypeName","src":"1096:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":329,"name":"minter","nodeType":"VariableDeclaration","scope":382,"src":"1115:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":328,"name":"bool","nodeType":"ElementaryTypeName","src":"1115:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":331,"name":"supply","nodeType":"VariableDeclaration","scope":382,"src":"1128:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":330,"name":"bool","nodeType":"ElementaryTypeName","src":"1128:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"1057:83:4"},"returnParameters":{"id":335,"nodeType":"ParameterList","parameters":[],"src":"1158:0:4"},"scope":570,"src":"1035:688:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":420,"nodeType":"Block","src":"1812:331:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":396,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"1839:30:4","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":392,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"1840:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":394,"indexExpression":{"argumentTypes":null,"id":393,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":384,"src":"1852:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1840:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":395,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"1840:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"4173736f63696174656420697320616c72656164792064697361626c65642e","id":397,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1871:33:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_d259523ffddab58789251b323e8904f9e11cc6b8da3017e7f9afa2092f01e785","typeString":"literal_string \"Associated is already disabled.\""},"value":"Associated is already disabled."}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_d259523ffddab58789251b323e8904f9e11cc6b8da3017e7f9afa2092f01e785","typeString":"literal_string \"Associated is already disabled.\""}],"id":391,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1400,1401],"referencedDeclaration":1401,"src":"1831:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":398,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1831:74:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":399,"nodeType":"ExpressionStatement","src":"1831:74:4"},{"expression":{"argumentTypes":null,"id":405,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":400,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"1915:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":402,"indexExpression":{"argumentTypes":null,"id":401,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":384,"src":"1927:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1915:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":403,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"1915:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"66616c7365","id":404,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1947:5:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"src":"1915:37:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":406,"nodeType":"ExpressionStatement","src":"1915:37:4"},{"condition":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":407,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2032:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":409,"indexExpression":{"argumentTypes":null,"id":408,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":384,"src":"2044:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2032:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":410,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"minter","nodeType":"MemberAccess","referencedDeclaration":313,"src":"2032:28:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":417,"nodeType":"IfStatement","src":"2028:78:4","trueBody":{"id":416,"nodeType":"Block","src":"2061:45:4","statements":[{"expression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"expression":{"argumentTypes":null,"id":411,"name":"rcc","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":275,"src":"2075:3:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"id":413,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"renounceMinter","nodeType":"MemberAccess","referencedDeclaration":722,"src":"2075:18:4","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$__$returns$__$","typeString":"function () external"}},"id":414,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2075:20:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":415,"nodeType":"ExpressionStatement","src":"2075:20:4"}]}},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":418,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2132:4:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":390,"id":419,"nodeType":"Return","src":"2125:11:4"}]},"documentation":null,"id":421,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":387,"modifierName":{"argumentTypes":null,"id":386,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":303,"src":"1780:9:4","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1780:9:4"}],"name":"disableAssociated","nodeType":"FunctionDefinition","parameters":{"id":385,"nodeType":"ParameterList","parameters":[{"constant":false,"id":384,"name":"_address","nodeType":"VariableDeclaration","scope":421,"src":"1762:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":383,"name":"address","nodeType":"ElementaryTypeName","src":"1762:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1761:18:4"},"returnParameters":{"id":390,"nodeType":"ParameterList","parameters":[{"constant":false,"id":389,"name":"","nodeType":"VariableDeclaration","scope":421,"src":"1806:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":388,"name":"bool","nodeType":"ElementaryTypeName","src":"1806:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"1805:6:4"},"scope":570,"src":"1735:408:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":447,"nodeType":"Block","src":"2231:175:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":431,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2258:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":433,"indexExpression":{"argumentTypes":null,"id":432,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":423,"src":"2270:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2258:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":434,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"2258:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"4173736f63696174656420697320616c726561647920656e61626c65642e","id":435,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"2289:32:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_6caa6e8e132036171d1906984a49025296d9ddc587c1cbbe2f54b511b41cafc0","typeString":"literal_string \"Associated is already enabled.\""},"value":"Associated is already enabled."}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_6caa6e8e132036171d1906984a49025296d9ddc587c1cbbe2f54b511b41cafc0","typeString":"literal_string \"Associated is already enabled.\""}],"id":430,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1400,1401],"referencedDeclaration":1401,"src":"2250:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":436,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2250:72:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":437,"nodeType":"ExpressionStatement","src":"2250:72:4"},{"expression":{"argumentTypes":null,"id":443,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":438,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2332:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":440,"indexExpression":{"argumentTypes":null,"id":439,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":423,"src":"2344:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2332:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":441,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"2332:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":442,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2364:4:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2332:36:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":444,"nodeType":"ExpressionStatement","src":"2332:36:4"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":445,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2395:4:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":429,"id":446,"nodeType":"Return","src":"2388:11:4"}]},"documentation":null,"id":448,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":426,"modifierName":{"argumentTypes":null,"id":425,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":303,"src":"2199:9:4","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"2199:9:4"}],"name":"enabledAssociated","nodeType":"FunctionDefinition","parameters":{"id":424,"nodeType":"ParameterList","parameters":[{"constant":false,"id":423,"name":"_address","nodeType":"VariableDeclaration","scope":448,"src":"2181:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":422,"name":"address","nodeType":"ElementaryTypeName","src":"2181:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2180:18:4"},"returnParameters":{"id":429,"nodeType":"ParameterList","parameters":[{"constant":false,"id":428,"name":"","nodeType":"VariableDeclaration","scope":448,"src":"2225:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":427,"name":"bool","nodeType":"ElementaryTypeName","src":"2225:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"2224:6:4"},"scope":570,"src":"2154:252:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":456,"nodeType":"Block","src":"2484:39:4","statements":[{"expression":{"argumentTypes":null,"id":454,"name":"_associatedList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":321,"src":"2501:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"functionReturnParameters":453,"id":455,"nodeType":"Return","src":"2494:22:4"}]},"documentation":null,"id":457,"implemented":true,"kind":"function","modifiers":[],"name":"getAssociatedList","nodeType":"FunctionDefinition","parameters":{"id":449,"nodeType":"ParameterList","parameters":[],"src":"2442:2:4"},"returnParameters":{"id":453,"nodeType":"ParameterList","parameters":[{"constant":false,"id":452,"name":"","nodeType":"VariableDeclaration","scope":457,"src":"2466:16:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":450,"name":"address","nodeType":"ElementaryTypeName","src":"2466:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":451,"length":null,"nodeType":"ArrayTypeName","src":"2466:9:4","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"2465:18:4"},"scope":570,"src":"2416:107:4","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":503,"nodeType":"Block","src":"2675:254:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":477,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"2693:30:4","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":473,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2694:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":475,"indexExpression":{"argumentTypes":null,"id":474,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2706:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2694:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":476,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"2694:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"4173736f63696174656420697320616c72656164792064697361626c65642e","id":478,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"2725:33:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_d259523ffddab58789251b323e8904f9e11cc6b8da3017e7f9afa2092f01e785","typeString":"literal_string \"Associated is already disabled.\""},"value":"Associated is already disabled."}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_d259523ffddab58789251b323e8904f9e11cc6b8da3017e7f9afa2092f01e785","typeString":"literal_string \"Associated is already disabled.\""}],"id":472,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1400,1401],"referencedDeclaration":1401,"src":"2685:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":479,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2685:74:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":480,"nodeType":"ExpressionStatement","src":"2685:74:4"},{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":481,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2777:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":483,"indexExpression":{"argumentTypes":null,"id":482,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2789:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2777:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":484,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":305,"src":"2777:26:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":485,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2805:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":487,"indexExpression":{"argumentTypes":null,"id":486,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2817:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2805:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":488,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"2805:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":489,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2836:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":491,"indexExpression":{"argumentTypes":null,"id":490,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2848:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2836:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":492,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"ref","nodeType":"MemberAccess","referencedDeclaration":309,"src":"2836:25:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":493,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2863:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":495,"indexExpression":{"argumentTypes":null,"id":494,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2875:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2863:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":496,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"supply","nodeType":"MemberAccess","referencedDeclaration":311,"src":"2863:28:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":497,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2893:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":499,"indexExpression":{"argumentTypes":null,"id":498,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2905:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2893:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":500,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"minter","nodeType":"MemberAccess","referencedDeclaration":313,"src":"2893:28:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"id":501,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"2776:146:4","typeDescriptions":{"typeIdentifier":"t_tuple$_t_string_storage_$_t_bool_$_t_string_storage_$_t_bool_$_t_bool_$","typeString":"tuple(string storage ref,bool,string storage ref,bool,bool)"}},"functionReturnParameters":471,"id":502,"nodeType":"Return","src":"2769:153:4"}]},"documentation":null,"id":504,"implemented":true,"kind":"function","modifiers":[],"name":"getAssociated","nodeType":"FunctionDefinition","parameters":{"id":460,"nodeType":"ParameterList","parameters":[{"constant":false,"id":459,"name":"_address","nodeType":"VariableDeclaration","scope":504,"src":"2556:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":458,"name":"address","nodeType":"ElementaryTypeName","src":"2556:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2555:19:4"},"returnParameters":{"id":471,"nodeType":"ParameterList","parameters":[{"constant":false,"id":462,"name":"name","nodeType":"VariableDeclaration","scope":504,"src":"2596:18:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":461,"name":"string","nodeType":"ElementaryTypeName","src":"2596:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":464,"name":"enabled","nodeType":"VariableDeclaration","scope":504,"src":"2616:12:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":463,"name":"bool","nodeType":"ElementaryTypeName","src":"2616:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":466,"name":"ref","nodeType":"VariableDeclaration","scope":504,"src":"2630:17:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":465,"name":"string","nodeType":"ElementaryTypeName","src":"2630:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":468,"name":"supply","nodeType":"VariableDeclaration","scope":504,"src":"2649:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":467,"name":"bool","nodeType":"ElementaryTypeName","src":"2649:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":470,"name":"minter","nodeType":"VariableDeclaration","scope":504,"src":"2662:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":469,"name":"bool","nodeType":"ElementaryTypeName","src":"2662:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"2595:79:4"},"scope":570,"src":"2533:396:4","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":532,"nodeType":"Block","src":"3043:145:4","statements":[{"condition":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":517,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"3057:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":519,"indexExpression":{"argumentTypes":null,"id":518,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":508,"src":"3069:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3057:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":520,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"minter","nodeType":"MemberAccess","referencedDeclaration":313,"src":"3057:28:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":531,"nodeType":"IfStatement","src":"3053:121:4","trueBody":{"id":530,"nodeType":"Block","src":"3086:88:4","statements":[{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":522,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":506,"src":"3121:2:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":523,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1397,"src":"3125:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":524,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3125:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":525,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":508,"src":"3137:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":526,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":510,"src":"3147:6:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":527,"name":"message","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":512,"src":"3155:7:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"id":521,"name":"Ask","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":259,"src":"3117:3:4","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$","typeString":"function (uint256,address,address,uint256,string memory)"}},"id":528,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3117:46:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":529,"nodeType":"EmitStatement","src":"3112:51:4"}]}}]},"documentation":null,"id":533,"implemented":true,"kind":"function","modifiers":[],"name":"ask","nodeType":"FunctionDefinition","parameters":{"id":513,"nodeType":"ParameterList","parameters":[{"constant":false,"id":506,"name":"id","nodeType":"VariableDeclaration","scope":533,"src":"2957:7:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":505,"name":"uint","nodeType":"ElementaryTypeName","src":"2957:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":508,"name":"_address","nodeType":"VariableDeclaration","scope":533,"src":"2966:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":507,"name":"address","nodeType":"ElementaryTypeName","src":"2966:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":510,"name":"amount","nodeType":"VariableDeclaration","scope":533,"src":"2984:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":509,"name":"uint","nodeType":"ElementaryTypeName","src":"2984:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":512,"name":"message","nodeType":"VariableDeclaration","scope":533,"src":"2997:21:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":511,"name":"string","nodeType":"ElementaryTypeName","src":"2997:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2956:64:4"},"returnParameters":{"id":516,"nodeType":"ParameterList","parameters":[{"constant":false,"id":515,"name":"","nodeType":"VariableDeclaration","scope":533,"src":"3037:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":514,"name":"bool","nodeType":"ElementaryTypeName","src":"3037:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"3036:6:4"},"scope":570,"src":"2944:244:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":568,"nodeType":"Block","src":"3297:183:4","statements":[{"condition":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":546,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"3311:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":548,"indexExpression":{"argumentTypes":null,"id":547,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":537,"src":"3323:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3311:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":549,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"minter","nodeType":"MemberAccess","referencedDeclaration":313,"src":"3311:28:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":567,"nodeType":"IfStatement","src":"3307:159:4","trueBody":{"id":566,"nodeType":"Block","src":"3340:126:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":553,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":537,"src":"3366:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":554,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":539,"src":"3376:6:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":550,"name":"rcc","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":275,"src":"3354:3:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"id":552,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"approve","nodeType":"MemberAccess","referencedDeclaration":983,"src":"3354:11:4","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$","typeString":"function (address,uint256) external returns (bool)"}},"id":555,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3354:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":556,"nodeType":"ExpressionStatement","src":"3354:29:4"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":558,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":535,"src":"3413:2:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":559,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1397,"src":"3417:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":560,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3417:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":561,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":537,"src":"3429:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":562,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":539,"src":"3439:6:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":563,"name":"message","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":541,"src":"3447:7:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"id":557,"name":"Delivered","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":271,"src":"3403:9:4","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$","typeString":"function (uint256,address,address,uint256,string memory)"}},"id":564,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3403:52:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":565,"nodeType":"EmitStatement","src":"3398:57:4"}]}}]},"documentation":null,"id":569,"implemented":true,"kind":"function","modifiers":[],"name":"deliver","nodeType":"FunctionDefinition","parameters":{"id":542,"nodeType":"ParameterList","parameters":[{"constant":false,"id":535,"name":"id","nodeType":"VariableDeclaration","scope":569,"src":"3211:7:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":534,"name":"uint","nodeType":"ElementaryTypeName","src":"3211:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":537,"name":"_address","nodeType":"VariableDeclaration","scope":569,"src":"3220:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":536,"name":"address","nodeType":"ElementaryTypeName","src":"3220:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":539,"name":"amount","nodeType":"VariableDeclaration","scope":569,"src":"3238:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":538,"name":"uint","nodeType":"ElementaryTypeName","src":"3238:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":541,"name":"message","nodeType":"VariableDeclaration","scope":569,"src":"3251:21:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":540,"name":"string","nodeType":"ElementaryTypeName","src":"3251:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"3210:64:4"},"returnParameters":{"id":545,"nodeType":"ParameterList","parameters":[{"constant":false,"id":544,"name":"","nodeType":"VariableDeclaration","scope":569,"src":"3291:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":543,"name":"bool","nodeType":"ElementaryTypeName","src":"3291:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"3290:6:4"},"scope":570,"src":"3194:286:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":571,"src":"46:3441:4"}],"src":"0:3487:4"},"legacyAST":{"absolutePath":"/home/cesar/master/master-rcc/truffle/contracts/RccDao.sol","exportedSymbols":{"RccDao":[570]},"id":571,"nodeType":"SourceUnit","nodes":[{"id":246,"literals":["solidity","^","0.5",".1"],"nodeType":"PragmaDirective","src":"0:23:4"},{"absolutePath":"/home/cesar/master/master-rcc/truffle/contracts/RCC.sol","file":"./RCC.sol","id":247,"nodeType":"ImportDirective","scope":571,"sourceUnit":245,"src":"25:19:4","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":570,"linearizedBaseContracts":[570],"name":"RccDao","nodeType":"ContractDefinition","nodes":[{"anonymous":false,"documentation":null,"id":259,"name":"Ask","nodeType":"EventDefinition","parameters":{"id":258,"nodeType":"ParameterList","parameters":[{"constant":false,"id":249,"indexed":false,"name":"id","nodeType":"VariableDeclaration","scope":259,"src":"92:7:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":248,"name":"uint","nodeType":"ElementaryTypeName","src":"92:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":251,"indexed":false,"name":"ask_address","nodeType":"VariableDeclaration","scope":259,"src":"109:19:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":250,"name":"address","nodeType":"ElementaryTypeName","src":"109:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":253,"indexed":false,"name":"associatted_address","nodeType":"VariableDeclaration","scope":259,"src":"138:27:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":252,"name":"address","nodeType":"ElementaryTypeName","src":"138:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":255,"indexed":false,"name":"amount","nodeType":"VariableDeclaration","scope":259,"src":"175:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":254,"name":"uint","nodeType":"ElementaryTypeName","src":"175:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":257,"indexed":false,"name":"message","nodeType":"VariableDeclaration","scope":259,"src":"196:14:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":256,"name":"string","nodeType":"ElementaryTypeName","src":"196:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"82:134:4"},"src":"73:144:4"},{"anonymous":false,"documentation":null,"id":271,"name":"Delivered","nodeType":"EventDefinition","parameters":{"id":270,"nodeType":"ParameterList","parameters":[{"constant":false,"id":261,"indexed":false,"name":"id","nodeType":"VariableDeclaration","scope":271,"src":"248:7:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":260,"name":"uint","nodeType":"ElementaryTypeName","src":"248:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":263,"indexed":false,"name":"ask_address","nodeType":"VariableDeclaration","scope":271,"src":"265:19:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":262,"name":"address","nodeType":"ElementaryTypeName","src":"265:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":265,"indexed":false,"name":"associatted_address","nodeType":"VariableDeclaration","scope":271,"src":"294:27:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":264,"name":"address","nodeType":"ElementaryTypeName","src":"294:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":267,"indexed":false,"name":"amount","nodeType":"VariableDeclaration","scope":271,"src":"331:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":266,"name":"uint","nodeType":"ElementaryTypeName","src":"331:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":269,"indexed":false,"name":"message","nodeType":"VariableDeclaration","scope":271,"src":"352:14:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":268,"name":"string","nodeType":"ElementaryTypeName","src":"352:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"238:134:4"},"src":"223:150:4"},{"constant":false,"id":273,"name":"owner","nodeType":"VariableDeclaration","scope":570,"src":"379:13:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":272,"name":"address","nodeType":"ElementaryTypeName","src":"379:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":275,"name":"rcc","nodeType":"VariableDeclaration","scope":570,"src":"398:7:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"},"typeName":{"contractScope":null,"id":274,"name":"RCC","nodeType":"UserDefinedTypeName","referencedDeclaration":244,"src":"398:3:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"value":null,"visibility":"internal"},{"body":{"id":291,"nodeType":"Block","src":"461:80:4","statements":[{"expression":{"argumentTypes":null,"id":283,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":280,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":273,"src":"471:5:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":281,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1397,"src":"479:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":282,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"479:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"471:18:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":284,"nodeType":"ExpressionStatement","src":"471:18:4"},{"expression":{"argumentTypes":null,"id":289,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":285,"name":"rcc","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":275,"src":"499:3:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":287,"name":"rcc_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":277,"src":"509:11:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":286,"name":"RCC","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":244,"src":"505:3:4","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_RCC_$244_$","typeString":"type(contract RCC)"}},"id":288,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"505:16:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"src":"499:22:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"id":290,"nodeType":"ExpressionStatement","src":"499:22:4"}]},"documentation":null,"id":292,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":278,"nodeType":"ParameterList","parameters":[{"constant":false,"id":277,"name":"rcc_address","nodeType":"VariableDeclaration","scope":292,"src":"433:19:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":276,"name":"address","nodeType":"ElementaryTypeName","src":"433:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"432:21:4"},"returnParameters":{"id":279,"nodeType":"ParameterList","parameters":[],"src":"461:0:4"},"scope":570,"src":"421:120:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":302,"nodeType":"Block","src":"576:56:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":298,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":295,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":273,"src":"594:5:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":296,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1397,"src":"603:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":297,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"603:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"594:19:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":294,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1400,1401],"referencedDeclaration":1400,"src":"586:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":299,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"586:28:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":300,"nodeType":"ExpressionStatement","src":"586:28:4"},{"id":301,"nodeType":"PlaceholderStatement","src":"624:1:4"}]},"documentation":null,"id":303,"name":"onlyOwner","nodeType":"ModifierDefinition","parameters":{"id":293,"nodeType":"ParameterList","parameters":[],"src":"576:0:4"},"src":"557:75:4","visibility":"internal"},{"canonicalName":"RccDao.Associated","id":314,"members":[{"constant":false,"id":305,"name":"name","nodeType":"VariableDeclaration","scope":314,"src":"678:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":304,"name":"string","nodeType":"ElementaryTypeName","src":"678:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":307,"name":"enabled","nodeType":"VariableDeclaration","scope":314,"src":"699:12:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":306,"name":"bool","nodeType":"ElementaryTypeName","src":"699:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":309,"name":"ref","nodeType":"VariableDeclaration","scope":314,"src":"721:10:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":308,"name":"string","nodeType":"ElementaryTypeName","src":"721:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":311,"name":"supply","nodeType":"VariableDeclaration","scope":314,"src":"742:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":310,"name":"bool","nodeType":"ElementaryTypeName","src":"742:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":313,"name":"minter","nodeType":"VariableDeclaration","scope":314,"src":"763:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":312,"name":"bool","nodeType":"ElementaryTypeName","src":"763:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"name":"Associated","nodeType":"StructDefinition","scope":570,"src":"642:139:4","visibility":"public"},{"constant":false,"id":318,"name":"_associated","nodeType":"VariableDeclaration","scope":570,"src":"868:43:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated)"},"typeName":{"id":317,"keyType":{"id":315,"name":"address","nodeType":"ElementaryTypeName","src":"877:7:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"868:31:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated)"},"valueType":{"contractScope":null,"id":316,"name":"Associated","nodeType":"UserDefinedTypeName","referencedDeclaration":314,"src":"888:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated"}}},"value":null,"visibility":"internal"},{"constant":false,"id":321,"name":"_associatedList","nodeType":"VariableDeclaration","scope":570,"src":"985:34:4","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":319,"name":"address","nodeType":"ElementaryTypeName","src":"985:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":320,"length":null,"nodeType":"ArrayTypeName","src":"985:9:4","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"},{"body":{"id":381,"nodeType":"Block","src":"1158:565:4","statements":[{"assignments":[337],"declarations":[{"constant":false,"id":337,"name":"associated","nodeType":"VariableDeclaration","scope":381,"src":"1256:29:4","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated"},"typeName":{"contractScope":null,"id":336,"name":"Associated","nodeType":"UserDefinedTypeName","referencedDeclaration":314,"src":"1256:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated"}},"value":null,"visibility":"internal"}],"id":341,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":338,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"1288:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":340,"indexExpression":{"argumentTypes":null,"id":339,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":323,"src":"1300:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1288:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"nodeType":"VariableDeclarationStatement","src":"1256:53:4"},{"expression":{"argumentTypes":null,"id":346,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":342,"name":"associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":337,"src":"1337:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated storage pointer"}},"id":344,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":305,"src":"1337:15:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":345,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":325,"src":"1355:4:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1337:22:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":347,"nodeType":"ExpressionStatement","src":"1337:22:4"},{"expression":{"argumentTypes":null,"id":352,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":348,"name":"associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":337,"src":"1369:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated storage pointer"}},"id":350,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"ref","nodeType":"MemberAccess","referencedDeclaration":309,"src":"1369:14:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":351,"name":"ref","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":327,"src":"1386:3:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1369:20:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":353,"nodeType":"ExpressionStatement","src":"1369:20:4"},{"expression":{"argumentTypes":null,"id":358,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":354,"name":"associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":337,"src":"1399:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated storage pointer"}},"id":356,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"minter","nodeType":"MemberAccess","referencedDeclaration":313,"src":"1399:17:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":357,"name":"minter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"1419:6:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"src":"1399:26:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":359,"nodeType":"ExpressionStatement","src":"1399:26:4"},{"expression":{"argumentTypes":null,"id":364,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":360,"name":"associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":337,"src":"1435:10:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage_ptr","typeString":"struct RccDao.Associated storage pointer"}},"id":362,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"supply","nodeType":"MemberAccess","referencedDeclaration":311,"src":"1435:17:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":363,"name":"supply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":331,"src":"1455:6:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"src":"1435:26:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":365,"nodeType":"ExpressionStatement","src":"1435:26:4"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":369,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":323,"src":"1558:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":366,"name":"_associatedList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":321,"src":"1537:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":368,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1537:20:4","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":370,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1537:30:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":371,"nodeType":"ExpressionStatement","src":"1537:30:4"},{"condition":{"argumentTypes":null,"id":372,"name":"minter","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":329,"src":"1641:6:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":380,"nodeType":"IfStatement","src":"1637:71:4","trueBody":{"id":379,"nodeType":"Block","src":"1648:60:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":376,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":323,"src":"1676:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":373,"name":"rcc","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":275,"src":"1662:3:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"id":375,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"addMinter","nodeType":"MemberAccess","referencedDeclaration":713,"src":"1662:13:4","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$returns$__$","typeString":"function (address) external"}},"id":377,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1662:23:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":378,"nodeType":"ExpressionStatement","src":"1662:23:4"}]}}]},"documentation":null,"id":382,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":334,"modifierName":{"argumentTypes":null,"id":333,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":303,"src":"1141:9:4","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1141:9:4"}],"name":"newAssociated","nodeType":"FunctionDefinition","parameters":{"id":332,"nodeType":"ParameterList","parameters":[{"constant":false,"id":323,"name":"_address","nodeType":"VariableDeclaration","scope":382,"src":"1058:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":322,"name":"address","nodeType":"ElementaryTypeName","src":"1058:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":325,"name":"name","nodeType":"VariableDeclaration","scope":382,"src":"1076:18:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":324,"name":"string","nodeType":"ElementaryTypeName","src":"1076:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":327,"name":"ref","nodeType":"VariableDeclaration","scope":382,"src":"1096:17:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":326,"name":"string","nodeType":"ElementaryTypeName","src":"1096:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":329,"name":"minter","nodeType":"VariableDeclaration","scope":382,"src":"1115:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":328,"name":"bool","nodeType":"ElementaryTypeName","src":"1115:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":331,"name":"supply","nodeType":"VariableDeclaration","scope":382,"src":"1128:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":330,"name":"bool","nodeType":"ElementaryTypeName","src":"1128:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"1057:83:4"},"returnParameters":{"id":335,"nodeType":"ParameterList","parameters":[],"src":"1158:0:4"},"scope":570,"src":"1035:688:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":420,"nodeType":"Block","src":"1812:331:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":396,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"1839:30:4","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":392,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"1840:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":394,"indexExpression":{"argumentTypes":null,"id":393,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":384,"src":"1852:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1840:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":395,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"1840:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"4173736f63696174656420697320616c72656164792064697361626c65642e","id":397,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"1871:33:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_d259523ffddab58789251b323e8904f9e11cc6b8da3017e7f9afa2092f01e785","typeString":"literal_string \"Associated is already disabled.\""},"value":"Associated is already disabled."}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_d259523ffddab58789251b323e8904f9e11cc6b8da3017e7f9afa2092f01e785","typeString":"literal_string \"Associated is already disabled.\""}],"id":391,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1400,1401],"referencedDeclaration":1401,"src":"1831:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":398,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1831:74:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":399,"nodeType":"ExpressionStatement","src":"1831:74:4"},{"expression":{"argumentTypes":null,"id":405,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":400,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"1915:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":402,"indexExpression":{"argumentTypes":null,"id":401,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":384,"src":"1927:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1915:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":403,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"1915:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"66616c7365","id":404,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1947:5:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"src":"1915:37:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":406,"nodeType":"ExpressionStatement","src":"1915:37:4"},{"condition":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":407,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2032:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":409,"indexExpression":{"argumentTypes":null,"id":408,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":384,"src":"2044:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2032:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":410,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"minter","nodeType":"MemberAccess","referencedDeclaration":313,"src":"2032:28:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":417,"nodeType":"IfStatement","src":"2028:78:4","trueBody":{"id":416,"nodeType":"Block","src":"2061:45:4","statements":[{"expression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"expression":{"argumentTypes":null,"id":411,"name":"rcc","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":275,"src":"2075:3:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"id":413,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"renounceMinter","nodeType":"MemberAccess","referencedDeclaration":722,"src":"2075:18:4","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$__$returns$__$","typeString":"function () external"}},"id":414,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2075:20:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":415,"nodeType":"ExpressionStatement","src":"2075:20:4"}]}},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":418,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2132:4:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":390,"id":419,"nodeType":"Return","src":"2125:11:4"}]},"documentation":null,"id":421,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":387,"modifierName":{"argumentTypes":null,"id":386,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":303,"src":"1780:9:4","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1780:9:4"}],"name":"disableAssociated","nodeType":"FunctionDefinition","parameters":{"id":385,"nodeType":"ParameterList","parameters":[{"constant":false,"id":384,"name":"_address","nodeType":"VariableDeclaration","scope":421,"src":"1762:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":383,"name":"address","nodeType":"ElementaryTypeName","src":"1762:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1761:18:4"},"returnParameters":{"id":390,"nodeType":"ParameterList","parameters":[{"constant":false,"id":389,"name":"","nodeType":"VariableDeclaration","scope":421,"src":"1806:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":388,"name":"bool","nodeType":"ElementaryTypeName","src":"1806:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"1805:6:4"},"scope":570,"src":"1735:408:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":447,"nodeType":"Block","src":"2231:175:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":431,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2258:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":433,"indexExpression":{"argumentTypes":null,"id":432,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":423,"src":"2270:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2258:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":434,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"2258:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"4173736f63696174656420697320616c726561647920656e61626c65642e","id":435,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"2289:32:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_6caa6e8e132036171d1906984a49025296d9ddc587c1cbbe2f54b511b41cafc0","typeString":"literal_string \"Associated is already enabled.\""},"value":"Associated is already enabled."}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_6caa6e8e132036171d1906984a49025296d9ddc587c1cbbe2f54b511b41cafc0","typeString":"literal_string \"Associated is already enabled.\""}],"id":430,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1400,1401],"referencedDeclaration":1401,"src":"2250:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":436,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2250:72:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":437,"nodeType":"ExpressionStatement","src":"2250:72:4"},{"expression":{"argumentTypes":null,"id":443,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":438,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2332:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":440,"indexExpression":{"argumentTypes":null,"id":439,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":423,"src":"2344:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2332:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":441,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"2332:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":442,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2364:4:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"2332:36:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":444,"nodeType":"ExpressionStatement","src":"2332:36:4"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":445,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2395:4:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":429,"id":446,"nodeType":"Return","src":"2388:11:4"}]},"documentation":null,"id":448,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":426,"modifierName":{"argumentTypes":null,"id":425,"name":"onlyOwner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":303,"src":"2199:9:4","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"2199:9:4"}],"name":"enabledAssociated","nodeType":"FunctionDefinition","parameters":{"id":424,"nodeType":"ParameterList","parameters":[{"constant":false,"id":423,"name":"_address","nodeType":"VariableDeclaration","scope":448,"src":"2181:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":422,"name":"address","nodeType":"ElementaryTypeName","src":"2181:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2180:18:4"},"returnParameters":{"id":429,"nodeType":"ParameterList","parameters":[{"constant":false,"id":428,"name":"","nodeType":"VariableDeclaration","scope":448,"src":"2225:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":427,"name":"bool","nodeType":"ElementaryTypeName","src":"2225:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"2224:6:4"},"scope":570,"src":"2154:252:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":456,"nodeType":"Block","src":"2484:39:4","statements":[{"expression":{"argumentTypes":null,"id":454,"name":"_associatedList","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":321,"src":"2501:15:4","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"functionReturnParameters":453,"id":455,"nodeType":"Return","src":"2494:22:4"}]},"documentation":null,"id":457,"implemented":true,"kind":"function","modifiers":[],"name":"getAssociatedList","nodeType":"FunctionDefinition","parameters":{"id":449,"nodeType":"ParameterList","parameters":[],"src":"2442:2:4"},"returnParameters":{"id":453,"nodeType":"ParameterList","parameters":[{"constant":false,"id":452,"name":"","nodeType":"VariableDeclaration","scope":457,"src":"2466:16:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":450,"name":"address","nodeType":"ElementaryTypeName","src":"2466:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":451,"length":null,"nodeType":"ArrayTypeName","src":"2466:9:4","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"2465:18:4"},"scope":570,"src":"2416:107:4","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":503,"nodeType":"Block","src":"2675:254:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":477,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"2693:30:4","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":473,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2694:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":475,"indexExpression":{"argumentTypes":null,"id":474,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2706:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2694:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":476,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"2694:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"4173736f63696174656420697320616c72656164792064697361626c65642e","id":478,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"2725:33:4","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_d259523ffddab58789251b323e8904f9e11cc6b8da3017e7f9afa2092f01e785","typeString":"literal_string \"Associated is already disabled.\""},"value":"Associated is already disabled."}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_d259523ffddab58789251b323e8904f9e11cc6b8da3017e7f9afa2092f01e785","typeString":"literal_string \"Associated is already disabled.\""}],"id":472,"name":"require","nodeType":"Identifier","overloadedDeclarations":[1400,1401],"referencedDeclaration":1401,"src":"2685:7:4","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":479,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2685:74:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":480,"nodeType":"ExpressionStatement","src":"2685:74:4"},{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":481,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2777:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":483,"indexExpression":{"argumentTypes":null,"id":482,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2789:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2777:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":484,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":305,"src":"2777:26:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":485,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2805:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":487,"indexExpression":{"argumentTypes":null,"id":486,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2817:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2805:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":488,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"enabled","nodeType":"MemberAccess","referencedDeclaration":307,"src":"2805:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":489,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2836:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":491,"indexExpression":{"argumentTypes":null,"id":490,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2848:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2836:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":492,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"ref","nodeType":"MemberAccess","referencedDeclaration":309,"src":"2836:25:4","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":493,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2863:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":495,"indexExpression":{"argumentTypes":null,"id":494,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2875:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2863:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":496,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"supply","nodeType":"MemberAccess","referencedDeclaration":311,"src":"2863:28:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":497,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"2893:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":499,"indexExpression":{"argumentTypes":null,"id":498,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":459,"src":"2905:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2893:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":500,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"minter","nodeType":"MemberAccess","referencedDeclaration":313,"src":"2893:28:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"id":501,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"2776:146:4","typeDescriptions":{"typeIdentifier":"t_tuple$_t_string_storage_$_t_bool_$_t_string_storage_$_t_bool_$_t_bool_$","typeString":"tuple(string storage ref,bool,string storage ref,bool,bool)"}},"functionReturnParameters":471,"id":502,"nodeType":"Return","src":"2769:153:4"}]},"documentation":null,"id":504,"implemented":true,"kind":"function","modifiers":[],"name":"getAssociated","nodeType":"FunctionDefinition","parameters":{"id":460,"nodeType":"ParameterList","parameters":[{"constant":false,"id":459,"name":"_address","nodeType":"VariableDeclaration","scope":504,"src":"2556:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":458,"name":"address","nodeType":"ElementaryTypeName","src":"2556:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"2555:19:4"},"returnParameters":{"id":471,"nodeType":"ParameterList","parameters":[{"constant":false,"id":462,"name":"name","nodeType":"VariableDeclaration","scope":504,"src":"2596:18:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":461,"name":"string","nodeType":"ElementaryTypeName","src":"2596:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":464,"name":"enabled","nodeType":"VariableDeclaration","scope":504,"src":"2616:12:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":463,"name":"bool","nodeType":"ElementaryTypeName","src":"2616:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":466,"name":"ref","nodeType":"VariableDeclaration","scope":504,"src":"2630:17:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":465,"name":"string","nodeType":"ElementaryTypeName","src":"2630:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":468,"name":"supply","nodeType":"VariableDeclaration","scope":504,"src":"2649:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":467,"name":"bool","nodeType":"ElementaryTypeName","src":"2649:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"},{"constant":false,"id":470,"name":"minter","nodeType":"VariableDeclaration","scope":504,"src":"2662:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":469,"name":"bool","nodeType":"ElementaryTypeName","src":"2662:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"2595:79:4"},"scope":570,"src":"2533:396:4","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":532,"nodeType":"Block","src":"3043:145:4","statements":[{"condition":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":517,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"3057:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":519,"indexExpression":{"argumentTypes":null,"id":518,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":508,"src":"3069:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3057:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":520,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"minter","nodeType":"MemberAccess","referencedDeclaration":313,"src":"3057:28:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":531,"nodeType":"IfStatement","src":"3053:121:4","trueBody":{"id":530,"nodeType":"Block","src":"3086:88:4","statements":[{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":522,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":506,"src":"3121:2:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":523,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1397,"src":"3125:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":524,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3125:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":525,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":508,"src":"3137:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":526,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":510,"src":"3147:6:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":527,"name":"message","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":512,"src":"3155:7:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"id":521,"name":"Ask","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":259,"src":"3117:3:4","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$","typeString":"function (uint256,address,address,uint256,string memory)"}},"id":528,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3117:46:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":529,"nodeType":"EmitStatement","src":"3112:51:4"}]}}]},"documentation":null,"id":533,"implemented":true,"kind":"function","modifiers":[],"name":"ask","nodeType":"FunctionDefinition","parameters":{"id":513,"nodeType":"ParameterList","parameters":[{"constant":false,"id":506,"name":"id","nodeType":"VariableDeclaration","scope":533,"src":"2957:7:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":505,"name":"uint","nodeType":"ElementaryTypeName","src":"2957:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":508,"name":"_address","nodeType":"VariableDeclaration","scope":533,"src":"2966:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":507,"name":"address","nodeType":"ElementaryTypeName","src":"2966:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":510,"name":"amount","nodeType":"VariableDeclaration","scope":533,"src":"2984:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":509,"name":"uint","nodeType":"ElementaryTypeName","src":"2984:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":512,"name":"message","nodeType":"VariableDeclaration","scope":533,"src":"2997:21:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":511,"name":"string","nodeType":"ElementaryTypeName","src":"2997:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2956:64:4"},"returnParameters":{"id":516,"nodeType":"ParameterList","parameters":[{"constant":false,"id":515,"name":"","nodeType":"VariableDeclaration","scope":533,"src":"3037:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":514,"name":"bool","nodeType":"ElementaryTypeName","src":"3037:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"3036:6:4"},"scope":570,"src":"2944:244:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":568,"nodeType":"Block","src":"3297:183:4","statements":[{"condition":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":546,"name":"_associated","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":318,"src":"3311:11:4","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Associated_$314_storage_$","typeString":"mapping(address => struct RccDao.Associated storage ref)"}},"id":548,"indexExpression":{"argumentTypes":null,"id":547,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":537,"src":"3323:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3311:21:4","typeDescriptions":{"typeIdentifier":"t_struct$_Associated_$314_storage","typeString":"struct RccDao.Associated storage ref"}},"id":549,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"minter","nodeType":"MemberAccess","referencedDeclaration":313,"src":"3311:28:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":567,"nodeType":"IfStatement","src":"3307:159:4","trueBody":{"id":566,"nodeType":"Block","src":"3340:126:4","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":553,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":537,"src":"3366:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":554,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":539,"src":"3376:6:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":550,"name":"rcc","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":275,"src":"3354:3:4","typeDescriptions":{"typeIdentifier":"t_contract$_RCC_$244","typeString":"contract RCC"}},"id":552,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"approve","nodeType":"MemberAccess","referencedDeclaration":983,"src":"3354:11:4","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$","typeString":"function (address,uint256) external returns (bool)"}},"id":555,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3354:29:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":556,"nodeType":"ExpressionStatement","src":"3354:29:4"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":558,"name":"id","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":535,"src":"3413:2:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"id":559,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":1397,"src":"3417:3:4","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":560,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3417:10:4","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":561,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":537,"src":"3429:8:4","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":562,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":539,"src":"3439:6:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":563,"name":"message","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":541,"src":"3447:7:4","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"id":557,"name":"Delivered","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":271,"src":"3403:9:4","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$","typeString":"function (uint256,address,address,uint256,string memory)"}},"id":564,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3403:52:4","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":565,"nodeType":"EmitStatement","src":"3398:57:4"}]}}]},"documentation":null,"id":569,"implemented":true,"kind":"function","modifiers":[],"name":"deliver","nodeType":"FunctionDefinition","parameters":{"id":542,"nodeType":"ParameterList","parameters":[{"constant":false,"id":535,"name":"id","nodeType":"VariableDeclaration","scope":569,"src":"3211:7:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":534,"name":"uint","nodeType":"ElementaryTypeName","src":"3211:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":537,"name":"_address","nodeType":"VariableDeclaration","scope":569,"src":"3220:16:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":536,"name":"address","nodeType":"ElementaryTypeName","src":"3220:7:4","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":539,"name":"amount","nodeType":"VariableDeclaration","scope":569,"src":"3238:11:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":538,"name":"uint","nodeType":"ElementaryTypeName","src":"3238:4:4","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":541,"name":"message","nodeType":"VariableDeclaration","scope":569,"src":"3251:21:4","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":540,"name":"string","nodeType":"ElementaryTypeName","src":"3251:6:4","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"3210:64:4"},"returnParameters":{"id":545,"nodeType":"ParameterList","parameters":[{"constant":false,"id":544,"name":"","nodeType":"VariableDeclaration","scope":569,"src":"3291:4:4","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":543,"name":"bool","nodeType":"ElementaryTypeName","src":"3291:4:4","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"3290:6:4"},"scope":570,"src":"3194:286:4","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":571,"src":"46:3441:4"}],"src":"0:3487:4"},"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{"5777":{"events":{"0x49bdcd80dd121dffb240306fe82f6b7916339719e004232e1e6bc3e61902d501":{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"Ask","type":"event","signature":"0x49bdcd80dd121dffb240306fe82f6b7916339719e004232e1e6bc3e61902d501"},"0x657ad2f6ee451f7c8f6c2b25b440c85647fb34aa4e034d000fc9f26cbb478623":{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"ask_address","type":"address"},{"indexed":false,"name":"associatted_address","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"Ask","type":"event","signature":"0x657ad2f6ee451f7c8f6c2b25b440c85647fb34aa4e034d000fc9f26cbb478623"},"0xa2e0c4912eca16ce9de7edec1240e5e996163c0864c1c6418eba04376be5da48":{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"ask_address","type":"address"},{"indexed":false,"name":"associatted_address","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"Delivered","type":"event","signature":"0xa2e0c4912eca16ce9de7edec1240e5e996163c0864c1c6418eba04376be5da48"}},"links":{},"address":"0x154400440DE1Dec07d6464d4873EA13c2F0C0f9F","transactionHash":"0xf234916f4c44df54dced9c3e3a83a42ad610330603d7d57c49cb7cfa3618632d"}},"schemaVersion":"3.0.13","updatedAt":"2019-08-26T16:14:56.636Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Angular Truffle Box</span>\n\n  <span class=\"example-spacer\"></span>\n  <div fxShow=\"true\" fxHide.lt-md=\"true\">    \n\n    <a routerLink=\"/meta\" mat-button>Meta</a>\n    <a routerLink=\"/rcc\" mat-button>Rcc</a>\n    <a routerLink=\"/rccDaoB\" mat-button>RccDaoB</a>\n    <a routerLink=\"/rccDao\" mat-button>RccDao</a>\n\n  </div>\n\n</mat-toolbar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _meta_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meta/meta-sender/meta-sender.component */ "./src/app/meta/meta-sender/meta-sender.component.ts");
/* harmony import */ var _meta_rcc_rcc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meta/rcc/rcc.component */ "./src/app/meta/rcc/rcc.component.ts");
/* harmony import */ var _meta_rcc_dao_rcc_dao_b_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./meta/rcc-dao/rcc-dao-b.component */ "./src/app/meta/rcc-dao/rcc-dao-b.component.ts");
/* harmony import */ var _rccDao_rccDao_rccDao_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rccDao/rccDao/rccDao.component */ "./src/app/rccDao/rccDao/rccDao.component.ts");
/* harmony import */ var _rccDao_rccDao_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rccDao/rccDao.module */ "./src/app/rccDao/rccDao.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _meta_meta_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./meta/meta.module */ "./src/app/meta/meta.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");


















var routes = [
    { path: 'meta', component: _meta_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_8__["MetaSenderComponent"] },
    { path: 'rcc', component: _meta_rcc_rcc_component__WEBPACK_IMPORTED_MODULE_9__["RccComponent"] },
    { path: 'rccDaoB', component: _meta_rcc_dao_rcc_dao_b_component__WEBPACK_IMPORTED_MODULE_10__["RccDaoBComponent"] },
    { path: 'rccDao', component: _rccDao_rccDao_rccDao_component__WEBPACK_IMPORTED_MODULE_11__["RccDaoComponent"] },
    { path: '', redirectTo: '/meta', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _meta_meta_module__WEBPACK_IMPORTED_MODULE_14__["MetaModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _rccDao_rccDao_module__WEBPACK_IMPORTED_MODULE_12__["RccDaoModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.css":
/*!************************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-field {\n  width: 400px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0YS9tZXRhLXNlbmRlci9tZXRhLXNlbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvbWV0YS9tZXRhLXNlbmRlci9tZXRhLXNlbmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHJlc3MtZmllbGQge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.html":
/*!*************************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>Balance</mat-card-header>\n  <mat-card-content>\n    <mat-form-field id=\"address-selector\" class=\"address-field\">\n      <mat-select name=\"account\" (selectionChange)=\"refreshBalance()\" [(value)]=\"model.account\" placeholder=\"Address\">\n        <mat-option *ngFor=\"let account of accounts\" [value]=\"account\">{{account}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <p>You have <span id=\"balance\">{{model.balance}}</span> META</p>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-header>Send MetaCoin</mat-card-header>\n  <mat-card-content>\n    <mat-form-field>\n      <input type=\"text\" matInput id=\"amount\" placeholder=\"Amount\" (change)=\"setAmount($event)\">\n    </mat-form-field>\n    <mat-form-field class=\"address-field\">\n      <input type=\"text\" matInput id=\"receiver\" placeholder=\"Receiver Address\" (change)=\"setReceiver($event)\">\n    </mat-form-field>\n    <button mat-button id=\"send\" (click)=\"sendCoin()\">Send MetaCoin</button>\n  </mat-card-content>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.ts ***!
  \***********************************************************/
/*! exports provided: MetaSenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaSenderComponent", function() { return MetaSenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var metacoin_artifacts = __webpack_require__(/*! ../../../../../truffle/build/contracts/MetaCoin.json */ "../truffle/build/contracts/MetaCoin.json");
var MetaSenderComponent = /** @class */ (function () {
    function MetaSenderComponent(web3Service, matSnackBar) {
        this.web3Service = web3Service;
        this.matSnackBar = matSnackBar;
        this.model = {
            amount: 5,
            receiver: '',
            balance: 0,
            account: ''
        };
        this.status = '';
        console.log('Constructor: ' + web3Service);
    }
    MetaSenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit: ' + this.web3Service);
        console.log(this);
        this.watchAccount();
        this.web3Service.getToContract(metacoin_artifacts)
            .then(function (MetaCoinAbstraction) {
            _this.MetaCoin = MetaCoinAbstraction;
            _this.MetaCoin.deployed().then(function (deployed) {
                console.log(deployed);
                deployed.Transfer({}, function (err, ev) {
                    console.log('Transfer event came in, refreshing balance');
                    _this.refreshBalance();
                });
            });
        });
    };
    MetaSenderComponent.prototype.watchAccount = function () {
        var _this = this;
        this.web3Service.accountsObservable.subscribe(function (accounts) {
            _this.accounts = accounts;
            _this.model.account = accounts[0];
            _this.refreshBalance();
        });
    };
    MetaSenderComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    MetaSenderComponent.prototype.sendCoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var amount, receiver, deployedMetaCoin, transaction, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.MetaCoin) {
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        amount = this.model.amount;
                        receiver = this.model.receiver;
                        console.log('Sending coins' + amount + ' to ' + receiver);
                        this.setStatus('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.MetaCoin.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        return [4 /*yield*/, deployedMetaCoin.sendCoin.sendTransaction(receiver, amount, { from: this.model.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MetaSenderComponent.prototype.refreshBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedMetaCoin, metaCoinBalance, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Refreshing balance');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.MetaCoin.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        console.log(deployedMetaCoin);
                        console.log('Account', this.model.account);
                        return [4 /*yield*/, deployedMetaCoin.getBalance.call(this.model.account)];
                    case 3:
                        metaCoinBalance = _a.sent();
                        console.log('Found balance: ' + metaCoinBalance);
                        this.model.balance = metaCoinBalance;
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.log(e_2);
                        this.setStatus('Error getting balance; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MetaSenderComponent.prototype.setAmount = function (e) {
        console.log('Setting amount: ' + e.target.value);
        this.model.amount = e.target.value;
    };
    MetaSenderComponent.prototype.setReceiver = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.model.receiver = e.target.value;
    };
    MetaSenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meta-sender',
            template: __webpack_require__(/*! ./meta-sender.component.html */ "./src/app/meta/meta-sender/meta-sender.component.html"),
            styles: [__webpack_require__(/*! ./meta-sender.component.css */ "./src/app/meta/meta-sender/meta-sender.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], MetaSenderComponent);
    return MetaSenderComponent;
}());



/***/ }),

/***/ "./src/app/meta/meta.module.ts":
/*!*************************************!*\
  !*** ./src/app/meta/meta.module.ts ***!
  \*************************************/
/*! exports provided: MetaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaModule", function() { return MetaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta-sender/meta-sender.component */ "./src/app/meta/meta-sender/meta-sender.component.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.module */ "./src/app/util/util.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _rcc_rcc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rcc/rcc.component */ "./src/app/meta/rcc/rcc.component.ts");
/* harmony import */ var _rcc_dao_rcc_dao_b_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rcc-dao/rcc-dao-b.component */ "./src/app/meta/rcc-dao/rcc-dao-b.component.ts");












var MetaModule = /** @class */ (function () {
    function MetaModule() {
    }
    MetaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_4__["UtilModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]
            ],
            declarations: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_3__["MetaSenderComponent"], _rcc_rcc_component__WEBPACK_IMPORTED_MODULE_8__["RccComponent"], _rcc_dao_rcc_dao_b_component__WEBPACK_IMPORTED_MODULE_9__["RccDaoBComponent"]],
            exports: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_3__["MetaSenderComponent"]]
        })
    ], MetaModule);
    return MetaModule;
}());



/***/ }),

/***/ "./src/app/meta/rcc-dao/rcc-dao-b.component.css":
/*!******************************************************!*\
  !*** ./src/app/meta/rcc-dao/rcc-dao-b.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-field {\n    width: 400px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0YS9yY2MtZGFvL3JjYy1kYW8tYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtHQUNkIiwiZmlsZSI6InNyYy9hcHAvbWV0YS9yY2MtZGFvL3JjYy1kYW8tYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHJlc3MtZmllbGQge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/meta/rcc-dao/rcc-dao-b.component.html":
/*!*******************************************************!*\
  !*** ./src/app/meta/rcc-dao/rcc-dao-b.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <button mat-button id=\"send\" (click)=\"init()\">Init</button>\n  <mat-card-header>Default Account</mat-card-header>\n  <mat-card-content>\n    <mat-form-field id=\"address-selector\" class=\"address-field\">\n      <mat-select name=\"account\" (selectionChange)=\"refreshDefaultAccountBalance()\" [(value)]=\"default_account.account\" placeholder=\"Address\">\n        <mat-option *ngFor=\"let account of web3Service.accounts\" [value]=\"account\">{{account}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <p>You have <span id=\"balance\">{{default_account.balance}}</span> RCC</p>\n  </mat-card-content>\n</mat-card>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n        New Associated\n    </mat-panel-title>\n    <mat-panel-description>\n        Alta de un nuevo asociado\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n\n  <mat-card>\n    <mat-card-header>Send newAssociated Transaction</mat-card-header>\n    <mat-card-content>        \n      <mat-form-field class=\"address-field\">\n        <input type=\"text\" matInput id=\"new_associated_address\" placeholder=\"Associated Address\" (change)=\"setNewAssociatedAddress($event)\">\n      </mat-form-field>\n      <mat-form-field class=\"address-field\">\n          <input type=\"text\" matInput id=\"new_associated_name\" placeholder=\"Associated Name\" (change)=\"setNewAssociatedName($event)\">\n        </mat-form-field>\n        <mat-form-field class=\"address-field\">\n            <input type=\"text\" matInput id=\"new_associated_ref\" placeholder=\"Associated Ref\" (change)=\"setNewAssociatedRef($event)\">\n          </mat-form-field>\n      <button mat-button id=\"send\" (click)=\"newAssociated()\">New Associated</button>\n    </mat-card-content>\n  </mat-card>\n\n</mat-expansion-panel>\n\n<mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n          Associatted \n      </mat-panel-title>\n      <mat-panel-description>\n          Get Associatted\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n  \n    <mat-card>\n      <mat-card-header>Get Associatted</mat-card-header>\n      <mat-card-content>\n        <mat-select name=\"associated_address\" [(value)]=\"associated.address\" placeholder=\"Address\">\n          <mat-option *ngFor=\"let account of accounts\" [value]=\"account\">{{account}}</mat-option>\n        </mat-select>\n        <button mat-button id=\"getBalance\" (click)=\"getAssociated()\">Get Associatted</button>\n        <p>Associated Address<span id=\"associated_address\">{{associated.address}}</span></p>\n        <p>Associated Name<span id=\"associated_name\">{{associated.name}}</span></p>\n        <p>Associated Ref<span id=\"associated_ref\">{{associated.ref}}</span></p>\n      </mat-card-content>\n    </mat-card>\n  \n  </mat-expansion-panel>\n  "

/***/ }),

/***/ "./src/app/meta/rcc-dao/rcc-dao-b.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/meta/rcc-dao/rcc-dao-b.component.ts ***!
  \*****************************************************/
/*! exports provided: RccDaoBComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RccDaoBComponent", function() { return RccDaoBComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var rccDao_truffle_contract = __webpack_require__(/*! ../../../../../truffle/build/contracts/RccDao.json */ "../truffle/build/contracts/RccDao.json");
var rcc_truffle_contract = __webpack_require__(/*! ../../../../../truffle/build/contracts/RCC.json */ "../truffle/build/contracts/RCC.json");
var RccDaoBComponent = /** @class */ (function () {
    function RccDaoBComponent(web3Service, matSnackBar) {
        this.web3Service = web3Service;
        this.matSnackBar = matSnackBar;
        this.default_account = {
            amount: 0,
            receiver: '',
            balance: 0,
            account: ''
        };
        this.new_associated = {
            address: '',
            name: '',
            ref: '',
        };
        this.associated = {
            address: '',
            name: '',
            ref: '',
        };
        this.displayedColumns = ['address', 'name', 'ref'];
    }
    RccDaoBComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit: ' + this.web3Service);
        this.refreshAccount().then(function () {
            console.log('Default account: ' + _this.default_account.account);
            _this.refreshDefaultAccountBalance();
        });
        this.web3Service.getToContract(rccDao_truffle_contract)
            .then(function (RccDaoAbstraction) {
            _this.rccDao_contract = RccDaoAbstraction;
            _this.rccDao_contract.deployed().then(function (deployed) {
                _this.deployedRccDao = deployed;
            });
        });
        this.web3Service.getToContract(rcc_truffle_contract)
            .then(function (RccAbstraction) {
            _this.rcc_contract = RccAbstraction;
            _this.rcc_contract.deployed().then(function (deployed) {
                _this.deployedRcc = deployed;
                console.log(deployed);
            });
        });
    };
    RccDaoBComponent.prototype.refreshAccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.web3Service.accounts) {
                    this.web3Service.accountsObservable.subscribe(function (accounts) {
                        _this.default_account.account = accounts[0];
                    });
                }
                else {
                    this.default_account.account = this.web3Service.accounts[0];
                }
                return [2 /*return*/];
            });
        });
    };
    RccDaoBComponent.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var transaction, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.deployedRcc.addMinter.sendTransaction(this.deployedRccDao.address, { from: this.default_account.account })];
                    case 1:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                            console.log('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                            console.log('Transaction complete!');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.setStatus('Error sending new Associated; see log.');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RccDaoBComponent.prototype.refreshDefaultAccountBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rccBalance, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Refreshing balance');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log('Account', this.default_account.account);
                        return [4 /*yield*/, this.deployedRcc.balanceOf.call(this.default_account.account)];
                    case 2:
                        rccBalance = _a.sent();
                        this.default_account.balance = rccBalance;
                        console.log('Found balance: ' + rccBalance);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.log(e_2);
                        this.setStatus('Error getting balance; see log.');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RccDaoBComponent.prototype.newAssociated = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var transaction, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.rccDao_contract) {
                            alert("El contrato rccDao no está desplegado");
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        console.log('Sending transaction of new associated: ' + this.new_associated.address);
                        this.setStatus('Initiating transaction... (please wait)');
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.deployedRccDao.newAssociated.sendTransaction(this.new_associated.address, this.new_associated.name, this.new_associated.ref, true, true, { from: this.default_account.account })];
                    case 2:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                            console.log('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                            console.log('Transaction complete!');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        this.setStatus('Error sending new Associated; see log.');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RccDaoBComponent.prototype.setNewAssociatedAddress = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.new_associated.address = e.target.value;
    };
    RccDaoBComponent.prototype.setNewAssociatedName = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.new_associated.name = e.target.value;
    };
    RccDaoBComponent.prototype.setNewAssociatedRef = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.new_associated.ref = e.target.value;
    };
    RccDaoBComponent.prototype.getAssociatedList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedRccDao, _a, e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.rccDao_contract) {
                            alert("El contrato rccDao no está desplegado");
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        console.log('Sending transaction of getAssociatedList: ');
                        this.setStatus('Initiating transaction... (please wait)');
                        console.log('Initiating transaction... (please wait)');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rccDao_contract.deployed()];
                    case 2:
                        deployedRccDao = _b.sent();
                        _a = this;
                        return [4 /*yield*/, deployedRccDao.getAssociatedList.call()];
                    case 3:
                        _a.associatedList = _b.sent();
                        console.log(this.associatedList);
                        return [3 /*break*/, 5];
                    case 4:
                        e_4 = _b.sent();
                        console.log(e_4);
                        this.setStatus('Error sending new Associated; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RccDaoBComponent.prototype.getAssociated = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedRccDao, associated, e_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.rccDao_contract) {
                            alert("El contrato rccDao no está desplegado");
                            this.setStatus('Metacoin is not loaded, unable to call transaction');
                            return [2 /*return*/];
                        }
                        console.log('Sending transaction of getAssociated: ');
                        this.setStatus('Initiating transaction... (please wait)');
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rccDao_contract.deployed()];
                    case 2:
                        deployedRccDao = _a.sent();
                        return [4 /*yield*/, deployedRccDao.getAssociated.call(this.associated.address)];
                    case 3:
                        associated = _a.sent();
                        console.log(associated);
                        this.associated.name = associated.name;
                        this.associated.ref = associated.ref;
                        return [3 /*break*/, 5];
                    case 4:
                        e_5 = _a.sent();
                        console.log(e_5);
                        this.setStatus('Error sending new Associated; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /*
    async getAssociatedTable() {
      this.associatedTable = new Array<IAssociated>();
      await this.getAssociatedList();
      this.associatedList.forEach(async associated_address => {
        const associated = await this.getAssociated(associated_address);
        this.dataSource.data.push({"address": associated_address, "name": associated.name, "ref": associated.ref} as IAssociated);
        
        //this.associatedTable.push({"address": associated_address, "name": associated.name, "ref": associated.ref});
        alert(JSON.stringify(this.dataSource.data))
      });
    }
    */
    RccDaoBComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    RccDaoBComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rcc-dao-b',
            template: __webpack_require__(/*! ./rcc-dao-b.component.html */ "./src/app/meta/rcc-dao/rcc-dao-b.component.html"),
            styles: [__webpack_require__(/*! ./rcc-dao-b.component.css */ "./src/app/meta/rcc-dao/rcc-dao-b.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], RccDaoBComponent);
    return RccDaoBComponent;
}());



/***/ }),

/***/ "./src/app/meta/rcc/rcc.component.css":
/*!********************************************!*\
  !*** ./src/app/meta/rcc/rcc.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-field {\n    width: 400px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0YS9yY2MvcmNjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0dBQ2QiLCJmaWxlIjoic3JjL2FwcC9tZXRhL3JjYy9yY2MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzLWZpZWxkIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/meta/rcc/rcc.component.html":
/*!*********************************************!*\
  !*** ./src/app/meta/rcc/rcc.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <mat-card-header>Default Account</mat-card-header>\n  <mat-card-content>\n    <mat-form-field id=\"address-selector\" class=\"address-field\">\n      <mat-select name=\"account\" (selectionChange)=\"refreshBalance()\" [(value)]=\"default_account.account\" placeholder=\"Address\">\n        <mat-option *ngFor=\"let account of accounts\" [value]=\"account\">{{account}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <p>You have <span id=\"balance\">{{default_account.balance}}</span> RCC</p>\n  </mat-card-content>\n</mat-card>\n\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n        Envío Externo\n    </mat-panel-title>\n    <mat-panel-description>\n        Envio de RCC a una dirección Externa\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n\n  <mat-card>\n    <mat-card-header>Send RCC Coin</mat-card-header>\n    <mat-card-content>\n      <mat-form-field>\n        <input type=\"text\" matInput id=\"amount\" placeholder=\"Amount\" (change)=\"setAmount($event)\">\n      </mat-form-field>\n      <mat-form-field class=\"address-field\">\n        <input type=\"text\" matInput id=\"receiver\" placeholder=\"Receiver Address\" (change)=\"setReceiver($event)\">\n      </mat-form-field>\n      <button mat-button id=\"send\" (click)=\"sendRCC()\">Send RCC Coin</button>\n    </mat-card-content>\n  </mat-card>\n\n</mat-expansion-panel>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n        Envío entre Cuentas\n    </mat-panel-title>\n    <mat-panel-description>\n        Envio de RCC a una cuenta propia\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n\n  <mat-card>\n    <mat-card-header>Send RCC Coin to Wallet Account</mat-card-header>\n    <mat-card-content>\n      <mat-form-field>\n        <input type=\"text\" matInput id=\"rcc_amount\" placeholder=\"Amount\" (change)=\"setRccAmount($event)\">\n      </mat-form-field>\n      <mat-form-field id=\"address-selector\" class=\"address-field\">\n          <mat-select name=\"account\" (selectionChange)=\"refreshRccBalance()\" [(value)]=\"rcc_account.account\" placeholder=\"Address\">\n            <mat-option *ngFor=\"let account of accounts\" [value]=\"account\">{{account}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      <button mat-button id=\"send\" (click)=\"sendRCCAccount()\">Send RCC Coin</button>\n      <p>The Balance of {{rcc_account.account}} is <span id=\"balance_rcc_account\">{{rcc_account.balance}}</span> RCC</p>\n    </mat-card-content>\n  </mat-card>\n\n</mat-expansion-panel>\n\n<mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n          Mint\n      </mat-panel-title>\n      <mat-panel-description>\n          Genera RCC para una cuenta propia a través del método Mint\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n  \n    <mat-card>\n      <mat-card-header>Generate RCC Coin to Wallet Account</mat-card-header>\n      <mat-card-content>\n        <mat-form-field>\n          <input type=\"text\" matInput id=\"mint_amount\" placeholder=\"Amount\" (change)=\"setMintAmount($event)\">\n        </mat-form-field>\n        <mat-form-field id=\"address-selector\" class=\"address-field\">\n            <mat-select name=\"mint_account\" (selectionChange)=\"refreshMintBalance()\" [(value)]=\"mint_account.account\" placeholder=\"Address\">\n              <mat-option *ngFor=\"let account of accounts\" [value]=\"account\">{{account}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        <button mat-button id=\"send\" (click)=\"sendMintAccount()\">Send RCC Coin</button>\n        <p>The Balance of {{rcc_account.account}} is <span id=\"balance_mint_account\">{{mint_account.balance}}</span> RCC</p>\n      </mat-card-content>\n    </mat-card>\n  \n  </mat-expansion-panel>\n\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n        Saldo\n    </mat-panel-title>\n    <mat-panel-description>\n        Comprobación de Saldo\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n\n  <mat-card>\n    <mat-card-header>Comprobación de Saldo</mat-card-header>\n    <mat-card-content>\n      <mat-form-field class=\"address-field\">\n        <input type=\"text\" matInput id=\"balance_address\" placeholder=\"Address\" (change)=\"setAddressBalance($event)\">\n      </mat-form-field>\n      <button mat-button id=\"getBalance\" (click)=\"getBalance()\">Get Balance</button>\n      <p>The Balance is <span id=\"balance_account\">{{balance_account.balance}}</span> RCC</p>\n    </mat-card-content>\n  </mat-card>\n\n</mat-expansion-panel>\n\n\n<mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n          Add Minter\n      </mat-panel-title>\n      <mat-panel-description>\n          Crea un nuevo Minter\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n  \n    <mat-card>\n      <mat-card-header>Add Minter</mat-card-header>\n      <mat-card-content>        \n        <mat-form-field id=\"address-selector\" class=\"address-field\">\n          <input type=\"text\" matInput id=\"minter_account\" placeholder=\"Address\" (change)=\"setMinterAccount($event)\">            \n        </mat-form-field>\n        <button mat-button id=\"send\" (click)=\"sendAddMinter()\">Add Minter</button>        \n      </mat-card-content>\n    </mat-card>\n  \n  </mat-expansion-panel>\n\n\n    \n"

/***/ }),

/***/ "./src/app/meta/rcc/rcc.component.ts":
/*!*******************************************!*\
  !*** ./src/app/meta/rcc/rcc.component.ts ***!
  \*******************************************/
/*! exports provided: RccComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RccComponent", function() { return RccComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var rcc_contract = __webpack_require__(/*! ../../../../../truffle/build/contracts/RCC.json */ "../truffle/build/contracts/RCC.json");
var RccComponent = /** @class */ (function () {
    function RccComponent(web3Service, matSnackBar) {
        this.web3Service = web3Service;
        this.matSnackBar = matSnackBar;
        this.default_account = {
            amount: 0,
            receiver: '',
            balance: 0,
            account: ''
        };
        this.rcc_account = {
            amount: 0,
            balance: 0,
            account: ''
        };
        this.mint_account = {
            amount: 0,
            balance: 0,
            account: ''
        };
        this.minter_account = {
            amount: 0,
            balance: 0,
            account: ''
        };
        this.balance_account = {
            amount: 0,
            balance: 0,
            account: ''
        };
    }
    RccComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit: ' + this.web3Service);
        console.log(this);
        this.refreshAccount();
        this.web3Service.getToContract(rcc_contract)
            .then(function (RccAbstraction) {
            _this.rcc_contract = RccAbstraction;
            _this.rcc_contract.deployed().then(function (deployed) {
                console.log(deployed);
                /*
                deployed.Transfer({}, (err, ev) => {
                  console.log('Transfer event came in, refreshing balance');
                  this.refreshBalance();
                });
                */
            });
        });
    };
    RccComponent.prototype.refreshAccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.web3Service.accounts) {
                    this.web3Service.accountsObservable.subscribe(function (accounts) {
                        _this.accounts = accounts;
                        _this.default_account.account = _this.accounts[0];
                        console.log('Default account: ' + _this.default_account.account);
                        _this.refreshDefaultAccountBalance();
                    });
                }
                else {
                    this.accounts = this.web3Service.accounts;
                    this.default_account.account = this.accounts[0];
                    console.log('Default account: ' + this.default_account.account);
                    this.refreshDefaultAccountBalance();
                }
                return [2 /*return*/];
            });
        });
    };
    RccComponent.prototype.refreshDefaultAccountBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedRcc, rccBalance, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Refreshing balance');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rcc_contract.deployed()];
                    case 2:
                        deployedRcc = _a.sent();
                        console.log(deployedRcc);
                        console.log('Account', this.default_account.account);
                        return [4 /*yield*/, deployedRcc.balanceOf.call(this.default_account.account)];
                    case 3:
                        rccBalance = _a.sent();
                        console.log('Found balance: ' + rccBalance);
                        this.default_account.balance = rccBalance;
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.setStatus('Error getting balance; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RccComponent.prototype.setAmount = function (e) {
        console.log('Setting amount: ' + e.target.value);
        this.default_account.amount = e.target.value;
    };
    RccComponent.prototype.setReceiver = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.default_account.receiver = e.target.value;
    };
    RccComponent.prototype.sendRCC = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var amount, receiver, deployedRcc, transaction, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.rcc_contract) {
                            alert("El contrato rcc no está desplegado");
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        amount = this.default_account.amount;
                        receiver = this.default_account.receiver;
                        console.log('Sending coins' + amount + ' to ' + receiver);
                        this.setStatus('Initiating transaction... (please wait)');
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rcc_contract.deployed()];
                    case 2:
                        deployedRcc = _a.sent();
                        return [4 /*yield*/, deployedRcc.transfer.sendTransaction(receiver, amount, { from: this.default_account.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                            console.log('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                            console.log('Transaction complete!');
                            this.refreshDefaultAccountBalance();
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.log(e_2);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RccComponent.prototype.setAddressBalance = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.balance_account.account = e.target.value;
    };
    RccComponent.prototype.getBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var amount, balance_account, deployedRcc, rccBalance, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.rcc_contract) {
                            alert("El contrato rcc no está desplegado");
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        amount = this.default_account.amount;
                        balance_account = this.balance_account.account;
                        console.log('Getting coins of ' + balance_account);
                        this.setStatus('Initiating transaction... (please wait)');
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rcc_contract.deployed()];
                    case 2:
                        deployedRcc = _a.sent();
                        return [4 /*yield*/, deployedRcc.balanceOf.call(this.balance_account.account)];
                    case 3:
                        rccBalance = _a.sent();
                        console.log('Found balance: ' + rccBalance);
                        this.balance_account.balance = rccBalance;
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        console.log(e_3);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RccComponent.prototype.sendRCCAccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var amount, receiver, deployedRcc, transaction, e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.rcc_contract) {
                            alert("El contrato rcc no está desplegado");
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        amount = this.rcc_account.amount;
                        receiver = this.rcc_account.account;
                        console.log('Sending coins' + amount + ' to ' + receiver);
                        this.setStatus('Initiating transaction... (please wait)');
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rcc_contract.deployed()];
                    case 2:
                        deployedRcc = _a.sent();
                        return [4 /*yield*/, deployedRcc.transfer.sendTransaction(receiver, amount, { from: this.default_account.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                            console.log('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                            console.log('Transaction complete!');
                            this.refreshDefaultAccountBalance();
                            this.refreshRccBalance();
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_4 = _a.sent();
                        console.log(e_4);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RccComponent.prototype.setRccAmount = function (e) {
        console.log('Setting amount: ' + e.target.value);
        this.rcc_account.amount = e.target.value;
    };
    RccComponent.prototype.refreshRccBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedRcc, rccBalance, e_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Refreshing balance');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rcc_contract.deployed()];
                    case 2:
                        deployedRcc = _a.sent();
                        console.log(deployedRcc);
                        console.log('Account', this.rcc_account.account);
                        return [4 /*yield*/, deployedRcc.balanceOf.call(this.rcc_account.account)];
                    case 3:
                        rccBalance = _a.sent();
                        console.log('Found balance: ' + rccBalance);
                        this.rcc_account.balance = rccBalance;
                        return [3 /*break*/, 5];
                    case 4:
                        e_5 = _a.sent();
                        console.log(e_5);
                        this.setStatus('Error getting balance; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RccComponent.prototype.sendMintAccount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var amount, receiver, deployedRcc, transaction, e_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.rcc_contract) {
                            alert("El contrato rcc no está desplegado");
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        amount = this.mint_account.amount;
                        receiver = this.mint_account.account;
                        console.log('Sending coins' + amount + ' to ' + receiver);
                        this.setStatus('Initiating transaction... (please wait)');
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rcc_contract.deployed()];
                    case 2:
                        deployedRcc = _a.sent();
                        return [4 /*yield*/, deployedRcc.mint.sendTransaction(receiver, amount, { from: this.default_account.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                            console.log('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                            console.log('Transaction complete!');
                            this.refreshDefaultAccountBalance();
                            this.refreshMintBalance();
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_6 = _a.sent();
                        console.log(e_6);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RccComponent.prototype.setMintAmount = function (e) {
        console.log('Setting amount: ' + e.target.value);
        this.mint_account.amount = e.target.value;
    };
    RccComponent.prototype.refreshMintBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedRcc, rccBalance, e_7;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Refreshing balance');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rcc_contract.deployed()];
                    case 2:
                        deployedRcc = _a.sent();
                        console.log(deployedRcc);
                        console.log('Account', this.mint_account.account);
                        return [4 /*yield*/, deployedRcc.balanceOf.call(this.mint_account.account)];
                    case 3:
                        rccBalance = _a.sent();
                        console.log('Found balance: ' + rccBalance);
                        this.mint_account.balance = rccBalance;
                        return [3 /*break*/, 5];
                    case 4:
                        e_7 = _a.sent();
                        console.log(e_7);
                        this.setStatus('Error getting balance; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RccComponent.prototype.sendAddMinter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var receiver, deployedRcc, transaction, e_8;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.rcc_contract) {
                            alert("El contrato rcc no está desplegado");
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        receiver = this.minter_account.account;
                        this.setStatus('Initiating transaction... (please wait)');
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rcc_contract.deployed()];
                    case 2:
                        deployedRcc = _a.sent();
                        return [4 /*yield*/, deployedRcc.addMinter.sendTransaction(receiver, { from: this.default_account.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                            console.log('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                            console.log('Transaction complete!');
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_8 = _a.sent();
                        console.log(e_8);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RccComponent.prototype.setMinterAccount = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.minter_account.account = e.target.value;
    };
    RccComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    RccComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rcc',
            template: __webpack_require__(/*! ./rcc.component.html */ "./src/app/meta/rcc/rcc.component.html"),
            styles: [__webpack_require__(/*! ./rcc.component.css */ "./src/app/meta/rcc/rcc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], RccComponent);
    return RccComponent;
}());



/***/ }),

/***/ "./src/app/rccDao/add-associated/add-associated.component.css":
/*!********************************************************************!*\
  !*** ./src/app/rccDao/add-associated/add-associated.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JjY0Rhby9hZGQtYXNzb2NpYXRlZC9hZGQtYXNzb2NpYXRlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/rccDao/add-associated/add-associated.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/rccDao/add-associated/add-associated.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-fujitsu w-100\">\n  <span  class=\"card-header-fujitsu bg-fujitsu\" >New Associated\n      <button type=\"button\" class=\"close card-close-fujitsu\"  [attr.aria-label]=\"'Close'\" (click)=\"closeModal()\"><span aria-hidden=\"true\">&times;</span></button>            \n  </span>  \n  <div class=\"card-body card-body-fujitsu\">\n    <form class=\"form\" [formGroup]=\"addAssociated\" >          \n      <div class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Address</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Address\" formControlName=\"address\" required autofocus [(ngModel)]=\"associated.address\" >\n      </div>\n      <div class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Name</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" required [(ngModel)]=\"associated.name\" >\n      </div>\n      <div class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Ref</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Ref\" formControlName=\"ref\" required [(ngModel)]=\"associated.ref\" >\n      </div>      \n      <div class=\"btn-group\" style = \"float:right\">\n        <button  *ngIf=\"mode=='add'\" type=\"submit\" [disabled]=\"!addAssociated.valid\" class=\"btn btn-mg btn-outline-secondary btn-fujitsu mr-1 pull-right\" (click)=\"add()\">Add</button>        \n        <button aria-label=\"Cancel\" type=\"submit\" class=\"btn btn-mg btn-outline-secondary btn-fujitsu pull-right\" (click)=\"closeModal()\">Cancel</button>      \n      </div>\n    </form>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/rccDao/add-associated/add-associated.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/rccDao/add-associated/add-associated.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddAssociatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssociatedComponent", function() { return AddAssociatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _util_rccDao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/rccDao.service */ "./src/app/util/rccDao.service.ts");







var AddAssociatedComponent = /** @class */ (function () {
    function AddAssociatedComponent(modalService, activeModal, rccDaoService, matSnackBar) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.rccDaoService = rccDaoService;
        this.matSnackBar = matSnackBar;
    }
    AddAssociatedComponent.prototype.ngOnInit = function () {
        this.addAssociated = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            ref: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    };
    AddAssociatedComponent.prototype.add = function () {
        var _this = this;
        this.rccDaoService.newAssociated(this.associated.address, this.associated.name, this.associated.ref)
            .then(function (result) {
            if (result == "OK") {
                _this.activeModal.close('OK');
                _this.setStatus("Se ha incluido un nuevo asociado");
            }
            else {
                _this.activeModal.close('OK');
                _this.setStatus("No se ha podido añadir un nuevo asociado");
            }
        }, function (err) {
            console.log(err);
            _this.activeModal.close('OK');
            _this.setStatus("No se ha podido añadir un nuevo asociado. Error: " + JSON.stringify(err));
        });
    };
    AddAssociatedComponent.prototype.closeModal = function () {
        this.activeModal.close('KO');
    };
    AddAssociatedComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddAssociatedComponent.prototype, "associated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AddAssociatedComponent.prototype, "mode", void 0);
    AddAssociatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-associated-review',
            template: __webpack_require__(/*! ./add-associated.component.html */ "./src/app/rccDao/add-associated/add-associated.component.html"),
            styles: [__webpack_require__(/*! ./add-associated.component.css */ "./src/app/rccDao/add-associated/add-associated.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _util_rccDao_service__WEBPACK_IMPORTED_MODULE_5__["RccDaoService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AddAssociatedComponent);
    return AddAssociatedComponent;
}());



/***/ }),

/***/ "./src/app/rccDao/ask/ask.component.css":
/*!**********************************************!*\
  !*** ./src/app/rccDao/ask/ask.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JjY0Rhby9hc2svYXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/rccDao/ask/ask.component.html":
/*!***********************************************!*\
  !*** ./src/app/rccDao/ask/ask.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-fujitsu w-100\">\n  <span  class=\"card-header-fujitsu bg-fujitsu\" >Ask for Supply\n      <button type=\"button\" class=\"close card-close-fujitsu\"  [attr.aria-label]=\"'Close'\" (click)=\"closeModal()\"><span aria-hidden=\"true\">&times;</span></button>            \n  </span>  \n  <div class=\"card-body card-body-fujitsu\">\n    <form class=\"form\" [formGroup]=\"askForm\" >          \n      <div class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Associated Address</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Address Associated\" formControlName=\"address\" disabled [(ngModel)]=\"ask.address\" >        \n      </div>\n      <div class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Amount</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Amount\" formControlName=\"amount\" required [(ngModel)]=\"ask.amount\" >\n      </div> \n      <div class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Message</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Message\" formControlName=\"message\" required [(ngModel)]=\"ask.message\" >\n      </div>      \n      <div class=\"btn-group\" style = \"float:right\">\n        <button  type=\"submit\" [disabled]=\"!askForm.valid\" class=\"btn btn-mg btn-outline-secondary btn-fujitsu mr-1 pull-right\" (click)=\"ask()\">Ask</button>        \n        <button aria-label=\"Cancel\" type=\"submit\" class=\"btn btn-mg btn-outline-secondary btn-fujitsu pull-right\" (click)=\"closeModal()\">Cancel</button>      \n      </div>\n    </form>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/rccDao/ask/ask.component.ts":
/*!*********************************************!*\
  !*** ./src/app/rccDao/ask/ask.component.ts ***!
  \*********************************************/
/*! exports provided: AskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskComponent", function() { return AskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _util_rccDao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/rccDao.service */ "./src/app/util/rccDao.service.ts");







var AskComponent = /** @class */ (function () {
    function AskComponent(modalService, activeModal, rccDaoService, matSnackBar) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.rccDaoService = rccDaoService;
        this.matSnackBar = matSnackBar;
    }
    AskComponent.prototype.ngOnInit = function () {
        this.askForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    };
    AskComponent.prototype.ask = function () {
        var _this = this;
        alert(1);
        this.rccDaoService.ask(this.associated.address, this.associated.amount, this.associated.message)
            .then(function (result) {
            if (result == "OK") {
                _this.activeModal.close('OK');
                _this.setStatus("Se ha realizado una petición de Token");
            }
        }, function (err) { return console.log(err); });
    };
    AskComponent.prototype.closeModal = function () {
        this.activeModal.close('KO');
    };
    AskComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AskComponent.prototype, "associated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AskComponent.prototype, "mode", void 0);
    AskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ask-review',
            template: __webpack_require__(/*! ./ask.component.html */ "./src/app/rccDao/ask/ask.component.html"),
            styles: [__webpack_require__(/*! ./ask.component.css */ "./src/app/rccDao/ask/ask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _util_rccDao_service__WEBPACK_IMPORTED_MODULE_5__["RccDaoService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AskComponent);
    return AskComponent;
}());



/***/ }),

/***/ "./src/app/rccDao/rcc/rcc.component.css":
/*!**********************************************!*\
  !*** ./src/app/rccDao/rcc/rcc.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JjY0Rhby9yY2MvcmNjLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/rccDao/rcc/rcc.component.html":
/*!***********************************************!*\
  !*** ./src/app/rccDao/rcc/rcc.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-fujitsu w-100\">\n  <span  class=\"card-header-fujitsu bg-fujitsu\" >RCC Transaction Panel\n      <button type=\"button\" class=\"close card-close-fujitsu\"  [attr.aria-label]=\"'Close'\" (click)=\"closeModal()\"><span aria-hidden=\"true\">&times;</span></button>            \n  </span>  \n  <div class=\"card-body card-body-fujitsu\">\n    <form class=\"form\" [formGroup]=\"rccForm\" >          \n      <div *ngIf=\"mode=='send'\" class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Address</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Address\" formControlName=\"address\" required autofocus [(ngModel)]=\"rcc.address\" >\n      </div>\n      <div *ngIf=\"mode=='send_internal'\" class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Wallet Address</span>\n        </div>\n        <select class=\"form-control\" formControlName=\"address_wallet\" [(ngModel)]=\"rcc.address\" >           \n          <option *ngFor=\"let account of web3Service.accounts\" >{{account}}</option> \n        </select> \n      </div> \n      <div *ngIf=\"mode=='minter'\" class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Associated Address</span>\n        </div>\n        <select class=\"form-control\" formControlName=\"address_associated\" [(ngModel)]=\"rcc.address\" >           \n          <option *ngFor=\"let account of rccDaoService.associatedList\" >{{account}}</option> \n        </select> \n      </div>      \n      <div class=\"input-group mb-2\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Amount</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Amount\" formControlName=\"amount\" required [(ngModel)]=\"rcc.amount\" >\n      </div>            \n      <div class=\"btn-group\" style = \"float:right\">\n        <button  *ngIf=\"mode=='send' || mode=='send_internal'\" type=\"submit\" [disabled]=\"!rccForm.valid\" class=\"btn btn-mg btn-outline-secondary btn-fujitsu mr-1 pull-right\" (click)=\"send()\">Send</button>        \n        <button  *ngIf=\"mode=='minter'\" type=\"submit\" [disabled]=\"!rccForm.valid\" class=\"btn btn-mg btn-outline-secondary btn-fujitsu mr-1 pull-right\" (click)=\"mint()\">Mint</button>        \n        <button aria-label=\"Cancel\" type=\"submit\" class=\"btn btn-mg btn-outline-secondary btn-fujitsu pull-right\" (click)=\"closeModal()\">Cancel</button>      \n      </div>\n    </form>\n  </div>\n</div> \n"

/***/ }),

/***/ "./src/app/rccDao/rcc/rcc.component.ts":
/*!*********************************************!*\
  !*** ./src/app/rccDao/rcc/rcc.component.ts ***!
  \*********************************************/
/*! exports provided: RccComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RccComponent", function() { return RccComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_rccDao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/rccDao.service */ "./src/app/util/rccDao.service.ts");
/* harmony import */ var _util_rcc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/rcc.service */ "./src/app/util/rcc.service.ts");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");








var RccComponent = /** @class */ (function () {
    function RccComponent(modalService, activeModal, rccService, rccDaoService, web3Service) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.rccService = rccService;
        this.rccDaoService = rccDaoService;
        this.web3Service = web3Service;
    }
    RccComponent.prototype.ngOnInit = function () {
        this.rccForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            address_wallet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            address_associated: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        this.rccDaoService.getAssociatedList();
    };
    RccComponent.prototype.send = function () {
        var _this = this;
        this.rccService.sendRCC(this.rcc.address, this.rcc.amount)
            .then(function (result) {
            if (result == "OK") {
                _this.activeModal.close('OK');
            }
        }, function (err) { return console.log(err); });
    };
    RccComponent.prototype.mint = function () {
        var _this = this;
        this.rccService.mintRCC(this.rcc.address, this.rcc.amount)
            .then(function (result) {
            if (result == "OK") {
                _this.activeModal.close('OK');
            }
        }, function (err) { return console.log(err); });
    };
    RccComponent.prototype.closeModal = function () {
        this.activeModal.close('KO');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RccComponent.prototype, "rcc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RccComponent.prototype, "mode", void 0);
    RccComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rcc-review',
            template: __webpack_require__(/*! ./rcc.component.html */ "./src/app/rccDao/rcc/rcc.component.html"),
            styles: [__webpack_require__(/*! ./rcc.component.css */ "./src/app/rccDao/rcc/rcc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _util_rcc_service__WEBPACK_IMPORTED_MODULE_5__["RccService"],
            _util_rccDao_service__WEBPACK_IMPORTED_MODULE_4__["RccDaoService"],
            _util_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"]])
    ], RccComponent);
    return RccComponent;
}());



/***/ }),

/***/ "./src/app/rccDao/rccDao.module.ts":
/*!*****************************************!*\
  !*** ./src/app/rccDao/rccDao.module.ts ***!
  \*****************************************/
/*! exports provided: RccDaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RccDaoModule", function() { return RccDaoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _rccDao_rccDao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rccDao/rccDao.component */ "./src/app/rccDao/rccDao/rccDao.component.ts");
/* harmony import */ var _add_associated_add_associated_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-associated/add-associated.component */ "./src/app/rccDao/add-associated/add-associated.component.ts");
/* harmony import */ var _rcc_rcc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rcc/rcc.component */ "./src/app/rccDao/rcc/rcc.component.ts");
/* harmony import */ var _ask_ask_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ask/ask.component */ "./src/app/rccDao/ask/ask.component.ts");










var RccDaoModule = /** @class */ (function () {
    function RccDaoModule() {
    }
    RccDaoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _rccDao_rccDao_component__WEBPACK_IMPORTED_MODULE_6__["RccDaoComponent"],
                _add_associated_add_associated_component__WEBPACK_IMPORTED_MODULE_7__["AddAssociatedComponent"],
                _rcc_rcc_component__WEBPACK_IMPORTED_MODULE_8__["RccComponent"],
                _ask_ask_component__WEBPACK_IMPORTED_MODULE_9__["AskComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            entryComponents: [
                _add_associated_add_associated_component__WEBPACK_IMPORTED_MODULE_7__["AddAssociatedComponent"],
                _rcc_rcc_component__WEBPACK_IMPORTED_MODULE_8__["RccComponent"],
                _ask_ask_component__WEBPACK_IMPORTED_MODULE_9__["AskComponent"]
            ],
            exports: [
                _rccDao_rccDao_component__WEBPACK_IMPORTED_MODULE_6__["RccDaoComponent"]
            ]
        })
    ], RccDaoModule);
    return RccDaoModule;
}());



/***/ }),

/***/ "./src/app/rccDao/rccDao/rccDao.component.css":
/*!****************************************************!*\
  !*** ./src/app/rccDao/rccDao/rccDao.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JjY0Rhby9yY2NEYW8vcmNjRGFvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/rccDao/rccDao/rccDao.component.html":
/*!*****************************************************!*\
  !*** ./src/app/rccDao/rccDao/rccDao.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12 mt-2\"> \n  <div class=\"card border-fujitsu w-100 ml-2 mt-4 mr-2\" style=\"max-width: 100%;\">\n    <span class=\"card-header-fujitsu bg-fujitsu\">RCC Management\n    </span>    \n    <div class=\"card-body\" class=\"card-body-fujitsu\">  \n      <form class=\"form-inline\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Account</span>\n          </div>\n          <select class=\"form-control\" autofocus [(ngModel)]=\"web3Service.default_account.account\" [ngModelOptions]=\"{standalone: true}\" (change)=\"web3Service.updateBalance()\" >\n            <option *ngFor=\"let account of web3Service.accounts\" >{{account}}</option> \n          </select> \n        </div> \n        <div class=\"input-group ml-2\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">Balance</span>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Amount\" disabled [(ngModel)]=\"web3Service.default_account.balance\" [ngModelOptions]=\"{standalone: true}\">\n        </div>              \n        <div class=\"btn-group ml-4 mb-2 mt-2\" style = \"float:right\">\n          <button  class=\"btn btn-mg btn-outline-secondary btn-fujitsu mr-1 pull-right\" (click)=\"rcc('','send')\">Send</button>        \n          <button  class=\"btn btn-mg btn-outline-secondary btn-fujitsu mr-1 pull-right\" (click)=\"rcc('','send_internal')\">Send (Wallet)</button>\n          <button  class=\"btn btn-mg btn-outline-secondary btn-fujitsu mr-1 pull-right\" (click)=\"rcc('','minter')\">Mint</button>\n        </div>\n      </form>\n    </div>    \n  </div>\n</div>\n\n<div class=\"row col-md-12\"> \n  <div class=\"card border-fujitsu w-100 ml-2 mt-2 mr-2\" style=\"max-width: 100%;\">\n    <span class=\"card-header-fujitsu bg-fujitsu\">Associated List\n        <button class=\"btn btn-link text-white\" (click)=\"addAssociated()\" style = \"float: right\">Add</button>                  \n    </span>\n    <div class=\"card-body\">  \n      <table class=\"table fujitsu-table\">\n        <thead>\n        <tr>        \n          <th scope=\"col\">Address</th>\n          <th scope=\"col\">Balance</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Ref</th>\n          <th scope=\"col\">Enabled</th>\n          <th scope=\"col\">Minter</th>          \n          <th scope=\"col\">Ask</th>          \n        </tr>\n        </thead>\n        <tbody>\n        <tr [class.active]=\"i == selectedRow\" *ngFor=\"let associated of rccDaoService.associatedTable; index as i\" (click)=\"select(i, associated)\">                \n          <td style=\"vertical-align: middle;\" class=\"text-link\" (click)=\"rcc(associated.address, 'minter')\">{{ associated.address }}</td>\n          <td style=\"vertical-align: middle;\">{{ associated.balance }}</td>\n          <td style=\"vertical-align: middle;\">{{ associated.name }}</td>\n          <td style=\"vertical-align: middle;\">{{ associated.ref }}</td>\n          <td style=\"vertical-align: middle;\">{{ associated.enabled }}</td>\n          <td style=\"vertical-align: middle;\">{{ associated.minter }}</td>\n          <td>\n              <button class=\"btn btn-mg btn-outline-secondary btn-fujitsu\" (click)=\"ask(associated.address)\">Ask</button>      \n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/rccDao/rccDao/rccDao.component.ts":
/*!***************************************************!*\
  !*** ./src/app/rccDao/rccDao/rccDao.component.ts ***!
  \***************************************************/
/*! exports provided: RccDaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RccDaoComponent", function() { return RccDaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _add_associated_add_associated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-associated/add-associated.component */ "./src/app/rccDao/add-associated/add-associated.component.ts");
/* harmony import */ var _rcc_rcc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rcc/rcc.component */ "./src/app/rccDao/rcc/rcc.component.ts");
/* harmony import */ var _ask_ask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ask/ask.component */ "./src/app/rccDao/ask/ask.component.ts");
/* harmony import */ var _util_rccDao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/rccDao.service */ "./src/app/util/rccDao.service.ts");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var RccDaoComponent = /** @class */ (function () {
    function RccDaoComponent(rccDaoService, web3Service, modalService, matSnackBar) {
        this.rccDaoService = rccDaoService;
        this.web3Service = web3Service;
        this.modalService = modalService;
        this.matSnackBar = matSnackBar;
        this.isAlertSuccessDisplayed = true;
        this.isAlertFailDisplayed = true;
    }
    RccDaoComponent.prototype.ngOnInit = function () {
        this.updateWeb3();
    };
    RccDaoComponent.prototype.updateWeb3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var delay;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.web3Service.ready) return [3 /*break*/, 2];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        this.ngOnInit();
                        return [3 /*break*/, 3];
                    case 2:
                        this.rccDaoService.getAssociatedTable();
                        this.web3Service.updateBalance();
                        this.rccDaoService.activate();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RccDaoComponent.prototype.addAssociated = function () {
        var _this = this;
        var modalRef = this.modalService.open(_add_associated_add_associated_component__WEBPACK_IMPORTED_MODULE_3__["AddAssociatedComponent"], { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.mode = "add";
        modalRef.componentInstance.associated = {};
        modalRef.result.then(function (result) {
            if (result == 'OK') {
                _this.rccDaoService.getAssociatedTable();
                _this.selectedRow = -1;
            }
        }).catch(function (error) {
        });
    };
    RccDaoComponent.prototype.rcc = function (address, mode) {
        var modalRef = this.modalService.open(_rcc_rcc_component__WEBPACK_IMPORTED_MODULE_4__["RccComponent"], { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.mode = mode;
        modalRef.componentInstance.rcc = { address: address, ammount: 0 };
        modalRef.result.then(function (result) {
            if (result == 'OK') {
            }
        }).catch(function (error) {
        });
    };
    RccDaoComponent.prototype.ask = function (address) {
        var modalRef = this.modalService.open(_ask_ask_component__WEBPACK_IMPORTED_MODULE_5__["AskComponent"], { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.ask = { address: address, ammount: 0, message: "" };
        modalRef.result.then(function (result) {
            if (result == 'OK') {
            }
        }).catch(function (error) {
        });
    };
    RccDaoComponent.prototype.select = function (index, associated) {
        if (this.selectedRow == index) {
            this.selectedRow = -1;
        }
        else {
            this.selectedRow = index;
            this.associated_selected = associated;
        }
    };
    RccDaoComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    RccDaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rccDao',
            template: __webpack_require__(/*! ./rccDao.component.html */ "./src/app/rccDao/rccDao/rccDao.component.html"),
            styles: [__webpack_require__(/*! ./rccDao.component.css */ "./src/app/rccDao/rccDao/rccDao.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_rccDao_service__WEBPACK_IMPORTED_MODULE_6__["RccDaoService"],
            _util_web3_service__WEBPACK_IMPORTED_MODULE_7__["Web3Service"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], RccDaoComponent);
    return RccDaoComponent;
}());



/***/ }),

/***/ "./src/app/util/rcc.service.ts":
/*!*************************************!*\
  !*** ./src/app/util/rcc.service.ts ***!
  \*************************************/
/*! exports provided: RccService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RccService", function() { return RccService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/web3.service */ "./src/app/util/web3.service.ts");



var RccService = /** @class */ (function () {
    function RccService(web3Service) {
        this.web3Service = web3Service;
    }
    RccService.prototype.sendRCC = function (address, amount) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, transaction, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.web3Service.deployedRcc.transfer.sendTransaction(address, amount, { from: this.web3Service.default_account.account })];
                    case 2:
                        transaction = _a.sent();
                        if (!transaction) {
                            console.log('Transaction failed!');
                            result = 'KO';
                        }
                        else {
                            console.log('Transaction complete!');
                            result = 'OK';
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        result = 'KO';
                        return [2 /*return*/, result];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RccService.prototype.mintRCC = function (address, amount) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, transaction, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.web3Service.deployedRcc.mint.sendTransaction(address, amount, { from: this.web3Service.default_account.account })];
                    case 2:
                        transaction = _a.sent();
                        if (!transaction) {
                            console.log('Transaction failed!');
                            result = 'KO';
                        }
                        else {
                            console.log('Transaction complete!');
                            result = 'OK';
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.log(e_2);
                        result = 'KO';
                        return [2 /*return*/, result];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RccService.prototype.getBalance = function (address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rccBalance, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.web3Service.deployedRcc.balanceOf.call(address)];
                    case 2:
                        rccBalance = _a.sent();
                        console.log('Found balance: ' + rccBalance);
                        return [2 /*return*/, rccBalance];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RccService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            // we declare that this service should be created
            // by the root application injector.
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]])
    ], RccService);
    return RccService;
}());



/***/ }),

/***/ "./src/app/util/rccDao.service.ts":
/*!****************************************!*\
  !*** ./src/app/util/rccDao.service.ts ***!
  \****************************************/
/*! exports provided: RccDaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RccDaoService", function() { return RccDaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/web3.service */ "./src/app/util/web3.service.ts");



var RccDaoService = /** @class */ (function () {
    function RccDaoService(web3Service) {
        this.web3Service = web3Service;
    }
    RccDaoService.prototype.getAssociatedList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.associatedList = new Array();
                        console.log('Initiating transaction... (please wait)');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.web3Service.deployedRccDao.getAssociatedList.call()];
                    case 2:
                        _a.associatedList = _b.sent();
                        console.log(this.associatedList);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RccDaoService.prototype.getAssociated = function (address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var associated, _a, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('Initiating transaction... (please wait)');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.web3Service.deployedRccDao.getAssociated.call(address)];
                    case 2:
                        associated = _b.sent();
                        console.log(associated);
                        associated.address = address;
                        _a = associated;
                        return [4 /*yield*/, this.web3Service.deployedRcc.balanceOf.call(address)];
                    case 3:
                        _a.balance = _b.sent();
                        associated.name = associated.name;
                        associated.ref = associated.ref;
                        associated.enabled = associated.enabled;
                        associated.minter = associated.minter;
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _b.sent();
                        console.log(e_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, associated];
                }
            });
        });
    };
    RccDaoService.prototype.getAssociatedTable = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    this.associatedTable = new Array();
                    this.getAssociatedList().then(function () {
                        _this.associatedList.forEach(function (associated_address) {
                            _this.getAssociated(associated_address).then(function (associated) {
                                _this.associatedTable.push(associated);
                            });
                        });
                    });
                }
                catch (e) {
                    console.log(e);
                }
                return [2 /*return*/];
            });
        });
    };
    RccDaoService.prototype.activate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, transaction, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.web3Service.deployedRcc.activate.sendTransaction(this.web3Service.deployedRccDao.address, { from: this.web3Service.default_account.account })];
                    case 2:
                        transaction = _a.sent();
                        if (!transaction) {
                            console.log('Transaction failed!');
                            result = 'KO';
                        }
                        else {
                            console.log('Transaction complete!');
                            result = 'OK';
                        }
                        return [2 /*return*/, result];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        result = 'KO';
                        return [2 /*return*/, result];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RccDaoService.prototype.newAssociated = function (address, name, ref) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, transaction, e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.web3Service.deployedRccDao.newAssociated.sendTransaction(address, name, ref, true, true, { from: this.web3Service.default_account.account })];
                    case 2:
                        transaction = _a.sent();
                        if (!transaction) {
                            console.log('Transaction failed!');
                            result = 'KO';
                        }
                        else {
                            console.log('Transaction complete!');
                            result = 'OK';
                        }
                        return [2 /*return*/, result];
                    case 3:
                        e_4 = _a.sent();
                        console.log(e_4);
                        result = 'KO';
                        return [2 /*return*/, result];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RccDaoService.prototype.ask = function (address, amount, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, transaction, e_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.web3Service.deployedRccDao.ask.sendTransaction(1, address, amount, message, { from: this.web3Service.default_account.account })];
                    case 2:
                        transaction = _a.sent();
                        if (!transaction) {
                            console.log('Transaction failed!');
                            result = 'KO';
                        }
                        else {
                            console.log('Transaction complete!');
                            result = 'OK';
                        }
                        return [2 /*return*/, result];
                    case 3:
                        e_5 = _a.sent();
                        console.log(e_5);
                        result = 'KO';
                        return [2 /*return*/, result];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RccDaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            // we declare that this service should be created
            // by the root application injector.
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]])
    ], RccDaoService);
    return RccDaoService;
}());



/***/ }),

/***/ "./src/app/util/util.module.ts":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "./src/app/util/web3.service.ts");




var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]
            ],
            declarations: []
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ }),

/***/ "./src/app/util/web3.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/web3.service.ts ***!
  \**************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! truffle-contract */ "./node_modules/truffle-contract/index.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
var rccDao_truffle_contract = __webpack_require__(/*! ../../../../truffle/build/contracts/RccDao.json */ "../truffle/build/contracts/RccDao.json");
var rcc_truffle_contract = __webpack_require__(/*! ../../../../truffle/build/contracts/RCC.json */ "../truffle/build/contracts/RCC.json");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        var _this = this;
        this.ready = false;
        this.default_account = {
            amount: 0,
            receiver: '',
            balance: 0,
            account: ''
        };
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
            _this.getDeployedContract();
        });
    }
    Web3Service.prototype.bootstrapWeb3 = function () {
        var _this = this;
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 == 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
        }
        setInterval(function () { return _this.refreshAccounts(); }, 500);
    };
    Web3Service.prototype.getToContract = function (truffle_contract) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var delay, contractAbstraction;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.web3) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getToContract(truffle_contract)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        contractAbstraction = truffle_contract__WEBPACK_IMPORTED_MODULE_2___default()(truffle_contract);
                        contractAbstraction.setProvider(this.web3.currentProvider);
                        return [2 /*return*/, contractAbstraction];
                }
            });
        });
    };
    Web3Service.prototype.refreshAccounts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.web3.eth.getAccounts(function (err, accs) {
                    console.log('Refreshing accounts');
                    if (err != null) {
                        console.warn('There was an error fetching your accounts.');
                        return;
                    }
                    // Get the initial account balance so it can be displayed.
                    if (accs.length === 0) {
                        console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                        return;
                    }
                    if (!_this.accounts || _this.accounts.length !== accs.length || _this.accounts[0] !== accs[0]) {
                        console.log('Observed new accounts');
                        _this.accountsObservable.next(accs);
                        _this.accounts = accs;
                        _this.default_account.account = _this.accounts[0];
                        _this.updateBalance();
                    }
                    _this.ready = true;
                });
                return [2 /*return*/];
            });
        });
    };
    Web3Service.prototype.updateBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rccBalance, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.deployedRcc.balanceOf.call(this.default_account.account)];
                    case 2:
                        rccBalance = _a.sent();
                        console.log('Found balance: ' + rccBalance);
                        this.default_account.balance = rccBalance;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Web3Service.prototype.getDeployedContract = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getToContract(rccDao_truffle_contract)
                    .then(function (RccDaoAbstraction) {
                    _this.rccDao_contract = RccDaoAbstraction;
                    _this.rccDao_contract.deployed().then(function (deployed) {
                        _this.deployedRccDao = deployed;
                    });
                });
                this.getToContract(rcc_truffle_contract)
                    .then(function (RccAbstraction) {
                    _this.rcc_contract = RccAbstraction;
                    _this.rcc_contract.deployed().then(function (deployed) {
                        _this.deployedRcc = deployed;
                        console.log(deployed);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            // we declare that this service should be created
            // by the root application injector.
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cesar/master/master-rcc/angular/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map