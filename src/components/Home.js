import React, { useState, useContext, useEffect } from 'react';
import { Button, Grid, Input, Icon, Form, List,
   Modal, Header, Message, Popup, Select, Radio,
   Tab, TextArea, Loader } from 'semantic-ui-react';
import CmdTabs from './CmdTabs.js';
import ViewYaml from './ViewYaml.js';
import Pact from 'pact-lang-api'

 const savedNodes = localStorage.getItem('nodes');

 const Home = () => {

   const [caps, setCaps] = useState(["(coin.GAS)"]);
   const [hash, setHash] = useState("")
   const [sig, setSig] = useState("sig");
   const [sigText, setSigText] = useState("")
   const [tempCap, setTempCap] = useState("");
   const [server, setServer] = useState("us-e1.chainweb.com");
   const [ver, setVer] = useState("mainnet01");
   const [acct, setAcct] = useState("");
   const [pactCode, setPactCode] = useState("");
   const [pubKey, setPubKey] = useState("");
   const [privKey, setPrivKey] = useState("");
   const [chainId, setChainId] = useState("");
   const [creationTime, setCreationTime] = useState(Math.round((new Date).getTime()/1000)-15);
   const [ttl, setTtl] = useState(28800);
   const [gasPrice, setGasPrice] = useState(0.00001);
   const [gasLimit, setGasLimit] = useState(1500);
   const [tempKey, setTempKey] = useState("")
   const [envKeys, setEnvKeys] = useState([]);
   const [pred, setPred] = useState("");
   const [ksName, setKsName] = useState("");
   const [res, setRes] = useState("");
   const [mess, setMess] = useState("")
   const [gas, setGas] = useState("");
   const [loading, setLoading] = useState(false);
   const [sendLoading, setSendLoading] = useState(false);
   const [cmd, setCmd] = useState("");
   const [reqKey, setReqKey] = useState("");
   const [rkWarn, setRkWarn] = useState(false);
   const [txFail, setTxFail] = useState(false);
   const [txPending, setTxPending] = useState(false);
   const [pollRes, setPollRes] = useState("");
   const [canSend, setCanSend] = useState(false);
   const [showSendTab, setShowSendTab] = useState(false);
   const [bootstraps, setBootstraps] = useState(
     (savedNodes === null ? [
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
      ] : [
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
       ].concat(JSON.parse(savedNodes)))
   );
   useEffect(() => {
     setCmd(showCmd())
   }, [pactCode, caps, sig, sigText, ver, acct, pubKey, privKey, chainId, ttl, gasPrice, gasLimit, envKeys, pred, rkWarn])

   var mkReq = function(cmd) {
     return {
       headers: {
         "Content-Type": "application/json"
       },
       method: "POST",
       body: JSON.stringify(cmd)
     };
   };

   const host = `https://${server}/chainweb/0.0/${ver}/chain/${chainId}/pact`

    const formatCaps = (caps) => {
      var arr = [];
      caps.map((cap, i) => {
        cap = cap.replace("(", "").replace(")", "")
        var strs = cap.split(" ");
        // arr.push({name: strs.shift(), args: strs.map((str) => isNaN(str) ? str.replace("\"", "").replace("\"", "") : (str.includes(".") ? parseFloat(str) : `{\"int\": ${str}}`))})
        arr.push({name: strs.shift(), args: strs.map((str) => isNaN(str) ? str.replace("\"", "").replace("\"", "") : (str.includes(".") ? parseFloat(str) : {int: str} ))})
      })
      return arr;
    }

  const saveNode = async (url) => {
     const nodes = await localStorage.getItem('nodes');
     if (nodes === null) {
       localStorage.setItem('nodes', JSON.stringify([url]))
     } else {
       var filtered = JSON.parse(nodes).filter(x => x.value === url.value)
       if (filtered.length === 0) {
         localStorage.setItem('nodes', JSON.stringify(JSON.parse(nodes).concat([url])));
       }
     }
  }

  const showCmd = () => {
    try {
      const cmdJSON = Pact.api.prepareExecCmd(
        [{publicKey: pubKey, secretKey: privKey, clist: formatCaps(caps)}],
        creationTime.toString(),
        pactCode.replace("\n", ""),
        ksName !== "" ? {[ksName]: {"pred": pred, "keys": envKeys}} : {},
        Pact.lang.mkMeta(acct, chainId, gasPrice, gasLimit, creationTime, ttl),
        ver
      )
      if (sig === "sig" && cmdJSON.sigs[0]) {
        cmdJSON.sigs[0].sig = sigText
      }
      return JSON.stringify(cmdJSON)
  } catch(e){
      return e.message
    }
    return "Enter a valid keypair to preview JSON request (or click generate)"

  }

   const is_hexadecimal = (str) => {
    const regexp = /^[0-9a-fA-F]+$/;
    if (regexp.test(str)) return true;
    else return false;
  }

    const checkKey = (key) => {
        if (key.length !== 64) {
            return false
        } else if (!is_hexadecimal(key)){
            return false
        }
        return true;
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

   const onChangeServer = async (s) => {
     setServer(s)
     try {
       const res = await fetch(`https://${s}/info`)
       const ver = await res.json()
       setVer(ver["nodeVersion"])
     } catch (e) {
       setVer("not a chainweb node")
     }
   }

   const generateAccount = () => {
     const kp = Pact.crypto.genKeyPair();
     setAcct('fake-account');
     setPubKey(kp.publicKey);
     setPrivKey(kp.secretKey);
   }

   const curlCmd = () => {
     return (
       `curl -sk -H \"Content-Type: application/json\" -d '${cmd}' -X POST ${(host === `https://${server}/chainweb/0.0/${ver}/chain//pact` ?  "Select Chain Id" : (ver === "not a chainweb node") ? "Select a valid Chainweb node" : host + "/api/v1/local")}`
     )
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

    const preds = [
       { key: '0', value: 'keys-all', text: 'keys-all' },
       { key: '1', value: 'keys-any', text: 'keys-any' },
     ]

     function toPubLoad(isPub){
        try {
          var fileToLoad = document.getElementById("to-pub-file").files[0];
          if (fileToLoad.name.substr(fileToLoad.name.length - 4) !== ".kda" || fileToLoad.name.includes((isPub ? "private" : "public"))) {
            alert(`file must be a .kda ${(!isPub ? "private" : "public")} key file`)
            // document.getElementById("to-pub-file").files = ""
          }
          var fileReader = new FileReader();
          fileReader.onload = function(fileLoadedEvent){
              var textFromFileLoaded = fileLoadedEvent.target.result;
              // console.log(textFromFileLoaded)
              if (isPub) {
                setPubKey(textFromFileLoaded.replace("public: ", ""))
              } else {
                var keys = textFromFileLoaded.split("\n");
                setPubKey(keys[0].replace("public: ", ""));
                setPrivKey(keys[1].replace("secret: ", ""));
              }
          };
          fileReader.readAsText(fileToLoad, "UTF-8");
        } catch (err) {
          console.log(err)
          alert(`file must be a .kda ${(!isPub ? "private" : "public")} key file`)
        }
      }

      const localCall = async () => {
        try {
          setReqKey("");
          setRkWarn(false);
          setTxFail(false);
          setTxPending(false);
          setPollRes("");
          setLoading(true);
          setRes("");
          setShowSendTab(false);
          const envData = ksName !== "" ? {[ksName]: {"pred": pred, "keys": envKeys}} : {}
          // const res = await Pact.fetch.local({
          //   pactCode: pactCode.replace("\n", ""),
          //   keyPairs: [{publicKey: pubKey, secretKey: privKey, clist: formatCaps(caps)}],
          //   meta: Pact.lang.mkMeta(acct, chainId, gasPrice, gasLimit, creationTime, ttl),
          //   envData: envData,
          //   networkId: ver,
          // }, host)
          const parsedCmd = JSON.parse(cmd)

          const txRes = await fetch(`${host}/api/v1/local`, mkReq(parsedCmd));
          const res = await txRes.json();
          console.log(res)
          setLoading(false);
          if (res.result.status === "failure") {
            setRes("TX preview failed:")
            setMess(res.result.error.message)
            setGas("")
          } else {
            setRes("TX preview suceeded:")
            console.log(res.gas)
            setMess("Result: " + JSON.stringify(res.result.data))
            setGas(res.gas * parseFloat(gasPrice))
            setCanSend(true);
          }
        } catch (e) {
          setLoading(false);
          setRes("CHECK YOUR INPUTS")
          if (pactCode === "") {
            setMess("Enter some Pact code")
            setGas("")
          }
          else if (chainId === "") {
            setMess("Set Chain ID")
            setGas("")
          } else {
            if (e.message === "Unexpected token V in JSON at position 0") {
              setMess("Make sure you signed after you filled in the rest of the transaction details")
              setGas("")
            } else {
              setMess(e.message)
              setGas("")
            }
          }
        }
      }

      const sendCall = async () => {
        setCanSend(false);
        try {
          setRkWarn(false);
          setSendLoading(true);
          setShowSendTab(true);
          const envData = ksName !== "" ? {[ksName]: {"pred": pred, "keys": envKeys}} : {}
          const parsedCmd = JSON.parse(cmd)
          const sendCmd = {
            "cmds": [ parsedCmd ]
          }
          const txRes = await fetch(`${host}/api/v1/send`, mkReq(sendCmd));
          console.log(txRes)
          const text = await txRes.text();
          console.log(text)
          if (text.substring(0, 10) === 'Validation') {
              setSendLoading(false);
              setReqKey(text)
              setRkWarn(true)
          } else {
            const reqKey = JSON.parse(text)
            setReqKey(reqKey.requestKeys[0]);
            setSendLoading(false);
            setTxPending(true)
            pollCall(reqKey.requestKeys[0]);
          }

        } catch(e) {
          console.log(e)
          console.log(e.msg)
          setSendLoading(false);
          setReqKey("Your requested transaction's inputs failed to validate. If your preview is succeeding and you are seeing this message it is because SEND TRANSACTIONS MUST BE SIGNED")
          setRkWarn(true)
        }
      }

      const pollCall = async (rk) => {
        try {
          const res = await Pact.fetch.listen({ listen: rk }, host);
          setTxPending(false);
          res.result.status === "failure" ? setTxFail(true) : setTxFail(false);
          setPollRes(res);

        } catch(e) {
          console.log(e)
        }
      }

  const resultTabs = (pollRes !== "" ? [
    { menuItem: 'Result Summary', render: () => <Tab.Pane>
      <Message style={{marginTop: 5, marginBottom: 15}} info error={txFail}>
        <Message.Header>
          {JSON.stringify(pollRes.result.status.replace("\"", ""))}
        </Message.Header>
        <div>
          <p style={{wordBreak: "break-all"}}>{"Result: " + JSON.stringify(pollRes.result.data)}</p>
        </div>
        <div>
          <p style={{wordBreak: "break-all"}}>{"Block Height: " + JSON.stringify(pollRes.metaData.blockHeight)}</p>
        </div>
        <div>
          <p style={{wordBreak: "break-all"}}>{"Block Hash: " + JSON.stringify(pollRes.metaData.blockHash)}</p>
        </div>
      </Message>
    </Tab.Pane> },
    { menuItem: 'JSON Response', render: () => <Tab.Pane>
      <Message style={{marginTop: 5, marginBottom: 15}} info error={txFail}>
        <Message.Header style={{marginTop: 5, marginBottom: 15}}>
          {JSON.stringify(pollRes.result.status)}
        </Message.Header>
        <code style={{wordBreak: "break-all", color: "black", fontSize: 15, marginBottom: 5}}>
          {JSON.stringify(pollRes,null,'\t')}
        </code>
      </Message>
    </Tab.Pane> },
  ] : [])
  //
  // const resultTabs = (true ? [
  //   { menuItem: 'Result Summary', render: () => <Tab.Pane>
  //     <Message style={{marginTop: 5, marginBottom: 15}} info error={txFail}>
  //       <Message.Header>
  //         success
  //       </Message.Header>
  //       <p style={{wordBreak: "break-all"}}>data</p>
  //     </Message>
  //   </Tab.Pane> },
  //   { menuItem: 'Result JSON', render: () => <Tab.Pane>
  //     <div>
  //     </div>
  //   </Tab.Pane> },
  // ] : [])

  const reqKeyTabs = resultTabs.concat([
    { menuItem: 'Request Key', render: () => <Tab.Pane>
      <Message style={{marginTop: 5, marginBottom: 25}} info error={rkWarn}>
        <Message.Header>
          {(!rkWarn ? "Request Key" : "Send Failure")}
        </Message.Header>
        <p>{reqKey}</p>
        {(txPending ? <div><p>Please wait your transaction is being mined....</p><Loader active inline/></div> : <div></div>)}
      </Message>
    </Tab.Pane> },
    { menuItem: 'Poll curl cmd', render: () => <Tab.Pane>
    <Message style={{marginTop: 5, marginBottom: 25}} info error={rkWarn}>
      <Message.Header style={{marginBottom: 10}}>
        {(!rkWarn ? "Poll Curl Command" : "Send Failure")}
      </Message.Header>
      {(!rkWarn ?
        <code style={{wordBreak: "break-all", color: "black", fontSize: 15, marginTop: 15, marginBottom: 20}}>
          {`curl -sk -H \"Content-Type: application/json\" -d '{"requestKeys": ["${reqKey}"]}' -X POST ${(host === `https://${server}/chainweb/0.0/${ver}/chain//pact` ?  "Select Chain Id" : (ver === "not a chainweb node") ? "Select a valid Chainweb node" : host + "/api/v1/poll")}`}
        </code>
        :
        "TX must make it to the mempool to see Poll Curl Command")}
      {(txPending ? <div><p>Please wait your transaction is being mined....</p><Loader active inline/></div> : <div></div>)}
    </Message>
    </Tab.Pane> },
    { menuItem: 'Listen curl cmd', render: () => <Tab.Pane>
    <Message style={{marginTop: 5, marginBottom: 25}} info error={rkWarn}>
      <Message.Header style={{marginBottom: 10}}>
        {(!rkWarn ? "Listen Curl Command" : "Send Failure")}
      </Message.Header>
      {(!rkWarn ?
        <code style={{wordBreak: "break-all", color: "black", fontSize: 15, marginTop: 15, marginBottom: 20}}>
          {`curl -sk -H \"Content-Type: application/json\" -d '{"listen": "${reqKey}"}' -X POST ${(host === `https://${server}/chainweb/0.0/${ver}/chain//pact` ?  "Select Chain Id" : (ver === "not a chainweb node") ? "Select a valid Chainweb node" : host + "/api/v1/listen")}`}
        </code>
        :
        "TX must make it to the mempool to see Listen Curl Command")}
      {(txPending ? <div><p>Please wait your transaction is being mined....</p><Loader active inline/></div> : <div></div>)}
    </Message>
    </Tab.Pane> }
  ])

  const showSend = () => {
    if (res === "TX preview suceeded:") {
      return (
        <div>
          <Button
              style={{
                backgroundColor: "#B54FA3",
                color: "white",
                marginBottom: 20,
                marginTop: 20,
                width: 340,
                }}
              loading={sendLoading}
              onClick={() => sendCall()}
              disabled={(txPending || !canSend || acct === "")}
            >
            {(canSend ? (checkKey(pubKey) ? "Send Transaction" : "Send Unsigned TX") : "Please Preview Again")}
          </Button>
          {(showSendTab ? <Tab panes={reqKeyTabs} style={{marginBottom: 350}}/> : <div></div>)}
        </div>
      )
    } else {
      return (<div></div>)
    }
  }

   return (
      <Grid columns={2} padded scrollable verticalAlign="top">
          <Grid.Column textAlign="center" style={{overflow: "auto"}}>
            <div style={{overflow: "auto", height: "100vh"}}>
            <img src="https://explorer.chainweb.com/static/1lv9xhxyhlqc262kffl55w08ms1cvxsnrv49zhvm0b799dsi0v0i-kadena-k-logo.png" style={{height:70, marginTop: 50}}/>
            <Header as="h6" style={{color:'black', fontWeight: 'bold', fontSize: 40, marginTop: 20}}>
              Command Preview
            </Header>
            <CmdTabs
              pactCode={pactCode}
              caps={caps}
              server={server}
              ver={ver}
              acct={acct}
              pubKey={pubKey}
              privKey={privKey}
              chainId={chainId}
              creationTime={creationTime}
              ttl={ttl}
              gasPrice={gasPrice}
              gasLimit={gasLimit}
              envKeys={envKeys}
              pred={pred}
              ksName={ksName}
              cmd={cmd}
              host={host}/>

            <Button
                style={{
                  backgroundColor: "#B54FA3",
                  color: "white",
                  marginBottom: 10,
                  marginTop: 20,
                  width: 340,
                  }}
                loading={loading}
                onClick={() => localCall()}
                disabled={(chainId === "" || pactCode === "")}
              >
              Preview Transaction
            </Button>
            {(res === "") ? <div> </div> :
              <div style={{ margin: 10, marginRight: 20, marginBottom: 10}}>
                <Message style={{marginTop: 5, marginBottom: 15}} info error={res !== "TX preview suceeded:"}>
                  <Message.Header>
                    {res}
                  </Message.Header>
                  <div>
                    <p style={{wordBreak: "break-all"}}>{mess}</p>
                  </div>
                  <div>
                    <p style={{wordBreak: "break-all"}}>{(gas === "" ? "" : "Gas Cost: " + gas)}</p>
                  </div>
                </Message>
              </div>
            }
            {showSend()}
          </div>
        </Grid.Column>

        <Grid.Column style={{overflow: "auto", backgroundColor: "	#99468A"}}>
        <div style={{overflow: "auto", height: "100vh"}}>
        <Form>
        <Header as="h6" style={{color:'white', fontWeight: 'bold', fontSize: 30, marginTop: 30, textAlign: 'center'}}>
          Pact
        </Header>
        <Form.Field  style={{width:"440px", margin: "0 auto", marginTop: "10px"}} >
          <label style={{color: "white"}}>Pact Code
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
          <TextArea
            style={{width:"440px", height: "200px", wordBreak: "break-all"}}
            placeholder='                                                                                                        ;;coin contract examples:                                                                                  (coin.details "nick-cage")                                                                                                                                  (coin.transfer "from" "to" 12.4)                                                                              (coin.transfer-create "from" "to" (read-keyset "to-ks") 4.2)                                                                            (coin.create-account "my-new-acct" (read-keyset "my-new-ks"))                           ;;arbitrary contract calls:                                                                                  (free.my-contract-name.foo "param-one" "param-two")                           (user.my-contract-name.bar [list, of, stuff] 1.0)                               '
            value={pactCode}
            onChange={(e) => setPactCode(e.target.value)}
          />
        </Form.Field>
        </Form>
        <Form onKeyPress={e => {if (e.key === 'Enter') e.preventDefault()}}>
        <Header as="h6" style={{color:'white', fontWeight: 'bold', fontSize: 30, marginTop: 30,textAlign: 'center'}}>
          Signing
        </Header>
        <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
          <label style={{color: "white"}}>Sender Account
            <Popup
              trigger={
                <Icon name='help circle' style={{"marginLeft": "2px"}}/>
              }
              position='top center'
            >
              <Popup.Header>What is the Sender Account? </Popup.Header>
              <Popup.Content>Sender Account represents the account name you use to identify yourself in chainweb. You'll be asked to sign with associated key/keys when you make transactions. Account names need to be unique and are assosciated to keypairs that can sign its transactions. The simplest way would be to use your public key as your account name</Popup.Content>
            </Popup>
          </label>
          <Form.Input
            style={{width:"440px"}}
            icon='user'
            iconPosition='left'
            placeholder='Account Name'
            value={acct}
            onChange={(e) => setAcct(e.target.value)}
          />
        </Form.Field>
        <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
            <Form.Field>
              <Radio
                label={
                  <label style={{color: "white"}}>Key Pair
                    <Popup
                      trigger={
                        <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                      }
                      position='top center'
                      style={{width: "440px"}}
                    >
                      <Popup.Header>What is a Keypair?</Popup.Header>
                      <Popup.Content>A keypair is composed of a public key and a private key. If you don't have a keypair, generate one in the Kadena wallet, or click 'Generate' for tx's that don't require a particular account to sign it. For example, to do a (coin.transfer "from" "to" 1.0) you must sign with the keys assosciated with the transfering account, but to do an account info call such as (coin.details "nick-cage"), you can sign with a dummy key pair as there are no capabilities assosciated with this transaction</Popup.Content>
                    </Popup>
                  </label>}
                name='radioGroup'
                value='kp'
                checked={sig === 'kp'}
                onChange={() => setSig('kp')}
              />
              <Form.Field>
                <Radio
                label={
                  <label style={{color: "white"}}>Signature
                    <Popup
                      trigger={
                        <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                      }
                      position='top center'
                      style={{width: "440px"}}
                    >
                      <Popup.Header>What is a Signature?</Popup.Header>
                      <Popup.Content>This is a safe way to sign your transaction offline without pasting your private key on the web. Once you fill in all the parameters for your desired trasaction you will be provided a hash that you can copy and sign offline with the Chainweaver wallet or pact cli. You must sign with the corresponding private key of the public key provided.</Popup.Content>
                    </Popup>
                  </label>}
                  name='radioGroup'
                  value='sig'
                  checked={sig === 'sig'}
                  onChange={() => setSig('sig')}
                />
              </Form.Field>
            </Form.Field>
            <Input
              placeholder='Public Key'
              icon="key"
              iconPosition="left"
              style={{width: "440px"}}
              value={pubKey}
              onChange={(e) => setPubKey(e.target.value)}
            />
            {sig === 'kp' ?
            <div>
              <Input
                placeholder='Private Key'
                icon="lock"
                iconPosition="left"
                // type='password'
                style={{marginTop: 5, width: "440px"}}
                value={privKey}
                onChange={(e) => setPrivKey(e.target.value)}
              />
              <div style={{display:"flex",flexDirection: "row"}}>
              <input
                style={{marginTop: 5, width: "270px", flex: 1}}
                id="to-pub-file"
                type="file"
                onChange={(e) => toPubLoad(false)}/>

              <Message color='purple'
                  style={{
                    // backgroundColor: "grey",
                    // color: "white",
                    marginTop: 5,
                    marginRight: 0,
                    marginLeft: 5,
                    width: 270,
                    flex: 1,
                    bottom: 0,
                    right: 0
                    }}
                  onClick={() => generateAccount()}
                >
                <Message.Header style={{textAlign:"center"}}>
                  Generate
                </Message.Header>
              </Message>
              </div>
            </div>
            :
            <div>
              <input
                style={{marginTop: 5, width: "440px"}}
                id="to-pub-file"
                type="file"
                onChange={(e) => toPubLoad(true)}/>
              <Message color='purple' style={{marginTop: 5, marginBottom: 5, width: "440px", textAlign:"center"}}>
                <Message.Header>
                  Hash to Sign
                  <Button
                    circular
                    icon='copy'
                    basic
                    disabled={(chainId === "" || pactCode === "" || pubKey === "")}
                    // disabled={hash === ""}
                    style={{marginLeft: 5, marginTop: 0}}
                    onClick={(e) => {
                      try {
                        navigator.clipboard.writeText(JSON.parse(cmd).hash)
                      } catch (e) {
                        console.log("can't copy without https")
                      }
                    }}/>
                </Message.Header>
                <p style={{wordBreak: "break-all"}}>{(chainId === "" || pactCode === "" || pubKey === "") ? "please fill in all parameters first" : (checkKey(pubKey) ? JSON.parse(cmd).hash : "enter a valid public key")}</p>
              </Message>
              <Input
                placeholder='TX Signature'
                icon="pencil alternate"
                iconPosition="left"
                style={{width: "440px"}}
                value={sigText}
                onChange={(e) => setSigText(e.target.value)}
              />
            </div>
          }
          </Form.Field>

          <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Capabilities
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                  style={{width: "440px"}}
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
                    style={{width: "440px", marginTop: (i === 0 ? 0 : 5)}}
                    value={v}
                    action={
                       <Button
                       icon="minus"
                       onClick={() => {
                         caps.splice(i,1)
                         setCaps([...caps])
                       }}
                       />
                     }
                  />
                );
              })}

              <Input
                placeholder='(coin.TRANSFER "from" "to" 1.0)'
                icon="code"
                iconPosition="left"
                style={{width: "440px", marginTop: 5, color: (isValidCap(tempCap) && tempCap !== "" ? "red" : "black")}}
                value={tempCap}
                onKeyDown={(e) => {
                  if (e.keyCode === 13 || e.keyCode === 9 ) {
                    console.log(tempCap)
                    if (!isValidCap(tempCap)) {
                      console.log('here')
                      setCaps([...caps, tempCap])
                      setTempCap("")
                    }
                  }
                }}
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
            <Header as="h6" style={{color:'white', fontWeight: 'bold', fontSize: 30, marginTop: 30,textAlign: 'center'}}>
              Network
            </Header>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Chain ID
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
                style={{width:"440px"}}
                placeholder='Chain ID'
                options={chainIds}
                onChange={(e, { value }) => setChainId(value)}
              />
            </Form.Field>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Server
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
              <Select
                style={{width:"440px"}}
                placeholder='Server'
                search={true}
                onClose={(e, {value }) => {
                  const newCat = { key: Math.random().toString(), text: value,
                  value: value }
                  setBootstraps([...bootstraps, newCat]);
                  saveNode(newCat);
                }}
                options={bootstraps}
                value={server}
                allowAdditions
                onAddItem={(e, {value }) => {
                  const newCat = { key: value, text: value,
                  value: value }
                  setBootstraps([...bootstraps, newCat]);
                  saveNode(newCat);
                }}
                onSearchChange={(e, {value}) => {
                  onChangeServer(e.target.value)}
                }
                onChange={(e, { value }) => {
                  onChangeServer(value)
                }}
              />
            </Form.Field>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Version
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
                style={{width:"440px"}}
                icon='sync'
                iconPosition='left'
                placeholder='Version'
                value={ver}
                disabled
                // onChange={(e) => setVer(e.target.value)}
              />
            </Form.Field>
            <Header as="h6" style={{color:'white', fontWeight: 'bold', fontSize: 30, marginTop: 30,textAlign: 'center'}}>
              Meta Data
            </Header>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Chain ID
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
              <Form.Input
                style={{width:"440px"}}
                icon='paper plane'
                iconPosition='left'
                placeholder='Chain ID'
                disabled
                value={chainId}
              />
            </Form.Field>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Sender
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is Sender? </Popup.Header>
                  <Popup.Content>In the absence of a gas capability, the account specified as sender will be defaulted to the account name that signed the transaction</Popup.Content>
                </Popup>
              </label>
              <Form.Input
                style={{width:"440px"}}
                icon='user'
                iconPosition='left'
                placeholder='Sender'
                disabled
                value={acct}
                // onChange={(e) => setCreationTime((!isNaN(parseFloat(e.target.value)) ? parseFloat(e.target.value) : ""))}
              />
            </Form.Field>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Creation Time
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
                style={{width:"440px"}}
                icon='calendar'
                iconPosition='left'
                placeholder='Creation Time'
                value={creationTime}
                onChange={(e) => setCreationTime((!isNaN(parseFloat(e.target.value)) ? parseFloat(e.target.value) : ""))}
              />
            </Form.Field>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>TTL
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is TTL? </Popup.Header>
                  <Popup.Content>Time to Live for a transaction. Your transaction will stay in the mempool for the specified interval between creation time and time to live (in seconds)</Popup.Content>
                </Popup>
              </label>
              <Form.Input
                style={{width:"440px"}}
                icon='clock'
                iconPosition='left'
                placeholder='Time To Live'
                value={ttl}
                onChange={(e) => setTtl((!isNaN(parseFloat(e.target.value)) ? parseFloat(e.target.value) : ""))}
              />
            </Form.Field>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Gas Price
                <Popup
                  trigger={
                    <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                  }
                  position='top center'
                >
                  <Popup.Header>What is Gas price? </Popup.Header>
                  <Popup.Content>Gas Price is the amount you are willing to pay for each unit of computation on chain. Note that transactions are ordered by miners based on this price, so if you want your transaction to be included in the next block be generous!! Default is 1e-6</Popup.Content>
                </Popup>
              </label>
              <Form.Input
                style={{width:"440px"}}
                icon='dollar sign'
                iconPosition='left'
                placeholder='Gas Price'
                value={gasPrice}
                onChange={(e) => {
                  console.log(e.target.value)
                  if (parseFloat(e.target.value) === 0) setGasPrice(e.target.value)
                  else setGasPrice((!isNaN(parseFloat(e.target.value)) ? parseFloat(e.target.value) : ""))

                }}
              />
            </Form.Field>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Gas Limit
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
                style={{width:"440px"}}
                icon='tint'
                iconPosition='left'
                placeholder='Gas Limit'
                value={gasLimit}
                onChange={(e) => setGasLimit((!isNaN(parseFloat(e.target.value)) ? parseFloat(e.target.value) : ""))}
              />
            </Form.Field>
            <Header as="h6" style={{color:'white', fontWeight: 'bold', fontSize: 30, marginTop: 30,textAlign: 'center'}}>
              Env Data (Advanced)
            </Header>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Keyset Name
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
                style={{width: "440px"}}
                value={ksName}
                onChange={(e) => setKsName(e.target.value)}
              />
            </Form.Field>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
              <label style={{color: "white"}}>Keyset Predicate
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
                style={{width:"440px"}}
                placeholder='Predicate'
                options={preds}
                onChange={(e, { value }) => setPred(value)}
              />
            </Form.Field>
            <Form.Field style={{width:"440px", margin: "0 auto", marginTop: "10px"}}>
                <label style={{color: "white"}}>Public Key
                  <Popup
                    trigger={
                      <Icon name='help circle' style={{"marginLeft": "2px"}}/>
                    }
                    position='top center'
                    style={{width: "440px"}}
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
                      style={{width: "440px", marginTop: (i === 0 ? 0 : 5)}}
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
                  style={{width: "440px", marginTop: 5, marginBottom: 100}}
                  value={tempKey}
                  // onChange={(e) => setEnvKeys([...envKeys, e.target.value])}
                  onChange={(e) => setTempKey(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13 || e.keyCode === 9 ) {
                      if (is_hexadecimal(tempKey) && checkKey(tempKey)) {
                        setEnvKeys([...envKeys, tempKey])
                        setTempKey("")
                      }
                    }
                  }}
                  action={
                     <Button
                     icon="add"
                     onClick={() => {
                       setEnvKeys([...envKeys, tempKey])
                       setTempKey("")
                     }}
                     disabled={!(is_hexadecimal(tempKey) && checkKey(tempKey))}
                     />
                  }
                />
              </Form.Field>
          </Form>
        </div>
        </Grid.Column>
      </Grid>
   );

 }


