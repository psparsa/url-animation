import React from "react";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  const [isWorking, setIsWorking] = React.useState<boolean>(false);

  const quarantineSideEffect = (url: string, startFrom: number) => {
    const urlCharacters = url.split("");
    const currentUrl = history.location.pathname;

    if (currentUrl === "/") {
      let current = startFrom > 0 ? url.substr(0, startFrom) : "";
      console.log("Look At This: ", current);

      for (let i = startFrom; i < urlCharacters.length; i++) {
        (function (index) {
          setTimeout(function () {
            current += urlCharacters[i];
            if (i < urlCharacters.length - 1) {
              console.log(current + "🔨⏳");
              history.replace(current + "🔨⏳");
            } else {
              console.log(current);
              history.replace(current);
            }
          }, i * 60);
        })(i);
      }
    } else {
      let currentDel = currentUrl;
      for (let i = 1; i < currentUrl.length + 1; i++) {
        (function (index) {
          setTimeout(function () {
            if (i < currentUrl.length) {
              if (i < currentUrl.length - 1) {
                history.replace(
                  currentDel.slice(0, currentDel.length - i) + "💸🛠"
                );
              } else {
                history.replace(currentDel.slice(0, currentDel.length - i));
              }
            } else {
              quarantineSideEffect(url, startFrom);
            }
          }, i * 40);
        })(i);
      }
    }
  };

  const handleDisableBTNs = React.useMemo(
    () => (isWorking ? "animeDisable" : "anime"),
    [isWorking]
  );

  const handleClickBTNs = React.useCallback(
    (param1, param2) => {
      if (!isWorking) {
        quarantineSideEffect(param1, param2);
        setIsWorking(true);
        setTimeout(() => {
          setIsWorking(false);
        }, 1500);
      }
    },
    [isWorking]
  );

  return (
    <div id="Header">
      <h1 className={handleDisableBTNs} onClick={() => handleClickBTNs("/", 0)}>
        Home
      </h1>
      <h1
        className={handleDisableBTNs}
        onClick={() => handleClickBTNs("/info_info_info", 4)}
      >
        Info
      </h1>
      <h1
        className={handleDisableBTNs}
        onClick={() => handleClickBTNs("/blog_blog_blog", 4)}
      >
        Blog
      </h1>
    </div>
  );
}