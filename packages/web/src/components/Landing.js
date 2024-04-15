import React from 'react';

import logo from '../images/logo.svg';
import braceCardImage from '../images/brace-card-image.png';
import justnoteCardImage from '../images/justnote-card-image.png';
import playStoreIcon from '../images/play-store-icon.svg';

const Landing = () => {

  return (
    <div className="bg-white">
      <main>
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 relative z-10 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div>
              <img className="h-11 w-auto" src={logo} alt="STX Apps" />
            </div>
            <div className="mt-28 sm:max-w-xl lg:mt-20">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                We build great apps <br className="hidden sm:inline" />on a better, user-owned, decentralized internet
              </h1>
            </div>
          </div>
          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                <svg className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="h-12"></div>
        <div className="relative bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-[26rem] px-4 grid gap-8 sm:px-6 lg:px-0 lg:grid-cols-2 lg:max-w-[46rem]">
            <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 mb-px ring-1 ring-black ring-opacity-5">
                <img className="h-48 w-full object-cover" src={braceCardImage} alt="" />
              </div>
              <div className="flex-1 bg-white flex flex-col justify-between divide-y divide-gray-200">
                <div className="flex-1 p-6">
                  <a className="block mt-2 rounded focus:outline-none focus:ring focus:ring-offset-4" href="https://brace.to" target="_blank" rel="noreferrer">
                    <p className="text-xl font-semibold text-gray-900">
                      Brace.to
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Save links to everything and visit them later easily, anytime, on any device, with Web3 technology that empowers you to truly own your account and data.
                    </p>
                  </a>
                </div>
                <div className="mt-6">
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <a className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:ring hover:ring-inset focus:outline-none focus:ring focus:ring-inset" href="https://brace.to" target="_blank" rel="noreferrer">
                        <svg className="w-6 h-6 text-gray-500" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.5743 18.9H12.6609C12.8478 15.6534 13.4652 12.663 14.4186 10.2522C12.8835 11.1928 11.5677 12.4513 10.5596 13.943C9.55151 15.4346 8.87456 17.1249 8.5743 18.9ZM21 4.20001C16.5444 4.20001 12.2712 5.97001 9.1206 9.12062C5.96999 12.2712 4.2 16.5444 4.2 21C4.2 25.4556 5.96999 29.7288 9.1206 32.8794C12.2712 36.03 16.5444 37.8 21 37.8C25.4556 37.8 29.7288 36.03 32.8794 32.8794C36.03 29.7288 37.8 25.4556 37.8 21C37.8 16.5444 36.03 12.2712 32.8794 9.12062C29.7288 5.97001 25.4556 4.20001 21 4.20001ZM21 8.40001C20.8404 8.40001 20.5128 8.46721 20.0235 8.95021C19.5237 9.44161 18.9798 10.2585 18.4758 11.4324C17.6589 13.3371 17.0625 15.9306 16.8672 18.9H25.1328C24.9375 15.9306 24.3411 13.3371 23.5242 11.4324C23.0202 10.2564 22.4742 9.44161 21.9765 8.95021C21.4872 8.46721 21.1596 8.40001 21 8.40001ZM29.3391 18.9C29.1522 15.6534 28.5348 12.663 27.5814 10.2522C29.1165 11.1928 30.4323 12.4513 31.4404 13.943C32.4485 15.4346 33.1254 17.1249 33.4257 18.9H29.3391ZM25.1328 23.1H16.8672C17.0625 26.0694 17.6589 28.6629 18.4758 30.5676C18.9798 31.7436 19.5258 32.5584 20.0235 33.0498C20.5128 33.5328 20.8404 33.6 21 33.6C21.1596 33.6 21.4872 33.5328 21.9765 33.0498C22.4763 32.5584 23.0223 31.7415 23.5242 30.5676C24.3411 28.6629 24.9375 26.0694 25.1328 23.1ZM27.5814 31.7478C28.5348 29.3391 29.1522 26.3466 29.3391 23.1H33.4257C33.1254 24.8751 32.4485 26.5654 31.4404 28.0571C30.4323 29.5487 29.1165 30.8072 27.5814 31.7478ZM14.4186 31.7478C13.4652 29.337 12.8478 26.3466 12.663 23.1H8.5743C8.87456 24.8751 9.55151 26.5654 10.5596 28.0571C11.5677 29.5487 12.8835 30.8072 14.4186 31.7478Z" />
                        </svg>
                      </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <a className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:ring hover:ring-inset focus:outline-none focus:ring focus:ring-inset" href="https://apps.apple.com/us/app/id1531456778" target="_blank" rel="noreferrer">
                        <svg className="w-6 h-6 text-gray-600" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M35.688 30.0549C35.1436 31.3127 34.4991 32.4704 33.7525 33.5348C32.7347 34.9859 31.9014 35.9903 31.2592 36.5481C30.2637 37.4636 29.1971 37.9325 28.0549 37.9591C27.2349 37.9591 26.246 37.7258 25.095 37.2525C23.9401 36.7814 22.8788 36.5481 21.9084 36.5481C20.8907 36.5481 19.7991 36.7814 18.6316 37.2525C17.4623 37.7258 16.5203 37.9725 15.8001 37.9969C14.7048 38.0436 13.6131 37.5614 12.5234 36.5481C11.8278 35.9414 10.9578 34.9014 9.91566 33.4281C8.79747 31.8549 7.87816 30.0305 7.15796 27.9505C6.38665 25.7039 6 23.5285 6 21.4223C6 19.0097 6.52132 16.9289 7.56551 15.1852C8.38615 13.7845 9.47789 12.6797 10.8443 11.8686C12.2107 11.0575 13.6871 10.6442 15.2771 10.6177C16.147 10.6177 17.2879 10.8868 18.7056 11.4157C20.1193 11.9464 21.0271 12.2155 21.4251 12.2155C21.7226 12.2155 22.731 11.9008 24.4405 11.2735C26.0572 10.6917 27.4216 10.4509 28.5393 10.5457C31.5681 10.7902 33.8436 11.9841 35.3569 14.1352C32.6481 15.7765 31.3081 18.0753 31.3348 21.0243C31.3592 23.3213 32.1925 25.2328 33.8303 26.7506C34.5725 27.455 35.4013 27.9994 36.3235 28.3861C36.1235 28.9661 35.9124 29.5216 35.688 30.0549V30.0549ZM28.7415 2.7202C28.7415 4.52062 28.0838 6.20165 26.7727 7.7576C25.1905 9.60733 23.2768 10.6762 21.2015 10.5075C21.1751 10.2915 21.1598 10.0642 21.1598 9.82532C21.1598 8.09693 21.9122 6.24721 23.2484 4.73481C23.9155 3.96906 24.7639 3.33234 25.7927 2.82442C26.8194 2.32408 27.7904 2.04738 28.7037 2C28.7304 2.24069 28.7415 2.48139 28.7415 2.72018V2.7202Z" />
                        </svg>
                      </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <a className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:ring hover:ring-inset focus:outline-none focus:ring focus:ring-inset" href="https://play.google.com/store/apps/details?id=com.bracedotto" target="_blank" rel="noreferrer">
                        <img className="w-6 h-6" src={playStoreIcon} aria-hidden="true" alt="Play Store" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 mb-px ring-1 ring-black ring-opacity-5">
                <img className="h-48 w-full object-cover" src={justnoteCardImage} alt="" />
              </div>
              <div className="flex-1 bg-white flex flex-col justify-between divide-y divide-gray-200">
                <div className="flex-1 p-6">
                  <a className="block mt-2 rounded focus:outline-none focus:ring focus:ring-offset-4" href="https://justnote.cc" target="_blank" rel="noreferrer">
                    <p className="text-xl font-semibold text-gray-900">
                      Justnote
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Justnote is a privacy-focused note-taking app that you can use easily, take notes rapidly, and, importantly, truly own your account and data.
                    </p>
                  </a>
                </div>
                <div className="mt-6">
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <a className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:ring hover:ring-inset focus:outline-none focus:ring focus:ring-inset" href="https://justnote.cc" target="_blank" rel="noreferrer">
                        <svg className="w-6 h-6 text-gray-500" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.5743 18.9H12.6609C12.8478 15.6534 13.4652 12.663 14.4186 10.2522C12.8835 11.1928 11.5677 12.4513 10.5596 13.943C9.55151 15.4346 8.87456 17.1249 8.5743 18.9ZM21 4.20001C16.5444 4.20001 12.2712 5.97001 9.1206 9.12062C5.96999 12.2712 4.2 16.5444 4.2 21C4.2 25.4556 5.96999 29.7288 9.1206 32.8794C12.2712 36.03 16.5444 37.8 21 37.8C25.4556 37.8 29.7288 36.03 32.8794 32.8794C36.03 29.7288 37.8 25.4556 37.8 21C37.8 16.5444 36.03 12.2712 32.8794 9.12062C29.7288 5.97001 25.4556 4.20001 21 4.20001ZM21 8.40001C20.8404 8.40001 20.5128 8.46721 20.0235 8.95021C19.5237 9.44161 18.9798 10.2585 18.4758 11.4324C17.6589 13.3371 17.0625 15.9306 16.8672 18.9H25.1328C24.9375 15.9306 24.3411 13.3371 23.5242 11.4324C23.0202 10.2564 22.4742 9.44161 21.9765 8.95021C21.4872 8.46721 21.1596 8.40001 21 8.40001ZM29.3391 18.9C29.1522 15.6534 28.5348 12.663 27.5814 10.2522C29.1165 11.1928 30.4323 12.4513 31.4404 13.943C32.4485 15.4346 33.1254 17.1249 33.4257 18.9H29.3391ZM25.1328 23.1H16.8672C17.0625 26.0694 17.6589 28.6629 18.4758 30.5676C18.9798 31.7436 19.5258 32.5584 20.0235 33.0498C20.5128 33.5328 20.8404 33.6 21 33.6C21.1596 33.6 21.4872 33.5328 21.9765 33.0498C22.4763 32.5584 23.0223 31.7415 23.5242 30.5676C24.3411 28.6629 24.9375 26.0694 25.1328 23.1ZM27.5814 31.7478C28.5348 29.3391 29.1522 26.3466 29.3391 23.1H33.4257C33.1254 24.8751 32.4485 26.5654 31.4404 28.0571C30.4323 29.5487 29.1165 30.8072 27.5814 31.7478ZM14.4186 31.7478C13.4652 29.337 12.8478 26.3466 12.663 23.1H8.5743C8.87456 24.8751 9.55151 26.5654 10.5596 28.0571C11.5677 29.5487 12.8835 30.8072 14.4186 31.7478Z" />
                        </svg>
                      </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <a className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:ring hover:ring-inset focus:outline-none focus:ring focus:ring-inset" href="https://apps.apple.com/us/app/id1570111019" target="_blank" rel="noreferrer">
                        <svg className="w-6 h-6 text-gray-600" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M35.688 30.0549C35.1436 31.3127 34.4991 32.4704 33.7525 33.5348C32.7347 34.9859 31.9014 35.9903 31.2592 36.5481C30.2637 37.4636 29.1971 37.9325 28.0549 37.9591C27.2349 37.9591 26.246 37.7258 25.095 37.2525C23.9401 36.7814 22.8788 36.5481 21.9084 36.5481C20.8907 36.5481 19.7991 36.7814 18.6316 37.2525C17.4623 37.7258 16.5203 37.9725 15.8001 37.9969C14.7048 38.0436 13.6131 37.5614 12.5234 36.5481C11.8278 35.9414 10.9578 34.9014 9.91566 33.4281C8.79747 31.8549 7.87816 30.0305 7.15796 27.9505C6.38665 25.7039 6 23.5285 6 21.4223C6 19.0097 6.52132 16.9289 7.56551 15.1852C8.38615 13.7845 9.47789 12.6797 10.8443 11.8686C12.2107 11.0575 13.6871 10.6442 15.2771 10.6177C16.147 10.6177 17.2879 10.8868 18.7056 11.4157C20.1193 11.9464 21.0271 12.2155 21.4251 12.2155C21.7226 12.2155 22.731 11.9008 24.4405 11.2735C26.0572 10.6917 27.4216 10.4509 28.5393 10.5457C31.5681 10.7902 33.8436 11.9841 35.3569 14.1352C32.6481 15.7765 31.3081 18.0753 31.3348 21.0243C31.3592 23.3213 32.1925 25.2328 33.8303 26.7506C34.5725 27.455 35.4013 27.9994 36.3235 28.3861C36.1235 28.9661 35.9124 29.5216 35.688 30.0549V30.0549ZM28.7415 2.7202C28.7415 4.52062 28.0838 6.20165 26.7727 7.7576C25.1905 9.60733 23.2768 10.6762 21.2015 10.5075C21.1751 10.2915 21.1598 10.0642 21.1598 9.82532C21.1598 8.09693 21.9122 6.24721 23.2484 4.73481C23.9155 3.96906 24.7639 3.33234 25.7927 2.82442C26.8194 2.32408 27.7904 2.04738 28.7037 2C28.7304 2.24069 28.7415 2.48139 28.7415 2.72018V2.7202Z" />
                        </svg>
                      </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <a className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:ring hover:ring-inset focus:outline-none focus:ring focus:ring-inset" href="https://play.google.com/store/apps/details?id=com.justnotecc" target="_blank" rel="noreferrer">
                        <img className="w-6 h-6" src={playStoreIcon} aria-hidden="true" alt="Play Store" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-20 overflow-hidden lg:py-32">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
                <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                </svg>
              </div>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Utilizing Web3 technology from <a className="text-indigo-600 rounded hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500" href="https://www.hiro.so/stacks-js" target="_blank" rel="noreferrer">Stacks</a>
                </h2>
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-lg">
                    A technology that allows you to truly own your accounts and your data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-44">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  To provide the best user experience.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                  Safety, Privacy, and Convenience are all you can get.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-12 overflow-hidden sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"></div>
            <svg className="absolute top-8 left-1/2 -ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative py-10 overflow-hidden sm:w-1/2 sm:px-12 sm:py-20">
              <div className="relative">
                <div className="text-left sm:text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Contact us
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-500">
                    <a className="rounded hover:underline focus:outline-none focus:ring-2 focus:ring-gray-500" href="&#109;&#097;&#105;&#108;&#116;&#111;:&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#115;&#116;&#120;&#097;&#112;&#112;&#115;&#046;&#099;&#111;&#109;"><span className="e-mail" data-user="troppus" data-website="moc.sppaxts"></span></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-24 bg-gray-900 sm:mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 sm:flex sm:items-end sm:justify-between lg:px-8">
          <div className="flex justify-center items-center sm:justify-start">
            <img className="h-8 w-auto" src={logo} alt="STX Apps" />
            <div className="text-2xl font-extrabold text-white ml-2">STX Apps</div>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="flex justify-center sm:justify-end">
              <a className="text-gray-400 hover:text-gray-500" href="https://github.com/stxapps" target="_blank" rel="noreferrer">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-center text-base text-gray-400 sm:text-right">
              Made with ❤ in the Land of Smiles
            </p>
            <p className="mt-1 text-center text-base text-gray-400 sm:text-right">
              &copy; {(new Date()).getFullYear()} STX Apps Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default React.memo(Landing);
