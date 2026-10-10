export function QrBox() {
  return (
    <div className="flex flex-col items-center p-2 rounded-xl bg-surface-container-low">
      <div className="w-20 h-20 bg-surface-container-lowest p-1 rounded-lg flex items-center justify-center shadow-xs">
        <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 100 100">
          <rect fill="currentColor" height="28" rx="2" width="28" x="5" y="5"></rect>
          <rect fill="white" height="20" width="20" x="9" y="9"></rect>
          <rect fill="currentColor" height="12" width="12" x="13" y="13"></rect>
          <rect fill="currentColor" height="28" rx="2" width="28" x="67" y="5"></rect>
          <rect fill="white" height="20" width="20" x="71" y="9"></rect>
          <rect fill="currentColor" height="12" width="12" x="75" y="13"></rect>
          <rect fill="currentColor" height="28" rx="2" width="28" x="5" y="67"></rect>
          <rect fill="white" height="20" width="20" x="9" y="71"></rect>
          <rect fill="currentColor" height="12" width="12" x="13" y="75"></rect>
          <rect fill="currentColor" height="18" width="6" x="38" y="8"></rect>
          <rect fill="currentColor" height="12" width="8" x="50" y="14"></rect>
          <rect fill="currentColor" height="16" rx="1" width="16" x="42" y="38"></rect>
          <rect fill="currentColor" height="8" width="12" x="68" y="42"></rect>
          <rect fill="currentColor" height="18" width="8" x="84" y="54"></rect>
          <rect fill="currentColor" height="8" width="18" x="38" y="68"></rect>
          <rect fill="currentColor" height="14" width="14" x="62" y="72"></rect>
          <rect fill="currentColor" height="10" width="12" x="42" y="82"></rect>
          <circle cx="50" cy="50" fill="white" r="3"></circle>
        </svg>
      </div>
      <span className="font-code-num text-[10px] text-on-surface-variant font-semibold mt-1">SCAN UNTUK VERIFIKASI</span>
      <span className="font-label-sm text-[9px] text-secondary font-bold">SHA256: 9b2d8f1e...4a</span>
    </div>
  )
}

export function SignatureBox({ tanggal }) {
  return (
    <div className="flex flex-col items-center text-center relative">
      <span className="font-label-sm text-label-sm text-on-surface-variant">{tanggal}</span>
      <span className="font-title-sm text-title-sm font-semibold text-on-surface">Ketua RT 04 Sukamaju,</span>
      <div className="relative w-36 h-20 flex items-center justify-center my-1">
        <div className="absolute -left-2 top-0 w-20 h-20 rounded-full border-2 border-secondary/70 flex items-center justify-center pointer-events-none rotate-[-12deg] bg-secondary/5">
          <div className="w-16 h-16 rounded-full border border-dashed border-secondary/60 flex flex-col items-center justify-center text-center p-0.5">
            <span className="font-bold text-[7px] text-secondary tracking-tighter uppercase leading-none">RUKUN TETANGGA 04</span>
            <span className="material-symbols-outlined text-xs text-secondary my-0.5">home_pin</span>
            <span className="font-bold text-[7px] text-secondary tracking-tighter uppercase leading-none">SUKAMAJU</span>
          </div>
        </div>
        <svg className="w-32 h-14 text-primary relative z-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 200 80">
          <path d="M 20 60 C 35 20, 45 10, 55 45 C 65 70, 75 25, 90 20 C 105 15, 115 50, 130 45 C 145 40, 160 30, 180 50 M 45 45 L 85 45 M 100 55 C 110 65, 140 60, 170 55"></path>
        </svg>
      </div>
      <span className="font-title-sm text-title-sm font-bold text-on-surface underline">H. BAMBANG SUDIRO</span>
      <span className="font-code-num text-label-sm text-on-surface-variant">REG-RT.04.08.001</span>
    </div>
  )
}

export function KopSurat() {
  return (
    <div className="flex items-center justify-between pb-3 border-b-2 border-on-surface">
      <div className="w-14 h-14 flex items-center justify-center p-1 bg-surface-container rounded-lg">
        <img
          className="w-full h-full object-contain"
          alt="Logo RT"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2KumfohOSyE3tIOGRwDqqVENjToDzwgmojYbvzCFQcVMYD9f_ZE_oNDASUVVeeDqnN7dDFMDBCU0GM0QOUXfZqGj7an2ZZNL0-l6VdjpG_dQbefliKrFMlpcBK2mdx4rTFURaSJHXJc5TCDU3K1WH2DCvLkV7nTqRvfahOSDkSSsG4wapqSWEKhtwrvNTQUgbSc_oNQeppokJoXt6vjbtUwQ0sXiO10KP0js33UJaj-qZYTYZ43T9AQ"
        />
      </div>
      <div className="flex flex-col text-center flex-1 px-2">
        <span className="font-label-sm text-label-sm font-bold tracking-widest uppercase text-on-surface-variant">RUKUN TETANGGA 04 / RUKUN WARGA 08</span>
        <span className="font-title-md text-title-md font-bold tracking-tight text-primary">KELURAHAN SUKAMAJU - KECAMATAN CILODONG</span>
        <span className="font-headline-sm text-headline-sm font-black text-on-surface tracking-tighter">KOTA DEPOK - JAWA BARAT</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">Sekretariat: Balai Warga RT 04 Kompleks Griya Asri | Telp: (021) 8774-0408</span>
      </div>
      <div className="w-14 h-14 flex flex-col items-center justify-center bg-surface-container-low rounded-lg p-1 text-center">
        <span className="font-label-sm text-label-sm font-bold text-secondary">SIP-RT</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">VALID</span>
      </div>
    </div>
  )
}
