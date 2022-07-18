import { useState, useEffect, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "../../Popper";
import AccountItems from "../../AccountItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "../../Icons";
import { useDebounce } from "../../../hooks";
import * as searchService from "../../../apiServices/searchService";
const cs = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef();

  const debounce = useDebounce(searchValue, 700);
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    //   fetch(
    //     // encodeURIComponent là tránh nhập kí tự đặc biệt trong input
    //     `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
    //       debounce
    //     )}&type=less`
    //   )
    //     .then((res) => res.json())
    //     .then((res) => {
    //       setSearchResult(res.data);
    //       setIsLoading(false);
    //     })
    //     .catch(() => {
    //       setIsLoading(false);
    //     });
    // }, [debounce]);
    const fetchApi = async () => {
      setIsLoading(true);
      //lấy API
      const res = await searchService.search(debounce);

      setSearchResult(res.data);
      setIsLoading(false);
    };
    fetchApi();
  }, [debounce]);
  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attr) => (
          <div className={cs("search-result")} tabIndex="-1" {...attr}>
            <PopperWrapper>
              <h4 className={cs("search-title")}>Account</h4>
              {searchResult.map((result) => {
                return <AccountItems key={result.id} data={result} />;
              })}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        {/* tìm kiếm */}
        <div className={cs("search")}>
          <input
            ref={searchRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {searchValue && !isLoading && (
            <button
              className={cs("clear")}
              onClick={() => {
                setSearchValue("");
                searchRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {isLoading && (
            <FontAwesomeIcon className={cs("loading")} icon={faSpinner} />
          )}
          <button
            className={cs("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
