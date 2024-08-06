import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 54 54" {...props}>
      <path d="M27 30.8147L34.1307 37.9447C34.6947 38.5091 35.3302 38.774 36.0373 38.7393C36.7449 38.7042 37.3807 38.4047 37.9447 37.8407C38.5091 37.2762 38.7913 36.6404 38.7913 35.9333C38.7913 35.2262 38.5091 34.5913 37.9447 34.0287L30.8147 26.9667L37.9447 19.8667C38.5091 19.3044 38.7913 18.6698 38.7913 17.9627C38.7913 17.2551 38.5091 16.6193 37.9447 16.0553C37.3807 15.4909 36.7449 15.2087 36.0373 15.2087C35.3302 15.2087 34.6947 15.4909 34.1307 16.0553L27 23.1853L19.8693 16.0553C19.3053 15.4909 18.6871 15.2087 18.0147 15.2087C17.3422 15.2087 16.7238 15.4909 16.1593 16.0553C15.5953 16.6193 15.3133 17.2551 15.3133 17.9627C15.3133 18.6698 15.5933 19.3053 16.1533 19.8693L23.1853 27L16.0553 34.1307C15.4909 34.6947 15.226 35.3129 15.2607 35.9853C15.2958 36.6578 15.5953 37.2762 16.1593 37.8407C16.7238 38.4047 17.3595 38.6867 18.0667 38.6867C18.7738 38.6867 19.4075 38.4067 19.968 37.8467L27 30.8147ZM27.0187 53.8813C23.2942 53.8813 19.8011 53.1833 16.5393 51.7873C13.2775 50.3909 10.4233 48.4696 7.97665 46.0233C5.53043 43.5767 3.6091 40.7236 2.21265 37.464C0.816652 34.204 0.118652 30.7058 0.118652 26.9693C0.118652 23.2333 0.816652 19.7456 2.21265 16.506C3.6091 13.2664 5.53043 10.4233 7.97665 7.97667C10.4233 5.53045 13.2764 3.60911 16.536 2.21267C19.796 0.816666 23.2942 0.118668 27.0307 0.118668C30.7667 0.118668 34.2544 0.816666 37.494 2.21267C40.7335 3.60911 43.5766 5.53045 46.0233 7.97667C48.4695 10.4233 50.3909 13.2713 51.7873 16.5207C53.1833 19.7704 53.8813 23.2573 53.8813 26.9813C53.8813 30.7058 53.1833 34.1989 51.7873 37.4607C50.3909 40.7224 48.4695 43.5767 46.0233 46.0233C43.5766 48.4696 40.7287 50.3909 37.4793 51.7873C34.2295 53.1833 30.7427 53.8813 27.0187 53.8813ZM27 47.348C32.6773 47.348 37.488 45.376 41.432 41.432C45.376 37.488 47.348 32.6773 47.348 27C47.348 21.3227 45.376 16.512 41.432 12.568C37.488 8.624 32.6773 6.652 27 6.652C21.3227 6.652 16.512 8.624 12.568 12.568C8.62399 16.512 6.65199 21.3227 6.65199 27C6.65199 32.6773 8.62399 37.488 12.568 41.432C16.512 45.376 21.3227 47.348 27 47.348Z" />
    </Svg>
  );
};

export default Icon;