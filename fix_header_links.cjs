const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components/Header.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const desktopOld = `<Link href="/investments#growth" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Growth Options</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients focused on long-term value creation.</span>
                      </div>
                    </Link>
                    
                    <Link href="/investments#income" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Income Options</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients interested in income-focused positioning.</span>
                      </div>
                    </Link>
                    
                    <Link href="/investments#flexible-access" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <SlidersHorizontal className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Flexible Access</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients who may need a more adaptable route.</span>
                      </div>
                    </Link>

                    <Link href="/investments#fixed-return" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Fixed Return Options</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients who prefer defined-term positioning.</span>
                      </div>
                    </Link>

                    <Link href="/investments#offshore" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Offshore Options</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients exploring global exposure.</span>
                      </div>
                    </Link>`;

const desktopNew = `<Link href="/investments/private-equity-growth" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Private Equity Growth Option</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients focused on long-term value creation.</span>
                      </div>
                    </Link>
                    
                    <Link href="/investments/private-equity-income" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Private Equity Income Option</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients interested in income-focused positioning.</span>
                      </div>
                    </Link>
                    
                    <Link href="/investments/private-equity-flexible-access" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <SlidersHorizontal className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Private Equity Flexible Access Option</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients who may need a more adaptable route.</span>
                      </div>
                    </Link>

                    <Link href="/investments/fixed-return-growth" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Fixed Return Growth Option</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients who prefer defined-term growth.</span>
                      </div>
                    </Link>

                    <Link href="/investments/fixed-return-income" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Fixed Return Income Option</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients who prefer defined-term income.</span>
                      </div>
                    </Link>

                    <Link href="/investments/offshore-global" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Offshore Global Option</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients exploring global exposure.</span>
                      </div>
                    </Link>`;

const mobileOld = `<Link href="/investments#growth" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <TrendingUp className="w-4 h-4 text-navy/70" />
                                Growth Options
                              </Link>
                              <Link href="/investments#income" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <Wallet className="w-4 h-4 text-navy/70" />
                                Income Options
                              </Link>
                              <Link href="/investments#flexible-access" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <SlidersHorizontal className="w-4 h-4 text-navy/70" />
                                Flexible Access
                              </Link>
                              <Link href="/investments#fixed-return" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <Lock className="w-4 h-4 text-navy/70" />
                                Fixed Return Options
                              </Link>
                              <Link href="/investments#offshore" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <Globe className="w-4 h-4 text-navy/70" />
                                Offshore Options
                              </Link>`;

const mobileNew = `<Link href="/investments/private-equity-growth" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <TrendingUp className="w-4 h-4 text-navy/70" />
                                Private Equity Growth Option
                              </Link>
                              <Link href="/investments/private-equity-income" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <Wallet className="w-4 h-4 text-navy/70" />
                                Private Equity Income Option
                              </Link>
                              <Link href="/investments/private-equity-flexible-access" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <SlidersHorizontal className="w-4 h-4 text-navy/70" />
                                Private Equity Flexible Access Option
                              </Link>
                              <Link href="/investments/fixed-return-growth" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <Lock className="w-4 h-4 text-navy/70" />
                                Fixed Return Growth Option
                              </Link>
                              <Link href="/investments/fixed-return-income" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <Lock className="w-4 h-4 text-navy/70" />
                                Fixed Return Income Option
                              </Link>
                              <Link href="/investments/offshore-global" onClick={closeMenus} className="flex items-center gap-3 text-xs font-sans text-ink hover:text-navy">
                                <Globe className="w-4 h-4 text-navy/70" />
                                Offshore Global Option
                              </Link>`;

content = content.replace(desktopOld, desktopNew);
content = content.replace(mobileOld, mobileNew);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed Header.tsx');
