import Head from 'next/head'

function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="flex flex-col border-2">
        <div className="text-[15px] font-normal p-2">
          I am front-end developer with 1+ years of commercial experience , and
          +2 years expirience in Web Development. I have so many pet-project
          which you can check in my Github.
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center mb-3 text-[30px] font-bold">Expirience</p>
        <div className="flex flex-col gap-4">
          <div className="pl-3">
            <p className="font-semibold  text-[#20px]">
              --Asan hidmet (6 month)
            </p>
            <p className="break-words">
              Build react application for state-company.
            </p>
          </div>
          <div className="pl-3 ">
            <p className="font-semibold text-[#20px] ">
              --Digital Agency Rubikon (8 month)
            </p>
            <p className="break-words">
              Made react-script for spa-application.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
