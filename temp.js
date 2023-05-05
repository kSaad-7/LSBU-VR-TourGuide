// <!DOCTYPE html>

// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <script src="aframe.js"></script>
//     <script src="https://unpkg.com/aframe-event-set-component@5.0.0/dist/aframe-event-set-component.min.js"></script>
//     <title>LSBU VR Tourguide</title>
//   </head>

//   <body>
//     <a-scene>
//       <a-assets>
//         <video id="keyVid" loop="true" src="vids/keyVid2.mp4"></video>
//         <video id="hubVid" loop="true" src="vids/hubVid2.mp4"></video>
//         <video id="perryVid" loop="true" src="vids/perryVid.mp4"></video>
//         <video id="faradayVid" loop="true" src="vids/faradayVid.mp4"></video>

//         <img id="entryImage" src="./images/entrypic2.png" />
//         <img id="logo" src="./images/logo.jpg" />
//       </a-assets>

//       <!-- Menu Entity -->
//       <a-entity id="menuEntity">
//         <a-sky src="#entryImage"></a-sky>

//         <a-camera position="0 1 1">
//           <a-cursor color="white"></a-cursor>
//         </a-camera>

//         <a-box
//           id="lsbuhubBtn"
//           height="0.5"
//           width="3"
//           depth=".2"
//           position="-2.5 3.5 -7"
//           onclick="switchScenes(2)"
//           color="#B640D3"
//           event-set__enter="_event: mouseenter; color: #69157d"
//           event-set__leave="_event: mouseleave; color: #B640D3"
//         >
//           <a-text
//             scale="1.5 1.5 1.5"
//             position="-1.3 0 0.2"
//             value="LSBU Hub"
//             color="white"
//           ></a-text>
//         </a-box>

//         <a-box
//           id="faradayBtn"
//           height="0.5"
//           width="3"
//           depth=".2"
//           color="#B640D3"
//           position="2.5 3.5 -7"
//           onclick="switchScenes(4)"
//           event-set__enter="_event: mouseenter; color: #69157d"
//           event-set__leave="_event: mouseleave; color: #B640D3"
//         >
//           <a-text
//             scale="1.5 1.5 1.5"
//             position="-1.3 0 0.2"
//             value="Faraday wing"
//             color="white"
//           ></a-text>
//         </a-box>

//         <a-box
//           id="perryBtn"
//           height="0.5"
//           width="3"
//           depth=".2"
//           color="#B640D3"
//           position="-2.5 2.3 -7"
//           onclick="switchScenes(3)"
//           event-set__enter="_event: mouseenter; color: #69157d"
//           event-set__leave="_event: mouseleave; color: #B640D3"
//         >
//           <a-text
//             scale="1.5 1.5 1.5"
//             position="-1.3 0 0.2"
//             value="Perry Library"
//             color="white"
//           ></a-text>
//         </a-box>

//         <a-box
//           id="keyworthBtn"
//           height="0.5"
//           width="3"
//           depth=".2"
//           color="#B640D3"
//           position="2.5 2.3 -7"
//           onclick="switchScenes(1)"
//           event-set__enter="_event: mouseenter; color: #69157d"
//           event-set__leave="_event: mouseleave; color: #B640D3"
//         >
//           <a-text
//             scale="1.5 1.5 1.5"
//             position="-1.3 0 0.2"
//             text="value:Keyworth Centre; color: white;"
//           ></a-text>
//         </a-box>

//         <a-text
//           scale="1.5 1.5 1.5"
//           position="-.85 1.7 0"
//           text="value:VR Hunters; color: white;"
//         ></a-text>
//         <a-image
//           src="#logo"
//           position="-0 2.2 0"
//           width="0.5"
//           height="0.5"
//         ></a-image>
//       </a-entity>

//       <!-- LSBU Hub Entity -->

//       <a-entity id="hubEntity" visible="false">
//         <a-videosphere id="hubVidSphere" src="#hubVid"></a-videosphere>

