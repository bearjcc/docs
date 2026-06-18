# Fail Mintlify MDX that links to private repo corpora (not for publishing).
param(
    [string]$MintlifyRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

$errors = @()
$patterns = @(
    'Documentation/DriveWorks-Docs',
    'Documentation/Toolkit',
    'Documentation\\DriveWorks-Docs',
    'Documentation\\Toolkit',
    'Autex Toolkit/docs/',
    'Autex Toolkit\\docs\\',
    'DriveWorks-Docs/',
    'DriveWorks-Docs\\'
)

$excludeRel = @(
    'reference\authoring-conventions.mdx',
    'reference/authoring-conventions.mdx'
)

Get-ChildItem -Path $MintlifyRoot -Filter '*.mdx' -Recurse | ForEach-Object {
    $rel = $_.FullName.Substring($MintlifyRoot.Length).TrimStart('\', '/')
    if ($excludeRel -contains $rel) { return }

    $lineNum = 0
    foreach ($line in Get-Content -LiteralPath $_.FullName) {
        $lineNum++
        foreach ($pat in $patterns) {
            if ($line -like "*$pat*") {
                $errors += "${rel}:${lineNum}: forbidden path reference '$pat'"
            }
        }
    }
}

if ($errors.Count -gt 0) {
    Write-Error ("Mintlify repo-path check failed:`n" + ($errors -join "`n"))
    exit 1
}

$fileCount = (Get-ChildItem -Path $MintlifyRoot -Filter '*.mdx' -Recurse).Count
Write-Host "Mintlify repo-path check passed ($fileCount files)."
exit 0
