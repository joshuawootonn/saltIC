import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import { addAlpha } from '../helpers/color';

const styles = {
    root: css`
        path {
            stroke-width: 4;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke: ${({ theme }) => addAlpha(theme.colors.purple.dark, 0.2)};
        }
    `,
};

const Bullhorn: FC = (props) => (
    <svg
        viewBox="0 0 2039 845"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={styles.root}
        {...props}
    >
        <path d="M20.9748 68.5874C21.2024 71.0459 22.3374 73.3283 24.1546 74.9815C25.9718 76.6348 28.3385 77.5381 30.7849 77.5123C33.2312 77.4865 35.5786 76.5334 37.3612 74.8422C39.1438 73.1509 40.2313 70.8452 40.4079 68.3824M78.9354 22.8685L104.462 2.7085M86.5191 48.6324L118.885 51.4343M82.7272 35.7846L133.307 20.545M193.975 93.5874C194.202 96.0459 195.337 98.3283 197.155 99.9815C198.972 101.635 201.338 102.538 203.785 102.512C206.231 102.486 208.579 101.533 210.361 99.8422C212.144 98.1509 213.231 95.8452 213.408 93.3824M251.935 47.8685L277.462 27.7085M259.519 73.6324L291.885 76.4343M255.727 60.7846L306.307 45.545M366.975 118.587C367.202 121.046 368.337 123.328 370.155 124.982C371.972 126.635 374.338 127.538 376.785 127.512C379.231 127.486 381.579 126.533 383.361 124.842C385.144 123.151 386.231 120.845 386.408 118.382M424.935 72.8685L450.462 52.7085M432.519 98.6324L464.885 101.434M428.727 85.7846L479.307 70.545M539.975 143.587C540.202 146.046 541.337 148.328 543.155 149.982C544.972 151.635 547.338 152.538 549.785 152.512C552.231 152.486 554.579 151.533 556.361 149.842C558.144 148.151 559.231 145.845 559.408 143.382M597.935 97.8685L623.462 77.7085M605.519 123.632L637.885 126.434M601.727 110.785L652.307 95.545M712.975 168.587C713.202 171.046 714.337 173.328 716.155 174.982C717.972 176.635 720.338 177.538 722.785 177.512C725.231 177.486 727.579 176.533 729.361 174.842C731.144 173.151 732.231 170.845 732.408 168.382M770.935 122.869L796.462 102.708M778.519 148.632L810.885 151.434M774.727 135.785L825.307 120.545M885.975 193.587C886.202 196.046 887.337 198.328 889.155 199.982C890.972 201.635 893.338 202.538 895.785 202.512C898.231 202.486 900.579 201.533 902.361 199.842C904.144 198.151 905.231 195.845 905.408 193.382M943.935 147.869L969.462 127.708M951.519 173.632L983.885 176.434M947.727 160.785L998.307 145.545M1058.97 218.587C1059.2 221.046 1060.34 223.328 1062.15 224.982C1063.97 226.635 1066.34 227.538 1068.78 227.512C1071.23 227.486 1073.58 226.533 1075.36 224.842C1077.14 223.151 1078.23 220.845 1078.41 218.382M1116.94 172.869L1142.46 152.708M1124.52 198.632L1156.89 201.434M1120.73 185.785L1171.31 170.545M1231.97 243.587C1232.2 246.046 1233.34 248.328 1235.15 249.982C1236.97 251.635 1239.34 252.538 1241.78 252.512C1244.23 252.486 1246.58 251.533 1248.36 249.842C1250.14 248.151 1251.23 245.845 1251.41 243.382M1289.94 197.869L1315.46 177.708M1297.52 223.632L1329.89 226.434M1293.73 210.785L1344.31 195.545M1404.97 268.587C1405.2 271.046 1406.34 273.328 1408.15 274.982C1409.97 276.635 1412.34 277.538 1414.78 277.512C1417.23 277.486 1419.58 276.533 1421.36 274.842C1423.14 273.151 1424.23 270.845 1424.41 268.382M1462.94 222.869L1488.46 202.708M1470.52 248.632L1502.89 251.434M1466.73 235.785L1517.31 220.545M1577.97 293.587C1578.2 296.046 1579.34 298.328 1581.15 299.982C1582.97 301.635 1585.34 302.538 1587.78 302.512C1590.23 302.486 1592.58 301.533 1594.36 299.842C1596.14 298.151 1597.23 295.845 1597.41 293.382M1635.94 247.869L1661.46 227.708M1643.52 273.632L1675.89 276.434M1639.73 260.785L1690.31 245.545M1750.97 318.587C1751.2 321.046 1752.34 323.328 1754.15 324.982C1755.97 326.635 1758.34 327.538 1760.78 327.512C1763.23 327.486 1765.58 326.533 1767.36 324.842C1769.14 323.151 1770.23 320.845 1770.41 318.382M1808.94 272.869L1834.46 252.708M1816.52 298.632L1848.89 301.434M1812.73 285.785L1863.31 270.545M1923.97 343.587C1924.2 346.046 1925.34 348.328 1927.15 349.982C1928.97 351.635 1931.34 352.538 1933.78 352.512C1936.23 352.486 1938.58 351.533 1940.36 349.842C1942.14 348.151 1943.23 345.845 1943.41 343.382M1981.94 297.869L2007.46 277.708M1989.52 323.632L2021.89 326.434M1985.73 310.785L2036.31 295.545M20.9748 166.587C21.2024 169.046 22.3374 171.328 24.1546 172.982C25.9718 174.635 28.3385 175.538 30.7849 175.512C33.2312 175.486 35.5786 174.533 37.3612 172.842C39.1438 171.151 40.2313 168.845 40.4079 166.382M78.9354 120.869L104.462 100.708M86.5191 146.632L118.885 149.434M82.7272 133.785L133.307 118.545M193.975 191.587C194.202 194.046 195.337 196.328 197.155 197.982C198.972 199.635 201.338 200.538 203.785 200.512C206.231 200.486 208.579 199.533 210.361 197.842C212.144 196.151 213.231 193.845 213.408 191.382M251.935 145.869L277.462 125.708M259.519 171.632L291.885 174.434M255.727 158.785L306.307 143.545M366.975 216.587C367.202 219.046 368.337 221.328 370.155 222.982C371.972 224.635 374.338 225.538 376.785 225.512C379.231 225.486 381.579 224.533 383.361 222.842C385.144 221.151 386.231 218.845 386.408 216.382M424.935 170.869L450.462 150.708M432.519 196.632L464.885 199.434M428.727 183.785L479.307 168.545M539.975 241.587C540.202 244.046 541.337 246.328 543.155 247.982C544.972 249.635 547.338 250.538 549.785 250.512C552.231 250.486 554.579 249.533 556.361 247.842C558.144 246.151 559.231 243.845 559.408 241.382M597.935 195.869L623.462 175.708M605.519 221.632L637.885 224.434M601.727 208.785L652.307 193.545M712.975 266.587C713.202 269.046 714.337 271.328 716.155 272.982C717.972 274.635 720.338 275.538 722.785 275.512C725.231 275.486 727.579 274.533 729.361 272.842C731.144 271.151 732.231 268.845 732.408 266.382M770.935 220.869L796.462 200.708M778.519 246.632L810.885 249.434M774.727 233.785L825.307 218.545M885.975 291.587C886.202 294.046 887.337 296.328 889.155 297.982C890.972 299.635 893.338 300.538 895.785 300.512C898.231 300.486 900.579 299.533 902.361 297.842C904.144 296.151 905.231 293.845 905.408 291.382M943.935 245.869L969.462 225.708M951.519 271.632L983.885 274.434M947.727 258.785L998.307 243.545M1058.97 316.587C1059.2 319.046 1060.34 321.328 1062.15 322.982C1063.97 324.635 1066.34 325.538 1068.78 325.512C1071.23 325.486 1073.58 324.533 1075.36 322.842C1077.14 321.151 1078.23 318.845 1078.41 316.382M1116.94 270.869L1142.46 250.708M1124.52 296.632L1156.89 299.434M1120.73 283.785L1171.31 268.545M1231.97 341.587C1232.2 344.046 1233.34 346.328 1235.15 347.982C1236.97 349.635 1239.34 350.538 1241.78 350.512C1244.23 350.486 1246.58 349.533 1248.36 347.842C1250.14 346.151 1251.23 343.845 1251.41 341.382M1289.94 295.869L1315.46 275.708M1297.52 321.632L1329.89 324.434M1293.73 308.785L1344.31 293.545M1404.97 366.587C1405.2 369.046 1406.34 371.328 1408.15 372.982C1409.97 374.635 1412.34 375.538 1414.78 375.512C1417.23 375.486 1419.58 374.533 1421.36 372.842C1423.14 371.151 1424.23 368.845 1424.41 366.382M1462.94 320.869L1488.46 300.708M1470.52 346.632L1502.89 349.434M1466.73 333.785L1517.31 318.545M1577.97 391.587C1578.2 394.046 1579.34 396.328 1581.15 397.982C1582.97 399.635 1585.34 400.538 1587.78 400.512C1590.23 400.486 1592.58 399.533 1594.36 397.842C1596.14 396.151 1597.23 393.845 1597.41 391.382M1635.94 345.869L1661.46 325.708M1643.52 371.632L1675.89 374.434M1639.73 358.785L1690.31 343.545M1750.97 416.587C1751.2 419.046 1752.34 421.328 1754.15 422.982C1755.97 424.635 1758.34 425.538 1760.78 425.512C1763.23 425.486 1765.58 424.533 1767.36 422.842C1769.14 421.151 1770.23 418.845 1770.41 416.382M1808.94 370.869L1834.46 350.708M1816.52 396.632L1848.89 399.434M1812.73 383.785L1863.31 368.545M1923.97 441.587C1924.2 444.046 1925.34 446.328 1927.15 447.982C1928.97 449.635 1931.34 450.538 1933.78 450.512C1936.23 450.486 1938.58 449.533 1940.36 447.842C1942.14 446.151 1943.23 443.845 1943.41 441.382M1981.94 395.869L2007.46 375.708M1989.52 421.632L2021.89 424.434M1985.73 408.785L2036.31 393.545M20.9748 264.587C21.2024 267.046 22.3374 269.328 24.1546 270.982C25.9718 272.635 28.3385 273.538 30.7849 273.512C33.2312 273.486 35.5786 272.533 37.3612 270.842C39.1438 269.151 40.2313 266.845 40.4079 264.382M78.9354 218.869L104.462 198.708M86.5191 244.632L118.885 247.434M82.7272 231.785L133.307 216.545M193.975 289.587C194.202 292.046 195.337 294.328 197.155 295.982C198.972 297.635 201.338 298.538 203.785 298.512C206.231 298.486 208.579 297.533 210.361 295.842C212.144 294.151 213.231 291.845 213.408 289.382M251.935 243.869L277.462 223.708M259.519 269.632L291.885 272.434M255.727 256.785L306.307 241.545M366.975 314.587C367.202 317.046 368.337 319.328 370.155 320.982C371.972 322.635 374.338 323.538 376.785 323.512C379.231 323.486 381.579 322.533 383.361 320.842C385.144 319.151 386.231 316.845 386.408 314.382M424.935 268.869L450.462 248.708M432.519 294.632L464.885 297.434M428.727 281.785L479.307 266.545M539.975 339.587C540.202 342.046 541.337 344.328 543.155 345.982C544.972 347.635 547.338 348.538 549.785 348.512C552.231 348.486 554.579 347.533 556.361 345.842C558.144 344.151 559.231 341.845 559.408 339.382M597.935 293.869L623.462 273.708M605.519 319.632L637.885 322.434M601.727 306.785L652.307 291.545M712.975 364.587C713.202 367.046 714.337 369.328 716.155 370.982C717.972 372.635 720.338 373.538 722.785 373.512C725.231 373.486 727.579 372.533 729.361 370.842C731.144 369.151 732.231 366.845 732.408 364.382M770.935 318.869L796.462 298.708M778.519 344.632L810.885 347.434M774.727 331.785L825.307 316.545M885.975 389.587C886.202 392.046 887.337 394.328 889.155 395.982C890.972 397.635 893.338 398.538 895.785 398.512C898.231 398.486 900.579 397.533 902.361 395.842C904.144 394.151 905.231 391.845 905.408 389.382M943.935 343.869L969.462 323.708M951.519 369.632L983.885 372.434M947.727 356.785L998.307 341.545M1058.97 414.587C1059.2 417.046 1060.34 419.328 1062.15 420.982C1063.97 422.635 1066.34 423.538 1068.78 423.512C1071.23 423.486 1073.58 422.533 1075.36 420.842C1077.14 419.151 1078.23 416.845 1078.41 414.382M1116.94 368.869L1142.46 348.708M1124.52 394.632L1156.89 397.434M1120.73 381.785L1171.31 366.545M1231.97 439.587C1232.2 442.046 1233.34 444.328 1235.15 445.982C1236.97 447.635 1239.34 448.538 1241.78 448.512C1244.23 448.486 1246.58 447.533 1248.36 445.842C1250.14 444.151 1251.23 441.845 1251.41 439.382M1289.94 393.869L1315.46 373.708M1297.52 419.632L1329.89 422.434M1293.73 406.785L1344.31 391.545M1404.97 464.587C1405.2 467.046 1406.34 469.328 1408.15 470.982C1409.97 472.635 1412.34 473.538 1414.78 473.512C1417.23 473.486 1419.58 472.533 1421.36 470.842C1423.14 469.151 1424.23 466.845 1424.41 464.382M1462.94 418.869L1488.46 398.708M1470.52 444.632L1502.89 447.434M1466.73 431.785L1517.31 416.545M1577.97 489.587C1578.2 492.046 1579.34 494.328 1581.15 495.982C1582.97 497.635 1585.34 498.538 1587.78 498.512C1590.23 498.486 1592.58 497.533 1594.36 495.842C1596.14 494.151 1597.23 491.845 1597.41 489.382M1635.94 443.869L1661.46 423.708M1643.52 469.632L1675.89 472.434M1639.73 456.785L1690.31 441.545M1750.97 514.587C1751.2 517.046 1752.34 519.328 1754.15 520.982C1755.97 522.635 1758.34 523.538 1760.78 523.512C1763.23 523.487 1765.58 522.533 1767.36 520.842C1769.14 519.151 1770.23 516.845 1770.41 514.382M1808.94 468.869L1834.46 448.708M1816.52 494.632L1848.89 497.434M1812.73 481.785L1863.31 466.545M1923.97 539.587C1924.2 542.046 1925.34 544.328 1927.15 545.982C1928.97 547.635 1931.34 548.538 1933.78 548.512C1936.23 548.487 1938.58 547.533 1940.36 545.842C1942.14 544.151 1943.23 541.845 1943.41 539.382M1981.94 493.869L2007.46 473.708M1989.52 519.632L2021.89 522.434M1985.73 506.785L2036.31 491.545M20.9748 362.587C21.2024 365.046 22.3374 367.328 24.1546 368.982C25.9718 370.635 28.3385 371.538 30.7849 371.512C33.2312 371.486 35.5786 370.533 37.3612 368.842C39.1438 367.151 40.2313 364.845 40.4079 362.382M78.9354 316.869L104.462 296.708M86.5191 342.632L118.885 345.434M82.7272 329.785L133.307 314.545M193.975 387.587C194.202 390.046 195.337 392.328 197.155 393.982C198.972 395.635 201.338 396.538 203.785 396.512C206.231 396.486 208.579 395.533 210.361 393.842C212.144 392.151 213.231 389.845 213.408 387.382M251.935 341.869L277.462 321.708M259.519 367.632L291.885 370.434M255.727 354.785L306.307 339.545M366.975 412.587C367.202 415.046 368.337 417.328 370.155 418.982C371.972 420.635 374.338 421.538 376.785 421.512C379.231 421.486 381.579 420.533 383.361 418.842C385.144 417.151 386.231 414.845 386.408 412.382M424.935 366.869L450.462 346.708M432.519 392.632L464.885 395.434M428.727 379.785L479.307 364.545M539.975 437.587C540.202 440.046 541.337 442.328 543.155 443.982C544.972 445.635 547.338 446.538 549.785 446.512C552.231 446.486 554.579 445.533 556.361 443.842C558.144 442.151 559.231 439.845 559.408 437.382M597.935 391.869L623.462 371.708M605.519 417.632L637.885 420.434M601.727 404.785L652.307 389.545M712.975 462.587C713.202 465.046 714.337 467.328 716.155 468.982C717.972 470.635 720.338 471.538 722.785 471.512C725.231 471.486 727.579 470.533 729.361 468.842C731.144 467.151 732.231 464.845 732.408 462.382M770.935 416.869L796.462 396.708M778.519 442.632L810.885 445.434M774.727 429.785L825.307 414.545M885.975 487.587C886.202 490.046 887.337 492.328 889.155 493.982C890.972 495.635 893.338 496.538 895.785 496.512C898.231 496.486 900.579 495.533 902.361 493.842C904.144 492.151 905.231 489.845 905.408 487.382M943.935 441.869L969.462 421.708M951.519 467.632L983.885 470.434M947.727 454.785L998.307 439.545M1058.97 512.587C1059.2 515.046 1060.34 517.328 1062.15 518.982C1063.97 520.635 1066.34 521.538 1068.78 521.512C1071.23 521.487 1073.58 520.533 1075.36 518.842C1077.14 517.151 1078.23 514.845 1078.41 512.382M1116.94 466.869L1142.46 446.708M1124.52 492.632L1156.89 495.434M1120.73 479.785L1171.31 464.545M1231.97 537.587C1232.2 540.046 1233.34 542.328 1235.15 543.982C1236.97 545.635 1239.34 546.538 1241.78 546.512C1244.23 546.487 1246.58 545.533 1248.36 543.842C1250.14 542.151 1251.23 539.845 1251.41 537.382M1289.94 491.869L1315.46 471.708M1297.52 517.632L1329.89 520.434M1293.73 504.785L1344.31 489.545M1404.97 562.587C1405.2 565.046 1406.34 567.328 1408.15 568.982C1409.97 570.635 1412.34 571.538 1414.78 571.512C1417.23 571.487 1419.58 570.533 1421.36 568.842C1423.14 567.151 1424.23 564.845 1424.41 562.382M1462.94 516.869L1488.46 496.708M1470.52 542.632L1502.89 545.434M1466.73 529.785L1517.31 514.545M1577.97 587.587C1578.2 590.046 1579.34 592.328 1581.15 593.982C1582.97 595.635 1585.34 596.538 1587.78 596.512C1590.23 596.487 1592.58 595.533 1594.36 593.842C1596.14 592.151 1597.23 589.845 1597.41 587.382M1635.94 541.869L1661.46 521.708M1643.52 567.632L1675.89 570.434M1639.73 554.785L1690.31 539.545M1750.97 612.587C1751.2 615.046 1752.34 617.328 1754.15 618.982C1755.97 620.635 1758.34 621.538 1760.78 621.512C1763.23 621.487 1765.58 620.533 1767.36 618.842C1769.14 617.151 1770.23 614.845 1770.41 612.382M1808.94 566.869L1834.46 546.708M1816.52 592.632L1848.89 595.434M1812.73 579.785L1863.31 564.545M1923.97 637.587C1924.2 640.046 1925.34 642.328 1927.15 643.982C1928.97 645.635 1931.34 646.538 1933.78 646.512C1936.23 646.487 1938.58 645.533 1940.36 643.842C1942.14 642.151 1943.23 639.845 1943.41 637.382M1981.94 591.869L2007.46 571.708M1989.52 617.632L2021.89 620.434M1985.73 604.785L2036.31 589.545M20.9748 460.587C21.2024 463.046 22.3374 465.328 24.1546 466.982C25.9718 468.635 28.3385 469.538 30.7849 469.512C33.2312 469.486 35.5786 468.533 37.3612 466.842C39.1438 465.151 40.2313 462.845 40.4079 460.382M78.9354 414.869L104.462 394.708M86.5191 440.632L118.885 443.434M82.7272 427.785L133.307 412.545M193.975 485.587C194.202 488.046 195.337 490.328 197.155 491.982C198.972 493.635 201.338 494.538 203.785 494.512C206.231 494.486 208.579 493.533 210.361 491.842C212.144 490.151 213.231 487.845 213.408 485.382M251.935 439.869L277.462 419.708M259.519 465.632L291.885 468.434M255.727 452.785L306.307 437.545M366.975 510.587C367.202 513.046 368.337 515.328 370.155 516.982C371.972 518.635 374.338 519.538 376.785 519.512C379.231 519.487 381.579 518.533 383.361 516.842C385.144 515.151 386.231 512.845 386.408 510.382M424.935 464.869L450.462 444.708M432.519 490.632L464.885 493.434M428.727 477.785L479.307 462.545M539.975 535.587C540.202 538.046 541.337 540.328 543.155 541.982C544.972 543.635 547.338 544.538 549.785 544.512C552.231 544.487 554.579 543.533 556.361 541.842C558.144 540.151 559.231 537.845 559.408 535.382M597.935 489.869L623.462 469.708M605.519 515.632L637.885 518.434M601.727 502.785L652.307 487.545M712.975 560.587C713.202 563.046 714.337 565.328 716.155 566.982C717.972 568.635 720.338 569.538 722.785 569.512C725.231 569.487 727.579 568.533 729.361 566.842C731.144 565.151 732.231 562.845 732.408 560.382M770.935 514.869L796.462 494.708M778.519 540.632L810.885 543.434M774.727 527.785L825.307 512.545M885.975 585.587C886.202 588.046 887.337 590.328 889.155 591.982C890.972 593.635 893.338 594.538 895.785 594.512C898.231 594.487 900.579 593.533 902.361 591.842C904.144 590.151 905.231 587.845 905.408 585.382M943.935 539.869L969.462 519.708M951.519 565.632L983.885 568.434M947.727 552.785L998.307 537.545M1058.97 610.587C1059.2 613.046 1060.34 615.328 1062.15 616.982C1063.97 618.635 1066.34 619.538 1068.78 619.512C1071.23 619.487 1073.58 618.533 1075.36 616.842C1077.14 615.151 1078.23 612.845 1078.41 610.382M1116.94 564.869L1142.46 544.708M1124.52 590.632L1156.89 593.434M1120.73 577.785L1171.31 562.545M1231.97 635.587C1232.2 638.046 1233.34 640.328 1235.15 641.982C1236.97 643.635 1239.34 644.538 1241.78 644.512C1244.23 644.487 1246.58 643.533 1248.36 641.842C1250.14 640.151 1251.23 637.845 1251.41 635.382M1289.94 589.869L1315.46 569.708M1297.52 615.632L1329.89 618.434M1293.73 602.785L1344.31 587.545M1404.97 660.587C1405.2 663.046 1406.34 665.328 1408.15 666.982C1409.97 668.635 1412.34 669.538 1414.78 669.512C1417.23 669.487 1419.58 668.533 1421.36 666.842C1423.14 665.151 1424.23 662.845 1424.41 660.382M1462.94 614.869L1488.46 594.708M1470.52 640.632L1502.89 643.434M1466.73 627.785L1517.31 612.545M1577.97 685.587C1578.2 688.046 1579.34 690.328 1581.15 691.982C1582.97 693.635 1585.34 694.538 1587.78 694.512C1590.23 694.487 1592.58 693.533 1594.36 691.842C1596.14 690.151 1597.23 687.845 1597.41 685.382M1635.94 639.869L1661.46 619.708M1643.52 665.632L1675.89 668.434M1639.73 652.785L1690.31 637.545M1750.97 710.587C1751.2 713.046 1752.34 715.328 1754.15 716.982C1755.97 718.635 1758.34 719.538 1760.78 719.512C1763.23 719.487 1765.58 718.533 1767.36 716.842C1769.14 715.151 1770.23 712.845 1770.41 710.382M1808.94 664.869L1834.46 644.708M1816.52 690.632L1848.89 693.434M1812.73 677.785L1863.31 662.545M1923.97 735.587C1924.2 738.046 1925.34 740.328 1927.15 741.982C1928.97 743.635 1931.34 744.538 1933.78 744.512C1936.23 744.487 1938.58 743.533 1940.36 741.842C1942.14 740.151 1943.23 737.845 1943.41 735.382M1981.94 689.869L2007.46 669.708M1989.52 715.632L2021.89 718.434M1985.73 702.785L2036.31 687.545M20.9749 558.587C21.2025 561.046 22.3375 563.328 24.1547 564.982C25.9719 566.635 28.3386 567.538 30.7849 567.512C33.2313 567.487 35.5787 566.533 37.3613 564.842C39.1439 563.151 40.2314 560.845 40.408 558.382M78.9355 512.869L104.463 492.709M86.5192 538.632L118.885 541.434M82.7273 525.785L133.307 510.545M193.975 583.587C194.203 586.046 195.338 588.328 197.155 589.982C198.972 591.635 201.339 592.538 203.785 592.512C206.231 592.487 208.579 591.533 210.361 589.842C212.144 588.151 213.231 585.845 213.408 583.382M251.935 537.869L277.463 517.708M259.519 563.632L291.885 566.434M255.727 550.785L306.307 535.545M366.975 608.587C367.202 611.046 368.338 613.328 370.155 614.982C371.972 616.635 374.339 617.538 376.785 617.512C379.231 617.487 381.579 616.533 383.361 614.842C385.144 613.151 386.231 610.845 386.408 608.382M424.935 562.869L450.463 542.708M432.519 588.632L464.885 591.434M428.727 575.785L479.307 560.545M539.975 633.587C540.203 636.046 541.338 638.328 543.155 639.982C544.972 641.635 547.339 642.538 549.785 642.512C552.231 642.487 554.579 641.533 556.361 639.842C558.144 638.151 559.231 635.845 559.408 633.382M597.936 587.869L623.463 567.708M605.519 613.632L637.885 616.434M601.727 600.785L652.307 585.545M712.975 658.587C713.203 661.046 714.338 663.328 716.155 664.982C717.972 666.635 720.339 667.538 722.785 667.512C725.231 667.487 727.579 666.533 729.361 664.842C731.144 663.151 732.231 660.845 732.408 658.382M770.936 612.869L796.463 592.708M778.519 638.632L810.885 641.434M774.727 625.785L825.307 610.545M885.975 683.587C886.203 686.046 887.338 688.328 889.155 689.982C890.972 691.635 893.339 692.538 895.785 692.512C898.231 692.487 900.579 691.533 902.361 689.842C904.144 688.151 905.231 685.845 905.408 683.382M943.936 637.869L969.463 617.708M951.519 663.632L983.885 666.434M947.727 650.785L998.307 635.545M1058.97 708.587C1059.2 711.046 1060.34 713.328 1062.15 714.982C1063.97 716.635 1066.34 717.538 1068.78 717.512C1071.23 717.487 1073.58 716.533 1075.36 714.842C1077.14 713.151 1078.23 710.845 1078.41 708.382M1116.94 662.869L1142.46 642.708M1124.52 688.632L1156.89 691.434M1120.73 675.785L1171.31 660.545M1231.97 733.587C1232.2 736.046 1233.34 738.328 1235.15 739.982C1236.97 741.635 1239.34 742.538 1241.78 742.512C1244.23 742.487 1246.58 741.533 1248.36 739.842C1250.14 738.151 1251.23 735.845 1251.41 733.382M1289.94 687.869L1315.46 667.708M1297.52 713.632L1329.89 716.434M1293.73 700.785L1344.31 685.545M1404.97 758.587C1405.2 761.046 1406.34 763.328 1408.15 764.982C1409.97 766.635 1412.34 767.538 1414.78 767.512C1417.23 767.487 1419.58 766.533 1421.36 764.842C1423.14 763.151 1424.23 760.845 1424.41 758.382M1462.94 712.869L1488.46 692.708M1470.52 738.632L1502.89 741.434M1466.73 725.785L1517.31 710.545M1577.97 783.587C1578.2 786.046 1579.34 788.328 1581.15 789.982C1582.97 791.635 1585.34 792.538 1587.78 792.512C1590.23 792.487 1592.58 791.533 1594.36 789.842C1596.14 788.151 1597.23 785.845 1597.41 783.382M1635.94 737.869L1661.46 717.708M1643.52 763.632L1675.89 766.434M1639.73 750.785L1690.31 735.545M1750.97 808.587C1751.2 811.046 1752.34 813.328 1754.15 814.982C1755.97 816.635 1758.34 817.538 1760.78 817.512C1763.23 817.487 1765.58 816.533 1767.36 814.842C1769.14 813.151 1770.23 810.845 1770.41 808.382M1808.94 762.869L1834.46 742.708M1816.52 788.632L1848.89 791.434M1812.73 775.785L1863.31 760.545M1923.97 833.587C1924.2 836.046 1925.34 838.328 1927.15 839.982C1928.97 841.635 1931.34 842.538 1933.78 842.512C1936.23 842.487 1938.58 841.533 1940.36 839.842C1942.14 838.151 1943.23 835.845 1943.41 833.382M1981.94 787.869L2007.46 767.708M1989.52 813.632L2021.89 816.434M1985.73 800.785L2036.31 785.545M7.36493 67.1523L77.7843 65.9905L62.1431 13.3011L2.69287 51.2293L7.36493 67.1523ZM180.365 92.1523L250.784 90.9905L235.143 38.3011L175.693 76.2293L180.365 92.1523ZM353.365 117.152L423.784 115.991L408.143 63.3011L348.693 101.229L353.365 117.152ZM526.365 142.152L596.784 140.991L581.143 88.3011L521.693 126.229L526.365 142.152ZM699.365 167.152L769.784 165.991L754.143 113.301L694.693 151.229L699.365 167.152ZM872.365 192.152L942.784 190.991L927.143 138.301L867.693 176.229L872.365 192.152ZM1045.36 217.152L1115.78 215.991L1100.14 163.301L1040.69 201.229L1045.36 217.152ZM1218.36 242.152L1288.78 240.991L1273.14 188.301L1213.69 226.229L1218.36 242.152ZM1391.36 267.152L1461.78 265.991L1446.14 213.301L1386.69 251.229L1391.36 267.152ZM1564.36 292.152L1634.78 290.991L1619.14 238.301L1559.69 276.229L1564.36 292.152ZM1737.36 317.152L1807.78 315.991L1792.14 263.301L1732.69 301.229L1737.36 317.152ZM1910.36 342.152L1980.78 340.991L1965.14 288.301L1905.69 326.229L1910.36 342.152ZM7.36493 165.152L77.7843 163.991L62.1431 111.301L2.69287 149.229L7.36493 165.152ZM180.365 190.152L250.784 188.991L235.143 136.301L175.693 174.229L180.365 190.152ZM353.365 215.152L423.784 213.991L408.143 161.301L348.693 199.229L353.365 215.152ZM526.365 240.152L596.784 238.991L581.143 186.301L521.693 224.229L526.365 240.152ZM699.365 265.152L769.784 263.991L754.143 211.301L694.693 249.229L699.365 265.152ZM872.365 290.152L942.784 288.991L927.143 236.301L867.693 274.229L872.365 290.152ZM1045.36 315.152L1115.78 313.991L1100.14 261.301L1040.69 299.229L1045.36 315.152ZM1218.36 340.152L1288.78 338.991L1273.14 286.301L1213.69 324.229L1218.36 340.152ZM1391.36 365.152L1461.78 363.991L1446.14 311.301L1386.69 349.229L1391.36 365.152ZM1564.36 390.152L1634.78 388.991L1619.14 336.301L1559.69 374.229L1564.36 390.152ZM1737.36 415.152L1807.78 413.991L1792.14 361.301L1732.69 399.229L1737.36 415.152ZM1910.36 440.152L1980.78 438.991L1965.14 386.301L1905.69 424.229L1910.36 440.152ZM7.36493 263.152L77.7843 261.991L62.1431 209.301L2.69287 247.229L7.36493 263.152ZM180.365 288.152L250.784 286.991L235.143 234.301L175.693 272.229L180.365 288.152ZM353.365 313.152L423.784 311.991L408.143 259.301L348.693 297.229L353.365 313.152ZM526.365 338.152L596.784 336.991L581.143 284.301L521.693 322.229L526.365 338.152ZM699.365 363.152L769.784 361.991L754.143 309.301L694.693 347.229L699.365 363.152ZM872.365 388.152L942.784 386.991L927.143 334.301L867.693 372.229L872.365 388.152ZM1045.36 413.152L1115.78 411.991L1100.14 359.301L1040.69 397.229L1045.36 413.152ZM1218.36 438.152L1288.78 436.991L1273.14 384.301L1213.69 422.229L1218.36 438.152ZM1391.36 463.152L1461.78 461.991L1446.14 409.301L1386.69 447.229L1391.36 463.152ZM1564.36 488.152L1634.78 486.991L1619.14 434.301L1559.69 472.229L1564.36 488.152ZM1737.36 513.152L1807.78 511.991L1792.14 459.301L1732.69 497.229L1737.36 513.152ZM1910.36 538.152L1980.78 536.99L1965.14 484.301L1905.69 522.229L1910.36 538.152ZM7.36493 361.152L77.7843 359.991L62.1431 307.301L2.69287 345.229L7.36493 361.152ZM180.365 386.152L250.784 384.991L235.143 332.301L175.693 370.229L180.365 386.152ZM353.365 411.152L423.784 409.991L408.143 357.301L348.693 395.229L353.365 411.152ZM526.365 436.152L596.784 434.991L581.143 382.301L521.693 420.229L526.365 436.152ZM699.365 461.152L769.784 459.991L754.143 407.301L694.693 445.229L699.365 461.152ZM872.365 486.152L942.784 484.991L927.143 432.301L867.693 470.229L872.365 486.152ZM1045.36 511.152L1115.78 509.991L1100.14 457.301L1040.69 495.229L1045.36 511.152ZM1218.36 536.152L1288.78 534.99L1273.14 482.301L1213.69 520.229L1218.36 536.152ZM1391.36 561.152L1461.78 559.99L1446.14 507.301L1386.69 545.229L1391.36 561.152ZM1564.36 586.152L1634.78 584.99L1619.14 532.301L1559.69 570.229L1564.36 586.152ZM1737.36 611.152L1807.78 609.99L1792.14 557.301L1732.69 595.229L1737.36 611.152ZM1910.36 636.152L1980.78 634.99L1965.14 582.301L1905.69 620.229L1910.36 636.152ZM7.36493 459.152L77.7843 457.991L62.1431 405.301L2.69287 443.229L7.36493 459.152ZM180.365 484.152L250.784 482.991L235.143 430.301L175.693 468.229L180.365 484.152ZM353.365 509.152L423.784 507.991L408.143 455.301L348.693 493.229L353.365 509.152ZM526.365 534.152L596.784 532.99L581.143 480.301L521.693 518.229L526.365 534.152ZM699.365 559.152L769.784 557.99L754.143 505.301L694.693 543.229L699.365 559.152ZM872.365 584.152L942.784 582.99L927.143 530.301L867.693 568.229L872.365 584.152ZM1045.36 609.152L1115.78 607.99L1100.14 555.301L1040.69 593.229L1045.36 609.152ZM1218.36 634.152L1288.78 632.99L1273.14 580.301L1213.69 618.229L1218.36 634.152ZM1391.36 659.152L1461.78 657.99L1446.14 605.301L1386.69 643.229L1391.36 659.152ZM1564.36 684.152L1634.78 682.99L1619.14 630.301L1559.69 668.229L1564.36 684.152ZM1737.36 709.152L1807.78 707.99L1792.14 655.301L1732.69 693.229L1737.36 709.152ZM1910.36 734.152L1980.78 732.99L1965.14 680.301L1905.69 718.229L1910.36 734.152ZM7.36502 557.152L77.7844 555.991L62.1432 503.301L2.69297 541.229L7.36502 557.152ZM180.365 582.152L250.784 580.991L235.143 528.301L175.693 566.229L180.365 582.152ZM353.365 607.152L423.784 605.991L408.143 553.301L348.693 591.229L353.365 607.152ZM526.365 632.152L596.784 630.991L581.143 578.301L521.693 616.229L526.365 632.152ZM699.365 657.152L769.784 655.991L754.143 603.301L694.693 641.229L699.365 657.152ZM872.365 682.152L942.784 680.991L927.143 628.301L867.693 666.229L872.365 682.152ZM1045.36 707.152L1115.78 705.991L1100.14 653.301L1040.69 691.229L1045.36 707.152ZM1218.36 732.152L1288.78 730.991L1273.14 678.301L1213.69 716.229L1218.36 732.152ZM1391.36 757.152L1461.78 755.991L1446.14 703.301L1386.69 741.229L1391.36 757.152ZM1564.36 782.152L1634.78 780.991L1619.14 728.301L1559.69 766.229L1564.36 782.152ZM1737.36 807.152L1807.78 805.991L1792.14 753.301L1732.69 791.229L1737.36 807.152ZM1910.36 832.152L1980.78 830.991L1965.14 778.301L1905.69 816.229L1910.36 832.152Z" />
    </svg>
);

export default Bullhorn;