//         <a-camera position="0 1 1">
//           <a-cursor color="white"></a-cursor>
//         </a-camera>

//         <a-box
//           rotation="20 -50 10"
//           onclick="pauseHub()"
//           color="#ba3467"
//           position="1.5 1 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #f04385"
//           event-set__leave="_event: mouseleave; color: #ba3467"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.1 0.2"
//             text="value:Pause; color: white;"
//           ></a-text>
//         </a-box>

//         <a-box
//           rotation="20 -50 10"
//           onclick="playHub()"
//           color="#3c5ab0"
//           position="1.7 0.6 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #5882FA"
//           event-set__leave="_event: mouseleave; color: #3c5ab0"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.15 0.2"
//             text="value:Play; color: white;"
//           ></a-text>
//         </a-box>

//         <a-box
//           rotation="20 -50 10"
//           onclick="goMenu()"
//           color="#5e27d6"
//           position="1.7 0.1 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #7333ff"
//           event-set__leave="_event: mouseleave; color: #5e27d6"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.1 0.2"
//             text="value:Menu; color: white;"
//           ></a-text>
//         </a-box>
//       </a-entity>

//       <!-- Faraday Wing Entity -->

//       <a-entity id="faradayEntity" visible="false">
//         <a-videosphere id="faradayVidSphere" src="#faradayVid"></a-videosphere>

//         <a-camera position="0 1 1">
//           <a-cursor color="white"></a-cursor>
//         </a-camera>

//         <a-box
//           rotation="20 -50 10"
//           onclick="pauseFaraday()"
//           color="#ba3467"
//           position="1.5 1.5 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #f04385"
//           event-set__leave="_event: mouseleave; color: #ba3467"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.1 0.2"
//             text="value:Pause; color: white;"
//           ></a-text>
//         </a-box>

//         <a-box
//           rotation="20 -50 10"
//           onclick="playFaraday()"
//           color="#3c5ab0"
//           position="1.7 0.8 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #5882FA"
//           event-set__leave="_event: mouseleave; color: #3c5ab0"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.15 0.2"
//             text="value:Play; color: white;"
//           ></a-text>
//         </a-box>

//         <a-box
//           rotation="20 -50 10"
//           onclick="goMenu()"
//           color="#5e27d6"
//           position="1.7 0.3 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #7333ff"
//           event-set__leave="_event: mouseleave; color: #5e27d6"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.1 0.2"
//             text="value:Menu; color: white;"
//           ></a-text>
//         </a-box>
//       </a-entity>

//       <!-- Perry library Entity -->

//       <a-entity id="perryEntity" visible="false">
//         <a-videosphere id="perryVidSphere" src="#perryVid"></a-videosphere>

//         <a-camera position="0 1 1">
//           <a-cursor color="white"></a-cursor>
//         </a-camera>

//         <a-box
//           rotation="20 -50 10"
//           onclick="pausePerry()"
//           color="#ba3467"
//           position="1.5 1.5 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #f04385"
//           event-set__leave="_event: mouseleave; color: #ba3467"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.1 0.2"
//             text="value:Pause; color: white;"
//           ></a-text>
//         </a-box>

//         <a-box
//           rotation="20 -50 10"
//           onclick="playPerry()"
//           color="#3c5ab0"
//           position="1.7 0.8 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #5882FA"
//           event-set__leave="_event: mouseleave; color: #3c5ab0"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.15 0.2"
//             text="value:Play; color: white;"
//           ></a-text>
//         </a-box>

//         <a-box
//           rotation="20 -50 10"
//           onclick="goMenu()"
//           color="#5e27d6"
//           position="1.7 0.3 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #7333ff"
//           event-set__leave="_event: mouseleave; color: #5e27d6"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.1 0.2"
//             text="value:Menu; color: white;"
//           ></a-text>
//         </a-box>
//       </a-entity>

