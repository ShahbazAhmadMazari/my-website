Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
$img = [System.Windows.Forms.Clipboard]::GetImage()
if ($img -ne $null) {
    $img.Save('public/nextgen-openhouse.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
    Write-Output "Clipboard image saved to public/nextgen-openhouse.jpg"
} else {
    Write-Output "No image in clipboard"
}
