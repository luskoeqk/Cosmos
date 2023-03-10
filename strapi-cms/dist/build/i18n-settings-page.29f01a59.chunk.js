"use strict";(self.webpackChunkstrapi_cms=self.webpackChunkstrapi_cms||[]).push([[3552],{72751:(re,A,m)=>{m.r(A),m.d(A,{default:()=>ie});var e=m(67294),g=m(95489),q=m(45697),i=m.n(q),f=m(97132),t=m(28702),h=m(41363),N=m(8181),o=m(57813),v=m(80831),b=m(53209);const P=(0,b.Ry)().shape({code:(0,b.Z_)().required(),displayName:(0,b.Z_)().max(50,"Settings.locales.modal.locales.displayName.error").required(g.translatedErrors.required)});var T=m(37424),S=m(7982);const G=async(a,n,s)=>{try{const l=await(0,g.request)(`/i18n/locales/${a}`,{method:"PUT",body:n});return s({type:"success",message:{id:(0,o.O)("Settings.locales.modal.edit.success")}}),l}catch{return s({type:"warning",message:{id:"notification.error"}}),null}},V=()=>{const[a,n]=(0,e.useState)(!1),s=(0,T.useDispatch)(),l=(0,g.useNotification)();return{isEditing:a,editLocale:async(d,r)=>{n(!0);const u=await G(d,r,l);s({type:S.OT,editedLocale:u}),n(!1)}}};var H=m(23724);const U=async a=>{try{return await(0,g.request)("/i18n/iso-locales",{method:"GET"})}catch{return a({type:"warning",message:{id:"notification.error"}}),[]}},R=()=>{const{formatMessage:a}=(0,f.useIntl)(),{notifyStatus:n}=(0,t.useNotifyAT)(),s=(0,g.useNotification)(),{isLoading:l,data:c}=(0,H.useQuery)("default-locales",()=>U(s).then(d=>(n(a({id:(0,o.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),d)));return{defaultLocales:c,isLoading:l}},x=({locale:a})=>{const{formatMessage:n}=(0,f.useIntl)(),{values:s,handleChange:l,errors:c}=(0,v.useFormikContext)(),{defaultLocales:d,isLoading:r}=R(),u=!r&&d.find(y=>y.code===a.code);return e.createElement(t.Grid,{gap:4},e.createElement(t.GridItem,{col:6},e.createElement(t.Select,{label:n({id:(0,o.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:u?.code||a.code,disabled:!0},e.createElement(t.Option,{value:u?.code||a.code},u?.name||a.code))),e.createElement(t.GridItem,{col:6},e.createElement(t.TextInput,{name:"displayName",label:n({id:(0,o.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:n({id:(0,o.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.displayName?n({id:(0,o.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:s.displayName,onChange:l})))},Z=x;x.propTypes={locale:i().shape({id:i().number.isRequired,name:i().string.isRequired,code:i().string.isRequired,isDefault:i().bool.isRequired}).isRequired};const I=({isDefaultLocale:a})=>{const{values:n,setFieldValue:s}=(0,v.useFormikContext)(),{formatMessage:l}=(0,f.useIntl)();return e.createElement(t.Checkbox,{name:"isDefault",hint:l({id:(0,o.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>s("isDefault",!n.isDefault),value:n.isDefault,disabled:a},l({id:(0,o.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};I.propTypes={isDefaultLocale:i().bool.isRequired};const j=I,M=({locale:a,onClose:n})=>{const{refetchPermissions:s}=(0,g.useRBACProvider)(),{isEditing:l,editLocale:c}=V(),{formatMessage:d}=(0,f.useIntl)(),r=async({displayName:u,isDefault:y})=>{await c(a.id,{name:u,isDefault:y}),await s()};return e.createElement(t.ModalLayout,{onClose:n,labelledBy:"edit-locale-title"},e.createElement(v.Formik,{initialValues:{code:a?.code,displayName:a?.name||"",isDefault:Boolean(a?.isDefault)},onSubmit:r,validationSchema:P},e.createElement(g.Form,null,e.createElement(t.ModalHeader,null,e.createElement(t.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},d({id:(0,o.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),e.createElement(t.ModalBody,null,e.createElement(t.TabGroup,{label:d({id:(0,o.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(t.Flex,{justifyContent:"space-between"},e.createElement(t.Typography,{as:"h2"},d({id:(0,o.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(t.Tabs,null,e.createElement(t.Tab,null,d({id:(0,o.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(t.Tab,null,d({id:(0,o.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(t.Divider,null),e.createElement(t.Box,{paddingTop:7,paddingBottom:7},e.createElement(t.TabPanels,null,e.createElement(t.TabPanel,null,e.createElement(Z,{locale:a})),e.createElement(t.TabPanel,null,e.createElement(j,{isDefaultLocale:Boolean(a&&a.isDefault)})))))),e.createElement(t.ModalFooter,{startActions:e.createElement(t.Button,{variant:"tertiary",onClick:n},d({id:"app.components.Button.cancel"})),endActions:e.createElement(t.Button,{type:"submit",startIcon:e.createElement(h.Check,null),disabled:l},d({id:"global.save"}))}))))};M.defaultProps={locale:void 0},M.propTypes={locale:i().shape({id:i().number.isRequired,name:i().string.isRequired,code:i().string.isRequired,isDefault:i().bool.isRequired}),onClose:i().func.isRequired};const z=M,W=async(a,n)=>{try{const s=await(0,g.request)(`/i18n/locales/${a}`,{method:"DELETE"});return n({type:"success",message:{id:(0,o.O)("Settings.locales.modal.delete.success")}}),s}catch(s){return n({type:"warning",message:{id:"notification.error"}}),s}},$=()=>{const[a,n]=(0,e.useState)(!1),s=(0,T.useDispatch)(),l=(0,g.useNotification)();return{isDeleting:a,deleteLocale:async d=>{n(!0),await W(d,l),s({type:S.HC,id:d}),n(!1)}}},D=({localeToDelete:a,onClose:n})=>{const{isDeleting:s,deleteLocale:l}=$(),c=Boolean(a),d=()=>l(a.id).then(n);return e.createElement(g.ConfirmDialog,{isConfirmButtonLoading:s,onConfirm:d,onToggleDialog:n,isOpen:c})};D.defaultProps={localeToDelete:void 0},D.propTypes={localeToDelete:i().shape({id:i().number.isRequired}),onClose:i().func.isRequired};const Q=D;var J=m(27361),K=m.n(J);const X=async({code:a,name:n,isDefault:s},l)=>{const c=await(0,g.request)("/i18n/locales",{method:"POST",body:{name:n,code:a,isDefault:s}});return l({type:"success",message:{id:(0,o.O)("Settings.locales.modal.create.success")}}),c},Y=()=>{const[a,n]=(0,e.useState)(!1),s=(0,T.useDispatch)(),l=(0,g.useNotification)();return{isAdding:a,addLocale:async d=>{n(!0);try{const r=await X(d,l);s({type:S.xz,newLocale:r})}catch(r){const u=K()(r,"response.payload.message",null);throw u&&u.includes("already exists")?l({type:"warning",message:{id:(0,o.O)("Settings.locales.modal.create.alreadyExist")}}):l({type:"warning",message:{id:"notification.error"}}),r}finally{n(!1)}}}},O=e.memo(({value:a,onClear:n,onLocaleChange:s,error:l})=>{const{formatMessage:c}=(0,f.useIntl)(),{defaultLocales:d,isLoading:r}=R(),{locales:u}=(0,N.Z)(),y=(d||[]).map(p=>({label:p.name,value:p.code})).filter(({value:p})=>{const E=u.find(({code:C})=>C===p);return!E||E.code===a}),L=a||"";return e.createElement(t.Combobox,{"aria-busy":r,error:l,label:c({id:(0,o.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:L,onClear:a?n:void 0,onChange:p=>{const E=y.find(C=>C.value===p);E&&s({code:E.value,displayName:E.label})},placeholder:c({id:"components.placeholder.select",defaultMessage:"Select"})},y.map(p=>e.createElement(t.ComboboxOption,{value:p.value,key:p.value},p.label)))});O.defaultProps={error:void 0,value:void 0,onClear(){},onLocaleChange:()=>{}},O.propTypes={error:i().string,onClear:i().func,onLocaleChange:i().func,value:i().string};const _=O,ee=()=>{const{formatMessage:a}=(0,f.useIntl)(),{values:n,handleChange:s,setFieldValue:l,errors:c}=(0,v.useFormikContext)(),d=(0,e.useCallback)(u=>{l("displayName",u.displayName),l("code",u.code)},[l]),r=(0,e.useCallback)(()=>{l("displayName",""),l("code","")},[l]);return e.createElement(t.Grid,{gap:4},e.createElement(t.GridItem,{col:6},e.createElement(_,{error:c.code,value:n.code,onLocaleChange:d,onClear:r})),e.createElement(t.GridItem,{col:6},e.createElement(t.TextInput,{name:"displayName",label:a({id:(0,o.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:a({id:(0,o.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.displayName?a({id:(0,o.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:n.displayName,onChange:s})))},te=()=>{const{values:a,setFieldValue:n}=(0,v.useFormikContext)(),{formatMessage:s}=(0,f.useIntl)();return e.createElement(t.Checkbox,{hint:s({id:(0,o.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>n("isDefault",!a.isDefault),value:a.isDefault},s({id:(0,o.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))},ae={code:"",displayName:"",isDefault:!1},w=({onClose:a})=>{const{isAdding:n,addLocale:s}=Y(),{formatMessage:l}=(0,f.useIntl)(),{refetchPermissions:c}=(0,g.useRBACProvider)(),d=async r=>{await s({code:r.code,name:r.displayName,isDefault:r.isDefault}),await c()};return e.createElement(t.ModalLayout,{onClose:a,labelledBy:"add-locale-title"},e.createElement(v.Formik,{initialValues:ae,onSubmit:d,validationSchema:P,validateOnChange:!1},e.createElement(g.Form,null,e.createElement(t.ModalHeader,null,e.createElement(t.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},l({id:(0,o.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),e.createElement(t.ModalBody,null,e.createElement(t.TabGroup,{label:l({id:(0,o.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(t.Flex,{justifyContent:"space-between"},e.createElement(t.Typography,{as:"h2",variant:"beta"},l({id:(0,o.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(t.Tabs,null,e.createElement(t.Tab,null,l({id:(0,o.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(t.Tab,null,l({id:(0,o.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(t.Divider,null),e.createElement(t.Box,{paddingTop:7,paddingBottom:7},e.createElement(t.TabPanels,null,e.createElement(t.TabPanel,null,e.createElement(ee,null)),e.createElement(t.TabPanel,null,e.createElement(te,null)))))),e.createElement(t.ModalFooter,{startActions:e.createElement(t.Button,{variant:"tertiary",onClick:a},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(t.Button,{type:"submit",startIcon:e.createElement(h.Check,null),disabled:n},l({id:"global.save",defaultMessage:"Save"}))}))))};w.propTypes={onClose:i().func.isRequired};const le=w,B=({locales:a,onDeleteLocale:n,onEditLocale:s})=>{const{formatMessage:l}=(0,f.useIntl)();return e.createElement(t.Table,{colCount:4,rowCount:a.length+1},e.createElement(t.Thead,null,e.createElement(t.Tr,null,e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},l({id:(0,o.O)("Settings.locales.row.id")}))),e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},l({id:(0,o.O)("Settings.locales.row.displayName")}))),e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},l({id:(0,o.O)("Settings.locales.row.default-locale")}))),e.createElement(t.Th,null,e.createElement(t.VisuallyHidden,null,"Actions")))),e.createElement(t.Tbody,null,a.map(c=>e.createElement(t.Tr,{key:c.id,...(0,g.onRowClick)({fn:()=>s(c),condition:s})},e.createElement(t.Td,null,e.createElement(t.Typography,{textColor:"neutral800"},c.id)),e.createElement(t.Td,null,e.createElement(t.Typography,{textColor:"neutral800"},c.name)),e.createElement(t.Td,null,e.createElement(t.Typography,{textColor:"neutral800"},c.isDefault?l({id:(0,o.O)("Settings.locales.default")}):null)),e.createElement(t.Td,null,e.createElement(t.Stack,{horizontal:!0,spacing:1,style:{justifyContent:"flex-end"},...g.stopPropagation},s&&e.createElement(t.IconButton,{onClick:()=>s(c),label:l({id:(0,o.O)("Settings.list.actions.edit")}),icon:e.createElement(h.Pencil,null),noBorder:!0}),n&&!c.isDefault&&e.createElement(t.IconButton,{onClick:()=>n(c),label:l({id:(0,o.O)("Settings.list.actions.delete")}),icon:e.createElement(h.Trash,null),noBorder:!0})))))))};B.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},B.propTypes={locales:i().array,onDeleteLocale:i().func,onEditLocale:i().func};const ne=B,F=({canUpdateLocale:a,canDeleteLocale:n,onToggleCreateModal:s,isCreating:l})=>{const[c,d]=(0,e.useState)(),[r,u]=(0,e.useState)(),{locales:y}=(0,N.Z)(),{formatMessage:L}=(0,f.useIntl)();(0,g.useFocusWhenNavigate)();const p=()=>d(void 0),E=n?d:void 0,C=()=>u(void 0),de=a?u:void 0;return e.createElement(t.Main,{tabIndex:-1},e.createElement(t.HeaderLayout,{primaryAction:e.createElement(t.Button,{startIcon:e.createElement(h.Plus,null),onClick:s,size:"S"},L({id:(0,o.O)("Settings.list.actions.add")})),title:L({id:(0,o.O)("plugin.name")}),subtitle:L({id:(0,o.O)("Settings.list.description")})}),e.createElement(t.ContentLayout,null,y?.length>0?e.createElement(ne,{locales:y,onDeleteLocale:E,onEditLocale:de}):e.createElement(t.EmptyStateLayout,{icon:e.createElement(h.EmptyDocuments,{width:void 0,height:void 0}),content:L({id:(0,o.O)("Settings.list.empty.title")}),action:s?e.createElement(t.Button,{variant:"secondary",startIcon:e.createElement(h.Plus,null),onClick:s},L({id:(0,o.O)("Settings.list.actions.add")})):null})),l&&e.createElement(le,{onClose:s}),r&&e.createElement(z,{onClose:C,locale:r}),e.createElement(Q,{localeToDelete:c,onClose:p}))};F.defaultProps={onToggleCreateModal:void 0},F.propTypes={canUpdateLocale:i().bool.isRequired,canDeleteLocale:i().bool.isRequired,onToggleCreateModal:i().func,isCreating:i().bool.isRequired};const se=F,k=({canReadLocale:a,canCreateLocale:n,canDeleteLocale:s,canUpdateLocale:l})=>{const[c,d]=(0,e.useState)(!1),r=n?()=>d(u=>!u):void 0;return a?e.createElement(se,{canUpdateLocale:l,canDeleteLocale:s,onToggleCreateModal:r,isCreating:c}):null};k.propTypes={canReadLocale:i().bool.isRequired,canCreateLocale:i().bool.isRequired,canUpdateLocale:i().bool.isRequired,canDeleteLocale:i().bool.isRequired};const oe=k;var ce=m(2135);const ie=()=>{const{isLoading:a,allowedActions:{canRead:n,canUpdate:s,canCreate:l,canDelete:c}}=(0,g.useRBAC)(ce.Z);return a?null:e.createElement(oe,{canReadLocale:n,canCreateLocale:l,canUpdateLocale:s,canDeleteLocale:c})}}}]);
