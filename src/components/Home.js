 import React, { useState, useContext } from 'react';
 import { Button, Grid, Input, Icon, Form, List, Modal, Header, Message, Popup, Select } from 'semantic-ui-react';
 import Pact from 'pact-lang-api'

 const Home = () => {

   const createTime = () => Math.round((new Date).getTime()/1000)-15;


   const [caps, setCaps] = useState(["(coin.GAS)"]);
   const [tempCap, setTempCap] = useState("");
   const [server, setServer] = useState("us-e1.chainweb.com");
   const [ver, setVer] = useState("mainnet01");
   const [acct, setAcct] = useState("");
   const [pactCode, setPactCode] = useState("");
   const [pubKey, setPubKey] = useState("");
   const [privKey, setPrivKey] = useState("");
   const [chainId, setChainId] = useState("<CHAIN_ID>");
   const [creationTime, setCreationTime] = useState(createTime());
   const [ttl, setTtl] = useState(28800);
   const [gasPrice, setGasPrice] = useState(0.000001);
   const [gasLimit, setGasLimit] = useState(1500);
   const [tempKey, setTempKey] = useState("")
   const [envKeys, setEnvKeys] = useState([]);
   const [pred, setPred] = useState("");
   const [ksName, setKsName] = useState("");
   const [res, setRes] = useState("");
   const [mess, setMess] = useState("")
   const [bootstraps, setBootstraps] = useState(
     [
        { key: '0', value: 'us-e1.chainweb.com', text: 'us-e1.chainweb.com' },
        { key: '1', value: 'us-e2.chainweb.com', text: 'us-e2.chainweb.com' },
        { key: '2', value: 'us-e3.chainweb.com', text: 'us-e3.chainweb.com' },
        { key: '3', value: 'us-w1.chainweb.com', text: 'us-w1.chainweb.com' },
        { key: '4', value: 'us-w2.chainweb.com', text: 'us-w2.chainweb.com' },
        { key: '5', value: 'us-w3.chainweb.com', text: 'us-w3.chainweb.com' },
        { key: '6', value: 'fr1.chainweb.com', text: 'fr1.chainweb.com' },
        { key: '7', value: 'fr2.chainweb.com', text: 'fr2.chainweb.com' },
        { key: '8', value: 'fr3.chainweb.com', text: 'fr3.chainweb.com' },
        { key: '9', value: 'jp1.chainweb.com', text: 'jp1.chainweb.com' },
        { key: '10', value: 'jp2.chainweb.com', text: 'jp2.chainweb.com' },
        { key: '11', value: 'jp3.chainweb.com', text: 'jp3.chainweb.com' },
      ]
   );

   const host = `https://${server}/chainweb/0.0/${ver}/chain/${chainId}/pact`

    const formatCaps = (caps) => {
      var arr = [];
      caps.map((cap, i) => {
        cap = cap.replace("(", "").replace(")", "")
        var strs = cap.split(" ");
        arr.push({name: strs.shift(), args: strs.map((str) => isNaN(str) ? str.replace("\"", "").replace("\"", "") : parseFloat(str))})
      })
      return arr;
    }

  const showCmd = () => {
    if (pubKey !== "" && privKey !== "") {
      return (
        JSON.stringify(Pact.api.prepareExecCmd(
          [{publicKey: pubKey, secretKey: privKey, clist: formatCaps(caps)}],
          new Date().toISOString(),
          pactCode,
          ksName !== "" ? {[ksName]: {"pred": pred, "keys": envKeys}} : {},
          Pact.lang.mkMeta(acct, chainId, gasPrice, gasLimit, creationTime, ttl)
        ))
      )
    }
    return "Enter a valid keypair to preview JSON (or click generate)"

  }

   const localCall = async () => {
     try {
       const envData = ksName !== "" ? {[ksName]: {"pred": pred, "keys": envKeys}} : {}
       const cmd = await Pact.fetch.local({
         pactCode: pactCode,
         keyPairs: [{publicKey: pubKey, secretKey: privKey, clist: formatCaps(caps)}],
         meta: Pact.lang.mkMeta(acct, chainId, gasPrice, gasLimit, creationTime, ttl),
         envData: envData,
         networkId: ver,
       }, host)
       console.log(cmd)
       if (cmd.status === "failure") {
         setRes("TX preview failed:")
         setMess(cmd.error.message)
       } else {
         setRes("TX preview suceeded:")
         setMess(JSON.stringify(cmd.data))
       }
     } catch (e) {
       setRes("CHECK YOUR INPUTS")
       if (pactCode === "") {
         setMess("Enter some Pact code")
       }
       else if (chainId === "<CHAIN_ID>") {
         setMess("Set Chain ID")
       } else {
         setMess(e.message)
       }
     }


      // setRes(cmd)
   }

   const preGen = () => {
     const kp = Pact.crypto.genKeyPair;
     return {publicKey: kp.publicKey, secretKey: kp.secretKey}
   }

   const isValidCap = (cap) => {
     if (cap[0] === '(' && cap[cap.length - 1] === ')') {
       return false
     } else {
       return true
     }
   }

   const onChangeServer = (s) => {
     setServer(s)
     if (s.includes("testnet")) {
       setVer("testnet04")
     } else {
       setVer("mainnet01")
     }
   }

   const generateAccount = () => {
     const kp = Pact.crypto.genKeyPair();
     setAcct('fake-account');
     setPubKey(kp.publicKey);
     setPrivKey(kp.secretKey);
   }

   const chainIds = [
      { key: '0', value: '0', text: '0' },
      { key: '1', value: '1', text: '1' },
      { key: '2', value: '2', text: '2' },
      { key: '3', value: '3', text: '3' },
      { key: '4', value: '4', text: '4' },
      { key: '5', value: '5', text: '5' },
      { key: '6', value: '6', text: '6' },
      { key: '7', value: '7', text: '7' },
      { key: '8', value: '8', text: '8' },
      { key: '9', value: '9', text: '9' },
    ]

    // const bootstraps =

    const preds = [
       { key: '0', value: 'keys-all', text: 'keys-all' },
       { key: '1', value: 'keys-any', text: 'keys-any' },
     ]

   return (
     <div>
      <Grid columns={2}
        verticalAlign='top'
        // verticalAlign='middle'
        >
        <Grid.Column style={{backgroundColor: "grey"}}>
        <Form>
        <h3>
          Pact Code to execute
        </h3>
        <Form.Field  style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
          <label>Pact Code
            <Popup
              trigger={
                <Icon name='help circle' style={{"marginLeft": "2px"}}/>
              }
              position='top center'
            >
              <Popup.Header>What is Pact Code? </Popup.Header>
              <Popup.Content>Pact is Kadena's smart contract programming language. Type arbitrary pact expressions in the inpout box below. For more help look at our docs: <a>https://pact-language.readthedocs.io/en/stable/</a></Popup.Content>
            </Popup>
          </label>
          <Form.Input
            style={{width:"340px", height: "150px"}}
            placeholder='(coin.details "nick-cage")'
            value={pactCode}
            onChange={(e) => setPactCode(e.target.value)}
          />
        </Form.Field>
        <h3>
          Signing
        </h3>
        <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
          <label>Account Name
            <Popup
              trigger={
                <Icon name='help circle' style={{"marginLeft": "2px"}}/>
              }
              position='top center'
            >
              <Popup.Header>What is an Account Name? </Popup.Header>
              <Popup.Content>Account name is how you identify yourself in chainweb. You'll be asked to sign with associated key/keys when you make transactions. Account names need to be unique and are assosciated to keypairs that can sign its transactions</Popup.Content>
            </Popup>
          </label>
          <Form.Input
            style={{width:"340px"}}
            icon='user'
            iconPosition='left'
            placeholder='Account Name'
            value={acct}
            onChange={(e) => setAcct(e.target.value)}
          />
        </Form.Field>
        <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
            <label>Key Pair
              <Popup
                trigger={
                  <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                }
                position='top center'
                style={{width: "340px"}}
              >
                <Popup.Header>What is a Keypair?</Popup.Header>
                <Popup.Content>A keypair is composed of a public key and a private key. If you don't have a keypair, generate one in the Kadena wallet, or click 'Generate' for tx's that don't require a particular account to sign it. For example, to do a (coin.transfer "to" "from" 1.0) you must sign with the keys assosciated with the transfering account, but to do an account info call such as (coin.details "nick-cage"), you can sign with a dummy key pair as there are no capabilities assosciated with this transaction</Popup.Content>
              </Popup>
            </label>
            <Input
              placeholder='Public Key'
              icon="key"
              iconPosition="left"
              style={{width: "340px"}}
              value={pubKey}
              onChange={(e) => setPubKey(e.target.value)}
            />
            <Input
              placeholder='Private Key'
              icon="lock"
              iconPosition="left"
              style={{marginTop: 5, width: "340px"}}
              value={privKey}
              onChange={(e) => setPrivKey(e.target.value)}
            />
            <Button
                style={{
                  backgroundColor: "#B54FA3",
                  color: "white",
                  marginBottom: 5,
                  marginTop: 5,
                  width: 340,
                  bottom: 0,
                  right: 0
                  }}
                onClick={() => generateAccount()}
              >
              Generate (sig not required)
            </Button>
          </Form.Field>

          <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
              <label>Capabilities
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                  style={{width: "340px"}}
                >
                  <Popup.Header>What is a Capability?</Popup.Header>
                  <Popup.Content>In Pact, a capability is a way to scope what the signing keypairs are allowed to perform in code. The defauly capability is GAS, as all transactions need to have a keypair signing for the gas fee. Another standard capability is the TRANSFER capability that requires a user to specify a from-account, to-account, and amount. This means that you are allowing the scoped signature to only perform the transfer amount specified. Example: <b>(coin.TRANSFER "from-account" "to-account" 10.0)</b></Popup.Content>
                </Popup>
              </label>
              {caps.map((v, i) => {
                return (
                  <Input
                    placeholder=''
                    key={i}
                    icon="code"
                    iconPosition="left"
                    style={{width: "340px", marginTop: (i === 0 ? 0 : 5)}}
                    value={v}
                    action={
                       <Button
                       icon="minus"
                       onClick={() => {
                         caps.splice(i,1)
                         setCaps([...caps])
                       }}
                       disabled={v.includes("GAS")}
                       />
                     }
                  />
                );
              })}

              <Input
                placeholder='(coin.TRANSFER "from" "to" 1.0)'
                icon="code"
                iconPosition="left"
                style={{width: "340px", marginTop: 5}}
                value={tempCap}
                onChange={(e) => setTempCap(e.target.value)}
                action={
                   <Button
                   icon="add"
                   onClick={() => {
                     setCaps([...caps, tempCap])
                     setTempCap("")
                   }}
                   disabled={isValidCap(tempCap)}
                   />
                 }
              />
            </Form.Field>
            <h3>
              Network
            </h3>
            <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
              <label>Server
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is Server? </Popup.Header>
                  <Popup.Content>Server is the Chainweb node you would like to execute the transaction on </Popup.Content>
                </Popup>
              </label>
              {/*
              <Form.Input
                style={{width:"340px"}}
                icon='globe'
                iconPosition='left'
                placeholder='Server'
                value={server}
                onChange={(e) => onChangeServer(e.target.value)}
              />
              */}
              <Select
                style={{width:"340px"}}
                placeholder='Server'
                search={true}
                fluid
                options={bootstraps}
                value={server}
                allowAdditions
                onAddItem={(e, {value }) => {
                  const newCat = { key: value, text: value,
                  value: value }
                  setBootstraps([...bootstraps, newCat]);
                }}
                onSearchChange={(e, {value}) => {
                  onChangeServer(e.target.value)}
                }
                onChange={(e, { value }) => {
                  onChangeServer(value)
                }}
              />
            </Form.Field>
            <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
              <label>Version
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is Version? </Popup.Header>
                  <Popup.Content>This defines what version of Chainweb you are targeting. Mainnet is mainnet01, Testnet is testnet04</Popup.Content>
                </Popup>
              </label>
              <Form.Input
                style={{width:"340px"}}
                icon='sync'
                iconPosition='left'
                placeholder='Version'
                value={ver}
                // onChange={(e) => setVer(e.target.value)}
              />
            </Form.Field>
            <h3>
              Meta Data
            </h3>
            <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
              <label>Chain ID
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is Chain ID? </Popup.Header>
                  <Popup.Content>Chain ID is the specific chain within chainweb you are targeting with your transaction. For more info look at: <a>https://www.youtube.com/watch?v=hYvXxFbsN6I</a> </Popup.Content>
                </Popup>
              </label>
              <Select
                style={{width:"340px"}}
                placeholder='Chain ID'
                options={chainIds}
                onChange={(e, { value }) => setChainId(value)}
              />
            </Form.Field>
            <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
              <label>Creation Time
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is Creation Time? </Popup.Header>
                  <Popup.Content>This specifies that time that your transaction was created. The default is to use current time (in seconds)</Popup.Content>
                </Popup>
              </label>
              <Form.Input
                style={{width:"340px"}}
                icon='calendar'
                iconPosition='left'
                placeholder='Creation Time'
                value={createTime()}
                onChange={(e) => setCreationTime(e.target.value)}
              />
            </Form.Field>
            <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
              <label>TTL
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is TTL? </Popup.Header>
                  <Popup.Content>Time to Live for a transaction. Your transaction will stay in the mempool for the specified internal between creation time and time to live (in seconds)</Popup.Content>
                </Popup>
              </label>
              <Form.Input
                style={{width:"340px"}}
                icon='clock'
                iconPosition='left'
                placeholder='Time To Live'
                value={ttl}
                onChange={(e) => setTtl(e.target.value)}
              />
            </Form.Field>
            <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
              <label>Gas Price
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is Gas price? </Popup.Header>
                  <Popup.Content>Gas Price is the amount you are willing to pay for each unit of computation on chain. Note that transactions are odered by miners based on this price, so if you want your transaction to be included in the next block be generous!! Minimum amount is 1e-12, defauly is 1e-6</Popup.Content>
                </Popup>
              </label>
              <Form.Input
                style={{width:"340px"}}
                icon='dollar sign'
                iconPosition='left'
                placeholder='Gas Price'
                value={gasPrice}
                onChange={(e) => setGasPrice(e.target.value)}
              />
            </Form.Field>
            <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
              <label>Gas Limit
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is Gas Limit? </Popup.Header>
                  <Popup.Content>Gas Limit is the maximum number of computational units you are willing to use. If a transactions takes less gas than specified, you will only be charged how much it effectively takes. Fee for a transaction will be (Gas Price * Gas Limit)</Popup.Content>
                </Popup>
              </label>
              <Form.Input
                style={{width:"340px"}}
                icon='tint'
                iconPosition='left'
                placeholder='Gas Limit'
                value={gasLimit}
                onChange={(e) => setGasLimit(e.target.value)}
              />
            </Form.Field>
            <h3>
              Env Data (Advanced)
            </h3>
            <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
              <label>Keyset Name
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is a Keyset Name? </Popup.Header>
                  <Popup.Content>It is a way to refer to the following keyset predicate and public key. For example, the transfer-create functions expects the user to pass in a new keyset to assosciate to and guard the account that is about to be created. The syntax is as follows: (coin.transfer-create "from" "to" (read-keyset "THIS-NAME-JUST-DEFINED") 10.0). Here were are telling Pact how to find the newly defined keyset to assosciate to the account to be created. To better understand this advanced section, go to <a>pact.kadena.io</a> create a new keyset name under the data section, assosciate a keypair to it, then go to the results tab</Popup.Content>
                </Popup>
              </label>
              <Input
                placeholder='Keyset Name'
                icon="copy"
                iconPosition="left"
                style={{width: "340px"}}
                value={ksName}
                onChange={(e) => setKsName(e.target.value)}
              />
            </Form.Field>
            <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
              <label>Keyset Predicate
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is a Keyset Predicate? </Popup.Header>
                  <Popup.Content>Keyset Predicates allow you to chose which type of signing rules a particular account needs to enforce. "keys-all" will require all the keys assosciated to an account to validate a signature. "keys-any will require only one of the keys assosciated to an account to validate a signature. Note that for single sig accounts both predicates are the same in practice</Popup.Content>
                </Popup>
              </label>
              <Select
                style={{width:"340px"}}
                placeholder='Predicate'
                options={preds}
                onChange={(e, { value }) => setPred(value)}
              />
            </Form.Field>
            <Form.Field style={{width:"240px", margin: "0 auto", marginTop: "10px"}}>
                <label>Public Key
                  <Popup
                    trigger={
                      <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                    }
                    position='top center'
                    style={{width: "340px"}}
                  >
                    <Popup.Header>What is this Public Key?</Popup.Header>
                    <Popup.Content>This is the public key that you are assosicating to the given account. You can assosciate more than one key for each account to allow for multi-sig</Popup.Content>
                  </Popup>
                </label>
                {envKeys.map((v, i) => {
                  return (
                    <Input
                      placeholder=''
                      key={i}
                      icon="key"
                      iconPosition="left"
                      style={{width: "340px", marginTop: (i === 0 ? 0 : 5)}}
                      value={v}
                      action={
                         <Button
                         icon="minus"
                         onClick={() => {
                           envKeys.splice(i,1)
                           setEnvKeys([...envKeys])
                         }}
                         />
                       }
                    />
                  );
                })}
                <Input
                  placeholder='Public Key'
                  icon="key"
                  iconPosition="left"
                  style={{width: "340px", marginTop: 5}}
                  value={tempKey}
                  // onChange={(e) => setEnvKeys([...envKeys, e.target.value])}
                  onChange={(e) => setTempKey(e.target.value)}
                  action={
                     <Button
                     icon="add"
                     onClick={() => {
                       setEnvKeys([...envKeys, tempKey])
                       setTempKey("")
                     }}
                     // disabled={isValidCap(tempCap)}
                     />
                  }
                />
              </Form.Field>
      </Form>

        </Grid.Column>
        <Grid.Column>
        <div style={{marginTop: 70}}>

        {showCmd()}


        </div>
        <div>
          {host + "/api/v1/local"}
        </div>
        <Button
            style={{
              backgroundColor: "#B54FA3",
              color: "white",
              marginBottom: 10,
              marginTop: 20,
              width: 340,
              }}
            onClick={() => localCall()}
          >
          Submit Transaction
        </Button>
        {(res === "") ? <div> </div> :
          <div style={{ margin: 10, marginRight: 20}}>
             <Message style={{overflow: "auto", margin: "0 auto"}}>
               <Message.Header >Your Local Request Response:</Message.Header>
               <p style={{fontSize: "40px"}}>
                 {res}
              </p>
              <p style={{fontSize: "30px"}}>
                 {mess}
               </p>
             </Message>
          </div>
        }
        </Grid.Column>
      </Grid>
     </div>
   );

 }


export default Home;
