import React from 'react';
import styles from './video_header.module.css';

const VideoHeader = (props) => {
    
    const inputRef = React.createRef();
    const onSubmit = (event) =>{
      event.preventDefault();
      const name = inputRef.current.value;
      if(name !== ''){
        props.onSearch(name);
      }
    };

    return (
      <div className={styles.container}>
        <ul className={styles.left}>
          <li>
            <i className="fab fa-youtube"></i>
          </li>
          <li>
            Youtube
          </li>
        </ul>
        <form className={styles.right} onSubmit={onSubmit}>
          <input ref={inputRef} type="text"  className={styles.right__input}/>
          <button>x</button>
          <div onClick={onSubmit}><i className="fas fa-search"></i></div>
        </form>
      </div>
    );
};

export default VideoHeader;