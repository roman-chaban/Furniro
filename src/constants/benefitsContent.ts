export type Benefits = {
  svg: string;
  name: string;
  description: string;
}

export const benefitsDetail: Benefits[] = [{
  svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path d="M49.3547 3.51562C48.0744 3.51562 46.8741 3.86121 45.839 4.46156V1.75781C45.839 0.787031 45.052 0 44.0812 0H15.9562C14.9853 0 14.1983 0.787031 14.1983 1.75781V4.48301C13.155 3.8693 11.941 3.51562 10.6455 3.51562C6.76848 3.51562 3.61426 6.66984 3.61426 10.5469C3.61426 13.5041 4.49059 16.3615 6.14844 18.8102C8.97078 22.9789 12.4511 24.0607 15.331 25.2127C16.9916 29.348 20.3496 32.6252 24.5384 34.1769L23.2422 42.4219H22.9875C20.0797 42.4219 17.714 44.7875 17.714 47.6953V56.4844H15.9562C14.9854 56.4844 14.1984 57.2714 14.1984 58.2422C14.1984 59.213 14.9854 60 15.9562 60H44.0812C45.052 60 45.839 59.213 45.839 58.2422C45.839 57.2714 45.052 56.4844 44.0812 56.4844H42.3234V47.6953C42.3234 44.7875 39.9577 42.4219 37.05 42.4219H36.7952L35.4991 34.177C39.6941 32.623 43.0558 29.3386 44.7139 25.1948C47.4344 24.1066 51.0005 23.0217 53.8518 18.8102C55.5097 16.3615 56.386 13.504 56.386 10.5469C56.3859 6.66984 53.2317 3.51562 49.3547 3.51562ZM14.1853 20.968C9.89926 19.2536 7.12988 15.1631 7.12988 10.5469C7.12988 8.60836 8.70699 7.03125 10.6455 7.03125C12.584 7.03125 14.1611 8.60836 14.1611 10.5469C14.1611 10.6705 14.1741 10.791 14.1984 10.9073V19.3359C14.1984 19.9009 14.2288 20.4588 14.2869 21.0087L14.1853 20.968ZM38.8078 56.4844H21.2296V52.9688H38.8078V56.4844ZM37.05 45.9375C38.0192 45.9375 38.8078 46.7261 38.8078 47.6953V49.4531H21.2296V47.6953C21.2296 46.7261 22.0182 45.9375 22.9875 45.9375C23.9411 45.9375 34.8134 45.9375 37.05 45.9375ZM26.801 42.4219L27.9642 35.023C28.6368 35.1107 29.3225 35.1562 30.0187 35.1562C30.7149 35.1562 31.4006 35.1105 32.0732 35.023L33.2364 42.4219H26.801ZM42.3234 19.3359C42.3234 26.1207 36.8035 31.6406 30.0187 31.6406C23.2339 31.6406 17.714 26.1207 17.714 19.3359V10.5469H42.3234V19.3359ZM42.3234 7.03125H17.714V3.51562H42.3234V7.03125ZM45.8148 20.968L45.7523 20.993C45.8093 20.4483 45.8389 19.8955 45.8389 19.3359V10.5469C45.839 8.60836 47.4161 7.03125 49.3547 7.03125C51.2932 7.03125 52.8703 8.60836 52.8703 10.5469C52.8703 15.1631 50.1009 19.2537 45.8148 20.968Z" fill="#242424"/>
    </svg>
  `,
  name: "High Quality",
  description: "crafted from top materials",
},
{
  svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
      <g clip-path="url(#clip0_34_559)">
        <path d="M57.1195 21.2612C56.3278 18.8097 56.6653 15.1296 54.6075 12.2882C52.5335 9.42438 48.9263 8.61039 46.8895 7.1207C44.8741 5.64672 42.9991 2.43918 39.609 1.33293C36.3145 0.257852 32.9456 1.71672 30.3335 1.71672C27.7217 1.71672 24.3531 0.2575 21.058 1.33281C17.6685 2.43883 15.7919 5.64707 13.7778 7.12035C11.7432 8.60828 8.13338 9.42449 6.05975 12.2879C4.00369 15.127 4.33779 18.8154 3.54748 21.2611C2.79537 23.5888 0.333496 26.3825 0.333496 30.0003C0.333496 33.6203 2.79256 36.4032 3.54748 38.7393C4.3392 41.1909 4.0017 44.8709 6.05951 47.7123C8.13338 50.5763 11.7404 51.3902 13.7775 52.88C15.7925 54.3537 17.6679 57.5615 21.058 58.6676C24.3503 59.742 27.7244 58.2838 30.3335 58.2838C32.9389 58.2838 36.321 59.7405 39.609 58.6677C42.9987 57.5617 44.874 54.3542 46.8892 52.8802C48.9238 51.3923 52.5336 50.5761 54.6072 47.7127C56.6634 44.8735 56.3291 41.1854 57.1195 38.7394C57.8716 36.4116 60.3335 33.618 60.3335 30.0003C60.3335 26.3805 57.875 23.5984 57.1195 21.2612ZM52.6592 37.298C51.7364 40.1545 51.9781 43.3512 50.811 44.963C49.6281 46.5962 46.5204 47.3423 44.1224 49.0963C41.7506 50.8308 40.0883 53.5804 38.1549 54.2112C36.3259 54.8082 33.3451 53.5961 30.3336 53.5961C27.3001 53.5961 24.35 54.8107 22.5122 54.2112C20.579 53.5804 18.9191 50.8327 16.5447 49.0962C14.1609 47.3528 11.0355 46.5914 9.85604 44.9628C8.6926 43.3564 8.92521 40.1375 8.00799 37.2981C7.10893 34.5162 5.021 32.1074 5.021 30.0003C5.021 27.891 7.10705 25.4905 8.00775 22.7025C8.9306 19.8462 8.68885 16.6492 9.85604 15.0375C11.0382 13.4054 14.1483 12.6569 16.5447 10.9042C18.924 9.1641 20.5759 6.42109 22.5119 5.78934C24.3395 5.19309 27.33 6.40445 30.3334 6.40445C33.3724 6.40445 36.3151 5.18898 38.1548 5.78934C40.0877 6.42004 41.7491 9.16879 44.1224 10.9043C46.5058 12.6477 49.6315 13.4091 50.811 15.0377C51.9746 16.6444 51.7407 19.86 52.659 22.7023V22.7024C53.5581 25.4843 55.646 27.8931 55.646 30.0003C55.646 32.1095 53.5599 34.51 52.6592 37.298ZM41.1315 22.4774C42.0469 23.3928 42.0469 24.8767 41.1315 25.792L29.4003 37.5231C28.485 38.4385 27.0009 38.4384 26.0857 37.5231L19.5356 30.973C18.6203 30.0577 18.6201 28.5737 19.5355 27.6585C20.4508 26.7433 21.935 26.7432 22.85 27.6585L27.7429 32.5513L37.8167 22.4775C38.7321 21.5622 40.2162 21.5622 41.1315 22.4774Z" fill="#242424"/>
      </g>
      <defs>
        <clipPath id="clip0_34_559">
          <rect width="60" height="60" fill="white" transform="translate(0.333496)"/>
        </clipPath>
      </defs>
    </svg>
  `,
  name: "Warranty Protection",
  description: "Over 2 years",
  },
  {
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
        <g clip-path="url(#clip0_34_567)">
          <path d="M56.0147 31.1019V3.77964C56.0147 2.80489 55.2244 2.01465 54.2497 2.01465H6.96186C5.98711 2.01465 5.19687 2.80489 5.19687 3.77964V33.28C4.34544 33.404 3.51307 33.7346 2.77671 34.2812C0.4554 35.9273 -0.0936297 39.6109 1.8508 41.8827L9.80067 51.5204C14.7217 57.2798 19.9492 57.9854 27.7206 57.9854C34.3896 57.9854 37.3711 58.0148 43.1832 56.6905L48.8427 55.3369C49.7604 56.6184 51.2172 57.4485 52.855 57.4485H55.643C58.4131 57.4485 60.6667 55.0744 60.6667 52.1561V36.3784C60.6668 33.592 58.6117 31.3031 56.0147 31.1019ZM48.0814 34.7326L45.7297 33.5382C41.8631 31.5865 37.3926 31.5142 33.4649 33.3403C32.3934 33.7618 30.0562 35.1759 28.8438 35.1286H20.6835C17.9767 35.1286 15.7745 37.3307 15.7745 40.0376V41.3247C15.7593 41.3087 15.7434 41.2936 15.7284 41.2773L9.90104 34.9519C9.54839 34.5692 9.15221 34.2489 8.72696 33.9919V16.481H23.1708V22.951C23.1708 23.9257 23.9611 24.7159 24.9358 24.7159H36.073C37.0478 24.7159 37.838 23.9257 37.838 22.951V16.481H52.4848V31.1018C50.4226 31.2611 48.703 32.7364 48.0814 34.7326ZM26.7007 16.481H34.3079V21.186H26.7007V16.481ZM52.4847 12.951H37.838V5.54463H52.4848V12.951H52.4847ZM34.308 5.54463V12.9511H26.7008V5.54463H34.308ZM23.1707 5.54463V12.9511H8.72685V5.54463H23.1707ZM42.364 53.2568C36.9949 54.4865 33.7613 54.4367 27.7839 54.4367C20.4886 54.4367 16.9637 54.3188 12.5239 49.274L4.57406 39.6363C3.19125 37.8357 5.69589 35.7101 7.30485 37.3435L13.1323 43.669C14.6724 45.2941 16.6105 46.1885 18.9992 46.2411H35.1557C36.1304 46.2411 36.9207 45.4508 36.9207 44.4761C36.9207 43.5013 36.1304 42.7111 35.1557 42.7111H19.3043V40.0373C19.3043 39.277 19.9229 38.6583 20.6834 38.6583H28.8437C30.6821 38.79 33.3356 37.2549 34.9531 36.541C37.8947 35.1733 41.243 35.2274 44.1351 36.6872L47.8315 38.5646V51.9489L42.364 53.2568ZM57.1369 52.156C57.1369 53.1278 56.4668 53.9184 55.6431 53.9184H52.8551C52.0315 53.9184 51.3615 53.1278 51.3615 52.156V36.3784C51.3615 35.4066 52.0316 34.6159 52.8551 34.6159H55.6431C56.4668 34.6159 57.1369 35.4065 57.1369 36.3784V52.156Z" fill="#242424"/>
        </g>
        <defs>
          <clipPath id="clip0_34_567">
            <rect width="60" height="60" fill="white" transform="translate(0.666748)"/>
          </clipPath>
        </defs>
      </svg>
    `,
    name: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <g clip-path="url(#clip0_34_573)">
          <path d="M54.6935 23.9628C54.2992 10.6825 43.3741 0 29.9999 0C16.6257 0 5.70059 10.6825 5.30612 23.9628L3.5293 25.7396V37.7898L5.294 39.5545V47.7647C5.294 52.5652 9.19941 56.4706 13.9999 56.4706H16.1858C16.9142 58.5246 18.8758 60 21.1764 60H24.7058C27.0079 60 28.9705 58.5225 29.6978 56.4664C29.7986 56.4681 29.8997 56.4706 29.9999 56.4706C38.522 56.4706 45.6526 50.3981 47.2921 42.3529H51.9073L56.4705 37.7898V25.7396L54.6935 23.9628ZM29.9999 3.52941C40.4741 3.52941 49.1953 11.174 50.8806 21.1765H47.2921C45.6526 13.1313 38.522 7.05882 29.9999 7.05882C21.4778 7.05882 14.3472 13.1313 12.7077 21.1765H9.11918C10.8045 11.174 19.5257 3.52941 29.9999 3.52941ZM43.6708 21.1765C37.9662 21.1594 33.9368 21.5068 30.6147 16.6506L29.0015 14.2926L27.6152 16.7907C25.5952 20.4306 22.8748 21.1765 19.4117 21.1765H16.3289C17.9001 15.0944 23.4337 10.5882 29.9999 10.5882C36.5661 10.5882 42.0997 15.0944 43.6708 21.1765ZM12.3528 38.8235H9.55436L7.05871 36.3279V27.2015L9.55436 24.7059H12.3528V38.8235ZM8.82341 47.7647V42.3529H12.7042C13.3686 45.6441 14.9581 48.6652 17.3129 51.0916C16.8193 51.6191 16.4321 52.2467 16.1858 52.9412H13.9999C11.1455 52.9412 8.82341 50.6191 8.82341 47.7647ZM24.7058 56.4706H21.1764C20.2032 56.4706 19.4117 55.6791 19.4117 54.7059C19.4117 53.7328 20.2032 52.9412 21.1764 52.9412H24.7058C25.6788 52.9412 26.4705 53.7328 26.4705 54.7059C26.4705 55.6791 25.6788 56.4706 24.7058 56.4706ZM44.1175 38.8235C44.1175 46.608 37.7844 52.9412 29.9999 52.9412C29.8987 52.9412 29.7967 52.9392 29.6948 52.9368C28.9652 50.8851 27.0047 49.4118 24.7058 49.4118C21.0822 49.4198 21.14 49.3936 20.6884 49.4352C17.6246 46.7498 15.8822 42.9248 15.8822 38.8235V24.7059H19.4117C22.5348 24.7059 26.3384 24.1909 29.2826 20.6076C33.1673 24.6786 37.9146 24.7059 42.1761 24.7059H44.1175V38.8235ZM52.9411 36.3279L50.4454 38.8235H47.6469V24.7059H50.4454L52.9411 27.2015V36.3279Z" fill="#242424"/>
        </g>
        <defs>
          <clipPath id="clip0_34_573">
            <rect width="60" height="60" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
    name: "24 / 7 Support",
    description: "Dedicated support",
  },
];