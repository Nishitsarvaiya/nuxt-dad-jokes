<template>
  <header class="w-full">
    <div class="flex items-center justify-center gap-6 w-full h-52">
      <NuxtLink to="/" class="w-12 h-12">
        <svg
          viewBox="0 0 24 24"
          stroke="#272D2D"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </NuxtLink>
      <h1 class="text-[4rem] font-bold flex gap-4 items-center justify-center">
        Corny Dad Jokes
        <div class="w-24 h-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="emoji"
            viewBox="0 0 72 72"
          >
            <g id="color">
              <circle cx="36" cy="36" r="23" fill="#fcea2b" />
              <path
                fill="#fff"
                d="M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z"
              />
              <path
                fill="#ea5a47"
                d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z"
              />
            </g>
            <g id="hair" />
            <g id="skin" />
            <g id="skin-shadow" />
            <g id="line">
              <polyline
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                points="25.168 27.413 31.755 31.427 25.168 35.165"
              />
              <polyline
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                points="46.832 27.413 40.245 31.427 46.832 35.165"
              />
              <circle
                cx="36"
                cy="36"
                r="23"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z"
              />
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z"
              />
            </g>
          </svg>
        </div>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
