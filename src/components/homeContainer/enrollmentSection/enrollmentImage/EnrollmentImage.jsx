const EnrollmentImage = () => {
  return (
    <div class="relative right-0 top-28 h-[30rem] w-[30rem] rounded-full border lg:top-20 lg:h-[35rem] lg:w-[35rem]">
      <div class="absolute ml-8 mt-8 h-6/7 w-6/7 rounded-full border border-slate-400 lg:ml-10 lg:mt-10 ">
        <div class="transform-x-2 relative left-1/2 bottom-2 h-3 w-3 animate-rotation rounded-full border bg-yellow-300 transition-all duration-1000"></div>
      </div>
      <div class="absolute h-full w-full rounded-full border border-slate-400">
        <div class="transform-x-2 relative left-1/2 top-[98%] h-3 w-3 rounded-full border bg-yellow-300 transition-all duration-1000 "></div>
      </div>
      <div class="absolute ml-16 mt-16 h-5/7 w-5/7 rounded-full border bg-enrollImg bg-cover bg-no-repeat lg:ml-20 lg:mt-20 lg:border-slate-400"></div>
    </div>
  );
};

export { EnrollmentImage };
<ImageFrame
  frameClass="relative right-0 top-28 h-[30rem] w-[30rem] rounded-full border lg:top-20 lg:h-[35rem] lg:w-[35rem]"
  firstOrbitClass="absolute ml-8 mt-8 h-6/7 w-6/7 rounded-full border border-slate-400 lg:ml-10 lg:mt-10"
  secondOrbitClass="absolute h-full w-full rounded-full border border-slate-400"
  thirdOrbitClass="absolute ml-16 mt-16 h-5/7 w-5/7 rounded-full border bg-enrollImg bg-cover bg-no-repeat lg:ml-20 lg:mt-20 lg:border-slate-400"
/>;
