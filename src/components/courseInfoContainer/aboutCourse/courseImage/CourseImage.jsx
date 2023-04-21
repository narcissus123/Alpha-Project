const CourseImage = () => {
  return (
    <div class="relative right-0 top-28 lg:top-20 border w-[30rem] h-[30rem] lg:w-[35rem] lg:h-[35rem] rounded-full">
      <div class="absolute border border-slate-400 w-6/7 h-6/7 ml-8 mt-8 lg:ml-10 lg:mt-10 rounded-full ">
        <div class="relative left-1/2 bottom-2 border bg-yellow-300 w-3 h-3 rounded-full transition-all duration-1000 transform-x-2 animate-rotation"></div>
      </div>
      <div class="absolute border border-slate-400 w-full h-full rounded-full">
        <div class="relative left-1/2 top-[98%] border bg-yellow-300 w-3 h-3 rounded-full transition-all duration-1000 transform-x-2 "></div>
      </div>
      <div class="absolute border lg:border-slate-400 w-5/7 h-5/7 ml-16 mt-16 lg:ml-20 lg:mt-20 rounded-full bg-enrollImg bg-no-repeat bg-cover"></div>
    </div>
  );
};

export { CourseImage };
