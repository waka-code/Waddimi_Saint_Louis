import{j as e,u as l,a as x}from"./index-DQD_JXXc.js";function c(){return{styles:{descriptionH2:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"150px",padding:"60px 0 60px 0"},aboutMe:{container:{display:"flex",gap:"20px",justifyContent:"center",margin:"0 0 100px 0"},description:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",width:"40%",gap:"10px"},imgContainer:{height:"600px",borderRadius:"10px",overflow:"hidden",boxShadow:"0 5px 8px 0 #141414",border:"2px solid #141414",position:"relative"},img:{width:"450px",height:"600px",objectFit:"cover"}},workExperience:{box:{padding:"10px",borderRadius:"10px",boxShadow:"0 5px 8px 0 #141414",border:"2px solid #141414",backgroundColor:"#141414",width:"350px",height:"250px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",transition:"all 0.6s ease",cursor:"pointer"},container:{display:"flex",padding:"60px",justifyContent:"Space-around"}},pictureMe:{container:{display:"flex",alignItems:"center",justifyContent:"center",padding:"100px"},divContainer:{display:"grid",gridTemplateColumns:"450px 450px",gap:"40px",borderRadius:"10px",padding:"40px",backgroundColor:"#141414",boxShadow:"0 5px 8px 0 #141414",border:"2px solid #141414"},picture:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",padding:"60px"},div:{borderRadius:"10px",overflow:"hidden",boxShadow:"0 5px 8px 0 #141414",border:"2px solid #141414",position:"relative"},img:{width:"auto",height:"800px",objectFit:"cover"}}}}}const p="/Waddimi_Saint_louis/assets/waddy-Bn5M20Nn.png",u=({pictureMeDivImg:s,pictureMeDiv:i,imgSrc:t})=>e.jsxs("div",{style:i,children:[e.jsx("img",{src:t,alt:"my",style:s}),e.jsx("div",{className:"PictureMeDescription",children:e.jsx("span",{className:"PictureMeDescriptionSpan",children:"Aquí va la descripción"})})]});function j({cardImageStyle:s,imageMetadata:i,imageContainerStyle:t,imageStyle:r}){return e.jsx("div",{style:s,children:Object.keys(i).map((n,a)=>e.jsx(u,{pictureMeDivImg:r,pictureMeDiv:t,imgSrc:i[n]},a))})}const h=({aboutWorkExperienceStyle:s,description:i,isAboutSection:t,key:r})=>e.jsxs("div",{className:t?"AboutWorkExperienceBox":void 0,style:s,children:[e.jsx("h3",{children:"jobTitle"in i?i.jobTitle:i.position}),e.jsx("span",{children:"jobTitle"in i?r:i==null?void 0:i.title}),e.jsx("p",{children:"jobDuration"in i?i==null?void 0:i.jobDuration:i==null?void 0:i.description})]},r);function d({jobDescriptions:s,isAboutSection:i,aboutWorkExperienceStyle:t,workExperienceDetails:r}){const n=i?r:s;return e.jsx(e.Fragment,{children:n&&Object.keys(n).map((a,o)=>e.jsx(h,{description:n[a],isAboutSection:i,aboutWorkExperienceStyle:t},o))})}const b=()=>{const{styles:s}=c(),{resources:i}=l(),{jobDescriptions:t,workExperience:r,imageFiles:n}=x();return e.jsxs("div",{children:[e.jsx("div",{"data-aos":"fade-down",children:e.jsx("span",{style:s.descriptionH2,children:i.IamLouis})}),e.jsx(y,{...s.aboutMe}),e.jsx(g,{workExperience:r,...s.workExperience}),e.jsx(m,{jobDescriptions:t,imageFiles:n,...s.pictureMe})]})},y=({container:s,description:i,imgContainer:t,img:r})=>{const{resources:n}=l();return e.jsxs("div",{style:s,children:[e.jsxs("div",{style:t,"data-aos":"fade-right",children:[e.jsx("img",{src:p,alt:"waddy",style:r}),e.jsxs("div",{className:"PictureMeDescription",children:[e.jsx("span",{children:"Waddimi Saint Louis"}),e.jsxs("span",{children:[n.systemEngineer," - Fullstack Developer"]})]})]}),e.jsxs("div",{style:i,"data-aos":"fade-left",children:[e.jsx("h2",{style:{display:"flex",flexWrap:"wrap",width:"500px"},children:n.iAmAPassionate}),e.jsx("span",{style:{display:"flex",flexWrap:"wrap",width:"500px"},children:n.twoYears})]})]})},g=({box:s,workExperience:i,container:t})=>e.jsx("div",{style:t,children:e.jsx(d,{jobDescriptions:{},aboutWorkExperienceStyle:s,isAboutSection:!0,workExperienceDetails:i})}),m=({jobDescriptions:s,imageFiles:i,container:t,divContainer:r,div:n,img:a,picture:o})=>e.jsxs("div",{children:[e.jsx("div",{style:t,children:e.jsx("div",{style:r,children:e.jsx(d,{jobDescriptions:s,aboutWorkExperienceStyle:void 0,isAboutSection:!1,workExperienceDetails:void 0})})}),e.jsx("div",{style:o,children:e.jsx(j,{cardImageStyle:o,imageMetadata:i,imageContainerStyle:n,imageStyle:a})})]});export{b as default};