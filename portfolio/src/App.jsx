import React from "react";

function App() {
  return (
    <>
      <div class="w-full h-14 flex flex-col items-end">
        <div class="w-10 h-1 bg-black my-1"></div>
        <div class="w-10 h-1 bg-black my-1"></div>
        <div class="w-10 h-1 bg-black my-1"></div>
      </div>

      <div class="sm:flex flex-row-reverse sm:mt-56 ">
        <img
          src="https://cdn.discordapp.com/attachments/777095273490546712/1148648296873726062/IMG20190226141137.jpg"
          class="w-80 rounded-full mt-3 mb-11  mx-auto sm:object-cover "
        />

        <div className="ml-64">
          <h1 class="w-72 h-32 text-center text-3xl font-bold mx-auto mb-5">
            Hi, I am Prasun Kushwaha, Web Technologies student.
          </h1>

          <p class="text-base text-center mx-auto w-80 mb-7">
            Hi, I am a student currently persuing B.Tech degree in Computer
            Science Engineering from Dev Bhoomi Uttarakhand University.
          </p>

          <div class="flex flex-col items-center mb-20">
            <a
              class="text-medium bg-indigo-900 rounded-full text-bold text-white px-5 py-4 text-xl"
              href="https://docs.google.com/document/d/1ZEc5R9O_gO6eMvHFnmOvPXxIQ_BM62O0/edit?rtpof=true"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      <div class="bg-gray-200 h-full">
        <h4 class="mx-auto text-lg w-28 mb-3">Recent posts</h4>

        <div class="bg-white mx-8">
          <h3 class="text-xl m-3 font-bold w-80">
            Creating Temperaure converter website
          </h3>

          <a class="ml-3">10 Aug 2023</a>
          <a class="mx-6">|</a>
          <a>Design, Code</a>
          <p class="mx-3 mb-12 mt-5">
            Creating a simple temperature converter website for my intership at
            Oasis Infobyte.
          </p>
        </div>

        <div class="bg-white mx-8 ">
          <h3 class="text-xl m-3 font-bold w-80">
            Making a E-commerce webapp from scratch
          </h3>
          <a class="ml-3">18 Aug 2022</a>
          <a class="mx-6">|</a>
          <a>Design, Code</a>
          <p class="mx-3 mb-12 mt-5">
            Working on a E-commerce webapp using ReactJS and maximum effort :)
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h4 class="mx-auto text-lg w-32  mb-3">Featured works</h4>
        <div className="flex justify-between mx-32">
          {" "}
          <a href="https://amazzingg.netlify.app" target="_blank">
            <img
              src="https://cdn.discordapp.com/attachments/777095273490546712/1148670235432456212/image.png"
              class="w-80 mx-auto rounded-md"
            />
          </a>
          <a href="https://xtodoapplication.netlify.app" target="_blank">
            <img
              src="https://cdn.discordapp.com/attachments/777095273490546712/1148669585646694430/image.png"
              class="w-80 mx-auto rounded-md"
            />
          </a>
          <a href="https://temperatureconverter554.netlify.app" target="_blank">
            <img
              src="https://cdn.discordapp.com/attachments/777095273490546712/1148669789330477167/image.png"
              class="w-80 mx-auto rounded-md"
            />
          </a>
        </div>
      </div>
      <h3 class="text-xl m-3 font-bold w-80">Skills</h3>
      <a class="mr-6 px-3 bg-indigo-900 rounded-full text-bold text-white ml-3">
        2023
      </a>
      <a class="text-gray-500">Coding</a>
      <p class="mx-3">
        As of now I am still a beginner at most of programming and their frameworks but I keep on learning to sharpen my skills.
        Here are the technologies I am using in my Full-Stack Journey:- 
      </p>
      <div className="flex justify-between mx-8 mt-4 mb-4">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" className="w-32"></img>
<img src="https://velog.velcdn.com/images/hancihu/post/985ab0bb-6983-4897-a8ce-6be679472c5f/image.jpeg" className="w-32"></img>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" className="w-32"></img>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" className="w-32"></img>
<img src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" className="w-32"></img>
<img src="https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure.png" className="w-32"></img>
<img src="https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png" className="w-32"></img>
</div>

      <div class="bg-gray-500 w-96 h-1 mx-auto my-4"></div>

      <div class="flex justify-between w-80 mx-auto mt-36 mb-7">
       <a href="https://www.facebook.com/" target="_blank"><img
          src="https://cdn.discordapp.com/attachments/777095273490546712/1005720592399466507/unknown.png"
          class="w-8"
        /></a> 
       <a href="https://www.instagram.com/" target="_blank"><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFt5NVH4VeXeNXNSTGehFk2s8h4reyHjP_W4VBCNYq1eG6nKPm0p-Z07A&s=10"
          class="w-8"
        /></a> 
       <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="=_blank"><img
          src="https://cdn.discordapp.com/attachments/777095273490546712/1005720754983272508/unknown.png"
          class="w-8"
        /></a> 
       <a href="https://www.linkedin.com/in/prasun-kushwaha-7484651ba/" target="_blank"><img
          src="https://cdn.discordapp.com/attachments/777095273490546712/1005720937670393866/unknown.png"
          class="w-8"
        /></a> 
      </div>

      <h6 class="text-center">Copyright ©2020 All rights reserved </h6>
    </>
  );
}

export default App;
