(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{6550:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/components/dashboard/killer/UploadMatch",function(){return l(601)}])},6106:function(e,a,l){"use strict";l.d(a,{Lv:function(){return t},Lx:function(){return r},UQ:function(){return i}});let r=["Azarov's Resting Place","Badham Preschool I","Badham Preschool II","Badham Preschool III","Badham Preschool IV","Badham Preschool V","Badham Preschools","Blood Lodge","Coal Tower","Dead Dawg Saloon","Disturbed Ward","Eyrie of Crows","Family Residence","Father Campbell's Chapel","Fractured Cowshed","Garden of Joy","Gas Heaven","Grim Pantry","Groaning Storehouse","Ironworks of Misery","Lampkin Lane","Midwich Elementary School","Mother's Dwelling","Mount Ormond Resort","Raccoon City Police Station","Raccoon City Police Station East Wing","Raccoon City Police Station West Wing","Rancid Abattoir","Rotten Fields","Sanctum of Wrath","Shelter Woods","Suffocation Pit","The Game","The Pale Rose","The Shattered Square","The Temple of Purgation","The Thompson House","The Underground Complex","Torment Creek","Treatment Theatre","Wrecker's Yard","Wretched Shop"],t=["Artist","Blight","Cannibal","Cenobite","Clown","Demo","Doctor","Dredge","Freddy Krueger","Ghost Face","Gunslinger","Hag","Hillbilly","Huntress","Knight","Legion","Myers","Nemesis","Nurse","Oni","Onryo","Pig","Plague","Pyramid Head","Spirit","Trapper","Trickster","Twins","Wesker","Wraith"],i=["Ace Visconti","Ada Wong","Adam Francis","Ashley J. Williams","Cheryl Mason","Claudette Morel","David King","Detective David Tapp","Dwight Fairfield","Elodie Rakoto","Felix Richter","Feng Min","Haddie Kaur","Jake Park","Jane Romero","Jeffrey 'Jeff' Johansen","Jill Valentine","Jonah Vasquez","Kate Denson","Laurie Strode","Leon Scott Kennedy","Meg Thomas","Mikaela Reid","Nancy Wheeler","Nea Karlsson","Quentin Smith","Rebecca Chambers","Steve Harrington","Vittorio Toscano","William 'Bill' Overbeck","Yoichi Asakawa","Yui Kimura","Yun-Jin Lee","Zarina Kassir"]},601:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return o}});var r=l(5893),t=l(7294),i=l(6106),n=l(9332),s=l(8433);function o(e){let a=(0,n.useRouter)(),l=null==e?void 0:e.data,[o,c]=(0,t.useState)(""),[d,u]=(0,t.useState)(!1),h=(0,t.useRef)(),m=(0,t.useRef)(),f=(0,t.useRef)(),p=async(e,r,t)=>{c(""),e=h.current.value,r=m.current.value,t=f.current.value;try{u(!0),await (0,s.Z)({url:"https://us-central1-dbdtracker.cloudfunctions.net/uploadKillerMatches",method:"POST",headers:{"Content-Type":"application/json"},data:{user:l,map:e,killer:r,numberOfKills:t}}),c("Killer Match successfully uploaded!"),a.refresh()}catch(e){c("Upload failed. Please try again later."),u(!1)}h.current.value="",m.current.value="",f.current.value="",u(!1)};return(0,r.jsx)("div",{className:"modal fade",id:"KillerForm",tabIndex:"-1","aria-labelledby":"KillerForm","aria-hidden":"true",children:(0,r.jsx)("div",{className:"modal-dialog",children:(0,r.jsx)("div",{className:"modal-content",children:(0,r.jsx)("div",{className:"match-results",children:(0,r.jsxs)("div",{className:"match-card",children:[(0,r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",style:{color:"#ffffff",position:"absolute",top:"10px",right:"10px",fontSize:"2rem"},children:(0,r.jsx)("i",{className:"bi bi-x-lg"})}),(0,r.jsx)("h1",{children:"Upload Killer Match"}),(0,r.jsxs)("div",{className:"form",children:[o&&(0,r.jsx)("span",{className:"message",children:o}),(0,r.jsx)("label",{htmlFor:"map",className:"text-light",children:"Map Played:"}),(0,r.jsxs)("select",{name:"map",ref:h,className:"form-select form-select-lg mb-3",required:!0,children:[(0,r.jsx)("option",{value:"",defaultChecked:!0,children:"Select a Map"}),i.Lx.map((e,a)=>(0,r.jsx)("option",{value:i.Lx[a],children:i.Lx[a]},e))]}),(0,r.jsx)("label",{htmlFor:"killer",className:"text-light",children:"Killer Faced:"}),(0,r.jsxs)("select",{name:"killer",ref:m,className:"form-select form-select-lg mb-3",required:!0,children:[(0,r.jsx)("option",{value:"",defaultChecked:!0,children:"Select a Killer"}),i.Lv.map((e,a)=>(0,r.jsx)("option",{value:i.Lv[a],children:i.Lv[a]},e))]}),(0,r.jsx)("label",{htmlFor:"numberOfKills",className:"text-light",children:"Number of Kills:"}),(0,r.jsx)("input",{name:"numberOfKills",type:"number",ref:f,className:"form-control mb-3",max:4,min:0,required:!0}),(0,r.jsx)("div",{className:"d-flex w-100 justify-content-space-between align-items-center",children:(0,r.jsx)("button",{disabled:d,className:"myCustomCard-button w-100",onClick:p,children:"Submit"})})]})]})})})})})}}},function(e){e.O(0,[147,774,888,179],function(){return e(e.s=6550)}),_N_E=e.O()}]);