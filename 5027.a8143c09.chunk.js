"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5027],{15027:(Qe,le,t)=>{t.d(le,{App:()=>Ve});var e=t(92132),a=t(80403),y=t(17703),oe=t(71389),n=t(97809),S=t(21272),Z=t(40427),de=t(61485),ce=t(99248),p=t(30893),ge=t(6239),ue=t(7537),he=t(67030),F=t(85963),m=t(83997),H=t(58805),pe=t(79739),X=t(38413),J=t(55356),_e=t(64871),me=t(88353),$=t(4198),k=t(48323),Ee=t(10573),xe=t(90361),N=t(33363),fe=t(53563),Me=t(90151),je=t(68074),ye=t(20636),De=t(12081),Re=t(94061),Y=t(12408),Pe=t(48653),V=t(24093),w=t(42106),Ae=t(49654),q=t(21610),Oe=t(41909),Ce=t(50612),be=t(49310),ee=t(85166),Ie=t(46270),Te=t(85641),Be=t(36481),ve=t(5194),B=t(54894),v=t(79793),se=t(61535),z=t(12083),Ze=t(82437);const Le=z.Ik().shape({name:z.Yj().trim().required(),scheduledAt:z.Yj().nullable(),timezone:z.Yj().when("scheduledAt",{is:s=>!!s,then:z.Yj().required(),otherwise:z.Yj().nullable()})}).required().noUnknown(),te=({handleClose:s,handleSubmit:c,initialValues:g,isLoading:i=!1})=>{const{formatMessage:r}=(0,B.A)(),{pathname:l}=(0,y.zy)(),_=l===`/plugins/${n.p}`;return(0,e.jsxs)(de.k,{onClose:s,labelledBy:"title",children:[(0,e.jsx)(ce.r,{children:(0,e.jsx)(p.o,{id:"title",fontWeight:"bold",textColor:"neutral800",children:r({id:"content-releases.modal.title",defaultMessage:"{isCreatingRelease, select, true {New release} other {Edit release}}"},{isCreatingRelease:_})})}),(0,e.jsx)(se.l1,{validateOnChange:!1,onSubmit:c,initialValues:g,validationSchema:Le,children:({values:E,errors:D,handleChange:x})=>(0,e.jsxs)(se.lV,{children:[(0,e.jsx)(ge.c,{children:(0,e.jsx)(ue.k,{label:r({id:"content-releases.modal.form.input.label.release-name",defaultMessage:"Name"}),name:"name",value:E.name,error:D.name,onChange:x,required:!0})}),(0,e.jsx)(he.j,{startActions:(0,e.jsx)(F.$,{onClick:s,variant:"tertiary",name:"cancel",children:r({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(F.$,{name:"submit",loading:i,disabled:!E.name||E.name===g.name,type:"submit",children:r({id:"content-releases.modal.form.button.submit",defaultMessage:"{isCreatingRelease, select, true {Continue} other {Save}}"},{isCreatingRelease:_})})})]})})]})},We=(0,v.Ay)(m.s)`
  align-self: stretch;
  border-bottom-right-radius: ${({theme:s})=>s.borderRadius};
  border-bottom-left-radius: ${({theme:s})=>s.borderRadius};
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,ae=(0,v.Ay)(w.q7)`
  svg path {
    fill: ${({theme:s,disabled:c})=>c&&s.colors.neutral500};
  }
  span {
    color: ${({theme:s,disabled:c})=>c&&s.colors.neutral500};
  }
`,Ue=(0,v.Ay)(Oe.A)`
  width: ${({theme:s})=>s.spaces[3]};
  height: ${({theme:s})=>s.spaces[3]};
  path {
    fill: ${({theme:s})=>s.colors.neutral600};
  }
`,Ke=(0,v.Ay)(Ce.A)`
  width: ${({theme:s})=>s.spaces[3]};
  height: ${({theme:s})=>s.spaces[3]};
  path {
    fill: ${({theme:s})=>s.colors.danger600};
  }
`,Se=(0,v.Ay)(p.o)`
  max-width: 300px;
`,$e=({action:s,schema:c,components:g,entry:i})=>{const{formatMessage:r}=(0,B.A)(),{validate:l}=(0,Z.CQ)(),{errors:_}=l(i,{contentType:c,components:g,isCreatingEntry:!1});if(Object.keys(_).length>0){const E=Object.entries(_).map(([D,x])=>r({id:`${x.id}.withField`,defaultMessage:x.defaultMessage},{field:D})).join(" ");return(0,e.jsxs)(m.s,{gap:2,children:[(0,e.jsx)(H.I,{color:"danger600",as:be.A}),(0,e.jsx)(pe.m,{description:E,children:(0,e.jsx)(Se,{textColor:"danger600",variant:"omega",fontWeight:"semiBold",ellipsis:!0,children:E})})]})}return s=="publish"?(0,e.jsxs)(m.s,{gap:2,children:[(0,e.jsx)(H.I,{color:"success600",as:ee.A}),i.publishedAt?(0,e.jsx)(p.o,{textColor:"success600",fontWeight:"bold",children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.already-published",defaultMessage:"Already published"})}):(0,e.jsx)(p.o,{children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-publish",defaultMessage:"Ready to publish"})})]}):(0,e.jsxs)(m.s,{gap:2,children:[(0,e.jsx)(H.I,{color:"success600",as:ee.A}),i.publishedAt?(0,e.jsx)(p.o,{children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-unpublish",defaultMessage:"Ready to unpublish"})}):(0,e.jsx)(p.o,{textColor:"success600",fontWeight:"bold",children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.already-unpublished",defaultMessage:"Already unpublished"})})]})},ne=({toggleEditReleaseModal:s,toggleWarningSubmit:c,children:g})=>{const{formatMessage:i}=(0,B.A)(),{releaseId:r}=(0,y.g)(),{data:l,isLoading:_,isError:E,error:D}=(0,n.u)({id:r}),[x,{isLoading:L}]=(0,n.c)(),u=(0,a.hN)(),{formatAPIError:W}=(0,a.wq)(),{allowedActions:{canUpdate:C,canDelete:U}}=(0,a.ec)(n.P),b=(0,n.d)(),{trackUsage:R}=(0,a.z1)(),d=l?.data,K=async()=>{const A=await x({id:r});if("data"in A){u({type:"success",message:i({id:"content-releases.pages.ReleaseDetails.publish-notification-success",defaultMessage:"Release was published successfully."})});const{totalEntries:o,totalPublishedEntries:M,totalUnpublishedEntries:O}=A.data.meta;R("didPublishRelease",{totalEntries:o,totalPublishedEntries:M,totalUnpublishedEntries:O})}else(0,n.i)(A.error)?u({type:"warning",message:W(A.error)}):u({type:"warning",message:i({id:"notification.error",defaultMessage:"An error occurred"})})},I=()=>{b(n.r.util.invalidateTags([{type:"ReleaseAction",id:"LIST"}]))},f=()=>d?.createdBy?d.createdBy.username?d.createdBy.username:d.createdBy.firstname?`${d.createdBy.firstname} ${d.createdBy.lastname||""}`.trim():d.createdBy.email:null;if(_)return(0,e.jsx)(X.g,{"aria-busy":_,children:(0,e.jsx)(a.Bl,{})});if(E||!d)return(0,e.jsx)(y.rd,{to:{pathname:"/plugins/content-releases",state:{errors:[{code:D?.code}]}}});const h=d.actions.meta.count||0,P=Boolean(f());return(0,e.jsxs)(X.g,{"aria-busy":_,children:[(0,e.jsx)(J.Q,{title:d.name,subtitle:i({id:"content-releases.pages.Details.header-subtitle",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:h}),navigationAction:(0,e.jsx)(_e.N,{startIcon:(0,e.jsx)(Ie.A,{}),to:"/plugins/content-releases",children:i({id:"global.back",defaultMessage:"Back"})}),primaryAction:!d.releasedAt&&(0,e.jsxs)(m.s,{gap:2,children:[(0,e.jsxs)(w.bL,{children:[(0,e.jsx)(w.l9,{as:me.K,paddingLeft:2,paddingRight:2,"aria-label":i({id:"content-releases.header.actions.open-release-actions",defaultMessage:"Release edit and delete menu"}),icon:(0,e.jsx)(Te.A,{}),variant:"tertiary"}),(0,e.jsxs)(w.UC,{top:1,popoverPlacement:"bottom-end",children:[(0,e.jsxs)(m.s,{alignItems:"center",justifyContent:"center",direction:"column",padding:1,width:"100%",children:[(0,e.jsx)(ae,{disabled:!C,onSelect:s,children:(0,e.jsxs)(m.s,{paddingTop:2,paddingBottom:2,alignItems:"center",gap:2,hasRadius:!0,width:"100%",children:[(0,e.jsx)(Ue,{}),(0,e.jsx)(p.o,{ellipsis:!0,children:i({id:"content-releases.header.actions.edit",defaultMessage:"Edit"})})]})}),(0,e.jsx)(ae,{disabled:!U,onSelect:c,children:(0,e.jsxs)(m.s,{paddingTop:2,paddingBottom:2,alignItems:"center",gap:2,hasRadius:!0,width:"100%",children:[(0,e.jsx)(Ke,{}),(0,e.jsx)(p.o,{ellipsis:!0,textColor:"danger600",children:i({id:"content-releases.header.actions.delete",defaultMessage:"Delete"})})]})})]}),(0,e.jsxs)(We,{direction:"column",justifyContent:"center",alignItems:"flex-start",gap:1,padding:5,children:[(0,e.jsx)(p.o,{variant:"pi",fontWeight:"bold",children:i({id:"content-releases.header.actions.created",defaultMessage:"Created"})}),(0,e.jsxs)(p.o,{variant:"pi",color:"neutral300",children:[(0,e.jsx)(a.sR,{timestamp:new Date(d.createdAt)}),i({id:"content-releases.header.actions.created.description",defaultMessage:"{hasCreatedByUser, select, true { by {createdBy}} other { by deleted user}}"},{createdBy:f(),hasCreatedByUser:P})]})]})]})]}),(0,e.jsx)(F.$,{size:"S",variant:"tertiary",onClick:I,children:i({id:"content-releases.header.actions.refresh",defaultMessage:"Refresh"})}),(0,e.jsx)(a.d4,{permissions:n.P.publish,children:(0,e.jsx)(F.$,{size:"S",variant:"default",onClick:K,loading:L,disabled:d.actions.meta.count===0,children:i({id:"content-releases.header.actions.publish",defaultMessage:"Publish"})})})]})}),g]})},Ne=["contentType","locale","action"],ie=s=>s==="locale"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.locales",defaultMessage:"Locales"}:s==="action"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.actions",defaultMessage:"Actions"}:{id:"content-releases.pages.ReleaseDetails.groupBy.option.content-type",defaultMessage:"Content-Types"},ze=()=>{const{formatMessage:s}=(0,B.A)(),{releaseId:c}=(0,y.g)(),[{query:g},i]=(0,a.sq)(),r=(0,a.hN)(),{formatAPIError:l}=(0,a.wq)(),{data:_,isLoading:E,isError:D,error:x}=(0,n.u)({id:c}),{allowedActions:{canUpdate:L}}=(0,a.ec)(n.P),u=_?.data,W=g?.groupBy||"contentType",{isLoading:C,isFetching:U,isError:b,data:R,error:d}=(0,n.e)({...g,releaseId:c}),[K]=(0,n.f)(),I=async(o,M,O)=>{const j=await K({params:{releaseId:c,actionId:M},body:{type:o.target.value},query:g,actionPath:O});"error"in j&&((0,n.i)(j.error)?r({type:"warning",message:l(j.error)}):r({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})}))};if(C||E)return(0,e.jsx)($.s,{children:(0,e.jsx)(a.Bl,{})});const f=R?.data,h=R?.meta,P=h?.contentTypes||{},A=h?.components||{};if(D||!u){const o=[];return x&&o.push({code:x.code}),d&&o.push({code:d.code}),(0,e.jsx)(y.rd,{to:{pathname:"/plugins/content-releases",state:{errors:o}}})}return b||!f?(0,e.jsx)($.s,{children:(0,e.jsx)(a.hH,{})}):Object.keys(f).length===0?(0,e.jsx)($.s,{children:(0,e.jsx)(a.R1,{content:{id:"content-releases.pages.Details.tab.emptyEntries",defaultMessage:"This release is empty. Open the Content Manager, select an entry and add it to the release."},action:(0,e.jsx)(Ae.z,{as:oe.N_,to:{pathname:"/content-manager"},style:{textDecoration:"none"},variant:"secondary",children:s({id:"content-releases.page.Details.button.openContentManager",defaultMessage:"Open the Content Manager"})})})}):(0,e.jsx)($.s,{children:(0,e.jsxs)(m.s,{gap:8,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(m.s,{children:(0,e.jsx)(k.Z,{"aria-label":s({id:"content-releases.pages.ReleaseDetails.groupBy.aria-label",defaultMessage:"Group by"}),customizeContent:o=>s({id:"content-releases.pages.ReleaseDetails.groupBy.label",defaultMessage:"Group by {groupBy}"},{groupBy:o}),value:s(ie(W)),onChange:o=>i({groupBy:o}),children:Ne.map(o=>(0,e.jsx)(k.eY,{value:o,children:s(ie(o))},o))})}),Object.keys(f).map(o=>(0,e.jsxs)(m.s,{gap:4,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(m.s,{role:"separator","aria-label":o,children:(0,e.jsx)(Ee.E,{children:o})}),(0,e.jsx)(a.XI.Root,{rows:f[o].map(M=>({...M,id:Number(M.entry.id)})),colCount:f[o].length,isLoading:C,isFetching:U,children:(0,e.jsxs)(a.XI.Content,{children:[(0,e.jsxs)(a.XI.Head,{children:[(0,e.jsx)(a.XI.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.name",defaultMessage:"name"}),name:"name"}),(0,e.jsx)(a.XI.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.locale",defaultMessage:"locale"}),name:"locale"}),(0,e.jsx)(a.XI.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.content-type",defaultMessage:"content-type"}),name:"content-type"}),(0,e.jsx)(a.XI.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.action",defaultMessage:"action"}),name:"action"}),!u.releasedAt&&(0,e.jsx)(a.XI.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.status",defaultMessage:"status"}),name:"status"})]}),(0,e.jsx)(a.XI.LoadingBody,{}),(0,e.jsx)(a.XI.Body,{children:f[o].map(({id:M,contentType:O,locale:j,type:T,entry:G},Ge)=>(0,e.jsxs)(xe.Tr,{children:[(0,e.jsx)(N.Td,{width:"25%",maxWidth:"200px",children:(0,e.jsx)(p.o,{ellipsis:!0,children:`${O.mainFieldValue||G.id}`})}),(0,e.jsx)(N.Td,{width:"10%",children:(0,e.jsx)(p.o,{children:`${j?.name?j.name:"-"}`})}),(0,e.jsx)(N.Td,{width:"10%",children:(0,e.jsx)(p.o,{children:O.displayName||""})}),(0,e.jsx)(N.Td,{width:"20%",children:u.releasedAt?(0,e.jsx)(p.o,{children:s({id:"content-releases.page.ReleaseDetails.table.action-published",defaultMessage:"This entry was <b>{isPublish, select, true {published} other {unpublished}}</b>."},{isPublish:T==="publish",b:Q=>(0,e.jsx)(p.o,{fontWeight:"bold",children:Q})})}):(0,e.jsx)(n.R,{selected:T,handleChange:Q=>I(Q,M,[o,Ge]),name:`release-action-${M}-type`,disabled:!L})}),!u.releasedAt&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(N.Td,{width:"20%",minWidth:"200px",children:(0,e.jsx)($e,{action:T,schema:P?.[O.uid],components:A,entry:G})}),(0,e.jsx)(N.Td,{children:(0,e.jsx)(m.s,{justifyContent:"flex-end",children:(0,e.jsxs)(n.g.Root,{children:[(0,e.jsx)(n.g.ReleaseActionEntryLinkItem,{contentTypeUid:O.uid,entryId:G.id,locale:j?.code}),(0,e.jsx)(n.g.DeleteReleaseActionItem,{releaseId:u.id,actionId:M})]})})})]})]},M))})]})})]},`releases-group-${o}`)),(0,e.jsxs)(m.s,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(a._u,{defaultValue:h?.pagination?.pageSize.toString()}),(0,e.jsx)(a.W7,{pagination:{pageCount:h?.pagination?.pageCount||0}})]})]})})},Fe=()=>{const{formatMessage:s}=(0,B.A)(),{releaseId:c}=(0,y.g)(),g=(0,a.hN)(),{formatAPIError:i}=(0,a.wq)(),{push:r}=(0,y.W6)(),[l,_]=S.useState(!1),[E,D]=S.useState(!1),{isLoading:x,data:L,isSuccess:u}=(0,n.u)({id:c}),[W,{isLoading:C}]=(0,n.a)(),[U,{isLoading:b}]=(0,n.b)(),R=()=>{_(h=>!h)},d=()=>D(h=>!h);if(x)return(0,e.jsx)(ne,{toggleEditReleaseModal:R,toggleWarningSubmit:d,children:(0,e.jsx)($.s,{children:(0,e.jsx)(a.Bl,{})})});const K=u&&L?.data?.name||"",I=async h=>{const P=await W({id:c,name:h.name});"data"in P?g({type:"success",message:s({id:"content-releases.modal.release-updated-notification-success",defaultMessage:"Release updated."})}):(0,n.i)(P.error)?g({type:"warning",message:i(P.error)}):g({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})}),R()},f=async()=>{const h=await U({id:c});"data"in h?r("/plugins/content-releases"):(0,n.i)(h.error)?g({type:"warning",message:i(h.error)}):g({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(ne,{toggleEditReleaseModal:R,toggleWarningSubmit:d,children:[(0,e.jsx)(ze,{}),l&&(0,e.jsx)(te,{handleClose:R,handleSubmit:I,isLoading:x||C,initialValues:{name:K||""}}),(0,e.jsx)(a.TM,{bodyText:{id:"content-releases.dialog.confirmation-message",defaultMessage:"Are you sure you want to delete this release?"},isOpen:E,isConfirmButtonLoading:b,onToggleDialog:d,onConfirm:f})]})},Xe=(0,v.Ay)(q.N)`
  display: block;
`,re=({sectionTitle:s,releases:c=[],isError:g=!1})=>{const{formatMessage:i}=(0,B.A)();return g?(0,e.jsx)(a.hH,{}):c?.length===0?(0,e.jsx)(fe.p,{content:i({id:"content-releases.page.Releases.tab.emptyEntries",defaultMessage:"No releases"},{target:s}),icon:(0,e.jsx)(Be.A,{width:"10rem"})}):(0,e.jsx)(Me.x,{gap:4,children:c.map(({id:r,name:l,actions:_})=>(0,e.jsx)(je.E,{col:3,s:6,xs:12,children:(0,e.jsx)(Xe,{href:`content-releases/${r}`,isExternal:!1,children:(0,e.jsxs)(m.s,{direction:"column",justifyContent:"space-between",padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",width:"100%",alignItems:"start",gap:2,children:[(0,e.jsx)(p.o,{as:"h3",variant:"delta",fontWeight:"bold",children:l}),(0,e.jsx)(p.o,{variant:"pi",children:i({id:"content-releases.page.Releases.release-item.entries",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:_.meta.count})})]})})},r))})},we=(0,v.Ay)(ye.F)`
  button {
    display: none;
  }
  p + div {
    margin-left: auto;
  }
`,He={name:""},Ye=()=>{const s=S.useRef(null),c=(0,y.zy)(),[g,i]=S.useState(!1),r=(0,a.hN)(),{formatMessage:l}=(0,B.A)(),{push:_,replace:E}=(0,y.W6)(),{formatAPIError:D}=(0,a.wq)(),[{query:x},L]=(0,a.sq)(),u=(0,n.h)(x),[W,{isLoading:C}]=(0,n.j)(),{getFeature:U}=(0,Z.bO)(),{maximumReleases:b=3}=U("cms-content-releases"),{trackUsage:R}=(0,a.z1)(),{isLoading:d,isSuccess:K,isError:I}=u,f=u?.currentData?.meta?.activeTab||"pending",h=["pending","done"].indexOf(f);S.useEffect(()=>{c?.state?.errors&&(r({type:"warning",title:l({id:"content-releases.pages.Releases.notification.error.title",defaultMessage:"Your request could not be processed."}),message:l({id:"content-releases.pages.Releases.notification.error.message",defaultMessage:"Please try again or open another release."})}),E({state:null}))},[l,c?.state?.errors,E,r]),S.useEffect(()=>{s.current&&s.current._handlers.setSelectedTabIndex(h)},[h]);const P=()=>{i(j=>!j)};if(d)return(0,e.jsx)(X.g,{"aria-busy":d,children:(0,e.jsx)(a.Bl,{})});const A=K&&u.currentData?.meta?.pagination?.total||0,o=A>=b,M=j=>{L({...x,page:1,pageSize:u?.currentData?.meta?.pagination?.pageSize||16,filters:{releasedAt:{$notNull:j!==0}}})},O=async j=>{const T=await W({name:j.name});"data"in T?(r({type:"success",message:l({id:"content-releases.modal.release-created-notification-success",defaultMessage:"Release created."})}),R("didCreateRelease"),_(`/plugins/content-releases/${T.data.data.id}`)):(0,n.i)(T.error)?r({type:"warning",message:D(T.error)}):r({type:"warning",message:l({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(X.g,{"aria-busy":d,children:[(0,e.jsx)(J.Q,{title:l({id:"content-releases.pages.Releases.title",defaultMessage:"Releases"}),subtitle:l({id:"content-releases.pages.Releases.header-subtitle",defaultMessage:"{number, plural, =0 {No releases} one {# release} other {# releases}}"},{number:A}),primaryAction:(0,e.jsx)(a.d4,{permissions:n.P.create,children:(0,e.jsx)(F.$,{startIcon:(0,e.jsx)(ve.A,{}),onClick:P,disabled:o,children:l({id:"content-releases.header.actions.add-release",defaultMessage:"New release"})})})}),(0,e.jsx)($.s,{children:(0,e.jsxs)(e.Fragment,{children:[f==="pending"&&o&&(0,e.jsx)(we,{marginBottom:6,action:(0,e.jsx)(q.N,{href:"https://strapi.io/pricing-cloud",isExternal:!0,children:l({id:"content-releases.pages.Releases.max-limit-reached.action",defaultMessage:"Explore plans"})}),title:l({id:"content-releases.pages.Releases.max-limit-reached.title",defaultMessage:"You have reached the {number} pending {number, plural, one {release} other {releases}} limit."},{number:b}),onClose:()=>{},closeLabel:"",children:l({id:"content-releases.pages.Releases.max-limit-reached.message",defaultMessage:"Upgrade to manage an unlimited number of releases."})}),(0,e.jsxs)(De.f,{label:l({id:"content-releases.pages.Releases.tab-group.label",defaultMessage:"Releases list"}),variant:"simple",initialSelectedTabIndex:h,onTabChange:M,ref:s,children:[(0,e.jsxs)(Re.a,{paddingBottom:8,children:[(0,e.jsxs)(Y.t,{children:[(0,e.jsx)(Y.o,{children:l({id:"content-releases.pages.Releases.tab.pending",defaultMessage:"Pending"})}),(0,e.jsx)(Y.o,{children:l({id:"content-releases.pages.Releases.tab.done",defaultMessage:"Done"})})]}),(0,e.jsx)(Pe.c,{})]}),(0,e.jsxs)(V.T,{children:[(0,e.jsx)(V.K,{children:(0,e.jsx)(re,{sectionTitle:"pending",releases:u?.currentData?.data,isError:I})}),(0,e.jsx)(V.K,{children:(0,e.jsx)(re,{sectionTitle:"done",releases:u?.currentData?.data,isError:I})})]})]}),A>0&&(0,e.jsxs)(m.s,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(a._u,{options:["8","16","32","64"],defaultValue:u?.currentData?.meta?.pagination?.pageSize.toString()}),(0,e.jsx)(a.W7,{pagination:{pageCount:u?.currentData?.meta?.pagination?.pageCount||0}})]})]})}),g&&(0,e.jsx)(te,{handleClose:P,handleSubmit:O,isLoading:C,initialValues:He})]})},Ve=()=>(0,e.jsx)(a.kz,{permissions:n.P.main,children:(0,e.jsxs)(y.dO,{children:[(0,e.jsx)(y.qh,{exact:!0,path:`/plugins/${n.p}`,component:Ye}),(0,e.jsx)(y.qh,{exact:!0,path:`/plugins/${n.p}/:releaseId`,component:Fe})]})})}}]);
