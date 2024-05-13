// import styles from './styles.module.css';
import { Header } from '@/app/mega-menu-header/header';
import { Slider } from '@/app/mega-menu-header/slider';

// const images = [
//   'public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
// ];

export default function MegaMenuHeaderHome() {
  return (
    <div>
      <Header />
      <div>
        <Slider />
        <div>main</div>
      </div>
      {/* <Fotter/> */}
    </div>
  );
}
