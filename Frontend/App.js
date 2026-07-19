import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import FounderDashboard from "./pages/Founder/Dashboard";
import InvestorDashboard from "./pages/Investor/Dashboard";
import AdminDashboard from "./pages/Admin/Dashboard";

import NotFound from "./pages/NotFound/NotFound";

import StartupProfile from "./pages/Founder/StartupProfile";
import UploadDocuments from "./pages/Founder/UploadDocuments";
import AIMarketAnalysis from "./pages/Founder/AIMarketAnalysis";
import ReadinessScore from "./pages/Founder/ReadinessScore";
import Proposals from "./pages/Founder/Proposals";
import Meetings from "./pages/Founder/Meetings";
import Notifications from "./pages/Founder/Notifications";
import SearchStartups from "./pages/Investor/SearchStartups";
import StartupDetails from "./pages/Investor/StartupDetails";
import InvestmentProposal from "./pages/Investor/InvestmentProposal";
import AccessRequest from "./pages/Investor/AccessRequest";
import InvestorDirectory from "./pages/Founder/InvestorDirectory";
import ProposalInbox from "./pages/Investor/ProposalInbox";
import ActivityDashboard from "./pages/Founder/ActivityDashboard";
import AccessApproval from "./pages/Founder/AccessApproval";
import Chat from "./pages/Chat/Chat";
import MeetingScheduler from "./pages/Meetings/MeetingScheduler";
import Portfolio from "./pages/Investor/Portfolio";
import VerificationPanel from "./pages/Admin/VerificationPanel";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/founder/dashboard"
          element={<FounderDashboard />}
        />

        <Route
          path="/investor/dashboard"
          element={<InvestorDashboard />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route path="*" element={<NotFound />} />
        
        <Route path="/founder/startup-profile" 
        element={<StartupProfile />} />
        
        <Route path="/founder/upload"
        element={<UploadDocuments/>}/>

        <Route 
            path="/founder/analysis"
            element={<AIMarketAnalysis/>}
        />

        <Route
          path="/founder/score"
          element={<ReadinessScore/>}
        />

        <Route
            path="/founder/proposals"
            element={<Proposals/>}
        />

        <Route
            path="/founder/meetings"
            element={<Meetings/>}
        />

        <Route
            path="/founder/notifications"
            element={<Notifications/>}
        />

        <Route
            path="/investor/search"
            element={<SearchStartups/>}
        />
      
        <Route
            path="/investor/startup-details/:id"
            element={<StartupDetails />}
        />

        <Route
            path="/investor/proposal"
            element={<InvestmentProposal/>}
        />

        <Route
            path="/investor/access-request"
            element={<AccessRequest/>}
        />

        <Route
            path="/founder/investors"
            element={<InvestorDirectory/>}
        />

        <Route
            path="/investor/proposals"
            element={<ProposalInbox/>}
        />

        <Route
            path="/founder/activity"
            element={<ActivityDashboard/>}
        />

        <Route
            path="/founder/access-approval"
            element={<AccessApproval/>}
        />

        <Route
            path="/chat"
            element={<Chat/>}
        />

        <Route
            path="/meeting-scheduler"
            element={<MeetingScheduler/>}
        />
        
        <Route
            path="/investor/portfolio"
            element={<Portfolio/>}
        />

        <Route
            path="/admin/verification"
            element={<VerificationPanel/>}
        />





      </Routes>
    </BrowserRouter>
  );
}

export default App;