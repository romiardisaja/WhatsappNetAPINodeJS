require("dotenv").config();const{signalRClient:signalRClient,serverHub:serverHub}=require("./signalr.util");signalRClient.start();const{connectedHandler:connectedHandler,onSetStatusHandler:onSetStatusHandler,onSendMessageHandler:onSendMessageHandler,onBroadcastMessageHandler:onBroadcastMessageHandler,onGrabContactHandler:onGrabContactHandler,onGrabGroupHandler:onGrabGroupHandler,onGrabGroupAndMemberHandler:onGrabGroupAndMemberHandler,onArchiveChatHandler:onArchiveChatHandler,onDeleteChatHandler:onDeleteChatHandler,onGetUnreadMessageHandler:onGetUnreadMessageHandler,onDisconnectHandler:onDisconnectHandler,onLogoutHandler:onLogoutHandler}=require("./index.handler");signalRClient.on("connected",connectedHandler),signalRClient.on("reconnecting",n=>{console.log(`SignalR client reconnecting(${n}).`)}),signalRClient.on("disconnected",n=>{console.log(`SignalR client disconnected(${n}).`),setTimeout(()=>process.exit(),500)}),signalRClient.on("error",(n,e)=>{console.log(`SignalR client connect error: ${n}.`),console.log("Service aplikasi belum di jalankan ..."),setTimeout(()=>process.exit(),500)}),signalRClient.connection.hub.on(serverHub,"OnSetStatus",onSetStatusHandler),signalRClient.connection.hub.on(serverHub,"OnSendMessage",onSendMessageHandler),signalRClient.connection.hub.on(serverHub,"OnBroadcastMessage",onBroadcastMessageHandler),signalRClient.connection.hub.on(serverHub,"OnGrabContact",onGrabContactHandler),signalRClient.connection.hub.on(serverHub,"OnGrabGroup",onGrabGroupHandler),signalRClient.connection.hub.on(serverHub,"OnGrabGroupAndMember",onGrabGroupAndMemberHandler),signalRClient.connection.hub.on(serverHub,"OnArchiveChat",onArchiveChatHandler),signalRClient.connection.hub.on(serverHub,"OnDeleteChat",onDeleteChatHandler),signalRClient.connection.hub.on(serverHub,"OnGetUnreadMessage",onGetUnreadMessageHandler),signalRClient.connection.hub.on(serverHub,"OnDisconnect",onDisconnectHandler),signalRClient.connection.hub.on(serverHub,"OnLogout",onLogoutHandler);