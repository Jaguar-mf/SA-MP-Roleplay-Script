"use client"

import { useState } from "react"
import { setupAdmin } from "@/app/actions/setup-admin"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Loader2 } from "lucide-react"

export default function SetupPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  async function handleSetup() {
    setLoading(true)
    setResult(null)

    const response = await setupAdmin()
    setResult(response)
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Setup</CardTitle>
          <CardDescription>Create the admin account for your thesis invitation system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-slate-600 space-y-2">
            <p>
              <strong>Email:</strong> aymaneouhassoun@ouhassoun.com
            </p>
            <p className="text-xs text-slate-500">This will create your admin account and set it up in the database.</p>
          </div>

          <Button onClick={handleSetup} disabled={loading || result?.success} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Admin Account...
              </>
            ) : result?.success ? (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Account Created!
              </>
            ) : (
              "Create Admin Account"
            )}
          </Button>

          {result && (
            <div
              className={`p-4 rounded-lg border ${
                result.success ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"
              }`}
            >
              <div className="flex items-start gap-2">
                {result.success ? (
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                )}
                <div className="text-sm">
                  <p className="font-medium">{result.success ? "Success!" : "Error"}</p>
                  <p className="mt-1">{result.success ? result.message : result.error}</p>
                  {result.success && (
                    <a
                      href="/admin/login"
                      className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium underline"
                    >
                      Go to Login →
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
