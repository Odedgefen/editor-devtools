(function contentScript() {
  function addLink(href, svg) {
    const link = document.createElement('a');
    link.style.float = 'left';
    link.style.marginLeft = '10px';
    link.href = href;
    link.target = '_blank';
    link.innerHTML = svg;

    const element = document.getElementsByClassName('gh-header-actions')[0];
    element.appendChild(link);
  }

  function addTeamCityLink() {
    const teamcitySvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="35" height="35" viewBox="0 0 70 70" xml:space="preserve"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1.774" y1="31.273" x2="40.166" y2="31.273"><stop offset="0" stop-color="#905CFB"/><stop offset=".068" stop-color="#776CF9"/><stop offset=".173" stop-color="#5681F7"/><stop offset=".286" stop-color="#3B92F5"/><stop offset=".41" stop-color="#269FF4"/><stop offset=".547" stop-color="#17A9F3"/><stop offset=".711" stop-color="#0FAEF2"/><stop offset=".968" stop-color="#0CB0F2"/></linearGradient><path d="M39.7,47.9l-6.1-34c-0.4-2.4-1.2-4.8-2.7-7.1c-2-3.2-5.2-5.4-8.8-6.3 C7.9-2.9-2.6,11.3,3.6,23.9c0,0,0,0,0,0l14.8,31.7c0.4,1,1,2,1.7,2.9c1.2,1.6,2.8,2.8,4.7,3.4C34.4,64.9,42.1,56.4,39.7,47.9z" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="5.311" y1="9.669" x2="69.228" y2="43.866"><stop offset="0" stop-color="#905CFB"/><stop offset=".068" stop-color="#776CF9"/><stop offset=".173" stop-color="#5681F7"/><stop offset=".286" stop-color="#3B92F5"/><stop offset=".41" stop-color="#269FF4"/><stop offset=".547" stop-color="#17A9F3"/><stop offset=".711" stop-color="#0FAEF2"/><stop offset=".968" stop-color="#0CB0F2"/></linearGradient><path d="M67.4,26.5c-1.4-2.2-3.4-3.9-5.7-4.9L25.5,1.7l0,0c-1-0.5-2.1-1-3.3-1.3 C6.7-3.2-4.4,13.8,5.5,27c1.5,2,3.6,3.6,6,4.5L48,47.9c0.8,0.5,1.6,0.8,2.5,1.1C64.5,53.4,75.1,38.6,67.4,26.5z" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-19.284" y1="70.82" x2="55.983" y2="33.186"><stop offset="0" stop-color="#3BEA62"/><stop offset=".117" stop-color="#31DE80"/><stop offset=".302" stop-color="#24CEA8"/><stop offset=".484" stop-color="#1AC1C9"/><stop offset=".659" stop-color="#12B7DF"/><stop offset=".824" stop-color="#0EB2ED"/><stop offset=".968" stop-color="#0CB0F2"/></linearGradient><path d="M67.4,26.5c-1.8-2.8-4.6-4.8-7.9-5.6c-3.5-0.8-6.8-0.5-9.6,0.7L11.4,36.1 c0,0-0.2,0.1-0.6,0.4C0.9,40.4-4,53.3,4,64c1.8,2.4,4.3,4.2,7.1,5c5.3,1.6,10.1,1,14-1.1c0,0,0.1,0,0.1,0l37.6-20.1 c0,0,0,0,0.1-0.1C69.5,43.9,72.6,34.6,67.4,26.5z" fill="url(#c)"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="38.944" y1="5.85" x2="5.423" y2="77.509"><stop offset="0" stop-color="#3BEA62"/><stop offset=".094" stop-color="#2FDB87"/><stop offset=".196" stop-color="#24CEA8"/><stop offset=".306" stop-color="#1BC3C3"/><stop offset=".426" stop-color="#14BAD8"/><stop offset=".56" stop-color="#10B5E7"/><stop offset=".719" stop-color="#0DB1EF"/><stop offset=".968" stop-color="#0CB0F2"/></linearGradient><path d="M50.3,12.8c1.2-2.7,1.1-6-0.9-9c-1.1-1.8-2.9-3-4.9-3.5c-4.5-1.1-8.3,1-10.1,4.2L3.5,42 c0,0,0,0,0,0.1C-0.9,47.9-1.6,56.5,4,64c1.8,2.4,4.3,4.2,7.1,5c10.5,3.3,19.3-2.5,22.1-10.8L50.3,12.8z" fill="url(#d)"/><g><path fill="#000" d="M13.4 13.4H56.6V56.6H13.4z"/><path fill="#FFF" d="M17.5 48.5H33.7V51.2H17.5z"/><path fill="#FFF" d="M22.9 22.7L17.5 22.7 17.5 19.1 32.3 19.1 32.3 22.7 26.8 22.7 26.8 37 22.9 37z"/><path d="M32.5,28.1L32.5,28.1c0-5.1,3.8-9.3,9.3-9.3c3.4,0,5.4,1.1,7.1,2.8l-2.5,2.9c-1.4-1.3-2.8-2-4.6-2 c-3,0-5.2,2.5-5.2,5.6V28c0,3.1,2.1,5.6,5.2,5.6c2,0,3.3-0.8,4.7-2.1l2.5,2.5c-1.8,2-3.9,3.2-7.3,3.2 C36.4,37.3,32.5,33.2,32.5,28.1" fill="#FFF"/></g></svg>';
    const getTeamcityUrl = (project, pullRequestNumber) => {
      switch (project) {
        case 'santa':
          return `http://pullrequest-tc.dev.wixpress.com/project.html?projectId=Santa_Santa&branch_Santa_Santa=${pullRequestNumber}/merge`;
        case 'santa-editor':
          return `http://pullrequest-tc.dev.wixpress.com/viewType.html?buildTypeId=MonoRepoTest_SantaEditor&branch_MonoRepoTest=${pullRequestNumber}&tab=buildTypeStatusDiv`;
        case 'santa-core':
          return `http://pullrequest-tc.dev.wixpress.com/viewType.html?buildTypeId=MonoRepoTest_SantaCore&branch_MonoRepoTest=${pullRequestNumber}&tab=buildTypeStatusDiv`;
        case 'bolt':
          return `http://pullrequest-tc.dev.wixpress.com/project.html?projectId=Bolt&branch_Bolt=${pullRequestNumber}/merge`;
        default:
          return '';
      }
    };

    const projectRegEx = /https:\/\/github.com\/wix-private\/(.*)\/pull\/(\d+)/;
    const [, project, pullRequestNumber] = projectRegEx.exec(location.href);
    const href = getTeamcityUrl(project, pullRequestNumber);

    if (href) {
      addLink(href, teamcitySvg);
    }
  }

  function addJiraLink() {
    const [jiraTicketId] = /WEED-\d+/.exec(document.body.innerText);
    if (jiraTicketId) {
      const jiraSvg = '<svg width="35" height="35" viewBox="0 0 512 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g fill="#264970"><g transform="translate(157.363029, 47.893096)"><path d="M311.545728,3.49163474 C311.07478,1.99554566 309.68816,0.97952784 308.120232,0.97952784 L274.600766,0.97952784 C273.032837,0.97952784 271.647359,1.99554566 271.17641,3.49163474 L228.886806,137.620811 C228.542432,138.712089 228.738566,139.902575 229.414771,140.826227 C230.090976,141.74988 231.16743,142.293808 232.312303,142.293808 L255.387653,142.293808 C256.979528,142.293808 258.382111,141.247002 258.832535,139.718984 L287.954958,41.0717506 C287.954958,41.0717506 288.716686,38.6075367 291.354227,38.6075367 C294.0351,38.6075367 294.688499,41.1686771 294.688499,41.1709577 L308.200053,87.9511091 L289.636918,87.9511091 C288.027938,87.9511091 286.615091,89.0207216 286.179492,90.569265 L280.970548,109.087929 C280.666085,110.171225 280.886165,111.333203 281.565791,112.228347 C282.245416,113.125773 283.303626,113.651457 284.429114,113.651457 L315.754619,113.651457 L323.893024,139.769158 C324.360552,141.270949 325.750592,142.293808 327.323082,142.293808 L350.409835,142.293808 C351.554708,142.293808 352.630022,141.74988 353.306227,140.826227 C353.983572,139.902575 354.179706,138.712089 353.835332,137.620811 L311.545728,3.49163474"></path><path d="M153.918147,27.0949488 L181.851225,27.0949488 C196.296695,27.0949488 199.196508,32.7794031 199.196508,41.9520713 L199.196508,55.650637 C199.196508,67.0674388 194.821131,70.919412 181.851225,70.919412 L153.918147,70.919412 L153.918147,27.0949488 L153.918147,27.0949488 Z M239.206628,136.364187 L208.512855,92.0881604 C221.729069,86.6055412 228.427261,75.1157595 228.427261,57.9335412 L228.427261,39.8767038 C228.427261,12.9744677 214.38204,0.97952784 182.887768,0.97952784 L128.280517,0.97952784 C126.297514,0.97952784 124.688535,2.58736748 124.688535,4.57036971 L124.688535,138.700686 C124.688535,140.685969 126.297514,142.293808 128.280517,142.293808 L150.326165,142.293808 C152.309167,142.293808 153.918147,140.685969 153.918147,138.700686 L153.918147,96.6345835 L176.479216,96.6345835 L207.162726,140.752107 C207.83437,141.716811 208.935911,142.293808 210.111572,142.293808 L236.456196,142.293808 L236.479002,142.293808 C238.463145,142.293808 240.070984,140.685969 240.070984,138.700686 C240.070984,137.807822 239.745996,136.991359 239.206628,136.364187 L239.206628,136.364187 Z"></path><path d="M97.9048909,0.97952784 L75.8592428,0.97952784 C73.8762405,0.97952784 72.2672606,2.58736748 72.2672606,4.57036971 L72.2672606,138.700686 C72.2672606,140.685969 73.8762405,142.293808 75.8592428,142.293808 L97.9048909,142.293808 C99.8890334,142.293808 101.498013,140.685969 101.498013,138.700686 L101.498013,4.57036971 C101.498013,2.58736748 99.8890334,0.97952784 97.9048909,0.97952784"></path><path d="M46.2761336,0.97952784 L23.9625122,0.97952784 C22.0730156,0.97952784 20.5324543,2.5121069 20.5324543,4.40046325 L20.5324543,109.357042 C20.5324543,122.547029 10.4817461,126.882494 3.67978619,127.229149 C2.7629755,127.273621 1.69564365,127.851759 1.10952339,128.708134 C0.521122494,129.567929 0.356917595,130.646664 0.662521158,131.641016 L6.08812472,149.288481 C6.5305657,150.733256 8.08709131,151.66147 10.6197238,151.66147 C31.9697817,151.66147 49.697069,134.898886 49.697069,112.430183 L49.697069,4.40160356 C49.697069,3.49391537 49.3378708,2.62271715 48.694735,1.9807216 C48.0538797,1.33872606 47.1838218,0.97952784 46.2761336,0.97952784"></path></g><g><path d="M30.8465746,12.2811581 C23.99102,12.2811581 18.4399822,17.8253541 18.4399822,24.6980134 C18.4399822,31.5535679 23.99102,37.1171492 30.8465746,37.1171492 C37.7078307,37.1171492 43.253167,31.5535679 43.253167,24.6980134 C43.253167,17.8253541 37.7078307,12.2811581 30.8465746,12.2811581"></path><path d="M112.356062,12.2811581 C105.497087,12.2811581 99.9528909,17.8253541 99.9528909,24.6980134 C99.9528909,31.5535679 105.497087,37.1171492 112.356062,37.1171492 C119.195653,37.1171492 124.760374,31.5535679 124.760374,24.6980134 C124.760374,17.8253541 119.195653,12.2902806 112.356062,12.2811581"></path><path d="M71.6013185,0.951020045 C64.7457639,0.951020045 59.1947261,6.49407572 59.1947261,13.3690156 C59.1947261,20.2245702 64.7457639,25.7892918 71.6013185,25.7892918 C78.4614343,25.7892918 84.0056303,20.2245702 84.0056303,13.3690156 C84.0056303,6.49407572 78.4614343,0.951020045 71.6013185,0.951020045"></path><path d="M141.686022,46.8816392 C140.994993,46.3570958 140.165987,46.0845612 139.324437,46.0845612 C138.856909,46.0845612 138.38482,46.1700846 137.937817,46.3422717 C129.53714,49.5545301 121.006468,51.993657 113.220419,53.8078931 C111.631964,54.1784944 110.349114,55.3575768 109.817728,56.7738441 C104.144677,72.3128731 89.6592962,87.109559 74.4612205,102.607537 C73.8511537,103.186815 72.9970601,103.950824 71.6058797,103.950824 C70.2181203,103.950824 69.3720089,103.210762 68.750539,102.607537 C53.5547439,87.109559 39.069363,72.3641871 33.3940312,56.8240178 C32.8615056,55.4088909 31.5786548,54.2298085 29.9936214,53.8580668 C22.2030111,52.0438307 13.6506726,49.5294432 5.26025835,46.3171849 C4.8109755,46.1461381 4.33888641,46.0606147 3.87021826,46.0606147 C3.02866815,46.0606147 2.21448552,46.325167 1.52573719,46.8508508 C0.449282851,47.6718753 -0.109469933,49.0037595 0.0182449889,50.2831893 C1.3045167,63.2052027 6.41083296,75.8375768 15.6256927,89.0754566 C24.2875011,101.52082 35.5857105,113.04139 46.5087572,124.181096 C66.6352606,144.710129 85.6476793,164.098851 87.3159555,186.582379 C87.4664766,188.609853 89.1564187,190.182343 91.1941559,190.182343 L114.839661,190.182343 C115.904713,190.182343 116.921871,189.744463 117.657372,188.972472 C118.389452,188.201621 118.777158,187.166218 118.723563,186.101167 C117.98008,171.069577 112.322993,156.016321 101.429595,140.086165 C99.1466904,136.746192 96.7018619,133.496303 94.1452829,130.315973 C93.1064588,129.020579 93.5409176,127.411599 94.3357149,126.599697 C95.1213898,125.795777 95.9104855,124.994138 96.7041425,124.181096 C107.62833,113.040249 118.924258,101.52082 127.588347,89.0754566 C136.802067,75.8364365 141.906102,63.2781826 143.193514,50.3584499 C143.32237,49.0596347 142.732829,47.6821381 141.686022,46.8816392"></path><path d="M46.2316615,141.670058 C45.6729087,141.085078 44.8507439,140.487555 43.4709666,140.487555 C41.7057639,140.487555 40.6589577,141.707688 40.2632695,142.312053 C30.3174699,157.447412 25.1803653,171.732098 24.469951,186.087483 C24.418637,187.145693 24.8086236,188.19706 25.5407038,188.970192 C26.2762049,189.738762 27.3070468,190.182343 28.3698174,190.182343 L51.975412,190.182343 C54.0063073,190.182343 55.7167751,188.592748 55.8661559,186.567555 C56.3804365,179.649283 58.5344855,172.713906 62.4560178,165.426174 C63.8152695,162.904944 62.7593408,160.536517 61.9770869,159.52392 C58.086343,154.464356 53.32098,149.067261 46.2316615,141.670058"></path><path d="M71.6275457,58.4660668 C79.0384321,58.4660668 83.3362673,58.0213452 84.8460401,58.0213452 C86.6751002,58.0213452 88.4231982,59.5197149 88.4231982,61.6178886 C88.4231982,62.2302361 88.2783786,62.6681158 88.1346993,63.0546815 C87.1517506,65.6819599 82.6726058,75.1351448 74.3335056,83.243902 C73.3984499,84.1538708 72.3379599,84.3237773 71.6081604,84.3237773 L71.5990379,84.3237773 C70.8703786,84.3237773 69.811029,84.1538708 68.8759733,83.243902 C60.5368731,75.1351448 56.056588,65.6819599 55.0759198,63.0546815 C54.9311002,62.6681158 54.7862806,62.2302361 54.7862806,61.6178886 C54.7862806,59.5197149 56.5366592,58.0213452 58.3657194,58.0213452 C59.8754922,58.0213452 64.1710468,58.4660668 71.5785122,58.4660668 L71.6275457,58.4660668"></path></g></g></svg>';
      const jiraUrl = `https://jira.wixpress.com/browse/${jiraTicketId}`;
      addLink(jiraUrl, jiraSvg);
    }
  }

  addTeamCityLink();
  addJiraLink();
}());