export default Home;


// <Tab panes={panes}/>
//
  //
  //
  //
  // const panes = [
  //   { menuItem: 'JSON', render: () => <Tab.Pane>
  //   <div>
  //     <div>
  //       <Message warning={chainId === "" || pactCode === ""} positive={chainId !== "" || pactCode !== ""} style={{marginTop: 5, marginBottom: 5, fontWeight: "bold"}}>
  //         <Message.Header style={{marginBottom: 10}}>
  //           {(chainId === "" || pactCode === "" ? "JSON Request Object (incomplete)" : "JSON Request Object")}
  //         </Message.Header>
  //         <code style={{wordBreak: "break-all", fontSize: 15,}}>
  //           {cmd}
  //         </code>
  //         <Message.Header style={{marginBottom: 10, marginTop: 10}}>
  //           API Host
  //         </Message.Header>
  //         <code style={{wordBreak: "break-all"}}>{(host === `https://${server}/chainweb/0.0/${ver}/chain//pact` ?  "Select Chain Id" : (ver === "not a chainweb node") ? "Select a valid Chainweb node" : host + "/api/v1/local")}</code>
  //       </Message>
  //     </div>
  //   </div>
  //   </Tab.Pane> },
  //   { menuItem: 'curl cmd', render: () => <Tab.Pane>
  //   <div>
  //     <Message warning={chainId === "" || pactCode === ""} positive={chainId !== "" || pactCode !== ""} style={{marginTop: 5, marginBottom: 5}}>
  //       <Message.Header style={{marginBottom: 10}}>
  //         {(chainId === "" || pactCode === "" ? "Curl Command (incomplete)" : "Curl Command")}
  //       </Message.Header>
  //       <div style={{marginBottom: 5}}>
  //       </div>
  //       <code style={{wordBreak: "break-all", fontSize: 15, marginBottom: 20, fontWeight: "bold"}}>
  //         {curlCmd()}
  //       </code>
  //     </Message>
  //   </div>
  //   </Tab.Pane> },
  //   { menuItem: 'yaml', render: () => <Tab.Pane>
  //   <div>
  //     <Message warning={chainId === "" || pactCode === ""} positive={chainId !== "" || pactCode !== ""} style={{marginTop: 5, marginBottom: 5}}>
  //       <Message.Header style={{marginBottom: 10}}>
  //         {(chainId === "" || pactCode === "" ? "YAML Request Format (incomplete)" : "YAML Request Format")}
  //       </Message.Header>
  //       <ViewYaml
  //         pactCode={pactCode}
  //         caps={caps}
  //         server={server}
  //         ver={ver}
  //         acct={acct}
  //         pubKey={pubKey}
  //         privKey={privKey}
  //         chainId={chainId}
  //         creationTime={creationTime}
  //         ttl={ttl}
  //         gasPrice={gasPrice}
  //         gasLimit={gasLimit}
  //         envKeys={envKeys}
  //         pred={pred}
  //         ksName={ksName}
  //         host={host}
  //         />
  //       <Message.Header style={{marginBottom: 10, marginTop: 10}}>
  //         API Host
  //       </Message.Header>
  //       <div style={{margin: 20, marginBottom: 0}}>
  //         <code style={{wordBreak: "break-all"}}>{(host === `https://${server}/chainweb/0.0/${ver}/chain//pact` ?  "Select Chain Id" : (ver === "not a chainweb node") ? "Select a valid Chainweb node" : host + "/api/v1/local")}</code>
  //       </div>
  //     </Message>
  //   </div>
  //   </Tab.Pane> },
  // ]
