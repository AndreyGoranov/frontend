import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

import theme from 'common/theme'

export default function ApplyingForProgramIcon({ ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 86 107">
      <path
        d="M11.5831 7.7041C8.50696 7.7041 6.01995 10.2095 6.01995 13.2949C6.01833 13.4083 6.03939 13.5209 6.08188 13.6262C6.12438 13.7314 6.18747 13.8272 6.26749 13.908C6.34751 13.9888 6.44286 14.0529 6.548 14.0967C6.65314 14.1405 6.76597 14.163 6.87995 14.163C6.99392 14.163 7.10675 14.1405 7.21189 14.0967C7.31703 14.0529 7.41238 13.9888 7.4924 13.908C7.57242 13.8272 7.63551 13.7314 7.67801 13.6262C7.7205 13.5209 7.74156 13.4083 7.73995 13.2949C7.73995 11.1156 9.443 9.4161 11.5831 9.4161C13.7231 9.4161 15.4262 11.1156 15.4262 13.2949C15.4246 13.4083 15.4456 13.5209 15.4881 13.6262C15.5306 13.7314 15.5937 13.8272 15.6737 13.908C15.7538 13.9888 15.8491 14.0529 15.9542 14.0967C16.0594 14.1405 16.1722 14.163 16.2862 14.163C16.4002 14.163 16.513 14.1405 16.6181 14.0967C16.7233 14.0529 16.8186 13.9888 16.8987 13.908C16.9787 13.8272 17.0418 13.7314 17.0843 13.6262C17.1268 13.5209 17.1478 13.4083 17.1462 13.2949C17.1462 10.2095 14.6592 7.7041 11.5831 7.7041ZM24.8056 7.8646C24.5869 7.87825 24.3818 7.97442 24.2319 8.1335C24.0821 8.29257 23.9989 8.50255 23.9993 8.7206V68.2661C23.9993 68.4931 24.09 68.7108 24.2512 68.8714C24.4125 69.0319 24.6312 69.1221 24.8593 69.1221H69.4987C69.7268 69.1221 69.9455 69.0319 70.1068 68.8714C70.2681 68.7108 70.3587 68.4931 70.3587 68.2661V8.7206C70.3596 8.50683 70.2802 8.30044 70.1359 8.14203C69.9917 7.98363 69.7932 7.88466 69.5793 7.8646C69.5525 7.86335 69.5256 7.86335 69.4987 7.8646H24.8593C24.8414 7.86404 24.8235 7.86404 24.8056 7.8646ZM25.7193 9.5766H68.6387V67.4101H25.7193V9.5766ZM75.4381 16.5851C75.21 16.6064 74.9997 16.717 74.8536 16.8926C74.7074 17.0681 74.6373 17.2943 74.6587 17.5214C74.6801 17.7484 74.7912 17.9576 74.9676 18.1031C75.144 18.2486 75.3712 18.3184 75.5993 18.2971H78.2599V76.1841H35.3674V73.6964C35.3691 73.5829 35.348 73.4703 35.3055 73.365C35.263 73.2598 35.1999 73.164 35.1199 73.0832C35.0399 73.0024 34.9445 72.9383 34.8394 72.8945C34.7343 72.8507 34.6214 72.8282 34.5074 72.8282C34.3935 72.8282 34.2806 72.8507 34.1755 72.8945C34.0704 72.9383 33.975 73.0024 33.895 73.0832C33.815 73.164 33.7519 73.2598 33.7094 73.365C33.6669 73.4703 33.6458 73.5829 33.6474 73.6964V77.0401C33.6475 77.2671 33.7381 77.4848 33.8994 77.6454C34.0606 77.8059 34.2794 77.8961 34.5074 77.8961H79.1199C79.348 77.8961 79.5668 77.8059 79.728 77.6454C79.8893 77.4848 79.9799 77.2671 79.9799 77.0401V17.4411C79.9799 17.2141 79.8893 16.9964 79.728 16.8358C79.5668 16.6753 79.348 16.5851 79.1199 16.5851H75.5993C75.5457 16.5801 75.4917 16.5801 75.4381 16.5851ZM6.7187 18.1634C6.49061 18.1846 6.28036 18.2952 6.1342 18.4708C5.98804 18.6464 5.91794 18.8726 5.93932 19.0996C5.9607 19.3266 6.07182 19.5359 6.24822 19.6814C6.42462 19.8269 6.65186 19.8966 6.87995 19.8754H16.2862C16.4002 19.877 16.5133 19.856 16.6191 19.8137C16.7248 19.7714 16.8211 19.7086 16.9022 19.629C16.9834 19.5493 17.0478 19.4544 17.0918 19.3498C17.1358 19.2451 17.1584 19.1328 17.1584 19.0194C17.1584 18.9059 17.1358 18.7936 17.0918 18.6889C17.0478 18.5843 16.9834 18.4894 16.9022 18.4097C16.8211 18.3301 16.7248 18.2673 16.6191 18.225C16.5133 18.1827 16.4002 18.1617 16.2862 18.1634H6.87995C6.82631 18.1583 6.77233 18.1583 6.7187 18.1634ZM33.7281 19.2869C33.6141 19.2852 33.501 19.3062 33.3952 19.3485C33.2895 19.3908 33.1932 19.4536 33.1121 19.5332C33.0309 19.6129 32.9664 19.7078 32.9225 19.8124C32.8785 19.9171 32.8558 20.0294 32.8558 20.1429C32.8558 20.2563 32.8785 20.3686 32.9225 20.4733C32.9664 20.5779 33.0309 20.6728 33.1121 20.7525C33.1932 20.8321 33.2895 20.8949 33.3952 20.9372C33.501 20.9795 33.6141 21.0005 33.7281 20.9989H36.1468C36.2608 21.0005 36.3739 20.9795 36.4797 20.9372C36.5854 20.8949 36.6817 20.8321 36.7628 20.7525C36.844 20.6728 36.9084 20.5779 36.9524 20.4733C36.9964 20.3686 37.0191 20.2563 37.0191 20.1429C37.0191 20.0294 36.9964 19.9171 36.9524 19.8124C36.9084 19.7078 36.844 19.6129 36.7628 19.5332C36.6817 19.4536 36.5854 19.3908 36.4797 19.3485C36.3739 19.3062 36.2608 19.2852 36.1468 19.2869H33.7281ZM44.0212 19.2869C43.9072 19.2852 43.7941 19.3062 43.6883 19.3485C43.5826 19.3908 43.4863 19.4536 43.4052 19.5332C43.324 19.6129 43.2596 19.7078 43.2156 19.8124C43.1716 19.9171 43.1489 20.0294 43.1489 20.1429C43.1489 20.2563 43.1716 20.3686 43.2156 20.4733C43.2596 20.5779 43.324 20.6728 43.4052 20.7525C43.4863 20.8321 43.5826 20.8949 43.6883 20.9372C43.7941 20.9795 43.9072 21.0005 44.0212 20.9989H60.6299C60.7439 21.0005 60.8571 20.9795 60.9628 20.9372C61.0686 20.8949 61.1648 20.8321 61.246 20.7525C61.3271 20.6728 61.3916 20.5779 61.4356 20.4733C61.4795 20.3686 61.5022 20.2563 61.5022 20.1429C61.5022 20.0294 61.4795 19.9171 61.4356 19.8124C61.3916 19.7078 61.3271 19.6129 61.246 19.5332C61.1648 19.4536 61.0686 19.3908 60.9628 19.3485C60.8571 19.3062 60.7439 19.2852 60.6299 19.2869H44.0212ZM6.87995 23.5936C6.76471 23.5936 6.65065 23.6166 6.54452 23.6612C6.4384 23.7059 6.34238 23.7714 6.26216 23.8537C6.18194 23.9361 6.11916 24.0336 6.07756 24.1406C6.03595 24.2475 6.01636 24.3617 6.01995 24.4764V63.0231C6.01353 63.2267 6.08023 63.4258 6.20807 63.5848L10.9112 69.2558C10.9918 69.3562 11.094 69.4372 11.2103 69.4929C11.3266 69.5486 11.454 69.5775 11.5831 69.5775C11.7121 69.5775 11.8395 69.5486 11.9558 69.4929C12.0721 69.4372 12.1744 69.3562 12.2549 69.2558L16.9581 63.5848C17.0859 63.4258 17.1526 63.2267 17.1462 63.0231V24.4764C17.1478 24.3629 17.1268 24.2503 17.0843 24.145C17.0418 24.0398 16.9787 23.944 16.8987 23.8632C16.8186 23.7824 16.7233 23.7183 16.6181 23.6745C16.513 23.6307 16.4002 23.6082 16.2862 23.6082C16.1722 23.6082 16.0594 23.6307 15.9542 23.6745C15.8491 23.7183 15.7538 23.7824 15.6737 23.8632C15.5937 23.944 15.5306 24.0398 15.4881 24.145C15.4456 24.2503 15.4246 24.3629 15.4262 24.4764V62.7556L11.5831 67.3566L7.73995 62.7021V24.4764C7.74353 24.3617 7.72394 24.2475 7.68234 24.1406C7.64073 24.0336 7.57795 23.9361 7.49773 23.8537C7.41752 23.7714 7.32149 23.7059 7.21537 23.6612C7.10924 23.6166 6.99518 23.5936 6.87995 23.5936ZM33.5668 31.5116C33.3387 31.5329 33.1285 31.6435 32.9823 31.8191C32.8362 31.9946 32.7661 32.2208 32.7874 32.4478C32.8088 32.6749 32.9199 32.8841 33.0963 33.0296C33.2727 33.1751 33.5 33.2449 33.7281 33.2236H36.1468C36.2608 33.2252 36.3739 33.2042 36.4797 33.1619C36.5854 33.1197 36.6817 33.0569 36.7628 32.9772C36.844 32.8976 36.9084 32.8027 36.9524 32.698C36.9964 32.5934 37.0191 32.481 37.0191 32.3676C37.0191 32.2542 36.9964 32.1418 36.9524 32.0372C36.9084 31.9325 36.844 31.8376 36.7628 31.758C36.6817 31.6783 36.5854 31.6155 36.4797 31.5732C36.3739 31.531 36.2608 31.51 36.1468 31.5116H33.7281C33.6744 31.5066 33.6205 31.5066 33.5668 31.5116ZM43.8331 31.5383C43.7201 31.5506 43.6107 31.5849 43.511 31.6393C43.4114 31.6936 43.3235 31.767 43.2523 31.8552C43.1812 31.9434 43.1282 32.0447 43.0964 32.1532C43.0646 32.2618 43.0545 32.3756 43.0669 32.488C43.0793 32.6004 43.1137 32.7093 43.1684 32.8085C43.223 32.9077 43.2968 32.9951 43.3854 33.0659C43.474 33.1367 43.5758 33.1895 43.6849 33.2211C43.794 33.2527 43.9082 33.2627 44.0212 33.2503H60.6299C60.7439 33.252 60.8571 33.231 60.9628 33.1887C61.0686 33.1464 61.1648 33.0836 61.246 33.004C61.3271 32.9243 61.3916 32.8294 61.4356 32.7248C61.4795 32.6201 61.5022 32.5078 61.5022 32.3944C61.5022 32.2809 61.4795 32.1686 61.4356 32.0639C61.3916 31.9593 61.3271 31.8644 61.246 31.7847C61.1648 31.7051 61.0686 31.6423 60.9628 31.6C60.8571 31.5577 60.7439 31.5367 60.6299 31.5383H44.0212C43.9587 31.5315 43.8956 31.5315 43.8331 31.5383ZM33.6474 43.7096C33.5345 43.7149 33.4237 43.7422 33.3214 43.7901C33.2191 43.838 33.1273 43.9055 33.0511 43.9887C32.975 44.0719 32.9161 44.1692 32.8778 44.2751C32.8395 44.381 32.8225 44.4933 32.8278 44.6057C32.8331 44.7181 32.8605 44.8284 32.9086 44.9302C32.9568 45.0321 33.0246 45.1235 33.1082 45.1993C33.1918 45.275 33.2895 45.3336 33.3959 45.3718C33.5023 45.4099 33.6151 45.4269 33.7281 45.4216H36.1468C36.2608 45.4232 36.3739 45.4022 36.4797 45.3599C36.5854 45.3176 36.6817 45.2549 36.7628 45.1752C36.844 45.0956 36.9084 45.0007 36.9524 44.896C36.9964 44.7914 37.0191 44.679 37.0191 44.5656C37.0191 44.4522 36.9964 44.3398 36.9524 44.2352C36.9084 44.1305 36.844 44.0356 36.7628 43.956C36.6817 43.8763 36.5854 43.8135 36.4797 43.7712C36.3739 43.729 36.2608 43.708 36.1468 43.7096H33.7281C33.7012 43.7083 33.6743 43.7083 33.6474 43.7096ZM43.8331 43.7631C43.7201 43.7754 43.6107 43.8097 43.511 43.864C43.4114 43.9184 43.3235 43.9918 43.2523 44.08C43.1812 44.1681 43.1282 44.2694 43.0964 44.378C43.0646 44.4866 43.0545 44.6003 43.0669 44.7127C43.0793 44.8252 43.1137 44.9341 43.1684 45.0332C43.223 45.1324 43.2968 45.2199 43.3854 45.2907C43.474 45.3615 43.5758 45.4142 43.6849 45.4458C43.794 45.4775 43.9082 45.4874 44.0212 45.4751H60.6299C60.7439 45.4767 60.8571 45.4557 60.9628 45.4134C61.0686 45.3712 61.1648 45.3084 61.246 45.2287C61.3271 45.1491 61.3916 45.0542 61.4356 44.9495C61.4795 44.8449 61.5022 44.7325 61.5022 44.6191C61.5022 44.5057 61.4795 44.3933 61.4356 44.2887C61.3916 44.184 61.3271 44.0891 61.246 44.0095C61.1648 43.9298 61.0686 43.867 60.9628 43.8247C60.8571 43.7825 60.7439 43.7615 60.6299 43.7631H44.0212C43.9587 43.7563 43.8956 43.7563 43.8331 43.7631ZM33.6743 55.9076C33.5614 55.9093 33.4499 55.9332 33.3462 55.9778C33.2425 56.0224 33.1486 56.087 33.07 56.1677C32.9914 56.2484 32.9295 56.3438 32.8879 56.4483C32.8463 56.5529 32.8258 56.6646 32.8275 56.777C32.8293 56.8894 32.8533 57.0004 32.8982 57.1036C32.943 57.2068 33.0079 57.3002 33.089 57.3784C33.1701 57.4567 33.266 57.5182 33.371 57.5596C33.476 57.601 33.5882 57.6214 33.7012 57.6196L36.1199 57.6998C36.2329 57.7034 36.3455 57.6848 36.4512 57.645C36.5569 57.6052 36.6537 57.5451 36.7361 57.4681C36.8185 57.3911 36.8848 57.2987 36.9313 57.1962C36.9778 57.0937 37.0035 56.983 37.0071 56.8706C37.0106 56.7582 36.9918 56.6462 36.9519 56.5409C36.9119 56.4357 36.8515 56.3394 36.7741 56.2574C36.6967 56.1754 36.6038 56.1094 36.5008 56.0632C36.3978 56.0169 36.2867 55.9913 36.1737 55.9879L33.7549 55.9076C33.7281 55.9063 33.7012 55.9063 33.6743 55.9076ZM43.8331 55.9879C43.7201 56.0001 43.6107 56.0344 43.511 56.0888C43.4114 56.1431 43.3235 56.2165 43.2523 56.3047C43.1812 56.3929 43.1282 56.4942 43.0964 56.6027C43.0646 56.7113 43.0545 56.8251 43.0669 56.9375C43.0793 57.0499 43.1137 57.1588 43.1684 57.258C43.223 57.3572 43.2968 57.4446 43.3854 57.5154C43.474 57.5862 43.5758 57.6389 43.6849 57.6706C43.794 57.7022 43.9082 57.7122 44.0212 57.6998H60.6299C60.7439 57.7015 60.8571 57.6805 60.9628 57.6382C61.0686 57.5959 61.1648 57.5331 61.246 57.4535C61.3271 57.3738 61.3916 57.2789 61.4356 57.1743C61.4795 57.0696 61.5022 56.9573 61.5022 56.8438C61.5022 56.7304 61.4795 56.6181 61.4356 56.5134C61.3916 56.4088 61.3271 56.3139 61.246 56.2342C61.1648 56.1546 61.0686 56.0918 60.9628 56.0495C60.8571 56.0072 60.7439 55.9862 60.6299 55.9879H44.0212C43.9587 55.981 43.8956 55.981 43.8331 55.9879Z"
        fill={theme.palette.primary.main}
      />
    </SvgIcon>
  )
}
