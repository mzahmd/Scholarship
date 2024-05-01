import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LogoHeader from "@/components/LogoHeader"
import Information from "@/components/Information"

export default function AuthTabs() {
  return (
    <>
      <LogoHeader />
      <Tabs defaultValue="information" className="mx-10 p-4 border-2 border-gray-200">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="information">Information</TabsTrigger>
          <TabsTrigger value="login">Anmelden</TabsTrigger>
          <TabsTrigger value="create">Registrieren</TabsTrigger>
        </TabsList>
        <TabsContent value="information"><Information /></TabsContent>
        <TabsContent value="login">Change your password here.</TabsContent>
        <TabsContent value="create">Create your Account here.</TabsContent>
      </Tabs>
    </>
  )
}