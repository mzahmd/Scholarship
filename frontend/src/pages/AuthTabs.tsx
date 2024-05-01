import Information from "@/components/Information"
import Login from "@/components/Login"
import LogoHeader from "@/components/LogoHeader"
import Register from "@/components/Register"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        <TabsContent value="login"><Login /></TabsContent>
        <TabsContent value="create"><Register /></TabsContent>
      </Tabs>
      <p className="text-center text-gray-500 text-xs">&copy; Made by Minhaz</p>
    </>
  )
}