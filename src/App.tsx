import { AboutWindow } from "@/components/about-window";
import { CommonLayout, VideoClubLayout } from "@/components/layout";
import { RVCWebsiteCatalogPage } from "@/components/rvc-website/catalog";
import { UnsupportedResolutionHandler } from "@/components/unsupported-resolution-handler";
import { authProvider } from "@/providers/auth-provider";
import { notificationProvider } from "@/providers/notification-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { HomePage } from "@/routes/home-page";
import { LoginPage } from "@/routes/login-page";
import {
  RVCWebsitePageHome,
  RVCWebsitePageTitleDetails,
} from "@/routes/rvc-website";
import {
  VideoClubMemberPageCreate,
  VideoClubMemberPageEdit,
  VideoClubMemberPageList,
  VideoClubMemberPageShow,
  VideoClubPageBrowseTitles,
  VideoClubPageCreateTitle,
  VideoClubPageShowTitle,
  VideoClubPageTapeRent,
  VideoClubPageTapeReturn,
  VideoClubPageTapeSelectMember,
  VideoClubReportPage,
  VideoClubSettingsPage,
} from "@/routes/video-club";
import { supabaseClient } from "@/supabase-client";
import { Authenticated, ErrorComponent, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import dayjs from "dayjs";
import durationPlugin from "dayjs/plugin/duration";
import { PokdexPageHome } from "./routes/pokedex-page";
dayjs.extend(durationPlugin);

const App = () => {
  return (
    <DevtoolsProvider>
      <BrowserRouter>
        <ThemeProvider>
          <UnsupportedResolutionHandler>
            <Refine
              dataProvider={dataProvider(supabaseClient)}
              liveProvider={liveProvider(supabaseClient)}
              authProvider={authProvider}
              routerProvider={routerProvider}
              notificationProvider={notificationProvider}
              resources={[
                {
                  name: "titles",
                  list: "/video-club/titles",
                  show: "/video-club/titles/:id",
                  create: "/video-club/titles/new",
                },
                {
                  name: "rentals",
                  list: "/video-club/tapes/rent",
                  create: "/video-club/tapes/rent/:memberId",
                  identifier: "rentals-rent",
                },
                {
                  name: "rentals",
                  list: "/video-club/tapes/return",
                  create: "/video-club/tapes/return/:memberId",
                  identifier: "rentals-return",
                },
                {
                  name: "members",
                  list: "/video-club/members",
                  show: "/video-club/members/:id",
                  create: "/video-club/members/new",
                  edit: "/video-club/members/:id/edit",
                },
                {
                  name: "reports",
                  list: "/video-club/reports",
                },
                {
                  name: "settings",
                  list: "/video-club/settings",
                },
              ]}
              options={{
                liveMode: "auto",
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-routes"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <CommonLayout>
                        <Outlet />
                      </CommonLayout>
                    </Authenticated>
                  }
                >
                  <Route index element={<HomePage />} />
                  <Route
                    path="/video-club"
                    element={
                      <VideoClubLayout>
                        <Outlet />
                        <AboutWindow />
                      </VideoClubLayout>
                    }
                  >
                    <Route
                      path="titles"
                      element={
                        <>
                          <VideoClubPageBrowseTitles />
                          <Outlet />
                        </>
                      }
                    >
                      <Route index />
                      <Route path=":id" element={<VideoClubPageShowTitle />} />
                    </Route>
                    <Route
                      path="titles/new"
                      element={<VideoClubPageCreateTitle />}
                    />
                    <Route path="tapes" element={<Outlet />}>
                      <Route path="rent" element={<Outlet />}>
                        <Route
                          index
                          element={
                            <VideoClubPageTapeSelectMember variant="rent" />
                          }
                        />
                        <Route
                          path=":memberId"
                          element={<VideoClubPageTapeRent />}
                        />
                      </Route>
                      <Route path="return" element={<Outlet />}>
                        <Route
                          index
                          element={
                            <VideoClubPageTapeSelectMember variant="return" />
                          }
                        />
                        <Route
                          path=":memberId"
                          element={<VideoClubPageTapeReturn />}
                        />
                      </Route>
                    </Route>
                    <Route path="members" element={<Outlet />}>
                      <Route index element={<VideoClubMemberPageList />} />
                      <Route
                        path="new"
                        element={<VideoClubMemberPageCreate />}
                      />
                      <Route path=":id" element={<VideoClubMemberPageShow />} />
                      <Route
                        path=":id/edit"
                        element={<VideoClubMemberPageEdit />}
                      />
                    </Route>

                    <Route path="reports" element={<Outlet />}>
                      <Route index element={<VideoClubReportPage />} />
                    </Route>

                    <Route path="settings" element={<Outlet />}>
                      <Route index element={<VideoClubSettingsPage />} />
                    </Route>
                  </Route>
                  <Route path="/pokedex" element={<Outlet />}>
                    <Route index element={<PokdexPageHome />} />
                  </Route>
                  <Route path="rvc-website" element={<Outlet />}>
                    <Route index element={<RVCWebsitePageHome />} />
                    <Route
                      path="titles/:titleId"
                      element={<RVCWebsitePageTitleDetails />}
                    />
                    <Route path="catalog" element={<RVCWebsiteCatalogPage />} />
                    <Route
                      path="catalog/:catalogLetter"
                      element={<RVCWebsiteCatalogPage />}
                    />
                  </Route>
                </Route>

                <Route
                  element={
                    <Authenticated key="auth-pages" fallback={<Outlet />}>
                      <Navigate to="/" />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<LoginPage />} />
                </Route>

                <Route
                  element={
                    <Authenticated key="catch-all">
                      <Outlet />
                    </Authenticated>
                  }
                >
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
              </Routes>
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
              <Toaster />
            </Refine>
          </UnsupportedResolutionHandler>
        </ThemeProvider>
        <DevtoolsPanel />
      </BrowserRouter>
    </DevtoolsProvider>
  );
};

export default App;
