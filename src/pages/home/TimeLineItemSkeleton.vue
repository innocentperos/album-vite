<template>
  <div class="w-full p-4 flex flex-col dark:bg-gradient-to-br bg-white dark:from-indigo-600 dark:to-indigo-800 dark:via-indigo-700 rounded-lg dark:text-white w-full">
    <div class="flex space-x-2 w-full">
      <div class="h-10 aspect-square rounded-full bg-slate-300 animate-pulse mb-auto"></div>
      <div class="flex flex-col w-full mr-auto">
        <div class="flex flex-col-reverse items-center light:text-slate-700 w-full">
          <div class=" h-4 bg-slate-300 dark:bg-slate-100 rounded-full animate-pulse mr-auto mt-1" :class="'w-[100px]'"></div>

          <div class="w-full h-4 flex space-x-2">
            <div class=" h-full bg-slate-300 dark:bg-slate-200 rounded-full animate-pulse w-16"></div>
            <div class=" h-full bg-slate-300 dark:bg-slate-100 rounded-full animate-pulse" :class="'w-[100px]'"></div>

          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-2 mt-4">
      <div class=" h-4 bg-slate-300 dark:bg-slate-100 rounded-lg animate-pulse" :class="'w-[100px]'"></div>
      <div class="h-3 bg-slate-300 dark:bg-slate-100 rounded-lg animate-pulse" :class="'w-[100px]'"></div>


      <div class="grid gap-1 grid-cols-4">
        <div v-for="id in 8" :key="id" class="w-full aspect-square rounded-sm overflow-hidden bg-slate-300 animate-pulse">
        </div>
      </div>
    </div>

    <div class="pt-2 flex items-center ">
      <div class="flex h-8 w-24 rounded-full bg-slate-300 animate-pulse">

      </div>
      <div class="p-1 rounded-md ml-auto flex items-center light:text-white  ">
        <span class="text-md tracking-wide pt-1 px-1 h-6 w-6 rounded-md bg-slate-300 animate-pulse"></span>
      </div>

      <div class="p-1 flex items-center ml-2">
        <span class="text-md tracking-wide pt-1 px-1 h-6 w-6 rounded-md bg-slate-300 animate-pulse"></span>
      </div>

    </div>
  </div>
</template>