import Carousel from 'react-bootstrap/Carousel';
import styles from './Courcel.module.css';

function UserCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={styles.carousel_card}>
          <img className="d-block w-100 " src="/user1.jpg" alt="First slide" />
        </div>
        <Carousel.Caption>
          <h1 className="display-1 ">First slide label</h1>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.carousel_card}>
          <img className="d-block w-100" src="/user2.jpg" alt="First slide" />
        </div>

        <Carousel.Caption>
          <h3 className="display-1 ">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.carousel_card}>
          <img className="d-block w-100 " src="/user3.jpg" alt="First slide" />
        </div>

        <Carousel.Caption>
          <h3 className="display-1 ">Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.carousel_card}>
          <img className="d-block w-100" src="/user4.jpg" alt="First slide" />
        </div>

        <Carousel.Caption>
          <h3 className="display-1 ">Fifth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>{' '}
      <Carousel.Item>
        <div className={styles.carousel_card}>
          <img className="d-block w-100" src="/user5.jpg" alt="First slide" />
        </div>

        <Carousel.Caption>
          <h3 className="display-1 ">Sixth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>{' '}
      <Carousel.Item>
        <div className={styles.carousel_card}>
          <img className="d-block w-100" src="/user6.jpg" alt="First slide" />
        </div>

        <Carousel.Caption>
          <h3 className="display-1 ">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UserCarousel;
