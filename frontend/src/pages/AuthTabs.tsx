import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LogoHeader from "@/components/LogoHeader"

export default function AuthTabs() {
  return (
    <>
      <LogoHeader />
      <Tabs defaultValue="information" className="content-center">
        <TabsList className="">
          <TabsTrigger value="information">Information</TabsTrigger>
          <TabsTrigger value="login">Anmelden</TabsTrigger>
          <TabsTrigger value="create">Konto erstellen</TabsTrigger>
        </TabsList>
        <TabsContent value="information">Make changes to your account here.</TabsContent>
        <TabsContent value="login">Change your password here.</TabsContent>
        <TabsContent value="create">Create your Account here.</TabsContent>
      </Tabs>
    </>
  )
}