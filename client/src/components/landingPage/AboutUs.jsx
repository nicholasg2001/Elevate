const AboutUs = ({ id }) => {
  return (
    <div id={id} className="py-24 sm:py-32 w-full bg-inherit">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white rounded-lg p-20 dark:bg-slate-900">
            <dt className="text-base leading-7 text-gray-600 dark:text-gray-300">
              Improved Longevity
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-200">
              +4.5 years
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white rounded-lg p-20 dark:bg-slate-900">
            <dt className="text-base leading-7 text-gray-600 dark:text-gray-200">
              Reduced Risk of Depression
            </dt>
            <dd className="order-first text-3xl font-semibold trackin dark:text-gray-200g-tight text-gray-900 sm:text-5xl dark:text-gray-200">
              -32%
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white rounded-lg p-20 dark:bg-slate-900">
            <dt className="text-base leading-7 text-gray-600 dark:text-gray-200">
              Lower Risk of Heart Disease
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-200">
              -35%
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default AboutUs;
