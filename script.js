function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Juan Jose Acuña
TEL:+57 3023565321
EMAIL;type=work: gerencia@gibracompany.com
NOTA: Asesor comercial Gibra company
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
