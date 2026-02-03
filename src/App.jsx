import { BrowserRouter, Route, Routes } from "react-router";
import {
  Home,
  Accordian,
  NestedComments,
  ImageSlider,
  Pagination,
  LiveChat,
  Search,
  CricketScore,
  TabForm,
  ProgressBar,
  OtpInput,
  ChipInput,
  NestedCheckbox,
  StarRatingPage,
} from "./Pages";
import { CustomHeader } from "./components";

function App() {
  return (
    <BrowserRouter>
      <CustomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/nested-comments" element={<NestedComments />} />
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/live-chat" element={<LiveChat />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cricket-score" element={<CricketScore />} />
        <Route path="/tab-form" element={<TabForm />} />
        <Route path="/progress-bar" element={<ProgressBar />} />
        <Route path="/otp-input" element={<OtpInput />} />
        <Route path="/chip-input" element={<ChipInput />} />
        <Route path="/nested-checkbox" element={<NestedCheckbox />} />
        <Route path="/star-rating" element={<StarRatingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
