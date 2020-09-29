import React, { FC } from 'react';
import { css } from 'styled-components';

const styles = {
    content: css`
        path {
            fill: ${({ theme, color }) =>
                !color ? theme.colors.purple.medium : color};
        }
    `,
};

const Salt = (props) => {
    console.log(props);
    return (
        <svg
            width="258"
            height="130"
            viewBox="0 0 258 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            css={styles.content}
            {...props}
        >
            <path d="M32.1473 77.3197C30.9357 76.6279 29.7913 75.9738 28.7477 75.3463C27.8675 74.8186 26.9381 74.2865 25.9818 73.741C19.0771 69.8031 14.4994 66.7898 13.9395 61.0935C13.5028 52.9117 17.8902 46.8807 21.6549 43.2598C29.377 35.8275 41.5782 31.4239 52.0125 32.3042C54.3528 32.5015 55.8802 32.9694 56.5498 33.69C59.6584 37.0337 54.7223 44.976 51.7751 49.721C51.1592 50.7144 50.5769 51.6523 50.0752 52.5148C47.5557 56.8629 44.7831 61.0603 41.8313 64.9915C40.2546 67.0913 40.6981 70.0581 42.8167 71.6168C44.9376 73.1756 47.9342 72.7388 49.5086 70.639C52.6821 66.4106 55.6652 61.8962 58.3706 57.2266C58.7984 56.4882 59.3426 55.6102 59.9204 54.6811C64.2876 47.6523 71.5954 35.8896 63.5866 27.2754C60.4221 23.8718 55.9272 23.129 52.8209 22.8652C39.7821 21.7609 24.5776 27.231 14.9832 36.466C7.51864 43.6501 3.85469 52.3796 4.38995 61.71C4.39219 61.7632 4.39667 61.8164 4.40114 61.8696C5.41568 72.9428 14.5397 78.1445 21.2025 81.945C22.0916 82.4528 22.9583 82.945 23.7758 83.4372C24.909 84.1179 26.0982 84.7986 27.3569 85.5171C34.1809 89.4173 42.6711 94.2731 43.6924 100.821C44.1246 103.592 42.8055 106.961 40.2502 109.612C36.3175 113.694 29.9772 116.85 23.2876 118.054C18.9047 118.843 13.7335 118.836 12.3561 116.451C8.04495 108.987 17.7715 100.761 17.8588 100.688C19.8923 99.0182 20.1745 96.0337 18.4881 94.0204C16.8017 92.0071 13.7872 91.7277 11.7537 93.3973C6.18385 97.9672 -2.59307 109.65 4.05177 121.153C6.65193 125.652 11.6708 127.996 18.4814 127.996C20.5015 127.996 22.6806 127.79 25.0008 127.373C33.7374 125.801 41.8201 121.71 47.1749 116.149C51.8042 111.342 54.037 105.071 53.1479 99.3729C51.4324 88.3463 40.286 81.9738 32.1473 77.3197ZM216.328 100.535C217.164 100.708 217.995 100.794 218.81 100.794C222.026 100.794 225.047 99.4638 227.502 96.9206C230.449 93.8674 231.672 90.1268 232.062 88.659C232.478 87.0869 233.401 82.9805 232.98 78.812C232.321 72.2865 228.854 69.619 226.062 68.5304C225.867 68.455 225.665 68.3951 225.461 68.3552C221.907 67.6412 214.313 69.0182 211.016 79.3552C208.777 86.3729 208.792 92.8474 211.054 96.6789C212.275 98.7366 214.098 100.071 216.328 100.535ZM217.863 81.4927C219.643 75.9162 222.539 75.3042 223.719 75.3042C223.744 75.3042 223.766 75.3042 223.788 75.3064C226.588 76.8763 226.149 82.9827 225.123 86.8563C225.103 86.9339 222.993 94.659 217.802 93.5836C217.683 93.5592 217.504 93.5215 217.251 93.0936C216.286 91.455 216.064 87.1268 217.863 81.4927ZM201.182 69.7432C202.739 69.9627 202.902 71.4971 202.9 72.1468C202.893 74.1091 204.497 75.7033 206.477 75.71H206.488C208.463 75.71 210.069 74.1268 210.076 72.1689C210.091 67.2554 206.848 63.3685 202.192 62.7122C197.948 62.1157 194.219 64.6523 192.143 67.2266C187.088 73.4904 185.12 81.7233 186.878 89.2465C187.261 90.8896 187.836 92.792 189.194 94.4417C191.751 97.5503 194.627 98.231 196.654 98.231C196.719 98.231 196.781 98.231 196.846 98.2288C200.132 98.1601 203.471 96.2909 205.778 93.2266C206.963 91.6545 206.636 89.4284 205.045 88.2554C203.458 87.0825 201.209 87.4084 200.024 88.9805C199.104 90.2022 197.702 91.1046 196.692 91.1268C196.452 91.1268 195.735 91.1468 194.757 89.9561C194.325 89.4284 194.054 88.4439 193.868 87.6457C192.618 82.2998 194.105 76.1756 197.749 71.6612C198.739 70.4306 200.215 69.6102 201.182 69.7432ZM240.433 51.3507C238.395 49.6856 235.381 49.9716 233.699 51.9871C232.017 54.0049 232.306 56.9893 234.341 58.6545C248.068 69.8762 250.016 90.0603 238.684 103.652C233.193 110.235 225.441 114.309 216.859 115.12C201.57 116.564 190.6 112.965 183.317 104.109C174.159 92.9716 170.905 73.0802 173.911 46.5836C174.027 45.5503 174.155 44.5259 174.287 43.5104C205.854 46.0403 220.425 51.2621 220.776 51.3907C221.336 51.6013 221.909 51.7011 222.476 51.7011C224.402 51.7011 226.218 50.5414 226.946 48.6523C227.889 46.2088 226.651 43.4705 224.183 42.5392C223.17 42.1578 208.181 36.6767 175.729 34.047C176.175 31.4949 176.641 29.0558 177.113 26.7743C178.932 20.3796 180.493 14.1024 181.781 8.00041C182.302 5.5237 180.768 3.07802 178.296 2.44609C175.821 1.80973 173.284 3.21549 172.529 5.63234C172.238 6.56582 169.918 14.1246 167.669 25.0292C166.881 27.7743 166.036 30.5459 165.152 33.333C160.453 33.078 155.45 32.8851 150.138 32.772C151.622 28.2443 152.74 23.2864 151.161 18.0625C150.227 14.9716 148.341 12.3685 145.849 10.7299C142.095 8.26205 136.908 8.02037 132.313 10.1046C122.367 14.6146 118.528 25.6634 116.293 33.1201C106.593 33.4993 96.186 34.1246 85.0261 35.0625C82.3946 35.2842 80.4417 37.5747 80.6634 40.1822C80.8874 42.7876 83.1919 44.7188 85.8346 44.5015C116.911 41.8918 142.14 41.7454 162.014 42.7255C157.239 56.3641 152.453 67.2754 147.063 76.8319C146.292 78.1978 145.533 79.639 144.796 81.0337C141.517 87.2532 138.127 93.6833 132.57 96.2332C131.079 96.9184 129.495 97.0514 128.436 96.5836C126.174 95.5814 124.909 92.1068 124.004 88.5814C124.313 88.1068 124.613 87.6457 124.902 87.1978C133.97 73.1091 141.013 59.0558 145.891 45.333C145.858 45.333 145.826 45.333 145.793 45.3308C139.865 45.2465 134.49 48.7188 132.1 54.0935C129.175 60.6723 125.746 67.3175 121.825 73.9982C121.63 70.8563 121.56 67.4794 121.61 63.8009C121.704 56.8563 122.199 50.8718 123.13 45.4971L123.036 45.4993C117.363 45.6567 112.707 50.0492 112.347 55.659C112.183 58.2066 112.083 60.8718 112.044 63.6745C111.924 72.659 112.479 80.0736 113.782 86.7122C111.469 90.0802 108.739 93.7543 105.666 97.1468C104.36 98.5902 102.938 100.036 101.411 100.841C100.291 101.428 99.0751 101.617 98.3136 101.32C97.4693 100.989 96.663 99.8829 96.2599 98.4993C95.0192 94.251 95.7918 89.3641 96.943 84.455C97.523 82.6057 98.0202 80.6678 98.3785 78.67C98.4995 78.1822 98.6182 77.6966 98.7324 77.2155C99.776 72.8009 100.959 68.5947 102.249 64.7122C103.075 62.2288 101.709 59.5503 99.2005 58.7343C96.7302 57.9272 94.0741 59.2288 93.2051 61.6412C93.1267 61.5902 93.0528 61.5348 92.9722 61.486C89.1403 59.1468 82.4999 58.6124 75.3624 64.1379C64.9796 72.1734 58.6259 84.7565 58.3684 97.8009C58.3236 100.051 58.4177 103.424 59.7368 106.717C61.3941 110.85 64.6907 113.808 68.7824 114.832C69.853 115.1 70.9392 115.231 72.0254 115.231C75.3265 115.231 78.6209 114.014 81.4047 111.703C84.1662 109.411 86.2467 106.521 87.9958 103.557C89.474 106.646 91.8636 108.983 94.7975 110.131C98.2061 111.466 102.255 111.127 105.904 109.204C108.748 107.708 110.893 105.564 112.788 103.47C114.392 101.701 115.899 99.8785 117.305 98.0647C118.817 100.949 121.07 103.699 124.528 105.231C128.145 106.834 132.543 106.686 136.59 104.83C145.098 100.925 149.441 92.6878 153.273 85.4195C154.01 84.0204 154.706 82.7011 155.412 81.4528C158.16 76.5836 160.749 71.4018 163.255 65.7388C163.407 82.251 166.543 98.7122 175.891 110.087C183.984 119.934 195.664 124.901 210.676 124.901C212.909 124.901 215.218 124.792 217.598 124.57C217.627 124.568 217.654 124.561 217.681 124.559C217.71 124.557 217.737 124.557 217.766 124.555C228.895 123.502 238.942 118.222 246.059 109.688C260.753 92.0647 258.229 65.8962 240.433 51.3507ZM140.064 32.6589C135.703 32.6523 131.164 32.6966 126.432 32.8031C128.539 26.5791 131.312 20.9738 136.295 18.7166C137.101 18.3507 137.968 18.1667 138.749 18.1667C139.455 18.1667 140.093 18.3175 140.554 18.6213C141.17 19.027 141.708 19.8319 141.992 20.7765C143.04 24.2465 141.596 28.333 140.064 32.6589ZM89.194 75.466C89.1716 75.6612 89.147 75.8541 89.1201 76.0403C89.0865 76.2687 89.0484 76.4993 89.0081 76.7299C88.8693 77.2842 88.7282 77.8452 88.5848 78.4084C88.2825 79.6035 87.9734 80.8297 87.6778 82.0736C86.6969 85.0869 85.2792 88.3219 83.333 92.0248C83.006 92.6479 82.6768 93.2865 82.3454 93.9317C80.3006 97.9029 78.1887 102.007 75.2593 104.442C73.9626 105.517 72.4195 105.967 71.1295 105.643C70.0209 105.366 69.1565 104.528 68.6324 103.215C68.1128 101.918 67.8911 100.255 67.9359 97.9805C68.1352 87.9073 73.2392 77.7964 81.2569 71.5947C83.1203 70.1534 85.3083 69.2754 86.7954 69.2754C87.2613 69.2754 87.6577 69.3618 87.9555 69.5414C89.0372 70.2066 89.5255 72.5304 89.194 75.466Z" />
        </svg>
    );
};

export default Salt;