//       <!-- Keyworth Center Entity -->
//       <a-entity id="keyworthEntity" visible="false">
//         <a-videosphere id="keyworthVidSphere" src="#keyVid"></a-videosphere>
//         <a-camera position="0 1 1">
//           <a-cursor color="white"></a-cursor>
//         </a-camera>
//         <a-box
//           rotation="20 -50 10"
//           onclick="pauseKey()"
//           color="#ba3467"
//           position="1.5 1.5 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #f04385"
//           event-set__leave="_event: mouseleave; color: #ba3467"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.1 0.2"
//             text="value:Pause; color: white;"
//           ></a-text>
//         </a-box>

//         <a-box
//           rotation="20 -50 10"
//           onclick="playKey()"
//           color="#3c5ab0"
//           position="1.7 0.8 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #5882FA"
//           event-set__leave="_event: mouseleave; color: #3c5ab0"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.15 0.2"
//             text="value:Play; color: white;"
//           ></a-text>
//         </a-box>

//         <a-box
//           rotation="20 -50 10"
//           onclick="goMenu()"
//           color="#5e27d6"
//           position="1.7 0.3 0"
//           height="0.2"
//           width="0.2"
//           depth="0.1"
//           event-set__enter="_event: mouseenter; color: #7333ff"
//           event-set__leave="_event: mouseleave; color: #5e27d6"
//         >
//           <a-text
//             scale=".5 .5 .5"
//             position="-.5 0.1 0.2"
//             text="value:Menu; color: white;"
//           ></a-text>
//         </a-box>
//       </a-entity>
//     </a-scene>
//   </body>

//   <script>
//     const menuEntityEl = document.getElementById("menuEntity");
//     const keyworthEntityEl = document.getElementById("keyworthEntity");
//     const hubEntityEl = document.getElementById("hubEntity");
//     const perryEntityEl = document.getElementById("perryEntity");
//     const faradayEntityEl = document.getElementById("faradayEntity");

//     const keyworthVidEl = document.getElementById("keyVid");
//     const hubVidEl = document.getElementById("hubVid");
//     const perryVidEl = document.getElementById("perryVid");
//     const faradayVidEl = document.getElementById("faradayVid");

//     const switchScenes = (vidNum) => {
//       console.log(vidNum);
//       switch (vidNum) {
//         case 1:
//           keyworthEntityEl.setAttribute("visible", true);
//           menuEntityEl.setAttribute("visible", false);
//           keyworthVidEl.play();
//           break;
//         case 2:
//           hubEntityEl.setAttribute("visible", true);
//           menuEntityEl.setAttribute("visible", false);
//           hubVidEl.play();
//           break;
//         case 3:
//           perryEntityEl.setAttribute("visible", true);
//           menuEntityEl.setAttribute("visible", false);
//           perryVidEl.play();
//           break;
//         case 4:
//           faradayEntityEl.setAttribute("visible", true);
//           menuEntityEl.setAttribute("visible", false);
//           faradayVidEl.play();
//           break;
//       }
//     };

//     const pauseKey = () => {
//       keyworthVidEl.pause();
//     };

//     const playKey = () => {
//       keyworthVidEl.play();
//     };

//     const pauseHub = () => {
//       hubVidEl.pause();
//     };

//     const playHub = () => {
//       hubVidEl.play();
//     };

//     const pausePerry = () => {
//       perryVidEl.pause();
//     };

//     const playPerry = () => {
//       perryVidEl.play();
//     };

//     const pauseFaraday = () => {
//       faradayVidEl.pause();
//     };

//     const playFaraday = () => {
//       faradayVidEl.play();
//     };

//     const goMenu = () => {
//       keyworthVidEl.pause();
//       hubVidEl.pause();
//       perryVidEl.pause();
//       faradayVidEl.pause();

//       keyworthEntityEl.setAttribute("visible", false);
//       hubEntityEl.setAttribute("visible", false);
//       perryEntityEl.setAttribute("visible", false);
//       faradayEntityEl.setAttribute("visible", false);

//       menuEntityEl.setAttribute("visible", true);
//     };
//   </script>
// </html>
