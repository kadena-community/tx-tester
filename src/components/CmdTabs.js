import React, { useState, useContext, useEffect } from 'react';
import { Button, Grid, Input, Icon, Form, List,
  Modal, Header, Message, Popup, Select, Radio,
  Tab, TextArea, Loader } from 'semantic-ui-react';
import ViewYaml from './ViewYaml';
import QRCode from 'qrcode.react'

const CmdTabs = (props) => {


  const panes = [
    { menuItem: 'JSON', render: () => <Tab.Pane>
    <div>
      <div>
        <Message warning={props.chainId === "" || props.pactCode === ""} positive={props.chainId !== "" || props.pactCode !== ""} style={{marginTop: 5, marginBottom: 5, fontWeight: "bold"}}>
          <Message.Header style={{marginBottom: 10}}>
            {(props.chainId === "" || props.pactCode === "" ? "JSON Request Object (incomplete)" : "JSON Request Object")}
          </Message.Header>
          <code style={{wordBreak: "break-all", color: "black", fontSize: 15,}}>
            {props.cmd}
          </code>
          <Message.Header style={{marginBottom: 10, marginTop: 10}}>
            API Host
          </Message.Header>
          <code style={{wordBreak: "break-all"}}>{(props.host === `https://${props.server}/chainweb/0.0/${props.ver}/chain//pact` ?  "<Select Chain Id>" : (props.ver === "not a chainweb node") ? "<Select a valid Chainweb node>" : props.host + "/api/v1/local")}</code>
        </Message>
      </div>
    </div>
    </Tab.Pane> },
    { menuItem: 'curl cmd', render: () => <Tab.Pane>
    <div>
      <Message warning={props.chainId === "" || props.pactCode === ""} positive={props.chainId !== "" || props.pactCode !== ""} style={{marginTop: 5, marginBottom: 5}}>
        <Message.Header style={{marginBottom: 10}}>
          {(props.chainId === "" || props.pactCode === "" ? "Curl Command (incomplete)" : "Curl Command")}
        </Message.Header>
        <div style={{marginBottom: 5}}>
        </div>
        <code style={{wordBreak: "break-all", color: "black", fontSize: 15, marginBottom: 20, fontWeight: "bold"}}>
          {`curl -sk -H \"Content-Type: application/json\" -d '${props.cmd}' -X POST ${(props.host === `https://${props.server}/chainweb/0.0/${props.ver}/chain//pact` ?  "<Select Chain Id>" : (props.ver === "not a chainweb node") ? "<Select a valid Chainweb node>" : props.host + "/api/v1/local")}`}
        </code>
      </Message>
    </div>
    </Tab.Pane> },
    { menuItem: 'yaml', render: () => <Tab.Pane>
    <div>
      <Message warning={props.chainId === "" || props.pactCode === ""} positive={props.chainId !== "" || props.pactCode !== ""} style={{marginTop: 5, marginBottom: 5}}>
        <Message.Header style={{marginBottom: 10}}>
          {(props.chainId === "" || props.pactCode === "" ? "YAML Request Format (incomplete)" : "YAML Request Format")}
        </Message.Header>
        <ViewYaml
          pactCode={props.pactCode}
          caps={props.caps}
          server={props.server}
          ver={props.ver}
          acct={props.acct}
          pubKey={props.pubKey}
          privKey={props.privKey}
          chainId={props.chainId}
          creationTime={props.creationTime}
          ttl={props.ttl}
          gasPrice={props.gasPrice}
          gasLimit={props.gasLimit}
          envKeys={props.envKeys}
          pred={props.pred}
          ksName={props.ksName}/>
        <Message.Header style={{marginBottom: 10, marginTop: 10}}>
          API Host
        </Message.Header>
        <div style={{margin: 20, marginBottom: 0}}>
          <code style={{wordBreak: "break-all"}}>{(props.host === `https://${props.server}/chainweb/0.0/${props.ver}/chain//pact` ?  "<Select Chain Id>" : (props.ver === "not a chainweb node") ? "<Select a valid Chainweb node>" : props.host + "/api/v1/local")}</code>
        </div>
      </Message>
    </div>
    </Tab.Pane> },
    { menuItem: 'QR send', render: () => <Tab.Pane>
    <div>
      <Message warning={props.chainId === "" || props.pactCode === ""} positive={props.chainId !== "" || props.pactCode !== ""} style={{marginTop: 5, marginBottom: 5}}>
        <Message.Header style={{marginBottom: 10}}>
          {(props.chainId === "" || props.pactCode === "" ? "QR Code Send (incomplete)" : "QR Code Send")}
        </Message.Header>
        <QRCode value="http://facebook.github.io/react/"/>
        <Message.Header style={{marginBottom: 10, marginTop: 10}}>
          API Host
        </Message.Header>
        <div style={{margin: 20, marginBottom: 0}}>
          <code style={{wordBreak: "break-all"}}>{(props.host === `https://${props.server}/chainweb/0.0/${props.ver}/chain//pact` ?  "<Select Chain Id>" : (props.ver === "not a chainweb node") ? "<Select a valid Chainweb node>" : props.host + "/api/v1/local")}</code>
        </div>
      </Message>
    </div>
    </Tab.Pane> },
  ]

  return (
    <div>
      <Tab panes={panes}/>
    </div>
  )

}

export default CmdTabs;
