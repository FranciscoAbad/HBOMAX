import React, { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  changeValue(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ changeValue }) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-bar-icon">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAV1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////+ORg7oAAAAHHRSTlMAIO/fn79AcBCAr89vfwFgMF+gsFCQTwD+7r6eKS+K8wAAAadJREFUeF7tlutqwzAMRmU5dnzLkt521fs/55gpM10zSS6hsNHzV+H4ixQiw3/iQfCnZC0RYU7Rh1stxSFdkHa3aCaka+xkoI+CtI7tSmUy/Y7Vh9ohcaA21NQEOJTFAIDxJTU7TZ0e5y8KR9dlmpqG6Z1sKmcNjrDGSGekPhkURmMsVVCYnW0eweSAozSPaBqFZ+TYC1YRBnFiIzSYjkepQxkknBBppooBCU+VZ/6gA8g4dnChnaOLhIGrWtCA1eRhldjeTGTPjTe1osjIHZpbXJGF+1CwDV/EcP2kCuigyl8R2e4eISdaQINnprbdd3SqxQEk2qGRi4ugwXIfb8BWFThSJQh/GZnEPzmTMpIRlmRAZaQs/bmibosUcYsE1Ow1g/IWHbs2LUdW7357p9sIzPz9qCCRcrSRzuTrUN7RN4PeROm4ruk3kU3F11vtUgakhtI0InGgU5uMZTzOwF5tgnFF1abZTE9yqLimwhgAlKbG7H72Zq6afhMEH1NGIrI2nXy1iKZ+hj7Tw/SylSnCRqYDbGQaYAPTK9GbgQ2Y3z8WuDcPPgGiPGHwl+gL/wAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <input
          type="text"
          className="search-bar-input"
          placeholder="Find movies, shows, and more"
          onChange={changeValue}
        />
      </div>
    </div>
  );
};
