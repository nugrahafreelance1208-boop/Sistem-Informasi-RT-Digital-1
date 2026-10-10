import { KopSurat, QrBox, SignatureBox } from './SuratDocParts'

export default function SuratPreview({ data, onToast }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl shadow-lg p-space-md flex flex-col gap-space-md">
      <div className="flex items-center justify-between border-b pb-space-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-xl">verified_user</span>
          <div className="flex flex-col">
            <span className="font-title-sm text-title-sm font-bold text-on-surface">Live Preview: Surat Pengantar RT</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Rendering Real-Time Standar ISO Pemprov</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant" title="Perbesar" type="button" onClick={() => onToast('Memperbesar preview dokumen...')}>
            <span className="material-symbols-outlined text-lg">zoom_in</span>
          </button>
          <button className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant" title="Fullscreen" type="button" onClick={() => onToast('Membuka preview fullscreen...')}>
            <span className="material-symbols-outlined text-lg">fullscreen</span>
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest shadow-md rounded-xl p-6 sm:p-7 flex flex-col gap-4 text-on-surface relative overflow-hidden bg-gradient-to-b from-surface-container-low/20 via-surface-container-lowest to-surface-container-lowest">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <span className="material-symbols-outlined text-[260px] text-primary">account_balance</span>
        </div>
        <KopSurat />
        <div className="flex flex-col items-center text-center mt-1">
          <span className="font-title-md text-title-md font-black tracking-wide uppercase underline decoration-2 underline-offset-4 text-on-surface">{data.judul}</span>
          <span className="font-code-num text-body-sm font-semibold text-on-surface mt-1">{data.nomor}</span>
        </div>
        <div className="flex flex-col gap-2.5 font-body-sm text-body-sm leading-relaxed text-on-surface">
          <p>Yang bertanda tangan di bawah ini Ketua RT 04 / RW 08 Kelurahan Sukamaju, Kecamatan Cilodong, Kota Depok, dengan ini menerangkan bahwa:</p>
          <div className="grid grid-cols-12 gap-y-1 bg-surface-container-low/50 p-2.5 rounded-lg text-xs">
            <div className="col-span-4 text-on-surface-variant font-medium">Nama Lengkap</div>
            <div className="col-span-8 font-bold text-on-surface">: {data.nama}</div>
            <div className="col-span-4 text-on-surface-variant font-medium">NIK</div>
            <div className="col-span-8 font-code-num font-semibold text-on-surface">: {data.nik}</div>
            <div className="col-span-4 text-on-surface-variant font-medium">Tempat / Tgl Lahir</div>
            <div className="col-span-8 text-on-surface">: {data.lahir}</div>
            <div className="col-span-4 text-on-surface-variant font-medium">Jenis Kelamin / Agama</div>
            <div className="col-span-8 text-on-surface">: {data.gender}</div>
            <div className="col-span-4 text-on-surface-variant font-medium">Alamat KTP / Domisili</div>
            <div className="col-span-8 text-on-surface">: {data.alamat}</div>
            <div className="col-span-4 text-on-surface-variant font-medium">Keperluan Surat</div>
            <div className="col-span-8 font-semibold text-primary">: {data.keperluan}</div>
          </div>
          <p className="text-xs text-on-surface-variant">Orang tersebut di atas adalah benar-benar warga penduduk RT 04 / RW 08 dan sepanjang pengetahuan kami selama bertempat tinggal berkelakuan baik serta belum pernah tersangkut perkara kriminal atau melanggar ketertiban umum.</p>
          <p className="text-xs text-on-surface-variant">Demikian surat pengantar ini dibuat dengan sebenarnya untuk dapat dipergunakan sebagaimana mestinya.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2 pt-2 items-end">
          <QrBox />
          <SignatureBox tanggal={data.tanggal} />
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <div className="grid grid-cols-2 gap-space-sm">
          <button className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-on-primary py-2.5 px-3 rounded-xl font-title-sm text-title-sm font-bold transition-all shadow-sm" type="button" onClick={() => onToast('Mengunduh PDF resmi surat...')}>
            <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
            <span>Download PDF Resmi</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 px-3 rounded-xl font-title-sm text-title-sm font-semibold transition-all" type="button" onClick={() => onToast('Menyiapkan cetakan fisik surat...')}>
            <span className="material-symbols-outlined text-lg">print</span>
            <span>Cetak Fisik</span>
          </button>
        </div>
        <button className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-on-secondary-container text-on-secondary py-2.5 px-space-md rounded-xl font-title-sm text-title-sm font-semibold transition-all shadow-sm" type="button" onClick={() => onToast('Mengirim link surat ke WhatsApp warga...')}>
          <span className="material-symbols-outlined text-lg">chat</span>
          <span>Kirim Link Surat Langsung ke WhatsApp Warga</span>
        </button>
      </div>
    </div>
  )
}
