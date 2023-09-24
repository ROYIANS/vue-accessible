<template>
  <n-el>
    <svg viewBox="0 0 448.6 448" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clippath">
          <path
            d="m354.9,149.85c-.5.91-3.35,3.74-6.97,7.11h0c-7.37,6.88-17.85,16.05-17.85,16.05,0,0,1.62,5.84,3.56,12.82,2.85,10.24,6.4,22.98,6.55,23.43.25.76,4.9,20.51,4.9,20.51v4.54c-24.85,20.4-52.67,12.26-52.67,12.26,0,0,.47-11.04-.28-11.3-.74-.25,0-5.05-2.62-10.11-1.57-3.05-5.83-12.15-8.95-18.88l-.57-1.21-.66-1.44-.98-2.1-.32-.69-.14-.32s0,0-.02-.04c-.58-1.27-.94-2.03-.94-2.03,0,0-.08.09-.22.26-1.59,1.88-11.43,13.48-16.9,19.79-1.95,2.24-3.33,3.8-3.6,4.03-1.12.93-28.21,16.68-28.21,16.68,0,0-4.8-8.5-4.12-9.8.67-1.3,21.31-17.15,23.76-19.56,2.44-2.41,9.44-14.6,9.44-14.6,0,0,11.37-19.64,12.38-20.39,1.01-.76,17.44-10.36,19.15-10.36,0,0,19.77-7.58,22.55-8.35,2.79-.76,29.32-16.46,29.32-16.46,0,0,3.03-18.92,3.29-20.94.25-2.02.6-9.67,3.02-12.29.65-.71.76-1.46.76-1.46l.27-3.12c7.47-3.23,11.52.09,11.52.09v3.39s.11.97.35,1.33c1.01,1.51-3.28,40.36-4.79,43.14Z"
            style="
              fill: #bfbfbf;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-1">
          <path
            d="m264.04,310.9c-6.3.89-8.17,24.46-4.17,52.63,3.99,28.17,12.33,50.29,18.63,49.4,6.3-.89,8.17-24.46,4.17-52.63s-12.33-50.29-18.63-49.4Zm3.41,14.85c2.94,5.09,5.94,14.6,8.17,26.2-.25-.41-.51-.73-.76-.98l-7.4-25.22Zm-2.8-1.54c.95,3.19,5.87,21.95,7.57,28.43-.14.57-.25,1.24-.33,1.99l-8.52-2.08c-1.11-12.81-.61-23.36,1.28-28.35Zm13.1,47.2c.18-.31.33-.69.46-1.15,1.09,11.76.85,21.74-.56,27.44l.1-26.29Zm-13.95-14.57l8.12,2.86c.06.68.14,1.37.24,2.08.1.71.22,1.4.35,2.07l-7.01,5c-.34-1.95-.66-3.95-.94-5.99-.29-2.04-.54-4.05-.76-6.01Zm2.49,16.24l7.6-4.36c.28.7.57,1.31.87,1.82.17,6.7.66,26.09.63,29.42-3.19-4.27-6.61-14.26-9.1-26.87Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-2">
          <path
            d="m259.63,311.52c-6.3.89-8.17,24.46-4.17,52.63,3.99,28.17,12.34,50.29,18.64,49.4,6.3-.89,8.17-24.46,4.17-52.63s-12.34-50.29-18.64-49.4Zm12.38,96.79c-4.87.69-11.71-19.16-15.28-44.35-3.57-25.18-2.51-46.15,2.35-46.84,4.87-.69,11.71,19.16,15.28,44.35,3.57,25.18,2.51,46.15-2.35,46.85Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-3">
          <path
            d="m251.83,398.03h-18.47c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h18.47c4.53,0,8.21-3.68,8.21-8.21v-85.67c0-3.56-2.9-6.46-6.46-6.46h-14.72c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h14.72c6.02,0,10.92,4.9,10.92,10.92v85.67c0,6.99-5.68,12.67-12.67,12.67Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-4">
          <path
            d="m234.89,307v-72.78h-79.64v74.97h2.78v10.98s70.67,36.78,104.18-1.09l-2.17-12.08h-25.15Z"
            style="
              fill: #757575;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-5">
          <path
            d="m226.03,223.06h-.8c-1.23,0-2.23,1-2.23,2.23s1,2.23,2.23,2.23h.8c4.29,0,7.77,3.49,7.77,7.77v87.19c-.2-.05-.4-.08-.61-.07l-7.04,4.55-31.04,22.23-28.08-21.47-6.5-4.37c-.95.01-1.79.63-2.09,1.53-.3.9,0,1.89.76,2.47l32.1,24.54-33.28,25.89v-142.48c0-6.74-5.49-12.23-12.23-12.23h-.8c-1.23,0-2.23,1-2.23,2.23s1,2.23,2.23,2.23h.8c4.29,0,7.77,3.49,7.77,7.77v147.04c0,.85.48,1.63,1.25,2,.31.15.65.23.98.23.49,0,.97-.16,1.37-.47l37.71-29.34,39.82,29.37c.68.5,1.58.57,2.33.2.75-.38,1.22-1.15,1.22-1.99v-147.04c0-6.74-5.49-12.23-12.23-12.23Zm7.77,154.85l-35.05-25.85,35.05-25.1v50.96Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-6">
          <path
            d="m253.22,199.44s-11.83,18.46-13.59,23.75c-.32.95-.55,3.57-.65,7.31-9.29-13.07-22.65-12.36-22.65-12.36l-6.14,11.28-13-4s-10.21,13.64-10.13,17.17c.07,3.52-5.24,22.19-5.24,22.19l-1.76,8.14c-4.23-5.29-18.69-4.94-18.69-4.94,0,0,5.64-17.99,9.17-28.19,3.52-10.21,11.63-12.36,18.66-15.54,7.02-3.17,16.6-10.26,16.6-10.26,0,0,1.94,2.98,6,.07,4.06-2.91,28.57-27.1,28.57-27.1,1.41,6.09,12.88,12.48,12.88,12.48Z"
            style="
              fill: #92e3a9;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-7">
          <path
            d="m209.45,398.03h-18.79c-7.45,0-13.51-6.06-13.51-13.51v-83.08c0-4.53-3.68-8.21-8.21-8.21h-4.21c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h4.21c6.99,0,12.67,5.68,12.67,12.67v83.08c0,4.99,4.06,9.06,9.06,9.06h18.79c1.23,0,2.23,1,2.23,2.23s-1,2.23-2.23,2.23Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-8">
          <path
            d="m163.58,356.68l.58-4.38-9.63,2.67s7.08-31.03,7.32-31.36c.24-.33-1.72-2.4-1.72-2.4l-8.12,31.24,2.53,7.73,9.04-3.5Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-9">
          <path
            d="m162.25,368.74l-8.06-5.38-4.15,6.99,1.13,32.26s2.37-1.6,2.2-1.97-.33-32.2-.33-32.2l8.82,4.7.39-4.4Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-10">
          <path
            d="m161.9,310.77c-6.33-.7-13.97,21.67-17.08,49.95-3.11,28.28-.51,51.78,5.82,52.47,6.33.7,13.97-21.67,17.08-49.95,3.11-28.28.51-51.78-5.82-52.47Zm-9.52,90.56c-3.13-5.05-4.07-21.18-2-40,2.07-18.82,6.49-34.36,10.64-38.61,3.12,5.05,4.06,21.18,1.99,40-2.07,18.82-6.49,34.36-10.63,38.61Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-11">
          <path
            d="m152.58,355.47l-2.5-5.24s-.87,1.44-1.2,3.41l1.59,7.69-3.22,7.16c-.1,2,.43,3.59.43,3.59l3.58-4.57.26-6.07,1.07-5.98Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-12">
          <path
            d="m155.38,361.88c-.66,6.04-2.59,10.78-4.3,10.59-1.71-.19-2.56-5.24-1.9-11.27.66-6.04,2.59-10.78,4.3-10.59,1.71.19,2.56,5.24,1.9,11.27Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-13">
          <path
            d="m261.18,383.64s-3.16,3.08-6.89,4.22c-2.96.9-12.33.84-12.33.84l-13.1.89c-.32-.58-.55-1.27-.72-2.03-1.23-5.68,1.38-15.46,1.38-15.46l14.03-3.38s.42,1.97.94,3.85c.44,1.57.94,3.08,1.35,3.31.88.53,13.55,3.22,14.44,4.96.9,1.75.9,2.8.9,2.8Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-14">
          <path
            d="m216.28,389.01l-20.5,2.39s-1.53-2.44-1.59-4.47c-.05-1.63,3.4-7.89,4.75-10.83.34-.71.54-1.24.54-1.44.02-1.06,5.01-8.41,5.01-8.41l13.84,1.53s-.62,3.82-.87,5.82c-.2,1.49.68,4.47,1.31,7.35.22,1,.41,1.98.52,2.89.42,3.55-3.01,5.17-3.01,5.17Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-15">
          <path
            d="m250.91,321.57c-.6,2.51-1.23,5.61-1.84,8.8h0c-1.52,8-2.84,16.65-3.09,18.56-.36,2.67-2.12,12.84-1.42,14.25.7,1.41,1.42,7.39,1.42,7.39,0,0-4.2-.75-5.61-.62-3.22.29-12.38,3.65-12.38,3.65,0,0-1.76-4.77,0-9,1.76-4.23.7-7.64.7-7.64l2.11-25.44c-1.76,8.18-4.58,19.82-4.58,19.82l-4.57,5.62-.02.11h0s-2.35,13.2-2.35,13.2c0,0-6.94,2.19-9.28,1.84-2.15-.33-7.64-4.15-7.64-4.15l4.19-7.93s-.23-4.41.28-8.67c1.07-8.84,2.21-18.09,2.79-22.72,0,0,0-.04.02-.09.22-1.86.37-2.96.37-2.96,0,0-20.45-2.93-22.96-8.94-1.62-3.87-1.63-11.3-1.44-16.12.12-2.73,1.99-5.06,4.62-5.79,6.83-1.9,11.77-2.89,19.1-3.9.22-.04.45-.06.69-.1,1.96-1.79,9.54-4.42,11.65-4.17,1.61.2,5.28,1.46,7.36,2.37h0c.18.08.34.15.49.22,9.07-.84,11.53.94,11.53.94,0,0,.83.35,2.01.9,2.56,1.19,6.79,3.35,7.86,4.99,3.5,5.37,2.12,16.79,0,25.61Z"
            style="
              fill: #92e3a9;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-16">
          <path
            d="m149.9,154.11c-.02.12-2.2,4.9-5.26,11.46-3.64,7.83-8.53,18.18-12.53,26.22-3.4,6.85-6.15,12-6.91,12.46l2.38-35.59c5.01-6.86,9.18-16.31,10.5-20.45s3.29-35.47,3.29-35.47c3.64,1.18,8.62,0,8.62,0,0,0,.91,35.58-.09,41.37Z"
            style="
              fill: #92e3a9;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-17">
          <path
            d="m137.19,393.53s3.28-2.68,10.75-2.15c0,0,1.58,9.32,2.89,12.04,1.31,2.71,7.15,7.41,8.22,8.21,1.08.8,1.39,3.62,1.39,3.62h-22.48s-.31-6.24.45-11.97l-1.22-9.76Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-18">
          <path
            d="m93.4,394.65s3.58-2.56,10.99-2.04c0,0,.54,8.88,1.55,11.47,1.01,2.59,6.32,7.06,7.31,7.82.99.77.99,3.45.99,3.45h-22.48s.38-5.94,1.79-11.4l-.13-9.29Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
        <clipPath id="clippath-19">
          <path
            d="m137.63,230.76c.4,2.8-19.71,13.02-30.97,12.83-1.38-.01-2.61-.19-3.67-.55-2.67-.92-1.4-12.21-1.4-12.21,0,0-7.32-9.31-13.11-17.39-3.56-4.97-6.54-9.49-6.88-11.09-.54-2.53,7.64-10.03,14.14-14.21,21.55-13.86,31.84-19.48,31.84-19.48,0,0,2.32,2.54,3.31,7.97l.99,8.44c1.72,6.95,3.38,14.33,3.75,18.21.84,8.66-1.18,18.83-1.18,18.83,0,0,2.74,5.52,3.18,8.65Z"
            style="
              fill: #92e3a9;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </clipPath>
      </defs>
      <g id="Background_Simple" data-name="Background Simple">
        <g>
          <path
            d="m411.59,168.67c-18.19-20.12-48.67-22.37-72.37-35.56-40.79-22.7-56.6-74.39-93.71-102.71-23.43-17.88-55.09-24.81-83.4-20.89-40.19,5.56-78.01,32.5-89.36,71.96-3.15,10.95-4.41,22.83-3.44,35.41,1.82,23.55,6.88,47.4,2.1,70.53-5.27,25.49-21.85,47.02-31.76,71.09-12.34,29.97-14.04,63.6-8.76,95.58,3.6,21.82,10.78,43.85,25.76,60.11,1.13,1.23,2.31,2.4,3.51,3.55h163.61c10.26-13.09,18.04-28.58,27.07-42.32,22.72-34.59,59.1-59.24,98.83-70.81,17.8-5.18,37.08-8.27,51.38-20.06,14.72-12.14,21.48-31.5,24.4-50.34,3.54-22.82,1.63-48.4-13.86-65.53Z"
            style="fill: #92e3a9"
          />
          <path
            d="m411.59,168.67c-18.19-20.12-48.67-22.37-72.37-35.56-40.79-22.7-56.6-74.39-93.71-102.71-23.43-17.88-55.09-24.81-83.4-20.89-40.19,5.56-78.01,32.5-89.36,71.96-3.15,10.95-4.41,22.83-3.44,35.41,1.82,23.55,6.88,47.4,2.1,70.53-5.27,25.49-21.85,47.02-31.76,71.09-12.34,29.97-14.04,63.6-8.76,95.58,3.6,21.82,10.78,43.85,25.76,60.11,1.13,1.23,2.31,2.4,3.51,3.55h163.61c10.26-13.09,18.04-28.58,27.07-42.32,22.72-34.59,59.1-59.24,98.83-70.81,17.8-5.18,37.08-8.27,51.38-20.06,14.72-12.14,21.48-31.5,24.4-50.34,3.54-22.82,1.63-48.4-13.86-65.53Z"
            style="fill: #fff; opacity: 0.7"
          />
        </g>
      </g>
      <g id="Floor">
        <line
          style="
            fill: none;
            stroke: #263238;
            stroke-linecap: round;
            stroke-linejoin: round;
          "
          x1=".5"
          x2="431.04"
          y1="417.74"
          y2="417.74"
        />
      </g>
      <g id="Graphics">
        <g>
          <g>
            <circle
              cx="211.68"
              cy="50.33"
              r="18.83"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              transform="translate(26.41 164.42) rotate(-45)"
            />
            <g>
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="211.68"
                x2="211.68"
                y1="98.07"
                y2="100.17"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="211.68"
                x2="211.68"
                y1="84.22"
                y2="95.22"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="211.68"
                x2="211.68"
                y1="74.67"
                y2="81.46"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="211.68"
                x2="211.68"
                y1="11.62"
                y2="27.54"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="211.68"
                x2="211.68"
                y1="6.83"
                y2="9.16"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="211.68"
                x2="211.68"
                y1=".5"
                y2="3.95"
              />
            </g>
            <g>
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="177.43"
                x2="161.84"
                y1="50.33"
                y2="50.33"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="183.7"
                x2="180.28"
                y1="50.33"
                y2="50.33"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="187.34"
                x2="186.45"
                y1="50.33"
                y2="50.33"
              />
              <path
                d="m247.02,50.33h-12.55"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="255.18"
                x2="249.48"
                y1="50.33"
                y2="50.33"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="261.51"
                x2="258.06"
                y1="50.33"
                y2="50.33"
              />
            </g>
            <g>
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="187.46"
                x2="176.44"
                y1="26.12"
                y2="15.1"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="191.89"
                x2="189.48"
                y1="30.55"
                y2="28.13"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="194.47"
                x2="193.84"
                y1="33.12"
                y2="32.5"
              />
              <path
                d="m236.67,75.33s-8.1-8.1-8.87-8.88"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="242.44"
                x2="238.41"
                y1="81.1"
                y2="77.07"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="246.92"
                x2="244.47"
                y1="85.57"
                y2="83.13"
              />
            </g>
            <g>
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="183.29"
                x2="176.44"
                y1="78.72"
                y2="85.57"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="187.72"
                x2="185.3"
                y1="74.29"
                y2="76.71"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="194.47"
                x2="189.67"
                y1="67.54"
                y2="72.34"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="230.11"
                x2="227.79"
                y1="31.9"
                y2="34.22"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="242.44"
                x2="231.85"
                y1="19.57"
                y2="30.16"
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="246.92"
                x2="244.47"
                y1="15.1"
                y2="17.54"
              />
            </g>
            <g>
              <g>
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="196.94"
                  x2="196.3"
                  y1="84.25"
                  y2="85.74"
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="201.22"
                  x2="197.82"
                  y1="74.41"
                  y2="82.23"
                />
                <path
                  d="m203.41,69.38c-.44,1.02-.89,2.05-1.33,3.07"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
                <path
                  d="m223.63,22.83c-.99,2.29-1.99,4.57-2.98,6.86"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="225.1"
                  x2="224.39"
                  y1="19.42"
                  y2="21.08"
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="227.06"
                  x2="225.99"
                  y1="14.93"
                  y2="17.38"
                />
              </g>
              <g>
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="187.34"
                  x2="176.27"
                  y1="39.76"
                  y2="34.95"
                />
                <path
                  d="m191.76,41.68c-.8-.35-1.6-.69-2.39-1.04"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
                <path
                  d="m236.79,61.24c-2.03-.88-4.06-1.76-6.09-2.64"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="242.59"
                  x2="238.54"
                  y1="63.76"
                  y2="62"
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="247.09"
                  x2="244.63"
                  y1="65.72"
                  y2="64.65"
                />
              </g>
              <g>
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="201.95"
                  x2="197.52"
                  y1="25.65"
                  y2="14.42"
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="203.73"
                  x2="202.75"
                  y1="30.17"
                  y2="27.71"
                />
                <path
                  d="m221.72,75.8c-.81-2.06-1.62-4.12-2.43-6.17"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="224.04"
                  x2="222.42"
                  y1="81.69"
                  y2="77.58"
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="225.84"
                  x2="224.86"
                  y1="86.25"
                  y2="83.76"
                />
              </g>
              <g>
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="182.74"
                  x2="175.76"
                  y1="61.74"
                  y2="64.5"
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="187.26"
                  x2="184.8"
                  y1="59.96"
                  y2="60.93"
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="243.03"
                  x2="232.24"
                  y1="37.97"
                  y2="42.23"
                />
                <line
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  x1="247.59"
                  x2="245.1"
                  y1="36.17"
                  y2="37.15"
                />
              </g>
            </g>
          </g>
          <g>
            <path
              d="m94.7,85.55l-5.64.12s-6.53-14.26-18.96-8.38c-7.97,3.77-9.77,11.45-9.77,11.45,0,0-10.33-.84-14.02,6.71l-18.24,3.19"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <line
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              x1="122.46"
              x2="99.61"
              y1="84.97"
              y2="85.45"
            />
            <path
              d="m69.75,52.53c2.4-2.75,6.5-5.15,13.44-4.75,15.33.9,16.38,15.14,16.38,15.14,0,0,14.88-4.39,16.67,10.99,0,0,9.88-1.38,12.17,4.89l36.31,5.29-35.34.73"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m66.41,59.69s.13-1.19.76-2.82"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <line
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              x1="120.26"
              x2="117.38"
              y1="122.51"
              y2="122.65"
            />
            <path
              d="m53.21,101.7l34.81,1.99s5.25-6.31,14.24-6.31,12.95,9.11,12.95,9.11c0,0,7.85-2.43,12.82,1.89,4.97,4.32,5.38,8.67,5.38,8.67l59.39,1.96-66.19,3.2"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <line
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              x1="38.47"
              x2="46.5"
              y1="100.86"
              y2="101.31"
            />
            <path
              d="m326.2,109.05c2.03-.21,3.12-.32,2.85-.31"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m199.97,136.16c3.49-5.67,10.13-13.05,21.14-13.52,18.01-.77,20.89,10.86,20.89,10.86,0,0,3.69-17.05,17.42-21.46,13.73-4.41,18.89,1.72,18.89,1.72,0,0,25.71-2.5,40.55-3.98"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m196.79,142.68s.39-1.2,1.26-3.01"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <polyline
              points="387.7 92.68 407.79 94.65 371.49 96.64"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m316.59,72.34c2.22-2.7,5.23-5.02,9.28-5.89,11.99-2.57,18.55,6.36,19.42,12.97,0,0,10.76-11.58,20.31-4.75,9.55,6.84,7.86,16.62,7.86,16.62l10.17.99"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m266.43,99.99l18.45-2.45s-.44-7.39,8.47-12.41,17.61-.77,17.61-.77c0,0,.8-4.19,3.27-8.55"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <polyline
              points="279.33 105.02 228.57 105.02 262.73 100.48"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <line
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              x1="292.42"
              x2="288.35"
              y1="105.02"
              y2="105.02"
            />
            <line
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              x1="43.54"
              x2="40.13"
              y1="151.55"
              y2="152.02"
            />
            <line
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              x1="56.54"
              x2="50.32"
              y1="149.77"
              y2="150.62"
            />
            <path
              d="m181.2,165.49l-7.94.22s-.96-8.43-9.57-11.97c-8.12-3.35-17.92,1.15-17.92,1.15,0,0,.33-20.15-21.6-22.42-21.93-2.28-25.59,11.54-25.59,11.54l-39.24,5.39"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <line
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              x1="232.22"
              x2="186.51"
              y1="164.07"
              y2="165.34"
            />
            <path
              d="m375.96,162.43s-15.16-29.5-46.91-26.78c-31.75,2.72-37.66,29.27-37.66,29.27,0,0-13.92-10.38-21.03-1.89l-34.95.97"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <polyline
            points="417.12 403.85 417.12 373.48 407.79 373.48 407.79 383.83 402.66 383.83 402.66 338.85 391.86 338.85 391.86 350.29 387.69 350.29 376.5 361.48 371.75 361.48 371.75 305.46 369.12 305.46 369.12 332.84 359.84 332.84 359.84 378.53 345.3 378.53 345.3 389.59 336.13 389.59 336.13 350.23 327.7 341.8 327.7 326.96 324.04 326.96 324.04 358.32 311.53 358.32 311.53 384.34 305 377.81 305 338.85 296.14 338.85 296.14 328.53 288.15 320.54 288.15 286.02 285.56 288.61 285.56 360.29 265.55 360.29 265.55 373.09 249.51 373.09 249.51 330.31 236.92 330.31 236.92 347.15 233.22 347.15 233.22 366.24 218.33 366.24 218.33 304.87 198.14 304.87 198.14 280.29 194.19 280.29 194.19 302.66 184.16 302.66 184.16 320.65 189.49 325.98 189.49 348.14 179.49 348.14 179.49 364.59 160.07 364.59 160.07 317.23 156.62 313.79 156.62 324.81 142.45 338.99 142.45 350.29 120.12 350.29 120.12 358.84 108.6 358.84 108.6 317.96 102.98 317.96 102.98 332.84 94.7 332.84 94.7 345.9 83.04 345.9 83.04 317.96 77.33 317.96 77.33 361.54 67.17 371.69 67.17 386.92 56.54 386.92 56.54 352.44 53.43 352.44 53.43 368.85 43.54 368.85 43.54 390.56 32.26 390.56 32.26 409.71"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </g>
      </g>
      <g id="Character_3" data-name="Character 3">
        <g>
          <g>
            <path
              d="m330.24,306.49s3.29,14.14,3.03,17.21c-.25,3.07,2.02,8.12,5.05,8.88,3.03.76,12.04-.16,14-3.12,3.79-5.73.51-20.83,0-26.17s-22.08,3.19-22.08,3.19Z"
              style="
                fill: #92e3a9;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m350.17,312.75s1.11,13.28-.76,16.43"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m336.13,314.93s.8,13.61,2.95,15.38"
              style="
                fill: #92e3a9;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m334.28,317.19s13.49-2.55,15.39-2.55,2.15.68,2.27,2.55c.13,1.87-13.49,2.25-15.26,3.26s-.13,3.29-.13,3.92,12.86.25,14.12-.76c1.26-1.01.88,2.27.38,3.16-.51.88-12.52,2.15-14.92,1.64"
              style="
                fill: #92e3a9;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <path
            d="m294.6,399.15s.51,3.55-1.52,5.9-11.87,4.61-12.37,6.51,0,5.44,0,5.44h29.71s1.52-3.06,1.01-11.01-16.83-6.85-16.83-6.85Z"
            style="
              fill: #92e3a9;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m296.14,229.43l-2.5,9.8s-.14,56.8-.67,63.13c-.52,6.34-.39,11.92,1.25,18.23s-1.64,19.84,0,22.93c1.64,3.09.88,40.23-1.01,44.98-1.9,4.74.21,12.32.21,12.32l18,5.17s3.03-11.38,1.9-14.15c-1.14-2.77,1.27-2.53.26-12.5-1.01-9.98,8.09-96.48,8.84-95.12.76,1.36,5.99,18.43,5.99,19.22s-2.07,2.78-1.32,3.66c.76.89-.13,4.69,3.66,6.57,4.94,2.46,13.47.86,16.5-.92s8.47-3.87,8.39-6.54c-.07-2.66.02-5.27-1.88-5.56,0,0,.49-11.35-1.03-16.44-1.52-5.09-4.55-20.41-4.55-25.64s-4.87-32.49-4.87-32.49l-47.2,3.34Z"
            style="fill: #263238"
          />
          <g>
            <path
              d="m332.28,269.29c-2.27,1.88-14.79,11.29-17.82,18.53"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m319.02,256.97c.52,3.66.84,7.34,1.22,11.02"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m317.75,247.66c.16,1.53.38,3.06.6,4.58"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m339.08,242.36s2.42,7.71,6.21,10.36"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m298.41,242.99s.51,9.1-2.91,13.52"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m334.28,278.55c-2.38.33-8.7.45-11.73,3.49"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m304.48,315.34c-1.08,1.2-3.42,4.34-5.31,3.85"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m317.75,297.96c-3.04,4.82-6.63,9.41-10.22,13.83"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m298.41,349.27c.51,1.64,6.95,19.49,9.1,20.49"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m305,393.86c1.39.77,2.8,1.56,4.28,2.17"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m296.52,388.95c1.32.79,2.64,1.57,3.97,2.34"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m330.24,303.82s12.71,2.15,20.26-2.78"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m343.11,305.46s-3,7.5-7.92,7.29"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m351.94,302.66s2.04,4.16-1.98,6.83"
              style="
                fill: none;
                stroke: #fff;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <g>
            <path
              d="m354.9,149.85c-.5.91-3.35,3.74-6.97,7.11h0c-7.37,6.88-17.85,16.05-17.85,16.05,0,0,1.62,5.84,3.56,12.82,2.85,10.24,6.4,22.98,6.55,23.43.25.76,4.9,20.51,4.9,20.51v4.54c-24.85,20.4-52.67,12.26-52.67,12.26,0,0,.47-11.04-.28-11.3-.74-.25,0-5.05-2.62-10.11-1.57-3.05-5.83-12.15-8.95-18.88l-.57-1.21-.66-1.44-.98-2.1-.32-.69-.14-.32s0,0-.02-.04c-.58-1.27-.94-2.03-.94-2.03,0,0-.08.09-.22.26-1.59,1.88-11.43,13.48-16.9,19.79-1.95,2.24-3.33,3.8-3.6,4.03-1.12.93-28.21,16.68-28.21,16.68,0,0-4.8-8.5-4.12-9.8.67-1.3,21.31-17.15,23.76-19.56,2.44-2.41,9.44-14.6,9.44-14.6,0,0,11.37-19.64,12.38-20.39,1.01-.76,17.44-10.36,19.15-10.36,0,0,19.77-7.58,22.55-8.35,2.79-.76,29.32-16.46,29.32-16.46,0,0,3.03-18.92,3.29-20.94.25-2.02.6-9.67,3.02-12.29.65-.71.76-1.46.76-1.46l.27-3.12c7.47-3.23,11.52.09,11.52.09v3.39s.11.97.35,1.33c1.01,1.51-3.28,40.36-4.79,43.14Z"
              style="fill: #bfbfbf"
            />
            <g style="clip-path: url(#clippath); fill: none">
              <path
                d="m271.97,189.8c1.49,3.48,3.51,6.91,4.76,8.92-1.59,1.88-11.43,13.48-16.9,19.79,2.11-6.9,6.95-12.42,8.38-14.09,1.77-2.08-.25-2.47-1.76-5.96-1.5-3.5,5.3.46,4.79-2.33-.5-2.79-.2-8.52.73-6.33Z"
                style="opacity: 0.2"
              />
              <path
                d="m347.93,156.97c-7.37,6.87-17.85,16.04-17.85,16.04,0,0,1.62,5.84,3.56,12.82-5.36-3.69-8.85-16.01-7.77-16.39,7.71-2.75,21.91-12.34,22.06-12.49h0Z"
                style="opacity: 0.2"
              />
            </g>
            <path
              d="m354.9,149.85c-.5.91-3.35,3.74-6.97,7.11h0c-7.37,6.88-17.85,16.05-17.85,16.05,0,0,1.62,5.84,3.56,12.82,2.85,10.24,6.4,22.98,6.55,23.43.25.76,4.9,20.51,4.9,20.51v4.54c-24.85,20.4-52.67,12.26-52.67,12.26,0,0,.47-11.04-.28-11.3-.74-.25,0-5.05-2.62-10.11-1.57-3.05-5.83-12.15-8.95-18.88l-.57-1.21-.66-1.44-.98-2.1-.32-.69-.14-.32s0,0-.02-.04c-.58-1.27-.94-2.03-.94-2.03,0,0-.08.09-.22.26-1.59,1.88-11.43,13.48-16.9,19.79-1.95,2.24-3.33,3.8-3.6,4.03-1.12.93-28.21,16.68-28.21,16.68,0,0-4.8-8.5-4.12-9.8.67-1.3,21.31-17.15,23.76-19.56,2.44-2.41,9.44-14.6,9.44-14.6,0,0,11.37-19.64,12.38-20.39,1.01-.76,17.44-10.36,19.15-10.36,0,0,19.77-7.58,22.55-8.35,2.79-.76,29.32-16.46,29.32-16.46,0,0,3.03-18.92,3.29-20.94.25-2.02.6-9.67,3.02-12.29.65-.71.76-1.46.76-1.46l.27-3.12c7.47-3.23,11.52.09,11.52.09v3.39s.11.97.35,1.33c1.01,1.51-3.28,40.36-4.79,43.14Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <g>
            <path
              d="m362.22,78.84c-.45-.41-1.04-.85-1.59-.85-.38,0-1.69.82-3.15,1.82-2.33,1.61-5.07,3.7-5.07,3.7l5.31,11.01c1.83.22,3.42-.6,4.67-1.75h.01c.86-.79,1.54-1.73,2.03-2.6l-2.21-11.33Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <g>
              <path
                d="m359.58,31.29c-1.23.47-1.88,1.83-1.42,3.08,3.63,9.85,6.8,18.46,9.54,26.03l-16.15,6.77c-3.47-7.26-7.39-15.56-11.87-25.05-.57-1.2-1.99-1.69-3.19-1.14-1.2.56-1.71,1.99-1.15,3.19,19.83,42.05,28.91,61.01,36.23,69.77,5.62,6.73,43.38,92.83,56.31,122.71.52,1.21,1.92,1.77,3.12,1.26,0,0,.02,0,.03-.01.5-.22.88-.59,1.13-1.03.49.13,1.02.12,1.53-.08,0,0,.02,0,.03-.01,1.21-.51,1.79-1.89,1.29-3.11-12.24-30.17-47.16-117.46-48.01-126.19-1.11-11.37-8.27-31.13-24.34-74.76-.46-1.24-1.83-1.88-3.08-1.42Zm9.75,33.62c7.61,21.14,11.55,33.38,12.68,41.28l-7.86,3.29c-4.84-6.35-10.81-17.75-20.54-37.99l15.71-6.59Zm38.46,113.81c-11.82-26.5-25.18-55.69-30.8-65.23l5.89-2.47c2.86,10.69,14.3,40.69,24.91,67.7Z"
                style="
                  fill: #92e3a9;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m333.57,44.78s3.01-6.75,13.28-11.05c10.28-4.31,17.49-1.84,17.49-1.84"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 7px;
                "
              />
              <path
                d="m434.94,234.16h7.4v34.8c0,.82-.66,1.48-1.48,1.48h-4.44c-.82,0-1.48-.66-1.48-1.48v-34.8h0Z"
                style="fill: #263238"
                transform="translate(-63.43 189.16) rotate(-22.74)"
              />
            </g>
            <path
              d="m364.37,83.42s1.31.11.93,3.34c-.03.29.64,1.29.09,2.76-.2.53-1.52,1.77-3.81,1.78-.53,0-.5-1.37-.28-1.41-.23.03-1.1.09-1.41-.62-.34-.78.64-2.98.72-3.17-.11.07-1.03.66-1.61-.37-.61-1.09.34-2.58.34-2.58,0,0-1.69.36-1.92-1.27-.1-.72-.09-1.41.05-2.06,1.46-1.01,2.78-1.83,3.15-1.82.98,0,1.78.4,1.9.48.13.09.53,2.14.53,2.14,1.49-.07,1.93,1.48,1.31,2.81Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m357.7,88.23c.78-2.16-1.08-5-1.25-5.3-.17-.3,1.57-1.51,1.57-1.51,2.04.37,3.06-1.14,3.06-1.14,0,0-2.86-1.19-3.49-1.62s-4.92,2.15-5.78,3.63c-.86,1.48-.27,10.25-.27,10.25l-1.8,9.32s3.94,2.23,8.68.64l.79-7.58"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m359.34,83.14c.21-.32,2.24-1.7,2.24-1.7"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <line
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              x1="360.61"
              x2="362.82"
              y1="86.09"
              y2="84.16"
            />
            <line
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              x1="361.31"
              x2="363.29"
              y1="89.88"
              y2="88.28"
            />
          </g>
          <path
            d="m224.99,229.43l-3.23,1.48s-.69,6.3,3.23,8.32l3.58-1.15s-.83-4.96-2.2-6.81"
            style="
              fill: #bfbfbf;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m222.36,232.23l-6.75,1.39s-6.63,1.88-8.02,1.99-3.37,6.43-3.26,7.44c.11,1.01,1.26,3.98,2.42,3.21.8-.53-.52-3.63-.52-3.63,0,0,1.06-1.16,1.82-2.49,0,0,4.4-.98,5.03-1.22.63-.24.51,1.57.19,2.19s-3.2,2.62-3.45,3.84c-.32,1.58.9,1.85.9,1.85,0,0,2.59-2.86,4.75-2.98,2.16-.12,4.93-2.97,6.03-3.75,1.09-.78,3.57-1.9,3.57-1.9,0,0-.77-3.97-2.71-5.94Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m271.24,187.38s1.75,7.39,5.71,11.08"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m266.31,193.81s4.93,3.82,7.78,4.24"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m247.65,209.87s4.57,3.11,3.56,7.74"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m288.35,173.32s11.06,6.28,17.54-4.34"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m321.66,158.36s2.23,11.1,8.41,14.65"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m340.49,139.7s4.3,4.74,6.38.8"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m347.56,105.02s3.79,3.03,9.8,1.36"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <g>
            <path
              d="m305.9,162.8s-3.99,7.24-8.41,8.68c-5.59,1.83-9.13-3.23-9.13-3.23l-.66-3.43-1.64-8.56,14.45-3.54c0,1.34.14,2.51.37,3.53,1.22,5.32,5.02,6.55,5.02,6.55Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m300.88,156.25c-1.75,3.22-5.68,8.22-13.19,8.57l-1.64-8.56,14.45-3.54c0,1.34.14,2.51.37,3.53Z"
              style="fill: #263238"
            />
          </g>
          <g>
            <path
              d="m303.68,142.04s3.03-2.15,3.65-.68c.61,1.47-.33.76-.53,3.56-.2,2.8-.77,5.71-3.21,5.73-2.44.02-1.57-7.59.09-8.61Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m280.69,142.01s-2.78-2.47-3.55-1.08c-.77,1.39.25.79.14,3.6s.13,5.76,2.56,6.05c2.42.29,2.39-7.37.86-8.57Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m291.61,126.04c-6.55.06-9.85,1.27-11.37,6.24-2.31,7.58.43,20.28,1.18,22.58.67,2.05,6.24,5.42,9.64,5.59,2.27.12,8.93-2.72,10.31-4.99.74-1.21,4.61-14.07,2.16-22.28-1.51-5.04-5.63-7.2-11.91-7.14Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m286.05,135.16s-3.06.12-4.29,2.82"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m293.35,135.04s3.07-.57,4.97,2.29"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m284.25,140.32c0,.49.3.89.65.88.35,0,.63-.41.63-.9,0-.49-.3-.89-.65-.88-.35,0-.63.41-.63.9Z"
              style="fill: #263238"
            />
            <path
              d="m294.93,140.18c0,.49.3.89.65.88.35,0,.63-.41.63-.9,0-.49-.3-.89-.65-.88-.35,0-.63.41-.63.9Z"
              style="fill: #263238"
            />
            <path
              d="m288.42,138.09c.63.69-.19,6.82-1.04,7.66s.5,2.01,2.2,2.1"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m286.26,151.21s7.75-.59,9.57-2.56c0,0,1.46,3.5-2.04,4.93-3.5,1.44-7,1.71-7.54-2.37Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m288.96,130.14s6.92-1.13,7.19-1.13,3.67.99,4.21,1.97.63,5.19.63,5.19c0,0,1.17,2.21,1.88,3.8s.99,4.92.99,4.92l1.97-5.3s.48-10.41-1.02-12.38c-1.5-1.97-15.85-8.25-15.85-8.25,0,0-.31,2.6-.6,2.42-.29-.18-7.02-3.41-7.02-3.41l.43,4.4-3.75.18v5.86s-.64,9.81,1.3,15.25c0,0,.5-4.46,1.76-7.45,0,0-.09-4.96.27-5.59.36-.63,1.53-1.96,7.63-.48Z"
              style="fill: #263238"
            />
          </g>
          <path
            d="m281.86,414.64c.38,0,12.25-.38,14.15,0,1.9.38,4.3,1.26,5.82.63,1.52-.63,7.46-.8,7.46-.8"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m287.4,408.05s5.2-.49,7.22.84l2.65-1.07s-2.72-2.26-5.4-1.83"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m293.89,403.79s3.25.27,4.52,2.15l2.65-2.15s-4.06-2.39-6.64-1.52"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m328.41,214.69s-9.45,19.85-24.09,23.4"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m289.58,196.86s11.23,12.46,32.08,8.65"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
        </g>
      </g>
      <g id="Character_2" data-name="Character 2">
        <g>
          <g>
            <g>
              <g>
                <rect
                  height="2.47"
                  style="
                    fill: #92e3a9;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                  transform="translate(-48.25 40.73) rotate(-8.07)"
                  width="4.76"
                  x="262.27"
                  y="361.25"
                />
                <path
                  d="m283.89,387.35l5.55-.79-.39-2.72-4.89.69c-1.19.17-1.81,1.81-.27,2.82Z"
                  style="
                    fill: #92e3a9;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
                <path
                  d="m277.01,338.8l5.55-.79-.39-2.72-4.89.69c-1.19.17-1.81,1.81-.27,2.82Z"
                  style="
                    fill: #92e3a9;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
                <path
                  d="m284.68,412.05c6.3-.89,8.17-24.46,4.17-52.63-3.99-28.17-12.34-50.29-18.64-49.4-6.3.89-8.17,24.46-4.17,52.63,3.99,28.17,12.34,50.29,18.64,49.4Zm-14.09-99.38c.6,0,3.6,2.11,7.47,12.54,3.38,9.11,6.27,21.39,8.14,34.58,1.87,13.19,2.51,25.79,1.79,35.48-.82,11.12-3.12,13.97-3.7,14.13-.59,0-3.59-2.09-7.47-12.54-3.38-9.11-6.27-21.39-8.14-34.58-1.87-13.19-2.51-25.79-1.79-35.48.82-11.1,3.11-13.96,3.69-14.13Z"
                  style="
                    fill: #92e3a9;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
              </g>
              <g>
                <path
                  d="m264.04,310.9c-6.3.89-8.17,24.46-4.17,52.63,3.99,28.17,12.33,50.29,18.63,49.4,6.3-.89,8.17-24.46,4.17-52.63s-12.33-50.29-18.63-49.4Zm3.41,14.85c2.94,5.09,5.94,14.6,8.17,26.2-.25-.41-.51-.73-.76-.98l-7.4-25.22Zm-2.8-1.54c.95,3.19,5.87,21.95,7.57,28.43-.14.57-.25,1.24-.33,1.99l-8.52-2.08c-1.11-12.81-.61-23.36,1.28-28.35Zm13.1,47.2c.18-.31.33-.69.46-1.15,1.09,11.76.85,21.74-.56,27.44l.1-26.29Zm-13.95-14.57l8.12,2.86c.06.68.14,1.37.24,2.08.1.71.22,1.4.35,2.07l-7.01,5c-.34-1.95-.66-3.95-.94-5.99-.29-2.04-.54-4.05-.76-6.01Zm2.49,16.24l7.6-4.36c.28.7.57,1.31.87,1.82.17,6.7.66,26.09.63,29.42-3.19-4.27-6.61-14.26-9.1-26.87Z"
                  style="fill: #fff"
                />
                <g style="clip-path: url(#clippath-1); fill: none">
                  <g style="fill: none; opacity: 0.7">
                    <path
                      d="m264.04,310.9c-6.3.89-8.17,24.46-4.17,52.63,3.99,28.17,12.33,50.29,18.63,49.4,6.3-.89,8.17-24.46,4.17-52.63s-12.33-50.29-18.63-49.4Zm3.41,14.85c2.94,5.09,5.94,14.6,8.17,26.2-.25-.41-.51-.73-.76-.98l-7.4-25.22Zm-2.8-1.54c.95,3.19,5.87,21.95,7.57,28.43-.14.57-.25,1.24-.33,1.99l-8.52-2.08c-1.11-12.81-.61-23.36,1.28-28.35Zm13.1,47.2c.18-.31.33-.69.46-1.15,1.09,11.76.85,21.74-.56,27.44l.1-26.29Zm-13.95-14.57l8.12,2.86c.06.68.14,1.37.24,2.08.1.71.22,1.4.35,2.07l-7.01,5c-.34-1.95-.66-3.95-.94-5.99-.29-2.04-.54-4.05-.76-6.01Zm2.49,16.24l7.6-4.36c.28.7.57,1.31.87,1.82.17,6.7.66,26.09.63,29.42-3.19-4.27-6.61-14.26-9.1-26.87Z"
                      style="fill: #92e3a9"
                    />
                  </g>
                </g>
                <path
                  d="m264.04,310.9c-6.3.89-8.17,24.46-4.17,52.63,3.99,28.17,12.33,50.29,18.63,49.4,6.3-.89,8.17-24.46,4.17-52.63s-12.33-50.29-18.63-49.4Zm3.41,14.85c2.94,5.09,5.94,14.6,8.17,26.2-.25-.41-.51-.73-.76-.98l-7.4-25.22Zm-2.8-1.54c.95,3.19,5.87,21.95,7.57,28.43-.14.57-.25,1.24-.33,1.99l-8.52-2.08c-1.11-12.81-.61-23.36,1.28-28.35Zm13.1,47.2c.18-.31.33-.69.46-1.15,1.09,11.76.85,21.74-.56,27.44l.1-26.29Zm-13.95-14.57l8.12,2.86c.06.68.14,1.37.24,2.08.1.71.22,1.4.35,2.07l-7.01,5c-.34-1.95-.66-3.95-.94-5.99-.29-2.04-.54-4.05-.76-6.01Zm2.49,16.24l7.6-4.36c.28.7.57,1.31.87,1.82.17,6.7.66,26.09.63,29.42-3.19-4.27-6.61-14.26-9.1-26.87Z"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
              </g>
              <path
                d="m275.44,416.83c-4.69,0-8.97-5.28-13.05-16.09-3.61-9.56-6.68-22.47-8.64-36.34h0c-1.97-13.87-2.6-27.12-1.79-37.31.97-12.25,3.9-18.56,8.94-19.27,5.06-.71,9.61,4.53,13.95,16.03,3.61,9.56,6.68,22.47,8.64,36.34,1.97,13.87,2.6,27.12,1.79,37.31-.97,12.25-3.9,18.56-8.94,19.27-.3.04-.6.06-.9.06Zm-13.54-101.97c-2.66,2.72-5.21,20.4-1.22,48.55,3.99,28.15,11.35,44.42,14.66,46.3,2.66-2.72,5.21-20.4,1.22-48.55-3.99-28.15-11.35-44.42-14.66-46.3Z"
                style="fill: #263238"
              />
              <g>
                <path
                  d="m259.63,311.52c-6.3.89-8.17,24.46-4.17,52.63,3.99,28.17,12.34,50.29,18.64,49.4,6.3-.89,8.17-24.46,4.17-52.63s-12.34-50.29-18.64-49.4Zm12.38,96.79c-4.87.69-11.71-19.16-15.28-44.35-3.57-25.18-2.51-46.15,2.35-46.84,4.87-.69,11.71,19.16,15.28,44.35,3.57,25.18,2.51,46.15-2.35,46.85Z"
                  style="fill: #fff"
                />
                <g style="clip-path: url(#clippath-2); fill: none">
                  <path
                    d="m259.63,311.52c-6.3.89-8.17,24.46-4.17,52.63,3.99,28.17,12.34,50.29,18.64,49.4,6.3-.89,8.17-24.46,4.17-52.63s-12.34-50.29-18.64-49.4Zm12.38,96.79c-4.87.69-11.71-19.16-15.28-44.35-3.57-25.18-2.51-46.15,2.35-46.84,4.87-.69,11.71,19.16,15.28,44.35,3.57,25.18,2.51,46.15-2.35,46.85Z"
                    style="fill: #92e3a9; opacity: 0.4"
                  />
                </g>
                <path
                  d="m259.63,311.52c-6.3.89-8.17,24.46-4.17,52.63,3.99,28.17,12.34,50.29,18.64,49.4,6.3-.89,8.17-24.46,4.17-52.63s-12.34-50.29-18.64-49.4Zm12.38,96.79c-4.87.69-11.71-19.16-15.28-44.35-3.57-25.18-2.51-46.15,2.35-46.84,4.87-.69,11.71,19.16,15.28,44.35,3.57,25.18,2.51,46.15-2.35,46.85Z"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
              </g>
            </g>
            <polygon
              points="237.2 366.24 275.16 366.24 273.95 358.64 237.2 358.64 237.2 366.24"
              style="fill: #1a2e35"
            />
            <g>
              <path
                d="m251.83,398.03h-18.47c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h18.47c4.53,0,8.21-3.68,8.21-8.21v-85.67c0-3.56-2.9-6.46-6.46-6.46h-14.72c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h14.72c6.02,0,10.92,4.9,10.92,10.92v85.67c0,6.99-5.68,12.67-12.67,12.67Z"
                style="fill: #fff"
              />
              <g style="clip-path: url(#clippath-3); fill: none">
                <path
                  d="m251.83,398.03h-18.47c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h18.47c4.53,0,8.21-3.68,8.21-8.21v-85.67c0-3.56-2.9-6.46-6.46-6.46h-14.72c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h14.72c6.02,0,10.92,4.9,10.92,10.92v85.67c0,6.99-5.68,12.67-12.67,12.67Z"
                  style="fill: #92e3a9; opacity: 0.4"
                />
              </g>
              <path
                d="m251.83,398.03h-18.47c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h18.47c4.53,0,8.21-3.68,8.21-8.21v-85.67c0-3.56-2.9-6.46-6.46-6.46h-14.72c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h14.72c6.02,0,10.92,4.9,10.92,10.92v85.67c0,6.99-5.68,12.67-12.67,12.67Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
            </g>
            <g>
              <path
                d="m262.56,285.66h-15.79c-1.01,0-1.82,1.19-1.82,2.66s.82,2.66,1.82,2.66h15.79c1.01,0,1.82-1.19,1.82-2.66s-.82-2.66-1.82-2.66Z"
                style="fill: #263238"
              />
              <path
                d="m246.22,290.86l16.78-5.12-5.69-1.43h-.02c-.17-.07-.34-.12-.53-.12h-15.79c-1.01,0-1.82,1.19-1.82,2.66,0,1.11.47,2.06,1.13,2.46h0s.18.08.18.08c.05.02.1.05.16.07l5.61,1.4Z"
                style="fill: #263238"
              />
            </g>
          </g>
          <g>
            <path
              d="m234.89,307v-72.78h-79.64v74.97h2.78v10.98s70.67,36.78,104.18-1.09l-2.17-12.08h-25.15Z"
              style="fill: #757575"
            />
            <g style="clip-path: url(#clippath-4); fill: none">
              <path
                d="m234.89,245.06s-16.65-6.65-36.14-6.41c-19.49.24-35.19,23.4-35.92,34.27s5.62,18.01,15.84,13.62c10.23-4.39,22.73-3.77,24.35,1.8,1.62,5.57-24.2,13.21-19.75,18.67,4.45,5.47,51.62,0,51.62,0v-61.94Z"
                style="opacity: 0.2"
              />
              <path
                d="m162.83,309.99s20.92,16.18,49.35,16.97c28.44.79,52.47-19.96,52.47-19.96h-29.75s-72.07,2.99-72.07,2.99Z"
                style="opacity: 0.2"
              />
            </g>
            <path
              d="m234.89,307v-72.78h-79.64v74.97h2.78v10.98s70.67,36.78,104.18-1.09l-2.17-12.08h-25.15Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <g>
            <path
              d="m226.03,223.06h-.8c-1.23,0-2.23,1-2.23,2.23s1,2.23,2.23,2.23h.8c4.29,0,7.77,3.49,7.77,7.77v87.19c-.2-.05-.4-.08-.61-.07l-7.04,4.55-31.04,22.23-28.08-21.47-6.5-4.37c-.95.01-1.79.63-2.09,1.53-.3.9,0,1.89.76,2.47l32.1,24.54-33.28,25.89v-142.48c0-6.74-5.49-12.23-12.23-12.23h-.8c-1.23,0-2.23,1-2.23,2.23s1,2.23,2.23,2.23h.8c4.29,0,7.77,3.49,7.77,7.77v147.04c0,.85.48,1.63,1.25,2,.31.15.65.23.98.23.49,0,.97-.16,1.37-.47l37.71-29.34,39.82,29.37c.68.5,1.58.57,2.33.2.75-.38,1.22-1.15,1.22-1.99v-147.04c0-6.74-5.49-12.23-12.23-12.23Zm7.77,154.85l-35.05-25.85,35.05-25.1v50.96Z"
              style="fill: #fff"
            />
            <g style="clip-path: url(#clippath-5); fill: none">
              <g style="fill: none; opacity: 0.4">
                <path
                  d="m226.03,223.06h-.8c-1.23,0-2.23,1-2.23,2.23s1,2.23,2.23,2.23h.8c4.29,0,7.77,3.49,7.77,7.77v87.19c-.2-.05-.4-.08-.61-.07l-7.04,4.55-31.04,22.23-28.08-21.47-6.5-4.37c-.95.01-1.79.63-2.09,1.53-.3.9,0,1.89.76,2.47l32.1,24.54-33.28,25.89v-142.48c0-6.74-5.49-12.23-12.23-12.23h-.8c-1.23,0-2.23,1-2.23,2.23s1,2.23,2.23,2.23h.8c4.29,0,7.77,3.49,7.77,7.77v147.04c0,.85.48,1.63,1.25,2,.31.15.65.23.98.23.49,0,.97-.16,1.37-.47l37.71-29.34,39.82,29.37c.68.5,1.58.57,2.33.2.75-.38,1.22-1.15,1.22-1.99v-147.04c0-6.74-5.49-12.23-12.23-12.23Zm7.77,154.85l-35.05-25.85,35.05-25.1v50.96Z"
                  style="fill: #92e3a9"
                />
              </g>
            </g>
            <path
              d="m226.03,223.06h-.8c-1.23,0-2.23,1-2.23,2.23s1,2.23,2.23,2.23h.8c4.29,0,7.77,3.49,7.77,7.77v87.19c-.2-.05-.4-.08-.61-.07l-7.04,4.55-31.04,22.23-28.08-21.47-6.5-4.37c-.95.01-1.79.63-2.09,1.53-.3.9,0,1.89.76,2.47l32.1,24.54-33.28,25.89v-142.48c0-6.74-5.49-12.23-12.23-12.23h-.8c-1.23,0-2.23,1-2.23,2.23s1,2.23,2.23,2.23h.8c4.29,0,7.77,3.49,7.77,7.77v147.04c0,.85.48,1.63,1.25,2,.31.15.65.23.98.23.49,0,.97-.16,1.37-.47l37.71-29.34,39.82,29.37c.68.5,1.58.57,2.33.2.75-.38,1.22-1.15,1.22-1.99v-147.04c0-6.74-5.49-12.23-12.23-12.23Zm7.77,154.85l-35.05-25.85,35.05-25.1v50.96Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <g>
            <g>
              <path
                d="m237.37,191.55l5.33-6.03s.67-8.05,4.04-14.42c3.37-6.37,7.12-24.91,7.12-24.91,0,0-4.4-3.56-4.78-5.62-.37-2.06,0-3.75,0-5.24s3-1.69,3-1.69v-1.87l3.37-2.62s2.81.56,3.75,1.12c.94.56,4.31,2.06,4.31,2.06,0,0,1.31.37,1.69,1.87s-.65,11.24-1.96,13.3c-1.31,2.06-2.71,24.16-3.46,28.84-.75,4.68-2.43,12.73-2.62,13.11-.73,1.47-.88,5.01-8.55,14.79"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m252.07,133.65s3.56,1.83,4.09,1.83.26,1.76-.53,1.94-3,.88-3,.88c0,0,2.47.18,2.73,3.35"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m253.71,134.46s1.21-1.46,1.74-1.9c.53-.44,2.2-1.32,2.2-1.32"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m254.25,137.8c.01,1.28,2.08,2.26,2.7,1.47,0,0,1.15,1.06,1.94,1.06s1.23-.26,2.38,0c1.15.26,1.94-2.06,1.76-2.53-.18-.47-1.15,0-1.15,0"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m260.15,140.21c-.73-1.21-1.25-2.89-.99-3.68s2.64-2.89,2.64-2.89"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m256.95,139.27s-.24-1.85-.52-2.82"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m256.16,135.48s1.98-2.64,2.93-3"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m253.85,146.19c.75.89,2.31.54,2.31.54"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <line
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
                x1="258.65"
                x2="260.44"
                y1="148.04"
                y2="148.61"
              />
            </g>
            <path
              d="m162.83,266.21s-3.64,10.76-3.6,12.87c.05,2.12,3.44,7.14,5.98,7.45,2.53.31,13.98,0,14.98,0s-.83-4.88-3.65-11l3.54-7.38-17.25-1.94Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <g>
              <path
                d="m242.22,286.53c2.82,3.66,2.7,5.31,2.7,5.31,0,0-47.74,17.75-59.4,8.82-2.1-1.61-.41-10.58-.41-10.58l-1.78-5.76s2.19-4.71-1.52-19.54l-1.76,8.14c-4.23-5.29-18.69-4.94-18.69-4.94,0,0,5.64-17.99,9.17-28.19,3.52-10.21,11.63-12.36,18.66-15.54,7.02-3.17,16.6-10.26,16.6-10.26,0,0,1.94,2.98,6,.07,4.06-2.91,28.57-27.1,28.57-27.1,1.41,6.09,12.88,12.48,12.88,12.48,0,0-11.83,18.46-13.59,23.75-.32.95-.55,3.57-.65,7.31-.31,11.64.65,34.23,4.3,51.93.49,2.39-1.05,4.09-1.05,4.09Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <g>
                <path
                  d="m253.22,199.44s-11.83,18.46-13.59,23.75c-.32.95-.55,3.57-.65,7.31-9.29-13.07-22.65-12.36-22.65-12.36l-6.14,11.28-13-4s-10.21,13.64-10.13,17.17c.07,3.52-5.24,22.19-5.24,22.19l-1.76,8.14c-4.23-5.29-18.69-4.94-18.69-4.94,0,0,5.64-17.99,9.17-28.19,3.52-10.21,11.63-12.36,18.66-15.54,7.02-3.17,16.6-10.26,16.6-10.26,0,0,1.94,2.98,6,.07,4.06-2.91,28.57-27.1,28.57-27.1,1.41,6.09,12.88,12.48,12.88,12.48Z"
                  style="fill: #92e3a9"
                />
                <g style="clip-path: url(#clippath-6); fill: none">
                  <path
                    d="m253.22,199.44s-11.83,18.46-13.59,23.75c-.32.95-.55,3.57-.65,7.31-9.29-13.07-22.65-12.36-22.65-12.36l-6.14,11.28-13-4s-10.21,13.64-10.13,17.17c.07,3.52-5.24,22.19-5.24,22.19l-1.76,8.14c-4.23-5.29-18.69-4.94-18.69-4.94,0,0,5.64-17.99,9.17-28.19,3.52-10.21,11.63-12.36,18.66-15.54,7.02-3.17,16.6-10.26,16.6-10.26,0,0,1.94,2.98,6,.07,4.06-2.91,28.57-27.1,28.57-27.1,1.41,6.09,12.88,12.48,12.88,12.48Z"
                    style="opacity: 0.2"
                  />
                </g>
                <path
                  d="m253.22,199.44s-11.83,18.46-13.59,23.75c-.32.95-.55,3.57-.65,7.31-9.29-13.07-22.65-12.36-22.65-12.36l-6.14,11.28-13-4s-10.21,13.64-10.13,17.17c.07,3.52-5.24,22.19-5.24,22.19l-1.76,8.14c-4.23-5.29-18.69-4.94-18.69-4.94,0,0,5.64-17.99,9.17-28.19,3.52-10.21,11.63-12.36,18.66-15.54,7.02-3.17,16.6-10.26,16.6-10.26,0,0,1.94,2.98,6,.07,4.06-2.91,28.57-27.1,28.57-27.1,1.41,6.09,12.88,12.48,12.88,12.48Z"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
              </g>
            </g>
            <g>
              <path
                d="m214.48,203.8v12.35l-5.64,10.46-13.99-4.23c.61-2.16.52-6.93.33-10.63-.13-2.75-.33-4.88-.33-4.88l19.64-3.06Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m214.48,203.8v11.78c-2.16.78-4.55,1.4-6.77,1.38-4.44-.04-9.78-3.31-12.54-5.22-.13-2.75-.33-4.88-.33-4.88l19.64-3.06Z"
                style="fill: #263238"
              />
            </g>
            <g>
              <path
                d="m189.92,196.54s-3.48-1.82-3.92-.19c-.43,1.63.46.75,1.07,3.65.61,2.9,1.62,5.87,4.18,5.54,2.56-.33.55-8.16-1.33-9Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m213.98,193.2s2.55-2.99,3.56-1.64c1.01,1.35-.14.87.37,3.79s.69,6.05-1.81,6.7c-2.5.65-3.56-7.37-2.13-8.84Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m200.26,178.06c17.34-2.23,16.51,24.41,15.75,28.56-.41,2.24-6.7,6.7-10.23,7.37-2.36.45-10.69-1.43-12.45-3.61-1.53-1.88-10.34-30.11,6.93-32.32Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m205.25,188.63s3.26-2.03,4.94.62"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m199.52,189.25s-3.09-1.68-4.67,1.59"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m209.07,192.08c.06.52-.19.97-.56,1.02-.37.05-.72-.34-.79-.85s.19-.97.56-1.02c.37-.05.72.34.79.85Z"
                style="fill: #263238"
              />
              <path
                d="m198.81,193.33c.06.52-.19.97-.56,1.02-.37.05-.72-.34-.79-.85-.06-.52.19-.97.56-1.02.37-.05.72.34.79.85Z"
                style="fill: #263238"
              />
              <path
                d="m203.8,190.44s-.26,3.44.71,4.85"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m203.02,195.99s1.48-.49,1.97,0c.48.49,1.32,1.75,1.54,2.14.22.4-.75.84-.75.84"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m202.52,198.97s.17-.42.5-.42"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m209.75,201.86c-2.43,1.37-10.23,2.02-10.23,2.02,0,0-.35,4.94,5.73,4.02,6.37-.96,4.5-6.05,4.5-6.05Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m193.2,182.76s3.64.35,5.64-.71v-1.18s3.44,1.35,5.66.97c2.22-.38,3.89,0,3.89,0l-3.14-1.79s4.17.47,6.46,2.76l.77,4.29s2.15,2.72,3.42,7.89c0,0-.6-11.41-2.72-14.11l1.65-.23s-3.17-4.23-7.11-5.52l2.47-.47s-11.81-2.59-15.34,1.41l-2.12-.82s-3.44,4.11-3.01,5.76c0,0-1.92,3.17-2.51,5.17-.59,2,.59,9.61.59,9.61l2.52,4.33s.18-6.96,2.18-10.27c0,0-.32-4.86.71-7.07Z"
                style="fill: #263238"
              />
            </g>
            <path
              d="m214.66,283.18c-6.33-1.14-14.72-2.91-18.72-8.5"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m230.5,284.73c-4.09-.06-8.19-.42-12.23-.97"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m214.35,262.34c-1.33.96-2.77,1.8-4.34,2.28"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m227.33,248.05c-2.91,4.3-6.27,8.43-10.1,11.93"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m179.49,236.89s6.18,1.77,7.56,5.7"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m186.1,256.88c-.26,1.71-.72,3.46-1.67,4.93"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m186.15,248.05c.22,1.78.29,3.57.25,5.36"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m239.13,221.58c-.08.91-.12,1.82-.12,2.73"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m240.14,215.2c-.22.97-.41,1.94-.57,2.92"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m219.05,207.57s5.7-2.65,8.28-1.01"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m161.91,266.21s6.54-2.82,9.89-1.59"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <g>
            <rect
              height="7.6"
              style="fill: #1a2e35"
              width="95.66"
              x="151.66"
              y="358.64"
            />
            <g>
              <path
                d="m209.45,398.03h-18.79c-7.45,0-13.51-6.06-13.51-13.51v-83.08c0-4.53-3.68-8.21-8.21-8.21h-4.21c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h4.21c6.99,0,12.67,5.68,12.67,12.67v83.08c0,4.99,4.06,9.06,9.06,9.06h18.79c1.23,0,2.23,1,2.23,2.23s-1,2.23-2.23,2.23Z"
                style="fill: #fff"
              />
              <g style="clip-path: url(#clippath-7); fill: none">
                <g style="fill: none; opacity: 0.4">
                  <path
                    d="m209.45,398.03h-18.79c-7.45,0-13.51-6.06-13.51-13.51v-83.08c0-4.53-3.68-8.21-8.21-8.21h-4.21c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h4.21c6.99,0,12.67,5.68,12.67,12.67v83.08c0,4.99,4.06,9.06,9.06,9.06h18.79c1.23,0,2.23,1,2.23,2.23s-1,2.23-2.23,2.23Z"
                    style="fill: #92e3a9"
                  />
                </g>
              </g>
              <path
                d="m209.45,398.03h-18.79c-7.45,0-13.51-6.06-13.51-13.51v-83.08c0-4.53-3.68-8.21-8.21-8.21h-4.21c-1.23,0-2.23-1-2.23-2.23s1-2.23,2.23-2.23h4.21c6.99,0,12.67,5.68,12.67,12.67v83.08c0,4.99,4.06,9.06,9.06,9.06h18.79c1.23,0,2.23,1,2.23,2.23s-1,2.23-2.23,2.23Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
            </g>
            <g>
              <path
                d="m182.34,285.66h-15.79c-1.01,0-1.82,1.19-1.82,2.66s.82,2.66,1.82,2.66h15.79c1.01,0,1.82-1.19,1.82-2.66s-.82-2.66-1.82-2.66Z"
                style="fill: #263238"
              />
              <path
                d="m166,290.86l16.78-5.12-5.69-1.43h-.02c-.17-.07-.34-.12-.53-.12h-15.79c-1.01,0-1.82,1.19-1.82,2.66,0,1.11.47,2.06,1.13,2.46h0s.18.08.18.08c.05.02.1.05.16.07l5.61,1.4Z"
                style="fill: #263238"
              />
            </g>
            <g>
              <path
                d="m150.34,334.21l-5.57-.61-.3,2.73,4.91.54c1.19.13,2.2-1.31.96-2.66Z"
                style="
                  fill: #92e3a9;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m144.98,382.94l-5.57-.61-.3,2.73,4.91.54c1.19.13,2.2-1.31.96-2.66Z"
                style="
                  fill: #92e3a9;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <g>
                <g>
                  <path
                    d="m163.58,356.68l.58-4.38-9.63,2.67s7.08-31.03,7.32-31.36c.24-.33-1.72-2.4-1.72-2.4l-8.12,31.24,2.53,7.73,9.04-3.5Z"
                    style="fill: #fff"
                  />
                  <g style="clip-path: url(#clippath-8); fill: none">
                    <path
                      d="m163.58,356.68l.58-4.38-9.63,2.67s7.08-31.03,7.32-31.36c.24-.33-1.72-2.4-1.72-2.4l-8.12,31.24,2.53,7.73,9.04-3.5Z"
                      style="fill: #92e3a9; opacity: 0.6"
                    />
                  </g>
                  <path
                    d="m163.58,356.68l.58-4.38-9.63,2.67s7.08-31.03,7.32-31.36c.24-.33-1.72-2.4-1.72-2.4l-8.12,31.24,2.53,7.73,9.04-3.5Z"
                    style="
                      fill: none;
                      stroke: #263238;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                    "
                  />
                </g>
                <g>
                  <path
                    d="m162.25,368.74l-8.06-5.38-4.15,6.99,1.13,32.26s2.37-1.6,2.2-1.97-.33-32.2-.33-32.2l8.82,4.7.39-4.4Z"
                    style="fill: #fff"
                  />
                  <g style="clip-path: url(#clippath-9); fill: none">
                    <path
                      d="m162.25,368.74l-8.06-5.38-4.15,6.99,1.13,32.26s2.37-1.6,2.2-1.97-.33-32.2-.33-32.2l8.82,4.7.39-4.4Z"
                      style="fill: #92e3a9; opacity: 0.6"
                    />
                  </g>
                  <path
                    d="m162.25,368.74l-8.06-5.38-4.15,6.99,1.13,32.26s2.37-1.6,2.2-1.97-.33-32.2-.33-32.2l8.82,4.7.39-4.4Z"
                    style="
                      fill: none;
                      stroke: #263238;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                    "
                  />
                </g>
              </g>
              <path
                d="m153.62,417c-.23,0-.47-.01-.71-.04-5.07-.56-8.19-6.77-9.54-18.98-1.13-10.16-.9-23.42.63-37.35,1.53-13.93,4.2-26.92,7.5-36.59,3.98-11.63,8.39-17,13.44-16.46,5.07.56,8.19,6.77,9.54,18.98,1.13,10.16.9,23.42-.63,37.35-1.53,13.93-4.2,26.92-7.5,36.59-3.79,11.09-7.96,16.5-12.73,16.5Zm10.54-102.34c-3.25,1.98-10.1,18.47-13.21,46.74-3.11,28.26,0,45.85,2.74,48.49,3.25-1.98,10.1-18.47,13.21-46.74h0c3.11-28.26,0-45.85-2.74-48.49Z"
                style="fill: #263238"
              />
              <g>
                <path
                  d="m161.9,310.77c-6.33-.7-13.97,21.67-17.08,49.95-3.11,28.28-.51,51.78,5.82,52.47,6.33.7,13.97-21.67,17.08-49.95,3.11-28.28.51-51.78-5.82-52.47Zm-9.52,90.56c-3.13-5.05-4.07-21.18-2-40,2.07-18.82,6.49-34.36,10.64-38.61,3.12,5.05,4.06,21.18,1.99,40-2.07,18.82-6.49,34.36-10.63,38.61Z"
                  style="fill: #fff"
                />
                <g style="clip-path: url(#clippath-10); fill: none">
                  <path
                    d="m150.38,361.33c-2.07,18.82-1.13,34.95,2,40-.81.83-1.6,1.23-2.37,1.15-4.71-.52-6.53-19.15-4.06-41.63,2.47-22.48,8.29-40.28,13.01-39.76.77.08,1.45.64,2.06,1.63-4.15,4.25-8.57,19.79-10.64,38.61Z"
                    style="fill: #92e3a9; opacity: 0.4"
                  />
                </g>
                <path
                  d="m161.9,310.77c-6.33-.7-13.97,21.67-17.08,49.95-3.11,28.28-.51,51.78,5.82,52.47,6.33.7,13.97-21.67,17.08-49.95,3.11-28.28.51-51.78-5.82-52.47Zm-9.52,90.56c-3.13-5.05-4.07-21.18-2-40,2.07-18.82,6.49-34.36,10.64-38.61,3.12,5.05,4.06,21.18,1.99,40-2.07,18.82-6.49,34.36-10.63,38.61Z"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
              </g>
              <path
                d="m154.75,324.81c1.24-2.23,4.13-5.83,6.27-2.09"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m150.74,335.04c.29-.97.59-1.93.91-2.89"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m146.7,354.58c.78-5.39,1.72-10.77,3.08-16.04"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m144.71,381.27c-.22-7.57.45-15.13,1.42-22.63"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m145.29,389.01c-.17-1.38-.3-2.77-.4-4.16"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m152.38,401.33c-3.51,5.15-6.23-7.05-6.59-8.98"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <g>
                <path
                  d="m152.58,355.47l-2.5-5.24s-.87,1.44-1.2,3.41l1.59,7.69-3.22,7.16c-.1,2,.43,3.59.43,3.59l3.58-4.57.26-6.07,1.07-5.98Z"
                  style="fill: #fff"
                />
                <g style="clip-path: url(#clippath-11); fill: none">
                  <path
                    d="m152.58,355.47l-2.5-5.24s-.87,1.44-1.2,3.41l1.59,7.69-3.22,7.16c-.1,2,.43,3.59.43,3.59l3.58-4.57.26-6.07,1.07-5.98Z"
                    style="fill: #92e3a9; opacity: 0.6"
                  />
                </g>
                <path
                  d="m152.58,355.47l-2.5-5.24s-.87,1.44-1.2,3.41l1.59,7.69-3.22,7.16c-.1,2,.43,3.59.43,3.59l3.58-4.57.26-6.07,1.07-5.98Z"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
              </g>
              <g>
                <path
                  d="m155.38,361.88c-.66,6.04-2.59,10.78-4.3,10.59-1.71-.19-2.56-5.24-1.9-11.27.66-6.04,2.59-10.78,4.3-10.59,1.71.19,2.56,5.24,1.9,11.27Z"
                  style="fill: #fff"
                />
                <g style="clip-path: url(#clippath-12); fill: none">
                  <path
                    d="m155.38,361.88c-.66,6.03-2.59,10.78-4.3,10.59-1.08-.12-1.82-2.18-2.05-5.21.2.21.42.32.66.35,1.71.19,3.64-4.56,4.3-10.59.24-2.22.29-4.31.15-6.06,1.25,1.25,1.81,5.72,1.24,10.92Z"
                    style="fill: #92e3a9; opacity: 0.4"
                  />
                </g>
                <path
                  d="m155.38,361.88c-.66,6.04-2.59,10.78-4.3,10.59-1.71-.19-2.56-5.24-1.9-11.27.66-6.04,2.59-10.78,4.3-10.59,1.71.19,2.56,5.24,1.9,11.27Z"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
              </g>
              <path
                d="m160.36,318.94l-1.91-.21.42-3.83,1.91.21c1.06.12,1.82,1.07,1.7,2.13h0c-.12,1.06-1.07,1.82-2.13,1.7Z"
                style="
                  fill: #92e3a9;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m161.98,364.55l-1.91-.21.42-3.83,1.92.21c1.06.12,1.82,1.07,1.7,2.13h0c-.12,1.06-1.07,1.82-2.13,1.7Z"
                style="
                  fill: #92e3a9;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m152.12,406.63l-1.91-.21.42-3.83,1.91.21c1.06.12,1.82,1.07,1.7,2.13h0c-.12,1.06-1.07,1.82-2.13,1.7Z"
                style="
                  fill: #92e3a9;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m155.69,310.08c-6.32-.7-13.97,21.67-17.08,49.95-3.11,28.28-.5,51.78,5.82,52.47,6.32.7,13.97-21.67,17.08-49.95,3.11-28.28.5-51.78-5.82-52.47Zm-10.97,99.77c-.58-.15-2.97-2.94-4.13-14-1.02-9.66-.78-22.28.68-35.52,1.46-13.24,3.96-25.61,7.05-34.82,3.55-10.57,6.49-12.76,7.08-12.77.57.14,2.96,2.91,4.13,14,1.02,9.66.78,22.28-.68,35.52-1.46,13.24-3.96,25.61-7.05,34.82-3.54,10.55-6.48,12.75-7.08,12.77Z"
                style="
                  fill: #92e3a9;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
            </g>
          </g>
          <g>
            <g>
              <g>
                <path
                  d="m261.18,383.64s-3.16,3.08-6.89,4.22c-2.96.9-12.33.84-12.33.84l-13.1.89c-.32-.58-.55-1.27-.72-2.03-1.23-5.68,1.38-15.46,1.38-15.46l14.03-3.38s.42,1.97.94,3.85c.44,1.57.94,3.08,1.35,3.31.88.53,13.55,3.22,14.44,4.96.9,1.75.9,2.8.9,2.8Z"
                  style="fill: #fff"
                />
                <g style="clip-path: url(#clippath-13); fill: none">
                  <path
                    d="m238.4,377.92c.29,2.26-6.59,7.18-10.26,9.64-1.23-5.68,1.38-15.46,1.38-15.46l14.03-3.38s.42,1.97.94,3.85c-2.8,1.36-6.34,3.48-6.1,5.35Z"
                    style="fill: #92e3a9; opacity: 0.4"
                  />
                </g>
                <path
                  d="m261.18,383.64s-3.16,3.08-6.89,4.22c-2.96.9-12.33.84-12.33.84l-13.1.89c-.32-.58-.55-1.27-.72-2.03-1.23-5.68,1.38-15.46,1.38-15.46l14.03-3.38s.42,1.97.94,3.85c.44,1.57.94,3.08,1.35,3.31.88.53,13.55,3.22,14.44,4.96.9,1.75.9,2.8.9,2.8Z"
                  style="
                    fill: none;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
              </g>
              <path
                d="m239.59,375.35c-1.46,1.22,1.67,2.56,1.67,2.56,0,0,4.94-1.86,6.05-1.56l-1.65-2.76s-3.44-.45-6.08,1.76Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
              <path
                d="m244.84,379.15s3.39-3.21,4.62-3.42c1.23-.21,3.6,1.31,3.6,1.31,0,0-3.16,1.66-3.51,2.81l-4.71-.69Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
            </g>
            <g>
              <path
                d="m216.28,389.01l-20.5,2.39s-1.53-2.44-1.59-4.47c-.05-1.63,3.4-7.89,4.75-10.83.34-.71.54-1.24.54-1.44.02-1.06,5.01-8.41,5.01-8.41l13.84,1.53s-.62,3.82-.87,5.82c-.2,1.49.68,4.47,1.31,7.35.22,1,.41,1.98.52,2.89.42,3.55-3.01,5.17-3.01,5.17Z"
                style="fill: #fff"
              />
              <g style="clip-path: url(#clippath-14); fill: none">
                <path
                  d="m216.28,376.41s-9.35-1.99-13.9,0-2.72-1.22-1.14-2.81c1.59-1.59,12.96-1.1,14.6,0l.44,2.81Z"
                  style="
                    fill: #fff;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
                <path
                  d="m215.34,378.44c-.71-.35-7.05-1.12-9.43-1.4-2.38-.28-7,1.13-7.16,3.25-.16,2.12,3.02.18,4.87,0,1.85-.18,12.66.98,12.66.98l-.93-2.83Z"
                  style="
                    fill: #fff;
                    stroke: #263238;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  "
                />
                <path
                  d="m218.77,380.95c-1.76-1.93-5.45-5.29-10.43-6.14-3.66-.62-7.02.29-9.4,1.28.34-.71.54-1.24.54-1.44.02-1.06,5.01-8.41,5.01-8.41l13.84,1.53s-.62,3.82-.87,5.82c-.2,1.49.68,4.47,1.31,7.35Z"
                  style="fill: #92e3a9; opacity: 0.4"
                />
              </g>
              <path
                d="m216.28,389.01l-20.5,2.39s-1.53-2.44-1.59-4.47c-.05-1.63,3.4-7.89,4.75-10.83.34-.71.54-1.24.54-1.44.02-1.06,5.01-8.41,5.01-8.41l13.84,1.53s-.62,3.82-.87,5.82c-.2,1.49.68,4.47,1.31,7.35.22,1,.41,1.98.52,2.89.42,3.55-3.01,5.17-3.01,5.17Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
            </g>
            <g>
              <path
                d="m250.91,321.57c-.6,2.51-1.23,5.61-1.84,8.8h0c-1.52,8-2.84,16.65-3.09,18.56-.36,2.67-2.12,12.84-1.42,14.25.7,1.41,1.42,7.39,1.42,7.39,0,0-4.2-.75-5.61-.62-3.22.29-12.38,3.65-12.38,3.65,0,0-1.76-4.77,0-9,1.76-4.23.7-7.64.7-7.64l2.11-25.44c-1.76,8.18-4.58,19.82-4.58,19.82l-4.57,5.62-.02.11h0s-2.35,13.2-2.35,13.2c0,0-6.94,2.19-9.28,1.84-2.15-.33-7.64-4.15-7.64-4.15l4.19-7.93s-.23-4.41.28-8.67c1.07-8.84,2.21-18.09,2.79-22.72,0,0,0-.04.02-.09.22-1.86.37-2.96.37-2.96,0,0-20.45-2.93-22.96-8.94-1.62-3.87-1.63-11.3-1.44-16.12.12-2.73,1.99-5.06,4.62-5.79,6.83-1.9,11.77-2.89,19.1-3.9.22-.04.45-.06.69-.1,1.96-1.79,9.54-4.42,11.65-4.17,1.61.2,5.28,1.46,7.36,2.37h0c.18.08.34.15.49.22,9.07-.84,11.53.94,11.53.94,0,0,.83.35,2.01.9,2.56,1.19,6.79,3.35,7.86,4.99,3.5,5.37,2.12,16.79,0,25.61Z"
                style="fill: #92e3a9"
              />
              <g style="clip-path: url(#clippath-15); fill: none">
                <path
                  d="m209.64,328.53c.22-1.86.37-2.96.37-2.96-.09,1.52-.3,2.64-.37,2.96Z"
                  style="opacity: 0.2"
                />
                <path
                  d="m210.01,325.57s-20.45-2.93-22.96-8.94c-1.62-3.87-1.63-11.3-1.44-16.12.12-2.73,1.99-5.06,4.62-5.79,6.83-1.9,11.77-2.89,19.1-3.9-5.9,4.16-11.44,7.84-11.44,7.84l.86-3.71s-9.12,8.36-9.86,12.05c-2.47,12.4,12.69,17.57,11.28,14.1-1.41-3.48,1.94-11.87,2.19-10.35.17,1.02,1.93,3.76,2.73,5.04-.36-1.9,1.75-6.92,1.75-6.92,0,0-.33,3.5,1.94,8.33,1.28,2.73,1.38,6.02,1.22,8.36Z"
                  style="opacity: 0.2"
                />
                <path
                  d="m229.03,288.92c.18.08.34.15.49.22,9.07-.84,11.53.94,11.53.94,0,0,.83.35,2.01.9-2.83,0-6.07.81-8.14,3.81,0,0-2.01-2.76-5.88-5.87Z"
                  style="opacity: 0.2"
                />
                <path
                  d="m245.99,348.93c-.36,2.67-2.12,12.84-1.42,14.25.7,1.41,1.42,7.39,1.42,7.39,0,0-4.2-.75-5.61-.62-3.22.29-12.38,3.65-12.38,3.65,0,0-1.76-4.77,0-9,1.76-4.23.7-7.64.7-7.64l2.11-25.44c-1.76,8.18-4.58,19.82-4.58,19.82l-4.57,5.62-.02.11c-.04-2.3-.04-4.29.02-5.75.3-7.34,11.49-52.13,13.78-50.54s.68,5.58.94,10.1c.27,4.53,2.93,23.93,2.76,28.56-.18,4.63-2.76-1.63-2.76-1.63,0,0-1.65,19.74-1.49,23.75.15,3.99,3.19-2.58,6.09-3.82,2.91-1.23,2.04-11.99,2.27-13.22.1-.53,2.78-6.95,5.82-14.12-1.52,8-2.84,16.64-3.09,18.55Z"
                  style="opacity: 0.2"
                />
              </g>
              <path
                d="m250.91,321.57c-.6,2.51-1.23,5.61-1.84,8.8h0c-1.52,8-2.84,16.65-3.09,18.56-.36,2.67-2.12,12.84-1.42,14.25.7,1.41,1.42,7.39,1.42,7.39,0,0-4.2-.75-5.61-.62-3.22.29-12.38,3.65-12.38,3.65,0,0-1.76-4.77,0-9,1.76-4.23.7-7.64.7-7.64l2.11-25.44c-1.76,8.18-4.58,19.82-4.58,19.82l-4.57,5.62-.02.11h0s-2.35,13.2-2.35,13.2c0,0-6.94,2.19-9.28,1.84-2.15-.33-7.64-4.15-7.64-4.15l4.19-7.93s-.23-4.41.28-8.67c1.07-8.84,2.21-18.09,2.79-22.72,0,0,0-.04.02-.09.22-1.86.37-2.96.37-2.96,0,0-20.45-2.93-22.96-8.94-1.62-3.87-1.63-11.3-1.44-16.12.12-2.73,1.99-5.06,4.62-5.79,6.83-1.9,11.77-2.89,19.1-3.9.22-.04.45-.06.69-.1,1.96-1.79,9.54-4.42,11.65-4.17,1.61.2,5.28,1.46,7.36,2.37h0c.18.08.34.15.49.22,9.07-.84,11.53.94,11.53.94,0,0,.83.35,2.01.9,2.56,1.19,6.79,3.35,7.86,4.99,3.5,5.37,2.12,16.79,0,25.61Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
            </g>
            <path
              d="m229.53,289.13c2.7,2.12,6.46,4.82,7.29,8.7s-3.14,21.13-5.99,33.69"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m210.01,325.57c1.03-5.33-2.7-11.64-3.17-11.99-.47-.35-.71-4,.94-6.58"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m202.37,312.88s.47,5.29,1.53,6.58c1.06,1.29,5.49,2.07,5.49,2.07"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m210.01,290.71s-5.52,5.12-5.52,6.53"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m237.99,291.95s-2.08.76-3.1,2.02"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m239.05,341.44c-1.76-2.47-5.32-22.93-5.32-22.93"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m244.57,363.19c-2.47-1.29-12.34,3.06-12.34,3.06"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m221.66,356.95s-7.3,4-8.59,3.77-3.06-3.77-3.06-3.77"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <path
            d="m218.65,385.43h-15.98c-3.96,0-9.11,3.12-11.52,6.97-1.14,1.82-.54,3.29,1.32,3.29h23.55c1.87,0,4.3-1.47,5.44-3.29,2.41-3.85,1.15-6.97-2.81-6.97Z"
            style="fill: #263238"
          />
          <path
            d="m253.99,385.43h-15.98c-3.96,0-9.11,3.12-11.52,6.97-1.14,1.82-.54,3.29,1.32,3.29h23.55c1.87,0,4.3-1.47,5.44-3.29,2.41-3.85,1.15-6.97-2.81-6.97Z"
            style="fill: #263238"
          />
          <g>
            <path
              d="m159.62,280.62c2.07,6.72,7.92,6.27,7.92,6.27l11.11-7.97s-.87-4.25-6.86-6.01"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m169.81,279.5c2.95-1.99,7.98-1.28,7.98-1.28,1.58-.18,3.83-1.07,4.98,0,1.15,1.07,1.59,1.94,3.33,4.41s-1.93,7.48-1.93,7.48c0,0-2.47,1.06-2.15-.8,0,0-.83,3.19-3.35,1.61,0,0-.88,1.01-2.47,0,0,0-1.76,1.58-3.1-.44l-.1-1.8s-7.39.44-6.42-5.69"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m182.02,289.31s.74-1.92,1.31-3.21-1.31-4.76-1.31-4.76"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m178.67,290.92c-.11-.36,1.01-4.83.84-5.59-.18-.76-1.72-2.93-1.72-2.93"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m174.79,283.81c.35.71,1.47,2.32,1.41,3.19-.06.87-.41,3.51,0,3.92"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m172.97,290.11c-.12-.54.13-2.19.13-2.19,0,0-.96-.68-1.31-1.9"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
        </g>
      </g>
      <g id="Character_1" data-name="Character 1">
        <g>
          <g>
            <path
              d="m109.7,344.97c-2.17,8.2-3.64,17.3-4.62,25.42-1.59,13.15-1.92,23.72-1.92,23.72l-8.12,3.67s-2.06-16.49-2.05-27.01c0-.73.02-1.43.04-2.1.34-10.27,2.6-20.17,2.6-20.17l1.36-29.69.1-2.13,10.3-.78.16,2.06,2.15,27.01Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m109.7,344.97c-2.17,8.2-3.64,17.3-4.62,25.42-4.75-1.16-9.28-.39-12.09.38,0-.73.02-1.43.04-2.1.34-10.27,2.6-20.17,2.6-20.17l1.36-29.69c3.68-.3,7.34-.59,10.56-.85l2.15,27.01Z"
              style="fill: #263238"
            />
          </g>
          <g>
            <path
              d="m146.89,394.07l-7.17,5.28s-3.89-11.15-6.42-20.82c-.68-2.59-1.26-5.08-1.64-7.22-1.82-10.11-1.68-20.26-1.68-20.26l-2.09-16.75,9.9-2.92,5.21,13.27c-.42,8.66.08,18.08.85,26.35,1.2,12.94,3.04,23.07,3.04,23.07Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m143.85,371c-2.69,2.31-6.62,5.41-10.55,7.53-.68-2.59-1.26-5.08-1.64-7.22-1.82-10.11-1.68-20.26-1.68-20.26l-2.09-16.75,9.9-2.92,5.21,13.27c-.42,8.66.08,18.08.85,26.35Z"
              style="fill: #263238"
            />
          </g>
          <g>
            <path
              d="m142.07,106.08s.82,2.64-.7,14.07l7.9-4.75c-.03-4.41.03-8.12.38-8.9.86-1.94.8-10.7.37-12.01-.43-1.31-1.51-1.53-1.51-1.53,0,0-2.82-1.06-3.62-1.49-.8-.43-3.09-.7-3.09-.7l-2.45,2.61.17,1.67s-2.37.41-2.24,1.74c.13,1.34-.01,2.87.47,4.67.48,1.81,4.32,4.62,4.32,4.62Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m139.52,95.05s3.01,1.34,3.43,1.3c.42-.04.37,1.55-.25,1.77-.62.22-2.31,1.03-2.31,1.03,0,0,1.98-.04,2.48,2.77"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m140.91,95.64s.83-1.4,1.22-1.83,1.64-1.36,1.64-1.36"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m141.63,98.57c.12,1.14,1.87,1.85,2.29,1.09,0,0,1.01.85,1.64.79.63-.06.96-.33,1.9-.19.94.14,1.36-1.99,1.18-2.39-.18-.4-.91.09-.91.09"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m146.55,100.25c-.69-1.02-1.26-2.47-1.12-3.2.14-.73,1.85-2.79,1.85-2.79"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m143.92,99.66s-.36-1.63-.67-2.47"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m142.95,96.35s1.34-2.52,2.07-2.91"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m142.07,106.09c.68.73,1.89.29,1.89.29"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <line
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
              x1="146.07"
              x2="147.54"
              y1="107.35"
              y2="107.71"
            />
          </g>
          <path
            d="m66.53,281.82c.26.73,4.22,25.52,1.06,30.26-3.16,4.75-3.57-27.23-3.57-27.23"
            style="
              fill: none;
              stroke: #263238;
              stroke-miterlimit: 10;
              stroke-width: 2px;
            "
          />
          <polygon
            points="58.62 283.59 17.22 417 19.06 417 61.79 287.05 58.62 283.59"
            style="
              fill: #757575;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m87.82,144.25s-7.72-1.49-9.83,6.31c-2.11,7.8,1.58,28.03,0,32.42-1.58,4.39.72,10.43,4.58,9.78,0,0-1.87-1.39-.59-4.18,1.28-2.79,4.19-8.46,3.92-12.88,0,0,.99,8.33-1.58,12.12,0,0,5.61-9.29,4.61-17.75-1-8.46-1.12-25.82-1.12-25.82Z"
            style="fill: #263238"
          />
          <path
            d="m109.13,145.38s-1.53-7.39-11.98-6.44c-10.45.95-18.04,9.22-14.11,21.7,3.93,12.48,12.48,17.19,18.91,14.17s9.1-.18,12.09-5.36.66-19.65-4.9-24.08Z"
            style="fill: #263238"
          />
          <g>
            <path
              d="m149.9,154.11c-.02.12-2.2,4.9-5.26,11.46-3.64,7.83-8.53,18.18-12.53,26.22-3.4,6.85-6.15,12-6.91,12.46l2.38-35.59c5.01-6.86,9.18-16.31,10.5-20.45s3.29-35.47,3.29-35.47c3.64,1.18,8.62,0,8.62,0,0,0,.91,35.58-.09,41.37Z"
              style="fill: #92e3a9"
            />
            <g style="clip-path: url(#clippath-16); fill: none">
              <path
                d="m144.64,165.57c-3.64,7.83-8.53,18.18-12.53,26.22-.75-1.09-1.22-1.81-1.22-1.81,0,0,3.95-10.88,3.56-17.01-.4-6.13,3.36-2.57,1.58,4.74,0,0,4.73-7.09,8.61-12.14Z"
                style="opacity: 0.2"
              />
            </g>
            <path
              d="m149.9,154.11c-.02.12-2.2,4.9-5.26,11.46-3.64,7.83-8.53,18.18-12.53,26.22-3.4,6.85-6.15,12-6.91,12.46l2.38-35.59c5.01-6.86,9.18-16.31,10.5-20.45s3.29-35.47,3.29-35.47c3.64,1.18,8.62,0,8.62,0,0,0,.91,35.58-.09,41.37Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <g>
            <g>
              <path
                d="m137.19,393.53s3.28-2.68,10.75-2.15c0,0,1.58,9.32,2.89,12.04,1.31,2.71,7.15,7.41,8.22,8.21,1.08.8,1.39,3.62,1.39,3.62h-22.48s-.31-6.24.45-11.97l-1.22-9.76Z"
                style="fill: #fff"
              />
              <g style="clip-path: url(#clippath-17); fill: none">
                <path
                  d="m137.19,393.53s3.28-2.68,10.75-2.15c0,0,1.58,9.32,2.89,12.04,1.31,2.71,7.15,7.41,8.22,8.21,1.08.8,1.39,3.62,1.39,3.62h-22.48s-.31-6.24.45-11.97l-1.22-9.76Z"
                  style="fill: #92e3a9; opacity: 0.4"
                />
              </g>
              <path
                d="m137.19,393.53s3.28-2.68,10.75-2.15c0,0,1.58,9.32,2.89,12.04,1.31,2.71,7.15,7.41,8.22,8.21,1.08.8,1.39,3.62,1.39,3.62h-22.48s-.31-6.24.45-11.97l-1.22-9.76Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
            </g>
            <path
              d="m141.97,394.74s1.49,8.58,3.01,10.82c1.52,2.24,2.87,3.4,2.87,3.4,0,0,1.54.03.24,2.17"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m146.04,408.15s4.47-2.89,8.13-.71"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m144.67,406.19s3.04-2.75,7.16-1.24"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m142.91,403.2s3.27-2.94,7.28-1.07"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m142,399.46s4.09-2.47,7.48-.6"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m137.96,415.26l.19,1.74h2.58s2.07-1.34,4.32,0h12.14c2.11,0,3.61-.87,3.61-.87l-.35-.87h-22.48Z"
              style="
                fill: #92e3a9;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <g>
            <g>
              <path
                d="m93.4,394.65s3.58-2.56,10.99-2.04c0,0,.54,8.88,1.55,11.47,1.01,2.59,6.32,7.06,7.31,7.82.99.77.99,3.45.99,3.45h-22.48s.38-5.94,1.79-11.4l-.13-9.29Z"
                style="fill: #fff"
              />
              <g style="clip-path: url(#clippath-18); fill: none">
                <path
                  d="m93.4,394.65s3.58-2.56,10.99-2.04c0,0,.54,8.88,1.55,11.47,1.01,2.59,6.32,7.06,7.31,7.82.99.77.99,3.45.99,3.45h-22.48s.38-5.94,1.79-11.4l-.13-9.29Z"
                  style="fill: #92e3a9; opacity: 0.4"
                />
              </g>
              <path
                d="m93.4,394.65s3.58-2.56,10.99-2.04c0,0,.54,8.88,1.55,11.47,1.01,2.59,6.32,7.06,7.31,7.82.99.77.99,3.45.99,3.45h-22.48s.38-5.94,1.79-11.4l-.13-9.29Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              />
            </g>
            <path
              d="m98.04,395.8s.53,8.18,1.8,10.31c1.27,2.13,2.49,3.24,2.49,3.24,0,0,1.54.02,0,2.07"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m100.61,408.57s4.79-2.76,8.21-.67"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m99.46,406.7s3.35-2.62,7.29-1.18"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m98.04,403.85s3.6-2.8,7.4-1.02"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m97.55,400.29s4.37-2.35,7.55-.57"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m91.74,415.34v1.66h2.58s2.21-1.28,4.32,0h12.14c2.11,0,3.7-.83,3.7-.83l-.26-.83h-22.48Z"
              style="
                fill: #92e3a9;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <path
            d="m136.45,231.1s7.1,28.22,16.31,132.6c0,0-30.86,9.08-65.26,2.59,0,0,2.51-5.76,3.04-32.88s-1.6-71.47,13.46-93.38l32.45-8.93Z"
            style="
              fill: #757575;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <g>
            <path
              d="m137.63,230.76c.4,2.8-19.71,13.02-30.97,12.83-1.38-.01-2.61-.19-3.67-.55-2.67-.92-1.4-12.21-1.4-12.21,0,0-7.32-9.31-13.11-17.39-3.56-4.97-6.54-9.49-6.88-11.09-.54-2.53,7.64-10.03,14.14-14.21,21.55-13.86,31.84-19.48,31.84-19.48,0,0,2.32,2.54,3.31,7.97l.99,8.44c1.72,6.95,3.38,14.33,3.75,18.21.84,8.66-1.18,18.83-1.18,18.83,0,0,2.74,5.52,3.18,8.65Z"
              style="fill: #92e3a9"
            />
            <g style="clip-path: url(#clippath-19); fill: none">
              <path
                d="m106.66,243.59c-1.38-.01-2.61-.19-3.67-.55-2.67-.92-1.4-12.21-1.4-12.21,0,0-7.32-9.31-13.11-17.39l.58-1.35s4.23.83,8.09,6.77c3.87,5.93,4.32,9.87,7.4,9.87,6.16,0,18.95-26.1,13.86-7.33-3.06,11.3-13.06,11.5-13.06,11.5,0,0,10.48,3.17,13.06,3.17,1.87,0-4.64,6.26-11.75,7.52Z"
                style="opacity: 0.2"
              />
            </g>
            <path
              d="m137.63,230.76c.4,2.8-19.71,13.02-30.97,12.83-1.38-.01-2.61-.19-3.67-.55-2.67-.92-1.4-12.21-1.4-12.21,0,0-7.32-9.31-13.11-17.39-3.56-4.97-6.54-9.49-6.88-11.09-.54-2.53,7.64-10.03,14.14-14.21,21.55-13.86,31.84-19.48,31.84-19.48,0,0,2.32,2.54,3.31,7.97l.99,8.44c1.72,6.95,3.38,14.33,3.75,18.21.84,8.66-1.18,18.83-1.18,18.83,0,0,2.74,5.52,3.18,8.65Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
          </g>
          <path
            d="m81.6,202.34c-3.34,11.14-4.51,28.49-4.77,33.06-.26,4.57-9.91,30.86-10.7,33.08s-2.11,6.05-2.11,6.05l6.08,4.58s13.92-30.95,14.94-33.99c1.02-3.04,6.94-26.38,6.94-26.38,0,0-.53-11.54-3.04-13.81"
            style="
              fill: #92e3a9;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m64.02,274.54s-5.35,3.28-6.81,4.45c-1.52,1.21-1.29,6.82-1.29,6.82,0,0-2.97,2.87.48,4.93,0,0,3.51-3.34,3.93-3.42,1.46-.27-.07,4.38-.07,4.38.34,1.19,7.23-4.03,8.02-4.81s1.81-7.78,1.81-7.78c0,0-2.13-4.71-6.08-4.58Z"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m58.49,285.71c-.89-.79-1.19-1.74-1.09-2.5.1-.76-1.09-2.46-1.09-2.46"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m60.33,287.33c2.32-.23,2.52.66,2.52.66"
            style="
              fill: #fff;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m138.57,145.74s6.17-.65,6.17,4.88"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m76.56,237.08s1.99,6.48,5.02,4.9"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m134.45,222.1s-2.77,11.39-12.07,12.38"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m97.15,192.81s16.33,2.52,19.1-2.83"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m126.53,209.23s-7-1.05-12.5,10.42"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m134.45,261.16s-22.76,34.6-27.2,63"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <path
            d="m137.96,337.21s-2.7,13.01-28.82,17.75"
            style="
              fill: none;
              stroke: #263238;
              stroke-linecap: round;
              stroke-linejoin: round;
            "
          />
          <g>
            <path
              d="m114.49,177.95s-2.02,14.82-19.87,11.57c0,0,3.95-3.17,4.34-5.05.4-1.87-4.33-17.35-4.33-17.35l10.14,3.46,3.6,1.23s-.65,4.82,1.08,6.82c.14.15.29.29.45.41.9.65,4.59-1.09,4.59-1.09Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m109.45,178.63c-5.65,2.12-12.3-7.25-12.3-7.25,0,0,3.72-.66,7.62-.8l3.6,1.23s-.65,4.82,1.08,6.82Z"
              style="fill: #263238"
            />
          </g>
          <g>
            <path
              d="m97.64,141.86c14.07-3.53,15.75,18.65,16.38,24.07.23,2-3.17,9.58-5.87,10.13-2.11.43-11.47-2.56-12.83-4.84-3.62-6.07-13.51-25.39,2.32-29.36Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m105.35,155.35c.38.92.7,3.85,3.25,4.93,1.65.7-1.09,2.45-1.09,2.45"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m104.26,151.01s2.81-1.25,5.45.4"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m99.61,152.7s-2.39.51-4.91,2.48"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m109.36,156.23c.12.58-.12,1.13-.54,1.21-.42.09-.86-.32-.98-.9-.12-.58.12-1.13.54-1.21.42-.09.86.32.98.9Z"
              style="fill: #263238"
            />
            <path
              d="m100.34,158.74c.12.58-.12,1.13-.54,1.21s-.86-.32-.98-.9.12-1.13.54-1.21c.42-.09.86.32.98.9Z"
              style="fill: #263238"
            />
            <path
              d="m109,166.33c-3.69.71-7.06-.28-7.06-.28,0,0,.87,3.61,4.06,3.4,2.45-.17,2.49-3.03,2.49-3.03"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m93.85,146.61s4.01,9.7-3.62,16.15l-7.2-8.25,12.53-14.64c14.31-3.64,23.16,3.14,22.84,28.87,0,0-6.72-28.37-24.55-22.13Z"
              style="fill: #263238"
            />
            <path
              d="m92.3,162.57c-.24-1.16-3.99-3.1-4.36-.96-.63,3.64,1.43,5.98,3.47,6.5.91.23,2.16.82,2.56-.24"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            />
            <path
              d="m90.87,160.38l4.67-3.6s3.63-2.5,6.53-1.85l2.7-.39s1.75-1.08,2.52-1.21c1.07-.18,2.95-.66,3.88.28l1.19.44.11,1.77-.96.14s.14,2.98-1.76,3.37c-2.11.43-4.18-2.51-4.18-2.51,0,0-1.77-.07-1.98.76,0,0,.54,3.12-2.36,3.84s-5.22-2.84-5.22-2.84l-4.8,2.79-.34-1Z"
              style="fill: #263238"
            />
          </g>
        </g>
        <g>
          <path d="m265.05,426.68v8.74h-.84v-8.74h.84Z" style="fill: #093f00" />
          <path
            d="m267.2,435.42v-6.55h.78v1.21c.17-.45.43-.78.77-1,.35-.22.71-.32,1.1-.32.44,0,.81.12,1.11.37s.51.59.62,1.02c.15-.44.41-.78.79-1.03s.79-.37,1.27-.37c.58,0,1.07.19,1.46.58.39.38.58.94.58,1.67v4.42h-.79v-4.39c0-.53-.14-.92-.42-1.16s-.62-.37-1.03-.37c-.48,0-.87.15-1.16.44-.29.3-.44.68-.44,1.16v4.32h-.79v-4.46c0-.45-.13-.8-.4-1.07-.26-.26-.6-.4-1.02-.4-.44,0-.82.15-1.14.45-.32.3-.48.72-.48,1.27v4.21h-.8Z"
            style="fill: #093f00"
          />
          <path
            d="m279.4,435.56c-.4,0-.76-.08-1.09-.23-.32-.15-.58-.38-.78-.67-.2-.3-.29-.66-.29-1.08s.11-.78.32-1.03.51-.45.89-.58.81-.22,1.3-.29c.54-.06.97-.12,1.27-.18.3-.06.45-.21.45-.46v-.14c0-.44-.13-.79-.4-1.04-.27-.25-.65-.38-1.13-.38s-.85.1-1.14.31-.49.44-.61.71l-.76-.25c.14-.36.35-.65.61-.86.26-.21.55-.37.88-.47.33-.1.66-.15,1.01-.15.26,0,.52.03.79.1.27.07.53.18.76.34.24.16.43.38.57.67.14.28.22.64.22,1.07v4.45h-.78v-1.03h-.06c-.14.3-.39.57-.73.81-.34.24-.77.37-1.3.37Zm.12-.71c.4,0,.75-.09,1.04-.26s.52-.41.68-.71.24-.62.24-.97v-.94c-.07.07-.21.13-.42.19s-.43.09-.67.13-.44.06-.61.08c-.55.06-.98.19-1.28.38-.3.19-.45.48-.45.86s.14.7.42.91.63.32,1.06.32Z"
            style="fill: #093f00"
          />
          <path
            d="m286.77,438.01c-.66,0-1.21-.13-1.64-.38-.43-.25-.73-.57-.92-.95l.65-.4c.14.26.36.49.65.7.29.21.71.32,1.25.32.58,0,1.05-.14,1.4-.43.35-.29.53-.73.53-1.33v-1.46h-.08c-.08.2-.2.4-.37.59-.17.2-.38.36-.65.49s-.59.19-.98.19c-.52,0-.98-.13-1.39-.38s-.72-.62-.95-1.1c-.23-.48-.35-1.06-.35-1.73s.11-1.25.34-1.75c.23-.5.54-.9.95-1.18.4-.28.87-.42,1.41-.42.4,0,.73.07,1,.21.26.14.48.31.64.52s.29.41.38.61h.08v-1.26h.77v6.71c0,.56-.12,1.02-.35,1.37-.24.36-.56.62-.97.8s-.88.26-1.4.26Zm-.04-3.37c.62,0,1.11-.22,1.46-.67.35-.45.52-1.06.52-1.85,0-.5-.08-.95-.23-1.35-.16-.4-.38-.71-.67-.93-.29-.22-.65-.34-1.07-.34s-.8.12-1.1.35c-.3.23-.53.55-.68.94-.15.4-.23.84-.23,1.33,0,.74.17,1.35.52,1.82.34.47.84.7,1.49.7Z"
            style="fill: #093f00"
          />
          <path
            d="m294.16,435.56c-.62,0-1.15-.14-1.6-.43-.45-.29-.79-.69-1.04-1.19-.24-.51-.37-1.09-.37-1.76s.12-1.24.36-1.75c.24-.51.58-.91,1.01-1.21.43-.29.93-.44,1.5-.44.48,0,.93.12,1.36.35.42.23.77.59,1.04,1.07.27.48.4,1.09.4,1.84v.35h-4.86c.02.74.22,1.34.62,1.79.4.45.92.67,1.58.67.46,0,.83-.11,1.13-.32s.5-.46.62-.75l.76.24c-.15.42-.44.78-.88,1.09-.43.31-.98.46-1.63.46Zm-2.2-3.86h4.06c-.04-.64-.23-1.17-.58-1.58-.35-.42-.82-.62-1.41-.62-.39,0-.74.1-1.04.3s-.54.47-.72.8c-.18.34-.28.7-.31,1.1Z"
            style="fill: #093f00"
          />
          <path
            d="m304.71,435.56c-.4,0-.73-.07-1-.22-.26-.14-.48-.32-.64-.53-.16-.21-.29-.42-.38-.62h-.08v1.22h-.78v-8.74h.8v3.44h.06c.09-.2.21-.4.37-.61.16-.21.37-.38.64-.52.26-.14.6-.21,1.01-.21.53,0,.99.14,1.4.43.4.28.72.68.95,1.18.23.5.34,1.1.34,1.78s-.11,1.26-.34,1.78c-.22.51-.54.91-.94,1.19-.4.28-.87.43-1.41.43Zm-.11-.72c.42,0,.78-.12,1.08-.36.3-.24.52-.56.68-.97.16-.4.23-.86.23-1.36s-.08-.95-.23-1.35c-.15-.4-.38-.72-.67-.95-.3-.23-.66-.35-1.09-.35s-.78.11-1.07.34c-.29.22-.52.54-.67.94-.16.4-.23.86-.23,1.38s.08.98.23,1.39c.16.4.38.72.68.95s.65.35,1.07.35Z"
            style="fill: #093f00"
          />
          <path
            d="m308.62,437.78l.22-.7.1.04c.35.1.66.09.91-.04.26-.13.47-.43.64-.9l.25-.72-2.51-6.6h.86l1.51,4.12c.11.3.21.59.29.88s.17.58.25.86c.09-.28.18-.57.26-.86s.19-.59.3-.88l1.51-4.12h.86l-2.9,7.62c-.37.95-.97,1.43-1.8,1.43-.16,0-.31-.01-.44-.04s-.24-.06-.32-.09Z"
            style="fill: #093f00"
          />
          <path
            d="m323.9,437.73c-1.08,0-2.01-.22-2.8-.66-.79-.44-1.4-1.06-1.82-1.87-.43-.81-.64-1.76-.64-2.84s.21-2.01.64-2.81,1.03-1.43,1.81-1.87c.78-.44,1.69-.67,2.74-.67.76,0,1.44.13,2.05.4.61.26,1.13.63,1.55,1.09.43.46.75.98.98,1.57.22.59.34,1.21.34,1.85,0,.4-.03.8-.09,1.19-.06.39-.17.75-.32,1.06-.15.32-.36.57-.62.75-.26.18-.6.28-1.01.28-.21,0-.41-.03-.62-.1-.2-.07-.38-.18-.52-.34s-.22-.38-.25-.65h-.04c-.14.31-.35.57-.65.79-.3.21-.67.32-1.12.32-.5,0-.92-.13-1.28-.38-.36-.26-.63-.6-.82-1.04-.19-.44-.28-.92-.28-1.46s.11-1,.32-1.42c.21-.42.5-.75.86-1s.78-.37,1.24-.37c.39,0,.74.09,1.03.27.3.18.51.39.65.63h.05v-.77h.71v3.95c0,.3.06.53.17.69.12.16.3.25.56.25.46,0,.79-.23,1-.68s.31-1.11.31-1.97c0-.56-.1-1.09-.29-1.6-.19-.51-.47-.96-.83-1.36-.36-.4-.81-.71-1.33-.94-.52-.23-1.12-.35-1.78-.35-.89,0-1.66.2-2.33.59-.66.4-1.18.95-1.55,1.65-.37.7-.56,1.53-.56,2.48s.19,1.78.56,2.48.9,1.25,1.58,1.63c.68.38,1.49.58,2.43.58.46,0,.91-.06,1.34-.19s.77-.26,1.01-.38l.23.62c-.31.17-.71.31-1.19.43s-.96.18-1.42.18Zm-.35-3.22c.57,0,1-.2,1.31-.59.3-.39.46-.94.46-1.64s-.16-1.22-.47-1.56c-.32-.34-.74-.5-1.28-.5-.34,0-.65.09-.91.28-.26.19-.46.44-.61.75-.14.31-.22.66-.22,1.03,0,.4.06.77.19,1.11.13.34.32.61.58.82.26.2.57.31.95.31Z"
            style="fill: #093f00"
          />
          <path
            d="m332.6,435.56c-.64,0-1.17-.15-1.59-.44s-.69-.71-.81-1.27l.77-.18c.09.39.27.69.55.88.28.2.64.29,1.07.29.5,0,.89-.11,1.19-.34.3-.22.45-.5.45-.84,0-.53-.36-.88-1.07-1.04l-1.07-.26c-1.12-.27-1.68-.85-1.68-1.74,0-.37.1-.69.3-.97.2-.28.47-.49.82-.65.34-.16.74-.23,1.18-.23.62,0,1.11.14,1.47.42s.62.66.77,1.13l-.73.18c-.1-.3-.27-.54-.51-.74-.24-.2-.57-.3-.99-.3s-.8.11-1.08.32-.42.48-.42.8c0,.54.39.91,1.18,1.09l1,.24c1.1.26,1.66.84,1.66,1.73,0,.37-.1.7-.31.99-.2.29-.49.52-.86.68-.37.16-.8.25-1.28.25Z"
            style="fill: #093f00"
          />
          <path
            d="m338.92,428.87v.7h-1.34v4.31c0,.66.29.96.88.9.06,0,.12,0,.2-.02s.16-.03.23-.05l.16.7c-.17.05-.36.08-.59.08-.52.04-.93-.08-1.23-.37-.3-.28-.45-.68-.45-1.19v-4.36h-.97v-.7h.97v-1.56h.8v1.56h1.34Z"
            style="fill: #093f00"
          />
          <path
            d="m342.74,435.56c-.57,0-1.07-.14-1.5-.43-.43-.29-.77-.69-1.02-1.19-.25-.51-.37-1.09-.37-1.76s.12-1.26.37-1.77.59-.91,1.02-1.19c.43-.29.93-.43,1.5-.43s1.07.14,1.51.43c.44.29.78.69,1.03,1.19s.37,1.1.37,1.77-.12,1.25-.37,1.76c-.25.51-.59.91-1.03,1.19-.44.29-.94.43-1.51.43Zm0-.72c.46,0,.84-.12,1.15-.37.31-.24.54-.57.71-.97.16-.4.25-.84.25-1.33s-.08-.93-.25-1.34c-.16-.4-.4-.73-.71-.97-.31-.24-.69-.37-1.14-.37s-.82.12-1.13.37c-.31.24-.55.57-.71.97-.16.4-.25.85-.25,1.34s.08.93.25,1.33c.16.4.4.72.71.97.31.24.69.37,1.13.37Z"
            style="fill: #093f00"
          />
          <path
            d="m347.3,435.42v-6.55h.78v1.02h.06c.13-.34.35-.6.68-.8.32-.2.69-.3,1.1-.3h.22c.08,0,.14,0,.19.01v.79s-.08,0-.17-.02c-.09-.01-.19-.02-.29-.02-.51,0-.93.16-1.26.47-.33.31-.49.71-.49,1.2v4.2h-.8Z"
            style="fill: #093f00"
          />
          <path
            d="m351.61,437.78l.22-.7.1.04c.35.1.66.09.91-.04.26-.13.47-.43.64-.9l.25-.72-2.51-6.6h.86l1.51,4.12c.11.3.21.59.29.88s.17.58.25.86c.09-.28.18-.57.26-.86s.19-.59.3-.88l1.51-4.12h.86l-2.9,7.62c-.37.95-.97,1.43-1.8,1.43-.16,0-.31-.01-.44-.04s-.24-.06-.32-.09Z"
            style="fill: #093f00"
          />
          <path
            d="m360.56,435.56c-.64,0-1.17-.15-1.59-.44s-.69-.71-.81-1.27l.77-.18c.09.39.27.69.55.88.28.2.64.29,1.07.29.5,0,.89-.11,1.19-.34.3-.22.45-.5.45-.84,0-.53-.36-.88-1.07-1.04l-1.07-.26c-1.12-.27-1.68-.85-1.68-1.74,0-.37.1-.69.3-.97.2-.28.47-.49.82-.65.34-.16.74-.23,1.18-.23.62,0,1.11.14,1.47.42s.62.66.77,1.13l-.73.18c-.1-.3-.27-.54-.51-.74-.24-.2-.57-.3-.99-.3s-.8.11-1.08.32-.42.48-.42.8c0,.54.39.91,1.18,1.09l1,.24c1.1.26,1.66.84,1.66,1.73,0,.37-.1.7-.31.99-.2.29-.49.52-.86.68-.37.16-.8.25-1.28.25Z"
            style="fill: #093f00"
          />
          <path
            d="m367.33,435.56c-.62,0-1.15-.14-1.6-.43-.45-.29-.79-.69-1.04-1.19-.24-.51-.37-1.09-.37-1.76s.12-1.24.36-1.75c.24-.51.58-.91,1.01-1.21.43-.29.93-.44,1.5-.44.48,0,.93.12,1.36.35.42.23.77.59,1.04,1.07.27.48.4,1.09.4,1.84v.35h-4.86c.02.74.22,1.34.62,1.79.4.45.92.67,1.58.67.46,0,.83-.11,1.13-.32s.5-.46.62-.75l.76.24c-.15.42-.44.78-.88,1.09-.43.31-.98.46-1.63.46Zm-2.2-3.86h4.06c-.04-.64-.23-1.17-.58-1.58-.35-.42-.82-.62-1.41-.62-.39,0-.74.1-1.04.3s-.54.47-.72.8c-.18.34-.28.7-.31,1.1Z"
            style="fill: #093f00"
          />
          <path
            d="m373.84,428.87v.7h-1.34v4.31c0,.66.29.96.88.9.06,0,.12,0,.2-.02s.16-.03.23-.05l.16.7c-.17.05-.36.08-.59.08-.52.04-.93-.08-1.23-.37-.3-.28-.45-.68-.45-1.19v-4.36h-.97v-.7h.97v-1.56h.8v1.56h1.34Z"
            style="fill: #093f00"
          />
          <path
            d="m381.13,435.56c-.57,0-1.07-.14-1.5-.43-.43-.29-.77-.69-1.02-1.19-.25-.51-.37-1.09-.37-1.76s.12-1.26.37-1.77.59-.91,1.02-1.19c.43-.29.93-.43,1.5-.43s1.07.14,1.51.43c.44.29.78.69,1.03,1.19s.37,1.1.37,1.77-.12,1.25-.37,1.76c-.25.51-.59.91-1.03,1.19-.44.29-.94.43-1.51.43Zm0-.72c.46,0,.84-.12,1.15-.37.31-.24.54-.57.71-.97.16-.4.25-.84.25-1.33s-.08-.93-.25-1.34c-.16-.4-.4-.73-.71-.97-.31-.24-.69-.37-1.14-.37s-.82.12-1.13.37c-.31.24-.55.57-.71.97-.16.4-.25.85-.25,1.34s.08.93.25,1.33c.16.4.4.72.71.97.31.24.69.37,1.13.37Z"
            style="fill: #093f00"
          />
          <path
            d="m386.49,431.34v4.08h-.8v-6.55h.77v1.21c.21-.46.49-.79.85-.99.36-.2.76-.31,1.2-.31.66,0,1.2.21,1.62.62s.62,1.01.62,1.78v4.24h-.79v-4.18c0-.54-.15-.96-.45-1.27-.3-.31-.7-.47-1.21-.47s-.95.16-1.3.49c-.34.33-.52.78-.52,1.34Z"
            style="fill: #093f00"
          />
          <path
            d="m396.28,435.42v-8.74h5.09v.74h-4.25v3.32h3.84v.74h-3.84v3.92h-.84Z"
            style="fill: #093f00"
          />
          <path
            d="m402.77,435.42v-6.55h.78v1.02h.06c.13-.34.35-.6.68-.8.32-.2.69-.3,1.1-.3h.22c.08,0,.14,0,.19.01v.79s-.08,0-.17-.02c-.09-.01-.19-.02-.29-.02-.51,0-.93.16-1.26.47-.33.31-.49.71-.49,1.2v4.2h-.8Z"
            style="fill: #093f00"
          />
          <path
            d="m409.54,435.56c-.62,0-1.15-.14-1.6-.43-.45-.29-.79-.69-1.04-1.19-.24-.51-.37-1.09-.37-1.76s.12-1.24.36-1.75c.24-.51.58-.91,1.01-1.21.43-.29.93-.44,1.5-.44.48,0,.93.12,1.36.35.42.23.77.59,1.04,1.07.27.48.4,1.09.4,1.84v.35h-4.86c.02.74.22,1.34.62,1.79.4.45.92.67,1.58.67.46,0,.83-.11,1.13-.32s.5-.46.62-.75l.76.24c-.15.42-.44.78-.88,1.09-.43.31-.98.46-1.63.46Zm-2.2-3.86h4.06c-.04-.64-.23-1.17-.58-1.58-.35-.42-.82-.62-1.41-.62-.39,0-.74.1-1.04.3s-.54.47-.72.8c-.18.34-.28.7-.31,1.1Z"
            style="fill: #093f00"
          />
          <path
            d="m416.5,435.56c-.62,0-1.15-.14-1.6-.43-.45-.29-.79-.69-1.04-1.19-.24-.51-.37-1.09-.37-1.76s.12-1.24.36-1.75c.24-.51.58-.91,1.01-1.21.43-.29.93-.44,1.5-.44.48,0,.93.12,1.36.35.42.23.77.59,1.04,1.07.27.48.4,1.09.4,1.84v.35h-4.86c.02.74.22,1.34.62,1.79.4.45.92.67,1.58.67.46,0,.83-.11,1.13-.32s.5-.46.62-.75l.76.24c-.15.42-.44.78-.88,1.09-.43.31-.98.46-1.63.46Zm-2.2-3.86h4.06c-.04-.64-.23-1.17-.58-1.58-.35-.42-.82-.62-1.41-.62-.39,0-.74.1-1.04.3s-.54.47-.72.8c-.18.34-.28.7-.31,1.1Z"
            style="fill: #093f00"
          />
          <path
            d="m420.8,437.87v-9h.78v1.26h.08c.09-.2.21-.4.37-.61.16-.21.37-.38.64-.52.26-.14.6-.21,1.01-.21.53,0,.99.14,1.4.43.4.28.72.68.95,1.18.23.5.34,1.1.34,1.78s-.11,1.26-.34,1.78c-.22.51-.54.91-.94,1.19-.4.28-.87.43-1.41.43-.4,0-.73-.07-1-.22-.26-.14-.48-.32-.64-.53-.16-.21-.29-.42-.38-.62h-.06v3.67h-.8Zm2.77-3.02c.42,0,.78-.12,1.08-.36.3-.24.52-.56.68-.97.16-.4.23-.86.23-1.36s-.08-.95-.23-1.35c-.15-.4-.38-.72-.67-.95-.3-.23-.66-.35-1.09-.35s-.78.11-1.07.34c-.29.22-.52.54-.67.94-.16.4-.23.86-.23,1.38s.08.98.23,1.39c.16.4.38.72.68.95s.65.35,1.07.35Z"
            style="fill: #093f00"
          />
          <path
            d="m428.43,427.65c-.16,0-.3-.05-.41-.16-.11-.11-.17-.24-.17-.39s.06-.28.17-.4.25-.17.41-.17.3.06.41.17c.11.11.17.24.17.4s-.06.28-.17.39c-.11.11-.25.16-.41.16Zm-.41,7.76v-6.55h.8v6.55h-.8Z"
            style="fill: #093f00"
          />
          <path
            d="m430.82,435.42v-8.74h.8v5.26h.1l3.02-3.07h1.01l-2.78,2.82,2.95,3.73h-1.02l-2.53-3.22-.74.71v2.51h-.8Z"
            style="fill: #093f00"
          />
        </g>
      </g>
    </svg>
  </n-el>
</template>
