"use strict";
(self.webpackChunkrubic = self.webpackChunkrubic || []).push([
  [88],
  {
    82088: (i_, pi, l) => {
      l.r(pi), l.d(pi, { SwapsModule: () => en });
      var hr = l(19132),
        T = l(49671),
        ce = l(25302),
        b = l(37522),
        A = l(67084),
        di = l(57156),
        Tt = l(83905),
        W = l(68151),
        J = l(54750),
        j = l(57990),
        mi = l(50590),
        re = l(39300),
        ye = l(18505),
        N = l(63900),
        w = l(61135),
        $ = l(39841),
        o = l(83428),
        e = l(94650);
      class oe {
        constructor(t) {
          (this.swapFormService = t),
            (this._address$ = new w.X(null)),
            (this.address$ = this._address$.asObservable()),
            (this._isAddressRequired$ = new w.X(!1)),
            (this.isAddressRequired$ = this._isAddressRequired$.asObservable()),
            (this._isAddressValid$ = new w.X(!1)),
            (this.isAddressValid$ = this._isAddressValid$.asObservable()),
            this.watchIsAddressRequired();
        }
        get address() {
          return this._address$.getValue();
        }
        watchIsAddressRequired() {
          (0, $.a)([
            this.swapFormService.fromBlockchain$,
            this.swapFormService.toBlockchain$,
          ]).subscribe(([t, n]) => {
            let i, a;
            try {
              i = o.BlockchainsInfo.getChainType(t);
            } catch {}
            try {
              a = o.BlockchainsInfo.getChainType(n);
            } catch {}
            this._isAddressRequired$.next(t && n && t !== n && (!a || i !== a));
          });
        }
        setAddress(t) {
          this._address$.next(t);
        }
        setIsAddressValid(t) {
          this._isAddressValid$.next(t);
        }
      }
      (oe.ɵfac = function (t) {
        return new (t || oe)(e.ɵɵinject(A.q));
      }),
        (oe.ɵprov = e.ɵɵdefineInjectable({ token: oe, factory: oe.ɵfac }));
      var z = l(35628),
        m = l(36895),
        ie = l(68031),
        R = l(33112),
        E = l(89383);
      const uo = function (r) {
        return { slippage: r };
      };
      function go(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 9),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵelement(3, "img", 10),
            e.ɵɵpipe(4, "translate"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                2,
                "warningModal.slippageAmount",
                e.ɵɵpureFunction1(7, uo, n.highSlippage)
              ),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "tuiHint",
              e.ɵɵpipeBind1(4, 5, "warningModal.highSlippage")
            );
        }
      }
      const ho = function (r) {
        return { priceImpact: r };
      };
      function fo(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 9),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵelement(3, "img", 10),
            e.ɵɵpipe(4, "translate"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                2,
                "warningModal.priceImpactAmount",
                e.ɵɵpureFunction1(7, ho, n.highPriceImpact)
              ),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "tuiHint",
              e.ɵɵpipeBind1(4, 5, "warningModal.highPriceImpact")
            );
        }
      }
      class nn {
        constructor(t) {
          (this.context = t),
            (this.highSlippage = this.context.data.highSlippage),
            (this.highPriceImpact = this.context.data.highPriceImpact);
        }
        confirm() {
          this.context.completeWith(!0);
        }
        cancel() {
          this.context.completeWith(!1);
        }
      }
      (nn.ɵfac = function (t) {
        return new (t || nn)(e.ɵɵdirectiveInject(z.yf));
      }),
        (nn.ɵcmp = e.ɵɵdefineComponent({
          type: nn,
          selectors: [["app-settings-warning-modal"]],
          decls: 14,
          vars: 8,
          consts: [
            [1, "modal"],
            [1, "modal__content"],
            [1, "modal__body"],
            [
              "src",
              "assets/images/bridge/warning-image.svg",
              "alt",
              "Success",
              1,
              "modal__warning-image",
            ],
            [1, "modal__footer"],
            ["class", "modal__footer-text", 4, "ngIf"],
            [1, "modal__footer-actions"],
            ["appearance", "secondary", 3, "onClick"],
            ["appearance", "primary", 3, "onClick"],
            [1, "modal__footer-text"],
            [
              "src",
              "assets/images/swaps/swaps-info/question-icon.svg",
              "alt",
              "question",
              3,
              "tuiHint",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "main", 2),
              e.ɵɵelement(3, "img", 3),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(4, "div", 4),
              e.ɵɵtemplate(5, go, 5, 9, "div", 5),
              e.ɵɵtemplate(6, fo, 5, 9, "div", 5),
              e.ɵɵelementStart(7, "div", 6)(8, "app-rubic-button", 7),
              e.ɵɵlistener("onClick", function () {
                return n.confirm();
              }),
              e.ɵɵtext(9),
              e.ɵɵpipe(10, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(11, "app-rubic-button", 8),
              e.ɵɵlistener("onClick", function () {
                return n.cancel();
              }),
              e.ɵɵtext(12),
              e.ɵɵpipe(13, "translate"),
              e.ɵɵelementEnd()()()()()),
              2 & t &&
                (e.ɵɵadvance(5),
                e.ɵɵproperty("ngIf", n.highSlippage),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.highPriceImpact),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind1(10, 4, "Complete"),
                  " "
                ),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind1(13, 6, "Cancel"),
                  " "
                ));
          },
          dependencies: [m.O5, ie.j, R.D, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{display:block;padding-bottom:32px}html.iframe-horizontal   [_nghost-%COMP%]{padding-bottom:0}.modal__content[_ngcontent-%COMP%]{padding:35px 20px 0;text-align:center}@media (max-width: 768px){.modal__content[_ngcontent-%COMP%]{padding:10px}}.modal__footer[_ngcontent-%COMP%]{margin-top:20px}.modal__footer-text[_ngcontent-%COMP%]{color:var(--primary-text);font-weight:500;font-size:24px;line-height:32px;letter-spacing:normal;display:flex;align-items:center;justify-content:center;margin-bottom:18px}@media (max-width: 768px){.modal__footer-text[_ngcontent-%COMP%]{font-size:16px;line-height:24px}}.modal__footer-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:8px}.modal__footer-actions[_ngcontent-%COMP%]{display:flex;gap:16px;padding-top:16px}.modal__footer-actions[_ngcontent-%COMP%]   app-rubic-button[_ngcontent-%COMP%]{width:100%}html.iframe-horizontal[_nghost-%COMP%]   .modal[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal[_ngcontent-%COMP%]{display:flex;align-items:center}html.iframe-horizontal[_nghost-%COMP%]   .modal__content[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal__content[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;padding-top:0}html.iframe-horizontal[_nghost-%COMP%]   .modal__body[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal__body[_ngcontent-%COMP%]{margin-right:80px;height:100%;display:flex;align-items:center}html.iframe-horizontal[_nghost-%COMP%]   .modal__body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal__body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px}html.iframe-horizontal[_nghost-%COMP%]   .modal__footer-text[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal__footer-text[_ngcontent-%COMP%]{color:var(--primary-text);font-weight:500;font-size:20px;line-height:32px;letter-spacing:normal}html.iframe-horizontal[_nghost-%COMP%]   .modal__footer-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal__footer-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:4px}html.iframe-horizontal[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font-size:18px}html.iframe-horizontal[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]     app-rubic-button button, html.iframe-horizontal   [_nghost-%COMP%]   .modal[_ngcontent-%COMP%]     app-rubic-button button{width:150px;float:left}",
          ],
          changeDetection: 0,
        }));
      var M = l(50404);
      class Re {
        constructor() {
          (this._priceImpact$ = new w.X(void 0)),
            (this.priceImpact$ = this._priceImpact$.asObservable());
        }
        get priceImpact() {
          return this._priceImpact$.getValue();
        }
        static calculatePriceImpact(t, n, i, a) {
          if (!(t && n && i?.isFinite() && a?.isFinite())) return null;
          const s = i.multipliedBy(t),
            c = a.multipliedBy(n);
          return s
            .minus(c)
            .dividedBy(s)
            .multipliedBy(100)
            .dp(2, M.Z.ROUND_HALF_UP)
            .toNumber();
        }
        setPriceImpact(t) {
          this._priceImpact$.next(t);
        }
      }
      (Re.ɵfac = function (t) {
        return new (t || Re)();
      }),
        (Re.ɵprov = e.ɵɵdefineInjectable({
          token: Re,
          factory: Re.ɵfac,
          providedIn: "root",
        }));
      var Ye = l(22307),
        h = l(24006),
        Be = l(64234);
      class q {
        constructor(t, n, i, a, s, c) {
          (this.storeService = t),
            (this.iframeService = n),
            (this.authService = i),
            (this.targetNetworkAddressService = a),
            (this.queryParamsService = s),
            (this.dialogService = c),
            (this.defaultSlippageTolerance = {
              instantTrades: 1,
              crossChain: 4,
            }),
            (this.defaultItSettings = this.getDefaultITSettings()),
            (this.defaultCcrSettings = this.getDefaultCCRSettings()),
            this.createForm(),
            this.initSubscriptions(),
            this.subscribeOnQueryParams();
        }
        get instantTrade() {
          return this.settingsForm.controls[b.V.INSTANT_TRADE];
        }
        get instantTradeValue() {
          return this.settingsForm.get(b.V.INSTANT_TRADE).value;
        }
        get instantTradeValueChanges() {
          return this.settingsForm.get(b.V.INSTANT_TRADE).valueChanges;
        }
        get crossChainRouting() {
          return this.settingsForm.controls[b.V.CROSS_CHAIN_ROUTING];
        }
        get crossChainRoutingValue() {
          return this.settingsForm.get(b.V.CROSS_CHAIN_ROUTING).value;
        }
        get crossChainRoutingValueChanges() {
          return this.settingsForm.get(b.V.CROSS_CHAIN_ROUTING).valueChanges;
        }
        subscribeOnQueryParams() {
          this.queryParamsService.queryParams$
            .pipe((0, mi.P)(Boolean))
            .subscribe((t) => {
              if (t.iframe) {
                const n = {
                  slippageIt: t.slippageIt ? parseFloat(t.slippageIt) : null,
                  slippageCcr: t.slippageCcr ? parseFloat(t.slippageCcr) : null,
                };
                (this.defaultItSettings = this.getDefaultITSettings(
                  n.slippageIt
                )),
                  (this.defaultCcrSettings = this.getDefaultCCRSettings(
                    n.slippageCcr
                  )),
                  this.instantTrade.patchValue({
                    slippageTolerance: this.defaultItSettings.slippageTolerance,
                  }),
                  this.crossChainRouting.patchValue({
                    slippageTolerance:
                      this.defaultCcrSettings.slippageTolerance,
                  });
              }
            });
        }
        getDefaultITSettings(t) {
          return {
            autoSlippageTolerance: !0,
            slippageTolerance:
              this.parseSlippage(t) ??
              this.defaultSlippageTolerance.instantTrades,
            deadline: 20,
            disableMultihops: !1,
            autoRefresh: Boolean(this.authService?.user?.address),
            showReceiverAddress: !1,
          };
        }
        getDefaultCCRSettings(t) {
          return {
            autoSlippageTolerance: !0,
            slippageTolerance:
              this.parseSlippage(t) ?? this.defaultSlippageTolerance.crossChain,
            showReceiverAddress: !1,
          };
        }
        parseSlippage(t) {
          return !t || isNaN(t) ? null : Math.min(Math.max(t, 0.1), 50);
        }
        createForm() {
          this.settingsForm = new h.FormGroup({
            [b.V.INSTANT_TRADE]: new h.FormGroup({
              autoSlippageTolerance: new h.FormControl(
                this.defaultItSettings.autoSlippageTolerance
              ),
              slippageTolerance: new h.FormControl(
                this.defaultItSettings.slippageTolerance
              ),
              deadline: new h.FormControl(this.defaultItSettings.deadline),
              disableMultihops: new h.FormControl(
                this.defaultItSettings.disableMultihops
              ),
              autoRefresh: new h.FormControl(
                this.defaultItSettings.autoRefresh
              ),
              showReceiverAddress: new h.FormControl(
                this.defaultItSettings.showReceiverAddress
              ),
            }),
            [b.V.CROSS_CHAIN_ROUTING]: new h.FormGroup({
              autoSlippageTolerance: new h.FormControl(
                this.defaultItSettings.autoSlippageTolerance
              ),
              slippageTolerance: new h.FormControl(
                this.defaultCcrSettings.slippageTolerance
              ),
              showReceiverAddress: new h.FormControl(
                this.defaultCcrSettings.showReceiverAddress
              ),
            }),
          });
        }
        initSubscriptions() {
          this.authService.currentUser$
            .pipe(
              (0, re.h)((t) => Boolean(t?.address)),
              (0, ye.b)(() => {
                const t = this.storeService.getItem("settings");
                t &&
                  !this.iframeService.isIframe &&
                  this.settingsForm.patchValue({ ...JSON.parse(t) });
              }),
              (0, N.w)(() => this.settingsForm.valueChanges)
            )
            .subscribe(() => this.saveSettingsToLocalStorage()),
            this.targetNetworkAddressService.isAddressRequired$.subscribe(
              (t) => {
                t
                  ? ((this.ccrShowReceiverAddressUserValue =
                      this.crossChainRoutingValue.showReceiverAddress),
                    this.crossChainRouting.patchValue({
                      showReceiverAddress: !0,
                    }))
                  : void 0 !== this.ccrShowReceiverAddressUserValue &&
                    this.crossChainRouting.patchValue({
                      showReceiverAddress: this.ccrShowReceiverAddressUserValue,
                    });
              }
            );
        }
        serializeForm(t) {
          const n = (0, J.Zw)(t);
          return JSON.stringify(n);
        }
        checkSlippageAndPriceImpact(t, n) {
          var i = this;
          return (0, T.Z)(function* () {
            const a =
              t === b.V.CROSS_CHAIN_ROUTING
                ? i.crossChainRoutingValue.slippageTolerance
                : i.instantTradeValue.slippageTolerance;
            (!n.from.price.toNumber() || !n.to.price.toNumber()) &&
              (yield n.from.getAndUpdateTokenPrice(),
              yield n.to.getAndUpdateTokenPrice());
            const s = Re.calculatePriceImpact(
                n.from.price.toNumber(),
                n.to.price.toNumber(),
                n.from.tokenAmount,
                n.to.tokenAmount
              ),
              c = { highSlippage: a > 5 && a, highPriceImpact: s > 30 && s };
            return (
              (!c.highSlippage && !c.highPriceImpact) ||
              (0, Tt.z)(
                i.dialogService.open(new z.Al(nn), { data: c, size: "l" })
              )
            );
          })();
        }
        saveSettingsToLocalStorage(t = this.settingsForm.getRawValue()) {
          this.storeService.setItem("settings", this.serializeForm(t));
        }
      }
      (q.ɵfac = function (t) {
        return new (t || q)(
          e.ɵɵinject(di.d),
          e.ɵɵinject(W.b),
          e.ɵɵinject(j.e),
          e.ɵɵinject(oe),
          e.ɵɵinject(Be.E),
          e.ɵɵinject(Ye.RO)
        );
      }),
        (q.ɵprov = e.ɵɵdefineInjectable({ token: q, factory: q.ɵfac }));
      var le = l(79094),
        O = l(82722),
        v = l(54004),
        Co = l(11365),
        fr = l(61241),
        k = l(19014),
        rn = l(637),
        Ot = l(49218),
        pe = l(17459),
        V = l(90714);
      class Pe {
        constructor() {
          (this._widgetOpened$ = new w.X(!1)),
            (this.widgetOpened$ = this._widgetOpened$.asObservable());
        }
        set widgetOpened(t) {
          this._widgetOpened$.next(t);
        }
      }
      (Pe.ɵfac = function (t) {
        return new (t || Pe)();
      }),
        (Pe.ɵprov = e.ɵɵdefineInjectable({ token: Pe, factory: Pe.ɵfac }));
      var _e = l(77579),
        ue = (() => {
          return (
            ((r = ue || (ue = {})).REFRESHING = "refreshing"),
            (r.IN_PROGRESS = "in progress"),
            (r.STOPPED = "stopped"),
            ue
          );
          var r;
        })();
      class ke {
        constructor(t, n) {
          (this.swapFormService = t),
            (this.settingsService = n),
            (this._status$ = new w.X(ue.STOPPED)),
            (this.status$ = this._status$.asObservable()),
            (this._onRefresh$ = new _e.x()),
            (this.onRefresh$ = this._onRefresh$.asObservable()),
            (this.timeout = 3e4),
            (this.isRefreshing = !1),
            (this.isForcedRefresh = !1),
            (this.isRefreshRotating$ = this.status$.pipe(
              (0, v.U)((i, a) => {
                const s = 1 === a,
                  c =
                    this.isForcedRefresh ||
                    this.settingsService.instantTradeValue.autoRefresh;
                return (
                  this.isForcedRefresh && (this.isForcedRefresh = !1),
                  s || (c && i !== ue.STOPPED)
                );
              })
            )),
            this.swapFormService.isFilled$.pipe((0, le.x)()).subscribe((i) => {
              i ||
                (this._status$.next(ue.STOPPED), clearTimeout(this.timeoutId));
            });
        }
        get status() {
          return this._status$.getValue();
        }
        onButtonClick() {
          this._onRefresh$.next({ isForced: !0 }), (this.isForcedRefresh = !0);
        }
        setRefreshing() {
          clearTimeout(this.timeoutId),
            (this.isRefreshing = !0),
            this.status !== ue.IN_PROGRESS && this._status$.next(ue.REFRESHING);
        }
        setStopped() {
          (this.isRefreshing = !1),
            this.status !== ue.IN_PROGRESS && this._status$.next(ue.STOPPED),
            this.setupTimer();
        }
        setupTimer() {
          clearTimeout(this.timeoutId),
            (this.timeoutId = setTimeout(() => {
              this._onRefresh$.next({ isForced: !1 });
            }, this.timeout));
        }
        startInProgress() {
          this._status$.next(ue.IN_PROGRESS);
        }
        stopInProgress() {
          this._status$.next(this.isRefreshing ? ue.REFRESHING : ue.STOPPED);
        }
      }
      (ke.ɵfac = function (t) {
        return new (t || ke)(e.ɵɵinject(A.q), e.ɵɵinject(q));
      }),
        (ke.ɵprov = e.ɵɵdefineInjectable({ token: ke, factory: ke.ɵfac }));
      var Ir = l(19835);
      class Pt {
        constructor(t) {
          (this.elementRef = t),
            (this.amountChange = new e.EventEmitter()),
            (this.amountRegex = /^([0-9]+\.?[0-9]*|[0-9]*\.?[0-9]+)?$/),
            (this.prevValue = ""),
            (this.prevCaretPosition = 0),
            (this.isFocused = !1);
        }
        set decimals(t) {
          (this._decimals = t), setTimeout(() => this.onChange());
        }
        onChange() {
          const t = this.elementRef.nativeElement.value || "";
          let n = t.replaceAll(",", ""),
            i = this.elementRef.nativeElement.selectionStart;
          t && "," === t[t.length - 1] && (n += "."),
            "." === n &&
              ("" === this.prevValue
                ? ((n = "0."), (i = 2))
                : ((n = ""), (i = 0))),
            this.amountRegex.test(n)
              ? ((n = this.getNewValue(n)),
                (i =
                  n === this.prevValue
                    ? this.prevCaretPosition
                    : this.getNewCaretPosition(n, i)))
              : ((n = this.prevValue), (i = this.prevCaretPosition)),
            (this.elementRef.nativeElement.value = n),
            this.isFocused &&
              this.elementRef.nativeElement.setSelectionRange(i, i),
            this.amountChange.emit(n),
            (this.prevValue = n),
            (this.prevCaretPosition = i);
        }
        getNewValue(t) {
          if (t.includes(".")) {
            const a = t.indexOf(".") + 1;
            t = t.slice(0, a + this._decimals);
          }
          const [n, i] = t.split(".");
          return (
            n.length &&
              (t =
                new M.Z(n).toFormat(Ir.f) +
                (t.includes(".") ? "." : "") +
                (i || "")),
            t
          );
        }
        getNewCaretPosition(t, n) {
          const a =
            this.prevValue
              .substring(0, n - (this.prevValue.length < t.length ? 1 : 0))
              .split(",").length - 1;
          let c = n + (t.substring(0, n).split(",").length - 1 - a);
          return c && t.length && "," === t[c - 1] && c--, c;
        }
        onCaretPositionChange() {
          this.prevCaretPosition = this.elementRef.nativeElement.selectionStart;
        }
        onFocus() {
          this.isFocused = !0;
        }
        onFocusOut() {
          this.isFocused = !1;
        }
      }
      (Pt.ɵfac = function (t) {
        return new (t || Pt)(e.ɵɵdirectiveInject(e.ElementRef));
      }),
        (Pt.ɵdir = e.ɵɵdefineDirective({
          type: Pt,
          selectors: [["", "appTokenAmount", ""]],
          hostBindings: function (t, n) {
            1 & t &&
              e.ɵɵlistener("ngModelChange", function () {
                return n.onChange();
              })("keyup", function () {
                return n.onCaretPositionChange();
              })("click", function () {
                return n.onCaretPositionChange();
              })("focus", function () {
                return n.onFocus();
              })("focusout", function () {
                return n.onFocusOut();
              });
          },
          inputs: { decimals: "decimals" },
          outputs: { amountChange: "amountChange" },
        }));
      var de = l(25397),
        Fe = l(48653),
        De = l(15719),
        kt = l(42801),
        _i = l(66193);
      class ee {
        constructor(t, n, i, a) {
          (this.tokensStoreService = t),
            (this.tokensNetworkService = n),
            (this.swapFormService = i),
            (this.destroy$ = a),
            (this._assetType$ = new w.X(void 0)),
            (this.assetType$ = this._assetType$.asObservable()),
            (this._assetSelected$ = new _e.x()),
            (this.assetSelected$ = this._assetSelected$.asObservable()),
            (this._selectorListType$ = new w.X(void 0)),
            (this.selectorListType$ = this._selectorListType$.asObservable()),
            this.subscribeOnAssetChange();
        }
        get formType() {
          return this._formType;
        }
        get assetType() {
          return this._assetType$.value;
        }
        set assetType(t) {
          this._assetType$.next(t);
        }
        get selectorListType() {
          return this._selectorListType$.value;
        }
        set selectorListType(t) {
          this._selectorListType$.next(t);
        }
        initParameters(t) {
          this._formType = t.formType;
          const i =
            this.swapFormService.inputValue[
              "from" === this.formType ? "fromAssetType" : "toBlockchain"
            ];
          (this.assetType = i),
            (this.selectorListType = "fiat" === i ? "fiats" : "tokens");
        }
        subscribeOnAssetChange() {
          this.assetType$
            .pipe((0, re.h)(Boolean), (0, le.x)(), (0, O.R)(this.destroy$))
            .subscribe((t) => {
              if (
                !this.swapFormService.inputValue[
                  "from" === this.formType ? "fromAsset" : "toToken"
                ]
              ) {
                const i =
                  "from" === this.formType ? "fromAssetType" : "toBlockchain";
                this.swapFormService.inputValue[i] !== t &&
                  this.swapFormService.inputControl.patchValue({
                    [i]: this.assetType,
                  });
              }
              this.checkAndRefetchTokenList();
            });
        }
        checkAndRefetchTokenList() {
          this.tokensNetworkService.needRefetchTokens &&
            (this.tokensNetworkService.tokensRequestParameters = void 0);
        }
        setSelectorListTypeByAssetType() {
          this.selectorListType =
            "fiat" === this.assetType ? "fiats" : "tokens";
        }
        openFiatsList() {
          (this.assetType = "fiat"), (this.selectorListType = "fiats");
        }
        openBlockchainsList() {
          this.selectorListType = "blockchains";
        }
        onBlockchainSelect(t) {
          (this.assetType = t),
            this.tokensStoreService.startBalanceCalculating(t),
            (this.selectorListType = "tokens");
        }
        onAssetSelect(t) {
          this._assetSelected$.next(t);
        }
        getAssetType(t) {
          return this.swapFormService.inputValue[
            "from" === t ? "fromAssetType" : "toBlockchain"
          ];
        }
      }
      (ee.ɵfac = function (t) {
        return new (t || ee)(
          e.ɵɵinject(kt.Z),
          e.ɵɵinject(_i.I),
          e.ɵɵinject(A.q),
          e.ɵɵinject(k.a3)
        );
      }),
        (ee.ɵprov = e.ɵɵdefineInjectable({ token: ee, factory: ee.ɵfac }));
      class fe {
        constructor(t, n) {
          (this.assetsSelectorService = t),
            (this.destroy$ = n),
            (this._query$ = new w.X("")),
            (this.query$ = this._query$.asObservable()),
            this.subscribeOnSelectorListTypeChange();
        }
        get query() {
          return this._query$.value;
        }
        set query(t) {
          this._query$.next(t);
        }
        subscribeOnSelectorListTypeChange() {
          this.assetsSelectorService.selectorListType$
            .pipe((0, le.x)(), (0, O.R)(this.destroy$))
            .subscribe(() => {
              this.query = "";
            });
        }
      }
      (fe.ɵfac = function (t) {
        return new (t || fe)(e.ɵɵinject(ee), e.ɵɵinject(k.a3));
      }),
        (fe.ɵprov = e.ɵɵdefineInjectable({ token: fe, factory: fe.ɵfac }));
      var Cr = l(82810);
      const ui = [
          o.BLOCKCHAIN_NAME.ICP,
          o.BLOCKCHAIN_NAME.CARDANO,
          o.BLOCKCHAIN_NAME.ALGORAND,
          o.BLOCKCHAIN_NAME.DOGECOIN,
          o.BLOCKCHAIN_NAME.POLKADOT,
          o.BLOCKCHAIN_NAME.LITECOIN,
          o.BLOCKCHAIN_NAME.MONERO,
          o.BLOCKCHAIN_NAME.RIPPLE,
          o.BLOCKCHAIN_NAME.ZILLIQA,
          o.BLOCKCHAIN_NAME.DASH,
          o.BLOCKCHAIN_NAME.TEZOS,
        ],
        vo = [
          o.BLOCKCHAIN_NAME.ETHEREUM,
          o.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
          o.BLOCKCHAIN_NAME.POLYGON,
          o.BLOCKCHAIN_NAME.AVALANCHE,
          o.BLOCKCHAIN_NAME.ARBITRUM,
          o.BLOCKCHAIN_NAME.FANTOM,
          o.BLOCKCHAIN_NAME.BOBA,
          o.BLOCKCHAIN_NAME.BOBA_BSC,
          o.BLOCKCHAIN_NAME.BOBA_AVALANCHE,
          o.BLOCKCHAIN_NAME.TELOS,
          o.BLOCKCHAIN_NAME.KAVA,
          o.BLOCKCHAIN_NAME.OPTIMISM,
          o.BLOCKCHAIN_NAME.AURORA,
          o.BLOCKCHAIN_NAME.OASIS,
          o.BLOCKCHAIN_NAME.METIS,
          o.BLOCKCHAIN_NAME.KLAYTN,
          o.BLOCKCHAIN_NAME.VELAS,
          o.BLOCKCHAIN_NAME.SYSCOIN,
          o.BLOCKCHAIN_NAME.MOONRIVER,
          o.BLOCKCHAIN_NAME.TRON,
          o.BLOCKCHAIN_NAME.MOONBEAM,
          o.BLOCKCHAIN_NAME.FUSE,
          o.BLOCKCHAIN_NAME.CELO,
          o.BLOCKCHAIN_NAME.OKE_X_CHAIN,
          o.BLOCKCHAIN_NAME.GNOSIS,
          o.BLOCKCHAIN_NAME.CRONOS,
          o.BLOCKCHAIN_NAME.BITCOIN,
          o.BLOCKCHAIN_NAME.NEAR,
          o.BLOCKCHAIN_NAME.SOLANA,
          ...ui,
        ],
        gi = [
          ...ui,
          o.BLOCKCHAIN_NAME.BITCOIN,
          o.BLOCKCHAIN_NAME.SOLANA,
          o.BLOCKCHAIN_NAME.NEAR,
        ];
      var hi = l(55404),
        We = l(65869),
        it = l(22519);
      const fi = {
        [o.BLOCKCHAIN_NAME.ETHEREUM]: "ETH",
        [o.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: "BNB_BEP20",
        [o.BLOCKCHAIN_NAME.POLYGON]: "MATIC",
        [o.BLOCKCHAIN_NAME.AVALANCHE]: "AVAX_CCHAIN",
      };
      var Ci = l(48170);
      const bo = [
        o.BLOCKCHAIN_NAME.ETHEREUM,
        o.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
        o.BLOCKCHAIN_NAME.POLYGON,
        o.BLOCKCHAIN_NAME.AVALANCHE,
      ];
      var vr = l(50866),
        vi = l(30268),
        bi = l(80529);
      class Le {
        constructor(t, n, i, a, s) {
          (this.httpClient = t),
            (this.sdkService = n),
            (this.gasService = i),
            (this.onramperService = a),
            (this.platformConfigurationService = s);
        }
        static isSupportedBlockchain(t) {
          return bo.some((n) => n === t);
        }
        getOutputTokenAmount(t) {
          var n = this;
          return (0, T.Z)(function* () {
            const i = yield n.getOutputNativeAmount(t);
            if (o.EvmWeb3Pure.isNativeAddress(t.toToken.address)) return i;
            const a = n.platformConfigurationService.useOnChainProxy,
              s = yield n.sdkService.instantTrade.calculateTrade(
                {
                  address: o.EvmWeb3Pure.nativeTokenAddress,
                  blockchain: t.toToken.blockchain,
                },
                i.toFixed(),
                t.toToken.address,
                { gasCalculation: "disabled", useProxy: a }
              ),
              c = s[s.length - 1];
            if (c instanceof o.OnChainTrade) return c.to.tokenAmount;
            throw c.error;
          })();
        }
        getOutputNativeAmount(t) {
          var n = this;
          return (0, T.Z)(function* () {
            const i = t.fromFiat.symbol,
              a = fi[t.toToken.blockchain],
              s = t.fromAmount.toFixed(),
              c = yield (0, Tt.z)(
                n.httpClient.get(
                  `https://onramper.tech/rate/${i}/${a}/creditCard/${s}`,
                  { headers: { Authorization: `Basic ${Ci.d}` } }
                )
              ),
              p = c
                .filter((d) => d.available)
                .sort((d, _) =>
                  d.receivedCrypto === _.receivedCrypto
                    ? 0
                    : d.receivedCrypto > _.receivedCrypto
                    ? -1
                    : 1
                )[0];
            if (!p?.receivedCrypto)
              throw (
                (n.checkMinMaxError(c, t), new V.q("Trade is not available"))
              );
            return new M.Z(p.receivedCrypto);
          })();
        }
        checkMinMaxError(t, n) {
          const i = t
            .filter(
              (s) =>
                "MIN" === s.error?.type &&
                s.error.message?.includes(n.fromFiat.symbol)
            )
            .sort((s, c) => new M.Z(s.error.limit).comparedTo(c.error.limit))[0]
            ?.error?.limit;
          if (i)
            throw new o.MinAmountError(new M.Z(i + 0.01), n.fromFiat.symbol);
          const a = t
            .filter((s) => "MAX" === s.error?.type)
            .sort((s, c) => new M.Z(c.error.limit).comparedTo(s.error.limit))[0]
            ?.error?.limit;
          if (a) throw new o.MaxAmountError(new M.Z(a), n.fromFiat.symbol);
        }
      }
      (Le.ɵfac = function (t) {
        return new (t || Le)(
          e.ɵɵinject(bi.eN),
          e.ɵɵinject(it.w),
          e.ɵɵinject(vr.Q),
          e.ɵɵinject(vi.i),
          e.ɵɵinject(Cr.L)
        );
      }),
        (Le.ɵprov = e.ɵɵdefineInjectable({ token: Le, factory: Le.ɵfac }));
      class Ue {
        constructor(t, n, i, a, s, c, p) {
          (this.queryParamsService = t),
            (this.platformConfigurationService = n),
            (this.assetsSelectorService = i),
            (this.searchQueryService = a),
            (this.swapTypeService = s),
            (this.swapFormService = c),
            (this.destroy$ = p),
            (this._blockchainsToShow$ = new w.X([])),
            (this.blockchainsToShow$ = this._blockchainsToShow$.asObservable()),
            this.setAvailableBlockchains(),
            (this.blockchainsToShow = this._availableBlockchains),
            this.subscribeOnSearchQuery();
        }
        get availableBlockchains() {
          return this._availableBlockchains;
        }
        set blockchainsToShow(t) {
          this._blockchainsToShow$.next(t);
        }
        setAvailableBlockchains() {
          const t = this.swapTypeService.swapMode === b.V.LIMIT_ORDER;
          let n = t ? o.limitOrderSupportedBlockchains : vo;
          this.queryParamsService.enabledBlockchains &&
            (n = n.filter((c) =>
              this.queryParamsService.enabledBlockchains.includes(c)
            ));
          const { formType: i } = this.assetsSelectorService,
            { fromAsset: a } = this.swapFormService.inputValue,
            s = t && "to" === i && (0, pe.$v)(a) && a.blockchain;
          this._availableBlockchains = n.map((c) => {
            const p =
                !this.platformConfigurationService.isAvailableBlockchain(c),
              d = gi.includes(c);
            return {
              name: c,
              icon: hi.v[c],
              label: We.h[c],
              disabledConfiguration: p,
              disabledFrom: d,
              disabledLimitOrder: s && c !== s,
            };
          });
        }
        subscribeOnSearchQuery() {
          (0, $.a)([
            this.searchQueryService.query$,
            this.assetsSelectorService.selectorListType$,
          ])
            .pipe(
              (0, re.h)(([t, n]) => "blockchains" === n),
              (0, v.U)(([t]) => t),
              (0, O.R)(this.destroy$)
            )
            .subscribe((t) => {
              this.blockchainsToShow = this.availableBlockchains.filter((n) =>
                n.name.toLowerCase().includes(t.toLowerCase())
              );
            });
        }
        isDisabled(t) {
          return (
            t.disabledConfiguration ||
            t.disabledLimitOrder ||
            this.isDisabledFrom(t) ||
            this.isDisabledTo(t)
          );
        }
        isDisabledFrom(t) {
          return (
            "from" === this.assetsSelectorService.formType && t.disabledFrom
          );
        }
        isDisabledTo(t) {
          return (
            "to" === this.assetsSelectorService.formType &&
            "fiat" === this.assetsSelectorService.getAssetType("from") &&
            !Le.isSupportedBlockchain(t.name)
          );
        }
        getHintText(t) {
          return this.isDisabledFrom(t)
            ? "Select as target network"
            : this.isDisabledTo(t)
            ? "Cannot trade with fiats"
            : t.disabledConfiguration
            ? "Temporary disabled"
            : t.disabledLimitOrder
            ? "Change selected source token"
            : null;
        }
      }
      (Ue.ɵfac = function (t) {
        return new (t || Ue)(
          e.ɵɵinject(Be.E),
          e.ɵɵinject(Cr.L),
          e.ɵɵinject(ee),
          e.ɵɵinject(fe),
          e.ɵɵinject(ce.H),
          e.ɵɵinject(A.q),
          e.ɵɵinject(k.a3)
        );
      }),
        (Ue.ɵprov = e.ɵɵdefineInjectable({ token: Ue, factory: Ue.ɵfac }));
      var L = l(39646),
        ot = l(82805),
        br = l(70262),
        xo = l(59751);
      const yo = {
        ...Object.values(o.BLOCKCHAIN_NAME).reduce(
          (r, t) => ({ ...r, [t]: null }),
          {}
        ),
        [o.BLOCKCHAIN_NAME.ETHEREUM]: "ethereum",
        [o.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: "smartchain",
        [o.BLOCKCHAIN_NAME.POLYGON]: "polygon",
        [o.BLOCKCHAIN_NAME.AVALANCHE]: "avalanche",
        [o.BLOCKCHAIN_NAME.MOONRIVER]: "moonriver",
        [o.BLOCKCHAIN_NAME.FANTOM]: "fantom",
        [o.BLOCKCHAIN_NAME.ARBITRUM]: "arbitrum",
        [o.BLOCKCHAIN_NAME.AURORA]: "aurora",
        [o.BLOCKCHAIN_NAME.TELOS]: "telos",
        [o.BLOCKCHAIN_NAME.HARMONY]: "harmony",
        [o.BLOCKCHAIN_NAME.SOLANA]: "solana",
        [o.BLOCKCHAIN_NAME.NEAR]: "near",
        [o.BLOCKCHAIN_NAME.OPTIMISM]: "optimism",
        [o.BLOCKCHAIN_NAME.CRONOS]: "cronos",
        [o.BLOCKCHAIN_NAME.GNOSIS]: "xdai",
        [o.BLOCKCHAIN_NAME.MOONBEAM]: "moonbeam",
        [o.BLOCKCHAIN_NAME.CELO]: "celo",
        [o.BLOCKCHAIN_NAME.BOBA]: "boba",
        [o.BLOCKCHAIN_NAME.ASTAR]: "astar",
        [o.BLOCKCHAIN_NAME.BITCOIN]: "bitcoin",
        [o.BLOCKCHAIN_NAME.ETHEREUM_POW]: "ethereum-pow",
        [o.BLOCKCHAIN_NAME.TRON]: "tron",
        [o.BLOCKCHAIN_NAME.KAVA]: "kava",
        [o.BLOCKCHAIN_NAME.BITGERT]: "bitgert",
        [o.BLOCKCHAIN_NAME.OASIS]: "oasis",
        [o.BLOCKCHAIN_NAME.METIS]: "metis",
        [o.BLOCKCHAIN_NAME.DFK]: "defi-kingdoms",
        [o.BLOCKCHAIN_NAME.KLAYTN]: "klaytn",
        [o.BLOCKCHAIN_NAME.VELAS]: "velas",
        [o.BLOCKCHAIN_NAME.SYSCOIN]: "syscoin",
      };
      var on = l(9907);
      class Se {
        constructor() {
          (this._listType$ = new w.X("default")),
            (this.listType$ = this._listType$.asObservable());
        }
        get listType() {
          return this._listType$.value;
        }
        set listType(t) {
          this._listType$.next(t);
        }
        switchListType() {
          this.listType = "default" === this.listType ? "favorite" : "default";
        }
      }
      (Se.ɵfac = function (t) {
        return new (t || Se)();
      }),
        (Se.ɵprov = e.ɵɵdefineInjectable({ token: Se, factory: Se.ɵfac }));
      class He {
        constructor(t, n, i, a, s, c, p, d, _) {
          (this.tokensListTypeService = t),
            (this.searchQueryService = n),
            (this.tokensService = i),
            (this.tokensStoreService = a),
            (this.assetsSelectorService = s),
            (this.httpClient = c),
            (this.swapFormService = p),
            (this.swapTypeService = d),
            (this.destroy$ = _),
            (this.updateTokens$ = new _e.x()),
            (this._searchLoading$ = new w.X(!1)),
            (this.searchLoading$ = this._searchLoading$.asObservable()),
            (this._tokensToShow$ = new w.X([])),
            (this.tokensToShow$ = this._tokensToShow$.asObservable()),
            (this._customToken$ = new w.X(void 0)),
            (this.customToken$ = this._customToken$.asObservable()),
            this.subscribeOnUpdateTokens(),
            this.subscribeOnTokensChange(),
            this.subscribeOnSearchQueryChange(),
            this.subscribeOnBlockchainChange(),
            this.subscribeOnListType();
        }
        get searchLoading() {
          return this._searchLoading$.value;
        }
        set searchLoading(t) {
          this._searchLoading$.next(t);
        }
        get tokensToShow() {
          return this._tokensToShow$.value;
        }
        set tokensToShow(t) {
          this._tokensToShow$.next(t);
        }
        get customToken() {
          return this._customToken$.value;
        }
        set customToken(t) {
          this._customToken$.next(t);
        }
        get searchQuery() {
          return this.searchQueryService.query;
        }
        get blockchain() {
          const t = this.assetsSelectorService.assetType;
          return o.BlockchainsInfo.isBlockchainName(t) ? t : null;
        }
        get listType() {
          return this.tokensListTypeService.listType;
        }
        subscribeOnTokensChange() {
          (0, $.a)([
            this.tokensStoreService.tokens$,
            this.tokensStoreService.favoriteTokens$,
          ])
            .pipe((0, O.R)(this.destroy$))
            .subscribe(() => {
              this.searchQuery || this.updateTokens();
            });
        }
        subscribeOnSearchQueryChange() {
          (0, $.a)([
            this.searchQueryService.query$,
            this.assetsSelectorService.selectorListType$,
          ])
            .pipe(
              (0, re.h)(([t, n]) => "tokens" === n),
              (0, O.R)(this.destroy$)
            )
            .subscribe(() => {
              this.updateTokens();
            });
        }
        subscribeOnBlockchainChange() {
          this.assetsSelectorService.assetType$
            .pipe(
              (0, le.x)(),
              (0, re.h)((t) => o.BlockchainsInfo.isBlockchainName(t)),
              (0, O.R)(this.destroy$)
            )
            .subscribe(() => {
              this.updateTokens();
            });
        }
        subscribeOnListType() {
          this.tokensListTypeService.listType$
            .pipe((0, O.R)(this.destroy$))
            .subscribe(() => {
              this.updateTokens();
            });
        }
        updateTokens() {
          this.updateTokens$.next();
        }
        subscribeOnUpdateTokens() {
          this.updateTokens$
            .pipe(
              (0, N.w)(() =>
                this.searchQuery.length
                  ? "default" === this.listType
                    ? this.getDefaultTokensByQuery()
                    : (0, L.of)({
                        tokensToShow: this.getFilteredFavoriteTokens(),
                      })
                  : (0, L.of)({ tokensToShow: this.getSortedTokens() })
              ),
              (0, O.R)(this.destroy$)
            )
            .subscribe((t) => {
              "tokensToShow" in t
                ? ((this.tokensToShow =
                    this.swapTypeService.getSwapProviderType() !==
                    b.V.LIMIT_ORDER
                      ? t.tokensToShow
                      : t.tokensToShow.filter(
                          (n) => !o.EvmWeb3Pure.isNativeAddress(n.address)
                        )),
                  (this.customToken = null))
                : ((this.tokensToShow = []),
                  (this.customToken = t.customToken)),
                (this.searchLoading = !1);
            });
        }
        getDefaultTokensByQuery() {
          var t = this;
          return (0, ot.H)(300).pipe(
            (0, ye.b)(() => (this.searchLoading = !0)),
            (0, N.w)(() => this.tryParseQueryAsBackendTokens()),
            (0, N.w)(
              (function () {
                var n = (0, T.Z)(function* (i) {
                  if (i?.length) return { tokensToShow: i };
                  const a = yield t.tryParseQueryAsCustomToken();
                  return a ? { customToken: a } : { tokensToShow: [] };
                });
                return function (i) {
                  return n.apply(this, arguments);
                };
              })()
            )
          );
        }
        tryParseQueryAsBackendTokens() {
          return this.searchQuery && this.blockchain
            ? this.tokensService
                .fetchQueryTokens(this.searchQuery, this.blockchain)
                .pipe(
                  (0, v.U)((t) =>
                    t.size
                      ? t
                          .map((n) => ({
                            ...n,
                            available: this.isTokenAvailable(n),
                            favorite: this.isTokenFavorite(n),
                          }))
                          .toArray()
                      : []
                  )
                )
            : (0, L.of)([]);
        }
        tryParseQueryAsCustomToken() {
          var t = this;
          return (0, T.Z)(function* () {
            try {
              if (t.searchQuery && t.blockchain) {
                const n = yield xo.Token.createToken({
                  blockchain: t.blockchain,
                  address: t.searchQuery.toLowerCase(),
                });
                if (n?.name && n?.symbol && n?.decimals) {
                  const i = yield t.fetchTokenImage(n);
                  return {
                    ...n,
                    image: i,
                    rank: 0,
                    amount: new M.Z(NaN),
                    price: 0,
                    available: t.isTokenAvailable(n),
                    favorite: t.isTokenFavorite(n),
                    tokenSecurity: yield t.getTokenSecurity(n),
                  };
                }
              }
            } catch {}
            return null;
          })();
        }
        fetchTokenImage(t) {
          var n = this;
          return (0, T.Z)(function* () {
            const i = yo[t.blockchain];
            if (!i) return on.k;
            const s = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${i}/assets/${
              o.BlockchainsInfo.isEvmBlockchainName(t.blockchain)
                ? o.EvmWeb3Pure.toChecksumAddress(t.address)
                : t.address
            }/logo.png`;
            return (0,
            Tt.z)(n.httpClient.get(s).pipe((0, br.K)((c) => (0, L.of)(200 === c?.status ? s : on.k))));
          })();
        }
        getFilteredFavoriteTokens() {
          const t = this.tokensStoreService.favoriteTokens.toArray(),
            n = this.searchQuery.toLowerCase(),
            i = t
              .filter((a) => a.blockchain === this.blockchain)
              .map((a) => ({
                ...a,
                available: this.isTokenAvailable(a),
                favorite: !0,
              }));
          if (n.startsWith("0x"))
            return i.filter((a) => a.address.toLowerCase().includes(n));
          {
            const a = i.filter((c) => c.symbol.toLowerCase().includes(n)),
              s = i.filter((c) => c.name.toLowerCase().includes(n));
            return a.concat(
              s.filter((c) => a.every((p) => !(0, J.IL)(c.address, p.address)))
            );
          }
        }
        getSortedTokens() {
          if ("default" === this.listType) {
            const n = this.tokensStoreService.tokens
              .toArray()
              .filter(
                (i) =>
                  i.blockchain === this.blockchain && this.isTokenAvailable(i)
              )
              .map((i) => ({
                ...i,
                available: !0,
                favorite: this.isTokenFavorite(i),
              }));
            return this.sortTokensByComparator(n);
          }
          {
            const n = this.tokensStoreService.favoriteTokens
              .toArray()
              .filter((i) => i.blockchain === this.blockchain)
              .map((i) => ({
                ...i,
                available: this.isTokenAvailable(i),
                favorite: !0,
              }));
            return this.sortTokensByComparator(n);
          }
        }
        sortTokensByComparator(t) {
          return t.sort((i, a) => {
            const s = i.amount.isFinite() ? i.amount : new M.Z(0),
              p = (a.amount.isFinite() ? a.amount : new M.Z(0))
                .minus(s)
                .toNumber();
            return (
              Number(a.available) - Number(i.available) || p || a.rank - i.rank
            );
          });
        }
        isTokenFavorite(t) {
          return this.tokensStoreService.favoriteTokens.some((n) =>
            (0, J.tb)(n, t)
          );
        }
        isTokenAvailable(t) {
          const n = this.oppositeToken();
          return !n || !(0, J.tb)(n, t);
        }
        oppositeToken() {
          const n =
            this.swapFormService.inputValue[
              "from" === this.assetsSelectorService.formType
                ? "toToken"
                : "fromAsset"
            ];
          return (0, pe.$v)(n) ? n : null;
        }
        getTokenSecurity(t) {
          return this.tokensService.fetchTokenSecurity(t.address, t.blockchain);
        }
        isBalanceLoading$(t) {
          return this.tokensStoreService.isBalanceLoading$(t);
        }
      }
      (He.ɵfac = function (t) {
        return new (t || He)(
          e.ɵɵinject(Se),
          e.ɵɵinject(fe),
          e.ɵɵinject(De.H),
          e.ɵɵinject(kt.Z),
          e.ɵɵinject(ee),
          e.ɵɵinject(bi.eN),
          e.ɵɵinject(A.q),
          e.ɵɵinject(ce.H),
          e.ɵɵinject(k.a3)
        );
      }),
        (He.ɵprov = e.ɵɵdefineInjectable({ token: He, factory: He.ɵfac }));
      var So = l(11520);
      class at {
        constructor(t, n, i, a, s, c, p, d) {
          (this.tokensListStoreService = t),
            (this.tokensListTypeService = n),
            (this.tokensStoreService = i),
            (this.tokensNetworkService = a),
            (this.assetsSelectorService = s),
            (this.searchQueryService = c),
            (this.iframeService = p),
            (this.destroy$ = d),
            (this._listUpdating$ = new w.X(!1)),
            (this.loading$ = (0, $.a)([
              this._listUpdating$,
              this.tokensListStoreService.searchLoading$,
            ]).pipe((0, v.U)(([_, f]) => _ || f))),
            (this.listScrollSubject$ = new w.X(void 0)),
            (this._listAnimationType$ = new w.X("shown")),
            (this.listAnimationType$ = this._listAnimationType$.asObservable()),
            this.subscribeOnScroll(),
            this.subscribeOnTokensToShow();
        }
        get loading() {
          return (
            this._listUpdating$.value ||
            this.tokensListStoreService.searchLoading
          );
        }
        set listAnimationType(t) {
          this._listAnimationType$.next(t);
        }
        get listType() {
          return this.tokensListTypeService.listType;
        }
        get tokensToShow() {
          return this.tokensListStoreService.tokensToShow;
        }
        setListScrollSubject(t) {
          t && this.listScrollSubject$.next(t);
        }
        resetScrollToTop() {
          this.listScrollSubject$.value &&
            this.listScrollSubject$.value.scrollToIndex(0);
        }
        subscribeOnScroll() {
          this.listScrollSubject$
            .pipe(
              (0, re.h)((t) => Boolean(t)),
              (0, N.w)((t) =>
                t.renderedRangeStream.pipe(
                  (0, re.h)((n) => {
                    const i = this.assetsSelectorService.assetType;
                    if (!o.BlockchainsInfo.isBlockchainName(i)) return !1;
                    const a = this.tokensNetworkService.tokensNetworkState[i];
                    return (
                      !(
                        this.loading ||
                        this.searchQueryService.query ||
                        "favorite" === this.listType ||
                        !a ||
                        a.maxPage === a.page ||
                        this.iframeService.isIframe
                      ) &&
                      this.tokensToShow.length > 3 &&
                      n.end > this.tokensToShow.length - 3
                    );
                  })
                )
              ),
              (0, O.R)(this.destroy$)
            )
            .subscribe((t) => {
              t &&
                (this._listUpdating$.next(!0),
                this.tokensNetworkService.fetchNetworkTokens(
                  this.assetsSelectorService.assetType,
                  () => {
                    this._listUpdating$.next(!1);
                  }
                ));
            });
        }
        subscribeOnTokensToShow() {
          let t = this.searchQueryService.query,
            n = this.listType;
          this.tokensListStoreService.tokensToShow$
            .pipe((0, So.G)(), (0, O.R)(this.destroy$))
            .subscribe(([i, a]) => {
              if (i?.length && a?.length) {
                let p = i[0].blockchain !== a[0].blockchain;
                (p ||= n !== this.listType),
                  (n = this.listType),
                  p &&
                    ((this.listAnimationType = "hidden"),
                    setTimeout(() => {
                      this.listAnimationType = "shown";
                    }));
              }
              (i?.[0]?.blockchain !== a?.[0]?.blockchain ||
                t !== this.searchQueryService.query) &&
                (this.resetScrollToTop(), (t = this.searchQueryService.query));
            });
        }
      }
      (at.ɵfac = function (t) {
        return new (t || at)(
          e.ɵɵinject(He),
          e.ɵɵinject(Se),
          e.ɵɵinject(kt.Z),
          e.ɵɵinject(_i.I),
          e.ɵɵinject(ee),
          e.ɵɵinject(fe),
          e.ɵɵinject(W.b),
          e.ɵɵinject(k.a3)
        );
      }),
        (at.ɵprov = e.ɵɵdefineInjectable({ token: at, factory: at.ɵfac }));
      var To = l(32698);
      class Ge {
        constructor(t, n, i, a) {
          (this.fiatsService = t),
            (this.assetsSelectorService = n),
            (this.searchQueryService = i),
            (this.destroy$ = a),
            (this._fiatsToShow$ = new w.X(this.fiatsService.fiats)),
            (this.fiatsToShow$ = this._fiatsToShow$.asObservable()),
            this.subscribeOnSearchQuery();
        }
        set fiatsToShow(t) {
          this._fiatsToShow$.next(t);
        }
        subscribeOnSearchQuery() {
          (0, $.a)([
            this.searchQueryService.query$,
            this.assetsSelectorService.selectorListType$,
          ])
            .pipe(
              (0, re.h)(([t, n]) => "fiats" === n),
              (0, v.U)(([t]) => t),
              (0, O.R)(this.destroy$)
            )
            .subscribe((t) => {
              this.fiatsToShow = this.fiatsService.fiats.filter(
                (n) =>
                  n.symbol.toLowerCase().includes(t.toLowerCase()) ||
                  n.name.toLowerCase().includes(t.toLowerCase())
              );
            });
        }
        isDisabled() {
          const t = this.assetsSelectorService.getAssetType("to");
          return t && !Le.isSupportedBlockchain(t);
        }
      }
      (Ge.ɵfac = function (t) {
        return new (t || Ge)(
          e.ɵɵinject(To.G),
          e.ɵɵinject(ee),
          e.ɵɵinject(fe),
          e.ɵɵinject(k.a3)
        );
      }),
        (Ge.ɵprov = e.ɵɵdefineInjectable({ token: Ge, factory: Ge.ɵfac }));
      const Oo = [ee, fe, Ue, Ge, Se, He, at, k.a3];
      var B = l(55517),
        we = l(65063),
        Nr = l(78557),
        xr = l(86988),
        Rr = l(3155),
        $e = l(61279),
        Br = l(54255);
      const xi = function (r) {
        return { disabled: r };
      };
      function Po(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "li", 7)(1, "app-icon-button", 8),
            e.ɵɵlistener("iconButtonClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.openFiatsList());
            }),
            e.ɵɵelementEnd()();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(2).ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵproperty("ngClass", e.ɵɵpureFunction1(6, xi, i.fiatsDisabled))(
            "tuiHint",
            i.fiatsDisabled ? "Cannot trade with selected blockchain" : null
          ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("inlineSvg", !0)(
              "disabled",
              "fiat" === n || i.fiatsDisabled
            )("border", "fiat" === n)("borderRadiusPercent", 50);
        }
      }
      function ko(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Po, 2, 8, "li", 6),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", n.showFiats);
        }
      }
      function wo(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "li", 11),
            e.ɵɵpipe(2, "functionCall"),
            e.ɵɵelementStart(3, "app-icon-button", 12),
            e.ɵɵlistener("iconButtonClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext().$implicit,
                s = e.ɵɵnextContext(4);
              return e.ɵɵresetView(s.onBlockchainSelect(a.name));
            }),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = t.ngLet,
            i = e.ɵɵnextContext().$implicit,
            a = e.ɵɵnextContext(3).ngLet,
            s = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("id", s.idPrefix + "Network_" + i.name)(
              "ngClass",
              e.ɵɵpureFunction1(12, xi, n)
            )("tuiHint", e.ɵɵpipeBind3(2, 8, i, s.getBlockchainHintText, s)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("icon", i.icon)("disabled", a === i.name || n)(
              "border",
              a === i.name
            )("borderRadiusPercent", 50)("label", i.label);
        }
      }
      function Ao(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, wo, 4, 14, "ng-container", 5),
            e.ɵɵpipe(2, "functionCall"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.$implicit,
            i = e.ɵɵnextContext(4);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngLet",
              e.ɵɵpipeBind3(2, 1, n, i.isBlockchainDisabled, i)
            );
        }
      }
      function Eo(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Ao, 3, 5, "ng-container", 10),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet;
          e.ɵɵadvance(1), e.ɵɵproperty("ngForOf", n);
        }
      }
      function Mo(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-rubic-button", 15),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(4);
              return e.ɵɵresetView(a.openBlockchainsList());
            }),
            e.ɵɵtext(1),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(2).ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" +", i.blockchainsAmount - n, " ");
        }
      }
      function Io(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "li", 13),
            e.ɵɵtemplate(1, Mo, 2, 1, "app-rubic-button", 14),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", i.blockchainsAmount - n > 0);
        }
      }
      function No(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Eo, 2, 1, "ng-container", 5),
            e.ɵɵpipe(2, "functionCall"),
            e.ɵɵtemplate(3, Io, 2, 1, "li", 9),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngLet",
              e.ɵɵpipeBind3(2, 1, n, i.getBlockchainsList, i)
            );
        }
      }
      function Ro(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "ul", 3),
            e.ɵɵtemplate(1, ko, 2, 1, "ng-container", 4),
            e.ɵɵtemplate(2, No, 4, 5, "ng-container", 5),
            e.ɵɵpipe(3, "async"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("noFrame", "horizontal"),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngLet",
              e.ɵɵpipeBind1(3, 2, n.shownBlockchainsAmount$)
            );
        }
      }
      class an {
        constructor(t, n, i, a, s, c, p) {
          (this.blockchainsListService = t),
            (this.fiatsListService = n),
            (this.assetsSelectorService = i),
            (this.windowWidthService = a),
            (this.iframeService = s),
            (this.swapTypeService = c),
            (this.window = p),
            (this.blockchainsAmount =
              this.blockchainsListService.availableBlockchains.length),
            (this.selectedAssetType$ = this.assetsSelectorService.assetType$),
            (this.formType = this.assetsSelectorService.formType),
            (this.shownBlockchainsAmount$ =
              this.windowWidthService.windowSize$.pipe(
                (0, v.U)((d) => {
                  if (this.iframeService.isIframe)
                    return this.blockchainsAmount;
                  const _ = this.showFiats ? 1 : 0;
                  if (d >= xr.G.MOBILE_MD) return 9 - _;
                  const f = this.window.innerHeight - 135;
                  return d === xr.G.MOBILE_MD_MINUS
                    ? Math.floor(f / 82) - 1 - _
                    : Math.floor(f / 66) - 1 - _;
                })
              )),
            (this.fiatsDisabled = this.fiatsListService.isDisabled());
        }
        get showFiats() {
          return (
            "from" === this.formType &&
            this.swapTypeService.swapMode !== b.V.LIMIT_ORDER
          );
        }
        getBlockchainsList(t) {
          const n = this.blockchainsListService.availableBlockchains.slice(
            0,
            t
          );
          n.find((s) => s.name === this.assetsSelectorService.assetType) ||
            (this.blockchainsListService.lastSelectedHiddenBlockchain =
              this.blockchainsListService.availableBlockchains.find(
                (s) => s.name === this.assetsSelectorService.assetType
              ));
          const a = this.blockchainsListService.lastSelectedHiddenBlockchain;
          return a && (n[n.length - 1] = a), n;
        }
        isBlockchainDisabled(t) {
          return this.blockchainsListService.isDisabled(t);
        }
        getBlockchainHintText(t) {
          return this.blockchainsListService.getHintText(t);
        }
        onBlockchainSelect(t) {
          this.assetsSelectorService.onBlockchainSelect(t);
        }
        openBlockchainsList() {
          this.assetsSelectorService.openBlockchainsList();
        }
        openFiatsList() {
          this.assetsSelectorService.openFiatsList();
        }
      }
      (an.ɵfac = function (t) {
        return new (t || an)(
          e.ɵɵdirectiveInject(Ue),
          e.ɵɵdirectiveInject(Ge),
          e.ɵɵdirectiveInject(ee),
          e.ɵɵdirectiveInject(Nr.R),
          e.ɵɵdirectiveInject(W.b),
          e.ɵɵdirectiveInject(ce.H),
          e.ɵɵdirectiveInject(we.m9)
        );
      }),
        (an.ɵcmp = e.ɵɵdefineComponent({
          type: an,
          selectors: [["app-asset-types-aside"]],
          inputs: { idPrefix: "idPrefix" },
          decls: 4,
          vars: 3,
          consts: [
            [1, "asset-types-aside"],
            [1, "asset-types-aside__scroll"],
            ["class", "asset-types-aside__list", 4, "ngLet"],
            [1, "asset-types-aside__list"],
            [4, "noFrame"],
            [4, "ngLet"],
            [
              "class",
              "asset-types-aside__fiats",
              "tuiHintMode",
              "error",
              3,
              "ngClass",
              "tuiHint",
              4,
              "ngIf",
            ],
            [
              "tuiHintMode",
              "error",
              1,
              "asset-types-aside__fiats",
              3,
              "ngClass",
              "tuiHint",
            ],
            [
              "appearance",
              "secondary",
              "icon",
              "assets/images/icons/fiat-selector.svg",
              "label",
              "Fiat",
              3,
              "inlineSvg",
              "disabled",
              "border",
              "borderRadiusPercent",
              "iconButtonClick",
            ],
            ["class", "open-selector", 4, "noFrame"],
            [4, "ngFor", "ngForOf"],
            ["tuiHintMode", "error", 3, "id", "ngClass", "tuiHint"],
            [
              "appearance",
              "secondary",
              3,
              "icon",
              "disabled",
              "border",
              "borderRadiusPercent",
              "label",
              "iconButtonClick",
            ],
            [1, "open-selector"],
            ["appearance", "secondary", 3, "onClick", 4, "ngIf"],
            ["appearance", "secondary", 3, "onClick"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "aside", 0)(1, "tui-scrollbar", 1),
              e.ɵɵtemplate(2, Ro, 4, 4, "ul", 2),
              e.ɵɵpipe(3, "async"),
              e.ɵɵelementEnd()()),
              2 & t &&
                (e.ɵɵadvance(2),
                e.ɵɵproperty(
                  "ngLet",
                  e.ɵɵpipeBind1(3, 1, n.selectedAssetType$)
                ));
          },
          dependencies: [
            m.mk,
            m.sg,
            m.O5,
            ie.j,
            Rr.r,
            B.e,
            de.a,
            $e.IB,
            R.D,
            m.Ov,
            Br.g,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.asset-types-aside[_ngcontent-%COMP%]{display:flex;align-items:center;width:194px;height:100%;padding:14px 10px;background:rgba(170,170,170,.13);border-radius:0 10px 0 15px}html.iframe[_nghost-%COMP%]   .asset-types-aside[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .asset-types-aside[_ngcontent-%COMP%]{left:unset;width:100%;height:unset;padding:0 0 14px;background:unset;border-radius:unset;box-shadow:unset}html.iframe-vertical[_nghost-%COMP%]   .asset-types-aside[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .asset-types-aside[_ngcontent-%COMP%]{padding-bottom:0}.asset-types-aside__scroll[_ngcontent-%COMP%]{max-height:100%}html.iframe[_nghost-%COMP%]   .asset-types-aside__scroll[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .asset-types-aside__scroll[_ngcontent-%COMP%]{height:76px}.asset-types-aside__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;grid-row-gap:14px}html.iframe[_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%]{flex-direction:row}html.iframe-vertical[_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%]{flex-wrap:nowrap;margin-bottom:20px}html.iframe-vertical[_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%]     app-icon-button .image, html.iframe-vertical   [_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%]     app-icon-button .image{max-height:20px}html.iframe-horizontal[_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%]{flex-wrap:nowrap}.asset-types-aside__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 5px}html.iframe[_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px 0 0}.asset-types-aside__list[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{cursor:not-allowed!important;opacity:.5}.asset-types-aside__fiats[_ngcontent-%COMP%]     app-icon-button svg path{fill:var(--form-background-transparent)}.asset-types-aside[_ngcontent-%COMP%]     app-icon-button button{width:77px!important;height:68px!important}html.iframe[_nghost-%COMP%]   .asset-types-aside[_ngcontent-%COMP%]     app-icon-button button, html.iframe   [_nghost-%COMP%]   .asset-types-aside[_ngcontent-%COMP%]     app-icon-button button{width:70px!important;height:56px!important}.asset-types-aside[_ngcontent-%COMP%]     app-icon-button button .content{justify-content:unset}.asset-types-aside[_ngcontent-%COMP%]     app-icon-button button .content .image{margin:5px 0 2px}.open-selector[_ngcontent-%COMP%]{width:77px}.open-selector[_ngcontent-%COMP%]     app-rubic-button [tuiButton]{height:68px;border-radius:var(--tui-radius-m)}.open-selector[_ngcontent-%COMP%]     app-rubic-button [tuiButton]._pressed, .open-selector[_ngcontent-%COMP%]     app-rubic-button [tuiButton]:focus, .open-selector[_ngcontent-%COMP%]     app-rubic-button [tuiButton]:hover{background:transparent;box-shadow:none}.open-selector[_ngcontent-%COMP%]     app-rubic-button tui-wrapper{padding:0!important}@media (max-width: 768px){.asset-types-aside[_ngcontent-%COMP%]{border-radius:0 10px 0 0}}@media (max-width: 599px){.asset-types-aside[_ngcontent-%COMP%]{display:flex;align-items:unset;justify-content:center;width:95px;height:100%;padding:14px 0 0;border-radius:unset}.asset-types-aside__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}html.iframe[_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child), html.iframe   [_nghost-%COMP%]   .asset-types-aside__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-right:15px;margin-bottom:unset}}@media (max-width: 500px){.asset-types-aside[_ngcontent-%COMP%]{width:76px}.asset-types-aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     app-icon-button button{width:57px!important;height:52px!important}.asset-types-aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     app-icon-button button .content{justify-content:center}.asset-types-aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     app-icon-button button .content .image{margin:0}.asset-types-aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     app-icon-button button .content .label-container{display:none}html.iframe[_nghost-%COMP%]   .asset-types-aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     app-icon-button button .content .label-container, html.iframe   [_nghost-%COMP%]   .asset-types-aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]     app-icon-button button .content .label-container{display:block}.open-selector[_ngcontent-%COMP%]{width:57px}.open-selector[_ngcontent-%COMP%]     app-rubic-button [tuiButton]{height:52px}}",
          ],
          changeDetection: 0,
        }));
      var Ke = l(25635),
        Y = l(46907);
      function Bo(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "tui-input", 3),
            e.ɵɵlistener("ngModelChange", function (a) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.onQueryChanges(a));
            }),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵpipe(3, "async"),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵproperty("ngModel", n),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 2, e.ɵɵpipeBind1(3, 4, i.searchBarText$)),
              " "
            );
        }
      }
      function Fo(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 4),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.expand());
            }),
            e.ɵɵelementStart(1, "tui-input", 5),
            e.ɵɵlistener("ngModelChange", function (a) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.onQueryChanges(a));
            }),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "translate"),
            e.ɵɵelementEnd()();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵclassProp("expandable-input_expanded", i.isExpanded),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngModel", n)("tuiTextfieldCleaner", !0),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(3, 5, "Search name or paste address"),
              " "
            );
        }
      }
      function Do(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Bo, 4, 6, "tui-input", 1),
            e.ɵɵtemplate(
              2,
              Fo,
              4,
              7,
              "ng-template",
              null,
              2,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵreference(3),
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !i.expandableField)("ngIfElse", n);
        }
      }
      class sn {
        constructor(t, n) {
          (this.searchQueryService = t),
            (this.assetsSelectorService = n),
            (this.expandableField = !1),
            (this.isExpanded = !1),
            (this.searchQuery$ = this.searchQueryService.query$),
            (this.searchBarText$ =
              this.assetsSelectorService.selectorListType$.pipe(
                (0, v.U)((i) =>
                  "tokens" === i
                    ? "Search name or paste address"
                    : "Search name"
                )
              ));
        }
        onQueryChanges(t) {
          this.searchQueryService.query = t;
        }
        expand() {
          this.isExpanded = !this.isExpanded;
        }
      }
      (sn.ɵfac = function (t) {
        return new (t || sn)(e.ɵɵdirectiveInject(fe), e.ɵɵdirectiveInject(ee));
      }),
        (sn.ɵcmp = e.ɵɵdefineComponent({
          type: sn,
          selectors: [["app-search-bar"]],
          inputs: { expandableField: "expandableField" },
          decls: 2,
          vars: 3,
          consts: [
            [4, "ngLet"],
            [
              "iconAlign",
              "left",
              "icon",
              "tuiIconSearch",
              "tuiTextfieldSize",
              "s",
              3,
              "ngModel",
              "ngModelChange",
              4,
              "ngIf",
              "ngIfElse",
            ],
            ["expandableInputTpl", ""],
            [
              "iconAlign",
              "left",
              "icon",
              "tuiIconSearch",
              "tuiTextfieldSize",
              "s",
              3,
              "ngModel",
              "ngModelChange",
            ],
            [1, "expandable-input", 3, "click"],
            [
              "iconAlign",
              "left",
              "icon",
              "tuiIconSearch",
              "tuiTextfieldSize",
              "l",
              3,
              "ngModel",
              "tuiTextfieldCleaner",
              "ngModelChange",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Do, 4, 2, "ng-container", 0),
              e.ɵɵpipe(1, "async")),
              2 & t &&
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(1, 1, n.searchQuery$));
          },
          dependencies: [
            m.O5,
            B.e,
            Ke.K3,
            Ke.wU,
            h.NgControlStatus,
            h.NgModel,
            Y.be,
            Y.sz,
            m.Ov,
            E.X$,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{--tui-font-text-s: normal 16px/20px var(--tui-font-text)}.placeholder[_ngcontent-%COMP%]{color:var(--secondary-text);font-size:16px}@media (max-width: 500px){tui-input[_ngcontent-%COMP%]     input{font-size:14px!important}}tui-input[_ngcontent-%COMP%]     .placeholder{color:var(--secondary-text);font-size:16px}@media (max-width: 500px){tui-input[_ngcontent-%COMP%]     .placeholder{font-size:14px}}tui-input[_ngcontent-%COMP%]     .wrapper{z-index:auto}.expandable-input[_ngcontent-%COMP%]{width:50px;transition:.2s width ease-in-out}.expandable-input[_ngcontent-%COMP%]   tui-input[_ngcontent-%COMP%]    {--tui-height-l: 54px}.expandable-input[_ngcontent-%COMP%]   tui-input[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield]{background:#282828}.expandable-input[_ngcontent-%COMP%]   tui-input[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield][data-appearance=textfield]:after{border:0}.expandable-input_expanded[_ngcontent-%COMP%]{width:300px}",
          ],
          changeDetection: 0,
        }));
      var Ze = l(38118),
        U = l(37340);
      const yi = (0, U.X$)("listAnimation", [
        (0, U.eR)(":enter", [
          (0, U.oB)({ opacity: 0.4 }),
          (0, U.jt)("0.28s", (0, U.oB)({ opacity: 1 })),
        ]),
        (0, U.SB)("hidden", (0, U.oB)({ opacity: "0.4" })),
        (0, U.SB)("shown", (0, U.oB)({ opacity: "1" })),
        (0, U.eR)("hidden => shown", (0, U.jt)("0.28s ease-in-out")),
      ]);
      var Fr = l(50665),
        Si = l(11569),
        wt = l(22079),
        Lo = l(6838),
        Dr = l(41953),
        X = (() => {
          return (
            ((r = X || (X = {})).TRUST_LIST = "trust-list"),
            (r.SECURED = "safe"),
            (r.LOW_RISK = "low-risk"),
            (r.HIGH_RISK = "high-risk"),
            (r.NO_INFO = "no-info"),
            (r.UNSUPPORTED_BLOCKCHAIN = "unsupported"),
            (r.SCAM_LIST = "scam-list"),
            (r.PLATFORM_TOKEN = "platform-token"),
            X
          );
          var r;
        })();
      const $o = [
        o.BLOCKCHAIN_NAME.ETHEREUM,
        o.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
        o.BLOCKCHAIN_NAME.POLYGON,
        o.BLOCKCHAIN_NAME.ARBITRUM,
        o.BLOCKCHAIN_NAME.OPTIMISM,
        o.BLOCKCHAIN_NAME.AVALANCHE,
        o.BLOCKCHAIN_NAME.FANTOM,
        o.BLOCKCHAIN_NAME.OKE_X_CHAIN,
        o.BLOCKCHAIN_NAME.CRONOS,
        o.BLOCKCHAIN_NAME.GNOSIS,
        o.BLOCKCHAIN_NAME.TRON,
      ];
      var Ti = l(50112),
        cn = l(2830),
        Xe = l(35137),
        G = l(44619),
        Ce = l(68376);
      class ln {
        transform(t, n = 9, i = 4, a = !1) {
          const s = t.split(".")[0],
            c = t.split(".")[1]?.slice(0, i),
            p = s + (c ? `.${c}` : "");
          if (new M.Z(p).eq(0))
            return a ? "0" : `${p.slice(0, p.length - 1)}...`;
          let _ = p.replaceAll(",", "").replaceAll(".", "").length - n;
          if (_ <= 0) return p;
          if (c?.length > _) return `${s}.${c.slice(0, -_)}`;
          if (c?.length === _) return s;
          c && (_ -= c.length);
          let f = `${s.slice(0, -10)}b`;
          if (
            (_ <= 3 && (f = `${s.slice(0, -4)}k`),
            _ <= 6 && (f = `${s.slice(0, -7)}m`),
            "," === f[f.length - 2] || "." === f[f.length - 2])
          ) {
            const x = f[f.length - 1];
            f = f.slice(0, f.length - 2) + x;
          }
          return f;
        }
      }
      function Vo(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "span", 13),
            e.ɵɵlistener("click", function (a) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.copyToClipboard(a));
            }),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          e.ɵɵnextContext();
          const n = e.ɵɵreference(3);
          e.ɵɵproperty(
            "inlineSVG",
            "assets/images/swaps/swaps-info/copy-icon.svg"
          )("tuiHint", n)("tuiHintShowDelay", 50)("tuiHintHideDelay", 100);
        }
      }
      function jo(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span", 14), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵtextInterpolate(n.token.address);
        }
      }
      function zo(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "span", 15),
          e.ɵɵelement(1, "span", 16),
          e.ɵɵelementStart(2, "span", 17),
          e.ɵɵtext(3, " Copied "),
          e.ɵɵelementEnd()()),
          2 & r &&
            (e.ɵɵadvance(1),
            e.ɵɵproperty(
              "inlineSVG",
              "assets/images/swaps/swaps-info/tick.svg"
            ));
      }
      function Yo(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Vo, 1, 4, "span", 10),
            e.ɵɵtemplate(
              2,
              jo,
              2,
              1,
              "ng-template",
              null,
              11,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵtemplate(4, zo, 4, 1, "span", 12),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.hintShown),
            e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", !n.hintShown);
        }
      }
      function Wo(r, t) {
        if ((1 & r && (e.ɵɵtext(0), e.ɵɵpipe(1, "bigNumberFormat")), 2 & r)) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵtextInterpolate(e.ɵɵpipeBind1(1, 1, n.token.amount));
        }
      }
      function Uo(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 18)(1, "span", 19),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "shortenAmount"),
            e.ɵɵpipe(4, "bigNumberFormat"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(
              5,
              Wo,
              2,
              3,
              "ng-template",
              null,
              20,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵreference(6),
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("tuiHint", n),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind3(3, 2, e.ɵɵpipeBind1(4, 6, i.token.amount), 6, 4)
            );
        }
      }
      function Go(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "span", 25),
          e.ɵɵtext(2, "Powered by Go+"),
          e.ɵɵelementEnd(),
          e.ɵɵelementContainerEnd());
      }
      function Ko(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span", 24),
            e.ɵɵtext(1),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(2, Go, 3, 0, "ng-container", 6)),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              n.securityMessages[n.securityStatus],
              " "
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              n.securityStatus !== n.TokenSecurityStatus.PLATFORM_TOKEN
            );
        }
      }
      function Zo(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 21)(2, "a", 22),
            e.ɵɵlistener("click", function (i) {
              return i.stopPropagation();
            }),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(
              3,
              Ko,
              3,
              2,
              "ng-template",
              null,
              23,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵreference(4),
            i = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵproperty(
              "inlineSVG",
              "assets/images/swaps/swaps-info/token-security-" +
                i.securityStatus +
                "-icon.svg"
            )("tuiHint", n)("tuiHintShowDelay", 50)("tuiHintHideDelay", 100)(
              "href",
              i.goPlusLabsLink,
              e.ɵɵsanitizeUrl
            );
        }
      }
      (ln.ɵfac = function (t) {
        return new (t || ln)();
      }),
        (ln.ɵpipe = e.ɵɵdefinePipe({
          name: "shortenAmount",
          type: ln,
          pure: !0,
        }));
      const Xo = function (r) {
        return { "token-card__favorite_active": r };
      };
      function Qo(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "tui-loader", 26)(1, "div", 27),
            e.ɵɵlistener("click.stop", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.toggleFavorite());
            }),
            e.ɵɵelementEnd()();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("showLoader", n.loadingFavoriteToken)("overlay", !0),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngClass",
              e.ɵɵpureFunction1(
                4,
                Xo,
                null == n.token ? null : n.token.favorite
              )
            )("inlineSVG", "assets/images/icons/star2.svg");
        }
      }
      class At {
        constructor(t, n, i, a, s, c, p, d) {
          (this.iframeService = t),
            (this.tokensService = n),
            (this.tokensStoreService = i),
            (this.cdr = a),
            (this.errorsService = s),
            (this.authService = c),
            (this.navigator = p),
            (this.isMobile = d),
            (this.balanceLoading = !1),
            (this.toggleFavoriteToken = new e.EventEmitter()),
            (this.DEFAULT_TOKEN_IMAGE = on.k),
            (this.isHorizontalFrame =
              "horizontal" === this.iframeService.iframeAppearance),
            (this.TokenSecurityStatus = X),
            (this.securityMessages = {
              [X.TRUST_LIST]: "Token is in the Go+ Trust List",
              [X.SCAM_LIST]: "Token is in the Scam List",
              [X.SECURED]: "Token code has no elements of concern",
              [X.LOW_RISK]:
                "Token code contains some low risk elements of concern",
              [X.HIGH_RISK]:
                "Token code contains some high risk elements of concern",
              [X.NO_INFO]: "No information",
              [X.PLATFORM_TOKEN]: "Platform Token",
            }),
            (this.hintShown = !0),
            (this.loadingFavoriteToken = !1);
        }
        ngOnInit() {
          this.allowCopy =
            "0x0000000000000000000000000000000000000000" !==
              this.token.address && "" !== this.token.address;
        }
        onImageError(t) {
          this.tokensService.onTokenImageError(t);
        }
        toggleFavorite() {
          if (this.loadingFavoriteToken) return;
          if (!this.authService.userAddress)
            return void this.errorsService.catch(new Ti.l());
          this.loadingFavoriteToken = !0;
          const t = this.token.favorite
            ? this.tokensStoreService.removeFavoriteToken(this.token)
            : this.tokensStoreService.addFavoriteToken(this.token);
          (this.token.favorite = !this.token.favorite),
            t.subscribe({
              error: () => {
                this.errorsService.catch(new Ti.l());
              },
              complete: () => {
                (this.loadingFavoriteToken = !1),
                  this.cdr.markForCheck(),
                  this.toggleFavoriteToken.emit();
              },
            });
        }
        copyToClipboard(t) {
          t.stopPropagation(),
            this.showHint(),
            this.navigator.clipboard.writeText(this.token.address);
        }
        showHint() {
          (this.hintShown = !1),
            setTimeout(() => {
              (this.hintShown = !0), this.cdr.markForCheck();
            }, 1500);
        }
        get isNativeToken() {
          return this.token.address === Dr.K8;
        }
        get isPlatformToken() {
          return (
            "0x3cF3e2c9cBfd2913C452dbFAC214bBa22D3B5120" === this.token.address
          );
        }
        get securityStatus() {
          return !1 === $o.includes(this.token.blockchain)
            ? X.UNSUPPORTED_BLOCKCHAIN
            : this.isPlatformToken
            ? X.PLATFORM_TOKEN
            : this.isNativeToken ||
              (this.token.tokenSecurity && this.token.tokenSecurity.trust_list)
            ? X.TRUST_LIST
            : !this.token.tokenSecurity ||
              (this.token.tokenSecurity &&
                !1 === this.token.tokenSecurity.has_info)
            ? X.NO_INFO
            : this.token.tokenSecurity.fake_token ||
              this.token.tokenSecurity.is_airdrop_scam
            ? X.SCAM_LIST
            : 0 === this.token.tokenSecurity.risky_security_items &&
              0 === this.token.tokenSecurity.attention_security_items
            ? X.SECURED
            : this.token.tokenSecurity.risky_security_items > 0
            ? X.HIGH_RISK
            : X.LOW_RISK;
        }
        get goPlusLabsLink() {
          return `${Lo.L.GO_PLUS_LABS}/${
            this.token.blockchain === o.BLOCKCHAIN_NAME.TRON
              ? "tron"
              : o.blockchainId[this.token.blockchain]
          }/${
            (this.isNativeToken
              ? o.wrappedNativeTokensList[this.token.blockchain]?.address
              : this.token.address) || ""
          }`;
        }
      }
      (At.ɵfac = function (t) {
        return new (t || At)(
          e.ɵɵdirectiveInject(W.b),
          e.ɵɵdirectiveInject(De.H),
          e.ɵɵdirectiveInject(kt.Z),
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(cn.r),
          e.ɵɵdirectiveInject(j.e),
          e.ɵɵdirectiveInject(we.s5),
          e.ɵɵdirectiveInject(Xe.fL)
        );
      }),
        (At.ɵcmp = e.ɵɵdefineComponent({
          type: At,
          selectors: [["app-tokens-list-element"]],
          inputs: { token: "token", balanceLoading: "balanceLoading" },
          outputs: { toggleFavoriteToken: "toggleFavoriteToken" },
          decls: 14,
          vars: 9,
          consts: [
            [1, "token-card"],
            [1, "token-card__image-container"],
            ["loading", "lazy", 3, "src", "alt", "error"],
            [1, "token-card__name-amount-container"],
            [1, "token-card__name-container"],
            [1, "token-card__name-container-symbol"],
            [4, "ngIf"],
            [1, "token-card__amount-container"],
            ["class", "token-card__amount", 4, "ngIf"],
            [
              "class",
              "token-card__favorite-container",
              3,
              "showLoader",
              "overlay",
              4,
              "noFrame",
            ],
            [
              "class",
              "token-card__name-container-copy-icon",
              "tuiHintMode",
              "onDark",
              "tuiHintDirection",
              "top-right",
              3,
              "inlineSVG",
              "tuiHint",
              "tuiHintShowDelay",
              "tuiHintHideDelay",
              "click",
              4,
              "ngIf",
            ],
            ["tokenAddressHint", ""],
            ["class", "token-card__name-container-copied-container", 4, "ngIf"],
            [
              "tuiHintMode",
              "onDark",
              "tuiHintDirection",
              "top-right",
              1,
              "token-card__name-container-copy-icon",
              3,
              "inlineSVG",
              "tuiHint",
              "tuiHintShowDelay",
              "tuiHintHideDelay",
              "click",
            ],
            [1, "token-card__name-container-address-hint"],
            [1, "token-card__name-container-copied-container"],
            [1, "token-card__name-container-copied-icon", 3, "inlineSVG"],
            [1, "token-card__name-container-copied-text"],
            [1, "token-card__amount"],
            [
              "tuiHintDirection",
              "top-left",
              "tuiHintMode",
              "onDark",
              3,
              "tuiHint",
            ],
            ["tokenAmountTooltip", ""],
            [1, "token-card__security-container"],
            [
              "tuiHintMode",
              "onDark",
              "tuiHintDirection",
              "top-right",
              "rel",
              "noopener noreferrer",
              "target",
              "_blank",
              1,
              "token-card__security-container-security-icon",
              3,
              "inlineSVG",
              "tuiHint",
              "tuiHintShowDelay",
              "tuiHintHideDelay",
              "href",
              "click",
            ],
            ["tokenSecurityHint", ""],
            [1, "token-card__security-container-security-hint"],
            [1, "token-card__security-container-security-hint-powered-by"],
            [1, "token-card__favorite-container", 3, "showLoader", "overlay"],
            [
              1,
              "token-card__favorite",
              3,
              "ngClass",
              "inlineSVG",
              "click.stop",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "img", 2),
              e.ɵɵlistener("error", function (a) {
                return n.onImageError(a);
              }),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5),
              e.ɵɵtext(6),
              e.ɵɵtemplate(7, Yo, 5, 2, "ng-container", 6),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(8, "small"),
              e.ɵɵtext(9),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(10, "div", 7),
              e.ɵɵtemplate(11, Uo, 7, 8, "div", 8),
              e.ɵɵelementEnd()(),
              e.ɵɵtemplate(12, Zo, 5, 5, "ng-container", 6),
              e.ɵɵtemplate(13, Qo, 2, 6, "tui-loader", 9),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵadvance(2),
                e.ɵɵproperty(
                  "src",
                  n.token.image || n.DEFAULT_TOKEN_IMAGE,
                  e.ɵɵsanitizeUrl
                )("alt", n.token.name),
                e.ɵɵadvance(4),
                e.ɵɵtextInterpolate1(
                  " ",
                  n.token.symbol.length > 10 && n.isMobile
                    ? n.token.symbol.slice(0, 10) + "..."
                    : n.token.symbol,
                  " "
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.allowCopy),
                e.ɵɵadvance(2),
                e.ɵɵtextInterpolate(n.token.name),
                e.ɵɵadvance(1),
                e.ɵɵclassProp("tui-skeleton", n.balanceLoading),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.token.amount.gt(0)),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  n.securityStatus !==
                    n.TokenSecurityStatus.UNSUPPORTED_BLOCKCHAIN
                ));
          },
          dependencies: [m.mk, m.O5, de.a, R.D, wt.kM, G.d$, Ce.N, ln],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.token-card[_ngcontent-%COMP%]{display:flex;align-items:center;height:42px;color:var(--primary-text)}html.iframe[_nghost-%COMP%]   .token-card[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .token-card[_ngcontent-%COMP%]{height:unset}html.iframe-horizontal[_nghost-%COMP%]   .token-card[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-card[_ngcontent-%COMP%]{height:100%}.token-card__name-amount-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}@media (max-width: 500px){.token-card__name-amount-container[_ngcontent-%COMP%]{flex-direction:column;align-items:unset}html.iframe[_nghost-%COMP%]   .token-card__name-amount-container[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .token-card__name-amount-container[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}.token-card__name-container[_ngcontent-%COMP%]{max-width:150px;margin-right:auto}@media (max-width: 651px){.token-card__name-container[_ngcontent-%COMP%]{max-width:125px}}@media (max-width: 420px){.token-card__name-container[_ngcontent-%COMP%]{max-width:93px}}html.iframe-horizontal[_nghost-%COMP%]   .token-card__name-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-card__name-container[_ngcontent-%COMP%]{width:60px;margin-right:0}.token-card__name-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .token-card__name-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.token-card__name-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;line-height:20px}html.iframe[_nghost-%COMP%]   .token-card__name-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .token-card__name-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;line-height:16px}.token-card__name-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;font-size:13px;line-height:18px}html.iframe[_nghost-%COMP%]   .token-card__name-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .token-card__name-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block!important;font-size:12px;line-height:14px}@media (max-width: 500px){.token-card__name-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:none}}.token-card__name-container-address-hint[_ngcontent-%COMP%]{display:block}.token-card__name-container-address-hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px!important}.token-card__name-container-copy-icon[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:2px;margin-left:10px;cursor:pointer}html.iframe-vertical[_nghost-%COMP%]   .token-card__name-container-copy-icon[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .token-card__name-container-copy-icon[_ngcontent-%COMP%]{margin-bottom:0}.token-card__name-container-copy-icon[_ngcontent-%COMP%]     svg{width:13px;height:17px}.token-card__name-container-copy-icon[_ngcontent-%COMP%]     svg path{fill:var(--primary-text)}.token-card__name-container-copied-container[_ngcontent-%COMP%]{display:flex;gap:5px;align-items:center;margin-top:-2px}.token-card__name-container-copied-icon[_ngcontent-%COMP%]{display:flex;margin-bottom:1px;margin-left:10px}.token-card__name-container-copied-icon[_ngcontent-%COMP%]     svg{width:13px;height:17px;margin-bottom:0!important}.token-card__name-container-copied-icon[_ngcontent-%COMP%]     svg path{fill:var(--primary-text)}.token-card__name-container-copied-text[_ngcontent-%COMP%]{margin-bottom:0!important}@media (max-width: 420px){.token-card__name-container-copied-text[_ngcontent-%COMP%]{display:none!important}}html.iframe-horizontal[_nghost-%COMP%]   .token-card__name-container-copied-text[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-card__name-container-copied-text[_ngcontent-%COMP%]{display:none!important}.token-card__name-container-symbol[_ngcontent-%COMP%]{display:flex;align-items:center;width:-moz-fit-content;width:fit-content;white-space:nowrap}html.iframe[_nghost-%COMP%]   .token-card__name-container-symbol[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .token-card__name-container-symbol[_ngcontent-%COMP%]{font-size:14px;line-height:16px}.token-card__favorite-container[_ngcontent-%COMP%], .token-card__security-container[_ngcontent-%COMP%]{flex-shrink:0;width:24px;height:24px;margin-left:20px}html.iframe-horizontal[_nghost-%COMP%]   .token-card__favorite-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-card__favorite-container[_ngcontent-%COMP%], html.iframe-horizontal[_nghost-%COMP%]   .token-card__security-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-card__security-container[_ngcontent-%COMP%]{margin-left:-35px}  .token-card__favorite{display:flex;align-items:center;cursor:pointer}  .token-card__favorite svg{width:24px;height:24px}  .token-card__favorite svg path{transition:.2s ease-in-out;stroke:var(--secondary-text)}  .token-card__favorite_active svg path{fill:#dfcb5f;stroke:none}  .token-card__favorite:hover:not(  .token-card__favorite_active) svg path{stroke:var(--primary-color)}.token-card__security-container-security-hint[_ngcontent-%COMP%]{display:block;max-width:200px;font-size:13px!important}.token-card__security-container-security-hint-powered-by[_ngcontent-%COMP%]{font-size:10px!important}.token-card__image-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-width:38px;height:38px;margin-right:20px}html.iframe-horizontal[_nghost-%COMP%]   .token-card__image-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-card__image-container[_ngcontent-%COMP%]{min-width:30px;height:30px;margin-right:10px}html.iframe-vertical[_nghost-%COMP%]   .token-card__image-container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .token-card__image-container[_ngcontent-%COMP%]{min-width:24px;height:24px}.token-card__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:38px;max-height:38px;border-radius:25%}html.iframe-horizontal[_nghost-%COMP%]   .token-card__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-card__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:30px;max-height:30px}html.iframe-vertical[_nghost-%COMP%]   .token-card__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .token-card__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:24px;max-height:24px}.token-card__amount-container[_ngcontent-%COMP%]{width:70px;height:24px}@media (max-width: 500px){.token-card__amount[_ngcontent-%COMP%]{font-size:14px}}",
          ],
          changeDetection: 0,
        }));
      class pn {
        constructor(t) {
          (this.context = t), (this.token = t.data.token);
        }
        onAccept() {
          this.context.completeWith(!0);
        }
        onDecline() {
          this.context.completeWith(!1);
        }
      }
      (pn.ɵfac = function (t) {
        return new (t || pn)(e.ɵɵdirectiveInject(z.yf));
      }),
        (pn.ɵcmp = e.ɵɵdefineComponent({
          type: pn,
          selectors: [["polymorpheus-custom-token-warning-modal"]],
          decls: 11,
          vars: 9,
          consts: [
            [1, "buttons-container"],
            ["fullWidth", "", "appearance", "secondary", 3, "click"],
            ["fullWidth", "", "bordered", "", 3, "click"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementContainerStart(0),
              e.ɵɵelementStart(1, "span"),
              e.ɵɵtext(2),
              e.ɵɵpipe(3, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(4, "div", 0)(5, "app-rubic-button", 1),
              e.ɵɵlistener("click", function () {
                return n.onDecline();
              }),
              e.ɵɵtext(6),
              e.ɵɵpipe(7, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(8, "app-rubic-button", 2),
              e.ɵɵlistener("click", function () {
                return n.onAccept();
              }),
              e.ɵɵtext(9),
              e.ɵɵpipe(10, "translate"),
              e.ɵɵelementEnd()(),
              e.ɵɵelementContainerEnd()),
              2 & t &&
                (e.ɵɵadvance(2),
                e.ɵɵtextInterpolate(
                  e.ɵɵpipeBind1(3, 3, "This token is not listed on Rubic.exchange. By adding it as a custom token, you confirm that you’re trading with it at your own risk.")
                ),
                e.ɵɵadvance(4),
                e.ɵɵtextInterpolate(e.ɵɵpipeBind1(7, 5, "Cancel")),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate(e.ɵɵpipeBind1(10, 7, "OK")));
          },
          dependencies: [ie.j, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}html.iframe   [_nghost-%COMP%]{display:block;padding:0 1rem}.buttons-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:15px}.buttons-container[_ngcontent-%COMP%]   app-rubic-button[_ngcontent-%COMP%]{width:150px}",
          ],
          changeDetection: 0,
        }));
      var Jo = l(41313);
      class st {
        constructor(t, n, i, a, s) {
          (this.dialogService = t),
            (this.injector = n),
            (this.translateService = i),
            (this.authService = a),
            (this.assetsSelectorService = s);
        }
        openModal(t) {
          var n = this;
          this.dialogService
            .open(new z.Al(pn, this.injector), {
              data: { token: t },
              dismissible: !0,
              label: this.translateService.instant(
                "Please confirm  your import"
              ),
              size: "s",
            })
            .pipe(
              (0, N.w)(
                (function () {
                  var i = (0, T.Z)(function* (a) {
                    if (a) {
                      try {
                        if (
                          n.authService.userAddress &&
                          n.authService.userChainType ===
                            o.BlockchainsInfo.getChainType(t.blockchain)
                        ) {
                          const s = yield Jo.Injector.web3PublicService
                            .getWeb3Public(t.blockchain)
                            .getTokenBalance(
                              n.authService.userAddress,
                              t.address
                            );
                          return {
                            ...t,
                            amount: o.Web3Pure.fromWei(s, t.decimals),
                          };
                        }
                      } catch {}
                      return t;
                    }
                  });
                  return function (a) {
                    return i.apply(this, arguments);
                  };
                })()
              )
            )
            .subscribe((i) => {
              i && this.assetsSelectorService.onAssetSelect(i);
            });
        }
      }
      function qo(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-rubic-button", 5),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onImportClick());
            }),
            e.ɵɵtext(1),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("disabled", !n.token.available),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" Import ", n.token.symbol, " ");
        }
      }
      function ea(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "translate"),
          e.ɵɵelementEnd()),
          2 & r &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(
                2,
                1,
                "tokensListModal.unsupportedPairsHint"
              ),
              " "
            ));
      }
      (st.ɵfac = function (t) {
        return new (t || st)(
          e.ɵɵinject(Ye.RO),
          e.ɵɵinject(e.Injector),
          e.ɵɵinject(E.sK),
          e.ɵɵinject(j.e),
          e.ɵɵinject(ee)
        );
      }),
        (st.ɵprov = e.ɵɵdefineInjectable({ token: st, factory: st.ɵfac }));
      const ta = function (r) {
        return { "custom-token__element_disabled": r };
      };
      class dn {
        constructor(t, n) {
          (this.customTokenService = t),
            (this.tokensListStoreService = n),
            (this.token = this.tokensListStoreService.customToken);
        }
        onImportClick() {
          this.customTokenService.openModal(this.token);
        }
      }
      (dn.ɵfac = function (t) {
        return new (t || dn)(e.ɵɵdirectiveInject(st), e.ɵɵdirectiveInject(He));
      }),
        (dn.ɵcmp = e.ɵɵdefineComponent({
          type: dn,
          selectors: [["app-custom-token"]],
          features: [e.ɵɵProvidersFeature([st])],
          decls: 6,
          vars: 6,
          consts: [
            [1, "custom-token"],
            [1, "custom-token__element", 3, "ngClass"],
            [
              "tuiHintMode",
              "error",
              "tuiHintDirection",
              "bottom-right",
              3,
              "token",
              "tuiHint",
            ],
            [
              "class",
              "custom-token__button",
              "appearance",
              "secondary",
              "fullWidth",
              "",
              3,
              "disabled",
              "onClick",
              4,
              "ngIf",
            ],
            ["disabledTokenHint", ""],
            [
              "appearance",
              "secondary",
              "fullWidth",
              "",
              1,
              "custom-token__button",
              3,
              "disabled",
              "onClick",
            ],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div", 1),
                e.ɵɵelement(2, "app-tokens-list-element", 2),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(3, qo, 2, 2, "app-rubic-button", 3),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(
                  4,
                  ea,
                  3,
                  3,
                  "ng-template",
                  null,
                  4,
                  e.ɵɵtemplateRefExtractor
                )),
              2 & t)
            ) {
              const i = e.ɵɵreference(5);
              e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngClass",
                  e.ɵɵpureFunction1(4, ta, !n.token.available)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("token", n.token)(
                  "tuiHint",
                  n.token.available ? null : i
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.token.available);
            }
          },
          dependencies: [m.mk, m.O5, ie.j, R.D, At, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{width:100%}.custom-token[_ngcontent-%COMP%]{padding-left:24px}html.iframe[_nghost-%COMP%]   .custom-token[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .custom-token[_ngcontent-%COMP%]{padding-left:0}html.iframe-horizontal[_nghost-%COMP%]   .custom-token[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .custom-token[_ngcontent-%COMP%]{display:flex;align-items:center}.custom-token__element[_ngcontent-%COMP%]{padding:5px 10px;border-radius:15px;cursor:default}.custom-token__element_disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.4}.custom-token__element_disabled[_ngcontent-%COMP%]:hover{background-color:unset}.custom-token__button[_ngcontent-%COMP%]{display:block;margin-top:15px}html.iframe-horizontal[_nghost-%COMP%]   .custom-token__button[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .custom-token__button[_ngcontent-%COMP%]{margin-top:0}",
          ],
          changeDetection: 0,
        }));
      var Oi = l(84651);
      function na(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "translate"),
          e.ɵɵelementContainerEnd()),
          2 & r &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 1, "tokensListModal.noSearchData"),
              " "
            ));
      }
      function ra(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵelementStart(3, "button", 4),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.switchToDefaultList());
            }),
            e.ɵɵtext(4),
            e.ɵɵpipe(5, "translate"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        2 & r &&
          (e.ɵɵadvance(1),
          e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind1(2, 2, "tokensListModal.noFavoriteData"),
            " "
          ),
          e.ɵɵadvance(3),
          e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind1(5, 4, "tokensListModal.backToTokens"),
            " "
          ));
      }
      function ia(r, t) {
        if (
          (1 & r &&
            (e.ɵɵtemplate(0, ra, 6, 6, "ng-container", 1),
            e.ɵɵpipe(1, "async")),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(),
            i = e.ɵɵreference(7);
          e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(1, 2, n.user$))("ngIfElse", i);
        }
      }
      function oa(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵtext(0),
            e.ɵɵpipe(1, "translate"),
            e.ɵɵelementStart(2, "button", 4),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.openAuthModal());
            }),
            e.ɵɵtext(3),
            e.ɵɵpipe(4, "translate"),
            e.ɵɵelementEnd();
        }
        2 & r &&
          (e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind1(1, 2, "tokensListModal.unauthorized"),
            " "
          ),
          e.ɵɵadvance(3),
          e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind1(4, 4, "Connect Wallet"),
            " "
          ));
      }
      class mn {
        constructor(t, n, i, a) {
          (this.tokensListTypeService = t),
            (this.searchQueryService = n),
            (this.authService = i),
            (this.walletsModalService = a),
            (this.user$ = this.authService.currentUser$),
            (this.hasSearchQuery$ = this.searchQueryService.query$.pipe(
              (0, v.U)((s) => Boolean(s.length))
            )),
            (this.listType$ = this.tokensListTypeService.listType$);
        }
        switchToDefaultList() {
          this.tokensListTypeService.switchListType();
        }
        openAuthModal() {
          this.walletsModalService.open$();
        }
      }
      function aa(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div", 12),
          e.ɵɵelement(1, "app-empty-list"),
          e.ɵɵelementEnd());
      }
      (mn.ɵfac = function (t) {
        return new (t || mn)(
          e.ɵɵdirectiveInject(Se),
          e.ɵɵdirectiveInject(fe),
          e.ɵɵdirectiveInject(j.e),
          e.ɵɵdirectiveInject(Oi.u)
        );
      }),
        (mn.ɵcmp = e.ɵɵdefineComponent({
          type: mn,
          selectors: [["app-empty-list"]],
          decls: 8,
          vars: 6,
          consts: [
            [1, "nothing-to-show-message"],
            [4, "ngIf", "ngIfElse"],
            ["noFavoriteTokens", ""],
            ["noAuth", ""],
            [1, "nothing-to-show-message__link", 3, "click"],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵelementStart(0, "div", 0),
                e.ɵɵtemplate(1, na, 3, 3, "ng-container", 1),
                e.ɵɵpipe(2, "async"),
                e.ɵɵpipe(3, "async"),
                e.ɵɵtemplate(
                  4,
                  ia,
                  2,
                  4,
                  "ng-template",
                  null,
                  2,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵtemplate(
                  6,
                  oa,
                  5,
                  6,
                  "ng-template",
                  null,
                  3,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵelementEnd()),
              2 & t)
            ) {
              const i = e.ɵɵreference(5);
              e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  e.ɵɵpipeBind1(2, 2, n.hasSearchQuery$) ||
                    "default" === e.ɵɵpipeBind1(3, 4, n.listType$)
                )("ngIfElse", i);
            }
          },
          dependencies: [m.O5, m.Ov, E.X$],
          styles: [
            ".nothing-to-show-message[_ngcontent-%COMP%]{padding-left:24px;font-size:16px;text-align:center;opacity:.6}.nothing-to-show-message__link[_ngcontent-%COMP%]{color:var(--primary-color);cursor:pointer}",
          ],
          changeDetection: 0,
        }));
      const Pi = function (r) {
        return { "tokens-list__item_disabled": r };
      };
      function sa(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "li", 16),
            e.ɵɵlistener("click", function () {
              const s = e.ɵɵrestoreView(n).$implicit,
                c = e.ɵɵnextContext(6);
              return e.ɵɵresetView(c.onTokenSelect(s));
            }),
            e.ɵɵelement(1, "app-tokens-list-element", 17),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = t.$implicit,
            i = e.ɵɵnextContext(6),
            a = e.ɵɵreference(3);
          e.ɵɵproperty("ngClass", e.ɵɵpureFunction1(6, Pi, !n.available))(
            "tuiHint",
            n.available ? null : a
          ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("token", n)(
              "balanceLoading",
              e.ɵɵpipeBind1(2, 4, i.isBalanceLoading$)
            );
        }
      }
      const ca = function (r) {
        return { "tokens-scrollbar__empty": r };
      };
      function la(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "ul", 13),
            e.ɵɵpipe(1, "async"),
            e.ɵɵelementStart(2, "cdk-virtual-scroll-viewport", 14),
            e.ɵɵtemplate(3, sa, 3, 8, "li", 15),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3).ngLet,
            i = e.ɵɵnextContext().ngLet,
            a = e.ɵɵnextContext();
          e.ɵɵproperty(
            "@listAnimation",
            e.ɵɵpipeBind1(1, 7, a.listAnimationState$)
          ),
            e.ɵɵadvance(2),
            e.ɵɵstyleProp("overflow", n ? "hidden" : "auto"),
            e.ɵɵproperty(
              "ngClass",
              e.ɵɵpureFunction1(9, ca, !(null != i && i.length))
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("cdkVirtualForOf", i)(
              "cdkVirtualForTemplateCacheSize",
              0
            )("cdkVirtualForTrackBy", a.trackByFn);
        }
      }
      function pa(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, aa, 2, 0, "div", 10),
            e.ɵɵtemplate(
              2,
              la,
              4,
              11,
              "ng-template",
              null,
              11,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵreference(3),
            i = e.ɵɵnextContext(3).ngLet;
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !(null != i && i.length))("ngIfElse", n);
        }
      }
      const da = function (r) {
        return { "tokens-list-horizontal-iframe__item_disabled": r };
      };
      function ma(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "li", 22),
            e.ɵɵlistener("click", function () {
              const s = e.ɵɵrestoreView(n).$implicit,
                c = e.ɵɵnextContext(5);
              return e.ɵɵresetView(c.onTokenSelect(s));
            }),
            e.ɵɵelement(1, "app-tokens-list-element", 23),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = t.$implicit;
          e.ɵɵnextContext(5);
          const i = e.ɵɵreference(3);
          e.ɵɵproperty("ngClass", e.ɵɵpureFunction1(3, da, !n.available))(
            "tuiHint",
            n.available ? null : i
          ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("token", n);
        }
      }
      function _a(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "li", 24),
          e.ɵɵtext(1, " Nothing to show "),
          e.ɵɵelementEnd());
      }
      function ua(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "li", 25)(1, "div", 26)(2, "a", 27),
            e.ɵɵtext(3),
            e.ɵɵelementEnd()()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(5);
          e.ɵɵadvance(2),
            e.ɵɵproperty("safetyLink", n.noFrameLink),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1("More on ", n.rubicDomain, "");
        }
      }
      function ga(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "ul", 18),
            e.ɵɵtemplate(1, ma, 2, 5, "li", 19),
            e.ɵɵtemplate(2, _a, 2, 0, "li", 20),
            e.ɵɵtemplate(3, ua, 4, 2, "li", 21),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3).ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngForOf", n),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", 0 === n.length),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", i.iframeRubicLink);
        }
      }
      function ha(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "li", 31),
            e.ɵɵlistener("click", function () {
              const s = e.ɵɵrestoreView(n).$implicit,
                c = e.ɵɵnextContext(5);
              return e.ɵɵresetView(c.onTokenSelect(s));
            }),
            e.ɵɵelement(1, "app-tokens-list-element", 23),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = t.$implicit;
          e.ɵɵnextContext(5);
          const i = e.ɵɵreference(3);
          e.ɵɵproperty("ngClass", e.ɵɵpureFunction1(3, Pi, !n.available))(
            "tuiManualHint",
            i
          ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("token", n);
        }
      }
      function fa(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "li", 32),
          e.ɵɵtext(1, " Nothing to show "),
          e.ɵɵelementEnd());
      }
      function Ca(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "li", 33)(1, "a", 27),
            e.ɵɵtext(2),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(5);
          e.ɵɵadvance(1),
            e.ɵɵproperty("safetyLink", n.noFrameLink),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1("More on ", n.rubicDomain, "");
        }
      }
      function va(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "ul", 13),
            e.ɵɵtemplate(1, ha, 2, 5, "li", 28),
            e.ɵɵtemplate(2, fa, 2, 0, "li", 29),
            e.ɵɵtemplate(3, Ca, 3, 2, "li", 30),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3).ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngForOf", n),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", 0 === n.length),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", i.iframeRubicLink);
        }
      }
      function ba(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtemplate(1, pa, 4, 2, "ng-container", 7),
          e.ɵɵtemplate(2, ga, 4, 3, "ul", 8),
          e.ɵɵtemplate(3, va, 4, 3, "ul", 9),
          e.ɵɵelementContainerEnd()),
          2 & r &&
            (e.ɵɵadvance(2),
            e.ɵɵproperty("onlyFrame", "horizontal"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("onlyFrame", "vertical"));
      }
      function xa(r, t) {
        1 & r && e.ɵɵelement(0, "app-custom-token");
      }
      function ya(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "tui-loader", 4),
            e.ɵɵtemplate(1, ba, 4, 2, "ng-container", 5),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(
              3,
              xa,
              1,
              0,
              "ng-template",
              null,
              6,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵreference(4),
            a = e.ɵɵnextContext(2);
          e.ɵɵproperty("showLoader", n)("overlay", !0),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", null === e.ɵɵpipeBind1(2, 4, a.customToken$))(
              "ngIfElse",
              i
            );
        }
      }
      function Sa(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "tui-scrollbar", 2),
            e.ɵɵtemplate(2, ya, 5, 6, "tui-loader", 3),
            e.ɵɵpipe(3, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(3, 1, n.loading$));
        }
      }
      function Ta(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "translate"),
          e.ɵɵelementEnd()),
          2 & r &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 1, "tokensListModal.clearParamsHint"),
              " "
            ));
      }
      class _n {
        constructor(t, n, i, a, s) {
          (this.queryParamsService = t),
            (this.iframeService = n),
            (this.assetsSelectorService = i),
            (this.tokensListService = a),
            (this.tokensListStoreService = s),
            (this.loading$ = this.tokensListService.loading$),
            (this.listAnimationState$ =
              this.tokensListService.listAnimationType$),
            (this.tokensToShow$ = this.tokensListStoreService.tokensToShow$),
            (this.customToken$ = this.tokensListStoreService.customToken$),
            (this.isBalanceLoading$ =
              this.tokensListStoreService.tokensToShow$.pipe(
                (0, N.w)((c) =>
                  c.length
                    ? this.tokensListStoreService.isBalanceLoading$(
                        c[0].blockchain
                      )
                    : (0, L.of)(!1)
                )
              )),
            (this.rubicDomain = "app.rubic.exchange"),
            (this.noFrameLink = `https://${this.rubicDomain}${this.queryParamsService.noFrameLink}`),
            (this.iframeRubicLink = this.iframeService.rubicLink);
        }
        set virtualScroll(t) {
          this.tokensListService.setListScrollSubject(t);
        }
        trackByFn(t, n) {
          return `${n.blockchain}_${n.address}`;
        }
        onTokenSelect(t) {
          t.available && this.assetsSelectorService.onAssetSelect(t);
        }
      }
      (_n.ɵfac = function (t) {
        return new (t || _n)(
          e.ɵɵdirectiveInject(Be.E),
          e.ɵɵdirectiveInject(W.b),
          e.ɵɵdirectiveInject(ee),
          e.ɵɵdirectiveInject(at),
          e.ɵɵdirectiveInject(He)
        );
      }),
        (_n.ɵcmp = e.ɵɵdefineComponent({
          type: _n,
          selectors: [["app-tokens-list"]],
          viewQuery: function (t, n) {
            if ((1 & t && e.ɵɵviewQuery(Ze.N7, 5), 2 & t)) {
              let i;
              e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                (n.virtualScroll = i.first);
            }
          },
          decls: 4,
          vars: 3,
          consts: [
            [4, "ngLet"],
            ["disabledTokenHint", ""],
            [1, "tokens-container"],
            [3, "showLoader", "overlay", 4, "ngLet"],
            [3, "showLoader", "overlay"],
            [4, "ngIf", "ngIfElse"],
            ["customTokenTmpl", ""],
            [4, "noFrame"],
            ["class", "tokens-list-horizontal-iframe", 4, "onlyFrame"],
            ["class", "tokens-list", 4, "onlyFrame"],
            ["class", "tokens-container__empty-list", 4, "ngIf", "ngIfElse"],
            ["tokenList", ""],
            [1, "tokens-container__empty-list"],
            [1, "tokens-list"],
            [
              "tuiScrollable",
              "",
              "itemSize",
              "67",
              1,
              "tokens-scrollbar",
              "tui-zero-scrollbar",
              3,
              "ngClass",
            ],
            [
              "class",
              "tokens-list__item",
              "tuiHintMode",
              "error",
              "tuiHintDirection",
              "bottom-right",
              3,
              "ngClass",
              "tuiHint",
              "click",
              4,
              "cdkVirtualFor",
              "cdkVirtualForOf",
              "cdkVirtualForTemplateCacheSize",
              "cdkVirtualForTrackBy",
            ],
            [
              "tuiHintMode",
              "error",
              "tuiHintDirection",
              "bottom-right",
              1,
              "tokens-list__item",
              3,
              "ngClass",
              "tuiHint",
              "click",
            ],
            [3, "token", "balanceLoading"],
            [1, "tokens-list-horizontal-iframe"],
            [
              "class",
              "tokens-list-horizontal-iframe__item",
              "tuiHintMode",
              "error",
              "tuiHintDirection",
              "bottom-right",
              3,
              "ngClass",
              "tuiHint",
              "click",
              4,
              "ngFor",
              "ngForOf",
            ],
            [
              "class",
              "tokens-list-horizontal-iframe__item tokens-list-horizontal-iframe__item_empty",
              4,
              "ngIf",
            ],
            [
              "class",
              "tokens-list-horizontal-iframe__item-container",
              4,
              "ngIf",
            ],
            [
              "tuiHintMode",
              "error",
              "tuiHintDirection",
              "bottom-right",
              1,
              "tokens-list-horizontal-iframe__item",
              3,
              "ngClass",
              "tuiHint",
              "click",
            ],
            [3, "token"],
            [
              1,
              "tokens-list-horizontal-iframe__item",
              "tokens-list-horizontal-iframe__item_empty",
            ],
            [1, "tokens-list-horizontal-iframe__item-container"],
            [
              1,
              "tokens-list-horizontal-iframe__item",
              "tokens-list-horizontal-iframe__item-link",
            ],
            [3, "safetyLink"],
            [
              "class",
              "tokens-list__item",
              "tuiHintMode",
              "error",
              "tuiHintDirection",
              "bottom-right",
              3,
              "ngClass",
              "tuiManualHint",
              "click",
              4,
              "ngFor",
              "ngForOf",
            ],
            ["class", "tokens-list__item tokens-list__item_empty", 4, "ngIf"],
            ["class", "tokens-list__item vertical-frame-link", 4, "ngIf"],
            [
              "tuiHintMode",
              "error",
              "tuiHintDirection",
              "bottom-right",
              1,
              "tokens-list__item",
              3,
              "ngClass",
              "tuiManualHint",
              "click",
            ],
            [1, "tokens-list__item", "tokens-list__item_empty"],
            [1, "tokens-list__item", "vertical-frame-link"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Sa, 4, 3, "ng-container", 0),
              e.ɵɵpipe(1, "async"),
              e.ɵɵtemplate(
                2,
                Ta,
                3,
                3,
                "ng-template",
                null,
                1,
                e.ɵɵtemplateRefExtractor
              )),
              2 & t &&
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(1, 1, n.tokensToShow$));
          },
          dependencies: [
            m.mk,
            m.sg,
            m.O5,
            Fr.x,
            B.e,
            de.a,
            Fe.T,
            $e.IB,
            $e.Rm,
            Ze.xd,
            Ze.x0,
            Ze.N7,
            R.D,
            Si.vZ,
            wt.kM,
            At,
            dn,
            mn,
            m.Ov,
            E.X$,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{width:100%}.tokens-container[_ngcontent-%COMP%]{position:relative;height:calc(100% - 15px);margin-top:10px}@media (max-width: 599px){.tokens-container[_ngcontent-%COMP%]{height:calc(100% - 20px);margin-top:15px}}html.iframe[_nghost-%COMP%]   .tokens-container[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .tokens-container[_ngcontent-%COMP%]{position:static;left:unset;width:100%;margin-top:15px;padding-top:0}html.iframe-vertical[_nghost-%COMP%]   .tokens-container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .tokens-container[_ngcontent-%COMP%]{height:350px}html.iframe-horizontal[_nghost-%COMP%]   .tokens-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .tokens-container[_ngcontent-%COMP%]{height:75px}.tokens-container__empty-list[_ngcontent-%COMP%]{position:relative;margin-top:20px}.tokens-container[_ngcontent-%COMP%]     .content{height:100%}tui-loader[_ngcontent-%COMP%]{height:100%}.tokens-list[_ngcontent-%COMP%]{height:100%;padding-right:15px}.tokens-list__item[_ngcontent-%COMP%]{padding:5px 10px;border-radius:15px;cursor:pointer}.tokens-list__item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:15px}html.iframe-vertical[_nghost-%COMP%]   .tokens-list__item[_ngcontent-%COMP%]:not(:last-child), html.iframe-vertical   [_nghost-%COMP%]   .tokens-list__item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:2px}.tokens-list__item[_ngcontent-%COMP%]:hover{background-color:var(--transparent-line)}.tokens-list__item_disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.4}.tokens-list__item_disabled[_ngcontent-%COMP%]:hover{background-color:unset}.tokens-list__item_empty[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px;font-size:18px}.tokens-list__item_empty[_ngcontent-%COMP%]:hover{background-color:unset}.tokens-list-horizontal-iframe[_ngcontent-%COMP%]{display:flex}.tokens-list-horizontal-iframe__item-container[_ngcontent-%COMP%]{min-width:206px;max-width:206px}.tokens-list-horizontal-iframe__item[_ngcontent-%COMP%]{min-width:191px;max-width:191px;height:55px;padding:5px 10px;border:2px solid #626262;border-radius:15px;cursor:pointer}html.iframe-horizontal[_nghost-%COMP%]   .tokens-list-horizontal-iframe__item[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .tokens-list-horizontal-iframe__item[_ngcontent-%COMP%]{padding:4px}html.iframe:not(.dark)[_nghost-%COMP%]   .tokens-list-horizontal-iframe__item[_ngcontent-%COMP%], html.iframe:not(.dark)   [_nghost-%COMP%]   .tokens-list-horizontal-iframe__item[_ngcontent-%COMP%]{border:1px solid #e9e9e9}html.iframe:not(.dark)[_nghost-%COMP%]   .tokens-list-horizontal-iframe__item[_ngcontent-%COMP%]:hover, html.iframe:not(.dark)   [_nghost-%COMP%]   .tokens-list-horizontal-iframe__item[_ngcontent-%COMP%]:hover{background-color:var(--rubic-base-14)}.tokens-list-horizontal-iframe__item[_ngcontent-%COMP%]:not(:last-child){margin-right:15px}.tokens-list-horizontal-iframe__item[_ngcontent-%COMP%]:hover{background-color:var(--primary-background)}.tokens-list-horizontal-iframe__item_disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.4}.tokens-list-horizontal-iframe__item_disabled[_ngcontent-%COMP%]:hover{background-color:unset}.tokens-list-horizontal-iframe__item_empty[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:18px;border:0;cursor:default}.tokens-list-horizontal-iframe__item_empty[_ngcontent-%COMP%]:hover{background-color:unset}.tokens-list-horizontal-iframe__item-link[_ngcontent-%COMP%]{border-color:var(--primary-color)}.tokens-list-horizontal-iframe__item-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;width:100%;height:100%;line-height:40px;text-align:center}html.iframe[_nghost-%COMP%]   .tokens-list-horizontal-iframe__item-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .tokens-list-horizontal-iframe__item-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{line-height:1.4}.tokens-list-horizontal-iframe__item-link[_ngcontent-%COMP%]:hover{background-color:unset}.tokens-scrollbar[_ngcontent-%COMP%]{height:100%;overflow-x:hidden!important}.tokens-scrollbar[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper{width:100%;padding:0 0 5px 24px}@media (max-width: 500px){.tokens-scrollbar[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper{padding-left:10px}}.vertical-frame-link[_ngcontent-%COMP%]{border:2px solid var(--primary-color)}.vertical-frame-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;width:100%;height:100%;line-height:30px;text-align:center}.vertical-frame-link[_ngcontent-%COMP%]:hover{background-color:unset}",
          ],
          data: { animation: [yi] },
          changeDetection: 0,
        }));
      class ct {
        constructor() {
          this.onClick = new e.EventEmitter();
        }
      }
      function Oa(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 8),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext().$implicit,
                s = e.ɵɵnextContext(2);
              return e.ɵɵresetView(s.onBlockchainSelect(a.name));
            }),
            e.ɵɵelementStart(2, "div", 9),
            e.ɵɵelement(3, "img", 10),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "span", 11),
            e.ɵɵtext(5),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext().$implicit;
          e.ɵɵadvance(3),
            e.ɵɵproperty("src", n.icon, e.ɵɵsanitizeUrl)("alt", n.label),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(n.label);
        }
      }
      function Pa(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Oa, 6, 3, "ng-container", 7),
            e.ɵɵpipe(2, "functionCall"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.$implicit,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind3(2, 1, n, i.isDisabled, i));
        }
      }
      function ka(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 5),
            e.ɵɵtemplate(1, Pa, 3, 5, "ng-container", 6),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = t.ngLet;
          e.ɵɵadvance(1), e.ɵɵproperty("ngForOf", n);
        }
      }
      (ct.ɵfac = function (t) {
        return new (t || ct)();
      }),
        (ct.ɵcmp = e.ɵɵdefineComponent({
          type: ct,
          selectors: [["app-back-button"]],
          outputs: { onClick: "onClick" },
          decls: 3,
          vars: 0,
          consts: [
            [1, "back-button"],
            ["appearance", "secondary", "size", "s", 3, "onClick"],
            [
              "inlineSVG",
              "assets/images/icons/arrow/long-arrow-left.svg",
              1,
              "back-button__arrow",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "app-rubic-button", 1),
              e.ɵɵlistener("onClick", function () {
                return n.onClick.emit();
              }),
              e.ɵɵelement(2, "div", 2),
              e.ɵɵelementEnd()());
          },
          dependencies: [G.d$, ie.j],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.back-button[_ngcontent-%COMP%]   app-rubic-button[_ngcontent-%COMP%]     button{border-radius:15px}.back-button__arrow[_ngcontent-%COMP%]{width:16px;height:15px}.back-button__arrow[_ngcontent-%COMP%]     svg{width:100%;height:100%}.back-button__arrow[_ngcontent-%COMP%]     svg path{fill:var(--primary-text)}",
          ],
          changeDetection: 0,
        }));
      class un {
        constructor(t, n) {
          (this.blockchainsListService = t),
            (this.assetsSelectorService = n),
            (this.blockchainsToShow$ =
              this.blockchainsListService.blockchainsToShow$);
        }
        isDisabled(t) {
          return !1;
        }
        getHintText(t) {
          return this.blockchainsListService.getHintText(t);
        }
        closeBlockchainsList() {
          this.assetsSelectorService.setSelectorListTypeByAssetType();
        }
        onBlockchainSelect(t) {
          this.assetsSelectorService.onBlockchainSelect(t);
        }
      }
      function wa(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-icon-button", 1),
            e.ɵɵlistener("iconButtonClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.switchMode());
            }),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = t.ngLet;
          e.ɵɵproperty("icon", "assets/images/icons/" + n.icon)(
            "tuiHint",
            n.hintText
          )("tuiHintShowDelay", 1100)("border", !1);
        }
      }
      (un.ɵfac = function (t) {
        return new (t || un)(e.ɵɵdirectiveInject(Ue), e.ɵɵdirectiveInject(ee));
      }),
        (un.ɵcmp = e.ɵɵdefineComponent({
          type: un,
          selectors: [["app-blockchains-list"]],
          decls: 6,
          vars: 3,
          consts: [
            [1, "list-container"],
            [1, "list-container__back-button"],
            [3, "onClick"],
            [1, "scrollbar"],
            ["class", "list", 4, "ngLet"],
            [1, "list"],
            [4, "ngFor", "ngForOf"],
            [4, "ngLet"],
            [
              "tuiHintMode",
              "error",
              "tuiHintDirection",
              "right",
              1,
              "list__item",
              "item",
              3,
              "click",
            ],
            [1, "item__image-container"],
            [3, "src", "alt"],
            [1, "item__label"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(
                2,
                "app-back-button",
                2
              ),
              e.ɵɵlistener("onClick", function () {
                return n.closeBlockchainsList();
              }),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(3, "tui-scrollbar", 3),
              e.ɵɵtemplate(4, ka, 2, 1, "div", 4),
              e.ɵɵpipe(5, "async"),
              e.ɵɵelementEnd()()),
              2 & t &&
                (e.ɵɵadvance(4),
                e.ɵɵproperty(
                  "ngLet",
                  e.ɵɵpipeBind1(5, 1, n.blockchainsToShow$)
                ));
          },
          dependencies: [m.sg, B.e, ct, $e.IB, m.Ov, Br.g],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.list-container[_ngcontent-%COMP%]{display:flex;height:100%}.list-container__back-button[_ngcontent-%COMP%]{margin:16px 0 0 23px}@media (max-width: 599px){.list-container__back-button[_ngcontent-%COMP%]{margin-top:21px}}@media (max-width: 500px){.list-container__back-button[_ngcontent-%COMP%]{margin-left:10px}}.scrollbar[_ngcontent-%COMP%]{width:100%;height:calc(100% - 15px);margin-top:10px;padding:0 0 10px 15px}@media (max-width: 599px){.scrollbar[_ngcontent-%COMP%]{height:calc(100% - 20px);margin-top:15px}}.list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;grid-gap:15px}.list__item[_ngcontent-%COMP%]{display:flex;grid-gap:20px;align-items:center;width:calc(33% - 15px);padding:5px 10px}@media (max-width: 768px){.list__item[_ngcontent-%COMP%]{width:calc(50% - 15px)}}@media (max-width: 560px){.list__item[_ngcontent-%COMP%]{width:calc(100% - 15px)}}.item[_ngcontent-%COMP%]{border-radius:15px;cursor:pointer}.item[_ngcontent-%COMP%]:hover{background-color:var(--transparent-line)}.item_disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5}.item__image-container[_ngcontent-%COMP%]{width:38px;height:38px}.item__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:38px;border-radius:50%}.item__label[_ngcontent-%COMP%]{font-size:16px;line-height:20px}",
          ],
          changeDetection: 0,
        }));
      class gn {
        constructor(t) {
          (this.tokensListTypeService = t),
            (this.buttonData$ = this.tokensListTypeService.listType$.pipe(
              (0, v.U)((n) => ({
                icon: "default" === n ? "star.svg" : "back.svg",
                hintText:
                  "default" === n
                    ? "List of favorite tokens"
                    : "Back to whole tokens list",
              }))
            ));
        }
        switchMode() {
          this.tokensListTypeService.switchListType();
        }
      }
      (gn.ɵfac = function (t) {
        return new (t || gn)(e.ɵɵdirectiveInject(Se));
      }),
        (gn.ɵcmp = e.ɵɵdefineComponent({
          type: gn,
          selectors: [["app-switch-list-type-button"]],
          decls: 2,
          vars: 3,
          consts: [
            [
              "buttonSize",
              "s",
              "appearance",
              "secondary",
              3,
              "icon",
              "tuiHint",
              "tuiHintShowDelay",
              "border",
              "iconButtonClick",
              4,
              "ngLet",
            ],
            [
              "buttonSize",
              "s",
              "appearance",
              "secondary",
              3,
              "icon",
              "tuiHint",
              "tuiHintShowDelay",
              "border",
              "iconButtonClick",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, wa, 1, 4, "app-icon-button", 0),
              e.ɵɵpipe(1, "async")),
              2 & t &&
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(1, 1, n.buttonData$));
          },
          dependencies: [Rr.r, B.e, R.D, m.Ov],
          styles: [
            "app-icon-button[_ngcontent-%COMP%]{flex-shrink:0;width:32px;height:32px}app-icon-button[_ngcontent-%COMP%]     tui-wrapper{border-radius:0}",
          ],
          changeDetection: 0,
        }));
      class hn {
        constructor() {}
      }
      function Aa(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div", 4),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "translate"),
          e.ɵɵelementEnd()),
          2 & r &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 1, "tokensListModal.noSearchData"),
              " "
            ));
      }
      function Ea(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "li", 8),
            e.ɵɵlistener("click", function () {
              const s = e.ɵɵrestoreView(n).$implicit,
                c = e.ɵɵnextContext(3);
              return e.ɵɵresetView(c.onFiatSelect(s));
            }),
            e.ɵɵelement(1, "app-fiats-list-element", 9),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = t.$implicit;
          e.ɵɵadvance(1), e.ɵɵproperty("fiat", n);
        }
      }
      (hn.ɵfac = function (t) {
        return new (t || hn)();
      }),
        (hn.ɵcmp = e.ɵɵdefineComponent({
          type: hn,
          selectors: [["app-fiats-list-element"]],
          inputs: { fiat: "fiat" },
          decls: 8,
          vars: 4,
          consts: [
            [1, "fiat-card"],
            [1, "fiat-card__image-container"],
            [3, "src", "alt"],
            [1, "fiat-card__name-container", "name-container"],
            [1, "name-container__symbol"],
            [1, "name-container__name"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "div", 1),
              e.ɵɵelement(2, "img", 2),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(3, "div", 3)(4, "div", 4),
              e.ɵɵtext(5),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(6, "div", 5),
              e.ɵɵtext(7),
              e.ɵɵelementEnd()()()),
              2 & t &&
                (e.ɵɵadvance(2),
                e.ɵɵproperty(
                  "src",
                  n.fiat.image,
                  e.ɵɵsanitizeUrl
                )("alt", n.fiat.symbol),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate(n.fiat.symbol),
                e.ɵɵadvance(2),
                e.ɵɵtextInterpolate(n.fiat.name));
          },
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.fiat-card[_ngcontent-%COMP%]{display:flex;align-items:center;height:42px;color:var(--form-bright-text-color)}html.iframe[_nghost-%COMP%]   .fiat-card[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .fiat-card[_ngcontent-%COMP%]{height:unset}.fiat-card__name-container[_ngcontent-%COMP%]{max-width:150px;margin-right:auto}.fiat-card__image-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:38px;height:38px;margin-right:20px}html.iframe-vertical[_nghost-%COMP%]   .fiat-card__image-container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .fiat-card__image-container[_ngcontent-%COMP%]{width:24px;height:24px}.fiat-card__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:38px;max-height:38px;border-radius:25%}html.iframe-vertical[_nghost-%COMP%]   .fiat-card__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .fiat-card__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:24px;max-height:24px}.name-container__symbol[_ngcontent-%COMP%]{display:flex;align-items:center;width:-moz-fit-content;width:fit-content;line-height:24px}html.iframe[_nghost-%COMP%]   .name-container__symbol[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .name-container__symbol[_ngcontent-%COMP%]{font-size:14px;line-height:16px}.name-container__name[_ngcontent-%COMP%]{font-size:13px;line-height:18px}html.iframe[_nghost-%COMP%]   .name-container__name[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .name-container__name[_ngcontent-%COMP%]{font-size:12px;line-height:14px}",
          ],
          changeDetection: 0,
        }));
      const Ma = function (r) {
        return { "fiats-scrollbar__empty": r };
      };
      function Ia(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "ul", 5)(1, "cdk-virtual-scroll-viewport", 6),
            e.ɵɵtemplate(2, Ea, 2, 1, "li", 7),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵproperty("@listAnimation", void 0),
            e.ɵɵadvance(1),
            e.ɵɵproperty("itemSize", i.isIframe ? 42 : 67)(
              "ngClass",
              e.ɵɵpureFunction1(5, Ma, !(null != n && n.length))
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("cdkVirtualForOf", n)(
              "cdkVirtualForTemplateCacheSize",
              0
            );
        }
      }
      function Na(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "tui-scrollbar", 1),
            e.ɵɵtemplate(1, Aa, 3, 3, "div", 2),
            e.ɵɵtemplate(
              2,
              Ia,
              3,
              7,
              "ng-template",
              null,
              3,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵreference(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !(null != n && n.length))("ngIfElse", i);
        }
      }
      class fn {
        constructor(t, n, i) {
          (this.assetsSelectorService = t),
            (this.fiatsListService = n),
            (this.iframeService = i),
            (this.fiats$ = this.fiatsListService.fiatsToShow$),
            (this.isIframe = this.iframeService.isIframe);
        }
        onFiatSelect(t) {
          this.assetsSelectorService.onAssetSelect(t);
        }
      }
      function Ra(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "header", 3)(1, "h2"),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "translate"),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(3, 1, e.ɵɵpipeBind1(4, 3, n.headerText$)),
              " "
            );
        }
      }
      function Ba(r, t) {
        1 & r && e.ɵɵelement(0, "app-switch-list-type-button");
      }
      function Fa(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 7),
            e.ɵɵelement(1, "app-search-bar"),
            e.ɵɵtemplate(2, Ba, 1, 0, "app-switch-list-type-button", 6),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet;
          e.ɵɵadvance(2), e.ɵɵproperty("ngIf", "tokens" === n);
        }
      }
      function Da(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "div", 8),
          e.ɵɵelement(2, "app-blockchains-list"),
          e.ɵɵelementEnd(),
          e.ɵɵelementContainerEnd());
      }
      function La(r, t) {
        1 & r && e.ɵɵelement(0, "app-search-bar", 14);
      }
      function Ha(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, La, 1, 0, "app-search-bar", 13),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2).ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", i.iframeTokenSearch || "fiats" === n);
        }
      }
      function $a(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div", 15),
          e.ɵɵelement(1, "app-fiats-list"),
          e.ɵɵelementEnd());
      }
      function Va(r, t) {
        1 & r && e.ɵɵelement(0, "app-search-bar", 19),
          2 & r && e.ɵɵproperty("expandableField", !0);
      }
      function ja(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Va, 1, 1, "app-search-bar", 18),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(4);
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", n.iframeTokenSearch);
        }
      }
      function za(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div", 16),
          e.ɵɵtemplate(1, ja, 2, 1, "ng-container", 10),
          e.ɵɵelementStart(2, "div", 17),
          e.ɵɵelement(3, "app-tokens-list"),
          e.ɵɵelementEnd()()),
          2 & r && (e.ɵɵadvance(1), e.ɵɵproperty("onlyFrame", "horizontal"));
      }
      function Ya(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "app-asset-types-aside", 9),
            e.ɵɵtemplate(2, Ha, 2, 1, "ng-container", 10),
            e.ɵɵtemplate(3, $a, 2, 0, "div", 11),
            e.ɵɵtemplate(4, za, 4, 1, "div", 12),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("idPrefix", i.idPrefix),
            e.ɵɵadvance(1),
            e.ɵɵproperty("onlyFrame", "vertical"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "fiats" === n),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "tokens" === n);
        }
      }
      function Wa(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Fa, 3, 1, "div", 4),
            e.ɵɵelementStart(2, "div", 5),
            e.ɵɵtemplate(3, Da, 3, 0, "ng-container", 6),
            e.ɵɵtemplate(4, Ya, 5, 4, "ng-container", 6),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet;
          e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", "blockchains" === n),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "blockchains" !== n);
        }
      }
      (fn.ɵfac = function (t) {
        return new (t || fn)(
          e.ɵɵdirectiveInject(ee),
          e.ɵɵdirectiveInject(Ge),
          e.ɵɵdirectiveInject(W.b)
        );
      }),
        (fn.ɵcmp = e.ɵɵdefineComponent({
          type: fn,
          selectors: [["app-fiats-list"]],
          decls: 3,
          vars: 3,
          consts: [
            ["class", "fiats-container", 4, "ngLet"],
            [1, "fiats-container"],
            ["class", "nothing-to-show-message", 4, "ngIf", "ngIfElse"],
            ["fiatsList", ""],
            [1, "nothing-to-show-message"],
            [1, "fiats-list"],
            [
              "tuiScrollable",
              "",
              1,
              "fiats-scrollbar",
              "tui-zero-scrollbar",
              3,
              "itemSize",
              "ngClass",
            ],
            [
              "class",
              "fiats-list__item",
              3,
              "click",
              4,
              "cdkVirtualFor",
              "cdkVirtualForOf",
              "cdkVirtualForTemplateCacheSize",
            ],
            [1, "fiats-list__item", 3, "click"],
            [3, "fiat"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementContainerStart(0),
              e.ɵɵtemplate(1, Na, 4, 2, "tui-scrollbar", 0),
              e.ɵɵpipe(2, "async"),
              e.ɵɵelementContainerEnd()),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.fiats$)));
          },
          dependencies: [
            m.mk,
            m.O5,
            B.e,
            $e.IB,
            $e.Rm,
            Ze.xd,
            Ze.x0,
            Ze.N7,
            hn,
            m.Ov,
            E.X$,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{width:100%}.fiats-container[_ngcontent-%COMP%]{height:calc(100% - 15px);margin-top:10px}@media (max-width: 599px){.fiats-container[_ngcontent-%COMP%]{height:calc(100% - 20px);margin-top:15px}}html.iframe-vertical[_nghost-%COMP%]   .fiats-container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .fiats-container[_ngcontent-%COMP%]{position:static;left:unset;width:100%;height:350px;margin-top:15px;padding-top:0}.fiats-container[_ngcontent-%COMP%]     .content{height:100%}.fiats-list[_ngcontent-%COMP%]{height:100%;padding-right:15px}.fiats-list__item[_ngcontent-%COMP%]{padding:5px 10px;border-radius:15px;cursor:pointer}.fiats-list__item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:15px}html.iframe-vertical[_nghost-%COMP%]   .fiats-list__item[_ngcontent-%COMP%]:not(:last-child), html.iframe-vertical   [_nghost-%COMP%]   .fiats-list__item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:2px}.fiats-list__item[_ngcontent-%COMP%]:hover{background-color:#4aa95626}.fiats-list__item_disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.4}.fiats-list__item_disabled[_ngcontent-%COMP%]:hover{background-color:unset}.fiats-list__item_empty[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px;font-size:18px}.fiats-list__item_empty[_ngcontent-%COMP%]:hover{background-color:unset}.nothing-to-show-message[_ngcontent-%COMP%]{position:relative;display:block;margin-top:20px;font-size:16px;text-align:center;opacity:.6}.nothing-to-show-message__link[_ngcontent-%COMP%]{color:var(--primary-color);cursor:pointer}.fiats-scrollbar[_ngcontent-%COMP%]{height:100%;overflow-x:hidden!important}.fiats-scrollbar[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper{width:100%;padding:0 0 5px 24px}@media (max-width: 500px){.fiats-scrollbar[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper{padding-left:10px}}html.iframe-vertical[_nghost-%COMP%]   .fiats-scrollbar[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper, html.iframe-vertical   [_nghost-%COMP%]   .fiats-scrollbar[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper{padding:0}",
          ],
          data: { animation: [yi] },
          changeDetection: 0,
        }));
      class Cn {
        constructor(t, n, i, a, s, c, p) {
          (this.context = t),
            (this.tokensService = n),
            (this.tokensStoreService = i),
            (this.iframeService = a),
            (this.assetsSelectorService = s),
            (this.tokensListTypeService = c),
            (this.document = p),
            (this.iframeTokenSearch = this.iframeService.tokenSearch),
            (this.headerText$ = (0, $.a)([
              this.assetsSelectorService.selectorListType$,
              this.tokensListTypeService.listType$,
            ]).pipe(
              (0, v.U)(([d, _]) =>
                "blockchains" === d
                  ? "Blockchains List"
                  : "fiats" === d
                  ? "Fiats List"
                  : "default" === _
                  ? "Blockchains List"
                  : "tokensListModal.favoriteTokensTitle"
              )
            )),
            (this.selectorListType$ =
              this.assetsSelectorService.selectorListType$),
            this.initiateContextParams(t.data),
            this.assetsSelectorService.assetSelected$.subscribe((d) => {
              (0, pe.$v)(d) && this.tokensStoreService.addToken(d),
                this.context.completeWith(d);
            });
        }
        ngOnInit() {
          this.setWindowHeight();
        }
        ngOnDestroy() {
          this.resetWindowHeight();
        }
        initiateContextParams(t) {
          (this.idPrefix = t.idPrefix),
            this.assetsSelectorService.initParameters(t);
        }
        setWindowHeight() {
          this.document.documentElement.style.setProperty(
            "--window-inner-height",
            `${window.innerHeight}px`
          ),
            this.document.documentElement.classList.add("is-locked");
        }
        resetWindowHeight() {
          this.document.documentElement.classList.remove("is-locked");
        }
      }
      (Cn.ɵfac = function (t) {
        return new (t || Cn)(
          e.ɵɵdirectiveInject(z.yf),
          e.ɵɵdirectiveInject(De.H),
          e.ɵɵdirectiveInject(kt.Z),
          e.ɵɵdirectiveInject(W.b),
          e.ɵɵdirectiveInject(ee),
          e.ɵɵdirectiveInject(Se),
          e.ɵɵdirectiveInject(m.K0)
        );
      }),
        (Cn.ɵcmp = e.ɵɵdefineComponent({
          type: Cn,
          selectors: [["polymorpheus-assets-selector"]],
          features: [e.ɵɵProvidersFeature(Oo)],
          decls: 4,
          vars: 3,
          consts: [
            [1, "assets-selector"],
            ["class", "assets-selector__header", 4, "noFrame"],
            [4, "ngLet"],
            [1, "assets-selector__header"],
            ["class", "assets-selector__row", 4, "noFrame"],
            [1, "assets-selector__content"],
            [4, "ngIf"],
            [1, "assets-selector__row"],
            [1, "blockchains-list-container"],
            [3, "idPrefix"],
            [4, "onlyFrame"],
            ["class", "fiats-list-container", 4, "ngIf"],
            ["class", "token-list-container", 4, "ngIf"],
            ["class", "vertical-iframe-token-search", 4, "ngIf"],
            [1, "vertical-iframe-token-search"],
            [1, "fiats-list-container"],
            [1, "token-list-container"],
            [1, "token-list-container__list"],
            [
              "class",
              "token-list-container__search",
              3,
              "expandableField",
              4,
              "ngIf",
            ],
            [1, "token-list-container__search", 3, "expandableField"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "section", 0),
              e.ɵɵtemplate(1, Ra, 5, 5, "header", 1),
              e.ɵɵtemplate(2, Wa, 5, 2, "ng-container", 2),
              e.ɵɵpipe(3, "async"),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵadvance(2),
                e.ɵɵproperty(
                  "ngLet",
                  e.ɵɵpipeBind1(3, 1, n.selectorListType$)
                ));
          },
          dependencies: [
            m.O5,
            B.e,
            de.a,
            Fe.T,
            an,
            sn,
            _n,
            un,
            gn,
            fn,
            m.Ov,
            E.X$,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.assets-selector[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}html.iframe-horizontal[_nghost-%COMP%]   .assets-selector[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .assets-selector[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;width:1180px;height:100vh;margin:0 auto}html.iframe-vertical[_nghost-%COMP%]   .assets-selector[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .assets-selector[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;width:350px;height:100vh;margin:0 auto}.assets-selector__row[_ngcontent-%COMP%]{display:flex;grid-gap:20px;justify-content:space-between}.assets-selector__row[_ngcontent-%COMP%]     tui-wrapper img{max-width:20px;max-height:20px;filter:grayscale(1)}.assets-selector__header[_ngcontent-%COMP%]{position:relative;margin-right:40px}.assets-selector__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;color:gray;font-weight:300;font-size:24px;line-height:29px}.assets-selector__content[_ngcontent-%COMP%]{position:relative;left:-24px;display:flex;flex:1;width:calc(100% + 24px);min-height:443px;max-height:443px}html.iframe[_nghost-%COMP%]   .assets-selector__content[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .assets-selector__content[_ngcontent-%COMP%]{left:0}html.iframe-horizontal[_nghost-%COMP%]   .assets-selector__content[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .assets-selector__content[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;width:100%;height:180px;max-height:180px;padding:0 30px 0 0}html.iframe-vertical[_nghost-%COMP%]   .assets-selector__content[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .assets-selector__content[_ngcontent-%COMP%]{flex-direction:column;width:350px;height:500px;max-height:500px;padding:20px}app-search-bar[_ngcontent-%COMP%]{width:100%;margin-bottom:14px}app-search-bar.vertical-iframe-token-search[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:0}tui-loader[_ngcontent-%COMP%]{position:relative;left:-6px;width:100%}.token-list-container[_ngcontent-%COMP%]{width:100%}html.iframe-horizontal[_nghost-%COMP%]   .token-list-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-list-container[_ngcontent-%COMP%]{display:flex;align-items:center;height:90px;overflow:hidden}html.iframe-horizontal[_nghost-%COMP%]   .token-list-container__search[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-list-container__search[_ngcontent-%COMP%]{position:relative;top:-2px;width:auto;margin-right:15px;margin-bottom:0;border:2px solid #626262;border-radius:15px}html.iframe-horizontal[_nghost-%COMP%]   .token-list-container__list[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-list-container__list[_ngcontent-%COMP%]{display:flex;width:100%;height:90px;overflow:hidden}.token-list-container__list[_ngcontent-%COMP%]{height:100%}.blockchains-list-container[_ngcontent-%COMP%], .fiats-list-container[_ngcontent-%COMP%]{width:100%}@media (max-width: 599px){.assets-selector[_ngcontent-%COMP%]{height:100%}.assets-selector__content[_ngcontent-%COMP%]{height:calc(100% - 100px);max-height:calc(100vh - 117.5px)}}@media (max-width: 500px){.assets-selector[_ngcontent-%COMP%]{padding:1.5em 0 0 10px}.assets-selector__row[_ngcontent-%COMP%]{padding-right:10px}.assets-selector__content[_ngcontent-%COMP%]{left:-10px;width:calc(100% + 10px)}}",
          ],
          changeDetection: 0,
        }));
      class lt {
        constructor(t, n, i) {
          (this.dialogService = t),
            (this.injector = n),
            (this.iframeService = i);
        }
        showDialog(t, n = "") {
          const i = this.iframeService.isIframe ? "fullscreen" : "l";
          return this.dialogService.open(new z.Al(Cn, this.injector), {
            size: i,
            data: { formType: t, idPrefix: n },
          });
        }
      }
      (lt.ɵfac = function (t) {
        return new (t || lt)(
          e.ɵɵinject(Ye.RO),
          e.ɵɵinject(e.Injector),
          e.ɵɵinject(W.b)
        );
      }),
        (lt.ɵprov = e.ɵɵdefineInjectable({ token: lt, factory: lt.ɵfac }));
      var ki = l(56822);
      function Ua(r, t) {
        1 & r && e.ɵɵelement(0, "div", 10);
      }
      function Ga(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 5)(2, "div", 6)(3, "img", 7),
            e.ɵɵlistener("error", function (a) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext();
              return e.ɵɵresetView(s.onImageError(a));
            }),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(4, "div", 8),
            e.ɵɵtext(5),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(6, Ua, 1, 0, "div", 9),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵproperty(
              "src",
              n.selectedAsset.image || n.DEFAULT_TOKEN_IMAGE,
              e.ɵɵsanitizeUrl
            )("alt", n.selectedAsset.symbol),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(" ", n.selectedAsset.symbol, " "),
            e.ɵɵadvance(1),
            e.ɵɵproperty("noFrame", "vertical");
        }
      }
      function Ka(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "span", 11),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "translate"),
          e.ɵɵelementEnd()),
          2 & r &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(e.ɵɵpipeBind1(2, 1, " Select Token")));
      }
      const Za = function (r) {
        return { tokens_disabled: r };
      };
      class Ve {
        constructor(t, n, i, a, s, c, p, d, _) {
          (this.cdr = t),
            (this.assetsSelectorModalService = n),
            (this.queryParamsService = i),
            (this.tokensService = a),
            (this.gtmService = s),
            (this.swapFormService = c),
            (this.swapFormQueryService = p),
            (this.destroy$ = d),
            (this.document = _),
            (this.disabled = !1),
            (this.idPrefix = ""),
            (this.DEFAULT_TOKEN_IMAGE = on.k),
            (this.buttonHovered = null),
            (this.iframeForceDisabled = !1),
            (this.loading$ = this.swapFormQueryService.initialLoading$);
        }
        ngOnInit() {
          this.setFormValues(this.swapFormService.inputValue),
            this.swapFormService.inputValue$
              .pipe((0, O.R)(this.destroy$))
              .subscribe((t) => {
                this.setFormValues(t);
              }),
            this.queryParamsService.tokensSelectionDisabled$
              .pipe((0, O.R)(this.destroy$))
              .subscribe(([t, n]) => {
                (this.iframeForceDisabled = "from" === this.formType ? t : n),
                  this.cdr.markForCheck();
              });
        }
        setFormValues(t) {
          (this.selectedAsset =
            t["from" === this.formType ? "fromAsset" : "toToken"]),
            this.cdr.detectChanges();
        }
        openTokensSelect(t) {
          this.assetsSelectorModalService
            .showDialog(this.formType, t)
            .subscribe((n) => {
              if (n) {
                this.selectedAsset = n;
                const i = this.document.getElementById(
                    "token-amount-input-element"
                  ),
                  a = !this.swapFormService.inputValue.fromAmount?.isFinite();
                i &&
                  a &&
                  setTimeout(() => {
                    i.focus();
                  }, 0),
                  this.swapFormService.inputControl.patchValue(
                    "from" === this.formType
                      ? {
                          fromAssetType: (0, pe.$v)(n) ? n.blockchain : "fiat",
                          fromAsset: n,
                        }
                      : { toToken: n, toBlockchain: n.blockchain }
                  );
              }
            });
        }
        onImageError(t) {
          this.tokensService.onTokenImageError(t);
        }
      }
      (Ve.ɵfac = function (t) {
        return new (t || Ve)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(lt),
          e.ɵɵdirectiveInject(Be.E),
          e.ɵɵdirectiveInject(De.H),
          e.ɵɵdirectiveInject(Ot.k),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(ki.B),
          e.ɵɵdirectiveInject(k.a3, 2),
          e.ɵɵdirectiveInject(m.K0)
        );
      }),
        (Ve.ɵcmp = e.ɵɵdefineComponent({
          type: Ve,
          selectors: [["app-select-asset-button-tokens"]],
          inputs: {
            formType: "formType",
            disabled: "disabled",
            idPrefix: "idPrefix",
          },
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 6,
          vars: 13,
          consts: [
            [1, "tokens", 3, "ngClass"],
            [1, "tokens__container"],
            [
              1,
              "tokens__btn",
              3,
              "id",
              "size",
              "loading",
              "disabled",
              "appearance",
              "pseudoHovered",
              "onClick",
              "mouseleave",
            ],
            [4, "ngIf"],
            ["class", "tokens__inner-text", 4, "ngIf"],
            [1, "tokens__inner"],
            [1, "tokens__image-container"],
            ["width", "18px", "height", "18px", 3, "src", "alt", "error"],
            [1, "tokens__symbol"],
            [
              "inlineSVG",
              "assets/images/icons/arrow-down.svg",
              "class",
              "arrow",
              4,
              "noFrame",
            ],
            ["inlineSVG", "assets/images/icons/arrow-down.svg", 1, "arrow"],
            [1, "tokens__inner-text"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(
                2,
                "app-rubic-button",
                2
              ),
              e.ɵɵlistener("onClick", function () {
                return n.openTokensSelect(n.idPrefix);
              })("mouseleave", function () {
                return (n.buttonHovered = null);
              }),
              e.ɵɵpipe(3, "async"),
              e.ɵɵtemplate(4, Ga, 7, 4, "ng-container", 3),
              e.ɵɵtemplate(5, Ka, 3, 3, "span", 4),
              e.ɵɵelementEnd()()()),
              2 & t &&
                (e.ɵɵproperty(
                  "ngClass",
                  e.ɵɵpureFunction1(11, Za, n.disabled || n.iframeForceDisabled)
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty(
                  "id",
                  "from" === n.formType
                    ? n.idPrefix + "token1"
                    : n.idPrefix + "token2"
                )("size", "s")("loading", e.ɵɵpipeBind1(3, 9, n.loading$))(
                  "disabled",
                  n.disabled || n.iframeForceDisabled
                )("appearance", n.selectedAsset ? "secondary" : "primary")(
                  "pseudoHovered",
                  n.buttonHovered
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("ngIf", n.selectedAsset),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", !n.selectedAsset));
          },
          dependencies: [m.mk, m.O5, ie.j, de.a, G.d$, m.Ov, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}html.iframe-vertical   [_nghost-%COMP%]{width:100%}.tokens[_ngcontent-%COMP%]{font-size:16px}html.iframe-horizontal[_nghost-%COMP%]   .tokens[_ngcontent-%COMP%]     app-rubic-button button, html.iframe-horizontal   [_nghost-%COMP%]   .tokens[_ngcontent-%COMP%]     app-rubic-button button, html.iframe-horizontal[_nghost-%COMP%]   .tokens[_ngcontent-%COMP%]     app-rubic-button tui-wrapper, html.iframe-horizontal   [_nghost-%COMP%]   .tokens[_ngcontent-%COMP%]     app-rubic-button tui-wrapper{box-shadow:none!important}html.iframe-vertical[_nghost-%COMP%]   .tokens[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .tokens[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:100%}html.iframe-vertical[_nghost-%COMP%]   .tokens__symbol[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .tokens__symbol[_ngcontent-%COMP%], html.iframe-vertical[_nghost-%COMP%]   .tokens__inner-text[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .tokens__inner-text[_ngcontent-%COMP%]{font-size:18px}html.iframe-vertical[_nghost-%COMP%]   .tokens_disabled[_ngcontent-%COMP%]   .tokens__symbol[_ngcontent-%COMP%]:after, html.iframe-vertical   [_nghost-%COMP%]   .tokens_disabled[_ngcontent-%COMP%]   .tokens__symbol[_ngcontent-%COMP%]:after, html.iframe-vertical[_nghost-%COMP%]   .tokens_disabled[_ngcontent-%COMP%]   .tokens__inner-text[_ngcontent-%COMP%]:after, html.iframe-vertical   [_nghost-%COMP%]   .tokens_disabled[_ngcontent-%COMP%]   .tokens__inner-text[_ngcontent-%COMP%]:after{display:none}html.iframe-vertical[_nghost-%COMP%]   .tokens_disabled[_ngcontent-%COMP%]   .tokens__inner[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .tokens_disabled[_ngcontent-%COMP%]   .tokens__inner[_ngcontent-%COMP%]{opacity:.5}html.iframe-vertical[_nghost-%COMP%]   .tokens__clear[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .tokens__clear[_ngcontent-%COMP%]{display:none}html.iframe-vertical[_nghost-%COMP%]   .tokens__clear-mobile[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .tokens__clear-mobile[_ngcontent-%COMP%]{position:relative;top:2px;display:block!important}.tokens__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:25%}.tokens__inner[_ngcontent-%COMP%]{display:flex;grid-gap:8px;align-items:center;padding-bottom:1px}.tokens__inner-text[_ngcontent-%COMP%]{white-space:nowrap}.tokens__image-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:18px;height:18px}.tokens__image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:initial;max-width:18px;height:initial;max-height:18px}.tokens__symbol[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}html.iframe-vertical[_nghost-%COMP%]   .tokens__symbol[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .tokens__symbol[_ngcontent-%COMP%]{text-overflow:inherit}.tokens__clear-container[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.tokens__clear-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.tokens__container[_ngcontent-%COMP%]{display:flex;grid-gap:10px;align-items:center}.tokens__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.tokens__container[_ngcontent-%COMP%]     [tuiButton]{font-weight:500}@media (max-width: 651px){.tokens[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;border-radius:0}.tokens__clear[_ngcontent-%COMP%]{display:none}.tokens__clear-mobile[_ngcontent-%COMP%]{display:block;margin-left:10px}}.arrow[_ngcontent-%COMP%]     svg path{fill:var(--secondary-text)}",
          ],
          changeDetection: 0,
        }));
      var Te = l(95972);
      const Xa = function () {
        return { decimals: 6 };
      };
      function Qa(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span", 4),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵpipe(3, "withRound"),
            e.ɵɵpipe(4, "bigNumberFormat"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate2(
              "",
              e.ɵɵpipeBind1(2, 2, "have"),
              " ",
              e.ɵɵpipeBind3(
                3,
                4,
                e.ɵɵpipeBind1(4, 8, null == n.token ? null : n.token.amount),
                "fixedValue",
                e.ɵɵpureFunction0(10, Xa)
              ),
              " "
            );
        }
      }
      function Ja(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 5),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.maxButtonClick());
            }),
            e.ɵɵtext(1, " MAX "),
            e.ɵɵelementEnd();
        }
      }
      function qa(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1),
            e.ɵɵtemplate(1, Qa, 5, 11, "span", 2),
            e.ɵɵtemplate(2, Ja, 2, 0, "button", 3),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "balance" !== n.hide),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "maxButton" !== n.hide);
        }
      }
      class Et {
        constructor() {
          this.maxButtonClickEvent = new e.EventEmitter();
        }
        maxButtonClick() {
          this.maxButtonClickEvent.emit();
        }
      }
      (Et.ɵfac = function (t) {
        return new (t || Et)();
      }),
        (Et.ɵcmp = e.ɵɵdefineComponent({
          type: Et,
          selectors: [["app-user-balance-container"]],
          inputs: { token: "token", hide: "hide" },
          outputs: { maxButtonClickEvent: "maxButtonClickEvent" },
          decls: 1,
          vars: 1,
          consts: [
            ["class", "user-balance-container", 4, "ngIf"],
            [1, "user-balance-container"],
            ["class", "user-balance-container__balance", 4, "ngIf"],
            [
              "class",
              "user-balance-container__max-button",
              3,
              "click",
              4,
              "ngIf",
            ],
            [1, "user-balance-container__balance"],
            [1, "user-balance-container__max-button", 3, "click"],
          ],
          template: function (t, n) {
            1 & t && e.ɵɵtemplate(0, qa, 3, 2, "div", 0),
              2 & t &&
                e.ɵɵproperty(
                  "ngIf",
                  null == n.token ? null : n.token.amount.gt(0)
                );
          },
          dependencies: [m.O5, Ce.N, E.X$, Te.f],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.user-balance-container[_ngcontent-%COMP%]{margin-top:10px}body.hide-unused-ui[_nghost-%COMP%]   .user-balance-container[_ngcontent-%COMP%], body.hide-unused-ui   [_nghost-%COMP%]   .user-balance-container[_ngcontent-%COMP%]{margin-top:0;margin-right:10px;white-space:nowrap}html.iframe[_nghost-%COMP%]   .user-balance-container[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .user-balance-container[_ngcontent-%COMP%]{margin-top:0}.user-balance-container__balance[_ngcontent-%COMP%]{margin-right:10px;color:var(--secondary-text);font-size:14px;line-height:17px}html.iframe[_nghost-%COMP%]   .user-balance-container__balance[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .user-balance-container__balance[_ngcontent-%COMP%]{display:block;height:27px;padding:5px 10px;color:var(--tui-text-02);font-size:12px;line-height:17px;background-color:var(--primary-background);border-radius:10px}html.iframe:not(.dark)[_nghost-%COMP%]   .user-balance-container__balance[_ngcontent-%COMP%], html.iframe:not(.dark)   [_nghost-%COMP%]   .user-balance-container__balance[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}.user-balance-container__max-button[_ngcontent-%COMP%]{padding:0;color:var(--primary-color);font-size:14px;line-height:17px;letter-spacing:.1em;text-transform:uppercase;background-color:transparent}@media (max-width: 420px){.user-balance-container__max-button[_ngcontent-%COMP%]{font-size:18px}}.user-balance-container__max-button_disabled[_ngcontent-%COMP%]{color:var(--secondary-text);cursor:default}",
          ],
          changeDetection: 0,
        }));
      var wi = l(58436),
        es = l(84581);
      class Ae {
        constructor(t, n) {
          (this.swapFormService = t),
            (this.limitOrdersService = n),
            (this._rate$ = new w.X({ value: new M.Z(0), percentDiff: 0 })),
            (this.rate$ = this._rate$.asObservable()),
            (this.decimalPoints = 6),
            this.subscribeOnTokensChange(),
            this.subscribeOnAmountsChange();
        }
        get marketRate() {
          return this._rate$.value.value;
        }
        subscribeOnTokensChange() {
          var t = this;
          this.swapFormService.inputValueDistinct$
            .pipe(
              (0, le.x)(
                (n, i) =>
                  (0, wi.l)(n.fromAsset, i.fromAsset) &&
                  (0, J.tb)(n.toToken, i.toToken)
              )
            )
            .subscribe(
              (function () {
                var n = (0, T.Z)(function* ({ fromAsset: i, toToken: a }) {
                  if ((0, pe.$v)(i) && a) {
                    const s =
                      i.blockchain === a.blockchain
                        ? (yield t.limitOrdersService.getMarketRate(i, a)).dp(
                            t.decimalPoints
                          )
                        : new M.Z(NaN);
                    t._rate$.next({
                      value: s,
                      percentDiff: t.getPercentDiff(s),
                    });
                  } else t._rate$.next({ value: new M.Z(0), percentDiff: 0 });
                });
                return function (i) {
                  return n.apply(this, arguments);
                };
              })()
            );
        }
        subscribeOnAmountsChange() {
          (0, $.a)([
            this.swapFormService.fromAmount$,
            this.swapFormService.toAmount$,
          ]).subscribe(() => {
            const t = this.marketRate;
            this._rate$.next({ value: t, percentDiff: this.getPercentDiff(t) });
          });
        }
        getPercentDiff(t) {
          if (!t.isFinite() || t.eq(0)) return 0;
          const { fromAmount: n } = this.swapFormService.inputValue,
            { toAmount: i } = this.swapFormService.outputValue,
            a = n?.isFinite() && i?.isFinite() ? i.div(n) : null;
          return a?.isFinite()
            ? Math.min(
                a.minus(t).div(t).multipliedBy(100).dp(2).toNumber(),
                999
              )
            : 0;
        }
        setRateToMarket() {
          const { fromAmount: t } = this.swapFormService.inputValue,
            { toAmount: n } = this.swapFormService.outputValue;
          t?.isFinite() || n?.isFinite()
            ? t?.isFinite()
              ? this.swapFormService.outputControl.patchValue({
                  toAmount: t.multipliedBy(this.marketRate),
                })
              : this.swapFormService.inputControl.patchValue({
                  fromAmount: n.dividedBy(this.marketRate).dp(6),
                })
            : (this.swapFormService.inputControl.patchValue({
                fromAmount: new M.Z(1),
              }),
              this.swapFormService.outputControl.patchValue({
                toAmount: new M.Z(this.marketRate),
              }));
        }
      }
      (Ae.ɵfac = function (t) {
        return new (t || Ae)(e.ɵɵinject(A.q), e.ɵɵinject(es.Z));
      }),
        (Ae.ɵprov = e.ɵɵdefineInjectable({ token: Ae, factory: Ae.ɵfac }));
      class vn {
        constructor(t) {
          this.orderRateService = t;
        }
        onClick() {
          this.orderRateService.setRateToMarket();
        }
      }
      (vn.ɵfac = function (t) {
        return new (t || vn)(e.ɵɵdirectiveInject(Ae));
      }),
        (vn.ɵcmp = e.ɵɵdefineComponent({
          type: vn,
          selectors: [["app-set-to-market-button"]],
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 2,
          vars: 0,
          consts: [[1, "button", 3, "click"]],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "button", 0),
              e.ɵɵlistener("click", function () {
                return n.onClick();
              }),
              e.ɵɵtext(1, "Set to market"),
              e.ɵɵelementEnd());
          },
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.button[_ngcontent-%COMP%]{color:var(--primary-color);font-size:14px;line-height:17px;letter-spacing:.1em}",
          ],
          changeDetection: 0,
        }));
      const ts = ["tokenAmount"];
      function ns(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-user-balance-container", 9),
            e.ɵɵlistener("maxButtonClickEvent", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.onUserBalanceMaxButtonClick());
            }),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵproperty("token", n.selectedToken);
        }
      }
      function rs(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-user-balance-container", 10),
            e.ɵɵlistener("maxButtonClickEvent", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.onUserBalanceMaxButtonClick());
            }),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵproperty("token", n.selectedToken);
        }
      }
      function is(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtemplate(1, ns, 1, 1, "app-user-balance-container", 7),
          e.ɵɵtemplate(2, rs, 1, 1, "app-user-balance-container", 8),
          e.ɵɵelementContainerEnd()),
          2 & r && (e.ɵɵadvance(2), e.ɵɵproperty("onlyFrame", "horizontal"));
      }
      function os(r, t) {
        1 & r && e.ɵɵelement(0, "app-set-to-market-button");
      }
      function as(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, os, 1, 0, "app-set-to-market-button", 3),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", n.isWithTokens);
        }
      }
      function ss(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "input", 11, 12),
            e.ɵɵlistener("amountChange", function (a) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext();
              return e.ɵɵresetView(s.onAmountChange(a));
            }),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("placeholder", e.ɵɵpipeBind1(2, 3, n.placeholder$))(
            "formControl",
            n.amount
          )(
            "decimals",
            (null == n.selectedToken ? null : n.selectedToken.decimals) ||
              n.DEFAULT_DECIMALS
          );
        }
      }
      function cs(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div", 13),
          e.ɵɵtext(1, "Please, switch to On-Chain pair"),
          e.ɵɵelementEnd());
      }
      function ls(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 15),
            e.ɵɵelement(1, "app-user-balance-container", 16),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵproperty("token", n.selectedToken);
        }
      }
      function ps(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtemplate(1, ls, 2, 1, "div", 14),
          e.ɵɵelementContainerEnd()),
          2 & r && (e.ɵɵadvance(1), e.ɵɵproperty("onlyFrame", "horizontal"));
      }
      const ds = function (r) {
        return { "token-amount-input-container__token-button_attractive": r };
      };
      class Mt {
        constructor(t, n, i, a, s, c) {
          (this.swapFormService = t),
            (this.swapTypeService = n),
            (this.translateService = i),
            (this.iframeService = a),
            (this.cdr = s),
            (this.destroy$ = c),
            (this.formType = "from"),
            (this.amountUpdated = new e.EventEmitter()),
            (this.placeholder$ = this.translateService.get(
              "Enter An Amount"
            )),
            (this.DEFAULT_DECIMALS = 18),
            (this.amount = new h.FormControl("")),
            (this.showLimitOrderOnChainError$ = (0, $.a)([
              this.swapTypeService.swapMode$,
              this.swapFormService.inputValue$,
            ]).pipe(
              (0, v.U)(([p, d]) => {
                const { fromAssetType: _, toBlockchain: f } = d;
                return (
                  p === b.V.LIMIT_ORDER && "to" === this.formType && _ !== f
                );
              })
            ));
        }
        get formattedAmount() {
          return this.amount?.value.split(",").join("");
        }
        get isWithTokens() {
          const { fromAsset: t, toToken: n } = this.swapFormService.inputValue;
          return t && Boolean(n);
        }
        ngOnInit() {
          "from" === this.formType
            ? this.swapFormService.inputValue$
                .pipe((0, O.R)(this.destroy$))
                .subscribe((t) => {
                  this.updateFormValues(t.fromAsset, t.fromAmount);
                })
            : (0, $.a)([
                this.swapFormService.toToken$,
                this.swapFormService.toAmount$,
              ])
                .pipe((0, O.R)(this.destroy$))
                .subscribe(([t, n]) => {
                  this.updateFormValues(t, n);
                });
        }
        updateFormValues(t, n) {
          !n || n.isNaN()
            ? this.amount.setValue("")
            : n.eq(this.formattedAmount) || this.amount.setValue(n.toFixed()),
            (this.selectedAsset = t),
            (this.selectedToken = (0, pe.$v)(t) ? t : null),
            this.cdr.markForCheck();
        }
        onUserBalanceMaxButtonClick() {
          this.amount.setValue(this.selectedToken.amount.toFixed());
        }
        onAmountChange(t) {
          this.amount.setValue(t, { emitViewToModelChange: !1 }),
            this.updateInputValue();
        }
        updateInputValue() {
          const t =
              "from" === this.formType
                ? this.swapFormService.inputValue.fromAmount
                : this.swapFormService.outputValue.toAmount,
            n = "from" === this.formType ? "fromAmount" : "toAmount",
            i = "from" === this.formType ? "inputControl" : "outputControl";
          ((t && !t.isNaN()) || this.formattedAmount) &&
            !t?.eq(this.formattedAmount) &&
            (this.swapFormService[i].patchValue({
              [n]: new M.Z(this.formattedAmount),
            }),
            this.amountUpdated.emit());
        }
      }
      function Lr(r) {
        return { icon: hi.v[r], label: We.h[r] };
      }
      (Mt.ɵfac = function (t) {
        return new (t || Mt)(
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(ce.H),
          e.ɵɵdirectiveInject(E.sK),
          e.ɵɵdirectiveInject(W.b),
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(k.a3)
        );
      }),
        (Mt.ɵcmp = e.ɵɵdefineComponent({
          type: Mt,
          selectors: [["app-token-amount-input"]],
          viewQuery: function (t, n) {
            if ((1 & t && e.ɵɵviewQuery(ts, 5), 2 & t)) {
              let i;
              e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                (n.tokenAmountInput = i.first);
            }
          },
          inputs: { formType: "formType" },
          outputs: { amountUpdated: "amountUpdated" },
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 12,
          vars: 11,
          consts: [
            [1, "token-amount-input-container"],
            [1, "token-amount-input-container__wrapper"],
            [
              1,
              "token-amount-input-container__token-button",
              3,
              "ngClass",
              "formType",
            ],
            [4, "ngIf"],
            [1, "token-amount-input-container__input-label"],
            [
              "autocomplete",
              "off",
              "class",
              "token-amount-input-container__input",
              "name",
              "token-amount",
              "appTokenAmount",
              "",
              "inputmode",
              "decimal",
              "id",
              "token-amount-input-element",
              3,
              "placeholder",
              "formControl",
              "decimals",
              "amountChange",
              4,
              "ngIf",
              "ngIfElse",
            ],
            ["limitOrderOnChainError", ""],
            [3, "token", "maxButtonClickEvent", 4, "noFrame"],
            [
              "hide",
              "balance",
              3,
              "token",
              "maxButtonClickEvent",
              4,
              "onlyFrame",
            ],
            [3, "token", "maxButtonClickEvent"],
            ["hide", "balance", 3, "token", "maxButtonClickEvent"],
            [
              "autocomplete",
              "off",
              "name",
              "token-amount",
              "appTokenAmount",
              "",
              "inputmode",
              "decimal",
              "id",
              "token-amount-input-element",
              1,
              "token-amount-input-container__input",
              3,
              "placeholder",
              "formControl",
              "decimals",
              "amountChange",
            ],
            ["tokenAmount", ""],
            [1, "error-text"],
            [
              "class",
              "token-amount-input-container__iframe-info-cards",
              4,
              "onlyFrame",
            ],
            [1, "token-amount-input-container__iframe-info-cards"],
            ["hide", "maxButton", 3, "token"],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div", 1),
                e.ɵɵelement(2, "app-select-asset-button-tokens", 2),
                e.ɵɵtemplate(3, is, 3, 1, "ng-container", 3),
                e.ɵɵtemplate(4, as, 2, 1, "ng-container", 3),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(5, "div", 1)(6, "label", 4),
                e.ɵɵtemplate(7, ss, 3, 5, "input", 5),
                e.ɵɵpipe(8, "async"),
                e.ɵɵtemplate(
                  9,
                  cs,
                  2,
                  0,
                  "ng-template",
                  null,
                  6,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(11, ps, 2, 1, "ng-container", 3),
                e.ɵɵelementEnd()()),
              2 & t)
            ) {
              const i = e.ɵɵreference(10);
              e.ɵɵadvance(2),
                e.ɵɵproperty(
                  "ngClass",
                  e.ɵɵpureFunction1(9, ds, !n.selectedAsset)
                )("formType", n.formType),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", "from" === n.formType),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", "to" === n.formType),
                e.ɵɵadvance(3),
                e.ɵɵproperty(
                  "ngIf",
                  !1 === e.ɵɵpipeBind1(8, 7, n.showLimitOrderOnChainError$)
                )("ngIfElse", i),
                e.ɵɵadvance(4),
                e.ɵɵproperty("ngIf", "from" === n.formType);
            }
          },
          dependencies: [
            m.mk,
            m.O5,
            Pt,
            de.a,
            Fe.T,
            h.DefaultValueAccessor,
            h.NgControlStatus,
            h.FormControlDirective,
            Ve,
            Et,
            vn,
            m.Ov,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}@keyframes _ngcontent-%COMP%_jump{0%{transform:scale(1)}to{transform:scale(1.07)}}.token-amount-input-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;min-height:85px;padding-bottom:20px}html.iframe-horizontal[_nghost-%COMP%]   .token-amount-input-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-amount-input-container[_ngcontent-%COMP%]{position:relative;width:363px;height:50px;min-height:0;padding:0 7px 0 16px;background:var(--primary-background);border-radius:10px}html.iframe:not(.dark)[_nghost-%COMP%]   .token-amount-input-container[_ngcontent-%COMP%], html.iframe:not(.dark)   [_nghost-%COMP%]   .token-amount-input-container[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}.token-amount-input-container__token-button_attractive[_ngcontent-%COMP%]{animation:.4s _ngcontent-%COMP%_jump ease 60s infinite alternate}.token-amount-input-container__wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;max-width:300px;height:100%}body.hide-unused-ui[_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%], body.hide-unused-ui   [_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:initial;max-width:300px;height:100%}html.iframe-horizontal[_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]{justify-content:center}html.iframe-horizontal[_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]:first-child, html.iframe-horizontal   [_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]:first-child{flex-direction:row-reverse;order:2}html.iframe-horizontal[_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]:first-child   app-select-asset-button-tokens[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]:first-child   app-select-asset-button-tokens[_ngcontent-%COMP%]{display:flex;align-items:center}html.iframe-horizontal[_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]:first-child   app-user-balance-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]:first-child   app-user-balance-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:10px;margin-left:5px}html.iframe-horizontal[_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]:nth-child(2), html.iframe-horizontal   [_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]:nth-child(2){order:1}.token-amount-input-container__wrapper[_ngcontent-%COMP%]   app-set-to-market-button[_ngcontent-%COMP%]{display:block;margin-top:10px}.token-amount-input-container__input-label[_ngcontent-%COMP%]{width:100%;height:35px;margin-bottom:5px}.token-amount-input-container__input-label[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{letter-spacing:.6px}.token-amount-input-container__input[_ngcontent-%COMP%]{width:100%;height:100%;padding:0;color:var(--primary-text);font-weight:400;font-size:22px;letter-spacing:.1em;text-align:right;background-color:transparent;border:none}html.iframe-horizontal[_nghost-%COMP%]   .token-amount-input-container__input[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .token-amount-input-container__input[_ngcontent-%COMP%]{padding-left:0;font-size:20px;text-align:left}.token-amount-input-container__iframe-info-cards[_ngcontent-%COMP%]{position:absolute;bottom:-33px;left:0;display:flex;align-items:center}.token-amount-input-container__iframe-info-cards[_ngcontent-%COMP%]   app-usd-price-container[_ngcontent-%COMP%]{margin-right:5px}@media (max-width: 651px){.token-amount-input-container[_ngcontent-%COMP%]{position:relative;height:auto;margin:0;padding:40px 20px 20px}}@media (max-width: 420px){.token-amount-input-container[_ngcontent-%COMP%]{flex-direction:column;gap:10px;align-items:flex-start}.token-amount-input-container__input[_ngcontent-%COMP%]{padding-left:0;text-align:left}body.hide-unused-ui[_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%], body.hide-unused-ui   [_nghost-%COMP%]   .token-amount-input-container__wrapper[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}.error-text[_ngcontent-%COMP%]{font-size:18px;line-height:35px}",
          ],
          changeDetection: 0,
        }));
      class Qe {
        constructor() {}
        set assetType(t) {
          this.assetTypeItem =
            "fiat" === t
              ? { icon: "assets/images/icons/fiat-selector.svg", label: "fiat" }
              : Lr(t);
        }
      }
      function ms(r, t) {
        if (
          (1 & r && e.ɵɵelement(0, "app-iframe-asset-type-indicator", 9), 2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("assetType", n.selectedAssetType);
        }
      }
      (Qe.ɵfac = function (t) {
        return new (t || Qe)();
      }),
        (Qe.ɵcmp = e.ɵɵdefineComponent({
          type: Qe,
          selectors: [["app-iframe-asset-type-indicator"]],
          inputs: { assetType: "assetType" },
          decls: 2,
          vars: 2,
          consts: [
            [1, "asset-type-container"],
            [3, "src", "alt"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0),
              e.ɵɵelement(1, "img", 1),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "src",
                  n.assetTypeItem.icon,
                  e.ɵɵsanitizeUrl
                )("alt", n.assetTypeItem.label));
          },
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{display:block}.asset-type-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:50px;height:50px;background-color:var(--primary-background);border-radius:10px}html.iframe:not(.dark)[_nghost-%COMP%]   .asset-type-container[_ngcontent-%COMP%], html.iframe:not(.dark)   [_nghost-%COMP%]   .asset-type-container[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}.asset-type-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:24px;max-height:24px}",
          ],
          changeDetection: 0,
        }));
      class bn {
        constructor(t, n, i, a) {
          (this.swapFormService = t),
            (this.translateService = n),
            (this.cdr = i),
            (this.destroy$ = a),
            (this.placeholder$ = this.translateService.get(
              "No Entered Amount"
            )),
            (this.DEFAULT_DECIMALS = 18),
            (this.amount = new h.FormControl(""));
        }
        get formattedAmount() {
          return this.amount.value.split(",").join("");
        }
        ngOnInit() {
          this.swapFormService.inputValue$
            .pipe((0, O.R)(this.destroy$))
            .subscribe((t) => {
              const { fromAmount: n, fromAsset: i } = t;
              !n || n.isNaN()
                ? this.amount.setValue("")
                : n.eq(this.formattedAmount) ||
                  this.amount.setValue(n.toFixed()),
                (this.selectedAssetType = i
                  ? (0, pe.$v)(i)
                    ? i.blockchain
                    : "fiat"
                  : null),
                (this.selectedToken = (0, pe.$v)(i) ? i : null);
            });
        }
        onUserBalanceMaxButtonClick() {
          this.amount.setValue(this.selectedToken.amount.toFixed());
        }
        onAmountChange(t) {
          this.amount.setValue(t, { emitViewToModelChange: !1 }),
            this.updateInputValue();
        }
        updateInputValue() {
          const { fromAmount: t } = this.swapFormService.inputValue;
          ((t && !t.isNaN()) || this.formattedAmount) &&
            !t?.eq(this.formattedAmount) &&
            this.swapFormService.inputControl.patchValue({
              fromAmount: new M.Z(this.formattedAmount),
            });
        }
      }
      (bn.ɵfac = function (t) {
        return new (t || bn)(
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(E.sK),
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (bn.ɵcmp = e.ɵɵdefineComponent({
          type: bn,
          selectors: [["app-vertical-iframe-token-amount-input"]],
          decls: 10,
          vars: 8,
          consts: [
            [1, "vertical-iframe-input"],
            ["formType", "from", 1, "vertical-iframe-input__row"],
            [1, "vertical-iframe-input__row", "blockchain-and-amount-input"],
            [3, "assetType", 4, "ngIf"],
            [1, "blockchain-and-amount-input__label"],
            [
              "autocomplete",
              "off",
              "name",
              "token-amount",
              "appTokenAmount",
              "",
              "inputmode",
              "decimal",
              1,
              "blockchain-and-amount-input__input",
              3,
              "placeholder",
              "formControl",
              "decimals",
              "amountChange",
            ],
            ["hide", "balance", 3, "token", "maxButtonClickEvent"],
            [1, "vertical-iframe-input__row", "cards-container"],
            ["hide", "maxButton", 3, "token"],
            [3, "assetType"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "section", 0),
              e.ɵɵelement(1, "app-select-asset-button-tokens", 1),
              e.ɵɵelementStart(2, "div", 2),
              e.ɵɵtemplate(3, ms, 1, 1, "app-iframe-asset-type-indicator", 3),
              e.ɵɵelementStart(4, "label", 4)(5, "input", 5),
              e.ɵɵlistener("amountChange", function (a) {
                return n.onAmountChange(a);
              }),
              e.ɵɵpipe(6, "async"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(7, "app-user-balance-container", 6),
              e.ɵɵlistener("maxButtonClickEvent", function () {
                return n.onUserBalanceMaxButtonClick();
              }),
              e.ɵɵelementEnd()()(),
              e.ɵɵelementStart(8, "div", 7),
              e.ɵɵelement(9, "app-user-balance-container", 8),
              e.ɵɵelementEnd()()),
              2 & t &&
                (e.ɵɵadvance(3),
                e.ɵɵproperty("ngIf", n.selectedAssetType),
                e.ɵɵadvance(2),
                e.ɵɵproperty(
                  "placeholder",
                  e.ɵɵpipeBind1(6, 6, n.placeholder$)
                )("formControl", n.amount)(
                  "decimals",
                  (null == n.selectedToken ? null : n.selectedToken.decimals) ||
                    n.DEFAULT_DECIMALS
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("token", n.selectedToken),
                e.ɵɵadvance(2),
                e.ɵɵproperty("token", n.selectedToken));
          },
          dependencies: [
            m.O5,
            Pt,
            Qe,
            h.DefaultValueAccessor,
            h.NgControlStatus,
            h.FormControlDirective,
            Ve,
            Et,
            m.Ov,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{width:100%}.vertical-iframe-input[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;min-height:132px}.vertical-iframe-input__row[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.vertical-iframe-input__row[_ngcontent-%COMP%]:not(:last-child){margin-bottom:6px}.vertical-iframe-input[_ngcontent-%COMP%] >   app-select-asset-button-tokens button tui-wrapper{box-shadow:none!important}.blockchain-and-amount-input[_ngcontent-%COMP%]{display:flex}.blockchain-and-amount-input[_ngcontent-%COMP%]   app-iframe-asset-type-indicator[_ngcontent-%COMP%]{flex:0;margin-right:15px}.blockchain-and-amount-input__label[_ngcontent-%COMP%]{position:relative;flex:1;width:100%;height:50px;padding-left:16px;background-color:var(--primary-background);border-radius:10px}html.iframe:not(.dark)[_nghost-%COMP%]   .blockchain-and-amount-input__label[_ngcontent-%COMP%], html.iframe:not(.dark)   [_nghost-%COMP%]   .blockchain-and-amount-input__label[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}.blockchain-and-amount-input__input[_ngcontent-%COMP%]{width:100%;height:100%;padding:0 60px 0 0;color:var(--primary-text);font-weight:400;font-size:20px;letter-spacing:.1em;text-align:left;background-color:transparent;border:none}html.iframe[_nghost-%COMP%]   .blockchain-and-amount-input__input__input[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .blockchain-and-amount-input__input__input[_ngcontent-%COMP%]{padding:0 16px 0 0}.blockchain-and-amount-input[_ngcontent-%COMP%]   app-user-balance-container[_ngcontent-%COMP%]{position:absolute;top:15px;right:15px}.cards-container[_ngcontent-%COMP%]{width:auto}.cards-container[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-right:10px}",
          ],
          changeDetection: 0,
        }));
      var _s = l(50774),
        us = l(58883),
        xn = l(17445),
        Hr = l(94086),
        It = l(11610),
        Nt = l(78224),
        $r = l(90073);
      class pt {
        static getCrossChainSwapParams(t) {
          return {
            fromAddress: t.from.address,
            fromSymbol: t.from.symbol,
            fromAmount: t.from.tokenAmount,
            fromPrice: t.from.price.toNumber(),
            fromDecimals: t.from.decimals,
            toAddress: t.to.address,
            toSymbol: t.to.symbol,
            toAmount: t.to.tokenAmount,
            toPrice: t.to.price.toNumber(),
            toDecimals: t.to.decimals,
            fromBlockchain: t.from.blockchain,
            toBlockchain: t.to.blockchain,
            type: t.type,
          };
        }
        static getItSwapParams(t) {
          return t instanceof o.OnChainTrade
            ? {
                fromAddress: t.from.address,
                fromSymbol: t.from.symbol,
                fromAmount: t.from.tokenAmount,
                fromPrice: t.from.price.toNumber(),
                fromDecimals: t.from.decimals,
                toAddress: t.to.address,
                toSymbol: t.to.symbol,
                toAmount: t.to.tokenAmount,
                toPrice: t.to.price.toNumber(),
                toDecimals: t.to.decimals,
                blockchain: t.from.blockchain,
                type: t.type,
              }
            : {
                fromAddress: t.from.token.address,
                fromSymbol: t.from.token.symbol,
                fromAmount: t.from.amount,
                fromPrice: t.from.token.price,
                fromDecimals: t.from.token.decimals,
                toAddress: t.to.token.address,
                toSymbol: t.to.token.symbol,
                toAmount: t.to.amount,
                toPrice: t.to.token.price,
                toDecimals: t.to.token.decimals,
                blockchain: t.blockchain,
                type: o.ON_CHAIN_TRADE_TYPE.WRAPPED,
              };
        }
      }
      const hs = {
          [o.ON_CHAIN_TRADE_TYPE.ACRYPTOS]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.ALDRIN_EXCHANGE]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.ANNEX]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.APE_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.ARTH_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.AURORA_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.BABY_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.BALANCER]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.BI_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.CREMA_FINANCE]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.CROPPER_FINANCE]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.CROW_FI]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.CRO_DEX]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.CURVE]: "Curve",
          [o.ON_CHAIN_TRADE_TYPE.DEFI_PLAZA]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.DEFI_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.DFYN]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.DYSTOPIA]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.JET_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.JUPITER]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.KYBER_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.LUA_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.MAVERICK]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.MDEX]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.MESH_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.MM_FINANCE]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.MOJITO_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.ONE_MOON]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.ONE_SOL]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.ORCA_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.OSMOSIS_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.POLYDEX]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.SABER_STABLE_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.SAROS_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.SERUM]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.SHIBA_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.SMOOTHY]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.SPL_TOKEN_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.VOLTAGE_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.VVS_FINANCE]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.WAULT_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.WOO_FI]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.ZIP_SWAP]: "unknown",
          [o.ON_CHAIN_TRADE_TYPE.ALGEBRA]: "algebra",
          [o.ON_CHAIN_TRADE_TYPE.APE_SWAP]: "apeswap",
          [o.ON_CHAIN_TRADE_TYPE.JOE]: "joe",
          [o.ON_CHAIN_TRADE_TYPE.ONE_INCH]: "oneinch",
          [o.ON_CHAIN_TRADE_TYPE.PANCAKE_SWAP]: "pancakeswap",
          [o.ON_CHAIN_TRADE_TYPE.PANGOLIN]: "pangolin",
          [o.ON_CHAIN_TRADE_TYPE.QUICK_SWAP]: "quickswap",
          [o.ON_CHAIN_TRADE_TYPE.QUICK_SWAP_V3]: "quickswap3",
          [o.ON_CHAIN_TRADE_TYPE.RAYDIUM]: "raydium",
          [o.ON_CHAIN_TRADE_TYPE.SOLAR_BEAM]: "solarbeam",
          [o.ON_CHAIN_TRADE_TYPE.SOUL_SWAP]: "soulswap",
          [o.ON_CHAIN_TRADE_TYPE.SPIRIT_SWAP]: "spiritswap",
          [o.ON_CHAIN_TRADE_TYPE.SPOOKY_SWAP]: "spookyswap",
          [o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP]: "sushiswap",
          [o.ON_CHAIN_TRADE_TYPE.TRISOLARIS]: "trisolaris",
          [o.ON_CHAIN_TRADE_TYPE.UNISWAP_V2]: "uniswap",
          [o.ON_CHAIN_TRADE_TYPE.UNI_SWAP_V3]: "uniswap3",
          [o.ON_CHAIN_TRADE_TYPE.VERSE]: "verse",
          [o.ON_CHAIN_TRADE_TYPE.VIPER_SWAP]: "viper",
          [o.ON_CHAIN_TRADE_TYPE.WANNA_SWAP]: "wannaswap",
          [o.ON_CHAIN_TRADE_TYPE.WRAPPED]: "wrapped",
          [o.ON_CHAIN_TRADE_TYPE.ZAPPY]: "zappy",
          [o.ON_CHAIN_TRADE_TYPE.ZRX]: "zerox",
          [o.ON_CHAIN_TRADE_TYPE.OOLONG_SWAP]: "oolong",
          [o.ON_CHAIN_TRADE_TYPE.JUPITER_SWAP]: "jupiter",
          [o.ON_CHAIN_TRADE_TYPE.PHOTON_SWAP]: "photon",
          [o.ON_CHAIN_TRADE_TYPE.OMNIDEX]: "omnidex",
          [o.ON_CHAIN_TRADE_TYPE.YUZU_SWAP]: "yuzuswap",
          [o.ON_CHAIN_TRADE_TYPE.NET_SWAP]: "netswap",
          [o.ON_CHAIN_TRADE_TYPE.ELK]: "elk",
          [o.ON_CHAIN_TRADE_TYPE.SURFDEX]: "surfdex",
          [o.ON_CHAIN_TRADE_TYPE.TRADER]: "defikingdoms",
          [o.ON_CHAIN_TRADE_TYPE.CLAIM_SWAP]: "claimswap",
          [o.ON_CHAIN_TRADE_TYPE.WAGYU_SWAP]: "wagyuswap",
          [o.ON_CHAIN_TRADE_TYPE.ASTRO_SWAP]: "astroswap",
          [o.ON_CHAIN_TRADE_TYPE.PEGASYS]: "pegasys",
          [o.ON_CHAIN_TRADE_TYPE.CRONA_SWAP]: "lifi",
          [o.ON_CHAIN_TRADE_TYPE.BEAM_SWAP]: "lifi",
          [o.ON_CHAIN_TRADE_TYPE.HONEY_SWAP]: "lifi",
          [o.ON_CHAIN_TRADE_TYPE.DODO]: "lifi",
          [o.ON_CHAIN_TRADE_TYPE.J_SWAP]: "lifi",
          [o.ON_CHAIN_TRADE_TYPE.OPEN_OCEAN]: "lifi",
          [o.ON_CHAIN_TRADE_TYPE.REF_FINANCE]: "lifi",
          [o.ON_CHAIN_TRADE_TYPE.PARA_SWAP]: "lifi",
          [o.ON_CHAIN_TRADE_TYPE.STELLA_SWAP]: "lifi",
          [o.ON_CHAIN_TRADE_TYPE.UBE_SWAP]: "lifi",
          [o.ON_CHAIN_TRADE_TYPE.REN_BTC]: "renbtc",
          [o.ON_CHAIN_TRADE_TYPE.BRIDGERS]: "bridgers",
        },
        Ai = "ethLike";
      class Rt {
        constructor(t, n, i) {
          (this.httpService = t),
            (this.walletConnectorService = n),
            (this.authService = i);
        }
        notifyInstantTradesBot(t) {
          const {
              fromAmount: n,
              toAmount: i,
              fromSymbol: a,
              toSymbol: s,
              fromPrice: c,
              blockchain: p,
              type: d,
            } = pt.getItSwapParams(t.trade),
            { txHash: _, walletAddress: f } = t,
            x = {
              fromAmount: n.toNumber(),
              toAmount: i.toNumber(),
              fromSymbol: a,
              toSymbol: s,
              price: c,
              txHash: _,
              walletAddress: f,
              blockchain: p,
              provider: d,
            };
          return this.httpService.post("bot/instant_trade", x).toPromise();
        }
        createTrade(t, n, i, a, s) {
          const {
              blockchain: c,
              fromAmount: p,
              fromAddress: d,
              fromDecimals: _,
              toAmount: f,
              toDecimals: x,
              toAddress: P,
            } = pt.getItSwapParams(i),
            S = {
              blockchain: c,
              fromAddress: d,
              fromAmount: o.Web3Pure.toWei(p, _),
              toAddress: P,
              toAmount: o.Web3Pure.toWei(f, x),
            };
          let D = hs[n];
          i instanceof o.LifiTrade && (D = "lifi");
          const Q = {
              network: It.d[S.blockchain],
              provider: D,
              from_token: S.fromAddress,
              to_token: S.toAddress,
              from_amount: S.fromAmount,
              to_amount: S.toAmount,
              user: this.authService.userAddress,
              fee: a,
              promocode: s,
              hash: t,
            },
            Z = `instant_trades/${Ai.toLowerCase()}`;
          return this.httpService.post(Z, Q).pipe((0, Hr.g)(1e3));
        }
        patchTrade(t, n) {
          const i = { success: n, hash: t, user: this.authService.userAddress },
            a = `instant_trades/${Ai.toLowerCase()}`;
          return this.httpService.patch(a, i);
        }
        saveNotWhitelistedProvider(t, n, i) {
          return this.httpService.post("info/new_provider", {
            network: It.d[n],
            title: i,
            address:
              t.providerRouter +
              (t.providerGateway ? `_${t.providerGateway}` : ""),
            cause: t.cause,
          });
        }
      }
      (Rt.ɵfac = function (t) {
        return new (t || Rt)(
          e.ɵɵinject($r.O),
          e.ɵɵinject(Nt.j),
          e.ɵɵinject(j.e)
        );
      }),
        (Rt.ɵprov = e.ɵɵdefineInjectable({
          token: Rt,
          factory: Rt.ɵfac,
          providedIn: "root",
        }));
      const fs = [
          {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "guy", type: "address" },
              { name: "wad", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "src", type: "address" },
              { name: "dst", type: "address" },
              { name: "wad", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [{ name: "wad", type: "uint256" }],
            name: "withdraw",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{ name: "", type: "uint8" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [{ name: "", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{ name: "", type: "string" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: !1,
            inputs: [
              { name: "dst", type: "address" },
              { name: "wad", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ name: "", type: "bool" }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: !1,
            inputs: [],
            name: "deposit",
            outputs: [],
            payable: !0,
            stateMutability: "payable",
            type: "function",
          },
          {
            constant: !0,
            inputs: [
              { name: "", type: "address" },
              { name: "", type: "address" },
            ],
            name: "allowance",
            outputs: [{ name: "", type: "uint256" }],
            payable: !1,
            stateMutability: "view",
            type: "function",
          },
          { payable: !0, stateMutability: "payable", type: "fallback" },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "src", type: "address" },
              { indexed: !0, name: "guy", type: "address" },
              { indexed: !1, name: "wad", type: "uint256" },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "src", type: "address" },
              { indexed: !0, name: "dst", type: "address" },
              { indexed: !1, name: "wad", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "dst", type: "address" },
              { indexed: !1, name: "wad", type: "uint256" },
            ],
            name: "Deposit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "src", type: "address" },
              { indexed: !1, name: "wad", type: "uint256" },
            ],
            name: "Withdrawal",
            type: "event",
          },
        ],
        Cs = {
          [o.BLOCKCHAIN_NAME.ETHEREUM]:
            "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          [o.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]:
            "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
          [o.BLOCKCHAIN_NAME.POLYGON]:
            "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
          [o.BLOCKCHAIN_NAME.HARMONY]:
            "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a",
          [o.BLOCKCHAIN_NAME.AVALANCHE]:
            "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
          [o.BLOCKCHAIN_NAME.MOONRIVER]:
            "0x98878B06940aE243284CA214f92Bb71a2b032B8A",
          [o.BLOCKCHAIN_NAME.FANTOM]:
            "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
          [o.BLOCKCHAIN_NAME.ARBITRUM]:
            "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
          [o.BLOCKCHAIN_NAME.AURORA]:
            "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
          [o.BLOCKCHAIN_NAME.TELOS]:
            "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
          [o.BLOCKCHAIN_NAME.OPTIMISM]:
            "0x4200000000000000000000000000000000000006",
          [o.BLOCKCHAIN_NAME.OKE_X_CHAIN]:
            "0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15",
          [o.BLOCKCHAIN_NAME.GNOSIS]:
            "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
          [o.BLOCKCHAIN_NAME.FUSE]:
            "0x0be9e53fd7edac9f859882afdda116645287c629",
          [o.BLOCKCHAIN_NAME.MOONBEAM]:
            "0xacc15dc74880c9944775448304b263d191c6077f",
          [o.BLOCKCHAIN_NAME.ETHEREUM_POW]:
            "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          [o.BLOCKCHAIN_NAME.KAVA]:
            "0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b",
        };
      var Vr = l(98601);
      class Bt {
        constructor(t, n) {
          (this.walletConnectorService = t),
            (this.authService = n),
            (this.abi = fs),
            (this.contractAddress = Cs);
        }
        isEthAndWethSwap(t, n, i) {
          const a = this.contractAddress[t];
          return (
            (n === Dr.K8 && (0, J.IL)(i, a)) || (i === Dr.K8 && (0, J.IL)(n, a))
          );
        }
        createTrade(t, n) {
          var i = this;
          return (0, T.Z)(function* () {
            const { blockchain: a } = t,
              s = t.from.token,
              c = t.from.amount;
            yield o.Injector.web3PrivateService
              .getWeb3Private(Vr.CHAIN_TYPE.EVM)
              .checkBlockchainCorrect(a),
              yield o.Injector.web3PublicService
                .getWeb3Public(a)
                .checkBalance(s, c, i.authService.userAddress);
            const d = o.Web3Pure.toWei(c);
            return (yield (
              o.EvmWeb3Pure.isNativeAddress(s.address)
                ? i.swapEthToWeth
                : i.swapWethToEth
            ).bind(i)(a, d, n)).transactionHash;
          })();
        }
        swapEthToWeth(t, n, i) {
          return o.Injector.web3PrivateService
            .getWeb3Private(Vr.CHAIN_TYPE.EVM)
            .executeContractMethod(
              this.contractAddress[t],
              this.abi,
              "deposit",
              [],
              { value: n, onTransactionHash: i.onConfirm }
            );
        }
        swapWethToEth(t, n, i) {
          return o.Injector.web3PrivateService
            .getWeb3Private(Vr.CHAIN_TYPE.EVM)
            .executeContractMethod(
              this.contractAddress[t],
              this.abi,
              "withdraw",
              [n],
              { onTransactionHash: i.onConfirm }
            );
        }
      }
      (Bt.ɵfac = function (t) {
        return new (t || Bt)(e.ɵɵinject(Nt.j), e.ɵɵinject(j.e));
      }),
        (Bt.ɵprov = e.ɵɵdefineInjectable({
          token: Bt,
          factory: Bt.ɵfac,
          providedIn: "root",
        }));
      var Mi = l(88404),
        Ii = l(50501),
        Ni = l(1024);
      class Ft {
        constructor(t) {
          (this.successTxModalType = t),
            (this.showSuccessTrxNotification = () => {
              this.notificationsService.show(new z.Al(Ni.U), {
                status: "success",
                autoClose: 15e3,
                data: {
                  type: this.successTxModalType,
                  withRecentTrades: "on-chain" !== this.successTxModalType,
                },
              });
            }),
            (this.showTrxInProgressTrxNotification = () =>
              this.notificationsService.showWithoutSubscribe(new z.Al(Mi.d), {
                status: "info",
                autoClose: !1,
              })),
            (this.notificationsService = (0, e.inject)(rn.T)),
            (this.successTxModalService = (0, e.inject)(Ii.c));
        }
        notifyTradeInProgress(t, n, i = o.CROSS_CHAIN_TRADE_TYPE.CELER) {
          return this.successTxModalService.open(
            t,
            n,
            this.successTxModalType,
            i,
            this.showTrxInProgressTrxNotification
          );
        }
      }
      (Ft.ɵfac = function (t) {
        e.ɵɵinvalidFactory();
      }),
        (Ft.ɵprov = e.ɵɵdefineInjectable({ token: Ft, factory: Ft.ɵfac }));
      const jr = {
        ...Object.values(o.BLOCKCHAIN_NAME).reduce(
          (r, t) => ({ ...r, [t]: !1 }),
          {}
        ),
        [o.BLOCKCHAIN_NAME.AVALANCHE]: !0,
        [o.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: !0,
        [o.BLOCKCHAIN_NAME.FANTOM]: !0,
        [o.BLOCKCHAIN_NAME.ETHEREUM]: !0,
        [o.BLOCKCHAIN_NAME.POLYGON]: !0,
        [o.BLOCKCHAIN_NAME.TELOS]: !0,
        [o.BLOCKCHAIN_NAME.ETHEREUM_POW]: !0,
      };
      var Ri = l(48287),
        Bi = l(37251),
        Fi = l(21713);
      function vs(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "a", 1),
            e.ɵɵpipe(1, "scannerLink"),
            e.ɵɵtext(2, "See details."),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty(
            "safetyLink",
            e.ɵɵpipeBind3(
              1,
              1,
              n.txHash,
              n.blockchainName,
              n.ADDRESS_TYPE.TRANSACTION
            )
          );
        }
      }
      class yn {
        constructor(t) {
          (this.context = t),
            (this.ADDRESS_TYPE = Bi.Z),
            (this.blockchainName = t.data.blockchainName),
            (this.txHash = t.data.txHash);
        }
      }
      (yn.ɵfac = function (t) {
        return new (t || yn)(e.ɵɵdirectiveInject(z.yf));
      }),
        (yn.ɵcmp = e.ɵɵdefineComponent({
          type: yn,
          selectors: [["app-transaction-failed-error"]],
          decls: 4,
          vars: 1,
          consts: [
            [3, "safetyLink", 4, "ngIf"],
            [3, "safetyLink"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementContainerStart(0),
              e.ɵɵelementStart(1, "span"),
              e.ɵɵtext(2, "Transaction failed. "),
              e.ɵɵtemplate(3, vs, 3, 5, "a", 0),
              e.ɵɵelementEnd(),
              e.ɵɵelementContainerEnd()),
              2 & t && (e.ɵɵadvance(3), e.ɵɵproperty("ngIf", n.txHash));
          },
          dependencies: [m.O5, Fr.x, Fi.m],
          changeDetection: 0,
        }));
      class zr extends V.q {
        constructor(t, n) {
          super(yn, { txHash: n, blockchainName: t }),
            Object.setPrototypeOf(this, zr.prototype);
        }
      }
      var Yr = l(69141);
      class Wr extends Yr.V {
        constructor(t) {
          super(`${t} blockchain is currently unavailable.`),
            Object.setPrototypeOf(this, Wr.prototype);
        }
      }
      const bs = Wr;
      var yr = l(31496);
      class Oe extends Ft {
        constructor(t, n, i, a, s, c, p, d, _, f, x, P, S) {
          super("on-chain"),
            (this.instantTradesApiService = t),
            (this.ethWethSwapProvider = n),
            (this.iframeService = i),
            (this.gtmService = a),
            (this.swapFormService = s),
            (this.settingsService = c),
            (this.sdkService = p),
            (this.authService = d),
            (this.gasService = _),
            (this.targetNetworkAddressService = f),
            (this.platformConfigurationService = x),
            (this.recentTradesStoreService = P),
            (this.queryParamsService = S);
        }
        static isSupportedBlockchain(t) {
          return !Oe.unsupportedItNetworks.includes(t);
        }
        get receiverAddress() {
          return this.settingsService.instantTradeValue.showReceiverAddress
            ? this.targetNetworkAddressService.address
            : null;
        }
        get inputValue() {
          const t = this.swapFormService.inputValue;
          if (
            t.fromAssetType &&
            !o.BlockchainsInfo.isBlockchainName(t.fromAssetType)
          )
            throw new V.q("Cannot use instant trades");
          return {
            ...t,
            fromBlockchain: t.fromAssetType,
            fromToken: t.fromAsset,
          };
        }
        needApprove(t) {
          return (0, T.Z)(function* () {
            return t.needApprove();
          })();
        }
        approve(t) {
          var n = this;
          return (0, T.Z)(function* () {
            let i;
            n.checkDeviceAndShowNotification();
            const { blockchain: a } = pt.getItSwapParams(t),
              c = {
                onTransactionHash: () => {
                  i = n.notificationsService.showApproveInProgress();
                },
                ...(jr[a] && {
                  gasPrice: o.Web3Pure.toWei(
                    yield n.gasService.getGasPriceInEthUnits(a)
                  ),
                }),
              };
            try {
              yield t.approve(c),
                n.notificationsService.showApproveSuccessful();
            } catch (p) {
              if (p instanceof o.UnnecessaryApproveError) return;
              throw p;
            } finally {
              i?.unsubscribe();
            }
          })();
        }
        getEthWethTrade() {
          const {
            fromAmount: t,
            fromToken: n,
            toToken: i,
            fromBlockchain: a,
          } = this.inputValue;
          return n &&
            i &&
            this.ethWethSwapProvider.isEthAndWethSwap(a, n.address, i.address)
            ? {
                blockchain: a,
                from: { token: n, amount: t },
                to: { token: i, amount: t },
              }
            : null;
        }
        calculateTrades(t, n, i) {
          var a = this;
          return (0, T.Z)(function* () {
            const s = a.settingsService.instantTradeValue,
              c = s.slippageTolerance / 100,
              p = s.disableMultihops,
              d = s.deadline,
              _ = o.BlockchainsInfo.getChainType(t.blockchain),
              f = yield o.Web3Pure[_].isAddressCorrect(
                a.authService.userAddress
              );
            return a.sdkService.instantTrade.calculateTrade(t, n, i.address, {
              timeout: 1e4,
              gasCalculation:
                jr[t.blockchain] && a.authService.userAddress && f
                  ? "calculate"
                  : "disabled",
              zrxAffiliateAddress: Ri.G.zrxAffiliateAddress,
              slippageTolerance: c,
              disableMultihops: p,
              deadlineMinutes: d,
              useProxy: !1,
            });
          })();
        }
        createTrade(t, n, i) {
          var a = this;
          return (0, T.Z)(function* () {
            const { fromBlockchain: s } = a.inputValue;
            a.checkDeviceAndShowNotification();
            const {
              fromSymbol: c,
              toSymbol: p,
              fromAmount: d,
              fromPrice: _,
              blockchain: f,
              fromAddress: x,
              fromDecimals: P,
            } = pt.getItSwapParams(n);
            if (!a.platformConfigurationService.isAvailableBlockchain(s))
              throw new bs(We.h[s]);
            let D, Q;
            yield o.Injector.web3PublicService
              .getWeb3Public(f)
              .checkBalance(
                { address: x, decimals: P, symbol: c },
                d,
                a.authService.userAddress
              );
            const xe = a.receiverAddress,
              gr = {
                onConfirm: (he) => {
                  (D = he), i?.();
                  const tn = a.queryParamsService.queryParams.onramperTxId;
                  tn &&
                    (a.recentTradesStoreService.updateOnramperTargetTrade(
                      tn,
                      he
                    ),
                    a.queryParamsService.patchQueryParams({
                      onramperTxId: null,
                    })),
                    a.notifyGtmAfterSignTx(D, c, p, d.multipliedBy(_)),
                    a.gtmService.checkGtm(),
                    (Q = a.notifyTradeInProgress(he, f)),
                    a.postTrade(he, t, n);
                },
                ...(jr[f] && {
                  gasPrice: o.Web3Pure.toWei(
                    yield a.gasService.getGasPriceInEthUnits(f)
                  ),
                }),
                ...(xe && { receiverAddress: xe }),
              };
            try {
              const he = a.authService.userAddress;
              if (
                (n instanceof o.OnChainTrade
                  ? yield n.swap(gr)
                  : yield a.ethWethSwapProvider.createTrade(n, gr),
                n instanceof o.OnChainTrade &&
                  n.from.blockchain === o.BLOCKCHAIN_NAME.TRON)
              ) {
                const tn = yield (0, Tt.z)(
                  (0, xn.F)(7e3).pipe(
                    (0, N.w)(() =>
                      a.sdkService.onChainStatusManager.getBridgersSwapStatus(D)
                    ),
                    (0, re.h)(
                      (_o) =>
                        _o.status === o.TxStatus.SUCCESS ||
                        _o.status === o.TxStatus.FAIL
                    )
                  )
                );
                if ((Q.unsubscribe(), tn.status !== o.TxStatus.SUCCESS))
                  throw new zr(o.BLOCKCHAIN_NAME.TRON, tn.hash);
                a.showSuccessTrxNotification();
              } else Q.unsubscribe(), a.showSuccessTrxNotification();
              yield a.instantTradesApiService
                .notifyInstantTradesBot({
                  provider: t,
                  blockchain: f,
                  walletAddress: he,
                  trade: n,
                  txHash: D,
                })
                .catch((tn) => {}),
                a.updateTrade(D, !0);
            } catch (he) {
              throw (
                (Q?.unsubscribe(),
                he instanceof o.NotWhitelistedProviderError &&
                  a.saveNotWhitelistedProvider(he, s, n?.type),
                D && !a.isNotMinedError(he) && a.updateTrade(D, !1),
                he)
              );
            }
          })();
        }
        postTrade(t, n, i) {
          var a = this;
          return (0, T.Z)(function* () {
            const { blockchain: p } = pt.getItSwapParams(i),
              d = p === o.BLOCKCHAIN_NAME.BOBA ? 3e3 : 0;
            yield (0, ot.H)(d)
              .pipe(
                (0, N.w)(() =>
                  a.instantTradesApiService.createTrade(t, n, i, void 0, void 0)
                )
              )
              .toPromise();
          })();
        }
        isNotMinedError(t) {
          return (
            Boolean(t?.message?.includes) &&
            t.message.includes(
              "Transaction was not mined within 50 blocks, please make sure your transaction was properly sent. Be aware that it might still be mined!"
            )
          );
        }
        updateTrade(t, n) {
          return this.instantTradesApiService
            .patchTrade(t, n)
            .subscribe({
              error: (i) => console.debug("IT patch request is failed", i),
            });
        }
        notifyGtmAfterSignTx(t, n, i, a) {
          this.gtmService.fireTxSignedEvent(
            b.V.INSTANT_TRADE,
            t,
            n,
            i,
            new M.Z(0),
            a
          );
        }
        checkDeviceAndShowNotification() {
          this.iframeService.isIframe &&
            "mobile" === this.iframeService.device &&
            this.notificationsService.showOpenMobileWallet();
        }
        saveNotWhitelistedProvider(t, n, i) {
          this.instantTradesApiService
            .saveNotWhitelistedProvider(t, n, i)
            .subscribe();
        }
      }
      (Oe.unsupportedItNetworks = [
        o.BLOCKCHAIN_NAME.BITGERT,
        o.BLOCKCHAIN_NAME.OASIS,
        o.BLOCKCHAIN_NAME.METIS,
      ]),
        (Oe.ɵfac = function (t) {
          return new (t || Oe)(
            e.ɵɵinject(Rt),
            e.ɵɵinject(Bt),
            e.ɵɵinject(W.b),
            e.ɵɵinject(Ot.k),
            e.ɵɵinject(A.q),
            e.ɵɵinject(q),
            e.ɵɵinject(it.w),
            e.ɵɵinject(j.e),
            e.ɵɵinject(vr.Q),
            e.ɵɵinject(oe),
            e.ɵɵinject(Cr.L),
            e.ɵɵinject(yr.o),
            e.ɵɵinject(Be.E)
          );
        }),
        (Oe.ɵprov = e.ɵɵdefineInjectable({ token: Oe, factory: Oe.ɵfac }));
      var ae = (() => {
        return (
          ((r = ae || (ae = {})).CALCULATION = "CALCULATION"),
          (r.APPROVAL = "APPROVAL"),
          (r.TX_IN_PROGRESS = "TX_IN_PROGRESS"),
          (r.COMPLETED = "COMPLETED"),
          (r.ERROR = "ERROR"),
          ae
        );
        var r;
      })();
      const xs = {
          [o.ON_CHAIN_TRADE_TYPE.ACRYPTOS]: "Acryptos",
          [o.ON_CHAIN_TRADE_TYPE.ALDRIN_EXCHANGE]: "AldrinExchange",
          [o.ON_CHAIN_TRADE_TYPE.ALGEBRA]: "Algebra",
          [o.ON_CHAIN_TRADE_TYPE.ANNEX]: "Annex",
          [o.ON_CHAIN_TRADE_TYPE.APE_SWAP]: "ApeSwap",
          [o.ON_CHAIN_TRADE_TYPE.ARTH_SWAP]: "ArthSwap",
          [o.ON_CHAIN_TRADE_TYPE.ASTRO_SWAP]: "AstroSwap",
          [o.ON_CHAIN_TRADE_TYPE.AURORA_SWAP]: "AuroraSwap",
          [o.ON_CHAIN_TRADE_TYPE.BABY_SWAP]: "BabySwap",
          [o.ON_CHAIN_TRADE_TYPE.BALANCER]: "Balancer",
          [o.ON_CHAIN_TRADE_TYPE.BEAM_SWAP]: "BeamSwap",
          [o.ON_CHAIN_TRADE_TYPE.BI_SWAP]: "BiSwap",
          [o.ON_CHAIN_TRADE_TYPE.BRIDGERS]: "Bridgers",
          [o.ON_CHAIN_TRADE_TYPE.CLAIM_SWAP]: "ClaimSwap",
          [o.ON_CHAIN_TRADE_TYPE.CREMA_FINANCE]: "CremaFinance",
          [o.ON_CHAIN_TRADE_TYPE.CRONA_SWAP]: "CronaSwap",
          [o.ON_CHAIN_TRADE_TYPE.CROPPER_FINANCE]: "CropperFinance",
          [o.ON_CHAIN_TRADE_TYPE.CROW_FI]: "CrowFi",
          [o.ON_CHAIN_TRADE_TYPE.CRO_DEX]: "CroDex",
          [o.ON_CHAIN_TRADE_TYPE.CURVE]: "Curve",
          [o.ON_CHAIN_TRADE_TYPE.ELK]: "Elk",
          [o.ON_CHAIN_TRADE_TYPE.DEFI_PLAZA]: "DefiPlaza",
          [o.ON_CHAIN_TRADE_TYPE.DEFI_SWAP]: "DefiSwap",
          [o.ON_CHAIN_TRADE_TYPE.DFYN]: "Dfyn",
          [o.ON_CHAIN_TRADE_TYPE.DODO]: "Dodo",
          [o.ON_CHAIN_TRADE_TYPE.DYSTOPIA]: "Dystopia",
          [o.ON_CHAIN_TRADE_TYPE.HONEY_SWAP]: "HoneySwap",
          [o.ON_CHAIN_TRADE_TYPE.JET_SWAP]: "JetSwap",
          [o.ON_CHAIN_TRADE_TYPE.JOE]: "Joe",
          [o.ON_CHAIN_TRADE_TYPE.JUPITER]: "Jupiter",
          [o.ON_CHAIN_TRADE_TYPE.JUPITER_SWAP]: "JupiterSwap",
          [o.ON_CHAIN_TRADE_TYPE.J_SWAP]: "JSwap",
          [o.ON_CHAIN_TRADE_TYPE.KYBER_SWAP]: "KyberSwap",
          [o.ON_CHAIN_TRADE_TYPE.LUA_SWAP]: "LuaSwap",
          [o.ON_CHAIN_TRADE_TYPE.MAVERICK]: "Maverick",
          [o.ON_CHAIN_TRADE_TYPE.MDEX]: "MDEX",
          [o.ON_CHAIN_TRADE_TYPE.MESH_SWAP]: "MeshSwap",
          [o.ON_CHAIN_TRADE_TYPE.MM_FINANCE]: "MMFinance",
          [o.ON_CHAIN_TRADE_TYPE.MOJITO_SWAP]: "MojitoSwap",
          [o.ON_CHAIN_TRADE_TYPE.NET_SWAP]: "NetSwap",
          [o.ON_CHAIN_TRADE_TYPE.OMNIDEX]: "Omnidex",
          [o.ON_CHAIN_TRADE_TYPE.ONE_INCH]: "1inch",
          [o.ON_CHAIN_TRADE_TYPE.ONE_MOON]: "OneMoon",
          [o.ON_CHAIN_TRADE_TYPE.ONE_SOL]: "1sol",
          [o.ON_CHAIN_TRADE_TYPE.OOLONG_SWAP]: "OolongSwap",
          [o.ON_CHAIN_TRADE_TYPE.OPEN_OCEAN]: "OpenOcean",
          [o.ON_CHAIN_TRADE_TYPE.ORCA_SWAP]: "OrcaSwap",
          [o.ON_CHAIN_TRADE_TYPE.OSMOSIS_SWAP]: "OsmosisSwap",
          [o.ON_CHAIN_TRADE_TYPE.PANCAKE_SWAP]: "PancakeSwap",
          [o.ON_CHAIN_TRADE_TYPE.PANGOLIN]: "Pangolin",
          [o.ON_CHAIN_TRADE_TYPE.PARA_SWAP]: "ParaSwap",
          [o.ON_CHAIN_TRADE_TYPE.PEGASYS]: "Pegasys",
          [o.ON_CHAIN_TRADE_TYPE.PHOTON_SWAP]: "PhotonSwap",
          [o.ON_CHAIN_TRADE_TYPE.POLYDEX]: "Polydex",
          [o.ON_CHAIN_TRADE_TYPE.QUICK_SWAP]: "QuickSwap",
          [o.ON_CHAIN_TRADE_TYPE.QUICK_SWAP_V3]: "QuickSwap v3",
          [o.ON_CHAIN_TRADE_TYPE.RAYDIUM]: "Raydium",
          [o.ON_CHAIN_TRADE_TYPE.REF_FINANCE]: "RefFinance",
          [o.ON_CHAIN_TRADE_TYPE.REN_BTC]: "renBTC",
          [o.ON_CHAIN_TRADE_TYPE.SABER_STABLE_SWAP]: "SaberStableSwap",
          [o.ON_CHAIN_TRADE_TYPE.SAROS_SWAP]: "SarosSwap",
          [o.ON_CHAIN_TRADE_TYPE.SERUM]: "Serum",
          [o.ON_CHAIN_TRADE_TYPE.SHIBA_SWAP]: "ShibaSwap",
          [o.ON_CHAIN_TRADE_TYPE.SMOOTHY]: "Smoothy",
          [o.ON_CHAIN_TRADE_TYPE.SOLAR_BEAM]: "SolarBeam",
          [o.ON_CHAIN_TRADE_TYPE.SPIRIT_SWAP]: "SpiritSwap",
          [o.ON_CHAIN_TRADE_TYPE.SPL_TOKEN_SWAP]: "SplTokenSwap",
          [o.ON_CHAIN_TRADE_TYPE.SPOOKY_SWAP]: "Spooky",
          [o.ON_CHAIN_TRADE_TYPE.STELLA_SWAP]: "StellaSwap",
          [o.ON_CHAIN_TRADE_TYPE.SURFDEX]: "Surfdex",
          [o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP]: "SushiSwap",
          [o.ON_CHAIN_TRADE_TYPE.SOUL_SWAP]: "SoulSwap",
          [o.ON_CHAIN_TRADE_TYPE.TRADER]: "TheTrader",
          [o.ON_CHAIN_TRADE_TYPE.TRISOLARIS]: "Trisolaris",
          [o.ON_CHAIN_TRADE_TYPE.UBE_SWAP]: "UbeSwap",
          [o.ON_CHAIN_TRADE_TYPE.UNISWAP_V2]: "Uniswap v2",
          [o.ON_CHAIN_TRADE_TYPE.UNI_SWAP_V3]: "Uniswap v3",
          [o.ON_CHAIN_TRADE_TYPE.VERSE]: "Verse",
          [o.ON_CHAIN_TRADE_TYPE.VIPER_SWAP]: "ViperSwap",
          [o.ON_CHAIN_TRADE_TYPE.VOLTAGE_SWAP]: "VoltageSwap",
          [o.ON_CHAIN_TRADE_TYPE.VVS_FINANCE]: "VVSFinance",
          [o.ON_CHAIN_TRADE_TYPE.WAGYU_SWAP]: "WagyuSwap",
          [o.ON_CHAIN_TRADE_TYPE.WANNA_SWAP]: "WannaSwap",
          [o.ON_CHAIN_TRADE_TYPE.WAULT_SWAP]: "WaultSwap",
          [o.ON_CHAIN_TRADE_TYPE.WOO_FI]: "WooFi",
          [o.ON_CHAIN_TRADE_TYPE.WRAPPED]: "Wrapped",
          [o.ON_CHAIN_TRADE_TYPE.ZAPPY]: "Zappy",
          [o.ON_CHAIN_TRADE_TYPE.ZIP_SWAP]: "ZipSwap",
          [o.ON_CHAIN_TRADE_TYPE.ZRX]: "0x",
          [o.ON_CHAIN_TRADE_TYPE.YUZU_SWAP]: "YuzuSwap",
        },
        ys = {
          trade: null,
          tradeStatus: ae.CALCULATION,
          isSelected: !1,
          needApprove: !1,
        };
      function F(r) {
        return r.map((t) => ({ ...ys, name: t, label: xs[t] }));
      }
      const Di = {
        [o.BLOCKCHAIN_NAME.ETHEREUM]: F([
          o.ON_CHAIN_TRADE_TYPE.UNI_SWAP_V3,
          o.ON_CHAIN_TRADE_TYPE.ONE_INCH,
          o.ON_CHAIN_TRADE_TYPE.UNISWAP_V2,
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.PARA_SWAP,
          o.ON_CHAIN_TRADE_TYPE.DODO,
          o.ON_CHAIN_TRADE_TYPE.ZRX,
          o.ON_CHAIN_TRADE_TYPE.CURVE,
          o.ON_CHAIN_TRADE_TYPE.VERSE,
        ]),
        [o.BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: F([
          o.ON_CHAIN_TRADE_TYPE.ONE_INCH,
          o.ON_CHAIN_TRADE_TYPE.PANCAKE_SWAP,
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.PARA_SWAP,
          o.ON_CHAIN_TRADE_TYPE.DODO,
          o.ON_CHAIN_TRADE_TYPE.CURVE,
          o.ON_CHAIN_TRADE_TYPE.ZRX,
        ]),
        [o.BLOCKCHAIN_NAME.POLYGON]: F([
          o.ON_CHAIN_TRADE_TYPE.UNI_SWAP_V3,
          o.ON_CHAIN_TRADE_TYPE.ALGEBRA,
          o.ON_CHAIN_TRADE_TYPE.ONE_INCH,
          o.ON_CHAIN_TRADE_TYPE.QUICK_SWAP,
          o.ON_CHAIN_TRADE_TYPE.QUICK_SWAP_V3,
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.PARA_SWAP,
          o.ON_CHAIN_TRADE_TYPE.DODO,
          o.ON_CHAIN_TRADE_TYPE.HONEY_SWAP,
          o.ON_CHAIN_TRADE_TYPE.ZRX,
          o.ON_CHAIN_TRADE_TYPE.CURVE,
        ]),
        [o.BLOCKCHAIN_NAME.HARMONY]: F([
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.VIPER_SWAP,
        ]),
        [o.BLOCKCHAIN_NAME.AVALANCHE]: F([
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.PANGOLIN,
          o.ON_CHAIN_TRADE_TYPE.JOE,
          o.ON_CHAIN_TRADE_TYPE.ONE_INCH,
          o.ON_CHAIN_TRADE_TYPE.PARA_SWAP,
          o.ON_CHAIN_TRADE_TYPE.ZRX,
          o.ON_CHAIN_TRADE_TYPE.CURVE,
        ]),
        [o.BLOCKCHAIN_NAME.MOONRIVER]: F([
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.SOLAR_BEAM,
        ]),
        [o.BLOCKCHAIN_NAME.FANTOM]: F([
          o.ON_CHAIN_TRADE_TYPE.SPOOKY_SWAP,
          o.ON_CHAIN_TRADE_TYPE.SPIRIT_SWAP,
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.ONE_INCH,
          o.ON_CHAIN_TRADE_TYPE.PARA_SWAP,
          o.ON_CHAIN_TRADE_TYPE.ZRX,
          o.ON_CHAIN_TRADE_TYPE.SOUL_SWAP,
          o.ON_CHAIN_TRADE_TYPE.CURVE,
        ]),
        [o.BLOCKCHAIN_NAME.ARBITRUM]: F([
          o.ON_CHAIN_TRADE_TYPE.ONE_INCH,
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.UNI_SWAP_V3,
          o.ON_CHAIN_TRADE_TYPE.DODO,
          o.ON_CHAIN_TRADE_TYPE.CURVE,
        ]),
        [o.BLOCKCHAIN_NAME.AURORA]: F([
          o.ON_CHAIN_TRADE_TYPE.TRISOLARIS,
          o.ON_CHAIN_TRADE_TYPE.WANNA_SWAP,
        ]),
        [o.BLOCKCHAIN_NAME.TELOS]: F([
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.ZAPPY,
          o.ON_CHAIN_TRADE_TYPE.APE_SWAP,
          o.ON_CHAIN_TRADE_TYPE.OMNIDEX,
        ]),
        [o.BLOCKCHAIN_NAME.OPTIMISM]: F([o.ON_CHAIN_TRADE_TYPE.CURVE]),
        [o.BLOCKCHAIN_NAME.CRONOS]: F([o.ON_CHAIN_TRADE_TYPE.CRONA_SWAP]),
        [o.BLOCKCHAIN_NAME.OKE_X_CHAIN]: F([
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.J_SWAP,
          o.ON_CHAIN_TRADE_TYPE.DODO,
        ]),
        [o.BLOCKCHAIN_NAME.GNOSIS]: F([
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.ONE_INCH,
          o.ON_CHAIN_TRADE_TYPE.HONEY_SWAP,
          o.ON_CHAIN_TRADE_TYPE.CURVE,
        ]),
        [o.BLOCKCHAIN_NAME.FUSE]: F([o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP]),
        [o.BLOCKCHAIN_NAME.MOONBEAM]: F([
          o.ON_CHAIN_TRADE_TYPE.STELLA_SWAP,
          o.ON_CHAIN_TRADE_TYPE.BEAM_SWAP,
        ]),
        [o.BLOCKCHAIN_NAME.CELO]: F([
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.UBE_SWAP,
          o.ON_CHAIN_TRADE_TYPE.CURVE,
        ]),
        [o.BLOCKCHAIN_NAME.BOBA]: F([o.ON_CHAIN_TRADE_TYPE.OOLONG_SWAP]),
        [o.BLOCKCHAIN_NAME.ETHEREUM_POW]: F([
          o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP,
          o.ON_CHAIN_TRADE_TYPE.UNI_SWAP_V3,
          o.ON_CHAIN_TRADE_TYPE.UNISWAP_V2,
        ]),
        [o.BLOCKCHAIN_NAME.KAVA]: F([
          o.ON_CHAIN_TRADE_TYPE.JUPITER_SWAP,
          o.ON_CHAIN_TRADE_TYPE.PHOTON_SWAP,
          o.ON_CHAIN_TRADE_TYPE.ELK,
          o.ON_CHAIN_TRADE_TYPE.SURFDEX,
        ]),
        [o.BLOCKCHAIN_NAME.TRON]: F([o.ON_CHAIN_TRADE_TYPE.BRIDGERS]),
        [o.BLOCKCHAIN_NAME.OASIS]: F([o.ON_CHAIN_TRADE_TYPE.YUZU_SWAP]),
        [o.BLOCKCHAIN_NAME.METIS]: F([o.ON_CHAIN_TRADE_TYPE.NET_SWAP]),
        [o.BLOCKCHAIN_NAME.KLAYTN]: F([o.ON_CHAIN_TRADE_TYPE.CLAIM_SWAP]),
        [o.BLOCKCHAIN_NAME.VELAS]: F([
          o.ON_CHAIN_TRADE_TYPE.WAGYU_SWAP,
          o.ON_CHAIN_TRADE_TYPE.ASTRO_SWAP,
        ]),
        [o.BLOCKCHAIN_NAME.SYSCOIN]: F([o.ON_CHAIN_TRADE_TYPE.PEGASYS]),
      };
      var Li = l(4128),
        je = l(32076),
        u = (() => {
          return (
            ((r = u || (u = {}))[(r.DISABLED = 0)] = "DISABLED"),
            (r[(r.LOADING = 1)] = "LOADING"),
            (r[(r.READY_TO_APPROVE = 2)] = "READY_TO_APPROVE"),
            (r[(r.APPROVE_IN_PROGRESS = 3)] = "APPROVE_IN_PROGRESS"),
            (r[(r.READY_TO_SWAP = 4)] = "READY_TO_SWAP"),
            (r[(r.SWAP_IN_PROGRESS = 5)] = "SWAP_IN_PROGRESS"),
            (r[(r.OLD_TRADE_DATA = 6)] = "OLD_TRADE_DATA"),
            (r[(r.READY_TO_BUY_NATIVE = 7)] = "READY_TO_BUY_NATIVE"),
            (r[(r.BUY_NATIVE_IN_PROGRESS = 8)] = "BUY_NATIVE_IN_PROGRESS"),
            u
          );
          var r;
        })(),
        Ee = l(68675),
        dt = l(78372),
        Je = l(90988);
      class ze {
        constructor() {
          (this._onInfoCalculated$ = new _e.x()),
            (this.onInfoCalculated$ = this._onInfoCalculated$.asObservable());
        }
        emitInfoCalculated() {
          this._onInfoCalculated$.next();
        }
      }
      (ze.ɵfac = function (t) {
        return new (t || ze)();
      }),
        (ze.ɵprov = e.ɵɵdefineInjectable({
          token: ze,
          factory: ze.ɵfac,
          providedIn: "root",
        }));
      class Ur extends V.q {
        constructor() {
          super("noSelectedProvider"),
            Object.setPrototypeOf(this, Ur.prototype);
        }
      }
      const Hi = Ur;
      var mt = l(63466);
      class Dt {
        constructor(t) {
          this.context = t;
        }
        onConfirm() {
          this.context.completeWith(null);
        }
      }
      function Ss(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate(n);
        }
      }
      function Ts(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span", 8), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext(3);
          e.ɵɵproperty("tuiHint", n)("tuiHintShowDelay", 0)(
            "tuiHintHideDelay",
            0
          ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1("", n.slice(0, i.isIframe ? 7 : 10), "...");
        }
      }
      function Os(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Ss, 2, 1, "ng-container", 6),
            e.ɵɵtemplate(2, Ts, 2, 4, "span", 7),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              (i.isIframe && n.length <= 10) || (!i.isIframe && n.length <= 15)
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              (i.isIframe && n.length > 10) || n.length > 15
            );
        }
      }
      function Ps(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 4),
            e.ɵɵtext(1),
            e.ɵɵtemplate(2, Os, 3, 2, "ng-container", 5),
            e.ɵɵpipe(3, "withRound"),
            e.ɵɵpipe(4, "bigNumberFormat"),
            e.ɵɵtext(5),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" 1 ", n.from.symbol, " = "),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngLet",
              e.ɵɵpipeBind2(
                3,
                3,
                e.ɵɵpipeBind1(4, 6, n.to.amount),
                "toClosestValue"
              )
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(" ", n.to.symbol, " ");
        }
      }
      function ks(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate(n);
        }
      }
      function ws(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span", 8), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext(3);
          e.ɵɵproperty("tuiHint", n)("tuiHintShowDelay", 0)(
            "tuiHintHideDelay",
            0
          ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1("", n.slice(0, i.isIframe ? 7 : 10), "...");
        }
      }
      function As(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, ks, 2, 1, "ng-container", 6),
            e.ɵɵtemplate(2, ws, 2, 4, "span", 7),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              (i.isIframe && n.length <= 10) || (!i.isIframe && n.length <= 15)
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              (i.isIframe && n.length > 10) || n.length > 15
            );
        }
      }
      function Es(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 4),
            e.ɵɵtemplate(1, As, 3, 2, "ng-container", 5),
            e.ɵɵpipe(2, "withRound"),
            e.ɵɵpipe(3, "bigNumberFormat"),
            e.ɵɵtext(4),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngLet",
              e.ɵɵpipeBind2(
                2,
                3,
                e.ɵɵpipeBind1(3, 6, n.from.amount),
                "toClosestValue"
              )
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2(" ", n.from.symbol, " = 1 ", n.to.symbol, " ");
        }
      }
      function Ms(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 1),
            e.ɵɵtemplate(1, Ps, 6, 8, "div", 2),
            e.ɵɵtemplate(2, Es, 5, 8, "div", 2),
            e.ɵɵelementStart(3, "div", 3),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onChangeDirection());
            }),
            e.ɵɵelementEnd()();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "from" === n.rateDirection),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "to" === n.rateDirection);
        }
      }
      (Dt.ɵfac = function (t) {
        return new (t || Dt)(e.ɵɵdirectiveInject(z.yf));
      }),
        (Dt.ɵcmp = e.ɵɵdefineComponent({
          type: Dt,
          selectors: [["polymorpheus-auto-slippage-warning-modal"]],
          decls: 11,
          vars: 6,
          consts: [
            [1, "modal"],
            [1, "modal__content"],
            [1, "modal__body"],
            [
              "src",
              "assets/images/bridge/warning-image.svg",
              "alt",
              "Success",
              1,
              "modal__warning-image",
            ],
            [1, "modal__footer"],
            [1, "modal__footer-text"],
            ["fullWidth", "", "appearance", "secondary", 3, "click"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "main", 2),
              e.ɵɵelement(3, "img", 3),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(4, "div", 4)(5, "div", 5),
              e.ɵɵtext(6),
              e.ɵɵpipe(7, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(8, "app-rubic-button", 6),
              e.ɵɵlistener("click", function () {
                return n.onConfirm();
              }),
              e.ɵɵtext(9),
              e.ɵɵpipe(10, "translate"),
              e.ɵɵelementEnd()()()()),
              2 & t &&
                (e.ɵɵadvance(6),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind1(7, 2, "warningModal.autoSlippage"),
                  " "
                ),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind1(10, 4, "OK"),
                  " "
                ));
          },
          dependencies: [ie.j, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.modal__content[_ngcontent-%COMP%]{padding:35px 20px 0;text-align:center}.modal__footer[_ngcontent-%COMP%]{margin-top:20px}.modal__footer-text[_ngcontent-%COMP%]{margin-bottom:18px}.modal__footer-link[_ngcontent-%COMP%]{display:inline-block;margin-bottom:18px;font-size:17px;cursor:pointer}html.iframe-horizontal[_nghost-%COMP%]   .modal[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal[_ngcontent-%COMP%]{height:100vh;display:flex;align-items:center}html.iframe-horizontal[_nghost-%COMP%]   .modal__content[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal__content[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;height:180px;padding-top:0}html.iframe-horizontal[_nghost-%COMP%]   .modal__body[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal__body[_ngcontent-%COMP%]{margin-right:80px;height:100%;display:flex;align-items:center}html.iframe-horizontal[_nghost-%COMP%]   .modal__body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal__body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.5)}html.iframe-horizontal[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;font-size:18px;margin:0 0 20px}html.iframe-horizontal[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]     app-rubic-button button, html.iframe-horizontal   [_nghost-%COMP%]   .modal[_ngcontent-%COMP%]     app-rubic-button button{width:150px;float:left}",
          ],
          changeDetection: 0,
        }));
      class _t {
        constructor(t, n) {
          (this.swapFormService = t),
            (this.iframeService = n),
            (this.rateDirection = "from"),
            (this.isIframe = this.iframeService.isIframe);
        }
        ngOnInit() {
          this.tokensRate$ = (0, $.a)([
            this.swapFormService.inputValueDistinct$,
            this.swapFormService.outputValueDistinct$,
          ]).pipe(
            (0, v.U)(([t, n]) => {
              const { fromAmount: i, fromAsset: a, toToken: s } = t,
                { toAmount: c } = n;
              return c?.gt(0) && i?.gt(0) && a && s
                ? {
                    from: { amount: i.dividedBy(c), symbol: a.symbol },
                    to: { amount: c.dividedBy(i), symbol: s.symbol },
                  }
                : null;
            })
          );
        }
        onChangeDirection() {
          this.rateDirection = "from" === this.rateDirection ? "to" : "from";
        }
      }
      (_t.ɵfac = function (t) {
        return new (t || _t)(
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(W.b)
        );
      }),
        (_t.ɵcmp = e.ɵɵdefineComponent({
          type: _t,
          selectors: [["app-tokens-rate"]],
          decls: 2,
          vars: 3,
          consts: [
            ["class", "tokens-rate", 4, "ngIf"],
            [1, "tokens-rate"],
            ["class", "tokens-rate__amounts", 4, "ngIf"],
            [
              "inlineSVG",
              "assets/images/swaps/icons/rate-direction-button.svg",
              1,
              "tokens-rate__direction-button",
              3,
              "click",
            ],
            [1, "tokens-rate__amounts"],
            [4, "ngLet"],
            [4, "ngIf"],
            [
              "tuiHintMode",
              "onDark",
              "tuiHintDirection",
              "bottom-right",
              3,
              "tuiHint",
              "tuiHintShowDelay",
              "tuiHintHideDelay",
              4,
              "ngIf",
            ],
            [
              "tuiHintMode",
              "onDark",
              "tuiHintDirection",
              "bottom-right",
              3,
              "tuiHint",
              "tuiHintShowDelay",
              "tuiHintHideDelay",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Ms, 4, 2, "div", 0), e.ɵɵpipe(1, "async")),
              2 & t && e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(1, 1, n.tokensRate$));
          },
          dependencies: [m.O5, B.e, R.D, G.d$, m.Ov, Ce.N, Te.f],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.tokens-rate[_ngcontent-%COMP%]{display:flex;grid-gap:8px;justify-content:end}.tokens-rate__amounts[_ngcontent-%COMP%]{overflow:hidden;color:var(--secondary-text);font-size:14px;line-height:120%;letter-spacing:.08em;white-space:nowrap}.tokens-rate__direction-button[_ngcontent-%COMP%]{display:flex;align-items:center;width:15px;cursor:pointer}.tokens-rate__direction-button[_ngcontent-%COMP%]     svg path{fill:var(--secondary-text)}@media (max-width: 420px){.tokens-rate[_ngcontent-%COMP%]{justify-content:start}}",
          ],
          changeDetection: 0,
        }));
      var Is = l(35684);
      function $i(r) {
        return r.toBlockchain
          ? (function Ns(r, t) {
              const n = o.BlockchainsInfo.getChainType(t);
              return (function () {
                var i = (0, T.Z)(function* (a) {
                  const s = a.value;
                  if ("" === s) return null;
                  const c = yield o.Web3Pure[n].isAddressCorrect(s);
                  if (n && !c) {
                    let p;
                    try {
                      p = o.BlockchainsInfo.getChainType(r);
                    } catch {}
                    if (s || p !== n) return { wrongAddress: s };
                  }
                  return n || s?.length ? null : { wrongAddress: s };
                });
                return function (a) {
                  return i.apply(this, arguments);
                };
              })();
            })(r.fromAssetType, r.toBlockchain)
          : () => null;
      }
      var Rs = l(92718);
      const Bs = function (r) {
        return { network: r };
      };
      function Fs(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 6)(1, "label", 7),
            e.ɵɵtext(2, "Wallet address in target network"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(3, "div", 8),
            e.ɵɵpipe(4, "translate"),
            e.ɵɵpipe(5, "async"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
              "tuiHint",
              e.ɵɵpipeBind2(
                4,
                2,
                "crossChainPage.targetAddress.hint",
                e.ɵɵpureFunction1(7, Bs, e.ɵɵpipeBind1(5, 5, n.toBlockchain$))
              )
            );
        }
      }
      function Ds(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "tui-input", 9),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(),
            i = e.ɵɵreference(5),
            a = e.ɵɵreference(7);
          e.ɵɵproperty(
            "tuiTextfieldCustomContent",
            n.address.value ? (n.address.valid ? i : a) : ""
          )("formControl", n.address)("tuiTextfieldLabelOutside", !0)(
            "pseudoFocused",
            n.address.invalid
          )("pseudoInvalid", n.address.invalid)(
            "tuiTextfieldCleaner",
            !!n.address.value
          ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 7, "crossChainPage.targetAddress.placeholder"),
              " "
            );
        }
      }
      function Ls(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "tui-input", 10),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(),
            i = e.ɵɵreference(5),
            a = e.ɵɵreference(7);
          e.ɵɵproperty(
            "tuiTextfieldCustomContent",
            n.address.value ? (n.address.valid ? i : a) : ""
          )("formControl", n.address)("tuiTextfieldLabelOutside", !0)(
            "pseudoFocused",
            n.address.invalid
          )("pseudoInvalid", n.address.invalid)(
            "tuiTextfieldCleaner",
            !!n.address.value
          ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(2, 7, "crossChainPage.targetAddress.placeholder")
            );
        }
      }
      function Hs(r, t) {
        1 & r && e.ɵɵelement(0, "div", 11),
          2 & r &&
            e.ɵɵproperty(
              "inlineSVG",
              "assets/images/icons/forms/success-input.svg"
            );
      }
      function $s(r, t) {
        1 & r && e.ɵɵelement(0, "div", 11),
          2 & r &&
            e.ɵɵproperty(
              "inlineSVG",
              "assets/images/icons/forms/error-input.svg"
            );
      }
      class Lt {
        constructor(t, n, i, a) {
          (this.targetNetworkAddressService = t),
            (this.swapFormService = n),
            (this.window = i),
            (this.destroy$ = a),
            (this.address = new h.FormControl(
              this.targetNetworkAddressService.address,
              { asyncValidators: [$i(this.swapFormService.inputValue)] }
            )),
            (this.toBlockchain$ = this.swapFormService.toBlockchain$);
        }
        ngOnInit() {
          this.subscribeOnTargetAddress(), this.subscribeOnFormValues();
        }
        subscribeOnFormValues() {
          this.swapFormService.inputValue$
            .pipe(
              (0, Is.T)(1),
              (0, ye.b)((t) => {
                this.address.setAsyncValidators($i(t));
              }),
              (0, re.h)(
                (t) => !(0, J.kK)(t.fromAsset) && !(0, J.kK)(t.toToken)
              ),
              (0, le.x)(
                (t, n) =>
                  (0, wi.l)(t.fromAsset, n.fromAsset) &&
                  (0, J.tb)(t.toToken, n.toToken)
              ),
              (0, O.R)(this.destroy$)
            )
            .subscribe(() => {
              this.address.patchValue(null);
            });
        }
        subscribeOnTargetAddress() {
          this.address.valueChanges
            .pipe(
              (0, Rs.V)(this.address.statusChanges),
              (0, dt.b)(10),
              (0, O.R)(this.destroy$)
            )
            .subscribe(([t, n]) => {
              this.targetNetworkAddressService.setIsAddressValid("VALID" === n),
                this.targetNetworkAddressService.setAddress(
                  "VALID" === n ? t : null
                );
            });
        }
      }
      (Lt.ɵfac = function (t) {
        return new (t || Lt)(
          e.ɵɵdirectiveInject(oe),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(we.m9),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (Lt.ɵcmp = e.ɵɵdefineComponent({
          type: Lt,
          selectors: [["app-target-network-address"]],
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 8,
          vars: 0,
          consts: [
            [1, "network-container"],
            ["class", "network-container__row", 4, "noFrame"],
            [
              "tuiTextfieldSize",
              "m",
              3,
              "tuiTextfieldCustomContent",
              "formControl",
              "tuiTextfieldLabelOutside",
              "pseudoFocused",
              "pseudoInvalid",
              "tuiTextfieldCleaner",
              4,
              "noFrame",
            ],
            [
              "class",
              "network-container__iframe-input",
              "tuiTextfieldSize",
              "s",
              3,
              "tuiTextfieldCustomContent",
              "formControl",
              "tuiTextfieldLabelOutside",
              "pseudoFocused",
              "pseudoInvalid",
              "tuiTextfieldCleaner",
              4,
              "onlyFrame",
            ],
            ["success", ""],
            ["error", ""],
            [1, "network-container__row"],
            [1, "network-container__label"],
            [
              "tuiHintMode",
              "onDark",
              1,
              "network-container__hint",
              3,
              "inlineSVG",
              "tuiHint",
            ],
            [
              "tuiTextfieldSize",
              "m",
              3,
              "tuiTextfieldCustomContent",
              "formControl",
              "tuiTextfieldLabelOutside",
              "pseudoFocused",
              "pseudoInvalid",
              "tuiTextfieldCleaner",
            ],
            [
              "tuiTextfieldSize",
              "s",
              1,
              "network-container__iframe-input",
              3,
              "tuiTextfieldCustomContent",
              "formControl",
              "tuiTextfieldLabelOutside",
              "pseudoFocused",
              "pseudoInvalid",
              "tuiTextfieldCleaner",
            ],
            [1, "network-container__input-status-icon", 3, "inlineSVG"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0),
              e.ɵɵtemplate(1, Fs, 6, 9, "div", 1),
              e.ɵɵtemplate(2, Ds, 3, 9, "tui-input", 2),
              e.ɵɵtemplate(3, Ls, 3, 9, "tui-input", 3),
              e.ɵɵtemplate(
                4,
                Hs,
                1,
                1,
                "ng-template",
                null,
                4,
                e.ɵɵtemplateRefExtractor
              ),
              e.ɵɵtemplate(
                6,
                $s,
                1,
                1,
                "ng-template",
                null,
                5,
                e.ɵɵtemplateRefExtractor
              ),
              e.ɵɵelementEnd());
          },
          dependencies: [
            de.a,
            Fe.T,
            R.D,
            G.d$,
            Ke.K3,
            Ke.wU,
            Y.be,
            Y.B7,
            Y.xT,
            Y.sz,
            h.NgControlStatus,
            h.FormControlDirective,
            m.Ov,
            E.X$,
          ],
          styles: [
            "[_nghost-%COMP%]{display:block;margin-top:20px}html.iframe-vertical   [_nghost-%COMP%]{position:absolute;top:110px;right:0}html.iframe-horizontal   [_nghost-%COMP%]{position:absolute;top:43px;right:-195px}[_nghost-%COMP%]   tui-input[_ngcontent-%COMP%]     input{padding:0}[_nghost-%COMP%]     .network-container__input-status-icon, [_nghost-%COMP%]     .network-container__input-clipboard-icon{width:26px;height:26px}[_nghost-%COMP%]     .network-container__input-clipboard-icon{cursor:pointer;pointer-events:all}[_nghost-%COMP%]     .network-container__iframe-input{width:182px}[_nghost-%COMP%]     .network-container tui-wrapper[data-appearance=textfield]{--tui-base-01: transparent;border-radius:50px;box-shadow:none}html.iframe   [_nghost-%COMP%]     .network-container tui-wrapper[data-appearance=textfield]{--tui-base-01: var(--primary-background);border-radius:10px;box-shadow:none}html.iframe   [_nghost-%COMP%]     .network-container tui-wrapper[data-appearance=textfield]:after{border:none}[_nghost-%COMP%]     .network-container tui-wrapper[data-appearance=textfield]:after{border:1px solid var(--transparent-line)}[_nghost-%COMP%]     .network-container tui-wrapper[data-appearance=textfield] input{border-left-width:30px!important}html.iframe   [_nghost-%COMP%]     .network-container tui-wrapper[data-appearance=textfield] input{padding-right:0!important;border-left-width:0!important}[_nghost-%COMP%]     .network-container tui-wrapper[data-appearance=textfield] .content{padding-left:33px!important}html.iframe   [_nghost-%COMP%]     .network-container tui-wrapper[data-appearance=textfield] .content{padding:0 0 0 var(--tui-padding-s)!important}[_nghost-%COMP%]     .network-container tui-wrapper[data-appearance=textfield] .placeholder{font-size:14px}[_nghost-%COMP%]     .network-container__row{display:flex;align-items:center;margin-bottom:10px}[_nghost-%COMP%]     .network-container__hint{display:flex;margin-left:10px;cursor:pointer}[_nghost-%COMP%]     .network-container__hint   svg{width:15px;height:15px}[_nghost-%COMP%]     .network-container__hint   svg path{fill:var(--secondary-text)}",
          ],
          changeDetection: 0,
        }));
      var y = (() => {
          return (
            ((r = y || (y = {})).WRONG_BLOCKCHAIN = "Wrong user network"),
            (r.MULTICHAIN_WALLET = "Multichain wallets are not supported"),
            (r.WRONG_WALLET = "Wrong wallet"),
            (r.INVALID_TARGET_ADDRESS = "Invalid target network address"),
            (r.WRONG_SOURCE_NETWORK =
              "The swaps from the Bitcoin network are currently not supported"),
            (r.NO_AMOUNT = "From amount was not entered"),
            (r.INSUFFICIENT_FUNDS = "Insufficient balance"),
            (r.LESS_THAN_MINIMUM = "Entered amount less than minimum"),
            (r.MORE_THAN_MAXIMUM = "Entered amount more than maximum"),
            (r.SOL_SWAP = "Wrap SOL firstly"),
            (r.SOLANA_UNAVAILABLE = "Solana in unavailable"),
            (r.NO_SELECTED_TOKEN = "Select token"),
            y
          );
          var r;
        })(),
        Vs = l(13784),
        js = l(54511);
      class ve {
        constructor(t, n, i, a, s, c, p, d, _, f, x) {
          (this.swapFormService = t),
            (this.swapTypeService = n),
            (this.queryParamsService = i),
            (this.withRoundPipe = a),
            (this.translateService = s),
            (this.targetNetworkAddressService = c),
            (this.walletConnectorService = p),
            (this.authService = d),
            (this.iframeService = _),
            (this.settingsService = f),
            (this.ngZone = x),
            (this._errorBody$ = new w.X(void 0)),
            (this._errorLoading$ = new w.X(!1)),
            (this.errorLoading$ = this._errorLoading$.asObservable()),
            (this.error$ = (0, $.a)([
              this._errorBody$,
              this._errorLoading$,
            ]).pipe((0, v.U)(([P, S]) => ({ ...P, loading: S })))),
            (this.errorType = Object.values(y).reduce(
              (P, S) => ({ ...P, [S]: !1 }),
              {}
            )),
            this.subscribeOnSwapForm(),
            this.subscribeOnSwapMode(),
            this.subscribeOnWalletNetwork(),
            this.subscribeOnAuth(),
            this.subscribeOnTargetNetworkAddress();
        }
        subscribeOnSwapForm() {
          this.swapFormService.inputValue$.subscribe(() => {
            this.checkAmounts(),
              this.checkWalletSupportsFromBlockchain(),
              this.checkSelectedToken(),
              this.checkUserBlockchain(),
              this.checkUserBalance(),
              this.updateError();
          }),
            this.swapFormService.outputValue$.subscribe(() => {
              this.checkAmounts(), this.updateError();
            });
        }
        subscribeOnSwapMode() {
          this.swapTypeService.swapMode$.subscribe((t) => {
            t === b.V.INSTANT_TRADE &&
              (this.setMinAmountError(!1), this.setMaxAmountError(!1));
          });
        }
        subscribeOnWalletNetwork() {
          this.walletConnectorService.networkChange$.subscribe(() => {
            this.checkUserBlockchain(), this.updateError();
          });
        }
        subscribeOnAuth() {
          this.authService.currentUser$.subscribe(() => {
            this.checkWalletSupportsFromBlockchain(),
              this.checkUserBalance(),
              this.updateError();
          });
        }
        subscribeOnTargetNetworkAddress() {
          (0, $.a)([
            this.targetNetworkAddressService.isAddressValid$,
            this.swapTypeService.swapMode$,
            this.settingsService.instantTradeValueChanges.pipe(
              (0, Ee.O)(this.settingsService.instantTradeValue)
            ),
            this.settingsService.crossChainRoutingValueChanges.pipe(
              (0, Ee.O)(this.settingsService.crossChainRoutingValue)
            ),
          ]).subscribe(([t, n, i, a]) => {
            let s = !1;
            switch (n) {
              case b.V.INSTANT_TRADE:
                s = i.showReceiverAddress;
                break;
              case b.V.CROSS_CHAIN_ROUTING:
                s = a.showReceiverAddress;
            }
            (this.errorType[y.INVALID_TARGET_ADDRESS] = s && !t),
              this.updateError();
          });
        }
        checkAmounts() {
          const { fromAmount: t } = this.swapFormService.inputValue,
            { toAmount: n } = this.swapFormService.outputValue;
          this.errorType[y.NO_AMOUNT] =
            !t?.gt(0) ||
            (this.swapTypeService.getSwapProviderType() === b.V.LIMIT_ORDER &&
              !n?.gt(0));
        }
        checkWalletSupportsFromBlockchain() {
          var t = this;
          return (0, T.Z)(function* () {
            const n = t.swapFormService.inputValue.fromAsset,
              i = yield o.EvmWeb3Pure.isAddressCorrect(
                t.authService.userAddress
              );
            if (!(0, pe.$v)(n))
              return n
                ? void (t.errorType[y.WRONG_WALLET] =
                    Boolean(t.authService.userAddress) && !i)
                : void (t.errorType[y.WRONG_WALLET] = !1);
            const a = o.BlockchainsInfo.getChainType(n.blockchain),
              s = o.Web3Pure[a].isAddressCorrect(t.authService.userAddress);
            t.errorType[y.WRONG_WALLET] =
              Boolean(t.authService.userAddress) &&
              (a === o.CHAIN_TYPE.EVM || a === o.CHAIN_TYPE.TRON) &&
              !s;
          })();
        }
        checkUserBalance() {
          if (this.swapTypeService.getSwapProviderType() === b.V.LIMIT_ORDER)
            return void (this.errorType[y.INSUFFICIENT_FUNDS] = !1);
          const { fromAsset: t, fromAmount: n } =
            this.swapFormService.inputValue;
          if (!(0, pe.Vr)(t))
            return void (this.errorType[y.INSUFFICIENT_FUNDS] = !1);
          let i;
          try {
            i = o.BlockchainsInfo.getChainType(t.blockchain);
          } catch {}
          t &&
          this.authService.userAddress &&
          i &&
          i === this.authService.userChainType
            ? t.amount?.isFinite()
              ? (this._errorLoading$.next(!1),
                (this.errorType[y.INSUFFICIENT_FUNDS] = t.amount.lt(n)))
              : this._errorLoading$.next(!0)
            : (this.errorType[y.INSUFFICIENT_FUNDS] = !1);
        }
        checkSelectedToken() {
          this.errorType[y.NO_SELECTED_TOKEN] =
            (0, J.kK)(this.swapFormService.inputValue?.fromAsset) &&
            (0, J.kK)(this.queryParamsService.queryParams.from);
        }
        checkUserBlockchain() {
          const { fromAsset: t } = this.swapFormService.inputValue,
            n = this.walletConnectorService.network;
          if (n && (0, pe.$v)(t)) {
            let i;
            try {
              i = o.BlockchainsInfo.getChainType(t.blockchain);
            } catch {}
            (this.errorType[y.WRONG_BLOCKCHAIN] =
              i === o.CHAIN_TYPE.EVM && t.blockchain !== n),
              (this.errorType[y.WRONG_SOURCE_NETWORK] = gi.includes(
                t.blockchain
              ));
          } else this.errorType[y.WRONG_BLOCKCHAIN] = !1;
        }
        updateError() {
          this.translateSub$?.unsubscribe();
          let n,
            t = null;
          const i = this.errorType,
            { fromAssetType: a } = this.swapFormService.inputValue,
            s = o.BlockchainsInfo.isBlockchainName(a) ? We.h[a] : "EVM";
          switch (!0) {
            case i[y.WRONG_SOURCE_NETWORK]:
              (t = y.WRONG_SOURCE_NETWORK),
                (n = {
                  key: "wrongSourceNetwork",
                  interpolateParams: { network: s },
                });
              break;
            case i[y.SOLANA_UNAVAILABLE]:
              (t = y.SOLANA_UNAVAILABLE),
                (n =
                  "horizontal" === this.iframeService.iframeAppearance
                    ? { key: "Unavailable" }
                    : {
                        key: "Solana is temporarily unavailable for Multi-Chain swaps.",
                      });
              break;
            case i[y.WRONG_WALLET]:
              (t = y.WRONG_WALLET),
                (n = {
                  key: "wrongWallet",
                  interpolateParams: { network: s },
                });
              break;
            case i[y.MULTICHAIN_WALLET]:
              (t = y.MULTICHAIN_WALLET),
                (n = { key: "multichainWallet" });
              break;
            case i[y.NO_SELECTED_TOKEN]:
              (t = y.NO_SELECTED_TOKEN),
                (n = { key: "Select Token" });
              break;
            case i[y.WRONG_BLOCKCHAIN]:
              (t = y.WRONG_BLOCKCHAIN),
                (n = {
                  key: "chooseNetworkWallet",
                  interpolateParams: { blockchain: s },
                });
              break;
            case i[y.NO_AMOUNT]:
              (t = y.NO_AMOUNT), (n = { key: "noEnteredAmount" });
              break;
            case i[y.LESS_THAN_MINIMUM]:
              (t = y.LESS_THAN_MINIMUM),
                (n = {
                  key: "Minimum Amount",
                  interpolateParams: {
                    amount: this.minAmount,
                    token: this.minAmountTokenSymbol,
                  },
                });
              break;
            case i[y.MORE_THAN_MAXIMUM]:
              (t = y.MORE_THAN_MAXIMUM),
                (n = {
                  key: "maximumAmount",
                  interpolateParams: {
                    amount: this.maxAmount,
                    token: this.maxAmountTokenSymbol,
                  },
                });
              break;
            case i[y.INSUFFICIENT_FUNDS]:
              (t = y.INSUFFICIENT_FUNDS),
                (n = { key: "InsufficientBalance" });
              break;
            case i[y.INVALID_TARGET_ADDRESS]:
              (t = y.INVALID_TARGET_ADDRESS),
                (n = { key: "invalidTargetAddress" });
              break;
            case i[y.SOL_SWAP]:
              (t = y.SOL_SWAP), (n = { key: "solSwap" });
          }
          const c = Object.values(i).filter(Boolean).length;
          c && !n && (n = { key: "unknown" }),
            c || n
              ? (this.translateSub$ = this.translateService
                  .stream(n.key, n.interpolateParams)
                  .subscribe((p) => {
                    this.ngZone.run(() => {
                      this._errorBody$.next({ type: t, text: p });
                    });
                  }))
              : this.ngZone.run(() => {
                  this._errorBody$.next({ type: null, text: "" });
                });
        }
        setMinAmountError(t) {
          if (t) {
            const n = "object" == typeof t && "amount" in t ? t.amount : t;
            (this.minAmount =
              "number" == typeof n
                ? n.toString()
                : this.withRoundPipe.transform(
                    n.toFormat(Ir.f),
                    "toClosestValue"
                  )),
              (this.minAmountTokenSymbol =
                "object" == typeof t && "symbol" in t
                  ? t.symbol
                  : this.swapFormService.inputValue.fromAsset.symbol),
              (this.errorType[y.LESS_THAN_MINIMUM] = !0);
          } else this.errorType[y.LESS_THAN_MINIMUM] = !1;
          this.updateError();
        }
        setMaxAmountError(t) {
          if (t) {
            const n = "object" == typeof t && "amount" in t ? t.amount : t;
            (this.maxAmount =
              "number" == typeof n
                ? n.toString()
                : this.withRoundPipe.transform(
                    n.toFormat(Ir.f),
                    "toClosestValue",
                    { roundingMode: M.Z.ROUND_HALF_UP }
                  )),
              (this.maxAmountTokenSymbol =
                "object" == typeof t && "symbol" in t
                  ? t.symbol
                  : this.swapFormService.inputValue.fromAsset.symbol),
              (this.errorType[y.MORE_THAN_MAXIMUM] = !0);
          } else this.errorType[y.MORE_THAN_MAXIMUM] = !1;
          this.updateError();
        }
        setRubicError(t) {
          t
            ? t instanceof Vs.Z
              ? this.setMinAmountError({
                  amount: t.amount,
                  symbol: t.tokenSymbol,
                })
              : t instanceof js.Z &&
                this.setMaxAmountError({
                  amount: t.amount,
                  symbol: t.tokenSymbol,
                })
            : ((this.errorType[y.MORE_THAN_MAXIMUM] = !1),
              (this.errorType[y.LESS_THAN_MINIMUM] = !1),
              this.updateError());
        }
      }
      (ve.ɵfac = function (t) {
        return new (t || ve)(
          e.ɵɵinject(A.q),
          e.ɵɵinject(ce.H),
          e.ɵɵinject(Be.E),
          e.ɵɵinject(Te.f),
          e.ɵɵinject(E.sK),
          e.ɵɵinject(oe),
          e.ɵɵinject(Nt.j),
          e.ɵɵinject(j.e),
          e.ɵɵinject(W.b),
          e.ɵɵinject(q),
          e.ɵɵinject(e.NgZone)
        );
      }),
        (ve.ɵprov = e.ɵɵdefineInjectable({ token: ve, factory: ve.ɵfac }));
      class be {
        constructor() {
          (this._isButtonHovered$ = new w.X(!1)),
            (this.isButtonHovered$ = this._isButtonHovered$.asObservable());
        }
        set isButtonHovered(t) {
          this._isButtonHovered$.next(t);
        }
      }
      (be.ɵfac = function (t) {
        return new (t || be)();
      }),
        (be.ɵprov = e.ɵɵdefineInjectable({ token: be, factory: be.ɵfac }));
      class me {
        constructor(t, n) {
          (this.swapButtonContainerErrorsService = t),
            (this.tradeService = n),
            (this.idPrefix = ""),
            (this._tradeStatus$ = new w.X(void 0)),
            (this.tradeStatus$ = this._tradeStatus$.asObservable()),
            (this.isUpdateRateStatus$ = this._tradeStatus$.pipe(
              (0, v.U)((i) => i === u.OLD_TRADE_DATA)
            )),
            (0, $.a)([
              this.isUpdateRateStatus$,
              this.swapButtonContainerErrorsService.error$,
            ])
              .pipe((0, re.h)(([i, a]) => !i && a.text && !a.loading))
              .subscribe(() => {
                this.tradeService.isButtonHovered = !1;
              });
        }
        get tradeStatus() {
          return this._tradeStatus$.getValue();
        }
        set tradeStatus(t) {
          this._tradeStatus$.next(t);
        }
      }
      (me.ɵfac = function (t) {
        return new (t || me)(e.ɵɵinject(ve), e.ɵɵinject(be));
      }),
        (me.ɵprov = e.ɵɵdefineInjectable({ token: me, factory: me.ɵfac }));
      class qe {
        constructor(t, n, i) {
          (this.swapButtonContainerService = t),
            (this.swapButtonContainerErrorsService = n),
            (this.sdkService = i),
            (this.loading$ = (0, $.a)([
              this.swapButtonContainerErrorsService.errorLoading$,
              this.swapButtonContainerService.tradeStatus$,
              this.sdkService.sdkLoading$,
            ]).pipe(
              (0, v.U)(
                ([a, s, c]) =>
                  a || s === u.LOADING || s === u.SWAP_IN_PROGRESS || c
              )
            )),
            (this.disabled$ = (0, $.a)([
              this.swapButtonContainerService.tradeStatus$,
              this.loading$,
            ]).pipe((0, v.U)(([a, s]) => a !== u.READY_TO_SWAP || s)));
        }
      }
      (qe.ɵfac = function (t) {
        return new (t || qe)(e.ɵɵinject(me), e.ɵɵinject(ve), e.ɵɵinject(it.w));
      }),
        (qe.ɵprov = e.ɵɵdefineInjectable({ token: qe, factory: qe.ɵfac }));
      class ut {
        constructor(t, n, i, a, s) {
          (this.swapButtonContainerService = t),
            (this.swapButtonService = n),
            (this.cdr = i),
            (this.tradeService = a),
            (this.destroy$ = s),
            (this.onClick = new e.EventEmitter()),
            (this.idPrefix = this.swapButtonContainerService.idPrefix),
            (this.loading$ = this.swapButtonService.loading$),
            (this.disabled$ = this.swapButtonService.disabled$);
        }
        ngOnInit() {
          this.disabled$
            .pipe((0, O.R)(this.destroy$))
            .subscribe(() => this.cdr.detectChanges());
        }
        onSwapClick() {
          this.onClick.emit();
        }
        onHoveredChange(t) {
          this.tradeService.isButtonHovered = t;
        }
      }
      function zs(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-rubic-button", 1),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onLogin());
            }),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "translate"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = t.ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("id", i.idPrefix + "connect-wallet")("loading", n),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(3, 3, "Connect Wallet"),
              " "
            );
        }
      }
      (ut.ɵfac = function (t) {
        return new (t || ut)(
          e.ɵɵdirectiveInject(me),
          e.ɵɵdirectiveInject(qe),
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(be),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (ut.ɵcmp = e.ɵɵdefineComponent({
          type: ut,
          selectors: [["app-swap-button"]],
          inputs: { buttonText: "buttonText" },
          outputs: { onClick: "onClick" },
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 4,
          vars: 9,
          consts: [
            [
              "appearance",
              "primary",
              3,
              "loading",
              "disabled",
              "onClick",
              "onHoveredChange",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "app-rubic-button", 0),
              e.ɵɵlistener("onClick", function () {
                return n.onSwapClick();
              })("onHoveredChange", function (a) {
                return n.onHoveredChange(a);
              }),
              e.ɵɵpipe(1, "async"),
              e.ɵɵpipe(2, "async"),
              e.ɵɵtext(3),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵclassMap(n.idPrefix + "button-swap"),
                e.ɵɵproperty("loading", e.ɵɵpipeBind1(1, 5, n.loading$))(
                  "disabled",
                  e.ɵɵpipeBind1(2, 7, n.disabled$)
                ),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate1(" ", n.buttonText, "\n"));
          },
          dependencies: [ie.j, m.Ov],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.button-swap_warning-medium[_ngcontent-%COMP%]     [tuiButton]._pressed{background-color:#d6bd27}.button-swap_warning-medium[_ngcontent-%COMP%]     tui-wrapper[data-appearance=secondary]{background-color:#d6bd27}.button-swap_warning-medium[_ngcontent-%COMP%]     tui-wrapper[data-appearance=secondary][data-state=pressed]{background-color:transparent!important}.button-swap_warning-high[_ngcontent-%COMP%]     [tuiButton]._pressed{background-color:#f5474a}.button-swap_warning-high[_ngcontent-%COMP%]     [tuiButton]._disabled tui-wrapper{color:#fff;background-color:#f5474a;opacity:.5!important}.button-swap_warning-high[_ngcontent-%COMP%]     tui-wrapper[data-appearance=secondary]{background-color:#f5474a}.button-swap_warning-high[_ngcontent-%COMP%]     tui-wrapper[data-appearance=secondary][data-state=pressed]{background-color:transparent!important}html.iframe-horizontal[_nghost-%COMP%]     button, html.iframe-horizontal   [_nghost-%COMP%]     button{font-size:15px!important}",
          ],
          changeDetection: 0,
        }));
      class Sn {
        constructor(t, n, i, a) {
          (this.swapButtonContainerService = t),
            (this.walletsModalService = n),
            (this.authService = i),
            (this.iframeService = a),
            (this.idPrefix = this.swapButtonContainerService.idPrefix),
            (this.isIframe = this.iframeService.isIframe),
            (this.user$ = this.authService.currentUser$);
        }
        onLogin() {
          this.walletsModalService.open().subscribe();
        }
      }
      (Sn.ɵfac = function (t) {
        return new (t || Sn)(
          e.ɵɵdirectiveInject(me),
          e.ɵɵdirectiveInject(Oi.u),
          e.ɵɵdirectiveInject(j.e),
          e.ɵɵdirectiveInject(W.b)
        );
      }),
        (Sn.ɵcmp = e.ɵɵdefineComponent({
          type: Sn,
          selectors: [["app-connect-wallet-button"]],
          decls: 2,
          vars: 3,
          consts: [
            [4, "ngLet"],
            ["appearance", "primary", 3, "id", "loading", "onClick"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, zs, 4, 5, "ng-container", 0),
              e.ɵɵpipe(1, "async")),
              2 & t &&
                e.ɵɵproperty(
                  "ngLet",
                  !n.isIframe && void 0 === e.ɵɵpipeBind1(1, 1, n.user$)
                );
          },
          dependencies: [ie.j, B.e, m.Ov, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}",
          ],
          changeDetection: 0,
        }));
      class Tn {
        constructor(t) {
          (this.tradeService = t), (this.onClick = new e.EventEmitter());
        }
        onHoveredChange(t) {
          this.tradeService.isButtonHovered = t;
        }
      }
      (Tn.ɵfac = function (t) {
        return new (t || Tn)(e.ɵɵdirectiveInject(be));
      }),
        (Tn.ɵcmp = e.ɵɵdefineComponent({
          type: Tn,
          selectors: [["app-update-rate-button"]],
          outputs: { onClick: "onClick" },
          decls: 3,
          vars: 4,
          consts: [["appearance", "primary", 3, "onClick", "onHoveredChange"]],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "app-rubic-button", 0),
              e.ɵɵlistener("onClick", function () {
                return n.onClick.emit();
              })("onHoveredChange", function (a) {
                return n.onHoveredChange(a);
              }),
              e.ɵɵtext(1),
              e.ɵɵpipe(2, "translate"),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵattribute("rate-is-updated", !0),
                e.ɵɵadvance(1),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind1(2, 2, "tradePage.rateIsUpdated"),
                  "\n"
                ));
          },
          dependencies: [ie.j, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}html.iframe[_nghost-%COMP%]   app-rubic-button[rate-is-updated=true][_ngcontent-%COMP%]     button span, html.iframe   [_nghost-%COMP%]   app-rubic-button[rate-is-updated=true][_ngcontent-%COMP%]     button span{font-size:13px;line-height:16px}",
          ],
          changeDetection: 0,
        }));
      class gt {
        constructor(t, n) {
          (this.swapButtonContainerService = t),
            (this.swapButtonContainerErrorsService = n),
            (this.approveButtonLoading$ = (0, $.a)([
              this.swapButtonContainerErrorsService.errorLoading$,
              this.swapButtonContainerService.tradeStatus$,
            ]).pipe(
              (0, v.U)(
                ([i, a]) => i || a === u.LOADING || a === u.APPROVE_IN_PROGRESS
              )
            )),
            (this.approveButtonDisabled$ =
              this.swapButtonContainerService.tradeStatus$.pipe(
                (0, v.U)((i) => i !== u.READY_TO_APPROVE)
              ));
        }
      }
      (gt.ɵfac = function (t) {
        return new (t || gt)(e.ɵɵinject(me), e.ɵɵinject(ve));
      }),
        (gt.ɵprov = e.ɵɵdefineInjectable({ token: gt, factory: gt.ɵfac }));
      class On {
        constructor(t, n, i) {
          (this.swapButtonContainerService = t),
            (this.approveSwapButtonService = n),
            (this.tradeService = i),
            (this.onClick = new e.EventEmitter()),
            (this.idPrefix = this.swapButtonContainerService.idPrefix),
            (this.approveButtonLoading$ =
              this.approveSwapButtonService.approveButtonLoading$),
            (this.approveButtonDisabled$ =
              this.approveSwapButtonService.approveButtonDisabled$);
        }
        onHoveredChange(t) {
          this.tradeService.isButtonHovered = t;
        }
      }
      function Ys(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 2)(2, "app-approve-button", 3),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onApproveClick.emit());
            }),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "app-swap-button", 4),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onSwapClick.emit());
            }),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(3), e.ɵɵproperty("buttonText", n.buttonText);
        }
      }
      function Ws(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-approve-button", 3),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onApproveClick.emit());
            }),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
      }
      (On.ɵfac = function (t) {
        return new (t || On)(
          e.ɵɵdirectiveInject(me),
          e.ɵɵdirectiveInject(gt),
          e.ɵɵdirectiveInject(be)
        );
      }),
        (On.ɵcmp = e.ɵɵdefineComponent({
          type: On,
          selectors: [["app-approve-button"]],
          outputs: { onClick: "onClick" },
          decls: 4,
          vars: 7,
          consts: [
            [
              "appearance",
              "primary",
              3,
              "id",
              "loading",
              "disabled",
              "onClick",
              "onHoveredChange",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "app-rubic-button", 0),
              e.ɵɵlistener("onClick", function () {
                return n.onClick.emit();
              })("onHoveredChange", function (a) {
                return n.onHoveredChange(a);
              }),
              e.ɵɵpipe(1, "async"),
              e.ɵɵpipe(2, "async"),
              e.ɵɵtext(3, " Approve\n"),
              e.ɵɵelementEnd()),
              2 & t &&
                e.ɵɵproperty("id", n.idPrefix + "approve")(
                  "loading",
                  e.ɵɵpipeBind1(1, 3, n.approveButtonLoading$)
                )("disabled", e.ɵɵpipeBind1(2, 5, n.approveButtonDisabled$));
          },
          dependencies: [ie.j, m.Ov],
          changeDetection: 0,
        }));
      class Pn {
        constructor() {
          (this.onApproveClick = new e.EventEmitter()),
            (this.onSwapClick = new e.EventEmitter());
        }
      }
      (Pn.ɵfac = function (t) {
        return new (t || Pn)();
      }),
        (Pn.ɵcmp = e.ɵɵdefineComponent({
          type: Pn,
          selectors: [["app-approve-swap-button"]],
          inputs: { buttonText: "buttonText" },
          outputs: {
            onApproveClick: "onApproveClick",
            onSwapClick: "onSwapClick",
          },
          decls: 2,
          vars: 0,
          consts: [
            [4, "noFrame"],
            [4, "onlyFrame"],
            [1, "buttons"],
            [3, "onClick"],
            [3, "buttonText", "onClick"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Ys, 4, 1, "ng-container", 0),
              e.ɵɵtemplate(1, Ws, 2, 0, "ng-container", 1));
          },
          dependencies: [de.a, Fe.T, ut, On],
          styles: [
            ".buttons[_ngcontent-%COMP%]{display:flex;grid-gap:20px}.buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}",
          ],
          changeDetection: 0,
        }));
      var Vi = l(234),
        Us = l(49808);
      const Gs = function (r) {
        return { networkName: r };
      };
      function Ks(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-rubic-button", 3),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.changeNetwork());
            }),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "translate"),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty("loading", n.loading)("disabled", n.loading),
            e.ɵɵattribute("error", !0),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                3,
                4,
                "switchTo",
                e.ɵɵpureFunction1(
                  9,
                  Gs,
                  e.ɵɵpipeBind1(4, 7, n.fromBlockchainLabel$)
                )
              ),
              " "
            );
        }
      }
      function Zs(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-rubic-button", 5),
            e.ɵɵpipe(2, "functionCall"),
            e.ɵɵtext(3),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3).ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("disabled", !0),
            e.ɵɵattribute("error", !0)(
              "error-min-max",
              e.ɵɵpipeBind2(2, 4, n.error.type, i.isMinMaxError)
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(" ", n.error.text, " ");
        }
      }
      function Xs(r, t) {
        if ((1 & r && e.ɵɵtemplate(0, Zs, 4, 7, "ng-container", 4), 2 & r)) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext().ngLet;
          e.ɵɵproperty("ngIf", !n || i.isMobile);
        }
      }
      function Qs(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Ks, 5, 11, "ng-container", 1),
            e.ɵɵtemplate(
              2,
              Xs,
              1,
              1,
              "ng-template",
              null,
              2,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵreference(3),
            a = e.ɵɵnextContext().ngLet;
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", n && !a.isMobile)("ngIfElse", i);
        }
      }
      function Js(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Qs, 4, 2, "ng-container", 0),
            e.ɵɵpipe(2, "functionCall"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngLet",
              e.ɵɵpipeBind3(2, 1, n.error.type, i.allowChangeNetwork, i)
            );
        }
      }
      const qs = function (r, t) {
        return { error: r, isMobile: t };
      };
      class kn {
        constructor(t, n, i, a, s, c, p) {
          (this.cdr = t),
            (this.swapButtonContainerService = n),
            (this.swapButtonContainerErrorsService = i),
            (this.headerStore = a),
            (this.walletConnectorService = s),
            (this.swapFormService = c),
            (this.sdkService = p),
            (this.error$ = this.swapButtonContainerErrorsService.error$),
            (this.isMobile$ = this.headerStore.getMobileDisplayStatus()),
            (this.loading = !1),
            (this.fromBlockchainLabel$ =
              this.swapFormService.fromBlockchain$.pipe(
                (0, v.U)((d) => We.h[d])
              ));
        }
        allowChangeNetwork(t) {
          const { fromAssetType: n } = this.swapFormService.inputValue;
          return !(
            t !== y.WRONG_BLOCKCHAIN ||
            !o.BlockchainsInfo.isEvmBlockchainName(n) ||
            (this.walletConnectorService?.provider.walletName !==
              Vi.U.METAMASK &&
              this.walletConnectorService?.provider.walletName !==
                Vi.U.WALLET_CONNECT)
          );
        }
        changeNetwork() {
          var t = this;
          return (0, T.Z)(function* () {
            const { fromAssetType: n } = t.swapFormService.inputValue,
              i = n;
            if (o.BlockchainsInfo.isEvmBlockchainName(i)) {
              t.loading = !0;
              try {
                yield t.walletConnectorService.switchChain(i),
                  yield (0, Us.n)(
                    t.sdkService.sdkLoading$.pipe((0, mi.P)((a) => !1 === a))
                  );
              } finally {
                (t.loading = !1), t.cdr.markForCheck();
              }
            }
          })();
        }
        isMinMaxError(t) {
          return t === y.LESS_THAN_MINIMUM || t === y.MORE_THAN_MAXIMUM;
        }
      }
      (kn.ɵfac = function (t) {
        return new (t || kn)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(me),
          e.ɵɵdirectiveInject(ve),
          e.ɵɵdirectiveInject(fr.N),
          e.ɵɵdirectiveInject(Nt.j),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(it.w)
        );
      }),
        (kn.ɵcmp = e.ɵɵdefineComponent({
          type: kn,
          selectors: [["app-error-button"]],
          decls: 3,
          vars: 8,
          consts: [
            [4, "ngLet"],
            [4, "ngIf", "ngIfElse"],
            ["errorInfo", ""],
            ["appearance", "primary", 3, "loading", "disabled", "onClick"],
            [4, "ngIf"],
            ["appearance", "secondary", 1, "error-button", 3, "disabled"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Js, 3, 5, "ng-container", 0),
              e.ɵɵpipe(1, "async"),
              e.ɵɵpipe(2, "async")),
              2 & t &&
                e.ɵɵproperty(
                  "ngLet",
                  e.ɵɵpureFunction2(
                    5,
                    qs,
                    e.ɵɵpipeBind1(1, 1, n.error$),
                    e.ɵɵpipeBind1(2, 3, n.isMobile$)
                  )
                );
          },
          dependencies: [m.O5, ie.j, B.e, m.Ov, E.X$, Br.g],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.error-button[_ngcontent-%COMP%]     .content{color:#00e6ff}html.iframe[_nghost-%COMP%]   app-rubic-button[error=true][_ngcontent-%COMP%]     button span, html.iframe   [_nghost-%COMP%]   app-rubic-button[error=true][_ngcontent-%COMP%]     button span{font-size:14px;line-height:1}html.iframe[_nghost-%COMP%]   app-rubic-button[error-min-max=true][_ngcontent-%COMP%]     button span, html.iframe   [_nghost-%COMP%]   app-rubic-button[error-min-max=true][_ngcontent-%COMP%]     button span{font-size:12px}",
          ],
          changeDetection: 0,
        }));
      class ht {
        constructor(t, n) {
          (this.swapButtonContainerService = t),
            (this.swapButtonContainerErrorsService = n),
            (this.buyNativeButtonLoading$ = (0, $.a)([
              this.swapButtonContainerErrorsService.errorLoading$,
              this.swapButtonContainerService.tradeStatus$,
            ]).pipe(
              (0, v.U)(
                ([i, a]) =>
                  i || a === u.LOADING || a === u.BUY_NATIVE_IN_PROGRESS
              )
            )),
            (this.buyNativeButtonDisabled$ =
              this.swapButtonContainerService.tradeStatus$.pipe(
                (0, v.U)((i) => i !== u.READY_TO_BUY_NATIVE)
              ));
        }
      }
      (ht.ɵfac = function (t) {
        return new (t || ht)(e.ɵɵinject(me), e.ɵɵinject(ve));
      }),
        (ht.ɵprov = e.ɵɵdefineInjectable({ token: ht, factory: ht.ɵfac }));
      class wn {
        constructor(t, n, i) {
          (this.onramperSwapButtonService = t),
            (this.tradeService = n),
            (this.swapFormService = i),
            (this.onClick = new e.EventEmitter()),
            (this.loading$ =
              this.onramperSwapButtonService.buyNativeButtonLoading$),
            (this.disabled$ =
              this.onramperSwapButtonService.buyNativeButtonDisabled$),
            (this.nativeSymbol$ = this.swapFormService.toBlockchain$.pipe(
              (0, v.U)((a) => o.nativeTokensList[a].symbol)
            ));
        }
        onHoveredChange(t) {
          this.tradeService.isButtonHovered = t;
        }
      }
      function ec(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-swap-button", 3),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onSwapClick.emit());
            }),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("buttonText", n.buttonText);
        }
      }
      (wn.ɵfac = function (t) {
        return new (t || wn)(
          e.ɵɵdirectiveInject(ht),
          e.ɵɵdirectiveInject(be),
          e.ɵɵdirectiveInject(A.q)
        );
      }),
        (wn.ɵcmp = e.ɵɵdefineComponent({
          type: wn,
          selectors: [["app-buy-native-button"]],
          outputs: { onClick: "onClick" },
          decls: 5,
          vars: 9,
          consts: [
            [
              "appearance",
              "primary",
              3,
              "loading",
              "disabled",
              "onClick",
              "onHoveredChange",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "app-rubic-button", 0),
              e.ɵɵlistener("onClick", function () {
                return n.onClick.emit();
              })("onHoveredChange", function (a) {
                return n.onHoveredChange(a);
              }),
              e.ɵɵpipe(1, "async"),
              e.ɵɵpipe(2, "async"),
              e.ɵɵtext(3),
              e.ɵɵpipe(4, "async"),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵproperty("loading", e.ɵɵpipeBind1(1, 3, n.loading$))(
                  "disabled",
                  e.ɵɵpipeBind1(2, 5, n.disabled$)
                ),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate1(
                  " Buy ",
                  e.ɵɵpipeBind1(4, 7, n.nativeSymbol$),
                  "\n"
                ));
          },
          dependencies: [ie.j, m.Ov],
          changeDetection: 0,
        }));
      class An {
        constructor(t) {
          (this.swapFormService = t),
            (this.onBuyNativeClick = new e.EventEmitter()),
            (this.onSwapClick = new e.EventEmitter()),
            (this.isToTokenNative$ = this.swapFormService.toToken$.pipe(
              (0, v.U)((n) => o.EvmWeb3Pure.isNativeAddress(n.address))
            ));
        }
      }
      function tc(r, t) {
        1 & r && e.ɵɵelement(0, "app-connect-wallet-button");
      }
      function nc(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-update-rate-button", 3),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.onUpdateRateClick.emit());
            }),
            e.ɵɵelementEnd();
        }
      }
      function rc(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-onramper-swap-button", 8),
            e.ɵɵlistener("onBuyNativeClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(5);
              return e.ɵɵresetView(a.onBuyNativeClick.emit());
            })("onSwapClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(5);
              return e.ɵɵresetView(a.onSwapClick.emit());
            }),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(5);
          e.ɵɵproperty("buttonText", n.buttonText);
        }
      }
      function ic(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-approve-swap-button", 10),
            e.ɵɵlistener("onApproveClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(6);
              return e.ɵɵresetView(a.onApproveClick.emit());
            })("onSwapClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(6);
              return e.ɵɵresetView(a.onSwapClick.emit());
            }),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(6);
          e.ɵɵadvance(1), e.ɵɵproperty("buttonText", n.buttonText);
        }
      }
      function oc(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-swap-button", 11),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(6);
              return e.ɵɵresetView(a.onSwapClick.emit());
            }),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(6);
          e.ɵɵproperty("buttonText", n.buttonText);
        }
      }
      function ac(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, ic, 2, 1, "ng-container", 1),
            e.ɵɵtemplate(
              2,
              oc,
              1,
              1,
              "ng-template",
              null,
              9,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵreference(3),
            i = e.ɵɵnextContext(5);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              i.withApproveButton && (!i.isIframe || i.needApprove)
            )("ngIfElse", n);
        }
      }
      function sc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, rc, 1, 1, "app-onramper-swap-button", 6),
            e.ɵɵtemplate(2, ac, 4, 2, "ng-container", 7),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(4);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.isOnramper),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !n.isOnramper);
        }
      }
      function cc(r, t) {
        1 & r && e.ɵɵelement(0, "app-error-button");
      }
      function lc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, sc, 3, 2, "ng-container", 1),
            e.ɵɵtemplate(
              2,
              cc,
              1,
              0,
              "ng-template",
              null,
              5,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵreference(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !n.text || n.loading)("ngIfElse", i);
        }
      }
      function pc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, lc, 4, 2, "ng-container", 4),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.error$));
        }
      }
      function dc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(
              1,
              nc,
              1,
              0,
              "ng-template",
              null,
              2,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵtemplate(3, pc, 3, 3, "ng-container", 1),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵreference(2),
            i = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵproperty(
              "ngIf",
              !1 === e.ɵɵpipeBind1(4, 2, i.isUpdateRateStatus$)
            )("ngIfElse", n);
        }
      }
      (An.ɵfac = function (t) {
        return new (t || An)(e.ɵɵdirectiveInject(A.q));
      }),
        (An.ɵcmp = e.ɵɵdefineComponent({
          type: An,
          selectors: [["app-onramper-swap-button"]],
          inputs: { buttonText: "buttonText" },
          outputs: {
            onBuyNativeClick: "onBuyNativeClick",
            onSwapClick: "onSwapClick",
          },
          decls: 4,
          vars: 3,
          consts: [
            [1, "buttons"],
            [3, "onClick"],
            [3, "buttonText", "onClick", 4, "ngIf"],
            [3, "buttonText", "onClick"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "app-buy-native-button", 1),
              e.ɵɵlistener("onClick", function () {
                return n.onBuyNativeClick.emit();
              }),
              e.ɵɵelementEnd(),
              e.ɵɵtemplate(2, ec, 1, 1, "app-swap-button", 2),
              e.ɵɵpipe(3, "async"),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵadvance(2),
                e.ɵɵproperty(
                  "ngIf",
                  !1 === e.ɵɵpipeBind1(3, 1, n.isToTokenNative$)
                ));
          },
          dependencies: [m.O5, ut, wn, m.Ov],
          styles: [
            ".buttons[_ngcontent-%COMP%]{display:flex;grid-gap:20px}.buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}",
          ],
          changeDetection: 0,
        }));
      class et {
        constructor(t, n, i, a, s) {
          (this.swapButtonContainerService = t),
            (this.swapButtonContainerErrorsService = n),
            (this.swapButtonService = i),
            (this.authService = a),
            (this.iframeService = s),
            (this.withApproveButton = !1),
            (this.isOnramper = !1),
            (this.nonEvmChangenow = !1),
            (this.onApproveClick = new e.EventEmitter()),
            (this.onSwapClick = new e.EventEmitter()),
            (this.onBuyNativeClick = new e.EventEmitter()),
            (this.onUpdateRateClick = new e.EventEmitter()),
            (this.user$ = this.authService.currentUser$.pipe(
              (0, v.U)((c) => c?.address)
            )),
            (this.isUpdateRateStatus$ =
              this.swapButtonContainerService.isUpdateRateStatus$),
            (this.error$ = this.swapButtonContainerErrorsService.error$),
            (this.isIframe = this.iframeService.isIframe);
        }
        set status(t) {
          this.swapButtonContainerService.tradeStatus = t;
        }
        set idPrefix(t) {
          this.swapButtonContainerService.idPrefix = t || "";
        }
        get idPrefix() {
          return this.swapButtonContainerService.idPrefix;
        }
        set error(t) {
          this.swapButtonContainerErrorsService.setRubicError(t);
        }
        set minAmount(t) {
          this.swapButtonContainerErrorsService.setMinAmountError(t);
        }
        set maxAmount(t) {
          this.swapButtonContainerErrorsService.setMaxAmountError(t);
        }
      }
      (et.ɵfac = function (t) {
        return new (t || et)(
          e.ɵɵdirectiveInject(me),
          e.ɵɵdirectiveInject(ve),
          e.ɵɵdirectiveInject(qe),
          e.ɵɵdirectiveInject(j.e),
          e.ɵɵdirectiveInject(W.b)
        );
      }),
        (et.ɵcmp = e.ɵɵdefineComponent({
          type: et,
          selectors: [["app-swap-button-container"]],
          inputs: {
            needApprove: "needApprove",
            withApproveButton: "withApproveButton",
            status: "status",
            idPrefix: "idPrefix",
            error: "error",
            minAmount: "minAmount",
            maxAmount: "maxAmount",
            buttonText: "buttonText",
            isOnramper: "isOnramper",
            nonEvmChangenow: "nonEvmChangenow",
          },
          outputs: {
            onApproveClick: "onApproveClick",
            onSwapClick: "onSwapClick",
            onBuyNativeClick: "onBuyNativeClick",
            onUpdateRateClick: "onUpdateRateClick",
          },
          decls: 4,
          vars: 4,
          consts: [
            ["connectWalletButton", ""],
            [4, "ngIf", "ngIfElse"],
            ["updateRateButton", ""],
            [3, "onClick"],
            [4, "ngLet"],
            ["errorButton", ""],
            [3, "buttonText", "onBuyNativeClick", "onSwapClick", 4, "ngIf"],
            [4, "ngIf"],
            [3, "buttonText", "onBuyNativeClick", "onSwapClick"],
            ["swapButton", ""],
            [3, "buttonText", "onApproveClick", "onSwapClick"],
            [3, "buttonText", "onClick"],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵtemplate(
                  0,
                  tc,
                  1,
                  0,
                  "ng-template",
                  null,
                  0,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵtemplate(2, dc, 5, 4, "ng-container", 1),
                e.ɵɵpipe(3, "async")),
              2 & t)
            ) {
              const i = e.ɵɵreference(1);
              e.ɵɵadvance(2),
                e.ɵɵproperty(
                  "ngIf",
                  n.nonEvmChangenow || e.ɵɵpipeBind1(3, 2, n.user$)
                )("ngIfElse", i);
            }
          },
          dependencies: [m.O5, B.e, ut, Sn, Tn, Pn, kn, An, m.Ov],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}html.iframe   [_nghost-%COMP%]{width:180px}",
          ],
          changeDetection: 0,
        }));
      var mc = l(58593);
      class En {}
      (En.ɵfac = function (t) {
        return new (t || En)();
      }),
        (En.ɵcmp = e.ɵɵdefineComponent({
          type: En,
          selectors: [["app-panel-error-content"]],
          inputs: {
            providerPanelData: "providerPanelData",
            errorTranslateKey: "errorTranslateKey",
          },
          decls: 7,
          vars: 7,
          consts: [
            [1, "provider-panel__body"],
            [1, "provider-panel__left"],
            [1, "provider-panel__amount", "provider-panel__amount_error"],
            [
              "tuiHintMode",
              "error",
              1,
              "provider-panel__hint",
              "provider-panel__hint_error",
              3,
              "inlineSVG",
              "tuiHint",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2),
              e.ɵɵtext(3),
              e.ɵɵpipe(4, "translate"),
              e.ɵɵelement(5, "div", 3),
              e.ɵɵpipe(6, "translate"),
              e.ɵɵelementEnd()()()),
              2 & t &&
                (e.ɵɵadvance(3),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind1(4, 3, "Trading Is Not Available"),
                  " "
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
                  "tuiHint",
                  e.ɵɵpipeBind1(6, 5, n.errorTranslateKey)
                ));
          },
          dependencies: [G.d$, R.D, E.X$],
          styles: [
            ".provider-panel__amount[_ngcontent-%COMP%]{font-size:14px;letter-spacing:normal}",
          ],
          changeDetection: 0,
        }));
      const _c = function (r) {
        return { "provider-panel__best-rate_selected": r };
      };
      function uc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 6),
            e.ɵɵelement(1, "div", 7),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty(
            "ngClass",
            e.ɵɵpureFunction1(2, _c, n.providerPanelData.isSelected)
          ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("inlineSVG", "assets/images/icons/Best-rate.svg");
        }
      }
      function gc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "bigNumberFormat"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(2, 1, n.tradePanelData.gasFeeInEth, 5),
              " ETH "
            );
        }
      }
      function hc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "bigNumberFormat"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " \u2248 $",
              e.ɵɵpipeBind3(2, 1, n.tradePanelData.gasFeeInUsd, 2, !0),
              " "
            );
        }
      }
      function fc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 8),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵtemplate(3, gc, 3, 4, "ng-container", 9),
            e.ɵɵtemplate(4, hc, 3, 5, "ng-container", 9),
            e.ɵɵelement(5, "div", 10),
            e.ɵɵpipe(6, "translate"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 5, "instantTrades.gasFee"),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngIf",
              "small" !== n.providerPanelData.appearance &&
                (null == n.tradePanelData.gasFeeInEth
                  ? null
                  : n.tradePanelData.gasFeeInEth.isFinite())
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              null == n.tradePanelData.gasFeeInUsd
                ? null
                : n.tradePanelData.gasFeeInUsd.isFinite()
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
              "tuiHint",
              e.ɵɵpipeBind1(6, 7, "instantTrades.gasFeeMessage")
            );
        }
      }
      const Cc = function (r) {
        return { "provider-panel__body_best": r };
      };
      class Mn {
        constructor(t, n, i) {
          (this.cdr = t), (this.swapFormService = n), (this.destroy$ = i);
        }
        ngOnInit() {
          (this.displayGas =
            this.tradePanelData?.blockchain === o.BLOCKCHAIN_NAME.ETHEREUM),
            this.swapFormService.inputValue$
              .pipe((0, O.R)(this.destroy$))
              .subscribe((t) => {
                const { toToken: n } = t;
                this.toToken?.price !== n?.price &&
                  ((this.toToken = n), this.cdr.markForCheck());
              });
        }
      }
      function vc(r, t) {
        if ((1 & r && e.ɵɵelement(0, "app-panel-content", 5), 2 & r)) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("providerPanelData", n.providerPanelData)(
            "tradePanelData",
            n.tradePanelData
          )("isBestProvider", n.isBestProvider);
        }
      }
      function bc(r, t) {
        if ((1 & r && e.ɵɵelement(0, "app-panel-error-content", 6), 2 & r)) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("providerPanelData", n.providerPanelData)(
            "errorTranslateKey",
            n.errorTranslateKey
          );
        }
      }
      (Mn.ɵfac = function (t) {
        return new (t || Mn)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (Mn.ɵcmp = e.ɵɵdefineComponent({
          type: Mn,
          selectors: [["app-panel-content"]],
          inputs: {
            tradePanelData: "tradePanelData",
            providerPanelData: "providerPanelData",
            isBestProvider: "isBestProvider",
          },
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 9,
          vars: 13,
          consts: [
            [1, "provider-panel__body", 3, "ngClass"],
            ["class", "provider-panel__best-rate", 3, "ngClass", 4, "ngIf"],
            [1, "provider-panel__left"],
            [1, "provider-panel__amount"],
            [1, "provider-panel__right"],
            ["class", "provider-panel__token-gas-fee", 4, "ngIf"],
            [1, "provider-panel__best-rate", 3, "ngClass"],
            [3, "inlineSVG"],
            [1, "provider-panel__token-gas-fee"],
            [4, "ngIf"],
            [1, "provider-panel__hint", 3, "inlineSVG", "tuiHint"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0),
              e.ɵɵtemplate(1, uc, 2, 4, "div", 1),
              e.ɵɵelementStart(2, "div", 2)(3, "div", 3),
              e.ɵɵtext(4),
              e.ɵɵpipe(5, "withRound"),
              e.ɵɵpipe(6, "bigNumberFormat"),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(7, "div", 4),
              e.ɵɵtemplate(8, fc, 7, 9, "div", 5),
              e.ɵɵelementEnd()()),
              2 & t &&
                (e.ɵɵproperty(
                  "ngClass",
                  e.ɵɵpureFunction1(11, Cc, n.isBestProvider)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.isBestProvider && n.tradePanelData),
                e.ɵɵadvance(2),
                e.ɵɵclassProp("tui-skeleton", !n.tradePanelData),
                e.ɵɵadvance(1),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind2(
                    5,
                    6,
                    e.ɵɵpipeBind1(
                      6,
                      9,
                      null == n.tradePanelData ? null : n.tradePanelData.amount
                    ),
                    "toClosestValue"
                  ),
                  " "
                ),
                e.ɵɵadvance(4),
                e.ɵɵproperty(
                  "ngIf",
                  n.displayGas &&
                    ((null == n.tradePanelData ||
                    null == n.tradePanelData.gasFeeInEth
                      ? null
                      : n.tradePanelData.gasFeeInEth.isFinite()) ||
                      (null == n.tradePanelData ||
                      null == n.tradePanelData.gasFeeInUsd
                        ? null
                        : n.tradePanelData.gasFeeInUsd.isFinite()))
                ));
          },
          dependencies: [m.mk, m.O5, G.d$, R.D, E.X$, Ce.N, Te.f],
          styles: ["[_nghost-%COMP%]{width:100%}"],
          changeDetection: 0,
        }));
      const xc = function (r, t, n) {
        return {
          "provider-panel__content_best-rate": r,
          "provider-panel__content_selected": t,
          "provider-panel__content_small": n,
        };
      };
      class In {
        constructor() {
          (this.isBestProvider = !1),
            (this.onSelectProvider = new e.EventEmitter());
        }
        ngOnInit() {
          this.setupProviderPanelData();
        }
        setupProviderPanelData() {
          const t = this.providerData,
            n = t.tradeStatus === ae.ERROR;
          (this.providerPanelData = {
            label: t.label,
            isSelected: t.isSelected,
            hasError: n,
            loading:
              t.tradeStatus === ae.CALCULATION ||
              t.tradeStatus === ae.TX_IN_PROGRESS,
            appearance: this.isBestProvider ? "normal" : "small",
          }),
            n
              ? this.setupError(t.error)
              : t.trade && this.setupTradePanelData(t.trade);
        }
        setupTradePanelData(t) {
          const n =
            t instanceof o.EvmOnChainTrade && t.gasFeeInfo?.gasLimit?.isFinite()
              ? {
                  gasLimit: t.gasFeeInfo.gasLimit.toFixed(),
                  gasFeeInUsd: t.gasFeeInfo.gasFeeInUsd,
                  gasFeeInEth: t.gasFeeInfo.gasFeeInEth,
                }
              : {};
          this.tradePanelData = {
            blockchain: t.from.blockchain,
            amount: t.to.tokenAmount,
            ...n,
          };
        }
        setupError(t) {
          this.errorTranslateKey =
            t?.type === mc.Q.TEXT
              ? t.translateKey || t.message
              : "rubicError";
        }
        selectProvider() {
          !this.providerPanelData.hasError &&
            !this.providerPanelData.loading &&
            this.onSelectProvider.emit();
        }
      }
      function yc(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 4)(1, "app-provider-panel", 5),
            e.ɵɵlistener("onSelectProvider", function () {
              const s = e.ɵɵrestoreView(n).$implicit,
                c = e.ɵɵnextContext();
              return e.ɵɵresetView(c.onSelectProvider.emit(s));
            }),
            e.ɵɵelementEnd()();
        }
        if (2 & r) {
          const n = t.$implicit,
            i = t.index;
          e.ɵɵadvance(1),
            e.ɵɵproperty("providerData", n)("isBestProvider", 0 === i);
        }
      }
      function Sc(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 4)(1, "app-provider-panel", 7),
            e.ɵɵlistener("onSelectProvider", function () {
              const s = e.ɵɵrestoreView(n).$implicit,
                c = e.ɵɵnextContext(2);
              return e.ɵɵresetView(c.onSelectProvider.emit(s));
            }),
            e.ɵɵelementEnd()();
        }
        if (2 & r) {
          const n = t.$implicit;
          e.ɵɵadvance(1), e.ɵɵproperty("providerData", n);
        }
      }
      function Tc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Sc, 2, 1, "div", 6),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty("ngForOf", n.providersData.slice(3));
        }
      }
      function Oc(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 8),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView((a.showAllProviders = !a.showAllProviders));
            }),
            e.ɵɵelement(1, "img", 9),
            e.ɵɵtext(2),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵclassProp("reverted", n.showAllProviders),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              n.showAllProviders ? "Hide providers" : "Show more providers",
              " "
            );
        }
      }
      (In.ɵfac = function (t) {
        return new (t || In)();
      }),
        (In.ɵcmp = e.ɵɵdefineComponent({
          type: In,
          selectors: [["app-provider-panel"]],
          inputs: {
            providerData: "providerData",
            isBestProvider: "isBestProvider",
          },
          outputs: { onSelectProvider: "onSelectProvider" },
          decls: 7,
          vars: 13,
          consts: [
            [1, "trade-panel"],
            [1, "provider-panel__content", 3, "ngClass", "click"],
            [1, "provider-panel__provider-name"],
            [
              3,
              "providerPanelData",
              "tradePanelData",
              "isBestProvider",
              4,
              "ngIf",
            ],
            [3, "providerPanelData", "errorTranslateKey", 4, "ngIf"],
            [3, "providerPanelData", "tradePanelData", "isBestProvider"],
            [3, "providerPanelData", "errorTranslateKey"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "div", 1),
              e.ɵɵlistener("click", function () {
                return n.selectProvider();
              }),
              e.ɵɵelementStart(2, "div", 2),
              e.ɵɵtext(3),
              e.ɵɵpipe(4, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵtemplate(5, vc, 1, 3, "app-panel-content", 3),
              e.ɵɵtemplate(6, bc, 1, 2, "app-panel-error-content", 4),
              e.ɵɵelementEnd()()),
              2 & t &&
                (e.ɵɵclassProp(
                  "provider-panel_loading",
                  n.providerPanelData.loading
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngClass",
                  e.ɵɵpureFunction3(
                    9,
                    xc,
                    n.isBestProvider,
                    n.providerPanelData.isSelected,
                    "small" === n.providerPanelData.appearance
                  )
                ),
                e.ɵɵadvance(2),
                e.ɵɵtextInterpolate2(
                  " ",
                  e.ɵɵpipeBind1(4, 7, "via"),
                  " ",
                  n.providerPanelData.label,
                  " "
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("ngIf", !n.providerPanelData.hasError),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.providerPanelData.hasError));
          },
          dependencies: [m.mk, m.O5, En, Mn, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}  .provider-panel{height:100%;transition:opacity ease-in-out .3s}@media (max-width: 651px){  .provider-panel .provider-panel__body{flex-direction:column;padding-top:10px}  .provider-panel .provider-panel__right{align-items:flex-start}  .provider-panel .provider-panel__left{margin-right:0}  .provider-panel .provider-panel__left,   .provider-panel .provider-panel__token-usd-price{margin-bottom:5px}}  .provider-panel_loading{opacity:.45}  .provider-panel__content{position:relative;box-sizing:border-box;padding:25px 20px 20px;background:var(--primary-background);border:1px solid transparent;border-left-width:5px;border-radius:14px;transition:.2s ease-in-out}  .provider-panel__content:not(  .provider-panel__content_loading):not(  .provider-panel__content_error){cursor:pointer}  .provider-panel__content:not(  .provider-panel__content_loading):not(  .provider-panel__content_error):hover{box-shadow:10px 10px 10px #3a5f451a,-15px -15px 20px #fff3}html.dark[_nghost-%COMP%]     .provider-panel__content:not(  .provider-panel__content_loading):not(  .provider-panel__content_error):hover, html.dark   [_nghost-%COMP%]     .provider-panel__content:not(  .provider-panel__content_loading):not(  .provider-panel__content_error):hover{box-shadow:-7px -7px 6px 2px #03060433}  .provider-panel__content:not(  .provider-panel__content_loading):not(  .provider-panel__content_selected):not(  .provider-panel__content_error):hover{border:1px solid var(--primary-color);border-left-width:5px}  .provider-panel__content:not(  .provider-panel__content_loading):not(  .provider-panel__content_selected):not(  .provider-panel__content_error):hover .provider-panel__best-rate{border-top-color:var(--primary-color);border-right-color:var(--primary-color)}  .provider-panel__content_error{border-color:#dfcb5f}  .provider-panel__content_selected{color:var(--primary-text-invert);background-color:var(--primary-color);border-color:var(--primary-color)}  .provider-panel__content_selected .provider-panel__provider-name{color:var(--primary-text-invert);background-color:var(--primary-color);box-shadow:0 3px 6px #00000029}  .provider-panel__content_selected .provider-panel__hint   svg path{fill:var(--primary-text-invert)}  .provider-panel__content_best-rate{color:var(--primary-text);border-left-color:var(--primary-color);border-left-width:5px}  .provider-panel__content_best-rate.provider-panel__content_selected{color:var(--primary-text-invert)!important}  .provider-panel__content_small{display:flex;align-items:center;height:100%}  .provider-panel__content_small .provider-panel__token-usd-price{display:none}  .provider-panel__content_small .provider-panel__body{flex-direction:column;align-items:flex-start}  .provider-panel__content_small .provider-panel__amount{display:flex;align-items:center;font-size:20px}@media (max-width: 420px){  .provider-panel__content_small .provider-panel__amount_error{font-size:16px}}  .provider-panel__best-rate{position:absolute;top:-8px;right:-8px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:28px;height:28px;color:#000;background:var(--primary-background);border-radius:100%;box-shadow:0 3px 6px #00000029}  .provider-panel__best-rate_selected{background-color:var(--primary-color)}  .provider-panel__best-rate_selected   svg path{fill:#fff}  .provider-panel__provider-name{position:absolute;top:-5px;left:25px;padding:2px 6px;color:var(--primary-text);font-weight:300;font-size:14px;text-transform:capitalize;background:var(--solid-background);border:1px solid var(--transparent-line);border-radius:4px}  .provider-panel__body{display:flex;flex-wrap:wrap}  .provider-panel__left{display:flex;flex:4;align-items:center;width:100%;margin-right:10px}  .provider-panel__right{display:flex;flex:6;flex-direction:column;align-items:flex-end;font-size:14px}  .provider-panel__amount{display:flex;padding-left:2px;overflow-x:auto;font-weight:300;font-size:24px;line-height:1.2;letter-spacing:2px;scrollbar-width:none}  .provider-panel__amount::-webkit-scrollbar{display:none}  .provider-panel__amount_error{display:block;width:100%;font-size:20px;letter-spacing:1px}@media (max-width: 420px){  .provider-panel__amount_error{font-size:16px}}  .provider-panel__token-usd-price{margin-bottom:10px;letter-spacing:.1em}  .provider-panel__token-gas-fee{display:flex;align-items:center}  .provider-panel__hint{display:flex;align-items:center;margin-bottom:5px;margin-left:10px;cursor:pointer}  .provider-panel__hint_error{position:relative;top:3px;float:right}  .provider-panel__hint_error   svg path{fill:#dfcb5f}  .provider-panel .tui-skeleton.provider-panel__amount{width:100%;min-height:24px}  .provider-panel .tui-skeleton.provider-panel__token-usd-price,   .provider-panel .tui-skeleton.provider-panel__token-gas-fee{min-height:20px}",
          ],
          changeDetection: 0,
        }));
      class Nn {
        constructor() {
          (this.onSelectProvider = new e.EventEmitter()),
            (this.showAllProviders = !1);
        }
        trackByFn(t, n) {
          return (
            n.name + n.tradeStatus + n.isSelected + n.trade?.to.tokenAmount
          );
        }
      }
      function Pc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵelement(3, "div", 15),
            e.ɵɵpipe(4, "translate"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 3, "Trading Is Not Available"),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
              "tuiHint",
              e.ɵɵpipeBind1(4, 5, n.errorText)
            );
        }
      }
      function kc(r, t) {
        1 & r && e.ɵɵelement(0, "app-iframe-asset-type-indicator", 17),
          2 & r && e.ɵɵproperty("assetType", t.ngIf);
      }
      function wc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, kc, 1, 1, "app-iframe-asset-type-indicator", 16),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              null == n.toToken ? null : n.toToken.blockchain
            );
        }
      }
      function Ac(r, t) {
        1 & r && e.ɵɵelement(0, "app-tokens-rate");
      }
      (Nn.ɵfac = function (t) {
        return new (t || Nn)();
      }),
        (Nn.ɵcmp = e.ɵɵdefineComponent({
          type: Nn,
          selectors: [["app-providers-panels-container"]],
          inputs: { providersData: "providersData" },
          outputs: { onSelectProvider: "onSelectProvider" },
          decls: 4,
          vars: 4,
          consts: [
            [1, "providers"],
            ["class", "providers__item", 4, "ngFor", "ngForOf", "ngForTrackBy"],
            [4, "ngIf"],
            ["class", "providers__toggler", 3, "click", 4, "ngIf"],
            [1, "providers__item"],
            [3, "providerData", "isBestProvider", "onSelectProvider"],
            ["class", "providers__item", 4, "ngFor", "ngForOf"],
            [3, "providerData", "onSelectProvider"],
            [1, "providers__toggler", 3, "click"],
            [
              "src",
              "assets/images/swaps/icons/show-more-arrow.svg",
              "alt",
              "arrow",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0),
              e.ɵɵtemplate(1, yc, 2, 2, "div", 1),
              e.ɵɵtemplate(2, Tc, 2, 1, "ng-container", 2),
              e.ɵɵtemplate(3, Oc, 3, 3, "button", 3),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵproperty("ngForOf", n.providersData.slice(0, 3))(
                  "ngForTrackBy",
                  n.trackByFn
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.showAllProviders),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.providersData.length > 3));
          },
          dependencies: [m.sg, m.O5, In],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.providers[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;grid-gap:20px}.providers__item[_ngcontent-%COMP%]:first-child{width:100%}.providers__item[_ngcontent-%COMP%]:not(:first-child){width:calc(50% - 10px)}@media (max-width: 651px){.providers__item[_ngcontent-%COMP%]:not(:first-child){width:100%}}.providers__item[_ngcontent-%COMP%]:not(:first-child)  .provider-panel__amount{width:100%}.providers__item[_ngcontent-%COMP%]:not(:nth-child(2n+1)):last-child{width:100%}.providers__item[_ngcontent-%COMP%]:not(:nth-child(2n+1)):last-child     .provider-panel__body{flex-direction:row}.providers__toggler[_ngcontent-%COMP%]{display:flex;grid-gap:8px;align-items:center;justify-content:center;width:100%;color:var(--primary-color);font-weight:500;font-size:15px;letter-spacing:-.01em}.providers__toggler[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;top:-1px;width:13px}.providers__toggler[_ngcontent-%COMP%]   img.reverted[_ngcontent-%COMP%]{transform:rotate(180deg)}.providers__toggler[_ngcontent-%COMP%]:hover{text-decoration:underline}",
          ],
          changeDetection: 0,
        }));
      const Ec = function (r) {
        return { decimals: r };
      };
      function Mc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "bigNumberFormat"),
            e.ɵɵpipe(3, "withRound"),
            e.ɵɵpipe(4, "bigNumberFormat"),
            e.ɵɵtemplate(5, Ac, 1, 0, "app-tokens-rate", 9),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2).ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              n
                ? e.ɵɵpipeBind1(2, 1, i.fromAmount)
                : e.ɵɵpipeBind3(
                    3,
                    3,
                    e.ɵɵpipeBind1(4, 7, i.toAmount),
                    "toClosestValue",
                    e.ɵɵpureFunction1(
                      9,
                      Ec,
                      null == i.toToken ? null : i.toToken.decimals
                    )
                  ),
              " "
            );
        }
      }
      const Ic = function (r, t) {
        return {
          "instant-trade-bottom-form__token-amount_loading": r,
          "instant-trade-bottom-form__token-amount_placeholder": t,
        };
      };
      function Nc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 18),
            e.ɵɵtemplate(1, Mc, 6, 11, "ng-container", 10),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext().ngLet,
            a = e.ɵɵnextContext();
          e.ɵɵproperty(
            "ngClass",
            e.ɵɵpureFunction2(
              2,
              Ic,
              i && a.tradeStatus === a.TRADE_STATUS.LOADING,
              !(a.selectedProvider || n)
            )
          ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              (a.selectedProvider && a.toAmount) || (n && a.fromAmount)
            );
        }
      }
      function Rc(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div", 19),
          e.ɵɵelement(1, "div", 20),
          e.ɵɵelementEnd());
      }
      function Bc(r, t) {
        if (
          (1 & r && (e.ɵɵelementStart(0, "div"), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(5);
          let i;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " Est. fee $",
              null == (i = n.getGas(n.selectedProvider)) ? null : i.toFixed(2),
              " "
            );
        }
      }
      function Fc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 22),
            e.ɵɵelement(1, "app-tokens-rate"),
            e.ɵɵtemplate(2, Bc, 2, 1, "div", 10),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2).ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", !n && i.getGas(i.selectedProvider).gt(0));
        }
      }
      function Dc(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtemplate(1, Fc, 3, 1, "div", 21),
          e.ɵɵelementContainerEnd());
      }
      const Lc = function (r) {
        return { "instant-trade-bottom-form__amount__output_error": r };
      };
      function Hc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 11),
            e.ɵɵtemplate(1, Pc, 5, 7, "ng-container", 10),
            e.ɵɵtemplate(2, wc, 2, 1, "ng-container", 12),
            e.ɵɵtemplate(3, Nc, 2, 5, "div", 13),
            e.ɵɵtemplate(
              4,
              Rc,
              2,
              0,
              "ng-template",
              null,
              14,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵtemplate(6, Dc, 2, 0, "ng-container", 10),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵreference(5),
            a = e.ɵɵnextContext().ngLet,
            s = e.ɵɵnextContext();
          e.ɵɵproperty(
            "ngClass",
            e.ɵɵpureFunction1(6, Lc, s.errorText && !s.isIframe)
          ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", s.errorText && !s.isIframe && s.fromAmount),
            e.ɵɵadvance(1),
            e.ɵɵproperty("onlyFrame", "vertical"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", a || s.tradeStatus !== s.TRADE_STATUS.LOADING)(
              "ngIfElse",
              i
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", s.selectedProvider || n);
        }
      }
      function $c(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-providers-panels-container", 24),
            e.ɵɵlistener("onSelectProvider", function (a) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext(3);
              return e.ɵɵresetView(s.onSelectProvider(a));
            }),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵproperty("providersData", n.providersData);
        }
      }
      function Vc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, $c, 1, 1, "app-providers-panels-container", 23),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", n.allowTrade && !n.ethWethTrade);
        }
      }
      function jc(r, t) {
        1 & r && e.ɵɵelement(0, "app-target-network-address");
      }
      function zc(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 3)(1, "main", 4)(2, "div", 5)(
              3,
              "div",
              6
            ),
            e.ɵɵelement(4, "app-select-asset-button-tokens", 7),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(5, Hc, 7, 8, "div", 8),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(6, Vc, 2, 1, "ng-container", 9),
            e.ɵɵtemplate(7, jc, 1, 0, "app-target-network-address", 10),
            e.ɵɵpipe(8, "async"),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(5),
            e.ɵɵproperty("ngLet", n.allowTrade && n.ethWethTrade),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(8, 2, n.displayTargetAddressInput$)
            );
        }
      }
      class Rn {
        constructor(t, n, i, a, s, c, p, d, _, f, x, P, S, D, Q, Z) {
          (this.cdr = t),
            (this.targetNetworkAddressService = n),
            (this.swapFormService = i),
            (this.instantTradeService = a),
            (this.errorService = s),
            (this.authService = c),
            (this.tokensService = p),
            (this.settingsService = d),
            (this.iframeService = _),
            (this.swapInfoService = f),
            (this.gtmService = x),
            (this.queryParamsService = P),
            (this.dialogService = S),
            (this.refreshService = D),
            (this.injector = Q),
            (this.destroy$ = Z),
            (this.allowRefreshChange = new e.EventEmitter()),
            (this.instantTradeInfoChange = new e.EventEmitter()),
            (this.tradeStatusChange = new e.EventEmitter()),
            (this.TRADE_STATUS = u),
            (this.displayTargetAddressInput$ =
              this.settingsService.instantTradeValueChanges.pipe(
                (0, Ee.O)(this.settingsService.instantTradeValue),
                (0, v.U)((xe) => xe.showReceiverAddress)
              )),
            (this.isTradeSelectedByUser = !1),
            (this.onCalculateTrade$ = new _e.x()),
            (this.isOnramper$ = this.queryParamsService.queryParams$.pipe(
              (0, v.U)((xe) => Boolean(xe.onramperTxId))
            )),
            (this.isIframe = this.iframeService.isIframe);
        }
        get selectedProvider() {
          return this._selectedProvider;
        }
        set selectedProvider(t) {
          (this._selectedProvider = t),
            this.instantTradeInfoChange.emit({
              trade: t?.trade,
              isWrappedType: !!this.ethWethTrade,
            });
        }
        get tradeStatus() {
          return this._tradeStatus;
        }
        set tradeStatus(t) {
          (this._tradeStatus = t), this.tradeStatusChange.emit(t);
        }
        get allowTrade() {
          const t = this.instantTradeService.inputValue;
          return Boolean(
            t.fromBlockchain &&
              t.fromToken &&
              t.toBlockchain &&
              t.toToken &&
              t.fromAmount?.gt(0)
          );
        }
        get toAmount() {
          return this.selectedProvider?.trade
            ? this.selectedProvider.trade.to.tokenAmount
            : null;
        }
        get isFromNative() {
          return o.Web3Pure[
            o.BlockchainsInfo.getChainType(this.fromToken.blockchain)
          ].isNativeAddress(this.fromToken.address);
        }
        ngOnInit() {
          this.setupNormalTradesCalculation(),
            this.setupHiddenTradesCalculation(),
            (this.tradeStatus = u.DISABLED),
            this.swapFormService.inputValueDistinct$
              .pipe((0, O.R)(this.destroy$))
              .subscribe(() => {
                this.setupSwapForm();
              }),
            this.swapFormService.toToken$
              .pipe((0, O.R)(this.destroy$))
              .subscribe((t) => {
                (0, J.tb)(this.toToken, t) &&
                  this.toToken?.price !== t?.price &&
                  ((this.toToken = t), this.cdr.markForCheck());
              }),
            this.settingsService.instantTradeValueChanges
              .pipe(
                (0, le.x)(
                  (t, n) =>
                    t.disableMultihops === n.disableMultihops &&
                    t.slippageTolerance === n.slippageTolerance
                ),
                (0, O.R)(this.destroy$)
              )
              .subscribe(() => {
                this.conditionalCalculate("normal");
              }),
            this.authService.currentUser$
              .pipe(
                (0, re.h)((t) => !!t?.address),
                (0, O.R)(this.destroy$)
              )
              .subscribe(() => {
                this.conditionalCalculate("normal");
              }),
            this.refreshService.onRefresh$
              .pipe((0, O.R)(this.destroy$))
              .subscribe(({ isForced: t }) => {
                this.conditionalCalculate(
                  t || this.settingsService.instantTradeValue.autoRefresh
                    ? "normal"
                    : "hidden"
                );
              });
        }
        isSupportedOnChainNetwork(t) {
          return Object.keys(Di).some((n) => n === t);
        }
        setupSwapForm() {
          const { fromAssetType: t, toBlockchain: n } =
            this.swapFormService.inputValue;
          if (!o.BlockchainsInfo.isBlockchainName(t) || t !== n) return;
          const i = this.instantTradeService.inputValue;
          (this.fromAmount = i.fromAmount),
            (this.fromToken = i.fromToken),
            (this.toToken = i.toToken),
            (this.toBlockchain = i.toBlockchain),
            (this.errorText =
              !this.isSupportedOnChainNetwork(i.fromBlockchain) &&
              this.fromAmount &&
              this.fromAmount.gt(0)
                ? "Chosen network is not supported for instant trades"
                : ""),
            (this.ethWethTrade = this.instantTradeService.getEthWethTrade()),
            this.allowRefreshChange.emit(!this.ethWethTrade),
            (this.currentBlockchain === i.fromBlockchain ||
              i.fromBlockchain !== i.toBlockchain ||
              ((this.currentBlockchain = i.fromBlockchain),
              this.initiateProviders(this.currentBlockchain))) &&
              this.conditionalCalculate("normal");
        }
        initiateProviders(t) {
          return this.isSupportedOnChainNetwork(t)
            ? ((this.providersData = Di[t]), !0)
            : ((this.providersData = []), !1);
        }
        conditionalCalculate(t) {
          const { fromBlockchain: n, toBlockchain: i } =
            this.instantTradeService.inputValue;
          n === i &&
            (n !== i ||
              !this.isSupportedOnChainNetwork(this.currentBlockchain) ||
              this.tradeStatus === u.APPROVE_IN_PROGRESS ||
              this.tradeStatus === u.SWAP_IN_PROGRESS ||
              this.onCalculateTrade$.next(t));
        }
        setupNormalTradesCalculation() {
          this.calculateTradeSubscription$ ||
            (this.calculateTradeSubscription$ = this.onCalculateTrade$
              .pipe(
                (0, re.h)((t) => "normal" === t),
                (0, dt.b)(200),
                (0, N.w)(() => {
                  if (!this.swapFormService.isFilled)
                    return this.setTradeStateIsNotAllowed(), (0, L.of)(null);
                  if (this.ethWethTrade)
                    return this.setTradeStateIsEthWethSwap(), (0, L.of)(null);
                  this.setProvidersStateCalculating(),
                    this.refreshService.setRefreshing();
                  const n =
                      this.queryParamsService.disabledProviders &&
                      this.queryParamsService.enabledBlockchains
                        ? this.getFakeTrades()
                        : this.instantTradeService.calculateTrades(
                            this.fromToken,
                            this.fromAmount.toFixed(),
                            this.toToken
                          ),
                    i = this.tokensService.getAndUpdateTokenBalance(
                      this.fromToken
                    );
                  return (0, Li.D)([n, i]).pipe(
                    (0, N.w)(
                      ([a]) => (
                        (this.hiddenProvidersTrades = null),
                        this.setupProviders(a)
                      )
                    )
                  );
                }),
                (0, O.R)(this.destroy$)
              )
              .subscribe(() => {
                this.refreshService.setStopped(), this.cdr.markForCheck();
              }));
        }
        setTradeStateIsNotAllowed() {
          (this.tradeStatus = u.DISABLED),
            (this.selectedProvider = null),
            (this.isTradeSelectedByUser = !1),
            this.swapFormService.outputControl.patchValue({
              toAmount: new M.Z(NaN),
            });
        }
        setTradeStateIsEthWethSwap() {
          (this.tradeStatus = u.READY_TO_SWAP),
            (this.selectedProvider = null),
            (this.isTradeSelectedByUser = !1),
            (this.needApprove = !1),
            (this.withApproveButton = this.needApprove),
            this.swapFormService.outputControl.patchValue({
              toAmount: this.fromAmount,
            });
        }
        setProvidersStateCalculating() {
          (this.tradeStatus = u.LOADING),
            (this.providersData = this.providersData.map((t) => ({
              ...t,
              tradeStatus: ae.CALCULATION,
            }))),
            this.cdr.detectChanges();
        }
        setupProviders(t) {
          var n = this;
          return (0, T.Z)(function* () {
            const i =
                Boolean(n.authService.userAddress) &&
                n.authService.userChainType ===
                  o.BlockchainsInfo.getChainType(n.fromToken.blockchain),
              a = n.providersData.map(
                (function () {
                  var s = (0, T.Z)(function* (c) {
                    const p = t.find((f) => f?.type === c.name),
                      d = {
                        name: c.name,
                        label: c.label,
                        isSelected: !1,
                        needApprove: !1,
                        trade: null,
                        tradeStatus: ae.ERROR,
                        error: new V.q(
                          "There are not enough liquidity for this swap using chosen DEX."
                        ),
                      };
                    if (!p) return d;
                    if ("error" in p)
                      return { ...d, error: mt.E.parseError(p.error) };
                    const _ =
                      !!i && (yield n.instantTradeService.needApprove(p));
                    return {
                      ...c,
                      isSelected: !1,
                      trade: p,
                      needApprove: _,
                      tradeStatus: ae.APPROVAL,
                      error: null,
                    };
                  });
                  return function (c) {
                    return s.apply(this, arguments);
                  };
                })()
              );
            (n.providersData = yield Promise.all(a)), n.chooseBestProvider();
          })();
        }
        chooseBestProvider() {
          this.sortProviders(),
            this.providersData[0].trade
              ? (this.selectProviderAfterCalculation(),
                (this.tradeStatus = this.selectedProvider.needApprove
                  ? u.READY_TO_APPROVE
                  : u.READY_TO_SWAP),
                (this.needApprove = this.selectedProvider.needApprove),
                (this.withApproveButton = this.needApprove),
                this.swapFormService.outputControl.patchValue({
                  toAmount: this.selectedProvider.trade.to.tokenAmount,
                }),
                this.cdr.detectChanges())
              : ((this.tradeStatus = u.DISABLED),
                this.instantTradeInfoChange.emit(null),
                this.swapInfoService.emitInfoCalculated(),
                1 === this.providersData.length &&
                  (this.selectedProvider = null));
        }
        sortProviders() {
          this.providersData.sort((t, n) =>
            this.calculateTradeProfit(n.trade).comparedTo(
              this.calculateTradeProfit(t.trade)
            )
          );
        }
        calculateTradeProfit(t) {
          if (!t) return new M.Z(-1 / 0);
          const { to: n } = t;
          if (!n.price.isFinite()) return n.tokenAmount;
          const i = n?.tokenAmount.multipliedBy(n.price),
            a =
              t instanceof o.EvmOnChainTrade &&
              t.gasFeeInfo?.gasFeeInUsd?.isFinite()
                ? t.gasFeeInfo.gasFeeInUsd
                : 0;
          return i.minus(a);
        }
        selectProviderAfterCalculation() {
          if (this.isTradeSelectedByUser) {
            const t = this.providersData.findIndex(
              (n) => n.name === this.selectedProvider.name
            );
            (this.selectedProvider = this.providersData[t]),
              this.selectedProvider.trade
                ? (this.providersData[t].isSelected = !0)
                : ((this.selectedProvider = this.providersData[0]),
                  (this.providersData[0].isSelected = !0));
          } else
            (this.selectedProvider = this.providersData[0]),
              (this.providersData[0].isSelected = !0);
        }
        setupHiddenTradesCalculation() {
          this.hiddenCalculateTradeSubscription$ ||
            (this.hiddenCalculateTradeSubscription$ = this.onCalculateTrade$
              .pipe(
                (0, re.h)(
                  (t) => "hidden" === t && Boolean(this.authService.userAddress)
                ),
                (0, N.w)(() => {
                  if (!this.swapFormService.isFilled) return (0, L.of)(null);
                  this.refreshService.setRefreshing();
                  const t = this.instantTradeService.calculateTrades(
                    this.fromToken,
                    this.fromAmount.toFixed(),
                    this.toToken
                  );
                  return (0, je.D)(t).pipe(
                    (0, N.w)((n) => this.getHiddenTradeAndApproveData(n)),
                    (0, ye.b)((n) => {
                      (this.hiddenProvidersTrades = n),
                        this.checkSelectedProviderHiddenData(),
                        this.refreshService.setStopped();
                    }),
                    (0, Je.YP)(this.cdr)
                  );
                }),
                (0, O.R)(this.destroy$)
              )
              .subscribe());
        }
        onSelectProvider(t) {
          if (
            this.tradeStatus === u.LOADING ||
            this.tradeStatus === u.APPROVE_IN_PROGRESS ||
            this.tradeStatus === u.SWAP_IN_PROGRESS
          )
            return;
          const n = t.name;
          (this.providersData = this.providersData.map((i) => ({
            ...i,
            isSelected: i.name === n,
          }))),
            (this.selectedProvider = this.providersData.find(
              (i) => i.isSelected
            )),
            (this.isTradeSelectedByUser = !0),
            null !== this.selectedProvider.needApprove &&
              ((this.tradeStatus = this.selectedProvider.needApprove
                ? u.READY_TO_APPROVE
                : u.READY_TO_SWAP),
              (this.needApprove = this.selectedProvider.needApprove),
              (this.withApproveButton = this.needApprove)),
            this.swapFormService.outputControl.patchValue({
              toAmount: this.selectedProvider.trade.to.tokenAmount,
            }),
            this.checkSelectedProviderHiddenData();
        }
        checkSelectedProviderHiddenData() {
          if (this.hiddenProvidersTrades && this.selectedProvider?.trade) {
            const t = this.hiddenProvidersTrades.find(
              (i) => i.providerName === this.selectedProvider.name
            );
            this.selectedProvider.trade.to.tokenAmount.eq(
              "fulfilled" === t?.status ? t.value.to.tokenAmount : null
            ) || (this.tradeStatus = u.OLD_TRADE_DATA);
          }
        }
        onSetHiddenData() {
          this.setupProviders(this.hiddenProvidersTrades?.map((t) => t.value));
        }
        setProviderState(t, n, i, a, s) {
          this.tradeStatus = n;
          const c = this.providersData.find((d) => d.name === t)?.trade,
            p = c instanceof o.EvmOnChainTrade && c.useProxy;
          (this.providersData = this.providersData.map((d) =>
            d.name !== t
              ? p
                ? { ...d, ...(void 0 !== a && { needApprove: a }) }
                : d
              : {
                  ...d,
                  ...(i && { tradeStatus: i }),
                  ...(void 0 !== a && { needApprove: a }),
                  ...(s && { isSelected: s }),
                }
          )),
            void 0 !== a && (this.needApprove = a);
        }
        approveTrade() {
          var t = this;
          return (0, T.Z)(function* () {
            t.selectedProvider || t.errorService.catch(new Hi()),
              t.setProviderState(
                t.selectedProvider.name,
                u.APPROVE_IN_PROGRESS
              ),
              t.refreshService.startInProgress();
            const n = t.selectedProvider;
            try {
              yield t.instantTradeService.approve(n.trade),
                t.setProviderState(
                  n.name,
                  u.READY_TO_SWAP,
                  ae.COMPLETED,
                  !1,
                  !0
                ),
                (t.isTradeSelectedByUser = !0),
                t.gtmService.updateFormStep(b.V.INSTANT_TRADE, "approve"),
                yield t.tokensService.updateNativeTokenBalance(
                  n.trade.from.blockchain
                );
            } catch (i) {
              t.errorService.catch(i),
                t.setProviderState(n.name, u.READY_TO_APPROVE, ae.APPROVAL, !0);
            }
            t.cdr.detectChanges(), t.refreshService.stopInProgress();
          })();
        }
        createTrade() {
          var t = this;
          return (0, T.Z)(function* () {
            if (
              !t.isSlippageCorrect() ||
              (!t.ethWethTrade &&
                !(yield t.settingsService.checkSlippageAndPriceImpact(
                  b.V.INSTANT_TRADE,
                  t.selectedProvider.trade
                )))
            )
              return;
            let n, i;
            t.ethWethTrade
              ? ((n = o.ON_CHAIN_TRADE_TYPE.WRAPPED), (i = t.ethWethTrade))
              : (t.selectedProvider || t.errorService.catch(new Hi()),
                (n = t.selectedProvider.name),
                (i = t.selectedProvider.trade)),
              t.setProviderState(n, u.SWAP_IN_PROGRESS, ae.TX_IN_PROGRESS),
              t.refreshService.startInProgress();
            try {
              yield t.instantTradeService.createTrade(n, i, () => {
                t.setProviderState(n, u.READY_TO_SWAP, ae.COMPLETED),
                  t.cdr.detectChanges();
              }),
                t.conditionalCalculate("hidden");
              const {
                fromAddress: a,
                blockchain: s,
                toAddress: c,
              } = pt.getItSwapParams(i);
              yield t.tokensService.updateTokenBalancesAfterItSwap(
                { address: a, blockchain: s },
                { address: c, blockchain: s }
              );
            } catch (a) {
              t.errorService.catch(a),
                t.setProviderState(n, u.READY_TO_SWAP, ae.COMPLETED),
                t.cdr.detectChanges();
            }
            t.refreshService.stopInProgress();
          })();
        }
        getHiddenTradeAndApproveData(t) {
          return (0, T.Z)(function* () {
            const n = yield Promise.all(
              t.map((i) => ("error" in i ? null : i.needApprove()))
            );
            return t.map((i, a) =>
              "error" in i
                ? {
                    providerName: i.type,
                    value: null,
                    status: "rejected",
                    reason: new V.q(i.error.message),
                  }
                : {
                    providerName: i.type,
                    value: i,
                    status: "fulfilled",
                    needApprove: n?.[a],
                  }
            );
          })();
        }
        getFakeTrades() {
          return new Promise((t) =>
            t(
              this.providersData.map((n) => ({
                type: n.name,
                error: new V.q("Instant trade is not supported"),
              }))
            )
          );
        }
        isSlippageCorrect() {
          if (
            !this.selectedProvider ||
            this.settingsService.instantTradeValue.autoSlippageTolerance ||
            this.selectedProvider.trade.type !== o.ON_CHAIN_TRADE_TYPE.BRIDGERS
          )
            return !0;
          const t = this.iframeService.isIframe ? "fullscreen" : "s";
          return (
            this.dialogService
              .open(new z.Al(Dt, this.injector), { size: t })
              .subscribe(),
            !1
          );
        }
        getGas(t) {
          const n = t.trade;
          return n instanceof o.EvmOnChainTrade && n.gasFeeInfo?.gasFeeInUsd
            ? n.gasFeeInfo.gasFeeInUsd
            : new M.Z(0);
        }
      }
      (Rn.ɵfac = function (t) {
        return new (t || Rn)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(oe),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(Oe),
          e.ɵɵdirectiveInject(cn.r),
          e.ɵɵdirectiveInject(j.e),
          e.ɵɵdirectiveInject(De.H),
          e.ɵɵdirectiveInject(q),
          e.ɵɵdirectiveInject(W.b),
          e.ɵɵdirectiveInject(ze),
          e.ɵɵdirectiveInject(Ot.k),
          e.ɵɵdirectiveInject(Be.E),
          e.ɵɵdirectiveInject(Ye.RO),
          e.ɵɵdirectiveInject(ke),
          e.ɵɵdirectiveInject(e.INJECTOR),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (Rn.ɵcmp = e.ɵɵdefineComponent({
          type: Rn,
          selectors: [["app-instant-trade-bottom-form"]],
          outputs: {
            allowRefreshChange: "allowRefreshChange",
            instantTradeInfoChange: "instantTradeInfoChange",
            tradeStatusChange: "tradeStatusChange",
          },
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 4,
          vars: 8,
          consts: [
            ["class", "instant-trade-bottom-form", 4, "ngLet"],
            [1, "instant-trade-bottom-form__swap"],
            [
              3,
              "needApprove",
              "withApproveButton",
              "status",
              "buttonText",
              "isOnramper",
              "onSwapClick",
              "onApproveClick",
              "onUpdateRateClick",
            ],
            [1, "instant-trade-bottom-form"],
            [1, "instant-trade-bottom-form__body"],
            [1, "instant-trade-bottom-form__body-top"],
            [1, "instant-trade-bottom-form__left-part"],
            ["formType", "to"],
            [
              "class",
              "instant-trade-bottom-form__amount",
              3,
              "ngClass",
              4,
              "ngLet",
            ],
            [4, "noFrame"],
            [4, "ngIf"],
            [1, "instant-trade-bottom-form__amount", 3, "ngClass"],
            [4, "onlyFrame"],
            [
              "class",
              "instant-trade-bottom-form__token-amount",
              3,
              "ngClass",
              4,
              "ngIf",
              "ngIfElse",
            ],
            ["iframeSkeleton", ""],
            [
              "tuiHintMode",
              "error",
              1,
              "instant-trade-bottom-form__hint_error",
              3,
              "inlineSVG",
              "tuiHint",
            ],
            [3, "assetType", 4, "ngIf"],
            [3, "assetType"],
            [1, "instant-trade-bottom-form__token-amount", 3, "ngClass"],
            [1, "instant-trade-bottom-form__amount_skeleton-container"],
            [1, "tui-skeleton", "instant-trade-bottom-form__amount_skeleton"],
            ["class", "instant-trade-bottom-form__iframe-info", 4, "onlyFrame"],
            [1, "instant-trade-bottom-form__iframe-info"],
            [
              "class",
              "instant-trade-bottom-form__providers",
              3,
              "providersData",
              "onSelectProvider",
              4,
              "ngIf",
            ],
            [
              1,
              "instant-trade-bottom-form__providers",
              3,
              "providersData",
              "onSelectProvider",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, zc, 9, 4, "div", 0),
              e.ɵɵelementStart(1, "div", 1)(2, "app-swap-button-container", 2),
              e.ɵɵlistener("onSwapClick", function () {
                return n.createTrade();
              })("onApproveClick", function () {
                return n.approveTrade();
              })("onUpdateRateClick", function () {
                return n.onSetHiddenData();
              }),
              e.ɵɵpipe(3, "async"),
              e.ɵɵelementEnd()()),
              2 & t &&
                (e.ɵɵproperty("ngLet", !0 !== n.isIframe),
                e.ɵɵadvance(2),
                e.ɵɵproperty("needApprove", n.needApprove)(
                  "withApproveButton",
                  n.withApproveButton
                )("status", n.tradeStatus)(
                  "buttonText",
                  n.ethWethTrade ? (n.isFromNative ? "Wrap" : "Unwrap") : "Swap"
                )("isOnramper", e.ɵɵpipeBind1(3, 6, n.isOnramper$)));
          },
          dependencies: [
            _t,
            Lt,
            Ve,
            et,
            m.mk,
            m.O5,
            B.e,
            de.a,
            Fe.T,
            Qe,
            G.d$,
            R.D,
            Nn,
            m.Ov,
            Ce.N,
            E.X$,
            Te.f,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}html.iframe-horizontal   [_nghost-%COMP%]{display:flex}.instant-trade-bottom-form[_ngcontent-%COMP%]{padding:30px 0 20px}html.iframe-horizontal[_nghost-%COMP%]   .instant-trade-bottom-form[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .instant-trade-bottom-form[_ngcontent-%COMP%]{position:relative;width:363px;height:50px;padding:0 7px 0 16px;background:var(--primary-background);border-radius:10px}html.iframe-horizontal:not(.dark)[_nghost-%COMP%]   .instant-trade-bottom-form[_ngcontent-%COMP%], html.iframe-horizontal:not(.dark)   [_nghost-%COMP%]   .instant-trade-bottom-form[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form[_ngcontent-%COMP%]{width:100%;padding:0!important;background-color:transparent}.instant-trade-bottom-form__hint_error[_ngcontent-%COMP%]{display:flex;align-items:center;width:15px;margin-left:10px;cursor:help}.instant-trade-bottom-form__hint_error[_ngcontent-%COMP%]     svg path{fill:#dfcb5f}.instant-trade-bottom-form__left-part[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between}html.iframe-horizontal[_nghost-%COMP%]   .instant-trade-bottom-form__left-part[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .instant-trade-bottom-form__left-part[_ngcontent-%COMP%]{order:2;margin-left:auto}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form__left-part[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form__left-part[_ngcontent-%COMP%]{width:100%;margin-bottom:6px}.instant-trade-bottom-form__provider-badge[_ngcontent-%COMP%]{padding:2px 6px;color:var(--primary-text);font-weight:300;font-size:14px;text-transform:capitalize}.instant-trade-bottom-form__providers[_ngcontent-%COMP%]{display:block;margin-top:50px}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form__body[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form__body[_ngcontent-%COMP%]{position:relative}html.iframe-horizontal[_nghost-%COMP%]   .instant-trade-bottom-form__body[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .instant-trade-bottom-form__body[_ngcontent-%COMP%]{height:100%}.instant-trade-bottom-form__body-top[_ngcontent-%COMP%]{display:flex;grid-gap:10px;justify-content:space-between;min-height:60px;overflow:hidden}html.iframe[_nghost-%COMP%]   .instant-trade-bottom-form__body-top[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .instant-trade-bottom-form__body-top[_ngcontent-%COMP%]{grid-gap:0}html.iframe-horizontal[_nghost-%COMP%]   .instant-trade-bottom-form__body-top[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .instant-trade-bottom-form__body-top[_ngcontent-%COMP%]{align-items:center;width:100%;height:100%;min-height:unset}@media (max-width: 420px){.instant-trade-bottom-form__body-top[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form__body-top[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form__body-top[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:52px;overflow:visible}.instant-trade-bottom-form__amount[_ngcontent-%COMP%]{text-align:right}html.iframe-horizontal[_nghost-%COMP%]   .instant-trade-bottom-form__amount[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .instant-trade-bottom-form__amount[_ngcontent-%COMP%]{order:1}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form__amount[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form__amount[_ngcontent-%COMP%]{position:relative;display:flex;width:100%;margin-bottom:19px}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form__amount[_ngcontent-%COMP%]   app-iframe-asset-type-indicator[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form__amount[_ngcontent-%COMP%]   app-iframe-asset-type-indicator[_ngcontent-%COMP%]{margin-right:15px}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form__amount_skeleton-container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form__amount_skeleton-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;height:50px;padding-left:16px;background-color:var(--primary-background);border-radius:10px}html.iframe-vertical:not(.dark)[_nghost-%COMP%]   .instant-trade-bottom-form__amount_skeleton-container[_ngcontent-%COMP%], html.iframe-vertical:not(.dark)   [_nghost-%COMP%]   .instant-trade-bottom-form__amount_skeleton-container[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}.instant-trade-bottom-form__amount_skeleton[_ngcontent-%COMP%]{width:200px;height:40px}.instant-trade-bottom-form__amount__output_error[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;height:35px;font-weight:300;font-size:16px;letter-spacing:2px}.instant-trade-bottom-form__token-amount[_ngcontent-%COMP%]{max-width:300px;overflow:auto;color:var(--primary-text);font-weight:400;font-size:22px;line-height:35px;letter-spacing:.1em;scrollbar-width:none;transition:opacity ease-in-out .3s}html.iframe-horizontal[_nghost-%COMP%]   .instant-trade-bottom-form__token-amount[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .instant-trade-bottom-form__token-amount[_ngcontent-%COMP%]{margin-bottom:0;font-size:20px}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form__token-amount[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form__token-amount[_ngcontent-%COMP%]{flex:1;width:100%;max-width:unset;height:50px;margin-bottom:0;padding-left:16px;font-size:20px;line-height:50px;text-align:left;background-color:var(--primary-background);border-radius:10px}html.iframe-vertical:not(.dark)[_nghost-%COMP%]   .instant-trade-bottom-form__token-amount[_ngcontent-%COMP%], html.iframe-vertical:not(.dark)   [_nghost-%COMP%]   .instant-trade-bottom-form__token-amount[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}.instant-trade-bottom-form__token-amount_loading[_ngcontent-%COMP%]{opacity:.25}.instant-trade-bottom-form__token-amount_placeholder[_ngcontent-%COMP%]{color:#757575}.instant-trade-bottom-form__token-amount[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.instant-trade-bottom-form[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%]{display:block;margin-top:6px;margin-left:20px}html.iframe[_nghost-%COMP%]   .instant-trade-bottom-form[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .instant-trade-bottom-form[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%]{margin-top:0;margin-left:4px}.instant-trade-bottom-form__iframe-info[_ngcontent-%COMP%]{position:absolute;bottom:-33px;left:0;display:flex;align-items:center}.instant-trade-bottom-form__iframe-info[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{margin-right:15px}.instant-trade-bottom-form__iframe-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{white-space:nowrap}html.iframe[_nghost-%COMP%]   .instant-trade-bottom-form__iframe-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .instant-trade-bottom-form__iframe-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:block;height:27px;padding:5px 10px;color:var(--tui-text-02);font-size:12px;line-height:17px;background-color:var(--primary-background);border-radius:10px}html.iframe:not(.dark)[_nghost-%COMP%]   .instant-trade-bottom-form__iframe-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], html.iframe:not(.dark)   [_nghost-%COMP%]   .instant-trade-bottom-form__iframe-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form__swap[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form__swap[_ngcontent-%COMP%]{padding:0!important}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form__swap[_ngcontent-%COMP%]   app-swap-button-container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form__swap[_ngcontent-%COMP%]   app-swap-button-container[_ngcontent-%COMP%]{width:100%;margin-top:16px!important}.instant-trade-bottom-form__swap[_ngcontent-%COMP%]   app-swap-button-container[_ngcontent-%COMP%]{display:block;margin-top:16px}html.iframe-horizontal[_nghost-%COMP%]   .instant-trade-bottom-form__swap[_ngcontent-%COMP%]   app-swap-button-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .instant-trade-bottom-form__swap[_ngcontent-%COMP%]   app-swap-button-container[_ngcontent-%COMP%]{margin-top:0;margin-left:12px}.instant-trade-bottom-form[_ngcontent-%COMP%]   app-target-network-address[_ngcontent-%COMP%]{display:block;margin-top:10px}html.iframe-vertical[_nghost-%COMP%]   .instant-trade-bottom-form[_ngcontent-%COMP%]   app-target-network-address[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .instant-trade-bottom-form[_ngcontent-%COMP%]   app-target-network-address[_ngcontent-%COMP%]{margin-top:15px}@media (max-width: 651px){.instant-trade-bottom-form[_ngcontent-%COMP%]{padding:20px}.instant-trade-bottom-form__swap[_ngcontent-%COMP%]{padding:0 20px}.instant-trade-bottom-form__token-amount[_ngcontent-%COMP%]{margin-bottom:0}}@media (max-width: 420px){.instant-trade-bottom-form__token-amount[_ngcontent-%COMP%]{text-align:left}.instant-trade-bottom-form[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%]{margin-left:0}}",
          ],
          changeDetection: 0,
        }));
      var ji = l(81731),
        Sr = l(22529),
        Yc = l(40570),
        zi = l(94618),
        Yi = l(96053);
      function Wc(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "translate"),
          e.ɵɵelementContainerEnd()),
          2 & r &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(
                2,
                1,
                "crossChainPage.swapSchemeModal.transactionCompleted"
              ),
              " "
            ));
      }
      function Uc(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "translate"),
          e.ɵɵelementContainerEnd()),
          2 & r &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(
                2,
                1,
                "crossChainPage.swapSchemeModal.transactionIsBeingProcessed"
              ),
              " "
            ));
      }
      function Gc(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "translate"),
          e.ɵɵelementContainerEnd()),
          2 & r &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(
                2,
                1,
                "crossChainPage.swapSchemeModal.transactionNotCompleted"
              ),
              " "
            ));
      }
      function Kc(r, t) {
        if ((1 & r && e.ɵɵelement(0, "img", 32), 2 & r)) {
          const n = e.ɵɵnextContext(2).ngLet;
          e.ɵɵproperty(
            "src",
            n
              ? "assets/images/icons/white_loader.svg"
              : "assets/images/icons/black_loader.svg",
            e.ɵɵsanitizeUrl
          );
        }
      }
      function Zc(r, t) {
        if ((1 & r && e.ɵɵelement(0, "img", 33), 2 & r)) {
          const n = e.ɵɵnextContext(2).ngLet;
          e.ɵɵproperty(
            "src",
            n
              ? "assets/images/icons/checkmark/checkmark-thin-white.svg"
              : "assets/images/icons/checkmark/checkmark-thin-black.svg",
            e.ɵɵsanitizeUrl
          );
        }
      }
      function Xc(r, t) {
        if ((1 & r && e.ɵɵelement(0, "img", 32), 2 & r)) {
          const n = e.ɵɵnextContext(2).ngLet;
          e.ɵɵproperty(
            "src",
            n
              ? "assets/images/icons/white_loader.svg"
              : "assets/images/icons/black_loader.svg",
            e.ɵɵsanitizeUrl
          );
        }
      }
      function Qc(r, t) {
        if ((1 & r && e.ɵɵelement(0, "img", 33), 2 & r)) {
          const n = e.ɵɵnextContext(2).ngLet;
          e.ɵɵproperty(
            "src",
            n
              ? "assets/images/icons/checkmark/checkmark-thin-white.svg"
              : "assets/images/icons/checkmark/checkmark-thin-black.svg",
            e.ɵɵsanitizeUrl
          );
        }
      }
      function Jc(r, t) {
        1 & r && e.ɵɵelement(0, "div", 34);
      }
      function qc(r, t) {
        1 & r && e.ɵɵelement(0, "hr");
      }
      function el(r, t) {
        1 & r && e.ɵɵelement(0, "div", 34);
      }
      function tl(r, t) {
        1 & r && e.ɵɵelement(0, "hr");
      }
      function nl(r, t) {
        if ((1 & r && e.ɵɵelement(0, "img", 32), 2 & r)) {
          const n = e.ɵɵnextContext(2).ngLet;
          e.ɵɵproperty(
            "src",
            n
              ? "assets/images/icons/white_loader.svg"
              : "assets/images/icons/black_loader.svg",
            e.ɵɵsanitizeUrl
          );
        }
      }
      function rl(r, t) {
        if ((1 & r && e.ɵɵelement(0, "img", 32), 2 & r)) {
          const n = e.ɵɵnextContext(2).ngLet;
          e.ɵɵproperty(
            "src",
            n
              ? "assets/images/icons/white_loader.svg"
              : "assets/images/icons/black_loader.svg",
            e.ɵɵsanitizeUrl
          );
        }
      }
      function il(r, t) {
        if ((1 & r && e.ɵɵelement(0, "img", 33), 2 & r)) {
          const n = e.ɵɵnextContext(2).ngLet;
          e.ɵɵproperty(
            "src",
            n
              ? "assets/images/icons/checkmark/checkmark-thin-white.svg"
              : "assets/images/icons/checkmark/checkmark-thin-black.svg",
            e.ɵɵsanitizeUrl
          );
        }
      }
      function ol(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-rubic-button", 35),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.revertTrade());
            }),
            e.ɵɵpipe(1, "async"),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "translate"),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵproperty("loading", e.ɵɵpipeBind1(1, 2, n.revertBtnLoading$)),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(3, 4, "revert"),
              " "
            );
        }
      }
      const Wi = function (r, t) {
        return { scheme__line_default: r, scheme__line_success: t };
      };
      function al(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 1),
            e.ɵɵtemplate(2, Wc, 3, 3, "ng-container", 2),
            e.ɵɵtemplate(3, Uc, 3, 3, "ng-container", 2),
            e.ɵɵtemplate(4, Gc, 3, 3, "ng-container", 2),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "div", 3),
            e.ɵɵtext(6),
            e.ɵɵpipe(7, "translate"),
            e.ɵɵelementStart(8, "span", 4),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.closeModalAndOpenMyTrades());
            }),
            e.ɵɵtext(9),
            e.ɵɵpipe(10, "translate"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(11, "div", 5)(12, "div", 6),
            e.ɵɵelement(13, "img", 7),
            e.ɵɵelementStart(14, "div", 8)(15, "div", 9),
            e.ɵɵtext(16),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(17, "div", 10),
            e.ɵɵtext(18),
            e.ɵɵelementEnd()()(),
            e.ɵɵelement(19, "img", 11),
            e.ɵɵelementStart(20, "div", 12),
            e.ɵɵelement(21, "img", 7),
            e.ɵɵelementStart(22, "div", 8)(23, "div", 9),
            e.ɵɵtext(24),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(25, "div", 10),
            e.ɵɵtext(26),
            e.ɵɵelementEnd()()()(),
            e.ɵɵelementStart(27, "div", 13)(28, "div", 14),
            e.ɵɵelementContainerStart(29, 15),
            e.ɵɵtemplate(30, Kc, 1, 1, "img", 16),
            e.ɵɵtemplate(31, Zc, 1, 1, "img", 17),
            e.ɵɵelementContainerEnd(),
            e.ɵɵelement(32, "img", 18),
            e.ɵɵelementStart(33, "div", 19),
            e.ɵɵtext(34),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(35, "div", 20),
            e.ɵɵelementContainerStart(36, 15),
            e.ɵɵtemplate(37, Xc, 1, 1, "img", 16),
            e.ɵɵtemplate(38, Qc, 1, 1, "img", 17),
            e.ɵɵelementContainerEnd(),
            e.ɵɵelementStart(39, "div", 21),
            e.ɵɵtemplate(40, Jc, 1, 0, "div", 22),
            e.ɵɵtemplate(41, qc, 1, 0, "hr", 2),
            e.ɵɵelementEnd(),
            e.ɵɵelement(42, "img", 23),
            e.ɵɵelementStart(43, "div", 24),
            e.ɵɵtemplate(44, el, 1, 0, "div", 22),
            e.ɵɵtemplate(45, tl, 1, 0, "hr", 2),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(46, "div", 25),
            e.ɵɵtext(47),
            e.ɵɵelement(48, "br"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(49, "div", 26),
            e.ɵɵelementContainerStart(50, 15),
            e.ɵɵtemplate(51, nl, 1, 1, "img", 16),
            e.ɵɵtemplate(52, rl, 1, 1, "img", 16),
            e.ɵɵtemplate(53, il, 1, 1, "img", 17),
            e.ɵɵelementContainerEnd(),
            e.ɵɵelement(54, "img", 27),
            e.ɵɵelementStart(55, "div", 28),
            e.ɵɵtext(56),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementStart(57, "div", 29),
            e.ɵɵtext(58),
            e.ɵɵpipe(59, "translate"),
            e.ɵɵelementStart(60, "a", 30),
            e.ɵɵtext(61, " support@rubic.exchange"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(62, ". "),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(63, ol, 4, 6, "app-rubic-button", 31),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngIf",
              n.srcStatus === i.CrossChainTxStatus.SUCCESS &&
                n.dstStatus === i.CrossChainTxStatus.SUCCESS
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              n.srcStatus === i.CrossChainTxStatus.PENDING ||
                n.dstStatus === i.CrossChainTxStatus.PENDING ||
                n.tradeProcessingStatus === i.CrossChainTxStatus.PENDING ||
                n.dstStatus === i.CrossChainTxStatus.REVERT
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              n.srcStatus === i.CrossChainTxStatus.FAIL ||
                n.dstStatus === i.CrossChainTxStatus.FAIL
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(
                7,
                37,
                "crossChainPage.swapSchemeModal.transactionCanBeTracked"
              ),
              " "
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(
                10,
                39,
                "crossChainPage.swapSchemeModal.recentTrades"
              ),
              ""
            ),
            e.ɵɵadvance(4),
            e.ɵɵproperty(
              "src",
              i.fromToken.image ||
                "assets/images/icons/coins/default-token-ico.svg",
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(i.fromToken.symbol),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(i.fromBlockchain.name),
            e.ɵɵadvance(3),
            e.ɵɵproperty(
              "src",
              i.toToken.image ||
                "assets/images/icons/coins/default-token-ico.svg",
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(i.toToken.symbol),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(i.toBlockchain.name),
            e.ɵɵadvance(1),
            e.ɵɵclassProp(
              "scheme_failed",
              n.srcStatus === i.CrossChainTxStatus.FAIL ||
                n.dstStatus === i.CrossChainTxStatus.FAIL
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngSwitch", n.srcStatus),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", i.CrossChainTxStatus.PENDING),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", i.CrossChainTxStatus.SUCCESS),
            e.ɵɵadvance(1),
            e.ɵɵproperty("src", i.srcProvider.image, e.ɵɵsanitizeUrl),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(i.srcProvider.name),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngSwitch", n.tradeProcessingStatus),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", i.CrossChainTxStatus.PENDING),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", i.CrossChainTxStatus.SUCCESS),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngClass",
              e.ɵɵpureFunction2(
                43,
                Wi,
                n.srcStatus === i.CrossChainTxStatus.FAIL ||
                  n.dstStatus === i.CrossChainTxStatus.FAIL,
                n.srcStatus === i.CrossChainTxStatus.SUCCESS
              )
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.srcStatus === i.CrossChainTxStatus.PENDING),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.srcStatus !== i.CrossChainTxStatus.PENDING),
            e.ɵɵadvance(1),
            e.ɵɵproperty("src", i.bridgeType.image, e.ɵɵsanitizeUrl),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngClass",
              e.ɵɵpureFunction2(
                46,
                Wi,
                n.srcStatus === i.CrossChainTxStatus.FAIL ||
                  n.dstStatus === i.CrossChainTxStatus.FAIL,
                n.dstStatus === i.CrossChainTxStatus.SUCCESS
              )
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              n.dstStatus === i.CrossChainTxStatus.PENDING ||
                n.dstStatus === i.CrossChainTxStatus.REVERT
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              n.dstStatus !== i.CrossChainTxStatus.PENDING &&
                n.dstStatus !== i.CrossChainTxStatus.REVERT
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(i.bridgeType.name),
            e.ɵɵadvance(3),
            e.ɵɵproperty("ngSwitch", n.dstStatus),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", i.CrossChainTxStatus.PENDING),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", i.CrossChainTxStatus.REVERT),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngSwitchCase", i.CrossChainTxStatus.SUCCESS),
            e.ɵɵadvance(1),
            e.ɵɵproperty("src", i.dstProvider.image, e.ɵɵsanitizeUrl),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(i.dstProvider.name),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(
                59,
                41,
                "crossChainPage.swapSchemeModal.ifTransactionNotCompleted"
              ),
              " "
            ),
            e.ɵɵadvance(5),
            e.ɵɵproperty("ngIf", n.dstStatus === i.CrossChainTxStatus.REVERT);
        }
      }
      const sl = function (r, t, n) {
        return { srcStatus: r, dstStatus: t, tradeProcessingStatus: n };
      };
      function cl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, al, 64, 49, "ng-container", 0),
            e.ɵɵpipe(2, "async"),
            e.ɵɵpipe(3, "async"),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngLet",
              e.ɵɵpureFunction3(
                7,
                sl,
                e.ɵɵpipeBind1(2, 1, n.srcTxStatus$),
                e.ɵɵpipeBind1(3, 3, n.dstTxStatus$),
                e.ɵɵpipeBind1(4, 5, n.tradeProcessingStatus$)
              )
            );
        }
      }
      class Bn {
        constructor(t, n, i, a, s, c, p, d, _, f) {
          (this.headerStore = t),
            (this.errorService = n),
            (this.notificationService = i),
            (this.themeService = a),
            (this.translateService = s),
            (this.recentTradesStoreService = c),
            (this.commonModalService = p),
            (this.context = d),
            (this.destroy$ = _),
            (this.sdkService = f),
            (this._srcTxStatus$ = new w.X(o.TxStatus.PENDING)),
            (this.srcTxStatus$ = this._srcTxStatus$.asObservable()),
            (this._dstTxStatus$ = new w.X(o.TxStatus.UNKNOWN)),
            (this.dstTxStatus$ = this._dstTxStatus$.asObservable()),
            (this._tradeProcessingStatus$ = new w.X(o.TxStatus.UNKNOWN)),
            (this.tradeProcessingStatus$ =
              this._tradeProcessingStatus$.asObservable()),
            (this.CrossChainTxStatus = o.TxStatus),
            (this._revertBtnLoading$ = new w.X(!1)),
            (this.revertBtnLoading$ = this._revertBtnLoading$.asObservable()),
            (this.isDarkTheme$ = this.themeService.theme$.pipe(
              (0, v.U)((x) => "dark" === x)
            )),
            this.setTradeData(this.context.data);
        }
        ngOnInit() {
          this.initSrcTxStatusPolling(),
            this.initTradeProcessingStatusPolling(),
            this.initDstTxStatusPolling();
        }
        initSrcTxStatusPolling() {
          (0, xn.F)(5e3)
            .pipe(
              (0, Hr.g)(new Date(Date.now() + 2e3)),
              (0, Ee.O)(-1),
              (0, N.w)(() =>
                (0, je.D)(
                  this.sdkService.crossChainStatusManager.getCrossChainStatus(
                    {
                      fromBlockchain: this.fromToken.blockchain,
                      toBlockchain: this.toToken.blockchain,
                      srcTxHash: this.srcTxHash,
                      txTimestamp: this.timestamp,
                      lifiBridgeType: this.bridgeType.name,
                      viaUuid: this.viaUuid,
                      rangoRequestId: this.rangoRequestId,
                      amountOutMin: this.amountOutMin,
                      changenowId: this.changenowId,
                    },
                    this.crossChainProvider
                  )
                )
              ),
              (0, ye.b)((t) => this._srcTxStatus$.next(t.srcTxStatus)),
              (0, Sr.o)((t) => t.srcTxStatus === o.TxStatus.PENDING),
              (0, O.R)(this.destroy$)
            )
            .subscribe();
        }
        initTradeProcessingStatusPolling() {
          this.srcTxStatus$
            .pipe(
              (0, re.h)((t) => t === o.TxStatus.SUCCESS),
              (0, ye.b)(() =>
                this._tradeProcessingStatus$.next(o.TxStatus.PENDING)
              ),
              (0, N.w)(() =>
                (0, xn.F)(7e3).pipe(
                  (0, Ee.O)(-1),
                  (0, N.w)(() => {
                    const t =
                      this.srcWeb3Public instanceof o.EvmWeb3Public
                        ? this.srcWeb3Public.getTransactionReceipt
                        : this.srcWeb3Public.getTransactionInfo;
                    return (0, Li.D)([
                      this.srcWeb3Public.getBlockNumber(),
                      t(this.srcTxHash),
                    ]).pipe(
                      (0, v.U)(([n, i]) =>
                        n - i.blockNumber >
                        (this.fromToken.blockchain ===
                        o.BLOCKCHAIN_NAME.ETHEREUM
                          ? 5
                          : this.fromToken.blockchain === o.BLOCKCHAIN_NAME.TRON
                          ? 20
                          : 10)
                          ? o.TxStatus.SUCCESS
                          : o.TxStatus.PENDING
                      ),
                      (0, br.K)(
                        (n) => (
                          console.debug(
                            "[General] error getting current block number",
                            n
                          ),
                          (0, L.of)(o.TxStatus.PENDING)
                        )
                      )
                    );
                  }),
                  (0, ye.b)((t) => this._tradeProcessingStatus$.next(t))
                )
              ),
              (0, Sr.o)((t) => t === o.TxStatus.PENDING),
              (0, O.R)(this.destroy$)
            )
            .subscribe();
        }
        initDstTxStatusPolling() {
          this.tradeProcessingStatus$
            .pipe(
              (0, re.h)((t) => t === o.TxStatus.SUCCESS),
              (0, ye.b)(() => this._dstTxStatus$.next(o.TxStatus.PENDING)),
              (0, N.w)(() =>
                (0, xn.F)(1e4).pipe(
                  (0, Ee.O)(-1),
                  (0, N.w)(() =>
                    (0, je.D)(
                      this.sdkService.crossChainStatusManager.getCrossChainStatus(
                        {
                          fromBlockchain: this.fromToken.blockchain,
                          toBlockchain: this.toToken.blockchain,
                          srcTxHash: this.srcTxHash,
                          txTimestamp: this.timestamp,
                          lifiBridgeType: this.bridgeType.name.toLowerCase(),
                          viaUuid: this.viaUuid,
                          rangoRequestId: this.rangoRequestId,
                          amountOutMin: this.amountOutMin,
                          changenowId: this.changenowId,
                        },
                        this.crossChainProvider
                      )
                    )
                  )
                )
              ),
              (0, ye.b)((t) => {
                this._dstTxStatus$.next(t.dstTxStatus);
              }),
              (0, Sr.o)((t) => t.dstTxStatus === o.TxStatus.PENDING),
              (0, O.R)(this.destroy$)
            )
            .subscribe();
        }
        revertTrade() {
          var t = this;
          return (0, T.Z)(function* () {
            let n;
            const i = () => {
              n = t.notificationService.show(
                t.translateService.instant("bridgePage.progressMessage"),
                {
                  label: t.translateService.instant(
                    "tradeInProgress"
                  ),
                  status: "info",
                  autoClose: !1,
                }
              );
            };
            t._revertBtnLoading$.next(!0);
            try {
              t.crossChainProvider === zi.CROSS_CHAIN_TRADE_TYPE.CELER_BRIDGE &&
                (yield o.CrossChainCbridgeManager.makeRefund(
                  t.fromBlockchain.key,
                  t.srcTxHash,
                  t.amountOutMin,
                  i
                )),
                t.crossChainProvider === zi.CROSS_CHAIN_TRADE_TYPE.SYMBIOSIS &&
                  (yield t.sdkService.symbiosis.revertTrade(t.srcTxHash, {
                    onConfirm: i,
                  })),
                n.unsubscribe(),
                t.notificationService.show(
                  t.translateService.instant("bridgePage.successMessage"),
                  {
                    label: t.translateService.instant(
                      "successfulTradeTitle"
                    ),
                    status: "success",
                    autoClose: 15e3,
                  }
                ),
                t.recentTradesStoreService.updateTrade({
                  ...t.recentTradesStoreService.getSpecificCrossChainTrade(
                    t.srcTxHash,
                    t.fromToken.blockchain
                  ),
                  calculatedStatusFrom: o.TxStatus.SUCCESS,
                  calculatedStatusTo: o.TxStatus.FALLBACK,
                }),
                t.context.completeWith(!0);
            } catch (a) {
              t.errorService.catch(a);
            } finally {
              t._revertBtnLoading$.next(!1), n?.unsubscribe();
            }
          })();
        }
        closeModalAndOpenMyTrades() {
          this.context.completeWith(!1),
            this.commonModalService
              .openRecentTradesModal({
                size: this.headerStore.isMobile ? "page" : "xl",
              })
              .subscribe();
        }
        setTradeData(t) {
          (this.srcProvider = t.srcProvider),
            (this.dstProvider = t.dstProvider),
            (this.fromToken = t.fromToken),
            (this.toToken = t.toToken),
            (this.fromBlockchain = Yi.Y[this.fromToken.blockchain]),
            (this.toBlockchain = Yi.Y[this.toToken.blockchain]),
            (this.srcTxHash = t.srcTxHash),
            (this.crossChainProvider = t.crossChainProvider),
            (this.srcWeb3Public = o.Injector.web3PublicService.getWeb3Public(
              t.fromToken.blockchain
            )),
            (this.bridgeType = t.bridgeType),
            (this.viaUuid = t.viaUuid),
            (this.rangoRequestId = t.rangoRequestId),
            (this.timestamp = t.timestamp),
            (this.amountOutMin = t.amountOutMin),
            (this.changenowId = t.changenowId);
        }
      }
      (Bn.ɵfac = function (t) {
        return new (t || Bn)(
          e.ɵɵdirectiveInject(fr.N),
          e.ɵɵdirectiveInject(cn.r),
          e.ɵɵdirectiveInject(rn.T),
          e.ɵɵdirectiveInject(ji.f),
          e.ɵɵdirectiveInject(E.sK),
          e.ɵɵdirectiveInject(yr.o),
          e.ɵɵdirectiveInject(Yc.g),
          e.ɵɵdirectiveInject(z.yf),
          e.ɵɵdirectiveInject(k.a3, 2),
          e.ɵɵdirectiveInject(it.w)
        );
      }),
        (Bn.ɵcmp = e.ɵɵdefineComponent({
          type: Bn,
          selectors: [["polymorpheus-swap-scheme-modal"]],
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 2,
          vars: 3,
          consts: [
            [4, "ngLet"],
            [1, "title"],
            [4, "ngIf"],
            [1, "description"],
            [1, "highlight_green", 3, "click"],
            [1, "pair"],
            [1, "pair__from"],
            ["alt", "", 1, "pair__token-image", 3, "src"],
            [1, "pair__data"],
            [1, "pair__symbol"],
            [1, "pair__blockchain"],
            [
              "src",
              "assets/images/icons/arrow/long-arrow-right-grey.svg",
              "alt",
              "",
              1,
              "pair__arrow",
            ],
            [1, "pair__to"],
            [1, "scheme"],
            [1, "scheme__src"],
            [3, "ngSwitch"],
            [
              "class",
              "scheme__status-icon scheme__status-icon_rotating",
              "alt",
              "",
              3,
              "src",
              4,
              "ngSwitchCase",
            ],
            [
              "class",
              "scheme__status-icon",
              "alt",
              "",
              3,
              "src",
              4,
              "ngSwitchCase",
            ],
            [1, "scheme__src-icon", 3, "src"],
            [1, "scheme__src-name"],
            [1, "scheme__pool"],
            [1, "scheme__line", "scheme__line_src", 3, "ngClass"],
            ["class", "scheme__line-dashed", 4, "ngIf"],
            ["alt", "Bridge provider", 1, "scheme__pool-icon", 3, "src"],
            [
              1,
              "scheme__line",
              "scheme__line_default",
              "scheme__line_dst",
              3,
              "ngClass",
            ],
            [1, "scheme__pool-name"],
            [1, "scheme__dst"],
            [1, "scheme__dst-icon", 3, "src"],
            [1, "scheme__dst-name"],
            [1, "caption"],
            [
              "href",
              "mailto:support@rubic.exchange",
              1,
              "highlight_black-white",
            ],
            [
              "appearance",
              "primary",
              "size",
              "s",
              3,
              "loading",
              "onClick",
              4,
              "ngIf",
            ],
            [
              "alt",
              "",
              1,
              "scheme__status-icon",
              "scheme__status-icon_rotating",
              3,
              "src",
            ],
            ["alt", "", 1, "scheme__status-icon", 3, "src"],
            [1, "scheme__line-dashed"],
            ["appearance", "primary", "size", "s", 3, "loading", "onClick"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, cl, 5, 11, "ng-container", 0),
              e.ɵɵpipe(1, "async")),
              2 & t &&
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(1, 1, n.isDarkTheme$));
          },
          dependencies: [m.mk, m.O5, m.RF, m.n9, ie.j, B.e, m.Ov, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}  .tui-dialog{border:none}.title[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:26px;line-height:31px;letter-spacing:normal;margin-bottom:8px;text-align:center}html.iframe-horizontal[_nghost-%COMP%]   .title[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:30px}body.hide-unused-ui[_nghost-%COMP%]   .title[_ngcontent-%COMP%], body.hide-unused-ui   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:20px}@media (max-width: 768px){.title[_ngcontent-%COMP%]{max-width:320px;margin:20px 20px 8px;font-size:20px;line-height:24px;text-align:left}body.hide-unused-ui[_nghost-%COMP%]   .title[_ngcontent-%COMP%], body.hide-unused-ui   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin:20px}html.iframe[_nghost-%COMP%]   .title[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin:20px 20px 40px}}html.dark[_nghost-%COMP%]   .title[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}.description[_ngcontent-%COMP%]{color:#a2a1a5;font-weight:500;font-size:16px;line-height:19px;letter-spacing:normal;margin-bottom:56px;text-align:center}@media (max-width: 768px){.description[_ngcontent-%COMP%]{margin:0 20px 30px;font-size:13px;line-height:15px;text-align:left}}body.hide-unused-ui[_nghost-%COMP%]   .description[_ngcontent-%COMP%], body.hide-unused-ui   [_nghost-%COMP%]   .description[_ngcontent-%COMP%]{display:none}html.iframe[_nghost-%COMP%]   .description[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .description[_ngcontent-%COMP%]{display:none}.description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.pair[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:0 auto 56px}@media (max-width: 768px){.pair[_ngcontent-%COMP%]{margin:0 20px 70px}}html.iframe-horizontal[_nghost-%COMP%]   .pair[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .pair[_ngcontent-%COMP%]{display:none}.pair__arrow[_ngcontent-%COMP%]{width:32px;margin:0 65px}@media (max-width: 768px){.pair__arrow[_ngcontent-%COMP%]{margin:0 32px}}.pair__from[_ngcontent-%COMP%], .pair__to[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(100% - 162px)}@media (max-width: 768px){.pair__from[_ngcontent-%COMP%], .pair__to[_ngcontent-%COMP%]{width:calc(100% - 96px)}}.pair__from[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .pair__to[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:42px;height:42px;margin-right:8px;border-radius:100%}@media (max-width: 768px){.pair__from[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .pair__to[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px;height:38px}}.pair__from[_ngcontent-%COMP%]{justify-content:flex-end}.pair__to[_ngcontent-%COMP%]{justify-content:flex-start}.pair__symbol[_ngcontent-%COMP%]{color:#000;font-weight:500;font-size:20px;line-height:17px;letter-spacing:normal;margin-bottom:4px}html.dark[_nghost-%COMP%]   .pair__symbol[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .pair__symbol[_ngcontent-%COMP%]{color:#e8e8ea}@media (max-width: 768px){.pair__symbol[_ngcontent-%COMP%]{margin-bottom:0;font-size:16px;line-height:17px}}.pair__blockchain[_ngcontent-%COMP%]{color:#8e8d91;font-weight:500;font-size:18px;line-height:16px;letter-spacing:normal}@media (max-width: 768px){.pair__blockchain[_ngcontent-%COMP%]{font-size:14px;line-height:16px}}.scheme[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;max-width:600px;margin:0 auto 16px}@media (max-width: 768px){.scheme[_ngcontent-%COMP%]{margin:0 20px 40px}}.scheme__status-icon[_ngcontent-%COMP%]{position:absolute;top:-25px}.scheme__status-icon_rotating[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_rotating 2s linear infinite}.scheme_failed[_ngcontent-%COMP%]{opacity:.4}.scheme__pool[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;flex-grow:1;align-items:center}.scheme__pool-icon[_ngcontent-%COMP%]{position:relative;z-index:3;width:32px;height:32px;margin-bottom:8px;border-radius:100%}.scheme__pool-name[_ngcontent-%COMP%]{color:#000;font-weight:500;font-size:18px;line-height:21px;letter-spacing:normal;text-align:center}html.dark[_nghost-%COMP%]   .scheme__pool-name[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .scheme__pool-name[_ngcontent-%COMP%]{color:#fff;font-weight:600}@media (max-width: 768px){.scheme__pool-name[_ngcontent-%COMP%]{font-size:14px;line-height:16px}}.scheme__pool-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8e8d91;font-weight:400;font-size:14px;line-height:17px;letter-spacing:normal}html.dark[_nghost-%COMP%]   .scheme__pool-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .scheme__pool-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.scheme__util[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:space-between;width:100%;height:100%}.scheme__util-left[_ngcontent-%COMP%], .scheme__util-right[_ngcontent-%COMP%]{width:32px;height:100%;background-color:red}.scheme__src[_ngcontent-%COMP%], .scheme__dst[_ngcontent-%COMP%]{position:relative;z-index:3;display:flex;flex-direction:column;align-items:center;width:120px}@media (max-width: 768px){.scheme__src[_ngcontent-%COMP%], .scheme__dst[_ngcontent-%COMP%]{width:90px}}.scheme__src-icon[_ngcontent-%COMP%], .scheme__dst-icon[_ngcontent-%COMP%]{width:32px;height:32px;margin-bottom:8px;border-radius:100%}.scheme__src-name[_ngcontent-%COMP%], .scheme__dst-name[_ngcontent-%COMP%]{color:#000;font-weight:500;font-size:18px;line-height:21px;letter-spacing:normal;text-align:center}html.dark[_nghost-%COMP%]   .scheme__src-name[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .scheme__src-name[_ngcontent-%COMP%], html.dark[_nghost-%COMP%]   .scheme__dst-name[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .scheme__dst-name[_ngcontent-%COMP%]{color:#fff;font-weight:600}@media (max-width: 768px){.scheme__src-name[_ngcontent-%COMP%], .scheme__dst-name[_ngcontent-%COMP%]{font-size:14px;line-height:16px}}.scheme__line[_ngcontent-%COMP%]{position:absolute;width:60%}.scheme__line-dashed[_ngcontent-%COMP%]{height:2px;background:url(/assets/images/icons/dashed-line.svg)}.scheme__line[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:100%;height:2px}.scheme__line_default[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background:#242327}.scheme__line_success[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{background:var(--primary-color)}.scheme__line_src[_ngcontent-%COMP%]{top:1em;left:-3em;z-index:2}@media (max-width: 768px){.scheme__line_src[_ngcontent-%COMP%]{left:-2em}}.scheme__line_dst[_ngcontent-%COMP%]{top:1em;right:-3em;z-index:1}@media (max-width: 768px){.scheme__line_dst[_ngcontent-%COMP%]{right:-2em}}.caption[_ngcontent-%COMP%]{color:#525155;font-weight:400;font-size:14px;line-height:17px;letter-spacing:normal;max-width:575px;margin:0 auto 1.5em;text-align:center}html.iframe-horizontal[_nghost-%COMP%]   .caption[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .caption[_ngcontent-%COMP%]{margin-bottom:10px}html.dark[_nghost-%COMP%]   .caption[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .caption[_ngcontent-%COMP%]{color:#8e8d91}@media (max-width: 768px){.caption[_ngcontent-%COMP%]{margin:0 20px;font-size:11px;line-height:15px;text-align:left}}.caption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}app-rubic-button[_ngcontent-%COMP%]{display:block;max-width:469px;margin:32px auto 0}.highlight_green[_ngcontent-%COMP%]{color:var(--primary-color)}.highlight_black-white[_ngcontent-%COMP%]{color:#000}html.dark[_nghost-%COMP%]   .highlight_black-white[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .highlight_black-white[_ngcontent-%COMP%]{color:#fff}@keyframes _ngcontent-%COMP%_rotating{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",
          ],
          changeDetection: 0,
        }));
      var Gr = l(98210);
      const g = "assets/images/icons/providers/on-chain/",
        I = "assets/images/icons/providers/bridge/",
        Me = {
          [o.ON_CHAIN_TRADE_TYPE.ACRYPTOS]: {
            name: "Acryptos",
            image: `${g}acryptos.png`,
            color: "#FF0A1C",
          },
          [o.ON_CHAIN_TRADE_TYPE.ALDRIN_EXCHANGE]: {
            name: "AldrinExchange",
            image: `${g}aldrin.svg`,
            color: "#383838",
          },
          [o.ON_CHAIN_TRADE_TYPE.ALGEBRA]: {
            name: "Algebra",
            image: `${g}algebra.svg`,
            color: "#00CAB2",
          },
          [o.ON_CHAIN_TRADE_TYPE.ANNEX]: {
            name: "Annex",
            image: `${g}annex.webp`,
            color: "#FFAD4F",
          },
          [o.ON_CHAIN_TRADE_TYPE.APE_SWAP]: {
            name: "Acryptos",
            image: `${g}ape.svg`,
            color: "#A16552",
          },
          [o.ON_CHAIN_TRADE_TYPE.ARTH_SWAP]: {
            name: "ArthSwap",
            image: `${g}arth.png`,
            color: "#00C6EE",
          },
          [o.ON_CHAIN_TRADE_TYPE.ASTRO_SWAP]: {
            name: "AstroSwap",
            image: `${g}astroswap.png`,
            color: "#adaaaa",
          },
          [o.ON_CHAIN_TRADE_TYPE.AURORA_SWAP]: {
            name: "AuroraSwap",
            image: `${g}auroraswap.svg`,
            color: "#34A5F5",
          },
          [o.ON_CHAIN_TRADE_TYPE.BABY_SWAP]: {
            name: "BabySwap",
            image: `${g}babyswap.svg`,
            color: "#E89B37",
          },
          [o.ON_CHAIN_TRADE_TYPE.BALANCER]: {
            name: "Balancer",
            image: `${g}balancer.svg`,
            color: "",
          },
          [o.ON_CHAIN_TRADE_TYPE.BEAM_SWAP]: {
            name: "BeamSwap",
            image: `${g}beamswap.png`,
            color: "#26B7F0",
          },
          [o.ON_CHAIN_TRADE_TYPE.BI_SWAP]: {
            name: "BiSwap",
            image: `${g}biswap.svg`,
            color: "",
          },
          [o.ON_CHAIN_TRADE_TYPE.BRIDGERS]: {
            name: "Bridgers",
            image: `${g}../bridge/bridgers.png`,
            color: "",
          },
          [o.ON_CHAIN_TRADE_TYPE.CLAIM_SWAP]: {
            name: "ClaimSwap",
            image: `${g}claimswap.png`,
            color: "#181E6A",
          },
          [o.ON_CHAIN_TRADE_TYPE.CREMA_FINANCE]: {
            name: "CremaFinance",
            image: `${g}cremafinance.ico`,
            color: "#6AE2DC",
          },
          [o.ON_CHAIN_TRADE_TYPE.CRONA_SWAP]: {
            name: "CronaSwap",
            image: `${g}cronaswap.webp`,
            color: "#020426",
          },
          [o.ON_CHAIN_TRADE_TYPE.CROPPER_FINANCE]: {
            name: "CropperFinance",
            image: `${g}cropperfinance.ico`,
            color: "#9B5FE3",
          },
          [o.ON_CHAIN_TRADE_TYPE.CROW_FI]: {
            name: "CrowFi",
            image: `${g}crowfi.png`,
            color: "",
          },
          [o.ON_CHAIN_TRADE_TYPE.CRO_DEX]: {
            name: "CroDex",
            image: `${g}crodex.png`,
            color: "#F05A28",
          },
          [o.ON_CHAIN_TRADE_TYPE.CURVE]: {
            name: "Curve",
            image: `${g}curve.svg`,
            color: "",
          },
          [o.ON_CHAIN_TRADE_TYPE.ELK]: {
            name: "Elk",
            image: `${g}elk.png`,
            color: "#009A5C",
          },
          [o.ON_CHAIN_TRADE_TYPE.DEFI_PLAZA]: {
            name: "DefiPlaza",
            image: `${g}defiplaza.png`,
            color: "#5D10C0",
          },
          [o.ON_CHAIN_TRADE_TYPE.DEFI_SWAP]: {
            name: "DefiSwap",
            image: `${g}defiswap.webp`,
            color: "#012C70",
          },
          [o.ON_CHAIN_TRADE_TYPE.DFYN]: {
            name: "Dfyn",
            image: `${g}dfyn.svg`,
            color: "#828CBE",
          },
          [o.ON_CHAIN_TRADE_TYPE.DODO]: {
            name: "Dodo",
            image: `${g}dodo.png`,
            color: "#efc20b",
          },
          [o.ON_CHAIN_TRADE_TYPE.DYSTOPIA]: {
            name: "Dystopia",
            image: `${g}dystopia.png`,
            color: "#085F8E",
          },
          [o.ON_CHAIN_TRADE_TYPE.HONEY_SWAP]: {
            name: "HoneySwap",
            image: `${g}honeyswap.webp`,
            color: "#efc20b",
          },
          [o.ON_CHAIN_TRADE_TYPE.JET_SWAP]: {
            name: "JetSwap",
            image: `${g}jetswap.png`,
            color: "#F7C415",
          },
          [o.ON_CHAIN_TRADE_TYPE.JOE]: {
            name: "Joe",
            image: `${g}joe.png`,
            color: "#6665DD",
          },
          [o.ON_CHAIN_TRADE_TYPE.JUPITER]: {
            name: "Jupiter",
            image: `${g}jupiter.svg`,
            color: "#34A5F5",
          },
          [o.ON_CHAIN_TRADE_TYPE.JUPITER_SWAP]: {
            name: "JupiterSwap",
            image: `${g}jupiterswap.svg`,
            color: "#F27523",
          },
          [o.ON_CHAIN_TRADE_TYPE.J_SWAP]: {
            name: "JSwap",
            image: `${g}jswap.jpg`,
            color: "#5b55e3",
          },
          [o.ON_CHAIN_TRADE_TYPE.KYBER_SWAP]: {
            name: "KyberSwap",
            image: `${g}kyberswap.svg`,
            color: "#31CB9E",
          },
          [o.ON_CHAIN_TRADE_TYPE.LUA_SWAP]: {
            name: "LuaSwap",
            image: `${g}luaswap.png`,
            color: "#FABD45",
          },
          [o.ON_CHAIN_TRADE_TYPE.MAVERICK]: {
            name: "Maverick",
            image: `${g}maverick.png`,
            color: "#6401FF",
          },
          [o.ON_CHAIN_TRADE_TYPE.MDEX]: {
            name: "MDEX",
            image: `${g}mdex.svg`,
            color: "#50B0E4",
          },
          [o.ON_CHAIN_TRADE_TYPE.MESH_SWAP]: {
            name: "MeshSwap",
            image: `${g}meshswap.svg`,
            color: "#BF96FF",
          },
          [o.ON_CHAIN_TRADE_TYPE.MM_FINANCE]: {
            name: "MMFinance",
            image: `${g}mmfinance.png`,
            color: "#F0BC82",
          },
          [o.ON_CHAIN_TRADE_TYPE.MOJITO_SWAP]: {
            name: "MojitoSwap",
            image: `${g}mojitoswap.svg`,
            color: "#0AC4DD",
          },
          [o.ON_CHAIN_TRADE_TYPE.NET_SWAP]: {
            name: "NetSwap",
            image: `${g}netswap.png`,
            color: "#257AF1",
          },
          [o.ON_CHAIN_TRADE_TYPE.OMNIDEX]: {
            name: "Omnidex",
            image: `${g}omnidex.png`,
            color: "#B18D4F",
          },
          [o.ON_CHAIN_TRADE_TYPE.ONE_INCH]: {
            name: "1inch",
            image: `${g}oneinch.svg`,
            color: "#94A6C3",
          },
          [o.ON_CHAIN_TRADE_TYPE.ONE_MOON]: {
            name: "OneMoon",
            image: `${g}onemoon.ico`,
            color: "#0B86FF",
          },
          [o.ON_CHAIN_TRADE_TYPE.ONE_SOL]: {
            name: "1sol",
            image: `${g}onesol.png`,
            color: "",
          },
          [o.ON_CHAIN_TRADE_TYPE.OOLONG_SWAP]: {
            name: "OolongSwap",
            image: `${g}oolongswap.png`,
            color: "#F5A14A",
          },
          [o.ON_CHAIN_TRADE_TYPE.OPEN_OCEAN]: {
            name: "Open Ocean",
            image: `${g}../bridge/openocean.png`,
            color: "#15D9E1",
          },
          [o.ON_CHAIN_TRADE_TYPE.ORCA_SWAP]: {
            name: "OrcaSwap",
            image: `${g}orcaswap.svg`,
            color: "#F2C45B",
          },
          [o.ON_CHAIN_TRADE_TYPE.OSMOSIS_SWAP]: {
            name: "OsmosisSwap",
            image: `${g}../bridge/osmosis.svg`,
            color: "#5E12A0",
          },
          [o.ON_CHAIN_TRADE_TYPE.PANCAKE_SWAP]: {
            name: "PancakeSwap",
            image: `${g}pancakeswap.svg`,
            color: "#00ADE8",
          },
          [o.ON_CHAIN_TRADE_TYPE.PANGOLIN]: {
            name: "Pangolin",
            image: `${g}pangolin.svg`,
            color: "#FC5408",
          },
          [o.ON_CHAIN_TRADE_TYPE.PARA_SWAP]: {
            name: "ParaSwap",
            image: `${g}paraswap.svg`,
            color: "#2e58b0",
          },
          [o.ON_CHAIN_TRADE_TYPE.PEGASYS]: {
            name: "Pegasys",
            image: `${g}pegasys.png`,
            color: "#2CC4D2",
          },
          [o.ON_CHAIN_TRADE_TYPE.PHOTON_SWAP]: {
            name: "PhotonSwap",
            image: `${g}photonswap.png`,
            color: "#8829E2",
          },
          [o.ON_CHAIN_TRADE_TYPE.POLYDEX]: {
            name: "Polydex",
            image: `${g}polydex.svg`,
            color: "#0D2866",
          },
          [o.ON_CHAIN_TRADE_TYPE.QUICK_SWAP]: {
            name: "QuickSwap",
            image: `${g}quickswap.svg`,
            color: "#36C2EA",
          },
          [o.ON_CHAIN_TRADE_TYPE.QUICK_SWAP_V3]: {
            name: "QuickSwapV3",
            image: `${g}quickswap.svg`,
            color: "#36C2EA",
          },
          [o.ON_CHAIN_TRADE_TYPE.RAYDIUM]: {
            name: "Raydium",
            image: `${g}raydium.svg`,
            color: "#3875FD",
          },
          [o.ON_CHAIN_TRADE_TYPE.REF_FINANCE]: {
            name: "Ref Finance",
            image: `${g}ref-finance.svg`,
          },
          [o.ON_CHAIN_TRADE_TYPE.REN_BTC]: {
            name: "renBTC",
            image: `${g}renbtc.svg`,
            color: "grey",
          },
          [o.ON_CHAIN_TRADE_TYPE.SABER_STABLE_SWAP]: {
            name: "SaberStableSwap",
            image: `${g}saberstableswap.png`,
            color: "#5156C0",
          },
          [o.ON_CHAIN_TRADE_TYPE.SAROS_SWAP]: {
            name: "SarosSwap",
            image: `${g}sarosswap.png`,
            color: "#6CBCCE",
          },
          [o.ON_CHAIN_TRADE_TYPE.SERUM]: {
            name: "Serum",
            image: `${g}serum.png`,
            color: "#38B9CC",
          },
          [o.ON_CHAIN_TRADE_TYPE.SHIBA_SWAP]: {
            name: "ShibaSwap",
            image: `${g}shibaswap.svg`,
            color: "#6CBCCE",
          },
          [o.ON_CHAIN_TRADE_TYPE.SMOOTHY]: {
            name: "Smoothy",
            image: `${g}smoothy.png`,
            color: "#BC2723",
          },
          [o.ON_CHAIN_TRADE_TYPE.SOLAR_BEAM]: {
            name: "SolarBeam",
            image: `${g}solarbeam.svg`,
            color: "#F2A272",
          },
          [o.ON_CHAIN_TRADE_TYPE.SOUL_SWAP]: {
            name: "SoulSwap",
            image: `${g}soulswap.png`,
            color: "#B06DED",
          },
          [o.ON_CHAIN_TRADE_TYPE.SPIRIT_SWAP]: {
            name: "SpiritSwap",
            image: `${g}spiritswap.png`,
            color: "#59C3C8",
          },
          [o.ON_CHAIN_TRADE_TYPE.SPL_TOKEN_SWAP]: {
            name: "SplTokenSwap",
            image: `${g}spltokenswap.svg`,
            color: "#15F095",
          },
          [o.ON_CHAIN_TRADE_TYPE.SPOOKY_SWAP]: {
            name: "SpookySwap",
            image: `${g}spookyswap.svg`,
            color: "#59C3C8",
          },
          [o.ON_CHAIN_TRADE_TYPE.STELLA_SWAP]: {
            name: "StellaSwap",
            image: `${g}stellaswap.svg`,
            color: "#E2107B",
          },
          [o.ON_CHAIN_TRADE_TYPE.SURFDEX]: {
            name: "Surfdex",
            image: `${g}surfswap.png`,
            color: "#39E4DD",
          },
          [o.ON_CHAIN_TRADE_TYPE.SUSHI_SWAP]: {
            name: "SushiSwap",
            image: `${g}sushiswap.svg`,
            color: "#E05DAA",
          },
          [o.ON_CHAIN_TRADE_TYPE.TRADER]: {
            name: "The Trader",
            image: `${g}sushiswap.svg`,
            color: "#E05DAA",
          },
          [o.ON_CHAIN_TRADE_TYPE.TRISOLARIS]: {
            name: "Trisolaris",
            image: `${g}trisolaris.svg`,
            color: "#00F4FF",
          },
          [o.ON_CHAIN_TRADE_TYPE.UBE_SWAP]: {
            name: "UbeSwap",
            image: `${g}ubeswap.svg`,
            color: "#6D619A",
          },
          [o.ON_CHAIN_TRADE_TYPE.UNISWAP_V2]: {
            name: "Uniswap V2",
            image: `${g}uniswap-2.svg`,
            color: "#F9DBEA",
          },
          [o.ON_CHAIN_TRADE_TYPE.UNI_SWAP_V3]: {
            name: "Uniswap V3",
            image: `${g}uniswap-3.svg`,
            color: "#FD017A",
          },
          [o.ON_CHAIN_TRADE_TYPE.VERSE]: {
            name: "Verse",
            image: `${g}verse.png`,
            color: "#0085FF",
          },
          [o.ON_CHAIN_TRADE_TYPE.VIPER_SWAP]: {
            name: "Viper",
            image: `${g}viperswap.svg`,
            color: "#00805C",
          },
          [o.ON_CHAIN_TRADE_TYPE.VOLTAGE_SWAP]: {
            name: "VoltageSwap",
            image: `${g}voltageswap.png`,
            color: "#23A863",
          },
          [o.ON_CHAIN_TRADE_TYPE.VVS_FINANCE]: {
            name: "VVSFinance",
            image: `${g}vvsfinance.png`,
            color: "#2B3852",
          },
          [o.ON_CHAIN_TRADE_TYPE.WAGYU_SWAP]: {
            name: "WagyuSwap",
            image: `${g}wagyuswap.png`,
            color: "#DE2549",
          },
          [o.ON_CHAIN_TRADE_TYPE.WANNA_SWAP]: {
            name: "Wannaswap",
            image: `${g}wannaswap.svg`,
            color: "#FACB5B",
          },
          [o.ON_CHAIN_TRADE_TYPE.WAULT_SWAP]: {
            name: "WaultSwap",
            image: `${g}waultswap.png`,
            color: "#1E7C77",
          },
          [o.ON_CHAIN_TRADE_TYPE.WOO_FI]: {
            name: "WooFi",
            image: `${g}woofi.png`,
            color: "#72BEF4",
          },
          [o.ON_CHAIN_TRADE_TYPE.WRAPPED]: {
            name: "Wrapped",
            image: `${g}wrapped.png`,
            color: "#34A5F5",
          },
          [o.ON_CHAIN_TRADE_TYPE.ZAPPY]: {
            name: "Zappy",
            image: `${g}zappy.svg`,
            color: "#00e7e7",
          },
          [o.ON_CHAIN_TRADE_TYPE.ZIP_SWAP]: {
            name: "ZipSwap",
            image: `${g}zipswap.svg`,
            color: "#34A5F5",
          },
          [o.ON_CHAIN_TRADE_TYPE.ZRX]: {
            name: "0x",
            image: `${g}zrx.svg`,
            color: "#34A5F5",
          },
          [o.ON_CHAIN_TRADE_TYPE.YUZU_SWAP]: {
            name: "YuzuSwap",
            image: `${g}yuzuswap.png`,
            color: "#EE5466",
          },
          [o.BRIDGE_TYPE.ACROSS]: {
            name: "Across",
            image: `${I}across.svg`,
            color: "#29a98b",
          },
          [o.BRIDGE_TYPE.ANY_SWAP]: {
            name: "AnySwap",
            image: `${I}anyswap.svg`,
            color: "#5F6BFB",
          },
          [o.BRIDGE_TYPE.ARBITRUM_BRIDGE]: {
            name: "Arbitrum Bridge",
            image: `${I}arbitrum-bridge.svg`,
            color: "#1275b7",
          },
          [o.BRIDGE_TYPE.AVALANCHE_BRIDGE]: {
            name: "Avalanche Bridge",
            image: `${I}avalanche-bridge.svg`,
            color: "#c2c2c2",
          },
          [o.BRIDGE_TYPE.BRIDGERS]: {
            name: "Bridgers",
            image: `${I}bridgers.png`,
            color: "#E6F3FF",
          },
          [o.BRIDGE_TYPE.CELER]: {
            name: "cBridge",
            image: `${I}celer.svg`,
            color: "#FFFFFF",
          },
          [o.BRIDGE_TYPE.CELER_BRIDGE]: {
            name: "cBridge",
            image: `${I}celer.svg`,
            color: "#FFFFFF",
          },
          [o.BRIDGE_TYPE.CONNEXT]: {
            name: "Connext",
            image: `${I}connext.svg`,
            color: "#8e28fe",
          },
          [o.BRIDGE_TYPE.DEBRIDGE]: {
            name: "DeBridge",
            image: `${I}debridge.svg`,
            color: "#bf38ee",
          },
          [o.BRIDGE_TYPE.HOP]: {
            name: "Hop",
            image: `${I}hop.svg`,
            color: "#de7fb8",
          },
          [o.BRIDGE_TYPE.HYPHEN]: {
            name: "Hyphen",
            image: `${I}hyphen.svg`,
            color: "#353392",
          },
          [o.BRIDGE_TYPE.CHANGENOW]: {
            name: "ChangeNow",
            image: `${I}changenow.png`,
            color: "#8888bb",
          },
          [o.BRIDGE_TYPE.LIFI]: {
            name: "Lifi",
            image: `${I}lifi.svg`,
            color: "#bf38ee",
          },
          [o.BRIDGE_TYPE.MAKERS_WORMHOLE]: {
            name: "Maker's wormhole",
            image: `${I}wormhole.svg`,
            color: "",
          },
          [o.BRIDGE_TYPE.MULTICHAIN]: {
            name: "Multichain",
            image: `${I}multichain.png`,
            color: "#452fbf",
          },
          [o.BRIDGE_TYPE.OPTIMISM_GATEWAY]: {
            name: "Optimism Gateway",
            image: `${I}optimism-gateway.svg`,
            color: "#FF0420",
          },
          [o.BRIDGE_TYPE.OSMOSIS_BRIDGE]: {
            name: "Osmosis Bridge",
            image: `${I}osmosis.svg`,
            color: "#5E12A0",
          },
          [o.BRIDGE_TYPE.POLYGON]: {
            name: "Polygon bridge",
            image: `${I}polygon-bridge.png`,
            color: "#5d25ba",
          },
          [o.BRIDGE_TYPE.RANGO]: {
            name: "Rango",
            image: `${I}rango.svg`,
            color: "#128535",
          },
          [o.BRIDGE_TYPE.REFUEL]: {
            name: "Refuel",
            image: `${I}refuel.png`,
            color: "#FEA700",
          },
          [o.BRIDGE_TYPE.SATELLITE]: {
            name: "Satellite",
            image: `${I}satellite.svg`,
            color: "#3C82F9",
          },
          [o.BRIDGE_TYPE.STARGATE]: {
            name: "Stargate",
            image: `${I}stargate.svg`,
            color: "#999999",
          },
          [o.BRIDGE_TYPE.SYMBIOSIS]: {
            name: "Symbiosis",
            image: `${I}symbiosis.png`,
            color: "#0dc449",
          },
          [o.BRIDGE_TYPE.SYNAPSE]: {
            name: "Synapse",
            image: `${I}synapse.svg`,
            color: "#b90aba",
          },
          [o.BRIDGE_TYPE.THORCHAIN]: {
            name: "Thorchain",
            image: `${I}thorchain.svg`,
            color: "#33FF99",
          },
          [o.BRIDGE_TYPE.VIA]: {
            name: "Via",
            image: `${I}via.ico`,
            color: "#008141",
          },
          [o.BRIDGE_TYPE.WORMHOLE]: {
            name: "Wormhole",
            image: `${I}wormhole.svg`,
            color: "",
          },
          [o.BRIDGE_TYPE.YPOOL]: {
            name: "YPool",
            image: `${I}ypool.svg`,
            color: "#15D9E1",
          },
          [o.BRIDGE_TYPE.OPEN_OCEAN]: {
            name: "Open Ocean",
            image: `${I}openocean.png`,
            color: "#15D9E1",
          },
          [o.BRIDGE_TYPE.XY]: {
            name: "XY",
            image: `${I}xy.svg`,
            color: "#1687ee",
          },
          [o.BRIDGE_TYPE.CELER_BRIDGE]: {
            name: "cBridge",
            image: `${I}cbridge.svg`,
            color: "#FFFFFF",
          },
        },
        dl = {
          [o.CROSS_CHAIN_TRADE_TYPE.CELER]: "celer",
          [o.CROSS_CHAIN_TRADE_TYPE.CELER_BRIDGE]: "celer_bridge",
          [o.CROSS_CHAIN_TRADE_TYPE.RANGO]: "rango",
          [o.CROSS_CHAIN_TRADE_TYPE.SYMBIOSIS]: "symbiosis",
          [o.CROSS_CHAIN_TRADE_TYPE.LIFI]: "lifi",
          [o.CROSS_CHAIN_TRADE_TYPE.VIA]: "via",
          [o.CROSS_CHAIN_TRADE_TYPE.BRIDGERS]: "bridgers",
          [o.CROSS_CHAIN_TRADE_TYPE.DEBRIDGE]: "debridge",
          [o.CROSS_CHAIN_TRADE_TYPE.MULTICHAIN]: "multichain",
          [o.CROSS_CHAIN_TRADE_TYPE.XY]: "xy",
          [o.CROSS_CHAIN_TRADE_TYPE.CELER_BRIDGE]: "celer_bridge",
          [o.CROSS_CHAIN_TRADE_TYPE.CHANGENOW]: "changenow",
        };
      class Ht {
        constructor(t, n, i, a, s) {
          (this.httpService = t),
            (this.authService = n),
            (this.walletConnectorService = i),
            (this.isMobile = a),
            (this.window = s),
            (this.apiEndpoint = "crosschain_trades/trade");
        }
        saveNotWhitelistedProvider(t, n, i) {
          return this.httpService.post("info/new_provider", {
            network: It.d[n],
            title: dl[i],
            address:
              t.providerRouter +
              (t.providerGateway ? `_${t.providerGateway}` : ""),
            cause: t.cause,
          });
        }
        createTrade(t, n) {
          var i = this;
          return (0, T.Z)(function* () {
            const {
                fromBlockchain: a,
                toBlockchain: s,
                fromAmount: c,
                fromAddress: p,
                fromDecimals: d,
                toAmount: _,
                toDecimals: f,
                toAddress: x,
              } = pt.getCrossChainSwapParams(n),
              P = {
                from_network: It.d[a],
                to_network: It.d[s],
                provider: n.type,
                from_token: p,
                to_token: x,
                from_amount: o.Web3Pure.toWei(c, d),
                to_amount: o.Web3Pure.toWei(_, f),
                user: i.authService.userAddress,
                tx_hash: t,
                wallet_name:
                  i.walletConnectorService.provider.detailedWalletName,
                device_type: i.isMobile ? "mobile" : "desktop",
                domain:
                  i.window.location !== i.window.parent.location
                    ? i.window.document.referrer
                    : i.window.document.location.href,
              };
            yield (0,
            Tt.z)(i.httpService.post(i.apiEndpoint, P).pipe((0, Hr.g)(1e3)));
          })();
        }
        patchTrade(t, n) {
          var i = this;
          return (0, T.Z)(function* () {
            const a = { success: n, hash: t, user: i.authService.userAddress };
            yield (0, Tt.z)(i.httpService.patch(i.apiEndpoint, a));
          })();
        }
      }
      (Ht.ɵfac = function (t) {
        return new (t || Ht)(
          e.ɵɵinject($r.O),
          e.ɵɵinject(j.e),
          e.ɵɵinject(Nt.j),
          e.ɵɵinject(Xe.fL),
          e.ɵɵinject(we.m9)
        );
      }),
        (Ht.ɵprov = e.ɵɵdefineInjectable({
          token: Ht,
          factory: Ht.ɵfac,
          providedIn: "root",
        }));
      const Ui = [o.BRIDGE_TYPE.CHANGENOW];
      class ft extends Ft {
        constructor(t, n, i, a, s, c, p, d, _, f, x, P, S, D, Q) {
          super("cross-chain-routing"),
            (this.sdkService = t),
            (this.settingsService = n),
            (this.walletConnectorService = i),
            (this.iframeService = a),
            (this.recentTradesStoreService = s),
            (this.headerStore = c),
            (this.dialogService = p),
            (this.gtmService = d),
            (this.gasService = _),
            (this.authService = f),
            (this.queryParamsService = x),
            (this.targetNetworkAddressService = P),
            (this.platformConfigurationService = S),
            (this.crossChainApiService = D),
            (this.tokensService = Q),
            (this.defaultTimeout = 25e3);
        }
        get receiverAddress() {
          return this.settingsService.crossChainRoutingValue.showReceiverAddress
            ? this.targetNetworkAddressService.address
            : null;
        }
        isSupportedBlockchain(t) {
          return Object.values(this.sdkService.crossChain.tradeProviders).some(
            (n) => n.isSupportedBlockchain(t)
          );
        }
        areSupportedBlockchains(t, n) {
          return Object.values(this.sdkService.crossChain.tradeProviders).some(
            (i) => i.areSupportedBlockchains(t, n)
          );
        }
        calculateTrade(t, n, i, a, s) {
          const c =
              this.settingsService.crossChainRoutingValue.slippageTolerance /
              100,
            p = this.receiverAddress,
            { disabledCrossChainTradeTypes: d, disabledBridgeTypes: _ } =
              this.platformConfigurationService.disabledProviders,
            x = Array.from(
              new Set([
                ...n,
                ...(d || []),
                ...(this.queryParamsService.disabledProviders || []),
              ])
            ),
            P = {
              fromSlippageTolerance: c / 2,
              toSlippageTolerance: c / 2,
              slippageTolerance: c,
              timeout: this.defaultTimeout,
              disabledProviders: x,
              lifiDisabledBridgeTypes: _?.[o.CROSS_CHAIN_TRADE_TYPE.LIFI],
              rangoDisabledBridgeTypes: _?.[o.CROSS_CHAIN_TRADE_TYPE.RANGO],
              ...(p && { receiverAddress: p }),
              changenowFullyEnabled: !0,
            };
          return this.sdkService.crossChain
            .calculateTradesReactively(new o.Token(i), s, new o.Token(a), P)
            .pipe(
              (0, N.w)((S) => {
                const { total: D, calculated: Q, wrappedTrade: Z } = S;
                Z?.error instanceof o.NotWhitelistedProviderError &&
                  this.saveNotWhitelistedProvider(
                    Z.error,
                    i.blockchain,
                    Z.tradeType
                  );
                const xe = Z?.trade;
                return (0, je.D)(
                  t && xe ? (0, je.D)(xe.needApprove()) : (0, L.of)(!1)
                ).pipe(
                  (0, v.U)((he) => ({
                    total: D,
                    calculated: Q,
                    lastCalculatedTrade: Z
                      ? { ...Z, needApprove: he, route: this.parseRoute(Z) }
                      : null,
                  }))
                );
              })
            );
        }
        parseRoute(t) {
          if (!t?.trade) return null;
          let n = {
            fromProvider: t.trade.onChainSubtype.from,
            toProvider: t.trade.onChainSubtype.to,
            bridgeProvider: t.tradeType,
          };
          return this.queryParamsService.enabledProviders
            ? n
            : (t.trade instanceof o.LifiCrossChainTrade ||
                t.trade instanceof o.ViaCrossChainTrade ||
                t.trade instanceof o.RangoCrossChainTrade) &&
              t.trade.bridgeType
            ? { ...n, bridgeProvider: t.trade.bridgeType }
            : n;
        }
        approve(t) {
          var n = this;
          return (0, T.Z)(function* () {
            n.checkDeviceAndShowNotification();
            const i = t.trade.from.blockchain,
              a = Gr.u[i]
                ? o.Web3Pure.toWei(yield n.gasService.getGasPriceInEthUnits(i))
                : null;
            let s;
            const c = {
              onTransactionHash: () => {
                s = n.notificationsService.showApproveInProgress();
              },
              ...(a && { gasPrice: a }),
            };
            try {
              yield t.trade.approve(c),
                n.notificationsService.showApproveSuccessful();
            } catch (p) {
              if (p instanceof o.UnnecessaryApproveError) return;
              throw p;
            } finally {
              s?.unsubscribe();
            }
          })();
        }
        swapTrade(t, n) {
          var i = this;
          return (0, T.Z)(function* () {
            i.checkBlockchainsAvailable(t), i.checkDeviceAndShowNotification();
            const [a, s] = yield Promise.all([
                i.tokensService.findToken(t.trade.from),
                i.tokensService.findToken(t.trade.to),
              ]),
              c = i.authService.userAddress;
            let p;
            const _ = t.trade.from.blockchain,
              f = Gr.u[_]
                ? o.Web3Pure.toWei(yield i.gasService.getGasPriceInEthUnits(_))
                : null,
              x = i.receiverAddress,
              P = {
                onConfirm: (S) => {
                  (p = S),
                    n?.(),
                    i.crossChainApiService.createTrade(S, t.trade);
                  const D = Date.now(),
                    Q = t.trade instanceof o.ViaCrossChainTrade && t.trade.uuid,
                    Z =
                      t.trade instanceof o.RangoCrossChainTrade &&
                      t.trade.requestId,
                    xe =
                      t.trade instanceof o.ChangenowCrossChainTrade &&
                      t.trade.id,
                    gr = {
                      srcTxHash: S,
                      fromToken: a,
                      toToken: s,
                      crossChainTradeType: t.tradeType,
                      timestamp: D,
                      bridgeType: t.trade.bridgeType,
                      amountOutMin: t.trade.toTokenAmountMin.toFixed(),
                      ...(Q && { viaUuid: Q }),
                      ...(Z && { rangoRequestId: Z }),
                      ...(xe && { changenowId: xe }),
                    };
                  i.openSwapSchemeModal(t, S, D, a, s);
                  try {
                    i.recentTradesStoreService.saveTrade(c, gr);
                  } catch {}
                  i.notifyGtmAfterSignTx(S, a, s, t.trade.from.tokenAmount);
                },
                ...(x && { receiverAddress: x }),
                ...(f && { gasPrice: f }),
              };
            try {
              yield t.trade.swap(P),
                i.showSuccessTrxNotification(),
                yield i.crossChainApiService.patchTrade(p, !0);
            } catch (S) {
              throw (
                (p &&
                  S instanceof Error &&
                  S.message.includes("Transaction was not mined") &&
                  (yield i.crossChainApiService.patchTrade(p, !1)),
                S instanceof o.NotWhitelistedProviderError &&
                  i.saveNotWhitelistedProvider(
                    S,
                    t.trade.from.blockchain,
                    t.tradeType
                  ),
                S)
              );
            }
          })();
        }
        checkBlockchainsAvailable(t) {}
        checkDeviceAndShowNotification() {
          this.iframeService.isIframe &&
            "mobile" === this.iframeService.device &&
            this.notificationsService.showOpenMobileWallet();
        }
        notifyGtmAfterSignTx(t, n, i, a) {
          const s = new M.Z(1);
          this.gtmService.fireTxSignedEvent(
            b.V.CROSS_CHAIN_ROUTING,
            t,
            n.symbol,
            i.symbol,
            s,
            a.multipliedBy(n.price)
          );
        }
        openSwapSchemeModal(t, n, i, a, s) {
          const { trade: c, route: p } = t,
            d = c.bridgeType;
          let _ = Me[d];
          const f = p.fromProvider
              ? Me[p.fromProvider]
              : { ..._, name: _.name + " Pool" },
            x = p.toProvider
              ? Me[p.toProvider]
              : { ..._, name: _.name + " Pool" };
          Ui.some((Z) => Z === d) &&
            (_ = { ..._, name: _.name + " (Centralized)" });
          const P =
              t.trade instanceof o.ViaCrossChainTrade ? t.trade.uuid : void 0,
            S =
              t.trade instanceof o.RangoCrossChainTrade
                ? t.trade.requestId
                : void 0,
            D = t.trade.toTokenAmountMin.toFixed(),
            Q =
              t.trade instanceof o.ChangenowCrossChainTrade
                ? t.trade.id
                : void 0;
          this.dialogService
            .open(new z.Al(Bn), {
              size: this.headerStore.isMobile ? "page" : "l",
              data: {
                fromToken: a,
                toToken: s,
                srcProvider: f,
                dstProvider: x,
                crossChainProvider: t.tradeType,
                srcTxHash: n,
                bridgeType: _,
                viaUuid: P,
                rangoRequestId: S,
                timestamp: i,
                amountOutMin: D,
                changenowId: Q,
              },
            })
            .subscribe();
        }
        saveNotWhitelistedProvider(t, n, i) {
          this.crossChainApiService
            .saveNotWhitelistedProvider(t, n, i)
            .subscribe();
        }
        getChangenowPaymentInfo(t) {
          var n = this;
          return (0, T.Z)(function* () {
            const i = n.receiverAddress;
            return {
              paymentInfo: yield t.getChangenowPostTrade(i),
              receiverAddress: i,
            };
          })();
        }
      }
      (ft.ɵfac = function (t) {
        return new (t || ft)(
          e.ɵɵinject(it.w),
          e.ɵɵinject(q),
          e.ɵɵinject(Nt.j),
          e.ɵɵinject(W.b),
          e.ɵɵinject(yr.o),
          e.ɵɵinject(fr.N),
          e.ɵɵinject(Ye.RO),
          e.ɵɵinject(Ot.k),
          e.ɵɵinject(vr.Q),
          e.ɵɵinject(j.e),
          e.ɵɵinject(Be.E),
          e.ɵɵinject(oe),
          e.ɵɵinject(Cr.L),
          e.ɵɵinject(Ht),
          e.ɵɵinject(De.H)
        );
      }),
        (ft.ɵprov = e.ɵɵdefineInjectable({ token: ft, factory: ft.ɵfac }));
      var ml = l(2273),
        Kr = l(60607);
      class Zr extends V.q {
        constructor() {
          super(
            null,
            {},
            "The swap between this pair of tokens is currently unavailable. Please try again later."
          ),
            Object.setPrototypeOf(this, Zr.prototype);
        }
      }
      const _l = Zr;
      class Xr extends V.q {
        constructor(t) {
          super(
            null,
            {},
            t
              ? `Swaps to and from ${We.h[t]} are temporarily disabled for extended maintenance.`
              : "Selected blockchains are not supported in Cross-Chain."
          ),
            Object.setPrototypeOf(this, Xr.prototype);
        }
      }
      const ul = Xr;
      var gl = l(68315);
      class Qr extends Yr.V {
        constructor() {
          super("crossChainIsUnavailable"),
            Object.setPrototypeOf(this, Qr.prototype);
        }
      }
      const hl = Qr;
      var Jr = l(72549),
        te = (() => {
          return (
            ((r = te || (te = {})).NONE = "none"),
            (r.APPROVE_STARTED = "approve started"),
            (r.SWAP_STARTED = "swap started"),
            te
          );
          var r;
        })();
      class qr extends Yr.V {
        constructor() {
          super("crossChainSwapUnavailable"),
            Object.setPrototypeOf(this, qr.prototype);
        }
      }
      const fl = qr;
      function Gi(r, t) {
        return (
          r.onChainSubtype.from === t.onChainSubtype.from &&
          r.onChainSubtype.to === t.onChainSubtype.to &&
          r.bridgeType === t.bridgeType
        );
      }
      class tt {
        constructor(t, n) {
          (this.storeService = t),
            (this.swapFormService = n),
            (this.trade = this.storeService.getItem("changenowPostTrade"));
        }
        updateTrade(t, n) {
          const {
              fromAsset: i,
              toToken: a,
              fromAmount: s,
            } = this.swapFormService.inputValue,
            { toAmount: c } = this.swapFormService.outputValue;
          (this.trade = {
            id: t.id,
            fromToken: i,
            toToken: a,
            fromAmount: s.toFixed(),
            toAmount: c.toFixed(),
            depositAddress: t.depositAddress,
            receiverAddress: n,
            extraField: t.extraField,
          }),
            this.storeService.setItem("changenowPostTrade", this.trade);
        }
        setupUpdate() {}
      }
      (tt.ɵfac = function (t) {
        return new (t || tt)(e.ɵɵinject(di.d), e.ɵɵinject(A.q));
      }),
        (tt.ɵprov = e.ɵɵdefineInjectable({ token: tt, factory: tt.ɵfac }));
      class ge {
        constructor(t, n, i, a, s, c, p, d, _, f, x, P, S, D, Q, Z) {
          (this.swapFormService = t),
            (this.swapTypeService = n),
            (this.refreshService = i),
            (this.authService = a),
            (this.crossChainCalculationService = s),
            (this.tokensService = c),
            (this.settingsService = p),
            (this.targetNetworkAddressService = d),
            (this.gtmService = _),
            (this.errorsService = f),
            (this.iframeService = x),
            (this.dialogService = P),
            (this.tradeService = S),
            (this.changenowPostTradeService = D),
            (this.router = Q),
            (this.injector = Z),
            (this._calculateTrade$ = new _e.x()),
            (this._tradeStatus$ = new w.X(u.DISABLED)),
            (this.tradeStatus$ = this._tradeStatus$.asObservable()),
            (this._isCalculating$ = new w.X(!1)),
            (this.isCalculating$ = this._isCalculating$.asObservable()),
            (this._taggedTrades$ = new w.X([])),
            (this.taggedTrades$ = this._taggedTrades$.asObservable()),
            (this._selectedTrade$ = new w.X(null)),
            (this.selectedTrade$ = this._selectedTrade$.asObservable()),
            (this._selectedTradeError$ = new w.X(null)),
            (this.selectedTradeError$ =
              this._selectedTradeError$.asObservable()),
            (this.updatedSelectedTrade = null),
            (this._criticalError$ = new w.X(null)),
            (this.criticalError$ = this._criticalError$.asObservable()),
            (this.replacedTaggedTrades = []),
            (this.disabledTradesTypes = []),
            (this._displayApproveButton$ = new w.X(!1)),
            (this.displayApproveButton$ =
              this._displayApproveButton$.asObservable()),
            (this.isSwapStarted = te.NONE),
            (this.isTradeSelectedByUser = !1),
            (this.isButtonHovered = !1),
            (this.refreshServiceCallsCounter = 0),
            this.subscribeOnCalculation(),
            this.subscribeOnFormChanges(),
            this.subscribeOnSettingsChanges(),
            this.subscribeOnReceiverAddressChanges(),
            this.subscribeOnUserAddressChanges(),
            this.subscribeOnRefreshServiceCalls(),
            this.subscribeOnIsButtonHoveredChanges();
        }
        static setTags(t) {
          return {
            ...t,
            tags: {
              minAmountWarning: t.error instanceof o.MinAmountError,
              maxAmountWarning: t.error instanceof o.MaxAmountError,
            },
          };
        }
        get tradeStatus() {
          return this._tradeStatus$.getValue();
        }
        set tradeStatus(t) {
          this._tradeStatus$.next(t);
        }
        set isCalculating(t) {
          this._isCalculating$.next(t);
        }
        get taggedTrades() {
          return this._taggedTrades$.getValue();
        }
        set taggedTrades(t) {
          this._taggedTrades$.next(t);
        }
        get selectedTrade() {
          return this._selectedTrade$.getValue();
        }
        set selectedTrade(t) {
          this._selectedTrade$.next(t),
            this._selectedTradeError$.next(
              t?.error ? this.parseCalculationError(t.error) : null
            );
        }
        set criticalError(t) {
          this._criticalError$.next(t);
        }
        set displayApproveButton(t) {
          this._displayApproveButton$.next(t);
        }
        get inputValue() {
          const t = this.swapFormService.inputValue;
          if (
            t.fromAssetType &&
            !o.BlockchainsInfo.isBlockchainName(t.fromAssetType)
          )
            throw new V.q("Cannot use cross chain");
          return {
            ...t,
            fromBlockchain: t.fromAssetType,
            fromToken: t.fromAsset,
          };
        }
        subscribeOnCalculation() {
          this._calculateTrade$
            .pipe(
              (0, dt.b)(200),
              (0, v.U)((t) =>
                t.stop || !this.swapFormService.isFilled
                  ? ((this.tradeStatus = u.DISABLED),
                    this.swapTypeService.getSwapProviderType() ===
                      b.V.CROSS_CHAIN_ROUTING &&
                      (this.refreshService.setStopped(),
                      this.swapFormService.outputControl.patchValue({
                        toAmount: new M.Z(NaN),
                      })),
                    { ...t, stop: !0 })
                  : { ...t, stop: !1 }
              ),
              (0, N.w)((t) => {
                if (t.stop) return (0, L.of)(null);
                const {
                  fromBlockchain: n,
                  fromToken: i,
                  toToken: a,
                  fromAmount: s,
                } = this.inputValue;
                let c = !1;
                try {
                  c =
                    Boolean(this.authService.userAddress) &&
                    this.authService.userChainType ===
                      o.BlockchainsInfo.getChainType(n);
                } catch {}
                return (
                  c
                    ? (0, je.D)(this.tokensService.getAndUpdateTokenBalance(i))
                    : (0, L.of)(null)
                ).pipe(
                  (0, N.w)((d) =>
                    !t.isForced && null !== d && d.lt(s)
                      ? (0, L.of)(null)
                      : (t.isForced && this.unsetCalculatedTrades(),
                        this.tradeStatus !== u.READY_TO_APPROVE &&
                          this.tradeStatus !== u.READY_TO_SWAP &&
                          this.tradeStatus !== u.OLD_TRADE_DATA &&
                          (this.tradeStatus = u.LOADING),
                        (this.isCalculating = !0),
                        this.refreshService.setRefreshing(),
                        this.crossChainCalculationService
                          .calculateTrade(c, this.disabledTradesTypes, i, a, s)
                          .pipe(
                            (0, ye.b)(
                              ({
                                total: f,
                                calculated: x,
                                lastCalculatedTrade: P,
                              }) => {
                                const S = x === f;
                                S &&
                                  ((this.isCalculating = !1),
                                  this.refreshService.setStopped()),
                                  this.checkLastCalculatedTrade(P, S);
                              }
                            ),
                            (0, br.K)(
                              (f) => (
                                (this.tradeStatus = u.DISABLED),
                                (this.isCalculating = !1),
                                this.refreshService.setStopped(),
                                (this.criticalError =
                                  this.parseCalculationError(f)),
                                (0, L.of)(null)
                              )
                            )
                          ))
                  )
                );
              })
            )
            .subscribe();
        }
        checkLastCalculatedTrade(t, n) {
          let i = !1;
          if (t?.error) {
            const a = this.parseCalculationError(t.error);
            this.isExecutionCriticalError(a) &&
              ((i = !0), this.disableUnavailableTrade(t.tradeType, !1));
          }
          if (t && !i)
            if (
              (this.updateTradesList(t),
              (this.isTradeSelectedByUser ||
                this.isButtonHovered ||
                this.isSwapStarted !== te.NONE) &&
                t?.trade?.to.tokenAmount.gt(0))
            )
              this.compareSelectedTradeToBestTrade();
            else {
              const a = this.taggedTrades[0];
              (a?.trade?.to.tokenAmount.gt(0) || n) &&
                this.updateSelectedTrade(a);
            }
          else n && this.updateSelectedTrade(this.taggedTrades[0] || null);
        }
        updateTradesList(t) {
          let n = this.taggedTrades.filter((s) => s.tradeType !== t.tradeType);
          this.replacedTaggedTrades = this.replacedTaggedTrades.filter(
            (s) => s.tradeType !== t.tradeType
          );
          const i = ge.setTags(t),
            a = t.trade;
          if (a) {
            const s = n.find((c) => {
              const p = c.trade;
              return !!p && Gi(p, a);
            });
            if (s) {
              if (
                !s.trade.isAggregator ||
                s.trade.to.tokenAmount.gt(a.to.tokenAmount)
              )
                return (
                  (this.replacedTaggedTrades =
                    this.replacedTaggedTrades.concat(i)),
                  void (this.taggedTrades = n)
                );
              (this.replacedTaggedTrades = this.replacedTaggedTrades.concat(s)),
                (n = n.filter((c) => c.tradeType !== s.tradeType));
            }
          }
          this.taggedTrades = n.concat(i).sort(o.compareCrossChainTrades);
        }
        compareSelectedTradeToBestTrade() {
          let t;
          (t = this.isTradeSelectedByUser
            ? this.taggedTrades.find(
                (n) => n?.trade && Gi(n?.trade, this.selectedTrade.trade)
              )
            : this.tradeStatus === u.READY_TO_APPROVE ||
              (this.isSwapStarted === te.NONE && this.isButtonHovered)
            ? this.taggedTrades[0]
            : this.taggedTrades.find((n) => !n.needApprove && !n.error)),
            t &&
              (this.selectedTrade &&
              (this.selectedTrade.tradeType !== t.tradeType ||
                !this.selectedTrade.trade.to.tokenAmount.eq(
                  t.trade.to.tokenAmount
                ) ||
                (!this.selectedTrade.error && t.error))
                ? ((this.updatedSelectedTrade = t),
                  (this.tradeStatus === u.READY_TO_APPROVE ||
                    this.tradeStatus === u.READY_TO_SWAP) &&
                    (this.tradeStatus = u.OLD_TRADE_DATA))
                : (this.selectedTrade = t));
        }
        updateRate() {
          this.updatedSelectedTrade
            ? this.updateSelectedTrade(this.updatedSelectedTrade)
            : ((this.tradeStatus = u.LOADING), this.startRecalculation());
        }
        updateSelectedTrade(t, n = !1) {
          if (
            ((this.selectedTrade = t),
            (this.updatedSelectedTrade = null),
            t?.trade?.to.tokenAmount.gt(0))
          ) {
            this.swapFormService.outputControl.patchValue({
              toAmount: t.trade.to.tokenAmount,
            });
            const { error: i, needApprove: a } = t;
            i
              ? (this.tradeStatus = u.DISABLED)
              : ((this.tradeStatus = a ? u.READY_TO_APPROVE : u.READY_TO_SWAP),
                (this.displayApproveButton = a)),
              n &&
                ((this.isTradeSelectedByUser = !0),
                (this.tradeSelectedByUserTimeout = setTimeout(() => {
                  this.isTradeSelectedByUser = !1;
                }, 1e7)));
          } else
            this.swapFormService.outputControl.patchValue({
              toAmount: new M.Z(NaN),
            }),
              (this.tradeStatus = u.DISABLED),
              (this.criticalError = this.parseCalculationError(t?.error));
        }
        parseCalculationError(t) {
          if (t instanceof o.NotSupportedTokensError)
            return new V.q(
              "Currently, Rubic does not support swaps between these tokens."
            );
          if (t instanceof o.UnsupportedReceiverAddressError)
            return new V.q(
              "This provider doesn\u2019t support the receiver address."
            );
          if (t instanceof o.CrossChainIsUnavailableError) return new hl();
          if (t instanceof o.LowSlippageError)
            return new V.q("Slippage is too low for transaction.");
          if (t instanceof o.TooLowAmountError)
            return new V.q(
              "The swap can't be executed with the entered amount of tokens. Please change it to the greater amount."
            );
          if (t?.message?.includes("No available routes"))
            return new V.q("No available routes.");
          if (t?.message?.includes("There are no providers for trade"))
            return new V.q("There are no providers for trade.");
          if (t?.message?.includes("Representation of "))
            return new V.q(
              "The swap between this pair of blockchains is currently unavailable."
            );
          const n = t && mt.E.parseError(t);
          return !n || n instanceof Kr.M ? new _l() : n;
        }
        subscribeOnFormChanges() {
          this.swapFormService.inputValueDistinct$.subscribe(() => {
            this.startRecalculation();
          });
        }
        subscribeOnSettingsChanges() {
          this.settingsService.crossChainRoutingValueChanges
            .pipe(
              (0, Ee.O)(this.settingsService.crossChainRoutingValue),
              (0, le.x)((t, n) => t.slippageTolerance === n.slippageTolerance)
            )
            .subscribe(() => {
              this.startRecalculation();
            });
        }
        subscribeOnReceiverAddressChanges() {
          (0, $.a)([
            this.settingsService.crossChainRoutingValueChanges.pipe(
              (0, Ee.O)(this.settingsService.crossChainRoutingValue),
              (0, v.U)((t) => t.showReceiverAddress)
            ),
            this.targetNetworkAddressService.address$,
          ])
            .pipe(
              (0, v.U)(([t, n]) => (t ? n : null)),
              (0, le.x)((t, n) => (!t && !n) || t === n)
            )
            .subscribe(() => {
              this.startRecalculation();
            });
        }
        subscribeOnUserAddressChanges() {
          this.authService.currentUser$
            .pipe(
              (0, v.U)((t) => t?.address),
              (0, le.x)()
            )
            .subscribe(() => {
              this.startRecalculation();
            });
        }
        unsetCalculatedTrades() {
          (this.taggedTrades = []),
            (this.replacedTaggedTrades = []),
            (this.disabledTradesTypes = []),
            this.updateSelectedTrade(null),
            this.unsetTradeSelectedByUser(),
            (this.criticalError = null),
            (this.isSwapStarted = te.NONE),
            (this.refreshServiceCallsCounter = 0);
        }
        subscribeOnRefreshServiceCalls() {
          this.refreshService.onRefresh$.subscribe(({ isForced: t }) => {
            if (t)
              this.unsetTradeSelectedByUser(),
                (this.isSwapStarted = te.NONE),
                (this.refreshServiceCallsCounter = 0),
                this.startRecalculation();
            else {
              if (
                !this.authService.userAddress ||
                !this.selectedTrade ||
                this.selectedTrade.error
              )
                return;
              if (this.refreshServiceCallsCounter >= 4)
                return void (this.tradeStatus = u.OLD_TRADE_DATA);
              (this.refreshServiceCallsCounter += 1),
                this.startRecalculation(!1);
            }
          });
        }
        unsetTradeSelectedByUser() {
          (this.isTradeSelectedByUser = !1),
            clearTimeout(this.tradeSelectedByUserTimeout);
        }
        startRecalculation(t = !0) {
          if (
            this.swapTypeService.getSwapProviderType() !==
            b.V.CROSS_CHAIN_ROUTING
          )
            return void this._calculateTrade$.next({ stop: !0 });
          const { fromAssetType: n, toBlockchain: i } =
              this.swapFormService.inputValue,
            a = n;
          if (
            !this.crossChainCalculationService.areSupportedBlockchains(a, i)
          ) {
            let s;
            return (
              this.crossChainCalculationService.isSupportedBlockchain(a)
                ? this.crossChainCalculationService.isSupportedBlockchain(i) ||
                  (s = i)
                : (s = a),
              (this.criticalError = new ul(s)),
              void this._calculateTrade$.next({ stop: !0 })
            );
          }
          t && this.unsetCalculatedTrades(),
            this._calculateTrade$.next({ isForced: t });
        }
        subscribeOnIsButtonHoveredChanges() {
          this.tradeService.isButtonHovered$.subscribe((t) => {
            (this.isButtonHovered = t),
              !t &&
                this.isSwapStarted === te.NONE &&
                this.updatedSelectedTrade &&
                this.updateSelectedTrade(this.updatedSelectedTrade);
          });
        }
        approveTrade() {
          var t = this;
          return (0, T.Z)(function* () {
            (t.isSwapStarted = te.APPROVE_STARTED),
              (t.tradeStatus = u.APPROVE_IN_PROGRESS),
              t.refreshService.startInProgress();
            try {
              const n = t.selectedTrade.trade.from.blockchain;
              yield t.crossChainCalculationService.approve(t.selectedTrade),
                t.updatedSelectedTrade
                  ? (t.tradeStatus = u.OLD_TRADE_DATA)
                  : ((t.tradeStatus = u.READY_TO_SWAP),
                    (t.selectedTrade = {
                      ...t.selectedTrade,
                      needApprove: !1,
                    })),
                t.gtmService.updateFormStep(b.V.CROSS_CHAIN_ROUTING, "approve"),
                yield t.tokensService.updateNativeTokenBalance(n);
            } catch (n) {
              const i = mt.E.parseError(n);
              i instanceof Jr.v && (t.isSwapStarted = te.NONE),
                t.errorsService.catch(i),
                (t.tradeStatus = t.updatedSelectedTrade
                  ? u.OLD_TRADE_DATA
                  : u.READY_TO_APPROVE);
            }
            t.refreshService.stopInProgress();
          })();
        }
        swapTrade() {
          var t = this;
          return (0, T.Z)(function* () {
            if (
              (t.isSwapStarted === te.NONE &&
                (t.isSwapStarted = te.SWAP_STARTED),
              t.selectedTrade.trade.type ===
                o.CROSS_CHAIN_TRADE_TYPE.CHANGENOW &&
                !o.BlockchainsInfo.isEvmBlockchainName(
                  t.selectedTrade.trade.from.blockchain
                ))
            )
              return void (yield t.handleChangenowNonEvmTrade());
            if (
              !t.isSlippageCorrect() ||
              !(yield t.settingsService.checkSlippageAndPriceImpact(
                b.V.CROSS_CHAIN_ROUTING,
                t.selectedTrade.trade
              ))
            )
              return;
            (t.tradeStatus = u.SWAP_IN_PROGRESS),
              t.refreshService.startInProgress();
            const n = t.selectedTrade;
            try {
              yield t.crossChainCalculationService.swapTrade(n, () => {
                (t.isSwapStarted = te.NONE),
                  t.unsetTradeSelectedByUser(),
                  t.updatedSelectedTrade &&
                    t.updateSelectedTrade(t.updatedSelectedTrade),
                  (t.tradeStatus = u.READY_TO_SWAP),
                  t.refreshService.stopInProgress(),
                  t.startRecalculation();
              });
              const i = n.trade.from;
              yield t.tokensService.updateTokenBalanceAfterCcrSwap(i);
            } catch (i) {
              t.handleSwapError(i, n.tradeType);
            }
          })();
        }
        handleChangenowNonEvmTrade() {
          var t = this;
          return (0, T.Z)(function* () {
            (t.tradeStatus = u.SWAP_IN_PROGRESS),
              t.refreshService.startInProgress();
            try {
              const { paymentInfo: n, receiverAddress: i } =
                yield t.crossChainCalculationService.getChangenowPaymentInfo(
                  t.selectedTrade.trade
                );
              t.changenowPostTradeService.updateTrade(n, i),
                yield t.router.navigate(["/changenow-post"], {
                  queryParamsHandling: "merge",
                }),
                (t.isSwapStarted = te.NONE),
                t.unsetTradeSelectedByUser(),
                t.updatedSelectedTrade &&
                  t.updateSelectedTrade(t.updatedSelectedTrade),
                (t.tradeStatus = u.READY_TO_SWAP);
            } catch (n) {
              t.handleSwapError(n, o.CROSS_CHAIN_TRADE_TYPE.CHANGENOW);
            }
          })();
        }
        isSlippageCorrect() {
          if (
            this.settingsService.crossChainRoutingValue.autoSlippageTolerance ||
            [
              o.CROSS_CHAIN_TRADE_TYPE.VIA,
              o.CROSS_CHAIN_TRADE_TYPE.BRIDGERS,
            ].every((n) => n !== this.selectedTrade.trade.type)
          )
            return !0;
          const t = this.iframeService.isIframe ? "fullscreen" : "s";
          return (
            this.dialogService
              .open(new z.Al(Dt, this.injector), { size: t })
              .subscribe(),
            !1
          );
        }
        handleSwapError(t, n) {
          const i = mt.E.parseError(t);
          this.isExecutionCriticalError(i)
            ? ((this.isSwapStarted = te.NONE),
              this.unsetTradeSelectedByUser(),
              this.errorsService.catch(new fl()),
              this.disableUnavailableTrade(n, !0))
            : (i instanceof Jr.v &&
                this.isSwapStarted === te.SWAP_STARTED &&
                (this.isSwapStarted = te.NONE),
              this.errorsService.catch(i)),
            (this.tradeStatus = this.updatedSelectedTrade
              ? u.OLD_TRADE_DATA
              : u.READY_TO_SWAP),
            this.refreshService.stopInProgress();
        }
        isExecutionCriticalError(t) {
          return [ml.Z, gl.Z, Kr.M].some((n) => t instanceof n);
        }
        disableUnavailableTrade(t, n) {
          (this.taggedTrades = this.taggedTrades.filter(
            (i) => i.tradeType !== t
          )),
            this.replacedTaggedTrades.forEach((i) => {
              this.updateTradesList(i);
            }),
            this.disabledTradesTypes.push(t),
            n && this.updateSelectedTrade(this.taggedTrades[0]);
        }
      }
      function Cl(r, t) {
        if (
          (1 & r && e.ɵɵelement(0, "app-iframe-asset-type-indicator", 8), 2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet;
          e.ɵɵproperty("assetType", n.toBlockchain);
        }
      }
      function vl(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "span", 10),
          e.ɵɵtext(2, "Loading"),
          e.ɵɵelementEnd(),
          e.ɵɵelementContainerEnd());
      }
      function bl(r, t) {
        1 & r && e.ɵɵelement(0, "app-tokens-rate");
      }
      (ge.ɵfac = function (t) {
        return new (t || ge)(
          e.ɵɵinject(A.q),
          e.ɵɵinject(ce.H),
          e.ɵɵinject(ke),
          e.ɵɵinject(j.e),
          e.ɵɵinject(ft),
          e.ɵɵinject(De.H),
          e.ɵɵinject(q),
          e.ɵɵinject(oe),
          e.ɵɵinject(Ot.k),
          e.ɵɵinject(cn.r),
          e.ɵɵinject(W.b),
          e.ɵɵinject(Ye.RO),
          e.ɵɵinject(be),
          e.ɵɵinject(tt),
          e.ɵɵinject(hr.F0),
          e.ɵɵinject(e.INJECTOR)
        );
      }),
        (ge.ɵprov = e.ɵɵdefineInjectable({ token: ge, factory: ge.ɵfac }));
      const xl = function (r) {
        return { minRound: 3, maxRound: 5, decimals: r };
      };
      function yl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "withRound"),
            e.ɵɵpipe(3, "bigNumberFormat"),
            e.ɵɵtemplate(4, bl, 1, 0, "app-tokens-rate", 11),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext().ngLet;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind3(
                2,
                1,
                e.ɵɵpipeBind1(3, 5, n),
                "toClosestValue",
                e.ɵɵpureFunction1(
                  7,
                  xl,
                  null == i.toToken ? null : i.toToken.decimals
                )
              ),
              " "
            );
        }
      }
      function Sl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵelement(3, "div", 12),
            e.ɵɵpipe(4, "translate"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(4);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 3, "Trading Is Not Available"),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
              "tuiHint",
              e.ɵɵpipeBind1(4, 5, n.errorText)
            );
        }
      }
      function Tl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, vl, 3, 0, "ng-container", 9),
            e.ɵɵtemplate(2, yl, 5, 9, "ng-container", 9),
            e.ɵɵtemplate(3, Sl, 5, 7, "ng-container", 9),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(2).ngLet,
            a = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !a.errorText && !n && i),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", (null == n ? null : n.gt(0)) && !a.errorText),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", a.errorText);
        }
      }
      const Ol = function (r) {
        return { "bottom-amount__output_error": r };
      };
      function Pl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 4),
            e.ɵɵtemplate(1, Cl, 1, 1, "app-iframe-asset-type-indicator", 5),
            e.ɵɵelementStart(2, "div", 6),
            e.ɵɵtemplate(3, Tl, 4, 3, "ng-container", 7),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("onlyFrame", "vertical"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngClass", e.ɵɵpureFunction1(5, Ol, n.errorText)),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(4, 3, n.toAmount$));
        }
      }
      function kl(r, t) {
        1 & r && e.ɵɵelement(0, "app-tokens-rate");
      }
      function wl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1),
            e.ɵɵtemplate(1, Pl, 5, 7, "div", 2),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(3, kl, 1, 0, "app-tokens-rate", 3),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.formData$));
        }
      }
      class $t {
        constructor(t) {
          (this.swapFormService = t),
            (this.errorText = ""),
            (this.formData$ = this.swapFormService.inputValue$),
            (this.isFormFilled$ = this.swapFormService.isFilled$),
            (this.toAmount$ = this.swapFormService.outputValue$.pipe(
              (0, v.U)((n) =>
                n.toAmount?.isFinite() ? M.Z.max(0, n.toAmount) : null
              )
            ));
        }
      }
      ($t.ɵfac = function (t) {
        return new (t || $t)(e.ɵɵdirectiveInject(A.q));
      }),
        ($t.ɵcmp = e.ɵɵdefineComponent({
          type: $t,
          selectors: [["app-to-amount-estimated"]],
          inputs: { errorText: "errorText" },
          decls: 2,
          vars: 3,
          consts: [
            ["class", "bottom-amount", 4, "ngLet"],
            [1, "bottom-amount"],
            ["class", "bottom-amount__blockchain-and-value", 4, "ngLet"],
            [4, "onlyFrame"],
            [1, "bottom-amount__blockchain-and-value"],
            [3, "assetType", 4, "onlyFrame"],
            [1, "bottom-amount__output", 3, "ngClass"],
            [4, "ngLet"],
            [3, "assetType"],
            [4, "ngIf"],
            [1, "blink-animation"],
            [4, "noFrame"],
            [
              "tuiHintMode",
              "error",
              1,
              "bottom-amount__hint",
              "bottom-amount__hint_error",
              3,
              "inlineSVG",
              "tuiHint",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, wl, 4, 3, "div", 0), e.ɵɵpipe(1, "async")),
              2 & t &&
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(1, 1, n.isFormFilled$));
          },
          dependencies: [
            m.mk,
            m.O5,
            B.e,
            de.a,
            Fe.T,
            Qe,
            R.D,
            G.d$,
            _t,
            m.Ov,
            Ce.N,
            E.X$,
            Te.f,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{overflow:hidden}html.iframe-horizontal   [_nghost-%COMP%]{width:100%}.bottom-amount[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;max-width:350px;height:58px;margin-bottom:10px}html.iframe[_nghost-%COMP%]   .bottom-amount[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .bottom-amount[_ngcontent-%COMP%]{height:100%}html.iframe-vertical[_nghost-%COMP%]   .bottom-amount[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-amount[_ngcontent-%COMP%]{align-items:flex-start;justify-content:unset;max-width:unset}html.iframe-horizontal[_nghost-%COMP%]   .bottom-amount[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-amount[_ngcontent-%COMP%]{margin-bottom:0}.bottom-amount__blockchain-and-value[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}html.iframe-vertical[_nghost-%COMP%]   .bottom-amount__blockchain-and-value[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-amount__blockchain-and-value[_ngcontent-%COMP%]{margin-bottom:10px}.bottom-amount__blockchain-and-value[_ngcontent-%COMP%]   app-iframe-asset-type-indicator[_ngcontent-%COMP%]{margin-right:15px}.bottom-amount[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%]{display:block}html.iframe-horizontal[_nghost-%COMP%]   .bottom-amount[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-amount[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%]{position:absolute;bottom:-33px;left:5px}html.iframe-vertical[_nghost-%COMP%]   .bottom-amount[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-amount[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%]{margin-left:5px}.bottom-amount__output[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%;overflow:auto;font-size:22px;line-height:35px;letter-spacing:.1em;text-align:right;transition:opacity ease-in-out .3s}@media (max-width: 420px){.bottom-amount__output[_ngcontent-%COMP%]{text-align:left}}html.iframe-horizontal[_nghost-%COMP%]   .bottom-amount__output[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-amount__output[_ngcontent-%COMP%]{font-size:16px;white-space:nowrap;text-align:left}html.iframe-vertical[_nghost-%COMP%]   .bottom-amount__output[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-amount__output[_ngcontent-%COMP%]{width:100%;height:50px;padding:0 16px;color:var(--primary-text);font-size:18px;line-height:50px;text-align:start;background-color:var(--primary-background);border-radius:10px}html.iframe-vertical:not(.dark)[_nghost-%COMP%]   .bottom-amount__output[_ngcontent-%COMP%], html.iframe-vertical:not(.dark)   [_nghost-%COMP%]   .bottom-amount__output[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}.bottom-amount__output[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.bottom-amount__output_error[_ngcontent-%COMP%]{flex-direction:row;height:35px;font-weight:300;font-size:16px;letter-spacing:1px}.bottom-amount__output[_ngcontent-%COMP%]   .blink-animation[_ngcontent-%COMP%]{color:var(--tui-text-01);font-size:22px;letter-spacing:1px;opacity:1;animation:_ngcontent-%COMP%_blink 2s ease-in-out infinite}.bottom-amount__hint[_ngcontent-%COMP%]{display:flex;align-items:center;width:15px;margin-left:10px;cursor:help}.bottom-amount__hint[_ngcontent-%COMP%]     svg path{fill:#dfcb5f}@keyframes _ngcontent-%COMP%_blink{0%{opacity:1}50%{opacity:.25}to{opacity:1}}",
          ],
          changeDetection: 0,
        }));
      var Ct = l(45261);
      class Vt {
        constructor() {}
        set route(t) {
          this.bridgeProvider = Me[t.bridgeProvider];
          const n = Ui.some((i) => i === t.bridgeProvider);
          (this.bridgeProvider = {
            ...this.bridgeProvider,
            name: this.bridgeProvider.name + (n ? " (Centralized)" : ""),
          }),
            (this.fromProvider = t.fromProvider
              ? Me[t.fromProvider]
              : {
                  ...Me[t.bridgeProvider],
                  name: Me[t.bridgeProvider].name + " Pool",
                }),
            (this.toProvider = t.toProvider
              ? Me[t.toProvider]
              : {
                  ...Me[t.bridgeProvider],
                  name: Me[t.bridgeProvider].name + " Pool",
                });
        }
      }
      (Vt.ɵfac = function (t) {
        return new (t || Vt)();
      }),
        (Vt.ɵcmp = e.ɵɵdefineComponent({
          type: Vt,
          selectors: [["app-cross-chain-route"]],
          inputs: { route: "route" },
          decls: 18,
          vars: 10,
          consts: [
            [1, "route"],
            [1, "dex"],
            [1, "dex__icon"],
            ["alt", "Source trade provider", 3, "src"],
            [1, "dex__name"],
            [1, "route__line", "route__line_left"],
            ["alt", "Bridge provider", 1, "dex", 3, "src"],
            [1, "route__line", "route__line_right"],
            ["alt", "Target trade provider", 3, "src"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2),
              e.ɵɵelement(3, "img", 3),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(4, "div", 4),
              e.ɵɵtext(5),
              e.ɵɵelementEnd()(),
              e.ɵɵelement(6, "div", 5),
              e.ɵɵelementStart(7, "div", 1)(8, "div", 2),
              e.ɵɵelement(9, "img", 6),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(10, "div", 4),
              e.ɵɵtext(11),
              e.ɵɵelementEnd()(),
              e.ɵɵelement(12, "div", 7),
              e.ɵɵelementStart(13, "div", 1)(14, "div", 2),
              e.ɵɵelement(15, "img", 8),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(16, "div", 4),
              e.ɵɵtext(17),
              e.ɵɵelementEnd()()()),
              2 & t &&
                (e.ɵɵadvance(3),
                e.ɵɵproperty(
                  "src",
                  null == n.fromProvider ? null : n.fromProvider.image,
                  e.ɵɵsanitizeUrl
                ),
                e.ɵɵadvance(2),
                e.ɵɵtextInterpolate(
                  null == n.fromProvider ? null : n.fromProvider.name
                ),
                e.ɵɵadvance(1),
                e.ɵɵstyleProp("--left-color", n.fromProvider.color),
                e.ɵɵadvance(3),
                e.ɵɵproperty(
                  "src",
                  null == n.bridgeProvider ? null : n.bridgeProvider.image,
                  e.ɵɵsanitizeUrl
                ),
                e.ɵɵadvance(2),
                e.ɵɵtextInterpolate(
                  null == n.bridgeProvider ? null : n.bridgeProvider.name
                ),
                e.ɵɵadvance(1),
                e.ɵɵstyleProp("--right-color", n.toProvider.color),
                e.ɵɵadvance(3),
                e.ɵɵproperty(
                  "src",
                  null == n.toProvider ? null : n.toProvider.image,
                  e.ɵɵsanitizeUrl
                ),
                e.ɵɵadvance(2),
                e.ɵɵtextInterpolate1(
                  " ",
                  null == n.toProvider ? null : n.toProvider.name,
                  " "
                ));
          },
          styles: [
            '[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{z-index:-1;display:block}.info[_ngcontent-%COMP%]{display:flex;align-items:center;width:-moz-fit-content;width:fit-content;margin-bottom:24px;font-size:14px;border-radius:100px}.info__chip[_ngcontent-%COMP%]{padding:6px 20px;color:var(--primary-text);line-height:22px;border-radius:100px}.info__chip_colored[_ngcontent-%COMP%]{background:rgba(238,128,75,.15);border-radius:100px}.info__chip[_ngcontent-%COMP%]:not(:last-child){margin-right:6px}.info__chip[_ngcontent-%COMP%]:last-child{padding-left:14px}.route[_ngcontent-%COMP%]{position:relative;display:flex;padding:0 20px}.route__line[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap}.route__line[_ngcontent-%COMP%]:after{display:inline-block;width:100%;padding-left:5px;font-size:28px;letter-spacing:2px;vertical-align:3px;background-repeat:repeat;background-size:100%;-webkit-background-clip:text;content:"..........................................................................................................";-webkit-text-fill-color:transparent}.route__line_left[_ngcontent-%COMP%]:after{color:var(--left-color);background-image:linear-gradient(90deg,rgba(0,0,0,0),var(--left-color) 40%)}.route__line_right[_ngcontent-%COMP%]{margin-left:-4.5px}.route__line_right[_ngcontent-%COMP%]:after{color:var(--right-color);background-image:linear-gradient(90deg,var(--right-color) 40%,rgba(0,0,0,0))}.route[_ngcontent-%COMP%]   .dex[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;width:40px}.route[_ngcontent-%COMP%]   .dex__icon[_ngcontent-%COMP%]{position:relative;width:32px;height:32px;margin-bottom:10px}.route[_ngcontent-%COMP%]   .dex__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:4px}.route[_ngcontent-%COMP%]   .dex__name[_ngcontent-%COMP%]{width:200px;color:var(--primary-text);font-weight:400;font-size:15px;line-height:18px;text-align:center}@media (max-width: 651px){.route[_ngcontent-%COMP%]   .dex__name[_ngcontent-%COMP%]{width:80px}}.route[_ngcontent-%COMP%]   .dex__cap[_ngcontent-%COMP%]{color:var(--secondary-text);font-weight:500;font-size:16px;line-height:19px;text-align:center}',
          ],
          changeDetection: 0,
        }));
      var Al = l(48382),
        ei = l(95698);
      const Ki = [
        "Celer",
        "Symbiosis",
        "deBridge",
        "Connext",
        "Hop",
        "Multichain",
        "Biconomy",
        "Optimism Gateway",
        "Polygon",
        "Avalanche Bridge",
        "Arbitrum Bridge",
      ];
      var Ml = l(37221);
      function Il(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1, " Finding Optimal Route"),
            e.ɵɵelement(2, "span", 5),
            e.ɵɵtext(3),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(4, 1, n.fakeProvider$),
              " "
            );
        }
      }
      function Nl(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtext(1, " We have selected the best Route available for you "),
          e.ɵɵelement(2, "img", 7),
          e.ɵɵelementContainerEnd());
      }
      function Rl(r, t) {
        1 & r && e.ɵɵtext(0, "Optimal routing not found");
      }
      function Bl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵtemplate(0, Nl, 3, 0, "ng-container", 3),
            e.ɵɵtemplate(
              1,
              Rl,
              1,
              0,
              "ng-template",
              null,
              6,
              e.ɵɵtemplateRefExtractor
            )),
          2 & r)
        ) {
          const n = e.ɵɵreference(2),
            i = e.ɵɵnextContext(3);
          e.ɵɵproperty("ngIf", i.isBestRouteFound)("ngIfElse", n);
        }
      }
      function Fl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 2),
            e.ɵɵtemplate(1, Il, 5, 3, "span", 3),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(
              3,
              Bl,
              3,
              2,
              "ng-template",
              null,
              4,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵreference(4),
            i = e.ɵɵnextContext(2);
          e.ɵɵproperty("@fadeAnimation", void 0),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 3, i.isCalculating$))(
              "ngIfElse",
              n
            );
        }
      }
      function Dl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div"),
            e.ɵɵtemplate(1, Fl, 5, 5, "div", 1),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 1, n.displayText$));
        }
      }
      class Fn {
        constructor(t, n) {
          (this.crossChainFormService = t),
            (this.swapFormService = n),
            (this.isCalculating$ = this.crossChainFormService.isCalculating$),
            (this.displayCounter$ = (0, $.a)([
              this.swapFormService.isFilled$,
              this.crossChainFormService.isCalculating$,
            ]).pipe(
              (0, Ml.C)(),
              (0, N.w)(([i, a]) =>
                i
                  ? a
                    ? (0, ot.H)(0, 1).pipe(
                        (0, v.U)((s) => s > 0),
                        (0, ei.q)(2)
                      )
                    : (0, L.of)(!0)
                  : (0, L.of)(!1)
              )
            )),
            (this.displayText$ = this.isCalculating$.pipe(
              (0, le.x)(),
              (0, N.w)((i) =>
                (0, Al.s)(
                  () => i,
                  (0, ot.H)(1).pipe((0, v.U)(() => !0)),
                  (0, ot.H)(2e3).pipe((0, v.U)(() => !1))
                )
              )
            )),
            (this.fakeProvider$ = (0, ot.H)(0, 1200).pipe(
              (0, v.U)(
                () =>
                  Ki[
                    (function El(r) {
                      return Math.floor(Math.random() * r);
                    })(Ki.length)
                  ]
              )
            ));
        }
        get isBestRouteFound() {
          const { selectedTrade: t } = this.crossChainFormService;
          return (
            !t?.error &&
            this.crossChainFormService.selectedTrade?.trade?.to.tokenAmount.isFinite()
          );
        }
      }
      (Fn.ɵfac = function (t) {
        return new (t || Fn)(e.ɵɵdirectiveInject(ge), e.ɵɵdirectiveInject(A.q));
      }),
        (Fn.ɵcmp = e.ɵɵdefineComponent({
          type: Fn,
          selectors: [["app-trades-counter"]],
          decls: 2,
          vars: 3,
          consts: [
            [4, "ngIf"],
            ["class", "calculated-trades", 4, "ngIf"],
            [1, "calculated-trades"],
            [4, "ngIf", "ngIfElse"],
            ["calculationFinished", ""],
            [1, "calculated-trades__dashes"],
            ["routeNotFound", ""],
            [
              "src",
              "assets/images/icons/checkmark/checkmark-thin-white.svg",
              "alt",
              "Success calculating",
              1,
              "calculated-trades__success-icon",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Dl, 3, 3, "div", 0), e.ɵɵpipe(1, "async")),
              2 & t &&
                e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(1, 1, n.displayCounter$));
          },
          dependencies: [m.O5, m.Ov],
          styles: [
            '[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.calculated-trades[_ngcontent-%COMP%]{display:flex;align-items:center;height:45px;color:var(--secondary-text);font-size:14px;line-height:120%;letter-spacing:.08em}.calculated-trades__dashes[_ngcontent-%COMP%]{display:inline-block;width:15px}.calculated-trades__dashes[_ngcontent-%COMP%]:after{display:inline-block;animation:_ngcontent-%COMP%_dotty steps(1,end) 2s infinite;content:""}@keyframes _ngcontent-%COMP%_dotty{0%{content:"."}33%{content:".."}66%{content:"..."}to{content:"."}}.calculated-trades__success-icon[_ngcontent-%COMP%]{width:14px;height:14px;margin-left:5px}',
          ],
          data: {
            animation: [
              (0, U.X$)("fadeAnimation", [
                (0, U.eR)(":enter", [
                  (0, U.oB)({ opacity: 0 }),
                  (0, U.jt)("200ms", (0, U.oB)({ opacity: 1 })),
                ]),
                (0, U.eR)(":leave", [
                  (0, U.oB)({ opacity: 1 }),
                  (0, U.jt)("600ms", (0, U.oB)({ opacity: 0 })),
                ]),
              ]),
            ],
          },
          changeDetection: 0,
        }));
      var Zi = l(1383);
      function Ll(r, t) {
        1 & r && e.ɵɵelement(0, "tui-badge", 7);
      }
      function Hl(r, t) {
        if ((1 & r && e.ɵɵelement(0, "tui-badge", 8), 2 & r)) {
          const n = e.ɵɵnextContext().$implicit,
            i = e.ɵɵnextContext();
          e.ɵɵproperty("value", i.getMinMaxError(n));
        }
      }
      const $l = function (r) {
          return { trade_selected: r };
        },
        Vl = function (r) {
          return { minRound: 3, maxRound: 5, decimals: r };
        };
      function jl(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "li", 1),
            e.ɵɵlistener("click", function () {
              const s = e.ɵɵrestoreView(n).$implicit,
                c = e.ɵɵnextContext();
              return e.ɵɵresetView(c.selectTrade(s));
            }),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementStart(3, "div", 2),
            e.ɵɵelement(4, "app-cross-chain-route", 3),
            e.ɵɵelementStart(5, "span"),
            e.ɵɵtext(6),
            e.ɵɵpipe(7, "withRound"),
            e.ɵɵpipe(8, "bigNumberFormat"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(9, "div", 4),
            e.ɵɵtemplate(10, Ll, 1, 0, "tui-badge", 5),
            e.ɵɵtemplate(11, Hl, 1, 1, "tui-badge", 6),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = t.$implicit,
            i = t.index,
            a = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngClass",
              e.ɵɵpureFunction1(
                14,
                $l,
                e.ɵɵpipeBind1(2, 6, a.selectedTrade$).tradeType === n.tradeType
              )
            )("@fadeAnimation", void 0),
            e.ɵɵadvance(3),
            e.ɵɵproperty("route", n.route),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind3(
                7,
                8,
                e.ɵɵpipeBind1(
                  8,
                  12,
                  null == n.trade || null == n.trade.to
                    ? null
                    : n.trade.to.tokenAmount
                ),
                "toClosestValue",
                e.ɵɵpureFunction1(
                  16,
                  Vl,
                  null == n.trade || null == n.trade.to
                    ? null
                    : n.trade.to.decimals
                )
              ),
              " "
            ),
            e.ɵɵadvance(4),
            e.ɵɵproperty("ngIf", 0 === i),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              i > 0 && (n.tags.minAmountWarning || n.tags.maxAmountWarning)
            );
        }
      }
      class Dn {
        constructor(t, n) {
          (this.cdr = t),
            (this.crossChainFormService = n),
            (this.selectionHandler = new e.EventEmitter()),
            (this.selectedTrade$ = this.crossChainFormService.selectedTrade$);
        }
        getMinMaxError(t) {
          const n = t.error,
            i =
              (n instanceof o.MinAmountError ||
                n instanceof o.MinAmountError) &&
              n.tokenSymbol.toLowerCase().includes("usd");
          return n instanceof o.MaxAmountError
            ? `Max: ${n.maxAmount.toFixed(2)}${i ? "$" : ""}`
            : n instanceof o.MinAmountError
            ? `Min: ${n.minAmount.toFixed(2)}${i ? "$" : ""}`
            : void 0;
        }
        selectTrade(t) {
          this.crossChainFormService.updateSelectedTrade(t, !0),
            this.selectionHandler.emit();
        }
        trackByType(t, n) {
          return n.tradeType;
        }
      }
      function zl(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 8)(1, "button", 9),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(4);
              return e.ɵɵresetView(a.toggleExpanded());
            }),
            e.ɵɵtext(2, " Other routes "),
            e.ɵɵelement(3, "img", 10),
            e.ɵɵelementEnd()();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(4);
          e.ɵɵadvance(3),
            e.ɵɵclassProp("trade-panel__expand-arrow_opened", n.expanded);
        }
      }
      (Dn.ɵfac = function (t) {
        return new (t || Dn)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(ge)
        );
      }),
        (Dn.ɵcmp = e.ɵɵdefineComponent({
          type: Dn,
          selectors: [["app-trades-list"]],
          inputs: { taggedTrades: "taggedTrades" },
          outputs: { selectionHandler: "selectionHandler" },
          decls: 3,
          vars: 3,
          consts: [
            [4, "ngFor", "ngForOf", "ngForTrackBy"],
            [1, "trade", 3, "ngClass", "click"],
            [1, "trade__container"],
            [3, "route"],
            [1, "trade__statuses"],
            ["status", "success", "value", "Best", 4, "ngIf"],
            ["status", "warning", 3, "value", 4, "ngIf"],
            ["status", "success", "value", "Best"],
            ["status", "warning", 3, "value"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementContainerStart(0),
              e.ɵɵelementStart(1, "ul"),
              e.ɵɵtemplate(2, jl, 12, 18, "ng-container", 0),
              e.ɵɵelementEnd(),
              e.ɵɵelementContainerEnd()),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵproperty("@listAnimation", void 0),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngForOf", n.taggedTrades)(
                  "ngForTrackBy",
                  n.trackByType
                ));
          },
          dependencies: [m.mk, m.sg, m.O5, Zi.g, Vt, m.Ov, Ce.N, Te.f],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:0 21px}.trade[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:52px;padding:10px 0;border:1px solid var(--transparent-line);border-radius:14px;transition:.2s ease-in-out}@media (max-width: 560px){.trade[_ngcontent-%COMP%]{height:auto}}.trade__container[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center;width:85%}@media (max-width: 560px){.trade__container[_ngcontent-%COMP%]{flex-direction:column}.trade__container[_ngcontent-%COMP%]   app-cross-chain-route[_ngcontent-%COMP%]{width:100%}}.trade__statuses[_ngcontent-%COMP%]{display:flex;gap:5px}.trade_selected[_ngcontent-%COMP%]{border:1px solid var(--primary-color)}.trade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex}.trade[_ngcontent-%COMP%]:hover{background:var(--transparent-line);cursor:pointer}app-cross-chain-route[_ngcontent-%COMP%]{display:block;width:55%}[_nghost-%COMP%]     .route{padding:0!important}[_nghost-%COMP%]     .route__line:after{font-size:18px}[_nghost-%COMP%]     .dex__name{display:none}[_nghost-%COMP%]     .dex__icon{margin-bottom:0!important}",
          ],
          data: { animation: [J.qy, J.nW] },
          changeDetection: 0,
        }));
      const Yl = function (r) {
          return { "trade-panel__trades-content_expanded": r };
        },
        Wl = function () {
          return [];
        };
      function Ul(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 4),
            e.ɵɵelement(2, "app-trades-counter"),
            e.ɵɵtemplate(3, zl, 4, 2, "div", 5),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "div", 6)(5, "tui-scrollbar")(
              6,
              "app-trades-list",
              7
            ),
            e.ɵɵlistener("selectionHandler", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.handleSelection());
            }),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(3);
          e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", n.length > 1),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngClass", e.ɵɵpureFunction1(3, Yl, i.expanded)),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "taggedTrades",
              i.showTradesList ? n : e.ɵɵpureFunction0(5, Wl)
            );
        }
      }
      function Gl(r, t) {
        if ((1 & r && e.ɵɵelement(0, "app-cross-chain-route", 12), 2 & r)) {
          const n = e.ɵɵnextContext().ngIf;
          e.ɵɵproperty("route", n);
        }
      }
      function Kl(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtemplate(1, Gl, 1, 1, "app-cross-chain-route", 11),
          e.ɵɵelementContainerEnd());
      }
      function Zl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 2)(2, "div", 3),
            e.ɵɵtemplate(3, Ul, 7, 6, "ng-container", 1),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementEnd()(),
            e.ɵɵtemplate(5, Kl, 2, 0, "ng-container", 0),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(3),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(4, 2, i.taggedTrades$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", null == n ? null : n.route);
        }
      }
      function Xl(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Zl, 6, 4, "ng-container", 1),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.selectedTrade$));
        }
      }
      class Ln {
        constructor(t, n, i, a, s) {
          (this.cdr = t),
            (this.crossChainFormService = n),
            (this.swapFormService = i),
            (this.window = a),
            (this.destroy$ = s),
            (this.taggedTrades$ = this.crossChainFormService.taggedTrades$.pipe(
              (0, v.U)((c) => c.filter((p) => p.trade))
            )),
            (this.selectedTrade$ = this.crossChainFormService.selectedTrade$),
            (this.fromAmount$ = this.swapFormService.inputValue$.pipe(
              (0, v.U)((c) => c.fromAmount)
            )),
            (this.expanded = !1),
            (this.showTradesList = !1),
            this.formSubscribe();
        }
        formSubscribe() {
          this.swapFormService.inputValueDistinct$
            .pipe((0, O.R)(this.destroy$))
            .subscribe(() => {
              this.expanded = !1;
            });
        }
        handleSelection() {
          (this.showTradesList = !1),
            (this.expanded = !1),
            this.cdr.detectChanges();
        }
        toggleExpanded() {
          this.expanded
            ? ((this.showTradesList = !1),
              setTimeout(() => {
                (this.expanded = !1), this.cdr.detectChanges();
              }, 150))
            : ((this.expanded = !0), (this.showTradesList = !0));
        }
      }
      function Ql(r, t) {
        1 & r && e.ɵɵelement(0, "app-to-amount-estimated", 10),
          2 & r && e.ɵɵproperty("errorText", t.ngLet);
      }
      function Jl(r, t) {
        1 & r && e.ɵɵelement(0, "app-target-network-address");
      }
      function ql(r, t) {
        1 & r && e.ɵɵelement(0, "app-best-trade-panel");
      }
      function ep(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtemplate(1, ql, 1, 0, "app-best-trade-panel", 11),
          e.ɵɵelementContainerEnd());
      }
      function tp(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(
              4,
              "div"
            ),
            e.ɵɵelement(5, "app-select-asset-button-tokens", 4),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(6, Ql, 1, 1, "app-to-amount-estimated", 5),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(7, Jl, 1, 0, "app-target-network-address", 6),
            e.ɵɵpipe(8, "async"),
            e.ɵɵtemplate(9, ep, 2, 0, "ng-container", 6),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(10, "div", 7)(11, "div", 8)(
              12,
              "app-swap-button-container",
              9
            ),
            e.ɵɵlistener("onUpdateRateClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.onUpdateRate());
            })("onSwapClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.onSwapTrade());
            })("onApproveClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.onApproveTrade());
            }),
            e.ɵɵpipe(13, "async"),
            e.ɵɵpipe(14, "async"),
            e.ɵɵpipe(15, "async"),
            e.ɵɵpipe(16, "async"),
            e.ɵɵpipe(17, "async"),
            e.ɵɵelementEnd()()()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(6),
            e.ɵɵproperty(
              "ngLet",
              (null == n ? null : n.translateKey) ||
                (null == n ? null : n.message)
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(8, 8, i.displayTargetAddressInput$)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", !n),
            e.ɵɵadvance(3),
            e.ɵɵproperty("needApprove", e.ɵɵpipeBind1(13, 10, i.needApprove$))(
              "withApproveButton",
              e.ɵɵpipeBind1(14, 12, i.displayApproveButton$)
            )("status", e.ɵɵpipeBind1(15, 14, i.tradeStatus$))(
              "error",
              e.ɵɵpipeBind1(16, 16, i.selectedTradeError$)
            )("nonEvmChangenow", e.ɵɵpipeBind1(17, 18, i.nonEvmChangenow$));
        }
      }
      function np(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, tp, 18, 20, "ng-container", 0),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.criticalError$));
        }
      }
      (Ln.ɵfac = function (t) {
        return new (t || Ln)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(ge),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(we.m9),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (Ln.ɵcmp = e.ɵɵdefineComponent({
          type: Ln,
          selectors: [["app-best-trade-panel"]],
          features: [
            e.ɵɵProvidersFeature([
              { provide: Ct.dx, useFactory: () => 1e4 },
              k.a3,
            ]),
          ],
          decls: 2,
          vars: 3,
          consts: [
            [4, "ngIf"],
            [4, "ngLet"],
            [1, "trade-panel"],
            [1, "trade-panel__row"],
            [1, "trade-panel__header"],
            ["class", "trade-panel__text", 4, "ngIf"],
            [1, "trade-panel__trades-content", 3, "ngClass"],
            [3, "taggedTrades", "selectionHandler"],
            [1, "trade-panel__text"],
            [1, "trade-panel__expand-button", 3, "click"],
            [
              "src",
              "assets/images/icons/arrow-down.svg",
              "alt",
              "expand",
              1,
              "trade-panel__expand-arrow",
            ],
            [3, "route", 4, "noFrame"],
            [3, "route"],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵtemplate(0, Xl, 3, 3, "ng-container", 0),
                e.ɵɵpipe(1, "async")),
              2 & t)
            ) {
              let i;
              e.ɵɵproperty(
                "ngIf",
                null == (i = e.ɵɵpipeBind1(1, 1, n.fromAmount$))
                  ? null
                  : i.isFinite()
              );
            }
          },
          dependencies: [m.mk, m.O5, B.e, de.a, $e.IB, Vt, Fn, Dn, m.Ov],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center}.trade-panel[_ngcontent-%COMP%]{position:relative;height:100%}.trade-panel__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:45px}.trade-panel__text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:45px;font-size:16px}.trade-panel__expand-button[_ngcontent-%COMP%]{margin-left:auto;color:var(--primary-color)}.trade-panel__expand-arrow[_ngcontent-%COMP%]{width:13px;margin-left:6px;transition:.2s ease-in-out}.trade-panel__expand-arrow_opened[_ngcontent-%COMP%]{transform:rotate(180deg)}.trade-panel__trades-content[_ngcontent-%COMP%]{position:absolute;left:-24px;z-index:999;box-sizing:content-box;width:100%;height:0;padding:0 24px;background:var(--form-background);border-bottom-right-radius:19px;border-bottom-left-radius:19px}@media (max-width: 651px){.trade-panel__trades-content[_ngcontent-%COMP%]{left:0;padding:0}}.trade-panel__trades-content_expanded[_ngcontent-%COMP%]{height:176px}@media (max-width: 651px){.trade-panel__trades-content_expanded[_ngcontent-%COMP%]{height:186px}}.trade-panel__trades-content[_ngcontent-%COMP%]   tui-scrollbar[_ngcontent-%COMP%]{max-height:100%}app-cross-chain-route[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:10px}",
          ],
          changeDetection: 0,
        }));
      class Hn {
        constructor(t, n, i) {
          (this.settingsService = t),
            (this.crossChainFormService = n),
            (this.swapFormService = i),
            (this.tradeStatusChange = new e.EventEmitter()),
            (this.TRADE_STATUS = u),
            (this.displayTargetAddressInput$ =
              this.settingsService.crossChainRoutingValueChanges.pipe(
                (0, Ee.O)(this.settingsService.crossChainRoutingValue),
                (0, v.U)((a) => a.showReceiverAddress)
              )),
            (this.tradeStatus$ = this.crossChainFormService.tradeStatus$),
            (this.needApprove$ = this.crossChainFormService.selectedTrade$.pipe(
              (0, v.U)((a) => a?.needApprove || !1)
            )),
            (this.displayApproveButton$ =
              this.crossChainFormService.displayApproveButton$),
            (this.criticalError$ = this.crossChainFormService.criticalError$),
            (this.selectedTradeError$ =
              this.crossChainFormService.selectedTradeError$),
            (this.nonEvmChangenow$ =
              this.crossChainFormService.selectedTrade$.pipe(
                (0, v.U)(
                  (a) =>
                    a?.tradeType === o.CROSS_CHAIN_TRADE_TYPE.CHANGENOW &&
                    !o.BlockchainsInfo.isEvmBlockchainName(
                      this.swapFormService.inputValue.fromAssetType
                    )
                )
              )),
            this.crossChainFormService.tradeStatus$.subscribe((a) => {
              this.tradeStatusChange.emit(a);
            });
        }
        onUpdateRate() {
          this.crossChainFormService.updateRate();
        }
        onApproveTrade() {
          this.crossChainFormService.approveTrade();
        }
        onSwapTrade() {
          this.crossChainFormService.swapTrade();
        }
      }
      (Hn.ɵfac = function (t) {
        return new (t || Hn)(
          e.ɵɵdirectiveInject(q),
          e.ɵɵdirectiveInject(ge),
          e.ɵɵdirectiveInject(A.q)
        );
      }),
        (Hn.ɵcmp = e.ɵɵdefineComponent({
          type: Hn,
          selectors: [["app-cross-chain-bottom-form"]],
          outputs: { tradeStatusChange: "tradeStatusChange" },
          decls: 2,
          vars: 3,
          consts: [
            [4, "ngLet"],
            [1, "bottom-form"],
            [1, "bottom-form__container"],
            [1, "bottom-form__estimate-container"],
            ["formType", "to"],
            [3, "errorText", 4, "ngLet"],
            [4, "ngIf"],
            [1, "bottom-form__footer"],
            [1, "bottom-form__button"],
            [
              "buttonText",
              "Swap",
              3,
              "needApprove",
              "withApproveButton",
              "status",
              "error",
              "nonEvmChangenow",
              "onUpdateRateClick",
              "onSwapClick",
              "onApproveClick",
            ],
            [3, "errorText"],
            [4, "noFrame"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, np, 3, 3, "ng-container", 0),
              e.ɵɵpipe(1, "async")),
              2 & t &&
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(1, 1, n.tradeStatus$));
          },
          dependencies: [$t, Lt, Ve, et, m.O5, B.e, de.a, Ln, m.Ov],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.bottom-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}html.iframe-horizontal[_nghost-%COMP%]   .bottom-form[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-form[_ngcontent-%COMP%]{flex-direction:row}html.iframe-vertical[_nghost-%COMP%]   .bottom-form[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form[_ngcontent-%COMP%]{justify-content:space-between;height:212px}.bottom-form__container[_ngcontent-%COMP%]{z-index:9999;min-height:113px;margin:30px 0 15px}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]{position:relative;margin:0}html.iframe-horizontal[_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]{position:relative;flex-direction:row-reverse;align-items:center;width:363px;height:50px;min-height:unset;margin:0;padding:0 7px 0 16px;background:var(--primary-background);border-radius:10px}html.iframe-horizontal:not(.dark)[_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%], html.iframe-horizontal:not(.dark)   [_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]{flex-direction:column;justify-content:flex-start;padding:0;background-color:transparent}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]   app-select-asset-button-tokens[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]   app-select-asset-button-tokens[_ngcontent-%COMP%]{margin-bottom:10px}@media (max-width: 651px){.bottom-form__container[_ngcontent-%COMP%]{height:auto;padding:30px 20px}}@media (max-width: 420px){.bottom-form__container[_ngcontent-%COMP%]{flex-direction:column}}.bottom-form__estimate-container[_ngcontent-%COMP%]{display:flex;grid-gap:10px;justify-content:space-between;min-height:65px}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__estimate-container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__estimate-container[_ngcontent-%COMP%]{flex-direction:column;grid-gap:6px}html.iframe-horizontal[_nghost-%COMP%]   .bottom-form__estimate-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-form__estimate-container[_ngcontent-%COMP%]{flex-direction:row-reverse;align-items:center;height:100%;min-height:auto}@media (max-width: 420px){.bottom-form__estimate-container[_ngcontent-%COMP%]{flex-direction:column}}.bottom-form__footer[_ngcontent-%COMP%]{margin-top:16px}html.iframe-horizontal[_nghost-%COMP%]   .bottom-form__footer[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-form__footer[_ngcontent-%COMP%]{margin-top:0;margin-left:12px}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__footer[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__footer[_ngcontent-%COMP%]{margin-top:30px;padding:0}@media (max-width: 651px){.bottom-form__footer[_ngcontent-%COMP%]{margin-top:0;padding:0 20px}}html.iframe-horizontal[_nghost-%COMP%]   .bottom-form__button[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-form__button[_ngcontent-%COMP%]{width:180px}app-target-network-address[_ngcontent-%COMP%]{display:block;margin-top:10px}",
          ],
          changeDetection: 0,
        }));
      class nt {
        constructor(t, n, i, a, s) {
          (this.swapFormService = t),
            (this.refreshService = n),
            (this.onramperCalculationService = i),
            (this.swapTypeService = a),
            (this.authService = s),
            (this._calculateTrade$ = new _e.x()),
            (this._tradeStatus$ = new w.X(u.DISABLED)),
            (this.tradeStatus$ = this._tradeStatus$.asObservable()),
            (this._tradeError$ = new w.X(null)),
            (this.tradeError$ = this._tradeError$.asObservable()),
            (this.refreshServiceCallsCounter = 0),
            this.subscribeOnCalculation(),
            this.subscribeOnFormChanges(),
            this.subscribeOnRefreshServiceCalls();
        }
        get tradeStatus() {
          return this._tradeStatus$.getValue();
        }
        set tradeStatus(t) {
          this.tradeStatus !== u.BUY_NATIVE_IN_PROGRESS &&
            this._tradeStatus$.next(t);
        }
        get tradeError() {
          return this._tradeError$.value;
        }
        set tradeError(t) {
          this._tradeError$.next(t);
        }
        get inputValue() {
          const t = this.swapFormService.inputValue;
          if (t.fromAssetType && "fiat" !== t.fromAssetType)
            throw new V.q("Cannot use onramper");
          return { ...t, fromFiat: t.fromAsset };
        }
        subscribeOnCalculation() {
          var t = this;
          this._calculateTrade$
            .pipe(
              (0, dt.b)(200),
              (0, v.U)((n) =>
                n.stop || !this.swapFormService.isFilled
                  ? ((this.tradeStatus = u.DISABLED),
                    this.swapTypeService.getSwapProviderType() ===
                      b.V.ONRAMPER &&
                      (this.refreshService.setStopped(),
                      this.swapFormService.outputControl.patchValue({
                        toAmount: null,
                      })),
                    { ...n, stop: !0 })
                  : { ...n, stop: !1 }
              ),
              (0, N.w)(
                (function () {
                  var n = (0, T.Z)(function* (i) {
                    if (i.stop) return null;
                    i.isForced && t.unsetTradeData(),
                      t.tradeStatus !== u.READY_TO_APPROVE &&
                        t.tradeStatus !== u.READY_TO_SWAP &&
                        t.tradeStatus !== u.OLD_TRADE_DATA &&
                        (t.tradeStatus = u.LOADING),
                      t.refreshService.setRefreshing();
                    const a =
                      yield t.onramperCalculationService.getOutputTokenAmount(
                        t.inputValue
                      );
                    (t.tradeStatus = a?.isFinite()
                      ? u.READY_TO_BUY_NATIVE
                      : u.DISABLED),
                      t.refreshService.setStopped(),
                      t.swapFormService.outputControl.patchValue({
                        toAmount: a,
                      });
                  });
                  return function (i) {
                    return n.apply(this, arguments);
                  };
                })()
              ),
              (0, br.K)((n, i) => {
                (this.tradeStatus = u.DISABLED),
                  this.refreshService.setStopped();
                const a = mt.E.parseError(n);
                return (
                  (this.tradeError =
                    a instanceof Kr.M
                      ? new V.q("Trade is unavailable, please try later")
                      : a),
                  i
                );
              })
            )
            .subscribe();
        }
        subscribeOnFormChanges() {
          this.swapFormService.inputValueDistinct$.subscribe(() => {
            this.startRecalculation();
          });
        }
        subscribeOnRefreshServiceCalls() {
          this.refreshService.onRefresh$.subscribe(({ isForced: t }) => {
            if (t) this.startRecalculation();
            else {
              if (!this.authService.userAddress || this.tradeError) return;
              if (this.refreshServiceCallsCounter >= 4)
                return void (this.tradeStatus = u.OLD_TRADE_DATA);
              (this.refreshServiceCallsCounter += 1),
                this.startRecalculation(!1);
            }
          });
        }
        unsetTradeData() {
          (this.tradeError = null),
            (this.refreshServiceCallsCounter = 0),
            this.swapFormService.outputControl.patchValue({ toAmount: null });
        }
        startRecalculation(t = !0) {
          this.swapTypeService.getSwapProviderType() === b.V.ONRAMPER
            ? this._calculateTrade$.next({ isForced: t })
            : this._calculateTrade$.next({ stop: !0 });
        }
        updateRate() {
          (this.tradeStatus = u.LOADING), this.startRecalculation();
        }
        stopBuyNativeInProgress() {
          this._tradeStatus$.next(u.LOADING), this.startRecalculation();
        }
      }
      function rp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "img", 3),
            e.ɵɵelementStart(2, "div", 4),
            e.ɵɵtext(3, " You will receive "),
            e.ɵɵelementStart(4, "span", 5),
            e.ɵɵtext(5),
            e.ɵɵelementEnd(),
            e.ɵɵtext(6, " to "),
            e.ɵɵelementStart(7, "span", 5),
            e.ɵɵtext(8),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngIf,
            i = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(5),
            e.ɵɵtextInterpolate(n),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(i);
        }
      }
      function ip(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1),
            e.ɵɵtemplate(1, rp, 9, 2, "ng-container", 2),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 1, n.nativeTokenSymbol$));
        }
      }
      (nt.ɵfac = function (t) {
        return new (t || nt)(
          e.ɵɵinject(A.q),
          e.ɵɵinject(ke),
          e.ɵɵinject(Le),
          e.ɵɵinject(ce.H),
          e.ɵɵinject(j.e)
        );
      }),
        (nt.ɵprov = e.ɵɵdefineInjectable({ token: nt, factory: nt.ɵfac }));
      class $n {
        constructor(t, n, i, a) {
          (this.authService = t),
            (this.swapFormService = n),
            (this.windowWidthService = i),
            (this.iframeService = a),
            (this.nativeTokenSymbol$ = this.swapFormService.toToken$.pipe(
              (0, v.U)((s) =>
                s ? o.nativeTokensList[s.blockchain].symbol : null
              )
            )),
            (this.walletAddressText$ = (0, $.a)([
              this.windowWidthService.windowSize$,
              this.authService.currentUser$,
              (0, L.of)(this.iframeService.isIframe),
            ]).pipe(
              (0, v.U)(([s, c, p]) => {
                const d = c?.address;
                return d
                  ? p || s <= xr.G.MOBILE_MD_MINUS
                    ? d.slice(0, 5) + "..." + d.slice(d.length - 4)
                    : d
                  : null;
              })
            ));
        }
      }
      function op(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 2),
            e.ɵɵelement(2, "app-select-asset-button-tokens", 3)(
              3,
              "app-to-amount-estimated",
              4
            ),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "app-receiver-address"),
            e.ɵɵelementStart(5, "div", 5)(6, "app-swap-button-container", 6),
            e.ɵɵlistener("onUpdateRateClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onUpdateRate());
            })("onBuyNativeClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onBuyNative());
            }),
            e.ɵɵpipe(7, "async"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = t.ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵproperty(
              "errorText",
              (null == n ? null : n.translateKey) ||
                (null == n ? null : n.message)
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("needApprove", !1)("withApproveButton", !1)(
              "status",
              e.ɵɵpipeBind1(7, 6, i.tradeStatus$)
            )("error", n)("isOnramper", !0);
        }
      }
      ($n.ɵfac = function (t) {
        return new (t || $n)(
          e.ɵɵdirectiveInject(j.e),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(Nr.R),
          e.ɵɵdirectiveInject(W.b)
        );
      }),
        ($n.ɵcmp = e.ɵɵdefineComponent({
          type: $n,
          selectors: [["app-receiver-address"]],
          decls: 2,
          vars: 3,
          consts: [
            ["class", "receiver-address", 4, "ngIf"],
            [1, "receiver-address"],
            [4, "ngIf"],
            ["src", "assets/images/icons/hint.svg", "alt", "hint"],
            [1, "receiver-address__text"],
            [1, "medium"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, ip, 3, 3, "div", 0), e.ɵɵpipe(1, "async")),
              2 & t &&
                e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(1, 1, n.walletAddressText$));
          },
          dependencies: [m.O5, m.Ov],
          styles: [
            ".receiver-address[_ngcontent-%COMP%]{display:flex;grid-gap:8px}.receiver-address__text[_ngcontent-%COMP%]{font-size:13px;letter-spacing:.4px}.medium[_ngcontent-%COMP%]{font-weight:500}",
          ],
          changeDetection: 0,
        }));
      class Vn {
        constructor(t, n) {
          (this.onramperFormService = t),
            (this.onramperFormCalculationService = n),
            (this.tradeStatus$ =
              this.onramperFormCalculationService.tradeStatus$.pipe(
                (0, dt.b)(200)
              )),
            (this.tradeError$ =
              this.onramperFormCalculationService.tradeError$);
        }
        onUpdateRate() {
          this.onramperFormCalculationService.updateRate();
        }
        onBuyNative() {
          this.onramperFormService.widgetOpened = !0;
        }
      }
      (Vn.ɵfac = function (t) {
        return new (t || Vn)(e.ɵɵdirectiveInject(Pe), e.ɵɵdirectiveInject(nt));
      }),
        (Vn.ɵcmp = e.ɵɵdefineComponent({
          type: Vn,
          selectors: [["app-onramper-bottom-form"]],
          decls: 3,
          vars: 3,
          consts: [
            [1, "bottom-form"],
            [4, "ngLet"],
            [1, "bottom-form__output"],
            ["formType", "to"],
            [3, "errorText"],
            [1, "bottom-form__button"],
            [
              "buttonText",
              "Swap",
              3,
              "needApprove",
              "withApproveButton",
              "status",
              "error",
              "isOnramper",
              "onUpdateRateClick",
              "onBuyNativeClick",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0),
              e.ɵɵtemplate(1, op, 8, 8, "ng-container", 1),
              e.ɵɵpipe(2, "async"),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.tradeError$)));
          },
          dependencies: [$t, Ve, et, B.e, $n, m.Ov],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.bottom-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}html.iframe-vertical[_nghost-%COMP%]   .bottom-form[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form[_ngcontent-%COMP%]{justify-content:space-between;height:212px;padding:0!important}.bottom-form__output[_ngcontent-%COMP%]{z-index:9999;display:flex;grid-gap:10px;justify-content:space-between;min-height:65px;margin:30px 0 15px}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__output[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__output[_ngcontent-%COMP%]{flex-direction:column;grid-gap:6px;margin:0}.bottom-form[_ngcontent-%COMP%]   app-receiver-address[_ngcontent-%COMP%]{height:20px;margin-top:10px}.bottom-form__button[_ngcontent-%COMP%]{margin-top:16px}@media (max-width: 651px){.bottom-form[_ngcontent-%COMP%]{height:auto;padding:0 20px}}@media (max-width: 420px){.bottom-form[_ngcontent-%COMP%], .bottom-form__output[_ngcontent-%COMP%]{flex-direction:column}}",
          ],
          changeDetection: 0,
        }));
      const ap = {
        apiKey: Ci.d,
        color: "00e28e",
        supportSell: !1,
        supportSwap: !1,
        isAddressEditable: !1,
      };
      class vt {
        constructor(t, n, i) {
          (this.themeService = t),
            (this.swapFormService = n),
            (this.authService = i);
        }
        getWidgetUrl() {
          return this.themeService.theme$.pipe(
            (0, v.U)((t) => {
              const n = "dark" === t,
                i = this.swapFormService.inputValue.fromAsset.symbol,
                a = fi[this.swapFormService.inputValue.toBlockchain],
                s = a,
                c = this.swapFormService.inputValue.fromAmount.toFixed(),
                p = this.authService.userAddress;
              return this.parseToWidgetUrl({
                ...ap,
                darkMode: n,
                defaultFiat: i,
                defaultCrypto: a,
                onlyCryptos: s,
                defaultAmount: c,
                wallets: `${a}:${p}`,
                partnerContext: { walletAddress: p },
              });
            })
          );
        }
        parseToWidgetUrl(t) {
          const n = Object.entries(t).reduce(
            (i, [a, s]) =>
              `${i}${i ? "&" : ""}${a}=${
                "partnerContext" !== a
                  ? s
                  : encodeURIComponent(JSON.stringify(s))
              }`,
            ""
          );
          return `https://widget.onramper.com${n ? "/?" : ""}${n}`;
        }
      }
      (vt.ɵfac = function (t) {
        return new (t || vt)(
          e.ɵɵinject(ji.f),
          e.ɵɵinject(A.q),
          e.ɵɵinject(j.e)
        );
      }),
        (vt.ɵprov = e.ɵɵdefineInjectable({ token: vt, factory: vt.ɵfac }));
      var sp = l(54968),
        cp = l(36993);
      function lp(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 3)(1, "app-back-button", 4),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.closeWidget());
            }),
            e.ɵɵelementEnd()();
        }
      }
      class jn {
        constructor(t, n, i, a) {
          (this.onramperFormService = t),
            (this.onramperWidgetService = n),
            (this.iframeService = i),
            (this.window = a),
            (this.widgetUrl$ = this.onramperWidgetService.getWidgetUrl()),
            (this.widgetWidth$ = (0, sp.R)(this.window, "resize").pipe(
              (0, Ee.O)(null),
              (0, v.U)(() => Math.min(565, this.window.innerWidth - 40) + "px")
            )),
            (this.isIframe = this.iframeService.isIframe),
            (this.iframeSize = { width: "350px", height: "500px" });
        }
        closeWidget() {
          this.onramperFormService.widgetOpened = !1;
        }
      }
      (jn.ɵfac = function (t) {
        return new (t || jn)(
          e.ɵɵdirectiveInject(Pe),
          e.ɵɵdirectiveInject(vt),
          e.ɵɵdirectiveInject(W.b),
          e.ɵɵdirectiveInject(we.m9)
        );
      }),
        (jn.ɵcmp = e.ɵɵdefineComponent({
          type: jn,
          selectors: [["app-onramper-widget"]],
          decls: 6,
          vars: 11,
          consts: [
            [1, "widget-container"],
            ["class", "widget-container__back-button", 4, "ngIf"],
            [
              "title",
              "Onramper widget",
              "allow",
              "accelerometer; autoplay; camera; gyroscope; payment",
              3,
              "src",
              "height",
              "width",
            ],
            [1, "widget-container__back-button"],
            [3, "onClick"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0),
              e.ɵɵtemplate(1, lp, 2, 0, "div", 1),
              e.ɵɵelement(2, "iframe", 2),
              e.ɵɵpipe(3, "safeSanitizer"),
              e.ɵɵpipe(4, "async"),
              e.ɵɵpipe(5, "async"),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", !n.isIframe),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "src",
                  e.ɵɵpipeBind2(
                    3,
                    4,
                    e.ɵɵpipeBind1(4, 7, n.widgetUrl$),
                    "resourceUrl"
                  ),
                  e.ɵɵsanitizeResourceUrl
                )("height", n.isIframe ? n.iframeSize.height : "660px")(
                  "width",
                  n.isIframe
                    ? n.iframeSize.width
                    : e.ɵɵpipeBind1(5, 9, n.widgetWidth$)
                ));
          },
          dependencies: [m.O5, ct, m.Ov, cp.l],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.widget-container[_ngcontent-%COMP%]{position:relative;height:660px;background:var(--form-background);border-radius:19px}html.iframe-vertical[_nghost-%COMP%]   .widget-container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .widget-container[_ngcontent-%COMP%]{height:500px}.widget-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{border-radius:19px}.widget-container__back-button[_ngcontent-%COMP%]{position:absolute;top:0;left:-55px}.widget-container__back-button[_ngcontent-%COMP%]     app-rubic-button tui-wrapper{background:var(--form-background)}@media (max-width: 768px){.widget-container__back-button[_ngcontent-%COMP%]{display:none}}",
          ],
          changeDetection: 0,
        }));
      var C = l(70655),
        ti = l(35302),
        K = l(73442);
      let pp = (() => {
          let r = class {
            transform(n, i, ...a) {
              return i(n, ...a);
            }
          };
          return (
            (r.ɵfac = function (n) {
              return new (n || r)();
            }),
            (r.ɵpipe = e.ɵɵdefinePipe({
              name: "tuiMapper",
              type: r,
              pure: !0,
            })),
            r
          );
        })(),
        dp = (() => {
          let r = class {};
          return (
            (r.ɵfac = function (n) {
              return new (n || r)();
            }),
            (r.ɵmod = e.ɵɵdefineNgModule({ type: r })),
            (r.ɵinj = e.ɵɵdefineInjector({})),
            r
          );
        })();
      var jt = l(27670),
        Tr = l(60390),
        H = l(39193),
        zn = l(38084),
        mp = l(70589),
        Xi = l(38190),
        Qi = l(67795);
      const _p = ["*", [["input"]]],
        up = function (r, t, n, i, a) {
          return [r, t, n, i, a];
        };
      var Or;
      let ne = (Or = class extends ti.F9 {
        constructor(t, n, i) {
          super(t, n),
            (this.numberFormat = i),
            (this.min = -1 / 0),
            (this.max = 1 / 0),
            (this.decimal = "not-zero"),
            (this.precision = 2),
            (this.prefix = ""),
            (this.postfix = ""),
            (this.mask = (a, s, c, p) => ({
              mask: (0, jt.EC)({
                allowNegative: a,
                decimalLimit: c,
                allowDecimal: "never" !== s,
                requireDecimal: "always" === s,
                autoCorrectDecimalSymbol: !1,
                decimalSymbol: this.numberFormat.decimalSeparator,
                thousandSymbol: this.numberFormat.thousandSeparator,
              }),
              pipe: (0, jt.qs)(
                "always" === s ? c : 0,
                this.numberFormat.decimalSeparator,
                this.numberFormat.thousandSeparator,
                p || void 0,
                a
              ),
              guide: !1,
            }));
        }
        get nativeFocusableElement() {
          return !this.primitiveTextfield || this.computedDisabled
            ? null
            : this.primitiveTextfield.nativeFocusableElement;
        }
        get focused() {
          return !!this.primitiveTextfield && this.primitiveTextfield.focused;
        }
        get isNegativeAllowed() {
          return this.min < 0;
        }
        get inputMode() {
          return "never" === this.decimal ? "numeric" : "decimal";
        }
        get calculatedMaxLength() {
          return (
            18 +
            ("never" !== this.decimal &&
            this.nativeValue.includes(this.numberFormat.decimalSeparator)
              ? this.precision + 1
              : 0) +
            this.numberFormat.thousandSeparator.repeat(5).length
          );
        }
        get formattedValue() {
          const t = this.value || 0,
            i = Math.abs(t) % 1 > 0;
          let a = "always" === this.decimal || i ? this.precision : 0;
          const s = i ? (0, Tr.Nk)(t, this.precision) : "";
          return (
            this.focused && "always" !== this.decimal && (a = s.length),
            (0, Tr.uf)(
              t,
              a,
              this.numberFormat.decimalSeparator,
              this.numberFormat.thousandSeparator,
              this.numberFormat.zeroPadding
            )
          );
        }
        get computedValue() {
          return this.focused
            ? this.nativeValue
            : null === this.value
            ? ""
            : this.formattedValue;
        }
        onZero(t) {
          const n =
              this.nativeValue.split(this.numberFormat.decimalSeparator)[1] ||
              "",
            { nativeFocusableElement: i } = this;
          n.length < this.precision ||
            !i ||
            !i.selectionStart ||
            "0" !== this.nativeValue[i.selectionStart] ||
            (t.preventDefault(), i.selectionStart++);
        }
        onValueChange(t) {
          if ((0, jt.Y5)(t)) return void this.updateValue(null);
          if (this.isNativeValueNotFinished) return;
          const n = this.absoluteCapInputValue(t);
          null === n ||
            isNaN(n) ||
            (this.updateValue(n),
            n !==
              (0, jt.uk)(
                t,
                this.numberFormat.decimalSeparator,
                this.numberFormat.thousandSeparator
              ) && (this.nativeValue = this.formattedValue));
        }
        onKeyDown(t) {
          if (-1 !== H.YZ.indexOf(t.key)) {
            if ("never" === this.decimal) return void t.preventDefault();
            this.nativeValue.includes(this.numberFormat.decimalSeparator) &&
              (t.preventDefault(), this.setCaretAfterComma());
          }
        }
        onFocused(t) {
          if ((this.updateFocused(t), t)) return;
          const n = this.nativeNumberValue;
          if (isNaN(n)) return void this.clear();
          const i = Math.min(this.max, Math.max(this.min, n));
          this.updateValue(i), (this.nativeValue = this.formattedValue);
        }
        onHovered(t) {
          this.updateHovered(t);
        }
        onPressed(t) {
          this.updatePressed(t);
        }
        get isNativeValueNotFinished() {
          const t = this.nativeNumberValue;
          return t < 0 ? t > this.max : t < this.min;
        }
        get nativeValue() {
          return this.nativeFocusableElement
            ? this.nativeFocusableElement.value
            : "";
        }
        get nativeNumberValue() {
          return (0, jt.uk)(
            this.nativeValue,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator
          );
        }
        set nativeValue(t) {
          !this.primitiveTextfield ||
            !this.nativeFocusableElement ||
            ((this.primitiveTextfield.value = t),
            (this.nativeFocusableElement.value = t));
        }
        clear() {
          (this.nativeValue = ""), this.updateValue(null);
        }
        absoluteCapInputValue(t) {
          const n = (0, jt.uk)(
              t,
              this.numberFormat.decimalSeparator,
              this.numberFormat.thousandSeparator
            ),
            i =
              n < 0
                ? Math.max(Math.max(this.min, Number.MIN_SAFE_INTEGER), n)
                : Math.min(n, Math.min(this.max, Number.MAX_SAFE_INTEGER));
          return isNaN(i) || i < this.min || i > this.max ? null : i;
        }
        setCaretAfterComma() {
          if (!this.nativeFocusableElement) return;
          const t = this.nativeValue.length - this.precision;
          this.nativeFocusableElement.setSelectionRange(t, t);
        }
      });
      var Ji;
      (ne.ɵfac = function (t) {
        return new (t || ne)(
          e.ɵɵdirectiveInject(h.NgControl, 10),
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(Ct.HO)
        );
      }),
        (ne.ɵcmp = e.ɵɵdefineComponent({
          type: ne,
          selectors: [["tui-input-number"]],
          viewQuery: function (t, n) {
            if ((1 & t && e.ɵɵviewQuery(zn.yc, 5), 2 & t)) {
              let i;
              e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                (n.primitiveTextfield = i.first);
            }
          },
          hostBindings: function (t, n) {
            1 & t &&
              e.ɵɵlistener("keydown.0", function (a) {
                return n.onZero(a);
              });
          },
          inputs: {
            min: "min",
            max: "max",
            decimal: "decimal",
            precision: "precision",
            prefix: "prefix",
            postfix: "postfix",
          },
          features: [
            e.ɵɵProvidersFeature([
              { provide: Xe.KZ, useExisting: (0, e.forwardRef)(() => Or) },
              { provide: ti.M$, useExisting: (0, e.forwardRef)(() => Or) },
            ]),
            e.ɵɵInheritDefinitionFeature,
          ],
          ngContentSelectors: ["*", "input"],
          decls: 4,
          vars: 23,
          consts: [
            [
              "tuiValueAccessor",
              "",
              "tuiTextfieldInputMode",
              "decimal",
              1,
              "textfield",
              3,
              "pseudoHovered",
              "pseudoFocused",
              "invalid",
              "tuiTextfieldMaxLength",
              "readOnly",
              "disabled",
              "textMask",
              "value",
              "prefix",
              "postfix",
              "focusable",
              "valueChange",
              "hoveredChange",
              "focusedChange",
              "pressedChange",
              "keydown",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵprojectionDef(_p),
              e.ɵɵelementStart(0, "tui-primitive-textfield", 0),
              e.ɵɵlistener("valueChange", function (a) {
                return n.onValueChange(a);
              })("hoveredChange", function (a) {
                return n.onHovered(a);
              })("focusedChange", function (a) {
                return n.onFocused(a);
              })("pressedChange", function (a) {
                return n.onPressed(a);
              })("keydown", function (a) {
                return n.onKeyDown(a);
              }),
              e.ɵɵpipe(1, "tuiMapper"),
              e.ɵɵprojection(2),
              e.ɵɵprojection(3, 1, ["ngProjectAs", "input", 5, ["input"]]),
              e.ɵɵelementEnd()),
              2 & t &&
                e.ɵɵproperty("pseudoHovered", n.pseudoHovered)(
                  "pseudoFocused",
                  n.computedFocused
                )("invalid", n.computedInvalid)(
                  "tuiTextfieldMaxLength",
                  n.calculatedMaxLength
                )("readOnly", n.readOnly)("disabled", n.computedDisabled)(
                  "textMask",
                  e.ɵɵpipeBindV(
                    1,
                    11,
                    e.ɵɵpureFunction5(
                      17,
                      up,
                      n.isNegativeAllowed,
                      n.mask,
                      n.decimal,
                      n.precision,
                      n.nativeFocusableElement
                    )
                  )
                )("value", n.computedValue)("prefix", n.prefix)(
                  "postfix",
                  n.postfix
                )("focusable", n.focusable);
          },
          dependencies: [Qi.hd, zn.yc, zn.B1, Y.D9, Y.fy, Xi.n, pp],
          styles: [
            "[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}",
          ],
          changeDetection: 0,
        })),
        (ne.ctorParameters = () => [
          {
            type: h.NgControl,
            decorators: [
              { type: e.Optional },
              { type: e.Self },
              { type: e.Inject, args: [h.NgControl] },
            ],
          },
          {
            type: e.ChangeDetectorRef,
            decorators: [{ type: e.Inject, args: [e.ChangeDetectorRef] }],
          },
          { type: void 0, decorators: [{ type: e.Inject, args: [Ct.HO] }] },
        ]),
        (0, C.__decorate)(
          [(0, e.ViewChild)(zn.yc)],
          ne.prototype,
          "primitiveTextfield",
          void 0
        ),
        (0, C.__decorate)(
          [(0, e.Input)(), (0, K.TH)()],
          ne.prototype,
          "min",
          void 0
        ),
        (0, C.__decorate)(
          [(0, e.Input)(), (0, K.TH)()],
          ne.prototype,
          "max",
          void 0
        ),
        (0, C.__decorate)(
          [(0, e.Input)(), (0, K.TH)()],
          ne.prototype,
          "decimal",
          void 0
        ),
        (0, C.__decorate)(
          [(0, e.Input)(), (0, K.TH)()],
          ne.prototype,
          "precision",
          void 0
        ),
        (0, C.__decorate)(
          [(0, e.Input)(), (0, K.TH)()],
          ne.prototype,
          "prefix",
          void 0
        ),
        (0, C.__decorate)(
          [(0, e.Input)(), (0, K.TH)()],
          ne.prototype,
          "postfix",
          void 0
        ),
        (0, C.__decorate)(
          [(0, e.HostListener)("keydown.0", ["$event"])],
          ne.prototype,
          "onZero",
          null
        ),
        (ne = Or =
          (0, C.__decorate)(
            [
              (0, C.__param)(0, (0, e.Optional)()),
              (0, C.__param)(0, (0, e.Self)()),
              (0, C.__param)(0, (0, e.Inject)(h.NgControl)),
              (0, C.__param)(1, (0, e.Inject)(e.ChangeDetectorRef)),
              (0, C.__param)(2, (0, e.Inject)(Ct.HO)),
            ],
            ne
          ));
      let rt = (Ji = class extends mp.dh {
        get value() {
          return this.host.computedValue;
        }
        onValueChange(t) {
          this.host.onValueChange(t);
        }
        process(t) {
          this.input = t;
        }
        ngDoCheck() {
          this.input &&
            ((this.input.maxLength = this.host.calculatedMaxLength),
            (this.input.inputMode = "decimal"));
        }
      });
      (rt.ɵfac = (function () {
        let r;
        return function (n) {
          return (r || (r = e.ɵɵgetInheritedFactory(rt)))(n || rt);
        };
      })()),
        (rt.ɵdir = e.ɵɵdefineDirective({
          type: rt,
          selectors: [["tui-input-number"]],
          features: [
            e.ɵɵProvidersFeature([
              { provide: Ct.S0, useExisting: (0, e.forwardRef)(() => Ji) },
            ]),
            e.ɵɵInheritDefinitionFeature,
          ],
        }));
      let qi = (() => {
        let r = class {};
        return (
          (r.ɵfac = function (n) {
            return new (n || r)();
          }),
          (r.ɵmod = e.ɵɵdefineNgModule({ type: r })),
          (r.ɵinj = e.ɵɵdefineInjector({
            imports: [Qi.QA, dp, zn.KW, Y.cn, Xi.S],
          })),
          r
        );
      })();
      class Yn {
        constructor(t, n) {
          (this.context = t), (this.orderExpirationService = n);
          const i = this.orderExpirationService.expirationTime;
          this.timeForm = new h.FormGroup({
            hours: new h.FormControl(Math.floor(i / 60)),
            minutes: new h.FormControl(i % 60),
          });
        }
        onSet() {
          const t = this.timeForm.value;
          this.orderExpirationService.updateExpirationTime(
            Math.max(60 * t.hours + t.minutes, 1)
          ),
            this.onClose();
        }
        onClose() {
          this.context.completeWith(null);
        }
        onHoursChange(t) {
          0 === t &&
            0 === this.timeForm.value.minutes &&
            this.timeForm.controls.minutes.setValue(1);
        }
      }
      (Yn.ɵfac = function (t) {
        return new (t || Yn)(
          e.ɵɵdirectiveInject(z.yf),
          e.ɵɵdirectiveInject(Ie)
        );
      }),
        (Yn.ɵcmp = e.ɵɵdefineComponent({
          type: Yn,
          selectors: [["polymorpheus-expiration-custom"]],
          decls: 21,
          vars: 11,
          consts: [
            [1, "container", 3, "formGroup"],
            [1, "container__header"],
            [1, "inputs"],
            [1, "inputs__title"],
            [1, "inputs__flex"],
            [1, "input", "input_hours"],
            [
              3,
              "tuiTextfieldLabelOutside",
              "formControlName",
              "min",
              "max",
              "ngModelChange",
            ],
            [1, "input__title"],
            [1, "input", "input_minutes"],
            [3, "tuiTextfieldLabelOutside", "formControlName", "min", "max"],
            [1, "container__set-button", 3, "disabled", "onClick"],
            [
              "appearance",
              "outline",
              1,
              "container__cancel-button",
              3,
              "onClick",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "form", 0)(1, "div", 1),
              e.ɵɵtext(2, "Set up custom period"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(3, "div", 2)(4, "label", 3),
              e.ɵɵtext(5, "Custom period"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(6, "div", 4)(7, "div", 5)(
                8,
                "tui-input-number",
                6
              ),
              e.ɵɵlistener("ngModelChange", function (a) {
                return n.onHoursChange(a);
              }),
              e.ɵɵtext(9, " 0 "),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(10, "span", 7),
              e.ɵɵtext(11, "Hours"),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(12, "div", 8)(13, "tui-input-number", 9),
              e.ɵɵtext(14),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(15, "span", 7),
              e.ɵɵtext(16, "Minutes"),
              e.ɵɵelementEnd()()()(),
              e.ɵɵelementStart(17, "app-rubic-button", 10),
              e.ɵɵlistener("onClick", function () {
                return n.onSet();
              }),
              e.ɵɵtext(18, "Set"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(19, "app-rubic-button", 11),
              e.ɵɵlistener("onClick", function () {
                return n.onClose();
              }),
              e.ɵɵtext(20, "Cancel"),
              e.ɵɵelementEnd()()),
              2 & t &&
                (e.ɵɵproperty("formGroup", n.timeForm),
                e.ɵɵadvance(8),
                e.ɵɵproperty("tuiTextfieldLabelOutside", !0)(
                  "formControlName",
                  "hours"
                )("min", 0)("max", 87600),
                e.ɵɵadvance(5),
                e.ɵɵproperty("tuiTextfieldLabelOutside", !0)(
                  "formControlName",
                  "minutes"
                )("min", n.timeForm.value.hours ? 0 : 1)("max", 59),
                e.ɵɵadvance(1),
                e.ɵɵtextInterpolate1(" ", n.timeForm.value.hours ? 0 : 1, " "),
                e.ɵɵadvance(3),
                e.ɵɵproperty(
                  "disabled",
                  !n.timeForm.controls.hours.valid ||
                    !n.timeForm.controls.minutes.valid
                ));
          },
          dependencies: [
            ie.j,
            h.ɵNgNoValidate,
            h.NgControlStatus,
            h.NgControlStatusGroup,
            h.FormGroupDirective,
            h.FormControlName,
            ne,
            rt,
            Y.xT,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.container[_ngcontent-%COMP%]{position:relative;max-width:360px;padding:0}.container__header[_ngcontent-%COMP%]{margin-bottom:23px;font-weight:600;font-size:18px;line-height:120%;letter-spacing:.06em}.container__set-button[_ngcontent-%COMP%]{display:block;margin:16px 0 8px}.container[_ngcontent-%COMP%]   app-rubic-button[_ngcontent-%COMP%] {--tui-height-l: 45px}.inputs__title[_ngcontent-%COMP%]{display:block;margin-bottom:10px;color:var(--secondary-text)}.inputs__flex[_ngcontent-%COMP%]{display:flex;grid-gap:16px}.input[_ngcontent-%COMP%]{position:relative;width:100%;height:40px}.input__title[_ngcontent-%COMP%]{position:absolute;top:50%;right:16px;color:var(--secondary-text);letter-spacing:.06em;transform:translateY(-50%)}.input[_ngcontent-%COMP%]  tui-primitive-textfield{--tui-height-l: 40px}.input[_ngcontent-%COMP%]  tui-primitive-textfield input{padding:0 63px 0 16px!important}.input_minutes[_ngcontent-%COMP%]  tui-primitive-textfield input{padding:0 76px 0 16px!important}",
          ],
          changeDetection: 0,
        }));
      class Ie {
        constructor(t, n, i) {
          (this.dialogService = t),
            (this.windowWidthService = n),
            (this.injector = i),
            (this._expirationTime$ = new w.X(10080)),
            (this.expirationTime$ = this._expirationTime$.asObservable());
        }
        get expirationTime() {
          return this._expirationTime$.getValue();
        }
        updateExpirationTime(t) {
          this._expirationTime$.next(t);
        }
        openExpirationCustomModal() {
          return this.dialogService.open(new z.Al(Yn, this.injector), {
            size:
              this.windowWidthService.windowSize <= xr.G.TABLET ? "page" : "s",
          });
        }
      }
      (Ie.ɵfac = function (t) {
        return new (t || Ie)(
          e.ɵɵinject(Ye.RO),
          e.ɵɵinject(Nr.R),
          e.ɵɵinject(e.Injector)
        );
      }),
        (Ie.ɵprov = e.ɵɵdefineInjectable({ token: Ie, factory: Ie.ɵfac }));
      class ni extends V.q {
        constructor() {
          super("You rejected the signing."),
            Object.setPrototypeOf(this, ni.prototype);
        }
      }
      class zt {
        constructor(t) {
          this.httpService = t;
        }
        createTrade(t, n, i, a) {
          const { fromAsset: s, toToken: c, fromAmount: p } = n,
            _ = {
              hash: t,
              network: It.d[s.blockchain],
              from_token: s.address,
              to_token: c.address,
              from_amount: o.Web3Pure.toWei(p, s.decimals),
              to_amount: o.Web3Pure.toWei(i, c.decimals),
              user: a,
              provider: "oneinch",
            };
          this.httpService.post("limit_orders/limit_order", _).subscribe();
        }
      }
      (zt.ɵfac = function (t) {
        return new (t || zt)(e.ɵɵinject($r.O));
      }),
        (zt.ɵprov = e.ɵɵdefineInjectable({
          token: zt,
          factory: zt.ɵfac,
          providedIn: "root",
        }));
      class bt {
        constructor(t, n, i, a, s, c, p, d, _, f, x, P) {
          (this.sdkService = t),
            (this.swapFormService = n),
            (this.swapTypeService = i),
            (this.swapFormQueryService = a),
            (this.authService = s),
            (this.errorsService = c),
            (this.notificationsService = p),
            (this.orderExpirationService = d),
            (this.orderRateService = _),
            (this.successTxModalService = f),
            (this.limitOrdersApiService = x),
            (this.gasService = P),
            (this._tradeStatus$ = new w.X(u.DISABLED)),
            (this.tradeStatus$ = this._tradeStatus$.pipe((0, dt.b)(200))),
            (this._displayApproveButton$ = new w.X(!1)),
            (this.displayApproveButton$ =
              this._displayApproveButton$.asObservable()),
            (this.prevFromTokenAmount = null),
            (this.needApprove = !1),
            (this._calculateTrade$ = new _e.x()),
            (this.calculating = !1),
            this.subscribeOnCalculation(),
            this.subscribeOnFormChanges(),
            this.subscribeOnSwapTypeChanges();
        }
        set tradeStatus(t) {
          this._tradeStatus$.next(t);
        }
        get isFormFilled() {
          const {
              fromAsset: t,
              fromAmount: n,
              toToken: i,
            } = this.swapFormService.inputValue,
            { toAmount: a } = this.swapFormService.outputValue;
          return t && n?.gt(0) && i && a?.gt(0);
        }
        get inputValue() {
          const t = this.swapFormService.inputValue;
          if (
            t.fromAssetType &&
            !o.BlockchainsInfo.isBlockchainName(t.fromAssetType)
          )
            throw new V.q("Cannot use cross chain");
          return {
            ...t,
            fromBlockchain: t.fromAssetType,
            fromToken: t.fromAsset,
          };
        }
        subscribeOnCalculation() {
          this._calculateTrade$
            .pipe(
              (0, dt.b)(200),
              (0, N.w)((t) => {
                if (t.stop) return (0, L.of)(null);
                const {
                  fromBlockchain: n,
                  fromToken: i,
                  fromAmount: a,
                } = this.inputValue;
                return a?.isFinite() &&
                  i &&
                  Boolean(this.authService.userAddress) &&
                  this.authService.userChainType ===
                    o.BlockchainsInfo.getChainType(n)
                  ? ((this.calculating = !0),
                    (this.tradeStatus = this.isFormFilled
                      ? u.LOADING
                      : u.DISABLED),
                    (0, je.D)(
                      o.TokenAmount.createToken({ ...i, tokenAmount: a })
                    ).pipe(
                      (0, J.zd)(
                        (c) =>
                          !this.prevFromTokenAmount ||
                          !(0, J.tb)(this.prevFromTokenAmount, c) ||
                          !this.prevFromTokenAmount.tokenAmount.eq(a),
                        (c) =>
                          (0, je.D)(
                            this.sdkService.limitOrderManager.needApprove(c, a)
                          ).pipe(
                            (0, v.U)((p) => {
                              (this.prevFromTokenAmount = c),
                                (this.needApprove = p);
                            })
                          ),
                        () => (0, L.of)(null)
                      ),
                      (0, ye.b)(() => {
                        (this.calculating = !1),
                          this.isFormFilled &&
                            (this.tradeStatus = this.needApprove
                              ? u.READY_TO_APPROVE
                              : u.READY_TO_SWAP),
                          this._displayApproveButton$.next(this.needApprove);
                      })
                    ))
                  : (0, L.of)(null);
              })
            )
            .subscribe();
        }
        subscribeOnFormChanges() {
          this.swapFormService.inputValueDistinct$.subscribe(() => {
            this.updateStatus(), setTimeout(() => this.updateBlockchains());
          }),
            this.swapFormService.outputValueDistinct$.subscribe(() => {
              this.tradeStatus = this.isFormFilled
                ? this.calculating
                  ? u.LOADING
                  : this.needApprove
                  ? u.READY_TO_APPROVE
                  : u.READY_TO_SWAP
                : u.DISABLED;
            });
        }
        subscribeOnSwapTypeChanges() {
          this.swapTypeService.swapMode$.pipe((0, le.x)()).subscribe(() => {
            this.updateBlockchains();
          });
        }
        updateStatus() {
          var t = this;
          return (0, T.Z)(function* () {
            t.swapTypeService.getSwapProviderType() === b.V.LIMIT_ORDER &&
              t._calculateTrade$.next({});
          })();
        }
        updateBlockchains() {
          if (
            this.swapTypeService.getSwapProviderType() !== b.V.LIMIT_ORDER ||
            this.swapFormQueryService.initialLoading
          )
            return;
          let {
            fromToken: t,
            toToken: n,
            fromBlockchain: i,
            toBlockchain: a,
          } = this.inputValue;
          o.limitOrderSupportedBlockchains.some((c) => c === i)
            ? o.EvmWeb3Pure.isNativeAddress(t?.address) && (t = null)
            : ((i = o.BLOCKCHAIN_NAME.ETHEREUM), (t = null)),
            o.limitOrderSupportedBlockchains.some((c) => c === a)
              ? o.EvmWeb3Pure.isNativeAddress(n?.address) && (n = null)
              : ((a = o.BLOCKCHAIN_NAME.ETHEREUM), (n = null));
          const s = {
            fromAssetType: i,
            toBlockchain: a,
            fromAsset: t,
            toToken: n,
          };
          i !== a
            ? n && !t
              ? this.swapFormService.inputControl.patchValue({
                  ...s,
                  fromAssetType: a,
                })
              : (this.swapFormService.inputControl.patchValue({
                  ...s,
                  toBlockchain: i,
                  fromAmount: null,
                  toToken: null,
                }),
                this.swapFormService.outputControl.patchValue({
                  toAmount: null,
                }))
            : this.swapFormService.inputControl.patchValue(s);
        }
        approve() {
          var t = this;
          return (0, T.Z)(function* () {
            const { fromAsset: n, fromAmount: i } =
              t.swapFormService.inputValue;
            let a;
            t.tradeStatus = u.APPROVE_IN_PROGRESS;
            try {
              const s = n,
                c = Gr.u[s.blockchain]
                  ? o.Web3Pure.toWei(
                      yield t.gasService.getGasPriceInEthUnits(s.blockchain)
                    )
                  : null,
                p = {
                  onTransactionHash: () => {
                    a = t.notificationsService.showApproveInProgress();
                  },
                  ...(c && { gasPrice: c }),
                };
              yield t.sdkService.limitOrderManager.approve(s, i, p),
                t.notificationsService.showApproveSuccessful(),
                (t.tradeStatus = u.READY_TO_SWAP);
            } catch (s) {
              const c = mt.E.parseError(s);
              t.errorsService.catch(c), (t.tradeStatus = u.READY_TO_APPROVE);
            } finally {
              a?.unsubscribe();
            }
          })();
        }
        onCreateOrder() {
          var t = this;
          return (0, T.Z)(function* () {
            const n = t.swapFormService.inputValue,
              { fromAsset: i, fromAmount: a, toToken: s } = n,
              c = i,
              { toAmount: p } = t.swapFormService.outputValue;
            t.tradeStatus = u.SWAP_IN_PROGRESS;
            try {
              const d = t.orderExpirationService.expirationTime,
                _ = yield t.sdkService.limitOrderManager.createOrder(
                  c,
                  s,
                  a,
                  p,
                  { deadline: d }
                );
              t.limitOrdersApiService.createTrade(
                _,
                n,
                p,
                t.authService.userAddress
              ),
                t.successTxModalService.openLimitOrderModal();
            } catch (d) {
              let _ = mt.E.parseError(d);
              _ instanceof Jr.v && (_ = new ni()), t.errorsService.catch(_);
            }
            t.tradeStatus = u.READY_TO_SWAP;
          })();
        }
      }
      (bt.ɵfac = function (t) {
        return new (t || bt)(
          e.ɵɵinject(it.w),
          e.ɵɵinject(A.q),
          e.ɵɵinject(ce.H),
          e.ɵɵinject(ki.B),
          e.ɵɵinject(j.e),
          e.ɵɵinject(cn.r),
          e.ɵɵinject(rn.T),
          e.ɵɵinject(Ie),
          e.ɵɵinject(Ae),
          e.ɵɵinject(Ii.c),
          e.ɵɵinject(zt),
          e.ɵɵinject(vr.Q)
        );
      }),
        (bt.ɵprov = e.ɵɵdefineInjectable({ token: bt, factory: bt.ɵfac }));
      var xt = l(62540);
      function fp(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1, "Market rate"),
          e.ɵɵelementEnd());
      }
      function Cp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1, " Your rate is "),
            e.ɵɵelementStart(2, "span"),
            e.ɵɵtext(3),
            e.ɵɵelementEnd(),
            e.ɵɵtext(4, " than market: "),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵclassMap(
              "percent__value percent__value_" + n.percentInfo.className
            ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate2(
              "",
              n.formattedPercentDiff,
              "% ",
              n.percentInfo.percent > 0 ? "higher" : "lower",
              ""
            );
        }
      }
      function vp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "withRound"),
            e.ɵɵpipe(3, "bigNumberFormat"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2).ngLet,
            i = e.ɵɵnextContext().ngLet,
            a = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate3(
              "1 ",
              i,
              " = ",
              e.ɵɵpipeBind2(
                2,
                3,
                e.ɵɵpipeBind1(3, 6, a.rate),
                "toClosestValue"
              ),
              " ",
              n,
              ""
            );
        }
      }
      function bp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "withRound"),
            e.ɵɵpipe(3, "bigNumberFormat"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2).ngLet,
            i = e.ɵɵnextContext().ngLet,
            a = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate3(
              "",
              e.ɵɵpipeBind2(
                2,
                3,
                e.ɵɵpipeBind1(3, 6, a.rate),
                "toClosestValue"
              ),
              " ",
              i,
              " = 1 ",
              n,
              ""
            );
        }
      }
      function xp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, vp, 4, 8, "span", 6),
            e.ɵɵtemplate(2, bp, 4, 8, "span", 6),
            e.ɵɵelement(3, "div", 11),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(4);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "from-to" === n.rateDirection),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", "to-from" === n.rateDirection);
        }
      }
      function yp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, xp, 4, 2, "ng-container", 6),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext().ngLet,
            a = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", i && n && a.rate.gt(0));
        }
      }
      function Sp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, yp, 2, 1, "ng-container", 10),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.toTokenName$));
        }
      }
      function Tp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 9),
            e.ɵɵtemplate(1, Sp, 3, 3, "ng-container", 10),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.fromTokenName$));
        }
      }
      function Op(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div", 12),
          e.ɵɵtext(1, "Rate is unknown"),
          e.ɵɵelementEnd());
      }
      class Wn {
        constructor(t, n, i, a) {
          (this.cdr = t),
            (this.orderRateService = n),
            (this.swapFormService = i),
            (this.destroy$ = a),
            (this.rate = new M.Z(0)),
            (this.rateDirection = "from-to"),
            (this.fromTokenName$ = this.swapFormService.fromToken$.pipe(
              (0, v.U)((s) => s?.symbol || "")
            )),
            (this.toTokenName$ = this.swapFormService.toToken$.pipe(
              (0, v.U)((s) => s?.symbol || "")
            ));
        }
        get formattedPercentDiff() {
          const t = Math.abs(this.percentInfo.percent).toString();
          return this.percentInfo.percent >= 100 ? t.slice(0, 3) : t;
        }
        ngOnInit() {
          this.orderRateService.rate$
            .pipe((0, O.R)(this.destroy$))
            .subscribe(({ value: t, percentDiff: n }) => {
              t?.isFinite()
                ? t.eq(this.rate) ||
                  ((this.isRateUknown = !1), this.updateRateFormValue())
                : (this.isRateUknown = !0),
                this.updateRateLevelData(n),
                this.cdr.markForCheck();
            });
        }
        updateRateLevelData(t) {
          let n;
          if (this.isRateUknown) n = xt.d[xt.L.WARNING];
          else {
            let i;
            (i =
              t <= -10
                ? xt.L.ERROR
                : t <= -5
                ? xt.L.WARNING
                : t <= 0
                ? xt.L.NOTHING
                : xt.L.FINE),
              (n = xt.d[i]);
          }
          this.percentInfo = {
            percent: t,
            iconSrc: n.imgSrc,
            className: n.class,
          };
        }
        toggleRateDirection() {
          (this.rateDirection =
            "from-to" === this.rateDirection ? "to-from" : "from-to"),
            this.rate.isFinite() &&
              this.rate.gt(0) &&
              this.updateRateFormValue();
        }
        updateRateFormValue() {
          const t = this.orderRateService.marketRate;
          this.rate =
            "from-to" === this.rateDirection ? t : new M.Z(1).div(t).dp(6);
        }
      }
      function ri(r, t) {
        return 1 === r ? `1 ${t}` : `${r} ${t}s`;
      }
      (Wn.ɵfac = function (t) {
        return new (t || Wn)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(Ae),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (Wn.ɵcmp = e.ɵɵdefineComponent({
          type: Wn,
          selectors: [["app-order-rate"]],
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 10,
          vars: 7,
          consts: [
            [3, "click"],
            [1, "rate__header", "header"],
            [1, "header__rate", "percent"],
            [1, "percent__icon"],
            ["alt", "", 3, "src"],
            [1, "percent__title"],
            [4, "ngIf"],
            ["class", "rate__value-container", 4, "ngIf"],
            ["class", "rate__unknown-text", 4, "ngIf"],
            [1, "rate__value-container"],
            [4, "ngLet"],
            [
              "inlineSVG",
              "assets/images/swaps/icons/rate-direction-button.svg",
              1,
              "rate__direction-button",
            ],
            [1, "rate__unknown-text"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0),
              e.ɵɵlistener("click", function () {
                return n.toggleRateDirection();
              }),
              e.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3),
              e.ɵɵelement(4, "img", 4),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(5, "div", 5),
              e.ɵɵtemplate(6, fp, 2, 0, "span", 6),
              e.ɵɵtemplate(7, Cp, 5, 4, "span", 6),
              e.ɵɵelementEnd()()(),
              e.ɵɵtemplate(8, Tp, 3, 3, "div", 7),
              e.ɵɵtemplate(9, Op, 2, 0, "div", 8),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵclassMap("rate rate_" + n.percentInfo.className),
                e.ɵɵadvance(4),
                e.ɵɵproperty("src", n.percentInfo.iconSrc, e.ɵɵsanitizeUrl),
                e.ɵɵadvance(2),
                e.ɵɵproperty("ngIf", 0 === n.percentInfo.percent),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.percentInfo.percent),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", !n.isRateUknown),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.isRateUknown));
          },
          dependencies: [m.O5, B.e, G.d$, m.Ov, Ce.N, Te.f],
          styles: [
            ".rate[_ngcontent-%COMP%]{padding:16px 16px 15px;background:var(--form-background);border:1px solid var(--transparent-line);border-radius:19px;cursor:pointer}.rate_fine[_ngcontent-%COMP%]{border-color:var(--primary-color)}.rate_warning[_ngcontent-%COMP%]{border-color:var(--warning-color)}.rate_error[_ngcontent-%COMP%]{border-color:var(--error-color)}.rate__header[_ngcontent-%COMP%]{margin-bottom:7px}.rate__value-container[_ngcontent-%COMP%]{display:flex;grid-gap:10px;align-items:center;justify-content:start;width:100%;height:28px;color:var(--primary-text);font-size:19px;white-space:nowrap}.rate__direction-button[_ngcontent-%COMP%]{display:flex;align-items:center;width:15px;cursor:pointer}.rate__direction-button[_ngcontent-%COMP%]     svg path{fill:var(--primary-text)}.rate__unknown-text[_ngcontent-%COMP%]{color:var(--warning-color);font-size:23px;line-height:28px;letter-spacing:.1em}.header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:16px;color:var(--secondary-text);line-height:120%;letter-spacing:.03em}.percent[_ngcontent-%COMP%]{display:flex;align-items:center}.percent__icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:16px;margin-right:8px}.percent__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:13px}.percent__value_fine[_ngcontent-%COMP%]{color:var(--primary-color)}.percent__value_warning[_ngcontent-%COMP%]{color:var(--warning-color)}.percent__value_error[_ngcontent-%COMP%]{color:var(--error-color)}.setter[_ngcontent-%COMP%]{display:flex;grid-gap:8px;align-items:center}.setter[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{cursor:pointer}.setter__icon[_ngcontent-%COMP%]{width:20px;height:20px}",
          ],
          changeDetection: 0,
        }));
      var Un = l(15411),
        Gn = l(72558);
      const Ap = [
          { label: "1 minute", minutes: 1 },
          { label: "10 minutes", minutes: 10 },
          { label: "1 hour", minutes: 60 },
          { label: "1 day", minutes: 1440 },
          { label: "7 days", minutes: 10080 },
        ],
        eo = function (r) {
          return { container__option_highlighted: r };
        };
      function Ep(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 2),
            e.ɵɵlistener("click", function () {
              const s = e.ɵɵrestoreView(n).$implicit,
                c = e.ɵɵnextContext();
              return e.ɵɵresetView(c.onOptionsClick(s));
            }),
            e.ɵɵtext(1),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = t.$implicit,
            i = t.index,
            a = e.ɵɵnextContext();
          e.ɵɵproperty(
            "ngClass",
            e.ɵɵpureFunction1(2, eo, a.highlightedOption === i)
          ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" ", n.label, " ");
        }
      }
      class Kn {
        constructor(t) {
          (this.orderExpirationService = t),
            (this.onClose = new e.EventEmitter()),
            (this.options = Ap);
          const n = this.orderExpirationService.expirationTime,
            i = this.options.findIndex((a) => a.minutes === n);
          this.highlightedOption = -1 !== i ? i : this.options.length;
        }
        onOptionsClick(t) {
          this.orderExpirationService.updateExpirationTime(t.minutes),
            this.onClose.emit();
        }
        onCustomClick() {
          this.orderExpirationService.openExpirationCustomModal().subscribe();
        }
      }
      function Mp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 7),
            e.ɵɵtext(2),
            e.ɵɵelement(3, "img", 8),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "tuiHint",
              n.shortValue !== n.fullValue ? n.fullValue : null
            ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" ", n.shortValue, " "),
            e.ɵɵadvance(1),
            e.ɵɵclassProp("transaction-info__arrow_opened", i.settingsOpen);
        }
      }
      function Ip(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-expiration-optional", 9),
            e.ɵɵlistener("onClose", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onClose());
            }),
            e.ɵɵelementEnd();
        }
      }
      (Kn.ɵfac = function (t) {
        return new (t || Kn)(e.ɵɵdirectiveInject(Ie));
      }),
        (Kn.ɵcmp = e.ɵɵdefineComponent({
          type: Kn,
          selectors: [["app-expiration-optional"]],
          outputs: { onClose: "onClose" },
          decls: 4,
          vars: 4,
          consts: [
            [1, "container"],
            [
              "class",
              "container__option",
              3,
              "ngClass",
              "click",
              4,
              "ngFor",
              "ngForOf",
            ],
            [1, "container__option", 3, "ngClass", "click"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0),
              e.ɵɵtemplate(1, Ep, 2, 4, "div", 1),
              e.ɵɵelementStart(2, "div", 2),
              e.ɵɵlistener("click", function () {
                return n.onCustomClick();
              }),
              e.ɵɵtext(3, " Custom "),
              e.ɵɵelementEnd()()),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵproperty("ngForOf", n.options),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngClass",
                  e.ɵɵpureFunction1(
                    2,
                    eo,
                    n.highlightedOption === n.options.length
                  )
                ));
          },
          dependencies: [m.mk, m.sg],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.container[_ngcontent-%COMP%]{width:204px;margin:0;padding:8px 16px;background:var(--form-background)}.container__option[_ngcontent-%COMP%]{display:flex;align-items:center;height:36px;font-size:14px;line-height:120%;cursor:pointer}.container__option_highlighted[_ngcontent-%COMP%]{color:var(--primary-color)}.container__option[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid var(--transparent-line)}",
          ],
          changeDetection: 0,
        }));
      class Zn {
        constructor(t) {
          (this.orderExpirationService = t),
            (this.settingsOpen = !1),
            (this.expirationValue$ =
              this.orderExpirationService.expirationTime$.pipe(
                (0, v.U)((n) => this.getDateValues(n))
              ));
        }
        getDateValues(t) {
          const n = Math.floor(t / 60),
            i = Math.floor(n / 24),
            a = [];
          return (
            i &&
              a.push(
                (function wp(r) {
                  return ri(r, "day");
                })(i)
              ),
            n % 24 &&
              a.push(
                (function kp(r) {
                  return ri(r, "hour");
                })(n % 24)
              ),
            t % 60 &&
              a.push(
                (function Pp(r) {
                  return ri(r, "minute");
                })(t % 60)
              ),
            { shortValue: a[0], fullValue: a.join(" ") }
          );
        }
        onClose() {
          this.settingsOpen = !1;
        }
      }
      function Np(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "section", 1)(2, "div", 2)(3, "div", 3),
            e.ɵɵelement(4, "app-token-amount-input", 4)(5, "app-tokens-rate"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(6, "div", 5),
            e.ɵɵelement(7, "app-order-rate")(8, "app-expires-in"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(9, "div", 6)(10, "div", 7)(
              11,
              "app-swap-button-container",
              8
            ),
            e.ɵɵlistener("onApproveClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onApprove());
            })("onSwapClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onCreateOrder());
            }),
            e.ɵɵpipe(12, "async"),
            e.ɵɵelementEnd()()()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = t.ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(11),
            e.ɵɵproperty("needApprove", i.needApprove(n))(
              "withApproveButton",
              e.ɵɵpipeBind1(12, 4, i.displayApproveButton$)
            )("status", n)("error", null);
        }
      }
      (Zn.ɵfac = function (t) {
        return new (t || Zn)(e.ɵɵdirectiveInject(Ie));
      }),
        (Zn.ɵcmp = e.ɵɵdefineComponent({
          type: Zn,
          selectors: [["app-expires-in"]],
          decls: 10,
          vars: 5,
          consts: [
            [
              "tuiDropdownDirection",
              "bottom",
              1,
              "dropdown",
              3,
              "open",
              "content",
              "openChange",
            ],
            [1, "dropdown__container"],
            [1, "dropdown__header", "header"],
            [1, "header__title"],
            [
              "src",
              "assets/images/icons/exclamation-grey.svg",
              "alt",
              "info",
              "tuiHint",
              "Please note: When a limit order expires, no cancellation fee is charged. If a limit order is canceled manually, a gas fee is charged at the time of signing the transaction.",
              "tuiHintMode",
              "onDark",
            ],
            [4, "ngLet"],
            ["dropdown", ""],
            ["tuiHintMode", "onDark", 1, "dropdown__value", 3, "tuiHint"],
            [
              "src",
              "assets/images/icons/arrow-down.svg",
              "alt",
              "expand",
              1,
              "dropdown__arrow",
            ],
            [3, "onClose"],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵelementStart(0, "tui-hosted-dropdown", 0),
                e.ɵɵlistener("openChange", function (a) {
                  return (n.settingsOpen = a);
                }),
                e.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "span", 3),
                e.ɵɵtext(4, "Expires in"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(5, "img", 4),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(6, Mp, 4, 4, "ng-container", 5),
                e.ɵɵpipe(7, "async"),
                e.ɵɵelementEnd()(),
                e.ɵɵtemplate(
                  8,
                  Ip,
                  1,
                  0,
                  "ng-template",
                  null,
                  6,
                  e.ɵɵtemplateRefExtractor
                )),
              2 & t)
            ) {
              const i = e.ɵɵreference(9);
              e.ɵɵproperty("open", n.settingsOpen)("content", i),
                e.ɵɵadvance(6),
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(7, 3, n.expirationValue$));
            }
          },
          dependencies: [B.e, Un.o1, Gn.Sw, R.D, Kn, m.Ov],
          styles: [
            ".dropdown[_ngcontent-%COMP%]{position:relative;width:100%;cursor:pointer}.dropdown__container[_ngcontent-%COMP%]{padding:16px 16px 15px;background:var(--form-background);border:1px solid var(--transparent-line);border-radius:19px}.dropdown__header[_ngcontent-%COMP%]{margin-bottom:7px}.dropdown__value[_ngcontent-%COMP%]{display:flex;grid-gap:12px;align-items:center;width:-moz-fit-content;width:fit-content;height:28px;overflow:hidden;color:var(--primary-text);font-size:19px;line-height:120%;letter-spacing:.06em;white-space:nowrap}.dropdown__arrow[_ngcontent-%COMP%]{width:13px;transition:.2s ease-in-out}.dropdown__arrow_opened[_ngcontent-%COMP%]{transform:translateY(-50%) rotate(180deg)}.header[_ngcontent-%COMP%]{display:flex;align-items:center;color:var(--secondary-text);line-height:120%;letter-spacing:.03em}.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:6px;cursor:help}",
          ],
          changeDetection: 0,
        }));
      class Xn {
        constructor(t, n, i) {
          (this.limitOrderFormService = t),
            (this.orderRateService = n),
            (this.destroy$ = i),
            (this.tradeStatus$ = this.limitOrderFormService.tradeStatus$),
            (this.displayApproveButton$ =
              this.limitOrderFormService.displayApproveButton$);
        }
        needApprove(t) {
          return t === u.READY_TO_APPROVE;
        }
        onApprove() {
          var t = this;
          return (0, T.Z)(function* () {
            yield t.limitOrderFormService.approve();
          })();
        }
        onCreateOrder() {
          var t = this;
          return (0, T.Z)(function* () {
            yield t.limitOrderFormService.onCreateOrder();
          })();
        }
      }
      (Xn.ɵfac = function (t) {
        return new (t || Xn)(
          e.ɵɵdirectiveInject(bt),
          e.ɵɵdirectiveInject(Ae),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (Xn.ɵcmp = e.ɵɵdefineComponent({
          type: Xn,
          selectors: [["app-limit-order-bottom-form"]],
          inputs: { fromAmountUpdated$: "fromAmountUpdated$" },
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 2,
          vars: 3,
          consts: [
            [4, "ngLet"],
            [1, "bottom-form"],
            [1, "bottom-form__container"],
            [1, "bottom-form__estimate-container"],
            ["formType", "to"],
            [1, "bottom-form__settings"],
            [1, "bottom-form__footer"],
            [1, "bottom-form__button"],
            [
              "buttonText",
              "Place limit order",
              3,
              "needApprove",
              "withApproveButton",
              "status",
              "error",
              "onApproveClick",
              "onSwapClick",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Np, 13, 6, "ng-container", 0),
              e.ɵɵpipe(1, "async")),
              2 & t &&
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(1, 1, n.tradeStatus$));
          },
          dependencies: [_t, et, Mt, B.e, Wn, Zn, m.Ov],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.bottom-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}html.iframe-horizontal[_nghost-%COMP%]   .bottom-form[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-form[_ngcontent-%COMP%]{flex-direction:row}html.iframe-vertical[_nghost-%COMP%]   .bottom-form[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form[_ngcontent-%COMP%]{justify-content:space-between;height:212px}.bottom-form__container[_ngcontent-%COMP%]{z-index:9999;min-height:113px;margin:0 0 16px;padding:30px 24px 24px;background:var(--form-background);border:1px solid var(--transparent-line);border-top:0;border-radius:0 0 19px 19px}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]{position:relative;margin:0}html.iframe-horizontal[_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]{position:relative;flex-direction:row-reverse;align-items:center;width:363px;height:50px;min-height:unset;margin:0;padding:0 7px 0 16px;background:var(--primary-background);border-radius:10px}html.iframe-horizontal:not(.dark)[_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%], html.iframe-horizontal:not(.dark)   [_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]{background-color:var(--iframe-primary-background)}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]{flex-direction:column;justify-content:flex-start;padding:0;background-color:transparent}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]   app-select-asset-button-tokens[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__container[_ngcontent-%COMP%]   app-select-asset-button-tokens[_ngcontent-%COMP%]{margin-bottom:10px}@media (max-width: 651px){.bottom-form__container[_ngcontent-%COMP%]{height:auto;margin-bottom:8px;padding:30px 20px}}@media (max-width: 420px){.bottom-form__container[_ngcontent-%COMP%]{flex-direction:column}}.bottom-form__estimate-container[_ngcontent-%COMP%]{position:relative;min-height:65px}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__estimate-container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__estimate-container[_ngcontent-%COMP%]{flex-direction:column;grid-gap:6px}html.iframe-horizontal[_nghost-%COMP%]   .bottom-form__estimate-container[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-form__estimate-container[_ngcontent-%COMP%]{flex-direction:row-reverse;align-items:center;height:100%;min-height:auto}@media (max-width: 420px){.bottom-form__estimate-container[_ngcontent-%COMP%]{flex-direction:column}}.bottom-form__estimate-container[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%]{position:absolute;right:0;bottom:22px}@media (max-width: 420px){.bottom-form__estimate-container[_ngcontent-%COMP%]   app-tokens-rate[_ngcontent-%COMP%]{position:unset}}.bottom-form__settings[_ngcontent-%COMP%]{display:flex;grid-gap:16px}@media (max-width: 651px){.bottom-form__settings[_ngcontent-%COMP%]{flex-direction:column-reverse;grid-gap:8px;margin-bottom:16px}}.bottom-form__footer[_ngcontent-%COMP%]{margin-top:16px}html.iframe-horizontal[_nghost-%COMP%]   .bottom-form__footer[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-form__footer[_ngcontent-%COMP%]{margin-top:0;margin-left:12px}html.iframe-vertical[_nghost-%COMP%]   .bottom-form__footer[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .bottom-form__footer[_ngcontent-%COMP%]{margin-top:30px;padding:0}@media (max-width: 651px){.bottom-form__footer[_ngcontent-%COMP%]{margin-top:0}}html.iframe-horizontal[_nghost-%COMP%]   .bottom-form__button[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .bottom-form__button[_ngcontent-%COMP%]{width:180px}.bottom-form[_ngcontent-%COMP%]     .token-amount-input-container{padding:0}app-target-network-address[_ngcontent-%COMP%]{display:block;margin-top:10px}app-swap-button-container[_ngcontent-%COMP%]  .wrapper{border:1px solid var(--transparent-line)!important}app-order-rate[_ngcontent-%COMP%]{display:block;flex-shrink:0;width:343px}@media (max-width: 651px){app-order-rate[_ngcontent-%COMP%]{width:100%}}app-expires-in[_ngcontent-%COMP%]{width:100%}",
          ],
          changeDetection: 0,
        }));
      class Yt {
        constructor(t) {
          (this.elementRef = t),
            (this.amountChange = new e.EventEmitter()),
            (this.minAmount = 0.01),
            (this.maxAmount = 50),
            (this.decimals = 2),
            (this.amountRegex = /^([0-9]+\.?[0-9]*|[0-9]*\.?[0-9]+)?$/),
            (this.prevValue = ""),
            (this.prevCaretPosition = 0),
            (this.isFocused = !1);
        }
        onChange() {
          const t = this.elementRef.nativeElement.value || "";
          let n = t.replaceAll(",", ""),
            i = this.elementRef.nativeElement.selectionStart;
          t && "," === t[t.length - 1] && (n += "."),
            "." === n &&
              ("" === this.prevValue
                ? ((n = "0."), (i = 2))
                : ((n = ""), (i = 0)));
          const a = Number(n);
          if (this.amountRegex.test(n)) {
            a >= this.maxAmount && (n = String(this.maxAmount));
            const s = n.split(".");
            s.length > 1 &&
              s.at(-1).length > this.decimals &&
              (n = n.slice(0, s.length + this.decimals)),
              (i =
                n === this.prevValue
                  ? this.prevCaretPosition
                  : this.getNewCaretPosition(n, i));
          } else (n = this.prevValue), (i = this.prevCaretPosition);
          (this.elementRef.nativeElement.value = n),
            this.isFocused &&
              this.elementRef.nativeElement.setSelectionRange(i, i),
            this.amountChange.emit(Number(n)),
            (this.prevValue = n),
            (this.prevCaretPosition = i);
        }
        getNewCaretPosition(t, n) {
          const a =
            this.prevValue
              .substring(0, n - (this.prevValue.length < t.length ? 1 : 0))
              .split(",").length - 1;
          let c = n + (t.substring(0, n).split(",").length - 1 - a);
          return c && t.length && "," === t[c - 1] && c--, c;
        }
      }
      (Yt.ɵfac = function (t) {
        return new (t || Yt)(e.ɵɵdirectiveInject(e.ElementRef));
      }),
        (Yt.ɵdir = e.ɵɵdefineDirective({
          type: Yt,
          selectors: [["", "appCommaToPeriod", ""]],
          hostBindings: function (t, n) {
            1 & t &&
              e.ɵɵlistener("ngModelChange", function () {
                return n.onChange();
              });
          },
          inputs: {
            minAmount: "minAmount",
            maxAmount: "maxAmount",
            decimals: "decimals",
          },
          outputs: { amountChange: "amountChange" },
        }));
      var Pr = l(95595);
      const Rp = ["slippageInput"],
        Bp = function (r) {
          return { "settings__button-auto_active": r };
        },
        Fp = function () {
          return { standalone: !0 };
        };
      class Qn {
        constructor(t) {
          (this.settingsService = t),
            (this.defaultSlippageTolerance =
              this.settingsService.defaultItSettings.slippageTolerance);
        }
        ngOnInit() {
          this.setForm();
        }
        setForm() {
          const t = this.settingsService.instantTradeValue;
          (this.instantTradeForm = new h.FormGroup({
            autoSlippageTolerance: new h.FormControl(t.autoSlippageTolerance),
            slippageTolerance: new h.FormControl(t.slippageTolerance),
            deadline: new h.FormControl(t.deadline),
            disableMultihops: new h.FormControl(t.disableMultihops),
            autoRefresh: new h.FormControl(t.autoRefresh),
            showReceiverAddress: new h.FormControl(t.showReceiverAddress),
          })),
            (this.slippageTolerance = t.slippageTolerance),
            this.setFormChanges();
        }
        setFormChanges() {
          this.instantTradeForm.valueChanges.subscribe((t) => {
            this.settingsService.instantTrade.patchValue({ ...t });
          }),
            this.settingsService.instantTradeValueChanges.subscribe((t) => {
              this.instantTradeForm.patchValue({ ...t }, { emitEvent: !1 }),
                (this.slippageTolerance = t.slippageTolerance);
            });
        }
        toggleAutoSlippageTolerance() {
          this.instantTradeForm.value.autoSlippageTolerance
            ? this.instantTradeForm.patchValue({ autoSlippageTolerance: !1 })
            : ((this.slippageTolerance = this.defaultSlippageTolerance),
              this.instantTradeForm.patchValue({
                autoSlippageTolerance: !0,
                slippageTolerance: this.slippageTolerance,
              }));
        }
        onSlippageToleranceChange(t) {
          const n = Number(t);
          (this.slippageTolerance = n || this.defaultSlippageTolerance),
            this.instantTradeForm.patchValue({
              autoSlippageTolerance: !1,
              slippageTolerance: this.slippageTolerance,
            });
        }
      }
      (Qn.ɵfac = function (t) {
        return new (t || Qn)(e.ɵɵdirectiveInject(q));
      }),
        (Qn.ɵcmp = e.ɵɵdefineComponent({
          type: Qn,
          selectors: [["app-settings-it"]],
          viewQuery: function (t, n) {
            if ((1 & t && e.ɵɵviewQuery(Rp, 5), 2 & t)) {
              let i;
              e.ɵɵqueryRefresh((i = e.ɵɵloadQuery())) &&
                (n.slippageInput = i.first);
            }
          },
          decls: 53,
          vars: 52,
          consts: [
            [1, "settings"],
            [1, "settings__form", 3, "formGroup"],
            [1, "settings__form-row", "settings__form-row_large-input"],
            [
              "tuiHintMode",
              "onDark",
              1,
              "settings__hint",
              3,
              "inlineSVG",
              "tuiHint",
            ],
            [1, "settings__form-row", "settings__form-row_united"],
            [1, "settings__button-auto", 3, "ngClass", "click"],
            [1, "settings__button-auto", 3, "click"],
            [1, "slippage-container"],
            [
              "appCommaToPeriod",
              "",
              3,
              "ngModel",
              "ngModelOptions",
              "tuiTextfieldLabelOutside",
              "tuiTextfieldSize",
              "minAmount",
              "amountChange",
            ],
            [1, "settings__form-row", "settings__form-row_small-input"],
            [1, "settings__form-row"],
            [
              "id",
              "deadline",
              "formControlName",
              "deadline",
              "decimal",
              "never",
              3,
              "tuiTextfieldLabelOutside",
              "max",
              "min",
              "tuiTextfieldSize",
            ],
            [
              "id",
              "disableMultihops",
              "formControlName",
              "disableMultihops",
              1,
              "settings__toggle",
            ],
            [
              "id",
              "autoRefresh",
              "formControlName",
              "autoRefresh",
              1,
              "settings__toggle",
            ],
            [
              "id",
              "showReceiverAddress",
              "formControlName",
              "showReceiverAddress",
              1,
              "settings__toggle",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "form", 1)(2, "div", 2)(
                3,
                "label"
              ),
              e.ɵɵtext(4),
              e.ɵɵpipe(5, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelement(6, "div", 3),
              e.ɵɵpipe(7, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(8, "div", 4)(9, "div", 5),
              e.ɵɵlistener("click", function () {
                return n.toggleAutoSlippageTolerance();
              }),
              e.ɵɵtext(10, " Auto "),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(11, "button", 6),
              e.ɵɵlistener("click", function () {
                return n.onSlippageToleranceChange(0.1);
              }),
              e.ɵɵtext(12, "0.1"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(13, "button", 6),
              e.ɵɵlistener("click", function () {
                return n.onSlippageToleranceChange(0.5);
              }),
              e.ɵɵtext(14, "0.5"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(15, "div", 7)(16, "input", 8),
              e.ɵɵlistener("amountChange", function (a) {
                return n.onSlippageToleranceChange(a);
              }),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(17, "div"),
              e.ɵɵtext(18, "%"),
              e.ɵɵelementEnd(),
              e.ɵɵelement(19, "span"),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(20, "div", 9)(21, "div", 10)(22, "label"),
              e.ɵɵtext(23),
              e.ɵɵpipe(24, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelement(25, "div", 3),
              e.ɵɵpipe(26, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(27, "tui-input-number", 11),
              e.ɵɵtext(28, "20 "),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(29, "span"),
              e.ɵɵtext(30),
              e.ɵɵpipe(31, "translate"),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(32, "div", 10)(33, "label"),
              e.ɵɵtext(34),
              e.ɵɵpipe(35, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelement(36, "div", 3),
              e.ɵɵpipe(37, "translate"),
              e.ɵɵelement(38, "tui-toggle", 12),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(39, "div", 10)(40, "label"),
              e.ɵɵtext(41),
              e.ɵɵpipe(42, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelement(43, "div", 3),
              e.ɵɵpipe(44, "translate"),
              e.ɵɵelement(45, "tui-toggle", 13),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(46, "div", 10)(47, "label"),
              e.ɵɵtext(48),
              e.ɵɵpipe(49, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelement(50, "div", 3),
              e.ɵɵpipe(51, "translate"),
              e.ɵɵelement(52, "tui-toggle", 14),
              e.ɵɵelementEnd()()()),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵproperty("formGroup", n.instantTradeForm),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate(
                  e.ɵɵpipeBind1(5, 27, "Slippage tolerance")
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
                  "tuiHint",
                  e.ɵɵpipeBind1(7, 29, "slippage")
                ),
                e.ɵɵadvance(3),
                e.ɵɵproperty(
                  "ngClass",
                  e.ɵɵpureFunction1(
                    49,
                    Bp,
                    n.instantTradeForm.value.autoSlippageTolerance
                  )
                ),
                e.ɵɵadvance(7),
                e.ɵɵproperty("ngModel", n.slippageTolerance)(
                  "ngModelOptions",
                  e.ɵɵpureFunction0(51, Fp)
                )("tuiTextfieldLabelOutside", !0)("tuiTextfieldSize", "s")(
                  "minAmount",
                  0.01
                ),
                e.ɵɵadvance(7),
                e.ɵɵtextInterpolate(
                  e.ɵɵpipeBind1(24, 31, "Transaction deadline")
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
                  "tuiHint",
                  e.ɵɵpipeBind1(26, 33, "deadline")
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("tuiTextfieldLabelOutside", !0)("max", 240)(
                  "min",
                  1
                )("tuiTextfieldSize", "s"),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind1(31, 35, "minutes"),
                  ""
                ),
                e.ɵɵadvance(4),
                e.ɵɵtextInterpolate(
                  e.ɵɵpipeBind1(35, 37, "Disable multihops")
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
                  "tuiHint",
                  e.ɵɵpipeBind1(37, 39, "multihops")
                ),
                e.ɵɵadvance(5),
                e.ɵɵtextInterpolate(
                  e.ɵɵpipeBind1(
                    42,
                    41,
                    "Auto-refresh"
                  )
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
                  "tuiHint",
                  e.ɵɵpipeBind1(44, 43, "autoRefresh")
                ),
                e.ɵɵadvance(5),
                e.ɵɵtextInterpolate(
                  e.ɵɵpipeBind1(
                    49,
                    45,
                    "Show Receiver Address"
                  )
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
                  "tuiHint",
                  e.ɵɵpipeBind1(
                    51,
                    47,
                    "showReceiverAddress"
                  )
                ));
          },
          dependencies: [
            m.mk,
            Yt,
            h.ɵNgNoValidate,
            h.DefaultValueAccessor,
            h.NgControlStatus,
            h.NgControlStatusGroup,
            h.FormGroupDirective,
            h.FormControlName,
            Pr.ph,
            ne,
            rt,
            Y.xT,
            Y.sz,
            G.d$,
            R.D,
            h.NgModel,
            E.X$,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{color:var(--primary-text)}.slippage-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding-right:22px;padding-left:12px}.slippage-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:35px;text-align:right;background:transparent;border:none;border-radius:100px}.slippage-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] ~ span[_ngcontent-%COMP%]{position:absolute;left:0;z-index:-1;width:100%;height:100%;border:1px solid var(--tui-base-03);border-radius:100px;transition:var(--tui-duration) ease-in-out}.slippage-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ span[_ngcontent-%COMP%]{border:2px solid var(--tui-primary)}.settings[_ngcontent-%COMP%]{min-width:265px;max-width:320px;padding:20px}.settings__form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.settings__hint[_ngcontent-%COMP%]{height:15px;margin-right:auto;margin-left:6px;cursor:pointer}.settings__hint[_ngcontent-%COMP%]     svg path{fill:var(--secondary-text)}.settings__button-auto[_ngcontent-%COMP%]{box-sizing:border-box;height:35px;margin-right:10px;padding:8px 15px;color:var(--primary-text);background:none;border:1px solid transparent;border-radius:20px;cursor:pointer}.settings__button-auto_active[_ngcontent-%COMP%]{color:var(--primary-text-invert);background:var(--primary-color)}.settings__toggle[_ngcontent-%COMP%]{margin-left:15px}@media (max-width: 420px){.settings__toggle[_ngcontent-%COMP%]{transform:scale(1.25)}}.settings__form-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;width:100%;margin-bottom:12px}.settings__form-row[_ngcontent-%COMP%]:last-child{margin-bottom:0}.settings__form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:300;font-size:16px}.settings__form-row_united[_ngcontent-%COMP%]{flex-wrap:nowrap}.settings__form-row_united[_ngcontent-%COMP%]   tui-input-number[_ngcontent-%COMP%]{width:100%}.settings__form-row_small-input[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield]{width:80px}.settings[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield]{color:var(--primary-text);border-radius:100px;box-shadow:none}.settings[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield] input{padding-right:22px!important}.settings[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield] input, .settings[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield] input::placeholder{text-align:right}.settings[_ngcontent-%COMP%]     input+.content .placeholder{text-align:right}.settings[_ngcontent-%COMP%]     .wrapper{display:flex}.settings[_ngcontent-%COMP%]     .value-decoration{margin-left:auto}#deadline[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-left:10px}",
          ],
          changeDetection: 0,
        }));
      const Dp = function (r) {
          return { "settings__button-auto_active": r };
        },
        Lp = function () {
          return { standalone: !0 };
        };
      class Jn {
        constructor(t, n, i) {
          (this.settingsService = t),
            (this.targetNetworkAddressService = n),
            (this.destroy$ = i),
            (this.minimumSlippageTolerance = 3),
            (this.defaultSlippageTolerance =
              this.settingsService.defaultCcrSettings.slippageTolerance);
        }
        ngOnInit() {
          this.setForm();
        }
        setForm() {
          const t = this.settingsService.crossChainRoutingValue;
          (this.crossChainRoutingForm = new h.FormGroup({
            autoSlippageTolerance: new h.FormControl(t.autoSlippageTolerance),
            slippageTolerance: new h.FormControl(t.slippageTolerance),
            showReceiverAddress: new h.FormControl(t.showReceiverAddress),
          })),
            (this.slippageTolerance = t.slippageTolerance),
            this.setFormChanges(),
            this.targetNetworkAddressService.isAddressRequired$
              .pipe((0, O.R)(this.destroy$))
              .subscribe((n) => {
                n
                  ? this.crossChainRoutingForm.controls.showReceiverAddress.disable(
                      { emitEvent: !1 }
                    )
                  : this.crossChainRoutingForm.controls.showReceiverAddress.enable(
                      { emitEvent: !1 }
                    );
              });
        }
        setFormChanges() {
          this.crossChainRoutingForm.valueChanges
            .pipe((0, O.R)(this.destroy$))
            .subscribe((t) => {
              this.settingsService.crossChainRouting.patchValue({ ...t });
            }),
            this.settingsService.crossChainRoutingValueChanges
              .pipe((0, O.R)(this.destroy$))
              .subscribe((t) => {
                this.crossChainRoutingForm.patchValue(
                  { ...t },
                  { emitEvent: !1 }
                ),
                  (this.slippageTolerance = t.slippageTolerance);
              });
        }
        toggleAutoSlippageTolerance() {
          this.crossChainRoutingForm.value.autoSlippageTolerance
            ? this.crossChainRoutingForm.patchValue({
                autoSlippageTolerance: !1,
              })
            : ((this.slippageTolerance = this.defaultSlippageTolerance),
              this.crossChainRoutingForm.patchValue({
                autoSlippageTolerance: !0,
                slippageTolerance: this.slippageTolerance,
              }));
        }
        onSlippageToleranceChange(t) {
          (this.slippageTolerance =
            t < this.minimumSlippageTolerance
              ? this.minimumSlippageTolerance
              : t),
            this.crossChainRoutingForm.patchValue({
              autoSlippageTolerance: !1,
              slippageTolerance: this.slippageTolerance,
            });
        }
      }
      (Jn.ɵfac = function (t) {
        return new (t || Jn)(
          e.ɵɵdirectiveInject(q),
          e.ɵɵdirectiveInject(oe),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (Jn.ɵcmp = e.ɵɵdefineComponent({
          type: Jn,
          selectors: [["app-settings-ccr"]],
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 27,
          vars: 24,
          consts: [
            [1, "settings"],
            [1, "settings__form", 3, "formGroup"],
            [1, "settings__form-row", "settings__form-row_large-input"],
            [
              "tuiHintMode",
              "onDark",
              1,
              "settings__hint",
              3,
              "inlineSVG",
              "tuiHint",
            ],
            [1, "settings__form-row", "settings__form-row_united"],
            [1, "settings__button-auto", 3, "ngClass", "click"],
            [1, "settings__button-auto", 3, "click"],
            [1, "slippage-container"],
            [
              "appCommaToPeriod",
              "",
              3,
              "ngModel",
              "ngModelOptions",
              "tuiTextfieldLabelOutside",
              "tuiTextfieldSize",
              "minAmount",
              "amountChange",
            ],
            [1, "settings__form-row"],
            [
              "id",
              "showReceiverAddress",
              "formControlName",
              "showReceiverAddress",
              1,
              "settings__toggle",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0)(1, "form", 1)(2, "div", 2)(
                3,
                "label"
              ),
              e.ɵɵtext(4),
              e.ɵɵpipe(5, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelement(6, "div", 3),
              e.ɵɵpipe(7, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(8, "div", 4)(9, "div", 5),
              e.ɵɵlistener("click", function () {
                return n.toggleAutoSlippageTolerance();
              }),
              e.ɵɵtext(10, " Auto "),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(11, "button", 6),
              e.ɵɵlistener("click", function () {
                return n.onSlippageToleranceChange(3);
              }),
              e.ɵɵtext(12, "3"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(13, "button", 6),
              e.ɵɵlistener("click", function () {
                return n.onSlippageToleranceChange(5);
              }),
              e.ɵɵtext(14, "5"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(15, "div", 7)(16, "input", 8),
              e.ɵɵlistener("amountChange", function (a) {
                return n.onSlippageToleranceChange(a);
              }),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(17, "div"),
              e.ɵɵtext(18, "%"),
              e.ɵɵelementEnd(),
              e.ɵɵelement(19, "span"),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(20, "div", 9)(21, "label"),
              e.ɵɵtext(22),
              e.ɵɵpipe(23, "translate"),
              e.ɵɵelementEnd(),
              e.ɵɵelement(24, "div", 3),
              e.ɵɵpipe(25, "translate"),
              e.ɵɵelement(26, "tui-toggle", 10),
              e.ɵɵelementEnd()()()),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵproperty("formGroup", n.crossChainRoutingForm),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate(
                  e.ɵɵpipeBind1(
                    5,
                    13,
                    "crossChainRouting.slippage"
                  )
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
                  "tuiHint",
                  e.ɵɵpipeBind1(7, 15, "crossChainRouting.slippage")
                ),
                e.ɵɵadvance(3),
                e.ɵɵproperty(
                  "ngClass",
                  e.ɵɵpureFunction1(
                    21,
                    Dp,
                    n.crossChainRoutingForm.value.autoSlippageTolerance
                  )
                ),
                e.ɵɵadvance(7),
                e.ɵɵproperty("ngModel", n.slippageTolerance)(
                  "ngModelOptions",
                  e.ɵɵpureFunction0(23, Lp)
                )("tuiTextfieldLabelOutside", !0)("tuiTextfieldSize", "s")(
                  "minAmount",
                  n.minimumSlippageTolerance
                ),
                e.ɵɵadvance(6),
                e.ɵɵtextInterpolate(
                  e.ɵɵpipeBind1(
                    23,
                    17,
                    "crossChainRouting.showReceiverAddress"
                  )
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
                  "tuiHint",
                  e.ɵɵpipeBind1(
                    25,
                    19,
                    "crossChainRouting.showReceiverAddress"
                  )
                ));
          },
          dependencies: [
            m.mk,
            Yt,
            h.ɵNgNoValidate,
            h.DefaultValueAccessor,
            h.NgControlStatus,
            h.NgControlStatusGroup,
            h.FormGroupDirective,
            h.FormControlName,
            Pr.ph,
            Y.xT,
            Y.sz,
            G.d$,
            R.D,
            h.NgModel,
            E.X$,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.slippage-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding-right:22px;padding-left:12px}.slippage-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:35px;text-align:right;background:transparent;border:none;border-radius:100px}.slippage-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] ~ span[_ngcontent-%COMP%]{position:absolute;left:0;z-index:-1;width:100%;height:100%;border:1px solid var(--tui-base-03);border-radius:100px;transition:var(--tui-duration) ease-in-out}.slippage-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ span[_ngcontent-%COMP%]{border:2px solid var(--tui-primary)}[_nghost-%COMP%]{color:var(--primary-text)}.settings[_ngcontent-%COMP%]{min-width:265px;max-width:320px;padding:20px}.settings__form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.settings__hint[_ngcontent-%COMP%]{height:15px;margin-right:auto;margin-left:6px;cursor:pointer}.settings__hint[_ngcontent-%COMP%]     svg path{fill:var(--secondary-text)}.settings__button-auto[_ngcontent-%COMP%]{box-sizing:border-box;height:35px;margin-right:10px;padding:8px 15px;color:var(--primary-text);background:none;border:1px solid transparent;border-radius:20px;cursor:pointer}.settings__button-auto_active[_ngcontent-%COMP%]{color:var(--primary-text-invert);background:var(--primary-color)}.settings__toggle[_ngcontent-%COMP%]{margin-left:15px}@media (max-width: 420px){.settings__toggle[_ngcontent-%COMP%]{transform:scale(1.25)}}.settings__form-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;width:100%;margin-bottom:12px}.settings__form-row[_ngcontent-%COMP%]:last-child{margin-bottom:0}.settings__form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:300;font-size:16px}.settings__form-row_united[_ngcontent-%COMP%]{flex-wrap:nowrap}.settings__form-row_united[_ngcontent-%COMP%]   tui-input-number[_ngcontent-%COMP%]{width:100%}.settings__form-row_small-input[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield]{width:80px}.settings[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield]{color:var(--primary-text);border-radius:100px;box-shadow:none}.settings[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield] input{padding-right:22px!important}.settings[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield] input, .settings[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield] input::placeholder{text-align:right}.settings[_ngcontent-%COMP%]     input+.content .placeholder{text-align:right}.settings[_ngcontent-%COMP%]     .wrapper{display:flex}.settings[_ngcontent-%COMP%]     .value-decoration{margin-left:auto}",
          ],
          changeDetection: 0,
        }));
      class qn {
        constructor(t, n) {
          (this.swapService = t), (this.swapFormService = n), (this.open = !1);
        }
        ngOnInit() {
          (this.settingsComponent = this.getSettingsComponent()),
            this.swapFormService.form.valueChanges.subscribe(() => {
              this.prevMode !== this.swapService.swapMode &&
                (this.settingsComponent = this.getSettingsComponent()),
                (this.prevMode = this.swapService.swapMode);
            });
        }
        getSettingsComponent() {
          let t;
          return (
            (t = this.swapService.swapMode === b.V.INSTANT_TRADE ? Qn : Jn),
            new z.Al(t)
          );
        }
      }
      (qn.ɵfac = function (t) {
        return new (t || qn)(
          e.ɵɵdirectiveInject(ce.H),
          e.ɵɵdirectiveInject(A.q)
        );
      }),
        (qn.ɵcmp = e.ɵɵdefineComponent({
          type: qn,
          selectors: [["app-settings-container"]],
          decls: 2,
          vars: 3,
          consts: [
            [
              "tuiDropdownDirection",
              "bottom",
              3,
              "content",
              "open",
              "tuiDropdownMinHeight",
              "openChange",
            ],
            [
              "src",
              "/assets/images/icons/options.svg",
              "width",
              "25",
              "height",
              "25",
              "alt",
              "Settings",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "tui-hosted-dropdown", 0),
              e.ɵɵlistener("openChange", function (a) {
                return (n.open = a);
              }),
              e.ɵɵelement(1, "img", 1),
              e.ɵɵelementEnd()),
              2 & t &&
                e.ɵɵproperty("content", n.settingsComponent)("open", n.open)(
                  "tuiDropdownMinHeight",
                  0
                );
          },
          dependencies: [Un.o1, Gn.Sw],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}@media (max-width: 651px){body.hide-unused-ui   [_nghost-%COMP%]{position:initial!important}}tui-hosted-dropdown[_ngcontent-%COMP%]     .wrapper{display:flex;align-items:center}img[_ngcontent-%COMP%]{filter:grayscale(1)}",
          ],
          changeDetection: 0,
        }));
      var kr = l(56197),
        wr = (() => {
          return (
            ((r = wr || (wr = {}))[(r.LOW = 0.02)] = "LOW"),
            (r[(r.MEDIUM = 20)] = "MEDIUM"),
            (r[(r.HIGH = 30)] = "HIGH"),
            (r[(r.HIGH_DISABLED = 40)] = "HIGH_DISABLED"),
            wr
          );
          var r;
        })();
      const Hp = function (r, t, n) {
        return {
          "info-line__value_green": r,
          "info-line__value_yellow": t,
          "info-line__value_red": n,
        };
      };
      function $p(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 8), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵproperty(
            "ngClass",
            e.ɵɵpureFunction3(
              2,
              Hp,
              n.priceImpact < n.PRICE_IMPACT_RANGE.LOW,
              n.priceImpact >= n.PRICE_IMPACT_RANGE.MEDIUM &&
                n.priceImpact < n.PRICE_IMPACT_RANGE.HIGH,
              n.priceImpact >= n.PRICE_IMPACT_RANGE.HIGH
            )
          ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              n.priceImpact < n.PRICE_IMPACT_RANGE.LOW
                ? "<0.01"
                : n.priceImpact,
              "% "
            );
        }
      }
      function Vp(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div", 9),
          e.ɵɵtext(1, " Price impact is unknown "),
          e.ɵɵelement(2, "img", 10),
          e.ɵɵelementEnd());
      }
      function jp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, $p, 2, 6, "div", 6),
            e.ɵɵtemplate(2, Vp, 3, 0, "div", 7),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", null !== n.priceImpact),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", null === n.priceImpact);
        }
      }
      function zp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "span", 3),
            e.ɵɵtext(3),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "img", 4),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(5, jp, 3, 2, "ng-container", 5),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(n.title),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "src",
              null !== n.priceImpact
                ? "assets/images/swaps/swaps-info/question-icon.svg"
                : "assets/images/swaps/swaps-info/exclamation-icon.svg",
              e.ɵɵsanitizeUrl
            )("tuiHint", n.hint),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", void 0 !== n.priceImpact);
        }
      }
      class Wt {
        constructor() {
          (this.title = "Price impact"), (this.PRICE_IMPACT_RANGE = wr);
        }
      }
      function Yp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "span", 3),
            e.ɵɵtext(3, "Network fee"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "img", 7),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "div", 8),
            e.ɵɵtext(6),
            e.ɵɵpipe(7, "withRound"),
            e.ɵɵpipe(8, "bigNumberFormat"),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(4),
            e.ɵɵproperty(
              "tuiHint",
              "Gas fee in target network taken in target token."
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate2(
              " ",
              e.ɵɵpipeBind2(
                7,
                3,
                e.ɵɵpipeBind1(8, 6, n.cryptoFeeToken.tokenAmount),
                "toClosestValue"
              ),
              " ",
              n.cryptoFeeToken.symbol,
              " "
            );
        }
      }
      function Wp(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtext(1, "+"),
          e.ɵɵelementContainerEnd());
      }
      function Up(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵtemplate(2, Wp, 2, 0, "ng-container", 0),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1("", n.platformFee.percent, "% "),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.fixedFeeToken);
        }
      }
      function Gp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "withRound"),
            e.ɵɵpipe(3, "bigNumberFormat"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate2(
              " ",
              e.ɵɵpipeBind2(
                2,
                2,
                e.ɵɵpipeBind1(3, 5, n.fixedFeeToken.tokenAmount),
                "toClosestValue"
              ),
              " ",
              n.fixedFeeToken.symbol,
              " "
            );
        }
      }
      function Kp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "span", 3),
            e.ɵɵtext(3, "Protocol fee"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "img", 9),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "div", 8),
            e.ɵɵtemplate(6, Up, 3, 2, "ng-container", 0),
            e.ɵɵtemplate(7, Gp, 4, 7, "ng-container", 0),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(4),
            e.ɵɵproperty(
              "tuiHint",
              "Platform's commission charges in source network native coin."
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngIf",
              null == n.platformFee ? null : n.platformFee.percent
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.fixedFeeToken);
        }
      }
      function Zp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Yp, 9, 8, "div", 5),
            e.ɵɵtemplate(2, Kp, 8, 3, "div", 5),
            e.ɵɵelement(3, "hr", 6),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.cryptoFeeToken),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.platformFee || n.fixedFeeToken);
        }
      }
      function Xp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 8), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate1(" ", n, " ");
        }
      }
      function Qp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "span", 3),
            e.ɵɵtext(3, "Minimum received"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "img", 7),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(5, Xp, 2, 1, "div", 11),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(4),
            e.ɵɵproperty(
              "tuiHint",
              "Output is estimated. You will receive at least " +
                n +
                " or the transaction will revert."
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              null == i.minimumReceived ? null : i.minimumReceived.isFinite()
            );
        }
      }
      (Wt.ɵfac = function (t) {
        return new (t || Wt)();
      }),
        (Wt.ɵcmp = e.ɵɵdefineComponent({
          type: Wt,
          selectors: [["app-price-impact-info-line"]],
          inputs: { title: "title", hint: "hint", priceImpact: "priceImpact" },
          decls: 1,
          vars: 1,
          consts: [
            ["class", "info-line", 4, "ngIf"],
            [1, "info-line"],
            [1, "info-line__title", "title"],
            [1, "title__text"],
            ["alt", "question", 3, "src", "tuiHint"],
            [4, "ngIf"],
            ["class", "info-line__value", 3, "ngClass", 4, "ngIf"],
            ["class", "info-line__value info-line__value_yellow", 4, "ngIf"],
            [1, "info-line__value", 3, "ngClass"],
            [1, "info-line__value", "info-line__value_yellow"],
            [
              "src",
              "assets/images/swaps/swaps-info/warning-icon.svg",
              "alt",
              "warning",
            ],
          ],
          template: function (t, n) {
            1 & t && e.ɵɵtemplate(0, zp, 6, 4, "div", 0),
              2 & t && e.ɵɵproperty("ngIf", 0 !== n.priceImpact);
          },
          dependencies: [m.mk, m.O5, R.D],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.delimiter[_ngcontent-%COMP%]{margin:0 0 15px;background:var(--transaparent-line)}.info-line[_ngcontent-%COMP%]{display:flex;grid-gap:20px;justify-content:space-between;min-height:21px;font-weight:500;font-size:16px}.info-line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:23px;height:23px}.info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.info-line_mb[_ngcontent-%COMP%]{margin-bottom:14px!important}.info-line__value[_ngcontent-%COMP%]{display:flex;grid-gap:8px;align-items:center}.info-line__value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:19px}.info-line__value[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;width:19px;height:19px}.info-line__value_green[_ngcontent-%COMP%]{color:var(--primary-color)}.info-line__value_yellow[_ngcontent-%COMP%]{color:#f3ba2f}.info-line__value_red[_ngcontent-%COMP%]{color:#e83e3f}.title[_ngcontent-%COMP%]{display:flex;grid-gap:13px;align-items:center}app-price-impact-info-line[_ngcontent-%COMP%]{display:block}app-price-impact-info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}@media (max-width: 490px){.info-line[_ngcontent-%COMP%]{flex-direction:column;grid-gap:8px}.info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}.title[_ngcontent-%COMP%]{grid-gap:9px}app-price-impact-info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}}.route-value__icon-next[_ngcontent-%COMP%]{width:8px!important;height:14px!important}",
          ],
          changeDetection: 0,
        }));
      const Jp = function (r) {
        return { decimals: r };
      };
      function qp(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Qp, 6, 2, "div", 10),
            e.ɵɵpipe(2, "withRound"),
            e.ɵɵpipe(3, "bigNumberFormat"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngLet",
              e.ɵɵpipeBind3(
                2,
                1,
                e.ɵɵpipeBind1(3, 5, n.minimumReceived),
                "toClosestValue",
                e.ɵɵpureFunction1(7, Jp, n.toToken.decimals)
              ) +
                " " +
                n.toToken.symbol
            );
        }
      }
      function ed(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "span", 3),
            e.ɵɵtext(3, "Slippage"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "img", 7),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "div", 8),
            e.ɵɵtext(6),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(4),
            e.ɵɵproperty(
              "tuiHint",
              "Your transaction will be canceled if the price changes unfavorably by more than the entered percentage (a lower percentage decreases the chances of your transaction being front-run)."
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1("", n.slippage, "%");
        }
      }
      function td(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "app-price-impact-info-line", 12),
            e.ɵɵtemplate(2, ed, 7, 2, "div", 5),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "hint",
              "Correlation between an incoming order and the change in the price of the asset involved caused by the trade"
            )("priceImpact", n.priceImpact),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.slippage);
        }
      }
      function nd(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 13),
            e.ɵɵtext(1),
            e.ɵɵelementStart(2, "button", 14),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.switchRateType());
            }),
            e.ɵɵelement(3, "img", 15),
            e.ɵɵelementEnd()();
        }
        if (2 & r) {
          const n = t.ngIf;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate1(" ", n, " ");
        }
      }
      function rd(r, t) {
        1 & r && e.ɵɵelement(0, "img", 19);
      }
      function id(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵtemplate(2, rd, 1, 0, "img", 18),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.$implicit,
            i = t.index,
            a = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" ", n, " "),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", i !== a.path.length - 1);
        }
      }
      function od(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "hr", 6),
            e.ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "span", 3),
            e.ɵɵtext(5, "Route"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(6, "div", 16),
            e.ɵɵtemplate(7, id, 3, 2, "ng-container", 17),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(7), e.ɵɵproperty("ngForOf", n.path);
        }
      }
      class er {
        constructor(t, n, i, a, s, c, p) {
          (this.cdr = t),
            (this.swapInfoService = n),
            (this.swapFormService = i),
            (this.instantTradeService = a),
            (this.priceImpactService = s),
            (this.bigNumberFormatPipe = c),
            (this.withRoundPipe = p),
            (this.rateType = "fromTokenRate");
        }
        set currentOnChainTrade(t) {
          this.setTradeData(t);
        }
        get rate() {
          const {
              fromAmount: t,
              fromToken: n,
              toToken: i,
            } = this.instantTradeService.inputValue,
            { toAmount: a } = this.swapFormService.outputValue;
          if (!t?.isFinite() || !a?.isFinite()) return "";
          if ("fromTokenRate" === this.rateType) {
            const c = this.withRoundPipe.transform(
              this.bigNumberFormatPipe.transform(a.dividedBy(t)),
              "toClosestValue",
              { decimals: i.decimals }
            );
            return `1 ${n.symbol} = ${c} ${i.symbol}`;
          }
          return `${this.withRoundPipe.transform(
            this.bigNumberFormatPipe.transform(t.dividedBy(a)),
            "toClosestValue",
            { decimals: n.decimals }
          )} ${n.symbol} = 1 ${i.symbol}`;
        }
        switchRateType() {
          this.rateType =
            "fromTokenRate" === this.rateType ? "toTokenRate" : "fromTokenRate";
        }
        setTradeData(t) {
          t &&
            ((this.minimumReceived = t.toTokenAmountMin.tokenAmount),
            (this.slippage = 100 * t.slippageTolerance),
            (this.path = t?.path?.map((n) => n.symbol)),
            this.setPriceImpact(),
            (this.toToken = t.to),
            t instanceof o.EvmOnChainTrade &&
              ((this.fixedFeeToken = t.proxyFeeInfo?.fixedFeeToken),
              (this.platformFee = t.proxyFeeInfo?.platformFee)),
            (this.isBridgers = t instanceof o.BridgersTrade),
            t instanceof o.BridgersTrade
              ? ((this.isBridgers = !0),
                (this.cryptoFeeToken = t.cryptoFeeToken),
                (this.platformFee = t.platformFee))
              : (this.isBridgers = !1),
            this.swapInfoService.emitInfoCalculated(),
            this.cdr.detectChanges());
        }
        setPriceImpact() {
          const {
              fromToken: t,
              toToken: n,
              fromAmount: i,
              fromBlockchain: a,
            } = this.instantTradeService.inputValue,
            { toAmount: s } = this.swapFormService.outputValue;
          (this.priceImpact =
            a === o.BLOCKCHAIN_NAME.ETHEREUM_POW
              ? null
              : Re.calculatePriceImpact(t?.price, n?.price, i, s)),
            this.priceImpactService.setPriceImpact(this.priceImpact);
        }
      }
      (er.ɵfac = function (t) {
        return new (t || er)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(ze),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(Oe),
          e.ɵɵdirectiveInject(Re),
          e.ɵɵdirectiveInject(Ce.N),
          e.ɵɵdirectiveInject(Te.f)
        );
      }),
        (er.ɵcmp = e.ɵɵdefineComponent({
          type: er,
          selectors: [["app-instant-trade-swap-info"]],
          inputs: { currentOnChainTrade: "currentOnChainTrade" },
          decls: 9,
          vars: 5,
          consts: [
            [4, "ngIf"],
            [1, "info-line"],
            [1, "info-line__title", "title"],
            [1, "title__text"],
            ["class", "info-line__value rate-value", 4, "ngIf"],
            ["class", "info-line", 4, "ngIf"],
            [1, "delimiter"],
            [
              "src",
              "assets/images/swaps/swaps-info/question-icon.svg",
              "alt",
              "question",
              3,
              "tuiHint",
            ],
            [1, "info-line__value"],
            [
              "src",
              "assets/images/swaps/swaps-info/question-icon.svg",
              "alt",
              "Protocol fee",
              3,
              "tuiHint",
            ],
            ["class", "info-line", 4, "ngLet"],
            ["class", "info-line__value", 4, "ngIf"],
            [3, "hint", "priceImpact"],
            [1, "info-line__value", "rate-value"],
            [3, "click"],
            [
              "src",
              "assets/images/swaps/swaps-info/arrows-on-change-icon.svg",
              "alt",
              "change rate order",
            ],
            [1, "info-line__value", "route-value"],
            [4, "ngFor", "ngForOf"],
            [
              "class",
              "route-value__icon-next",
              "src",
              "assets/images/swaps/swaps-info/route-next-icon.svg",
              "alt",
              "",
              4,
              "ngIf",
            ],
            [
              "src",
              "assets/images/swaps/swaps-info/route-next-icon.svg",
              "alt",
              "",
              1,
              "route-value__icon-next",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Zp, 4, 2, "ng-container", 0),
              e.ɵɵtemplate(1, qp, 4, 9, "ng-container", 0),
              e.ɵɵtemplate(2, td, 3, 3, "ng-container", 0),
              e.ɵɵelementStart(3, "div", 1)(4, "div", 2)(5, "span", 3),
              e.ɵɵtext(6, "Rate"),
              e.ɵɵelementEnd()(),
              e.ɵɵtemplate(7, nd, 4, 1, "div", 4),
              e.ɵɵelementEnd(),
              e.ɵɵtemplate(8, od, 8, 1, "ng-container", 0)),
              2 & t &&
                (e.ɵɵproperty(
                  "ngIf",
                  n.cryptoFeeToken || n.platformFee || n.fixedFeeToken
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.toToken),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", !n.isBridgers),
                e.ɵɵadvance(5),
                e.ɵɵproperty("ngIf", n.rate),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", null == n.path ? null : n.path.length));
          },
          dependencies: [m.sg, m.O5, B.e, R.D, Wt, Ce.N, Te.f],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.delimiter[_ngcontent-%COMP%]{margin:0 0 15px;background:var(--transaparent-line)}.info-line[_ngcontent-%COMP%]{display:flex;grid-gap:20px;justify-content:space-between;min-height:21px;font-weight:500;font-size:16px}.info-line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:23px;height:23px}.info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.info-line_mb[_ngcontent-%COMP%]{margin-bottom:14px!important}.info-line__value[_ngcontent-%COMP%]{display:flex;grid-gap:8px;align-items:center}.info-line__value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:19px}.info-line__value[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;width:19px;height:19px}.info-line__value_green[_ngcontent-%COMP%]{color:var(--primary-color)}.info-line__value_yellow[_ngcontent-%COMP%]{color:#f3ba2f}.info-line__value_red[_ngcontent-%COMP%]{color:#e83e3f}.title[_ngcontent-%COMP%]{display:flex;grid-gap:13px;align-items:center}app-price-impact-info-line[_ngcontent-%COMP%]{display:block}app-price-impact-info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}@media (max-width: 490px){.info-line[_ngcontent-%COMP%]{flex-direction:column;grid-gap:8px}.info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}.title[_ngcontent-%COMP%]{grid-gap:9px}app-price-impact-info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}}.route-value__icon-next[_ngcontent-%COMP%]{width:8px!important;height:14px!important}.rate-value[_ngcontent-%COMP%]{grid-gap:8px}",
          ],
          changeDetection: 0,
        }));
      class ad {
        constructor(t, n) {
          this._document = n;
          const i = (this._textarea = this._document.createElement("textarea")),
            a = i.style;
          (a.position = "fixed"),
            (a.top = a.opacity = "0"),
            (a.left = "-999em"),
            i.setAttribute("aria-hidden", "true"),
            (i.value = t),
            (i.readOnly = !0),
            this._document.body.appendChild(i);
        }
        copy() {
          const t = this._textarea;
          let n = !1;
          try {
            if (t) {
              const i = this._document.activeElement;
              t.select(),
                t.setSelectionRange(0, t.value.length),
                (n = this._document.execCommand("copy")),
                i && i.focus();
            }
          } catch {}
          return n;
        }
        destroy() {
          const t = this._textarea;
          t && (t.remove(), (this._textarea = void 0));
        }
      }
      let sd = (() => {
        class r {
          constructor(n) {
            this._document = n;
          }
          copy(n) {
            const i = this.beginCopy(n),
              a = i.copy();
            return i.destroy(), a;
          }
          beginCopy(n) {
            return new ad(n, this._document);
          }
        }
        return (
          (r.ɵfac = function (n) {
            return new (n || r)(e.ɵɵinject(m.K0));
          }),
          (r.ɵprov = e.ɵɵdefineInjectable({
            token: r,
            factory: r.ɵfac,
            providedIn: "root",
          })),
          r
        );
      })();
      const cd = new e.InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
      let to = (() => {
          class r {
            constructor(n, i, a) {
              (this._clipboard = n),
                (this._ngZone = i),
                (this.text = ""),
                (this.attempts = 1),
                (this.copied = new e.EventEmitter()),
                (this._pending = new Set()),
                a && null != a.attempts && (this.attempts = a.attempts);
            }
            copy(n = this.attempts) {
              if (n > 1) {
                let i = n;
                const a = this._clipboard.beginCopy(this.text);
                this._pending.add(a);
                const s = () => {
                  const c = a.copy();
                  c || !--i || this._destroyed
                    ? ((this._currentTimeout = null),
                      this._pending.delete(a),
                      a.destroy(),
                      this.copied.emit(c))
                    : (this._currentTimeout = this._ngZone.runOutsideAngular(
                        () => setTimeout(s, 1)
                      ));
                };
                s();
              } else this.copied.emit(this._clipboard.copy(this.text));
            }
            ngOnDestroy() {
              this._currentTimeout && clearTimeout(this._currentTimeout),
                this._pending.forEach((n) => n.destroy()),
                this._pending.clear(),
                (this._destroyed = !0);
            }
          }
          return (
            (r.ɵfac = function (n) {
              return new (n || r)(
                e.ɵɵdirectiveInject(sd),
                e.ɵɵdirectiveInject(e.NgZone),
                e.ɵɵdirectiveInject(cd, 8)
              );
            }),
            (r.ɵdir = e.ɵɵdefineDirective({
              type: r,
              selectors: [["", "cdkCopyToClipboard", ""]],
              hostBindings: function (n, i) {
                1 & n &&
                  e.ɵɵlistener("click", function () {
                    return i.copy();
                  });
              },
              inputs: {
                text: ["cdkCopyToClipboard", "text"],
                attempts: ["cdkCopyToClipboardAttempts", "attempts"],
              },
              outputs: { copied: "cdkCopyToClipboardCopied" },
            })),
            r
          );
        })(),
        ld = (() => {
          class r {}
          return (
            (r.ɵfac = function (n) {
              return new (n || r)();
            }),
            (r.ɵmod = e.ɵɵdefineNgModule({ type: r })),
            (r.ɵinj = e.ɵɵdefineInjector({})),
            r
          );
        })();
      const pd = function () {
        return { minRound: 2, maxRound: 3 };
      };
      function dd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 5),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "withRound"),
            e.ɵɵpipe(3, "bigNumberFormat"),
            e.ɵɵpipe(4, "withRound"),
            e.ɵɵpipe(5, "bigNumberFormat"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate3(
              " ",
              e.ɵɵpipeBind2(
                2,
                3,
                e.ɵɵpipeBind1(3, 6, n.estimateGasInEth),
                "toClosestValue"
              ),
              " ",
              n.nativeCoinSymbol,
              " \u2248 $",
              e.ɵɵpipeBind3(
                4,
                8,
                e.ɵɵpipeBind1(5, 12, n.estimateGasInUsd),
                "toClosestValue",
                e.ɵɵpureFunction0(14, pd)
              ),
              " "
            );
        }
      }
      function md(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "span", 3),
            e.ɵɵtext(3, "Estimated gas fee"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "img", 10),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(5, dd, 6, 15, "div", 11),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(4),
            e.ɵɵproperty("tuiHint", "Estimated gas fee in source network"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.estimateGasInEth);
        }
      }
      function _d(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(1), e.ɵɵtextInterpolate1("", n.platformFee.percent, "%");
        }
      }
      function ud(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtext(1, "\xa0+\xa0 "),
          e.ɵɵelementContainerEnd());
      }
      function gd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "withRound"),
            e.ɵɵpipe(3, "bigNumberFormat"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate2(
              " ",
              e.ɵɵpipeBind2(
                2,
                2,
                e.ɵɵpipeBind1(3, 5, n.feeInfo.provider.cryptoFee.amount),
                "toClosestValue"
              ),
              "\xa0 ",
              n.feeInfo.provider.cryptoFee.tokenSymbol,
              " "
            );
        }
      }
      function hd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "span", 3),
            e.ɵɵtext(3, "Network fee"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "img", 12),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "div", 5),
            e.ɵɵtemplate(6, _d, 2, 1, "ng-container", 6),
            e.ɵɵtemplate(7, ud, 2, 0, "ng-container", 6),
            e.ɵɵtemplate(8, gd, 4, 7, "ng-container", 6),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = t.ngIf;
          e.ɵɵadvance(6),
            e.ɵɵproperty(
              "ngIf",
              null == n || null == n.platformFee ? null : n.platformFee.percent
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              (null == n || null == n.platformFee
                ? null
                : n.platformFee.percent) &&
                (null == n || null == n.cryptoFee
                  ? null
                  : n.cryptoFee.amount.isFinite())
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              null == n || null == n.cryptoFee || null == n.cryptoFee.amount
                ? null
                : n.cryptoFee.amount.gt(0)
            );
        }
      }
      function fd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              n.feeInfo.rubicProxy.platformFee.percent,
              "% "
            );
        }
      }
      const no = function (r) {
        return { decimals: r };
      };
      function Cd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "withRound"),
            e.ɵɵpipe(3, "bigNumberFormat"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate2(
              " ",
              e.ɵɵpipeBind3(
                2,
                2,
                e.ɵɵpipeBind1(3, 6, n.feeInfo.rubicProxy.fixedFee.amount),
                "toClosestValue",
                e.ɵɵpureFunction1(8, no, n.nativeCoinDecimals)
              ),
              "\xa0 ",
              n.feeInfo.rubicProxy.fixedFee.tokenSymbol,
              " "
            );
        }
      }
      function vd(r, t) {
        1 & r && e.ɵɵtext(0, " 0% ");
      }
      function bd(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelement(1, "hr", 13),
          e.ɵɵelementContainerEnd());
      }
      function xd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "app-price-impact-info-line", 14)(
              2,
              "app-price-impact-info-line",
              15
            ),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "hint",
              "Correlation between an incoming order and the change in the price of the asset involved caused by the trade. Cross-chain consists of two transactions and each has its' own price impact."
            )("priceImpact", n.priceImpactFrom),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "hint",
              "Correlation between an incoming order and the change in the price of the asset involved caused by the trade. Cross-chain consists of two transactions and each has its' own price impact."
            )("priceImpact", n.priceImpactTo);
        }
      }
      function yd(r, t) {
        if (
          (1 & r && e.ɵɵelement(0, "app-price-impact-info-line", 16), 2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty(
            "hint",
            "Correlation between an incoming order and the change in the price of the asset involved caused by the trade."
          )("priceImpact", n.priceImpact);
        }
      }
      function Sd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "span", 3),
            e.ɵɵtext(3, "Current slippage"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "img", 10),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "div", 5),
            e.ɵɵtext(6),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(4),
            e.ɵɵproperty(
              "tuiHint",
              "Output is estimated. You will receive at least " +
                n +
                " or the transaction will revert."
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1("", i.slippage, "%");
        }
      }
      function Td(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Sd, 7, 2, "div", 17),
            e.ɵɵpipe(2, "withRound"),
            e.ɵɵpipe(3, "bigNumberFormat"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngLet",
              e.ɵɵpipeBind3(
                2,
                1,
                e.ɵɵpipeBind1(3, 5, n.minimumReceived),
                "toClosestValue",
                e.ɵɵpureFunction1(7, no, n.toToken.decimals)
              ) +
                " " +
                n.toToken.symbol
            );
        }
      }
      class tr {
        constructor(t, n, i, a, s, c, p, d) {
          (this.cdr = t),
            (this.swapInfoService = n),
            (this.swapFormService = i),
            (this.crossChainFormService = a),
            (this.tokensService = s),
            (this.tokensStoreService = c),
            (this.priceImpactService = p),
            (this.destroy$ = d);
        }
        ngOnInit() {
          this.subscribeOnInputValue(), this.subscribeOnOutputValue();
        }
        subscribeOnInputValue() {
          this.swapFormService.inputValueDistinct$
            .pipe((0, O.R)(this.destroy$))
            .subscribe((t) => {
              (this.fromToken = t.fromAsset),
                (this.toToken = t.toToken),
                this.cdr.markForCheck();
            });
        }
        subscribeOnOutputValue() {
          this.swapFormService.outputValue$
            .pipe(
              (0, N.w)((t) => {
                const { toAmount: n } = t;
                if (!n?.isFinite())
                  return (
                    this.swapInfoService.emitInfoCalculated(), (0, L.of)(null)
                  );
                const { fromBlockchain: i } =
                  this.crossChainFormService.inputValue;
                return (0, je.D)(
                  this.tokensService.getNativeCoinPriceInUsd(i)
                ).pipe(
                  (0, v.U)((a) => {
                    const c = this.tokensStoreService.tokens.find((p) => {
                      let d;
                      try {
                        d = o.BlockchainsInfo.getChainType(p.blockchain);
                      } catch {}
                      return (
                        p.blockchain === i &&
                        ((d && o.Web3Pure[d].isNativeAddress(p.address)) ||
                          p.address === o.Web3Pure[d].EMPTY_ADDRESS)
                      );
                    });
                    (this.nativeCoinSymbol = c?.symbol),
                      this.setTradeInfoParams(a),
                      this.swapInfoService.emitInfoCalculated();
                  })
                );
              }),
              (0, Je.YP)(this.cdr),
              (0, O.R)(this.destroy$)
            )
            .subscribe();
        }
        setTwoWayPriceImpact(t, n) {
          (this.priceImpactFrom = t), (this.priceImpactTo = n);
          const i =
            null !== this.priceImpactFrom || null !== this.priceImpactTo
              ? Math.max(this.priceImpactFrom, this.priceImpactTo)
              : null;
          this.priceImpactService.setPriceImpact(i);
        }
        setTradeInfoParams(t) {
          const n = this.crossChainFormService.selectedTrade.trade,
            i = n.getTradeInfo();
          (this.twoWaySwap = !(n instanceof o.CelerCrossChainTrade)),
            (this.estimateGasInEth = i.estimatedGas),
            (this.estimateGasInUsd = this.estimateGasInEth?.multipliedBy(t)),
            (this.slippage = i.slippage
              ? "total" in i.slippage
                ? i.slippage.total
                : i.slippage?.from + i.slippage?.to
              : 0),
            (this.minimumReceived = n.toTokenAmountMin.multipliedBy(
              1 - this.slippage / 100
            )),
            (this.feeInfo = i.feeInfo),
            (this.nativeCoinDecimals =
              o.nativeTokensList[n.from.blockchain]?.decimals || 18),
            i.priceImpact
              ? "total" in i.priceImpact
                ? ((this.priceImpact = i.priceImpact.total),
                  this.priceImpactService.setPriceImpact(this.priceImpact))
                : this.setTwoWayPriceImpact(
                    i.priceImpact.from,
                    i.priceImpact.to
                  )
              : (this.priceImpact = 0),
            (this.isBridgers =
              n instanceof o.EvmBridgersCrossChainTrade ||
              n instanceof o.TronBridgersCrossChainTrade);
        }
      }
      (tr.ɵfac = function (t) {
        return new (t || tr)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(ze),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(ge),
          e.ɵɵdirectiveInject(De.H),
          e.ɵɵdirectiveInject(kt.Z),
          e.ɵɵdirectiveInject(Re),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (tr.ɵcmp = e.ɵɵdefineComponent({
          type: tr,
          selectors: [["app-cross-chain-swap-info"]],
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 17,
          vars: 9,
          consts: [
            ["class", "info-line", 4, "ngIf"],
            [1, "info-line"],
            [1, "info-line__title", "title"],
            [1, "title__text"],
            [
              "src",
              "assets/images/swaps/swaps-info/question-icon.svg",
              "alt",
              "Protocol fee",
              "tuiHint",
              "Rubic protocol's commission fee.",
            ],
            [1, "info-line__value"],
            [4, "ngIf"],
            [4, "ngIf", "ngIfElse"],
            ["zero", ""],
            ["oneWaySwap", ""],
            [
              "src",
              "assets/images/swaps/swaps-info/question-icon.svg",
              "alt",
              "question",
              3,
              "tuiHint",
            ],
            ["class", "info-line__value", 4, "ngIf"],
            [
              "src",
              "assets/images/swaps/swaps-info/question-icon.svg",
              "alt",
              "question",
              "tuiHint",
              "A fee to proceed swap in target network",
            ],
            [1, "delimiter"],
            [
              "title",
              "Price impact in source network",
              3,
              "hint",
              "priceImpact",
            ],
            [
              "title",
              "Price impact in target network",
              3,
              "hint",
              "priceImpact",
            ],
            ["title", "Price impact", 3, "hint", "priceImpact"],
            ["class", "info-line", 4, "ngLet"],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵtemplate(0, md, 6, 2, "div", 0),
                e.ɵɵtemplate(1, hd, 9, 3, "div", 0),
                e.ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "span", 3),
                e.ɵɵtext(5, "Protocol fee"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(6, "img", 4),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(7, "div", 5),
                e.ɵɵtemplate(8, fd, 2, 1, "ng-container", 6),
                e.ɵɵtemplate(9, Cd, 4, 10, "ng-container", 7),
                e.ɵɵtemplate(
                  10,
                  vd,
                  1,
                  0,
                  "ng-template",
                  null,
                  8,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵelementEnd()(),
                e.ɵɵtemplate(12, bd, 2, 0, "ng-container", 6),
                e.ɵɵtemplate(13, xd, 3, 4, "ng-container", 7),
                e.ɵɵtemplate(
                  14,
                  yd,
                  1,
                  2,
                  "ng-template",
                  null,
                  9,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵtemplate(16, Td, 4, 9, "ng-container", 6)),
              2 & t)
            ) {
              const i = e.ɵɵreference(11),
                a = e.ɵɵreference(15);
              e.ɵɵproperty(
                "ngIf",
                null == n.estimateGasInEth
                  ? null
                  : n.estimateGasInEth.isFinite()
              ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  null == n.feeInfo ? null : n.feeInfo.provider
                ),
                e.ɵɵadvance(7),
                e.ɵɵproperty(
                  "ngIf",
                  null == n.feeInfo ||
                    null == n.feeInfo.rubicProxy ||
                    null == n.feeInfo.rubicProxy.platformFee
                    ? null
                    : n.feeInfo.rubicProxy.platformFee.percent
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  null == n.feeInfo ||
                    null == n.feeInfo.rubicProxy ||
                    null == n.feeInfo.rubicProxy.fixedFee
                    ? null
                    : n.feeInfo.rubicProxy.fixedFee.amount.gt(0)
                )("ngIfElse", i),
                e.ɵɵadvance(3),
                e.ɵɵproperty("ngIf", !n.isBridgers || n.priceImpact),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", !n.twoWaySwap)("ngIfElse", a),
                e.ɵɵadvance(3),
                e.ɵɵproperty("ngIf", !n.isBridgers);
            }
          },
          dependencies: [m.O5, B.e, R.D, Wt, Ce.N, Te.f],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.delimiter[_ngcontent-%COMP%]{margin:0 0 15px;background:var(--transaparent-line)}.info-line[_ngcontent-%COMP%]{display:flex;grid-gap:20px;justify-content:space-between;min-height:21px;font-weight:500;font-size:16px}.info-line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:23px;height:23px}.info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.info-line_mb[_ngcontent-%COMP%]{margin-bottom:14px!important}.info-line__value[_ngcontent-%COMP%]{display:flex;grid-gap:8px;align-items:center}.info-line__value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:19px}.info-line__value[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;width:19px;height:19px}.info-line__value_green[_ngcontent-%COMP%]{color:var(--primary-color)}.info-line__value_yellow[_ngcontent-%COMP%]{color:#f3ba2f}.info-line__value_red[_ngcontent-%COMP%]{color:#e83e3f}.title[_ngcontent-%COMP%]{display:flex;grid-gap:13px;align-items:center}app-price-impact-info-line[_ngcontent-%COMP%]{display:block}app-price-impact-info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}@media (max-width: 490px){.info-line[_ngcontent-%COMP%]{flex-direction:column;grid-gap:8px}.info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}.title[_ngcontent-%COMP%]{grid-gap:9px}app-price-impact-info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}}.route-value__icon-next[_ngcontent-%COMP%]{width:8px!important;height:14px!important}.info-line_green[_ngcontent-%COMP%]{color:var(--primary-color)}",
          ],
          changeDetection: 0,
        }));
      var Od = l(27194);
      function Pd(r, t) {
        1 & r && e.ɵɵelement(0, "app-cross-chain-swap-info");
      }
      function kd(r, t) {
        1 & r && e.ɵɵelement(0, "img", 11);
      }
      function wd(r, t) {
        1 & r && e.ɵɵelement(0, "img", 12);
      }
      function Ad(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "hr", 1),
            e.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "span", 4),
            e.ɵɵtext(5),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(6, "div", 5),
            e.ɵɵtext(7),
            e.ɵɵpipe(8, "shortAddress"),
            e.ɵɵelementStart(9, "a", 6),
            e.ɵɵpipe(10, "scannerLink"),
            e.ɵɵelement(11, "img", 7),
            e.ɵɵpipe(12, "translate"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(13, "button", 8),
            e.ɵɵlistener("cdkCopyToClipboardCopied", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.onWalletAddressCopied());
            }),
            e.ɵɵtemplate(14, kd, 1, 0, "img", 9),
            e.ɵɵtemplate(15, wd, 1, 0, "img", 10),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(5),
            e.ɵɵtextInterpolate1(
              "You will receive ",
              n.blockchainLabel,
              " tokens at this address"
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind3(8, 7, n.toWalletAddress, 5, 5),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "safetyLink",
              e.ɵɵpipeBind3(
                10,
                11,
                n.toWalletAddress,
                n.toBlockchain,
                n.ADDRESS_TYPE.WALLET
              )
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("alt", e.ɵɵpipeBind1(12, 15, "checkOnScanner")),
            e.ɵɵadvance(2),
            e.ɵɵproperty("cdkCopyToClipboard", n.toWalletAddress),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !n.isWalletCopied),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n.isWalletCopied);
        }
      }
      class nr {
        constructor(t, n, i, a, s, c) {
          (this.cdr = t),
            (this.swapFormService = n),
            (this.authService = i),
            (this.settingsService = a),
            (this.destroy$ = s),
            (this.targetNetworkAddressService = c),
            (this.SWAP_PROVIDER_TYPE = b.V),
            (this.ADDRESS_TYPE = Bi.Z),
            (this.isWalletCopied = !1);
        }
        get blockchainLabel() {
          return We.h[this.toBlockchain];
        }
        ngOnInit() {
          this.initSubscriptions();
        }
        initSubscriptions() {
          (0, $.a)([
            this.swapFormService.inputValueDistinct$,
            this.authService.currentUser$,
            this.targetNetworkAddressService.address$,
          ])
            .pipe((0, O.R)(this.destroy$))
            .subscribe(([t, n, i]) => {
              let a, s;
              this.toBlockchain = t.toBlockchain;
              try {
                a = o.BlockchainsInfo.getChainType(t.fromAssetType);
              } catch {}
              try {
                s = o.BlockchainsInfo.getChainType(t.toBlockchain);
              } catch {}
              (this.toWalletAddress = s && a === s ? i || n?.address : i),
                this.cdr.detectChanges();
            });
        }
        onWalletAddressCopied() {
          (this.isWalletCopied = !0),
            setTimeout(() => {
              (this.isWalletCopied = !1), this.cdr.markForCheck();
            }, 700);
        }
      }
      function Ed(r, t) {
        if (
          (1 & r && e.ɵɵelement(0, "app-instant-trade-swap-info", 9), 2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty(
            "currentOnChainTrade",
            null == n.currentInstantTradeInfo
              ? null
              : n.currentInstantTradeInfo.trade
          );
        }
      }
      function Md(r, t) {
        if (
          (1 & r && e.ɵɵelement(0, "app-cross-chain-bridge-swap-info", 10),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("swapType", n.swapType);
        }
      }
      (nr.ɵfac = function (t) {
        return new (t || nr)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(j.e),
          e.ɵɵdirectiveInject(q),
          e.ɵɵdirectiveInject(k.a3, 2),
          e.ɵɵdirectiveInject(oe)
        );
      }),
        (nr.ɵcmp = e.ɵɵdefineComponent({
          type: nr,
          selectors: [["app-cross-chain-bridge-swap-info"]],
          inputs: { swapType: "swapType" },
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 2,
          vars: 2,
          consts: [
            [4, "ngIf"],
            [1, "delimiter"],
            [1, "info-line"],
            [1, "info-line__title", "title"],
            [1, "title__text"],
            [1, "info-line__value"],
            [3, "safetyLink"],
            ["src", "assets/images/icons/scanner.svg", 3, "alt"],
            [3, "cdkCopyToClipboard", "cdkCopyToClipboardCopied"],
            [
              "src",
              "assets/images/swaps/swaps-info/copy-icon.svg",
              "alt",
              "copy",
              4,
              "ngIf",
            ],
            [
              "src",
              "assets/images/swaps/swaps-info/tick.svg",
              "alt",
              "copied",
              4,
              "ngIf",
            ],
            [
              "src",
              "assets/images/swaps/swaps-info/copy-icon.svg",
              "alt",
              "copy",
            ],
            ["src", "assets/images/swaps/swaps-info/tick.svg", "alt", "copied"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Pd, 1, 0, "app-cross-chain-swap-info", 0),
              e.ɵɵtemplate(1, Ad, 16, 17, "ng-container", 0)),
              2 & t &&
                (e.ɵɵproperty(
                  "ngIf",
                  n.swapType === n.SWAP_PROVIDER_TYPE.CROSS_CHAIN_ROUTING
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.toWalletAddress));
          },
          dependencies: [m.O5, Fr.x, to, tr, Fi.m, E.X$, Od.Y],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.delimiter[_ngcontent-%COMP%]{margin:0 0 15px;background:var(--transaparent-line)}.info-line[_ngcontent-%COMP%]{display:flex;grid-gap:20px;justify-content:space-between;min-height:21px;font-weight:500;font-size:16px}.info-line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:23px;height:23px}.info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.info-line_mb[_ngcontent-%COMP%]{margin-bottom:14px!important}.info-line__value[_ngcontent-%COMP%]{display:flex;grid-gap:8px;align-items:center}.info-line__value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:19px}.info-line__value[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;width:19px;height:19px}.info-line__value_green[_ngcontent-%COMP%]{color:var(--primary-color)}.info-line__value_yellow[_ngcontent-%COMP%]{color:#f3ba2f}.info-line__value_red[_ngcontent-%COMP%]{color:#e83e3f}.title[_ngcontent-%COMP%]{display:flex;grid-gap:13px;align-items:center}app-price-impact-info-line[_ngcontent-%COMP%]{display:block}app-price-impact-info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}@media (max-width: 490px){.info-line[_ngcontent-%COMP%]{flex-direction:column;grid-gap:8px}.info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}.title[_ngcontent-%COMP%]{grid-gap:9px}app-price-impact-info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}}.route-value__icon-next[_ngcontent-%COMP%]{width:8px!important;height:14px!important}.delimiter[_ngcontent-%COMP%]{margin-top:10px}",
          ],
          changeDetection: 0,
        }));
      const Id = function (r) {
        return { "transaction-info__opened": r };
      };
      class rr {
        constructor(t, n, i, a) {
          (this.cdr = t),
            (this.swapInfoService = n),
            (this.swapFormService = i),
            (this.destroy$ = a),
            (this.accordionOpened = !1),
            (this.loading = !1);
        }
        set tradeStatus(t) {
          t === u.LOADING && (this.loading = !0);
        }
        get isInstantTrade() {
          return this.swapType === b.V.INSTANT_TRADE;
        }
        get showTransactionInfo() {
          const { toAmount: t } = this.swapFormService.outputValue;
          return (
            (!this.isInstantTrade ||
              !1 === this.currentInstantTradeInfo?.isWrappedType) &&
            t?.isFinite()
          );
        }
        ngOnInit() {
          this.swapFormService.outputValue$
            .pipe((0, Je.YP)(this.cdr), (0, O.R)(this.destroy$))
            .subscribe(),
            this.swapInfoService.onInfoCalculated$
              .pipe((0, O.R)(this.destroy$))
              .subscribe(() => {
                (this.loading = !1), this.cdr.detectChanges();
              });
        }
      }
      function Nd(r, t) {
        1 & r && e.ɵɵelement(0, "img", 3);
      }
      function Rd(r, t) {
        1 & r && e.ɵɵelement(0, "img", 4);
      }
      (rr.ɵfac = function (t) {
        return new (t || rr)(
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(ze),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (rr.ɵcmp = e.ɵɵdefineComponent({
          type: rr,
          selectors: [["app-swap-info-container"]],
          inputs: {
            swapType: "swapType",
            currentInstantTradeInfo: "currentInstantTradeInfo",
            tradeStatus: "tradeStatus",
          },
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 12,
          vars: 18,
          consts: [
            [
              1,
              "transaction-info",
              3,
              "ngClass",
              "borders",
              "showArrow",
              "noPadding",
              "open",
              "openChange",
            ],
            [1, "transaction-info__header"],
            [
              "src",
              "assets/images/icons/arrow-down.svg",
              "alt",
              "expand",
              1,
              "transaction-info__header-arrow",
            ],
            ["tuiAccordionItemContent", ""],
            [3, "showLoader", "overlay"],
            [1, "swaps-info"],
            [1, "delimiter"],
            [3, "currentOnChainTrade", 4, "ngIf", "ngIfElse"],
            ["crossChainSwapInfo", ""],
            [3, "currentOnChainTrade"],
            [3, "swapType"],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵelementStart(0, "tui-accordion-item", 0),
                e.ɵɵlistener("openChange", function (a) {
                  return (n.accordionOpened = a);
                }),
                e.ɵɵelementStart(1, "div", 1),
                e.ɵɵtext(2),
                e.ɵɵpipe(3, "translate"),
                e.ɵɵelement(4, "img", 2),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(5, "div", 3)(6, "tui-loader", 4)(7, "div", 5),
                e.ɵɵelement(8, "hr", 6),
                e.ɵɵtemplate(9, Ed, 1, 1, "app-instant-trade-swap-info", 7),
                e.ɵɵtemplate(
                  10,
                  Md,
                  1,
                  1,
                  "ng-template",
                  null,
                  8,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵelementEnd()()()()),
              2 & t)
            ) {
              const i = e.ɵɵreference(11);
              e.ɵɵstyleProp(
                "display",
                n.showTransactionInfo ? "block" : "none"
              ),
                e.ɵɵproperty(
                  "ngClass",
                  e.ɵɵpureFunction1(16, Id, n.accordionOpened)
                )("borders", null)("showArrow", !1)("noPadding", !0)(
                  "open",
                  n.accordionOpened
                ),
                e.ɵɵadvance(2),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind1(3, 14, "transactionDetails"),
                  " "
                ),
                e.ɵɵadvance(2),
                e.ɵɵclassProp(
                  "transaction-info__header-arrow_opened",
                  n.accordionOpened
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("showLoader", n.loading)("overlay", !0),
                e.ɵɵadvance(3),
                e.ɵɵproperty("ngIf", n.isInstantTrade)("ngIfElse", i);
            }
          },
          dependencies: [m.mk, m.O5, wt.kM, kr.Kc, kr.ch, er, nr, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.delimiter[_ngcontent-%COMP%]{margin:0 0 15px;background:var(--transaparent-line)}.info-line[_ngcontent-%COMP%]{display:flex;grid-gap:20px;justify-content:space-between;min-height:21px;font-weight:500;font-size:16px}.info-line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:23px;height:23px}.info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.info-line_mb[_ngcontent-%COMP%]{margin-bottom:14px!important}.info-line__value[_ngcontent-%COMP%]{display:flex;grid-gap:8px;align-items:center}.info-line__value[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:19px}.info-line__value[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;width:19px;height:19px}.info-line__value_green[_ngcontent-%COMP%]{color:var(--primary-color)}.info-line__value_yellow[_ngcontent-%COMP%]{color:#f3ba2f}.info-line__value_red[_ngcontent-%COMP%]{color:#e83e3f}.title[_ngcontent-%COMP%]{display:flex;grid-gap:13px;align-items:center}app-price-impact-info-line[_ngcontent-%COMP%]{display:block}app-price-impact-info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}@media (max-width: 490px){.info-line[_ngcontent-%COMP%]{flex-direction:column;grid-gap:8px}.info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}.title[_ngcontent-%COMP%]{grid-gap:9px}app-price-impact-info-line[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}}.route-value__icon-next[_ngcontent-%COMP%]{width:8px!important;height:14px!important}body.hide-unused-ui   [_nghost-%COMP%]{display:none}.transaction-info__header[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:center;width:100%;color:var(--primary-color);font-size:16px;line-height:22px;border-bottom:0;border-radius:20px}.transaction-info__header-hint[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:12px}.transaction-info__header-arrow[_ngcontent-%COMP%]{width:13px;margin-left:12px;transition:.2s ease-in-out}.transaction-info__header-arrow_opened[_ngcontent-%COMP%]{transform:rotate(180deg)}.transaction-info._no-padding[_ngcontent-%COMP%]     .header{padding:0}.transaction-info[_ngcontent-%COMP%]     .header{background:transparent!important;border-bottom:0;border-radius:20px}.transaction-info[_ngcontent-%COMP%]     .content{padding:0 24px 24px}.transaction-info[_ngcontent-%COMP%]    >.wrapper{background:transparent!important;border-color:unset;border-radius:20px}.transaction-info__opened[_ngcontent-%COMP%]    >.wrapper{background:var(--form-background)!important;border:1px solid var(--transparent-line)}.swaps-info[_ngcontent-%COMP%]{color:var(--primary-text)}.swaps-info__title[_ngcontent-%COMP%]{margin:0;font-weight:700;font-size:21px;line-height:125%}",
          ],
          changeDetection: 0,
        }));
      class ir {
        constructor() {
          this.switcherClick = new e.EventEmitter();
        }
      }
      (ir.ɵfac = function (t) {
        return new (t || ir)();
      }),
        (ir.ɵcmp = e.ɵɵdefineComponent({
          type: ir,
          selectors: [["app-form-switcher"]],
          outputs: { switcherClick: "switcherClick" },
          decls: 3,
          vars: 0,
          consts: [
            [1, "switcher", 3, "click"],
            [
              "src",
              "assets/images/icons/swithcer.svg",
              "alt",
              "Switch swaps",
              4,
              "noFrame",
            ],
            [
              "class",
              "switcher__iframe-arrow",
              "src",
              "assets/images/icons/arrow/long-arrow-right.svg",
              "alt",
              "Switch swaps",
              4,
              "onlyFrame",
            ],
            ["src", "assets/images/icons/swithcer.svg", "alt", "Switch swaps"],
            [
              "src",
              "assets/images/icons/arrow/long-arrow-right.svg",
              "alt",
              "Switch swaps",
              1,
              "switcher__iframe-arrow",
            ],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "button", 0),
              e.ɵɵlistener("click", function () {
                return n.switcherClick.emit();
              }),
              e.ɵɵtemplate(1, Nd, 1, 0, "img", 1),
              e.ɵɵtemplate(2, Rd, 1, 0, "img", 2),
              e.ɵɵelementEnd());
          },
          dependencies: [de.a, Fe.T],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}body.hide-unused-ui   [_nghost-%COMP%]{display:none}.switcher[_ngcontent-%COMP%]{z-index:999;display:flex;box-sizing:content-box;width:35px;height:42px;padding:0;background-color:var(--secondary-background);border-radius:67px;cursor:pointer}html.iframe[_nghost-%COMP%]   .switcher[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .switcher[_ngcontent-%COMP%]{height:30px;background-color:unset}.switcher[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:auto}html.iframe-vertical[_nghost-%COMP%]   .switcher__iframe-arrow[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .switcher__iframe-arrow[_ngcontent-%COMP%]{transform:rotate(90deg)}",
          ],
          changeDetection: 0,
        }));
      class or {
        constructor(t) {
          (this.swapTypeService = t),
            (this.isLimitOrder$ = this.swapTypeService.swapMode$.pipe(
              (0, v.U)((n) => n === b.V.LIMIT_ORDER)
            ));
        }
        set amountOfTokens(t) {
          this.amountsArray = this.getAmounts(t);
        }
        getAmounts(t) {
          return t.split("").map((n) =>
            Number.isNaN(Number(n))
              ? n
              : new Array(Number(n) + 1)
                  .fill(null)
                  .map((a, s) => s)
                  .reverse()
                  .join(" ")
          );
        }
      }
      function Bd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "img", 11),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet;
          e.ɵɵadvance(1),
            e.ɵɵproperty("src", n.icon, e.ɵɵsanitizeUrl)("alt", n.label);
        }
      }
      function Fd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 5),
            e.ɵɵelement(1, "img", 12),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2).ngLet;
          e.ɵɵadvance(1),
            e.ɵɵproperty("src", n.icon, e.ɵɵsanitizeUrl)("alt", n.label);
        }
      }
      function Dd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "translate"),
            e.ɵɵelementStart(3, "span"),
            e.ɵɵtext(4),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2).ngLet;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 2, "blockchainSwap.to"),
              " "
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(n.label);
        }
      }
      function Ld(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 4)(2, "div", 5),
            e.ɵɵtemplate(3, Bd, 2, 2, "ng-container", 3),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(4, Fd, 2, 2, "div", 6),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "div", 7)(6, "div", 8),
            e.ɵɵtext(7),
            e.ɵɵpipe(8, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(9, "div", 9)(10, "span"),
            e.ɵɵtext(11),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(12, Dd, 5, 4, "ng-container", 10),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext().ngLet,
            a = e.ɵɵnextContext().ngLet,
            s = e.ɵɵnextContext(2);
          e.ɵɵadvance(3),
            e.ɵɵproperty("ngLet", s.getFirstBlockchainItem(a, i)),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !n),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(" ", e.ɵɵpipeBind1(8, 5, s.swapType$), " "),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate(a.label),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !n);
        }
      }
      function Hd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Ld, 13, 7, "ng-container", 3),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.isLimitOrder$));
        }
      }
      function $d(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Hd, 3, 3, "ng-container", 3),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.toBlockchainItem$));
        }
      }
      function Vd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 2),
            e.ɵɵtemplate(1, $d, 3, 3, "ng-container", 3),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.fromBlockchainItem$));
        }
      }
      function jd(r, t) {
        1 & r && e.ɵɵelement(0, "app-platform-tokens-amount", 13),
          2 & r && e.ɵɵproperty("amountOfTokens", "15,000+");
      }
      (or.ɵfac = function (t) {
        return new (t || or)(e.ɵɵdirectiveInject(ce.H));
      }),
        (or.ɵcmp = e.ɵɵdefineComponent({
          type: or,
          selectors: [["app-platform-tokens-amount"]],
          inputs: { amountOfTokens: "amountOfTokens" },
          decls: 4,
          vars: 5,
          consts: [[1, "platform-tokens-amount"]],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "h3", 0),
              e.ɵɵtext(1),
              e.ɵɵpipe(2, "async"),
              e.ɵɵpipe(3, "translate"),
              e.ɵɵelementEnd()),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind1(2, 1, n.isLimitOrder$)
                    ? "Limit Order"
                    : e.ɵɵpipeBind1(3, 3, "Cross-Chain Swaps"),
                  "\n"
                ));
          },
          dependencies: [m.Ov, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.platform-tokens-amount[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:18px;letter-spacing:.7px}@media (max-width: 420px){.platform-tokens-amount[_ngcontent-%COMP%]{max-width:170px}}.platform-tokens-amount__container[_ngcontent-%COMP%]{display:inline-flex;max-height:18px;overflow:hidden}.platform-tokens-amount_inner-container[_ngcontent-%COMP%]{display:flex;align-items:baseline;color:var(--primary-color)}.platform-tokens-amount_inner-container[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:11px;text-align:center}.platform-tokens-amount_inner-container[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-child(3){width:6px}.platform-tokens-amount_inner-container[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-child(2n){animation:_ngcontent-%COMP%_slide .9s ease-out}.platform-tokens-amount_inner-container[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-child(2n+1){animation:_ngcontent-%COMP%_slide .7s ease-out}@keyframes _ngcontent-%COMP%_slide{0%{transform:translateY(-100%)}to{transform:translateY(0)}}",
          ],
          changeDetection: 0,
        }));
      class ar {
        constructor(t, n) {
          (this.swapTypeService = t),
            (this.swapFormService = n),
            (this.showBlockchains$ = this.swapFormService.inputValue$.pipe(
              (0, v.U)((i) =>
                this.swapTypeService.getSwapProviderType() === b.V.LIMIT_ORDER
                  ? (0, pe.$v)(i.fromAsset) || i.toToken
                  : (0, pe.$v)(i.fromAsset) && i.toToken
              )
            )),
            (this.fromBlockchainItem$ =
              this.swapFormService.fromBlockchain$.pipe((0, v.U)(Lr))),
            (this.toBlockchainItem$ = this.swapFormService.toBlockchain$.pipe(
              (0, v.U)(Lr)
            )),
            (this.swapType$ = this.swapTypeService.swapMode$.pipe(
              (0, v.U)((i) => {
                if (i)
                  return {
                    [b.V.INSTANT_TRADE]: "Instant Trade",
                    [b.V.CROSS_CHAIN_ROUTING]: "Cross-Chain",
                    [b.V.ONRAMPER]: "Onramper",
                    [b.V.LIMIT_ORDER]: "Limit Order",
                  }[i];
              })
            )),
            (this.isLimitOrder$ = this.swapTypeService.swapMode$.pipe(
              (0, v.U)((i) => i === b.V.LIMIT_ORDER)
            ));
        }
        getFirstBlockchainItem(t, n) {
          return this.swapTypeService.getSwapProviderType() ===
            b.V.LIMIT_ORDER && this.swapFormService.inputValue.toToken
            ? n
            : t;
        }
      }
      (ar.ɵfac = function (t) {
        return new (t || ar)(
          e.ɵɵdirectiveInject(ce.H),
          e.ɵɵdirectiveInject(A.q)
        );
      }),
        (ar.ɵcmp = e.ɵɵdefineComponent({
          type: ar,
          selectors: [["app-form-header"]],
          decls: 4,
          vars: 4,
          consts: [
            ["class", "swaps-header", 4, "ngIf", "ngIfElse"],
            ["text", ""],
            [1, "swaps-header"],
            [4, "ngLet"],
            [1, "swaps-header__icons"],
            [1, "swaps-header__icon-wrapper"],
            ["class", "swaps-header__icon-wrapper", 4, "ngIf"],
            [1, "swaps-header__title"],
            [1, "swaps-header__trade-type"],
            [1, "swaps-header__name"],
            [4, "ngIf"],
            [1, "swaps-header__blockchain-from", 3, "src", "alt"],
            [1, "swaps-header__blockchain-to", 3, "src", "alt"],
            [3, "amountOfTokens"],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵtemplate(0, Vd, 3, 3, "div", 0),
                e.ɵɵpipe(1, "async"),
                e.ɵɵtemplate(
                  2,
                  jd,
                  1,
                  1,
                  "ng-template",
                  null,
                  1,
                  e.ɵɵtemplateRefExtractor
                )),
              2 & t)
            ) {
              const i = e.ɵɵreference(3);
              e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(1, 2, n.showBlockchains$))(
                "ngIfElse",
                i
              );
            }
          },
          dependencies: [m.O5, B.e, or, m.Ov, E.X$],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.swaps-header[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.swaps-header__icons[_ngcontent-%COMP%]{display:flex}.swaps-header__icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}.swaps-header__icon-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:35px;height:35px;background:var(--form-background);border-radius:50%}.swaps-header__icon-wrapper[_ngcontent-%COMP%]:nth-child(2){margin-left:-15px}.swaps-header__icon-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.swaps-header__title[_ngcontent-%COMP%]{margin-left:12px;color:var(--primary-text);font-weight:500;font-size:16px}.swaps-header__name[_ngcontent-%COMP%]{color:var(--secondary-text);font-size:14px}",
          ],
          changeDetection: 0,
        }));
      const ro = function (r) {
        return { "slippage__button-auto_active": r };
      };
      function zd(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "form", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(
            4,
            "label"
          ),
            e.ɵɵtext(5),
            e.ɵɵpipe(6, "translate"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(7, "div", 8),
            e.ɵɵpipe(8, "translate"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(9, "div", 9)(10, "button", 10),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.toggleAutoSlippageTolerance());
            }),
            e.ɵɵtext(11, " Auto "),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(12, "tui-input-number", 11),
            e.ɵɵtext(13, "0.15% "),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementStart(14, "div", 12)(15, "label"),
            e.ɵɵtext(16),
            e.ɵɵpipe(17, "translate"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(18, "div", 8),
            e.ɵɵpipe(19, "translate"),
            e.ɵɵelement(20, "tui-toggle", 13),
            e.ɵɵelementEnd()()();
        }
        if (2 & r) {
          const n = t.ngLet;
          e.ɵɵproperty("formGroup", n),
            e.ɵɵadvance(5),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(6, 13, "Slippage tolerance")
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
              "tuiHint",
              e.ɵɵpipeBind1(8, 15, "slippage")
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty(
              "ngClass",
              e.ɵɵpureFunction1(21, ro, n.controls.autoSlippageTolerance.value)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("tuiTextfieldLabelOutside", !0)(
              "tuiTextfieldSize",
              "s"
            )("max", 50)("min", 0.1)("postfix", "%"),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(
                17,
                17,
                "Show Receiver Address"
              )
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
              "tuiHint",
              e.ɵɵpipeBind1(
                19,
                19,
                "showReceiverAddress"
              )
            );
        }
      }
      function Yd(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, zd, 21, 23, "form", 3),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty("ngLet", n.crossChainForm);
        }
      }
      function Wd(r, t) {
        1 & r &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "div", 12)(2, "label"),
          e.ɵɵtext(3),
          e.ɵɵpipe(4, "translate"),
          e.ɵɵelementEnd(),
          e.ɵɵelement(5, "div", 8),
          e.ɵɵpipe(6, "translate"),
          e.ɵɵelement(7, "tui-toggle", 15),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(8, "div", 12)(9, "label"),
          e.ɵɵtext(10),
          e.ɵɵpipe(11, "translate"),
          e.ɵɵelementEnd(),
          e.ɵɵelement(12, "div", 8),
          e.ɵɵpipe(13, "translate"),
          e.ɵɵelement(14, "tui-toggle", 16),
          e.ɵɵelementEnd(),
          e.ɵɵelementContainerEnd()),
          2 & r &&
            (e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(4, 6, "Disable multihops")
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
              "tuiHint",
              e.ɵɵpipeBind1(6, 8, "multihops")
            ),
            e.ɵɵadvance(5),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(11, 10, "Auto-refresh")
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
              "tuiHint",
              e.ɵɵpipeBind1(13, 12, "autoRefresh")
            ));
      }
      function Ud(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "form", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(
            4,
            "label"
          ),
            e.ɵɵtext(5),
            e.ɵɵpipe(6, "translate"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(7, "div", 8),
            e.ɵɵpipe(8, "translate"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(9, "div", 9)(10, "button", 10),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(2);
              return e.ɵɵresetView(a.toggleAutoSlippageTolerance());
            }),
            e.ɵɵtext(11, " Auto "),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(12, "tui-input-number", 11),
            e.ɵɵtext(13, "0.15% "),
            e.ɵɵelementEnd()()()(),
            e.ɵɵelementStart(14, "div", 5),
            e.ɵɵtemplate(15, Wd, 15, 14, "ng-container", 14),
            e.ɵɵelementStart(16, "div", 12)(17, "label"),
            e.ɵɵtext(18),
            e.ɵɵpipe(19, "translate"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(20, "div", 8),
            e.ɵɵpipe(21, "translate"),
            e.ɵɵelement(22, "tui-toggle", 13),
            e.ɵɵelementEnd()()();
        }
        if (2 & r) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵproperty("formGroup", n),
            e.ɵɵadvance(5),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(6, 14, "Slippage tolerance")
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
              "tuiHint",
              e.ɵɵpipeBind1(8, 16, "slippage")
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty(
              "ngClass",
              e.ɵɵpureFunction1(22, ro, n.controls.autoSlippageTolerance.value)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("tuiTextfieldLabelOutside", !0)(
              "tuiTextfieldSize",
              "s"
            )("max", 50)("min", 0.1)("postfix", "%"),
            e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", !i.isCrossChain),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(
                19,
                18,
                "Show Receiver Address"
              )
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("inlineSVG", "/assets/images/icons/hint.svg")(
              "tuiHint",
              e.ɵɵpipeBind1(
                21,
                20,
                "showReceiverAddress"
              )
            );
        }
      }
      function Gd(r, t) {
        if ((1 & r && e.ɵɵtemplate(0, Ud, 23, 24, "form", 3), 2 & r)) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty("ngLet", n.onChainForm);
        }
      }
      class sr {
        constructor(t, n) {
          (this.context = t),
            (this.destroy$ = n),
            (this.settingsService = this.context.content.injector.get(q)),
            (this.swapService = this.context.content.injector.get(ce.H)),
            (this.cdr = this.context.content.injector.get(e.ChangeDetectorRef)),
            (this.onChainForm = this.settingsService.instantTrade),
            (this.crossChainForm = this.settingsService.crossChainRouting),
            (this.isCrossChain =
              this.swapService.swapMode === b.V.CROSS_CHAIN_ROUTING),
            (this.autoSlippageTolerance =
              this.form.controls.autoSlippageTolerance.value),
            this.form.controls.slippageTolerance.valueChanges
              .pipe((0, O.R)(this.destroy$))
              .subscribe(() => {
                this.form.getRawValue().autoSlippageTolerance &&
                  this.form.patchValue({ autoSlippageTolerance: !1 });
              });
        }
        get form() {
          return this.swapService.swapMode === b.V.INSTANT_TRADE
            ? this.onChainForm
            : this.crossChainForm;
        }
        toggleAutoSlippageTolerance() {
          this.form.getRawValue().autoSlippageTolerance
            ? this.form.patchValue({ autoSlippageTolerance: !1 })
            : this.form.patchValue({
                slippageTolerance: this.isCrossChain
                  ? this.settingsService.defaultCcrSettings.slippageTolerance
                  : this.settingsService.defaultItSettings.slippageTolerance,
                autoSlippageTolerance: !0,
              }),
            this.cdr.detectChanges();
        }
      }
      (sr.ɵfac = function (t) {
        return new (t || sr)(
          e.ɵɵdirectiveInject(z.yf),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (sr.ɵcmp = e.ɵɵdefineComponent({
          type: sr,
          selectors: [["app-iframe-settings"]],
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 4,
          vars: 2,
          consts: [
            [1, "iframe-settings"],
            [4, "ngIf", "ngIfElse"],
            ["onChain", ""],
            ["class", "iframe-settings__container", 3, "formGroup", 4, "ngLet"],
            [1, "iframe-settings__container", 3, "formGroup"],
            [1, "iframe-settings__column"],
            [1, "iframe-settings__row", "slippage"],
            [1, "slippage__head"],
            [1, "iframe-settings__hint", 3, "inlineSVG", "tuiHint"],
            [1, "slippage__body"],
            [1, "slippage__button-auto", 3, "ngClass", "click"],
            [
              "id",
              "slippageTolerance",
              "formControlName",
              "slippageTolerance",
              3,
              "tuiTextfieldLabelOutside",
              "tuiTextfieldSize",
              "max",
              "min",
              "postfix",
            ],
            [1, "iframe-settings__row"],
            [
              "id",
              "showReceiverAddress",
              "formControlName",
              "showReceiverAddress",
              1,
              "iframe-settings__toggle",
            ],
            [4, "ngIf"],
            [
              "id",
              "disableMultihops",
              "formControlName",
              "disableMultihops",
              1,
              "iframe-settings__toggle",
            ],
            [
              "id",
              "autoRefresh",
              "formControlName",
              "autoRefresh",
              1,
              "iframe-settings__toggle",
            ],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵelementStart(0, "section", 0),
                e.ɵɵtemplate(1, Yd, 2, 1, "ng-container", 1),
                e.ɵɵtemplate(
                  2,
                  Gd,
                  1,
                  1,
                  "ng-template",
                  null,
                  2,
                  e.ɵɵtemplateRefExtractor
                ),
                e.ɵɵelementEnd()),
              2 & t)
            ) {
              const i = e.ɵɵreference(3);
              e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.isCrossChain)("ngIfElse", i);
            }
          },
          dependencies: [
            m.mk,
            m.O5,
            B.e,
            h.ɵNgNoValidate,
            h.NgControlStatus,
            h.NgControlStatusGroup,
            h.FormGroupDirective,
            h.FormControlName,
            Pr.ph,
            ne,
            rt,
            Y.xT,
            Y.sz,
            G.d$,
            R.D,
            E.X$,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.iframe-settings[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;width:100%;height:100vh;margin:0 auto}.iframe-settings__container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:180px;padding:20px 30px}html.iframe-vertical[_nghost-%COMP%]   .iframe-settings__container[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .iframe-settings__container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;width:350px;height:250px;margin:0 auto;padding-left:55px}html.iframe-vertical[_nghost-%COMP%]   .iframe-settings__container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, html.iframe-vertical   [_nghost-%COMP%]   .iframe-settings__container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{margin-bottom:15px}.iframe-settings__column[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;height:100%}.iframe-settings__column[_ngcontent-%COMP%]:not(:last-child){margin-right:40px}.iframe-settings__row[_ngcontent-%COMP%]{display:flex;align-items:center}html.iframe-vertical[_nghost-%COMP%]   .iframe-settings__row[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .iframe-settings__row[_ngcontent-%COMP%]{font-size:18px}.iframe-settings__row[_ngcontent-%COMP%]:not(:last-child){margin-bottom:15px}.iframe-settings__hint[_ngcontent-%COMP%]{height:19px;margin-right:auto;margin-left:6px;cursor:pointer}html.iframe-vertical[_nghost-%COMP%]   .iframe-settings__hint[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .iframe-settings__hint[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:start;margin-left:3px}html.iframe[_nghost-%COMP%]   .iframe-settings__hint[_ngcontent-%COMP%]     svg path, html.iframe   [_nghost-%COMP%]   .iframe-settings__hint[_ngcontent-%COMP%]     svg path{fill:var(--primary-color)}.iframe-settings__toggle[_ngcontent-%COMP%]{margin-left:10px}.slippage[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.slippage[_ngcontent-%COMP%]   tui-input-number[_ngcontent-%COMP%]{width:80px}html.iframe-vertical[_nghost-%COMP%]   .slippage[_ngcontent-%COMP%]     tui-input-number input, html.iframe-vertical   [_nghost-%COMP%]   .slippage[_ngcontent-%COMP%]     tui-input-number input{font-size:18px}.slippage__head[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:4px}.slippage__body[_ngcontent-%COMP%]{display:flex;align-items:center}.slippage__button-auto[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;height:32px;margin-right:10px;padding:8px 15px;background:none;border:1px solid var(--primary-text);border-radius:20px;cursor:pointer}.slippage__button-auto_active[_ngcontent-%COMP%]{color:#fff;background:var(--primary-color);border-color:var(--primary-color)}.slippage[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield]{padding-right:5px;color:var(--primary-text);border-radius:100px;box-shadow:none}.slippage[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield] input{padding-right:22px!important}.slippage[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield] input, .slippage[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield] input::placeholder{text-align:right}.slippage[_ngcontent-%COMP%]     input+.content .placeholder{text-align:right}.slippage[_ngcontent-%COMP%]     .wrapper{display:flex}.slippage[_ngcontent-%COMP%]     .value-decoration{margin-left:auto}.bridge-address[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.bridge-address__head[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:4px}.bridge-address__body[_ngcontent-%COMP%]{display:flex;align-items:center}.bridge-address[_ngcontent-%COMP%]   tui-input[_ngcontent-%COMP%]{width:100%}.bridge-address[_ngcontent-%COMP%]   tui-input.ng-invalid[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield]:after{color:transparent;border-color:#d82122;opacity:.6}.bridge-address[_ngcontent-%COMP%]     tui-wrapper[data-appearance=textfield]{width:256px;padding:10px;color:var(--primary-text);font-size:14px;border-radius:100px;box-shadow:none}",
          ],
          changeDetection: 0,
        }));
      var Kd = l(89012);
      class cr {
        constructor(t, n) {
          (this.dialogService = t), (this.injector = n);
        }
        openSettings() {
          this.dialogService
            .open(new z.Al(sr, this.injector), { size: "fullscreen" })
            .subscribe();
        }
      }
      function Zd(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 1)(1, "app-rubic-button", 2),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.navigateToSwaps());
            }),
            e.ɵɵtext(2, "Swaps"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "app-rubic-button", 2),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext();
              return e.ɵɵresetView(a.navigateToLimitOrder());
            }),
            e.ɵɵtext(4, "Limit Order"),
            e.ɵɵelementEnd()();
        }
        if (2 & r) {
          const n = t.ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "appearance",
              n !== i.SWAP_PROVIDER_TYPE.LIMIT_ORDER ? "primary" : "secondary"
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "appearance",
              n === i.SWAP_PROVIDER_TYPE.LIMIT_ORDER ? "primary" : "secondary"
            );
        }
      }
      (cr.ɵfac = function (t) {
        return new (t || cr)(
          e.ɵɵdirectiveInject(Ye.RO),
          e.ɵɵdirectiveInject(e.Injector)
        );
      }),
        (cr.ɵcmp = e.ɵɵdefineComponent({
          type: cr,
          selectors: [["app-iframe-settings-button"]],
          decls: 3,
          vars: 6,
          consts: [[3, "icon", "inlineSvg", "iconButtonClick"]],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "app-icon-button", 0),
              e.ɵɵlistener("iconButtonClick", function () {
                return n.openSettings();
              }),
              e.ɵɵpipe(1, "async"),
              e.ɵɵpipe(2, "themedIcon"),
              e.ɵɵelementEnd()),
              2 & t &&
                e.ɵɵproperty(
                  "icon",
                  e.ɵɵpipeBind1(
                    1,
                    2,
                    e.ɵɵpipeBind1(2, 4, "assets/images/icons/header/settings")
                  )
                )("inlineSvg", !0);
          },
          dependencies: [Rr.r, m.Ov, Kd.S],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{position:absolute;top:15px;right:10px;z-index:999;display:block}app-icon-button[_ngcontent-%COMP%]     button{width:40px!important;height:40px!important}html.iframe:not(.dark)[_nghost-%COMP%]   app-icon-button[_ngcontent-%COMP%]     button svg path, html.iframe:not(.dark)   [_nghost-%COMP%]   app-icon-button[_ngcontent-%COMP%]     button svg path{fill:var(--primary-color)}app-icon-button[_ngcontent-%COMP%]     button tui-wrapper{background:var(--primary-background)}app-icon-button[_ngcontent-%COMP%]     button svg{width:19.8px;height:19.8px}",
          ],
          changeDetection: 0,
        }));
      class lr {
        constructor(t) {
          (this.swapTypeService = t),
            (this.swapType$ = this.swapTypeService.swapMode$),
            (this.SWAP_PROVIDER_TYPE = b.V);
        }
        navigateToSwaps() {
          var t = this;
          return (0, T.Z)(function* () {
            yield t.swapTypeService.navigateToSwaps();
          })();
        }
        navigateToLimitOrder() {
          var t = this;
          return (0, T.Z)(function* () {
            yield t.swapTypeService.navigateToLimitOrder();
          })();
        }
      }
      function Xd(r, t) {
        1 & r && e.ɵɵelement(0, "app-iframe-settings-button");
      }
      function Qd(r, t) {
        1 & r && e.ɵɵelement(0, "app-form-navigation");
      }
      function Jd(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 16)(1, "app-back-button", 17),
            e.ɵɵlistener("onClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.closeWidget());
            }),
            e.ɵɵelementEnd()();
        }
      }
      function qd(r, t) {
        1 & r && e.ɵɵelement(0, "app-form-header", 23);
      }
      function em(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-refresh-button", 24),
            e.ɵɵlistener("onRefresh", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(4);
              return e.ɵɵresetView(a.onRefresh());
            }),
            e.ɵɵelementEnd();
        }
        if (2 & r) {
          const n = e.ɵɵnextContext(4);
          e.ɵɵproperty("isRotating$", n.isRefreshRotating$);
        }
      }
      function tm(r, t) {
        1 & r && e.ɵɵelement(0, "app-settings-container", 25);
      }
      function nm(r, t) {
        1 & r && e.ɵɵelement(0, "app-iframe-logout-button");
      }
      function rm(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "header", 18),
            e.ɵɵtemplate(1, qd, 1, 0, "app-form-header", 19),
            e.ɵɵelementStart(2, "div", 20),
            e.ɵɵtemplate(3, em, 1, 1, "app-refresh-button", 21),
            e.ɵɵtemplate(4, tm, 1, 0, "app-settings-container", 22),
            e.ɵɵtemplate(5, nm, 1, 0, "app-iframe-logout-button", 1),
            e.ɵɵpipe(6, "async"),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2).ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵproperty(
              "ngIf",
              (i.isInstantTrade || i.isCrossChainRouting || i.isOnramper) &&
                n &&
                i.allowRefresh
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !i.isOnramper && !i.isLimitOrder),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(6, 3, i.hideUnusedUI && i.getCurrentUser$)
            );
        }
      }
      function im(r, t) {
        if (
          (1 & r && e.ɵɵelement(0, "app-iframe-asset-type-indicator", 26),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵproperty("assetType", n.getFromBlockchain());
        }
      }
      function om(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-token-amount-input", 27),
            e.ɵɵlistener("amountUpdated", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.onFromAmountUpdate());
            }),
            e.ɵɵelementEnd();
        }
      }
      function am(r, t) {
        1 & r && e.ɵɵelement(0, "app-vertical-iframe-token-amount-input");
      }
      function sm(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-form-switcher", 28),
            e.ɵɵlistener("switcherClick", function () {
              e.ɵɵrestoreView(n);
              const a = e.ɵɵnextContext(3);
              return e.ɵɵresetView(a.revert());
            }),
            e.ɵɵelementEnd();
        }
      }
      function cm(r, t) {
        if (
          (1 & r && e.ɵɵelement(0, "app-iframe-asset-type-indicator", 26),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵproperty("assetType", n.toBlockchain);
        }
      }
      function lm(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-instant-trade-bottom-form", 29),
            e.ɵɵlistener("allowRefreshChange", function (a) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext(3);
              return e.ɵɵresetView((s.allowRefresh = a));
            })("instantTradeInfoChange", function (a) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext(3);
              return e.ɵɵresetView((s.currentInstantTradeInfo = a));
            })("tradeStatusChange", function (a) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext(3);
              return e.ɵɵresetView((s.tradeStatus = a));
            }),
            e.ɵɵelementEnd();
        }
      }
      function pm(r, t) {
        if (1 & r) {
          const n = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "app-cross-chain-bottom-form", 30),
            e.ɵɵlistener("tradeStatusChange", function (a) {
              e.ɵɵrestoreView(n);
              const s = e.ɵɵnextContext(3);
              return e.ɵɵresetView((s.tradeStatus = a));
            }),
            e.ɵɵelementEnd();
        }
      }
      function dm(r, t) {
        1 & r && e.ɵɵelement(0, "app-onramper-bottom-form");
      }
      function mm(r, t) {
        1 & r && e.ɵɵelement(0, "app-onramper-widget");
      }
      function _m(r, t) {
        if (
          (1 & r && e.ɵɵelement(0, "app-limit-order-bottom-form", 31), 2 & r)
        ) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵproperty("fromAmountUpdated$", n.fromAmountUpdated$);
        }
      }
      (lr.ɵfac = function (t) {
        return new (t || lr)(e.ɵɵdirectiveInject(ce.H));
      }),
        (lr.ɵcmp = e.ɵɵdefineComponent({
          type: lr,
          selectors: [["app-form-navigation"]],
          decls: 2,
          vars: 3,
          consts: [
            ["class", "buttons-container", 4, "ngLet"],
            [1, "buttons-container"],
            [3, "appearance", "onClick"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Zd, 5, 2, "div", 0), e.ɵɵpipe(1, "async")),
              2 & t && e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(1, 1, n.swapType$));
          },
          dependencies: [ie.j, B.e, m.Ov],
          styles: [
            ".buttons-container[_ngcontent-%COMP%]{display:flex;grid-gap:8px;justify-content:center}.buttons-container[_ngcontent-%COMP%]   app-rubic-button[_ngcontent-%COMP%]{display:block;width:100%;max-width:160px}.buttons-container[_ngcontent-%COMP%]   app-rubic-button[_ngcontent-%COMP%]    {--tui-height-l: 36px}.buttons-container[_ngcontent-%COMP%]   app-rubic-button[_ngcontent-%COMP%]     .wrapper{padding:0}.buttons-container[_ngcontent-%COMP%]   app-rubic-button[_ngcontent-%COMP%]     .content{font-size:14px}",
          ],
          changeDetection: 0,
        }));
      const um = function (r) {
          return { "background-color": r };
        },
        gm = function (r, t) {
          return { "swap-form_extended": r, "swap-form_limit-order": t };
        },
        hm = function (r) {
          return { "swap-form__delimiter_full": r };
        };
      function fm(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Jd, 2, 0, "div", 4),
            e.ɵɵelementStart(2, "div", 5),
            e.ɵɵtemplate(3, rm, 7, 5, "header", 6),
            e.ɵɵelementStart(4, "main", 7)(5, "div", 8),
            e.ɵɵtemplate(6, im, 1, 1, "app-iframe-asset-type-indicator", 9),
            e.ɵɵtemplate(7, om, 1, 0, "app-token-amount-input", 10),
            e.ɵɵtemplate(
              8,
              am,
              1,
              0,
              "app-vertical-iframe-token-amount-input",
              0
            ),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(9, "div", 11),
            e.ɵɵtemplate(10, sm, 1, 0, "app-form-switcher", 12),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(11, "div", 8),
            e.ɵɵtemplate(12, cm, 1, 1, "app-iframe-asset-type-indicator", 9),
            e.ɵɵtemplate(13, lm, 1, 0, "app-instant-trade-bottom-form", 13),
            e.ɵɵtemplate(14, pm, 1, 0, "app-cross-chain-bottom-form", 14),
            e.ɵɵtemplate(15, dm, 1, 0, "app-onramper-bottom-form", 1),
            e.ɵɵelementEnd()(),
            e.ɵɵtemplate(16, mm, 1, 0, "app-onramper-widget", 1),
            e.ɵɵpipe(17, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(18, _m, 1, 1, "app-limit-order-bottom-form", 15),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = t.ngLet,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngStyle",
              e.ɵɵpureFunction1(16, um, i.backgroundColor)
            )("ngClass", e.ɵɵpureFunction2(18, gm, n, i.isLimitOrder)),
            e.ɵɵadvance(4),
            e.ɵɵproperty("onlyFrame", "horizontal"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("noFrame", "vertical"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("onlyFrame", "vertical"),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngClass",
              e.ɵɵpureFunction1(21, hm, !i.showTokenSwitcher)
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", i.showTokenSwitcher),
            e.ɵɵadvance(2),
            e.ɵɵproperty("onlyFrame", "horizontal"),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", i.isInstantTrade),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", i.isCrossChainRouting),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", i.isOnramper),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(17, 14, i.onramperWidgetOpened$)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", i.isLimitOrder);
        }
      }
      function Cm(r, t) {
        if ((1 & r && e.ɵɵelement(0, "app-swap-info-container", 33), 2 & r)) {
          const n = e.ɵɵnextContext(3);
          e.ɵɵproperty("swapType", n.swapType)(
            "currentInstantTradeInfo",
            n.currentInstantTradeInfo
          )("tradeStatus", n.tradeStatus);
        }
      }
      function vm(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Cm, 1, 3, "app-swap-info-container", 32),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext().ngLet,
            i = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", n && !i.isOnramper && !i.isLimitOrder);
        }
      }
      function bm(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, fm, 19, 23, "ng-container", 2),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(3, vm, 2, 1, "ng-container", 3),
            e.ɵɵelementContainerEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(2, 1, n.onramperWidgetOpened$));
        }
      }
      class pr {
        constructor(t, n, i, a, s, c, p, d, _, f, x, P, S) {
          (this.swapTypeService = t),
            (this.swapFormService = n),
            (this.settingsService = i),
            (this.cdr = a),
            (this.headerStore = s),
            (this.translateService = c),
            (this.notificationsService = p),
            (this.gtmService = d),
            (this.authService = _),
            (this.queryParamsService = f),
            (this.onramperFormService = x),
            (this.refreshService = P),
            (this.destroy$ = S),
            (this.allowRefresh = !0),
            (this.backgroundColor = this.queryParamsService.backgroundColor),
            (this.hideUnusedUI = this.queryParamsService.hideUnusedUI),
            (this.isFormFilled$ = this.swapFormService.isFilled$),
            (this.getCurrentUser$ = this.authService.currentUser$),
            (this.onramperWidgetOpened$ =
              this.onramperFormService.widgetOpened$),
            (this._fromAmountUpdated$ = new _e.x()),
            (this.fromAmountUpdated$ = this._fromAmountUpdated$.asObservable()),
            (this.isRefreshRotating$ = this.refreshService.isRefreshRotating$);
        }
        get isInstantTrade() {
          return this.swapTypeService.swapMode === b.V.INSTANT_TRADE;
        }
        get isCrossChainRouting() {
          return this.swapTypeService.swapMode === b.V.CROSS_CHAIN_ROUTING;
        }
        get isOnramper() {
          return this.swapTypeService.swapMode === b.V.ONRAMPER;
        }
        get showTokenSwitcher() {
          return !(
            this.isOnramper ||
            (this.toBlockchain !== o.BLOCKCHAIN_NAME.TRON &&
              !o.BlockchainsInfo.isEvmBlockchainName(this.toBlockchain))
          );
        }
        get isLimitOrder() {
          return this.swapTypeService.swapMode === b.V.LIMIT_ORDER;
        }
        ngOnInit() {
          this.swapTypeService.swapMode$
            .pipe((0, le.x)(), (0, O.R)(this.destroy$))
            .subscribe((t) => {
              this.swapType = t;
            }),
            this.swapFormService.inputValue$
              .pipe((0, O.R)(this.destroy$))
              .subscribe((t) => {
                this.setFormValues(t);
              }),
            this.watchGtmEvents();
        }
        ngOnDestroy() {
          this.settingsService.saveSettingsToLocalStorage();
        }
        setFormValues(t) {
          (this.fromAssetType = t.fromAssetType),
            (this.toBlockchain = t.toBlockchain);
        }
        revert() {
          var t = this;
          return (0, T.Z)(function* () {
            const {
              fromAssetType: n,
              toBlockchain: i,
              fromAsset: a,
              toToken: s,
              fromAmount: c,
            } = t.swapFormService.inputValue;
            if (!o.BlockchainsInfo.isBlockchainName(n) || !(0, pe.$v)(a))
              return;
            const { toAmount: p } = t.swapFormService.outputValue;
            t.swapFormService.inputControl.patchValue({
              fromAssetType: i,
              fromAsset: s,
              toToken: a,
              toBlockchain: n,
              ...(p?.gt(0) && { fromAmount: p }),
            }),
              t.swapFormService.outputControl.patchValue({
                toAmount:
                  t.swapTypeService.swapMode === b.V.LIMIT_ORDER
                    ? c
                    : new M.Z(NaN),
              });
          })();
        }
        notifyBeta() {
          const t = this.translateService.instant("solanaBeta");
          this.notificationsService.show(t, {
            status: "warning",
            autoClose: 1e4,
          });
        }
        watchGtmEvents() {
          this.gtmService.fetchPassedFormSteps(),
            this.gtmService.startGtmSession(),
            this.swapFormService.inputValue$
              .pipe(
                (0, v.U)((t) => [
                  t?.fromAsset?.symbol || null,
                  t?.toToken?.symbol || null,
                ]),
                (0, le.x)(J.t),
                (0, Co.M)(this.swapTypeService.swapMode$),
                (0, O.R)(this.destroy$)
              )
              .subscribe(([[t, n], i]) => {
                i !== b.V.INSTANT_TRADE ||
                  i !== b.V.INSTANT_TRADE ||
                  (this.gtmService.isGtmSessionActive ||
                    this.gtmService.clearPassedFormSteps(),
                  this.gtmService.needTrackFormEventsNow
                    ? (t && this.gtmService.updateFormStep(i, "token1"),
                      n && this.gtmService.updateFormStep(i, "token2"))
                    : (this.gtmService.needTrackFormEventsNow = !0));
              });
        }
        getFromBlockchain() {
          if ("fiat" === this.fromAssetType)
            throw new V.q("From asset type is fiat");
          return this.fromAssetType;
        }
        closeWidget() {
          this.onramperFormService.widgetOpened = !1;
        }
        onFromAmountUpdate() {
          this._fromAmountUpdated$.next();
        }
        onRefresh() {
          this.refreshService.onButtonClick();
        }
      }
      function xm(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 5)(1, "div", 17)(2, "div", 7),
            e.ɵɵtext(3),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "div", 8),
            e.ɵɵtext(5),
            e.ɵɵelement(6, "button", 19),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(7, "div", 31),
            e.ɵɵelement(8, "img", 32),
            e.ɵɵtext(9),
            e.ɵɵelementEnd()()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(n.trade.extraField.name),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(" ", n.trade.extraField.value, " "),
            e.ɵɵadvance(1),
            e.ɵɵproperty("cdkCopyToClipboard", n.trade.extraField.value),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2(
              " Please don\u2019t forget to specify the ",
              n.trade.extraField.name,
              " while sending the ",
              n.trade.fromToken.symbol,
              " transaction for the exchange "
            );
        }
      }
      function ym(r, t) {
        1 & r &&
          (e.ɵɵelementStart(0, "div", 33),
          e.ɵɵtext(
            1,
            " If your transaction seems to be taking longer than normal (more than 10 minutes), please contact our Support Team at "
          ),
          e.ɵɵelementStart(2, "span", 23),
          e.ɵɵtext(3, "support@rubic.exchange"),
          e.ɵɵelementEnd(),
          e.ɵɵtext(4, ". "),
          e.ɵɵelementEnd());
      }
      (pr.ɵfac = function (t) {
        return new (t || pr)(
          e.ɵɵdirectiveInject(ce.H),
          e.ɵɵdirectiveInject(A.q),
          e.ɵɵdirectiveInject(q),
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(fr.N),
          e.ɵɵdirectiveInject(E.sK),
          e.ɵɵdirectiveInject(rn.T),
          e.ɵɵdirectiveInject(Ot.k),
          e.ɵɵdirectiveInject(j.e),
          e.ɵɵdirectiveInject(Be.E),
          e.ɵɵdirectiveInject(Pe),
          e.ɵɵdirectiveInject(ke),
          e.ɵɵdirectiveInject(k.a3, 2)
        );
      }),
        (pr.ɵcmp = e.ɵɵdefineComponent({
          type: pr,
          selectors: [["app-swap-form"]],
          features: [e.ɵɵProvidersFeature([k.a3])],
          decls: 4,
          vars: 4,
          consts: [
            [4, "onlyFrame"],
            [4, "ngIf"],
            [4, "ngLet"],
            [4, "noFrame"],
            ["class", "close-widget-button", 4, "ngIf"],
            [1, "swap-form", 3, "ngStyle", "ngClass"],
            ["class", "swap-form__header", 4, "noFrame"],
            [1, "swap-form__content"],
            [1, "swap-form__block"],
            [3, "assetType", 4, "onlyFrame"],
            [3, "amountUpdated", 4, "noFrame"],
            [1, "swap-form__delimiter", 3, "ngClass"],
            [3, "switcherClick", 4, "ngIf"],
            [
              3,
              "allowRefreshChange",
              "instantTradeInfoChange",
              "tradeStatusChange",
              4,
              "ngIf",
            ],
            [3, "tradeStatusChange", 4, "ngIf"],
            [3, "fromAmountUpdated$", 4, "ngIf"],
            [1, "close-widget-button"],
            [3, "onClick"],
            [1, "swap-form__header"],
            ["class", "swap-form__blockchains", 4, "noFrame"],
            [1, "swap-form__settings-wrapper"],
            [
              "class",
              "swap-form__refresh",
              "mode",
              "swaps",
              3,
              "isRotating$",
              "onRefresh",
              4,
              "ngIf",
            ],
            ["class", "swap-form__settings", 4, "ngIf"],
            [1, "swap-form__blockchains"],
            [
              "mode",
              "swaps",
              1,
              "swap-form__refresh",
              3,
              "isRotating$",
              "onRefresh",
            ],
            [1, "swap-form__settings"],
            [3, "assetType"],
            [3, "amountUpdated"],
            [3, "switcherClick"],
            [
              3,
              "allowRefreshChange",
              "instantTradeInfoChange",
              "tradeStatusChange",
            ],
            [3, "tradeStatusChange"],
            [3, "fromAmountUpdated$"],
            [
              3,
              "swapType",
              "currentInstantTradeInfo",
              "tradeStatus",
              4,
              "ngIf",
            ],
            [3, "swapType", "currentInstantTradeInfo", "tradeStatus"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵtemplate(0, Xd, 1, 0, "app-iframe-settings-button", 0),
              e.ɵɵtemplate(1, Qd, 1, 0, "app-form-navigation", 1),
              e.ɵɵtemplate(2, bm, 4, 3, "ng-container", 2),
              e.ɵɵpipe(3, "async")),
              2 & t &&
                (e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", !n.hideUnusedUI),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngLet", e.ɵɵpipeBind1(3, 2, n.isFormFilled$)));
          },
          dependencies: [
            Mt,
            bn,
            m.mk,
            m.O5,
            m.PC,
            B.e,
            de.a,
            Fe.T,
            Qe,
            _s.d,
            ct,
            us.t,
            Rn,
            Hn,
            Vn,
            jn,
            Xn,
            qn,
            rr,
            ir,
            ar,
            cr,
            lr,
            m.Ov,
          ],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}[_nghost-%COMP%]{position:relative;display:block;max-width:565px;margin:0 auto}html.iframe   [_nghost-%COMP%]{width:100%}html.iframe-horizontal   [_nghost-%COMP%]{max-width:unset}body.hide-unused-ui   [_nghost-%COMP%]{display:inline}.swap-form[_ngcontent-%COMP%]{position:relative;min-height:200px;margin-bottom:20px;padding:24px;background:var(--form-background);border:1px solid var(--transparent-line);border-radius:19px}html.iframe-horizontal[_nghost-%COMP%]   .swap-form[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .swap-form[_ngcontent-%COMP%]{display:flex;align-items:flex-end;min-height:180px;margin-bottom:0;padding:0 20px 55px}html.iframe-vertical[_nghost-%COMP%]   .swap-form[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .swap-form[_ngcontent-%COMP%]{width:350px;height:500px;margin-bottom:0;padding:80px 10px 15px}html.iframe:not(.dark)[_nghost-%COMP%]   .swap-form[_ngcontent-%COMP%], html.iframe:not(.dark)   [_nghost-%COMP%]   .swap-form[_ngcontent-%COMP%]{background-color:#fff}body.hide-unused-ui[_nghost-%COMP%]   .swap-form[_ngcontent-%COMP%], body.hide-unused-ui   [_nghost-%COMP%]   .swap-form[_ngcontent-%COMP%]{margin:0}.swap-form_extended[_ngcontent-%COMP%]{height:660px}.swap-form_limit-order[_ngcontent-%COMP%]{min-height:auto;margin-bottom:0;padding:24px 24px 0;border-bottom:0;border-radius:19px 19px 0 0}.swap-form[_ngcontent-%COMP%] ~ *[_ngcontent-%COMP%]:not(:last-child){display:block;margin-bottom:35px}.swap-form__header[_ngcontent-%COMP%]{display:flex;grid-gap:20px;align-items:center;justify-content:space-between;min-height:40px}.swap-form__title[_ngcontent-%COMP%]{margin:0 10px 0 0;color:var(--primary-text);font-weight:300;font-size:24px;letter-spacing:1.5px}.swap-form__settings-wrapper[_ngcontent-%COMP%]{display:flex}body.hide-unused-ui[_nghost-%COMP%]   .swap-form__settings-wrapper[_ngcontent-%COMP%], body.hide-unused-ui   [_nghost-%COMP%]   .swap-form__settings-wrapper[_ngcontent-%COMP%]{margin:0}.swap-form__settings[_ngcontent-%COMP%]{display:flex;margin-left:10px;cursor:pointer}.swap-form__delimiter[_ngcontent-%COMP%]{position:relative;background-color:var(--primary-background)}html.iframe-horizontal[_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 5px;background-color:unset}html.iframe-vertical[_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:0;background:transparent}body.hide-unused-ui[_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]:before, body.hide-unused-ui   [_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]:before{width:100%}body.hide-unused-ui[_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]:after, body.hide-unused-ui   [_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]:after{width:0}.swap-form__delimiter[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%,-50%)}html.iframe-horizontal[_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:static;left:unset;transform:unset}html.iframe-vertical[_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:static;left:unset;transform:none}html.iframe-vertical[_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]:before, html.iframe-vertical   [_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]:before, html.iframe-vertical[_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]:after, html.iframe-vertical   [_nghost-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]:after{display:none}.swap-form__delimiter[_ngcontent-%COMP%]:after{right:0}.swap-form__delimiter_full[_ngcontent-%COMP%]:before{width:100%}.swap-form__delimiter_full[_ngcontent-%COMP%]:after{display:none}.swap-form_limit-order[_ngcontent-%COMP%]   .swap-form__delimiter[_ngcontent-%COMP%]{z-index:99999}.swap-form__content[_ngcontent-%COMP%]{margin-top:30px}html.iframe-horizontal[_nghost-%COMP%]   .swap-form__content[_ngcontent-%COMP%], html.iframe-horizontal   [_nghost-%COMP%]   .swap-form__content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;height:50px;margin-top:0}html.iframe-vertical[_nghost-%COMP%]   .swap-form__content[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .swap-form__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%;margin-top:0}html.iframe[_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]{display:flex}html.iframe[_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]   app-iframe-asset-type-indicator[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]   app-iframe-asset-type-indicator[_ngcontent-%COMP%]{margin-right:10px}html.iframe-vertical[_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]   app-instant-trade-bottom-form[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]   app-instant-trade-bottom-form[_ngcontent-%COMP%], html.iframe-vertical[_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]   app-bridge-bottom-form[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]   app-bridge-bottom-form[_ngcontent-%COMP%], html.iframe-vertical[_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]   app-cross-chain-bottom-form[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]   app-cross-chain-bottom-form[_ngcontent-%COMP%], html.iframe-vertical[_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]   app-onramper-bottom-form[_ngcontent-%COMP%], html.iframe-vertical   [_nghost-%COMP%]   .swap-form__block[_ngcontent-%COMP%]   app-onramper-bottom-form[_ngcontent-%COMP%]{width:100%}.swap-form[_ngcontent-%COMP%]   app-onramper-widget[_ngcontent-%COMP%]{position:absolute;top:-1px;left:-1px;z-index:9999;display:block}app-swap-info-container[_ngcontent-%COMP%], app-analytics-link[_ngcontent-%COMP%]{display:block;margin-bottom:20px!important}.close-widget-button[_ngcontent-%COMP%]{display:none;width:42px;margin-bottom:13px}.close-widget-button[_ngcontent-%COMP%]     app-rubic-button tui-wrapper{background:var(--form-background)}@media (max-width: 768px){.close-widget-button[_ngcontent-%COMP%]{display:block}}@media (max-width: 651px){.swap-form[_ngcontent-%COMP%]{position:relative;padding:20px 0}.swap-form__content[_ngcontent-%COMP%]{margin-top:0}.swap-form__header[_ngcontent-%COMP%]{padding:0 20px}.swap-form__title[_ngcontent-%COMP%]{display:none}.swap-form__delimiter[_ngcontent-%COMP%]:before, .swap-form__delimiter[_ngcontent-%COMP%]:after{width:calc(50% - 37px)}.swap-form__delimiter[_ngcontent-%COMP%]:before{left:20px}.swap-form__delimiter[_ngcontent-%COMP%]:after{right:20px}.swap-form__delimiter_full[_ngcontent-%COMP%]:before{width:calc(100% - 40px)}}app-form-navigation[_ngcontent-%COMP%]{display:none}@media (max-width: 1140px){app-form-navigation[_ngcontent-%COMP%]{display:block;margin-bottom:8px}html.iframe[_nghost-%COMP%]   app-form-navigation[_ngcontent-%COMP%], html.iframe   [_nghost-%COMP%]   app-form-navigation[_ngcontent-%COMP%]{display:none}}",
          ],
          changeDetection: 0,
        }));
      class dr {
        constructor(t, n, i) {
          (this.router = t),
            (this.changenowPostTradeService = n),
            (this.tokensService = i),
            (this.DEFAULT_TOKEN_IMAGE = on.k),
            (this.trade = this.changenowPostTradeService.trade),
            this.trade
              ? this.changenowPostTradeService.setupUpdate()
              : this.router.navigate(["/"], { queryParamsHandling: "merge" });
        }
        getBlockchainLabel(t) {
          return We.h[t];
        }
        onImageError(t) {
          this.tokensService.onTokenImageError(t);
        }
        navigateToSwaps() {
          var t = this;
          return (0, T.Z)(function* () {
            yield t.router.navigate(["/"], { queryParamsHandling: "merge" });
          })();
        }
      }
      (dr.ɵfac = function (t) {
        return new (t || dr)(
          e.ɵɵdirectiveInject(hr.F0),
          e.ɵɵdirectiveInject(tt),
          e.ɵɵdirectiveInject(De.H)
        );
      }),
        (dr.ɵcmp = e.ɵɵdefineComponent({
          type: dr,
          selectors: [["app-changenow-post-form"]],
          decls: 67,
          vars: 24,
          consts: [
            [1, "block-container"],
            [1, "arrow-back", 3, "click"],
            ["src", "assets/images/icons/arrow-back.svg", "alt", "go back"],
            [1, "header"],
            [1, "rows"],
            [1, "row"],
            [1, "row-item", "row-item_small"],
            [1, "row-item__header"],
            [1, "row-item__value"],
            [1, "break-word"],
            ["alt", "token", 3, "src", "error"],
            [1, "tokens-diagram"],
            [1, "token-diagram"],
            [1, "token-diagram__meta-text"],
            [1, "token-diagram__symbol"],
            [1, "token-diagram__chain"],
            [
              "src",
              "assets/images/icons/arrow-long.svg",
              "alt",
              "swap arrow",
              1,
              "tokens-diagram__arrow",
            ],
            [1, "row-item"],
            [1, "row-item__value", "break-word"],
            [
              "inlineSVG",
              "assets/images/icons/copy.svg",
              1,
              "copy-icon",
              "copy-icon_green",
              3,
              "cdkCopyToClipboard",
            ],
            ["class", "row", 4, "ngIf"],
            [1, "estimated-time"],
            [
              "src",
              "assets/images/icons/exclamation-grey.svg",
              "alt",
              "info",
              1,
              "info-icon",
              3,
              "tuiHint",
              "tuiHintShowDelay",
              "tuiHintMode",
            ],
            [1, "primary-text"],
            [1, "delimiter"],
            [1, "bottom-row"],
            [1, "bottom-row__header"],
            [1, "bottom-row__value"],
            [
              "src",
              "assets/images/icons/copy.svg",
              "alt",
              "copy",
              1,
              "copy-icon",
              3,
              "cdkCopyToClipboard",
            ],
            [1, "bottom-row__value", "break-word"],
            ["contactSupportHint", ""],
            [1, "additional-info"],
            [
              "src",
              "assets/images/icons/exclamation-grey.svg",
              "alt",
              "info",
              1,
              "info-icon",
            ],
            [1, "contact-support-hint"],
          ],
          template: function (t, n) {
            if (
              (1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "button", 1),
                e.ɵɵlistener("click", function () {
                  return n.navigateToSwaps();
                }),
                e.ɵɵelement(2, "img", 2),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(3, "div", 3),
                e.ɵɵtext(4, "Please send the funds you would like to exchange"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(
                  8,
                  "div",
                  7
                ),
                e.ɵɵtext(9, "Amount"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(10, "div", 8)(11, "span", 9),
                e.ɵɵtext(12),
                e.ɵɵpipe(13, "bigNumberFormat"),
                e.ɵɵelementEnd(),
                e.ɵɵtext(14),
                e.ɵɵelementStart(15, "img", 10),
                e.ɵɵlistener("error", function (a) {
                  return n.onImageError(a);
                }),
                e.ɵɵelementEnd()()(),
                e.ɵɵelementStart(16, "div", 11)(17, "div", 12)(18, "img", 10),
                e.ɵɵlistener("error", function (a) {
                  return n.onImageError(a);
                }),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(19, "div", 13)(20, "div", 14),
                e.ɵɵtext(21),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(22, "div", 15),
                e.ɵɵtext(23),
                e.ɵɵelementEnd()()(),
                e.ɵɵelement(24, "img", 16),
                e.ɵɵelementStart(25, "div", 12)(26, "img", 10),
                e.ɵɵlistener("error", function (a) {
                  return n.onImageError(a);
                }),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(27, "div", 13)(28, "div", 14),
                e.ɵɵtext(29),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(30, "div", 15),
                e.ɵɵtext(31),
                e.ɵɵelementEnd()()()()(),
                e.ɵɵelementStart(32, "div", 5)(33, "div", 17)(34, "div", 7),
                e.ɵɵtext(35, "To this address"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(36, "div", 18),
                e.ɵɵtext(37),
                e.ɵɵelement(38, "button", 19),
                e.ɵɵelementEnd()()(),
                e.ɵɵtemplate(39, xm, 10, 5, "div", 20),
                e.ɵɵelementStart(40, "div", 5)(41, "div", 21),
                e.ɵɵelement(42, "img", 22),
                e.ɵɵtext(43, " Estimated Arrival "),
                e.ɵɵelementStart(44, "span", 23),
                e.ɵɵtext(45, "~10 minutes"),
                e.ɵɵelementEnd()()()(),
                e.ɵɵelement(46, "hr", 24),
                e.ɵɵelementStart(47, "div", 25)(48, "div", 26),
                e.ɵɵtext(49, "Transaction ID"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(50, "div", 27),
                e.ɵɵtext(51),
                e.ɵɵelementStart(52, "button"),
                e.ɵɵelement(53, "img", 28),
                e.ɵɵelementEnd()()(),
                e.ɵɵelementStart(54, "div", 25)(55, "div", 26),
                e.ɵɵtext(56, "You get"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(57, "div", 27),
                e.ɵɵtext(58),
                e.ɵɵpipe(59, "bigNumberFormat"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(60, "div", 25)(61, "div", 26),
                e.ɵɵtext(62, "Recipient Wallet"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(63, "div", 29),
                e.ɵɵtext(64),
                e.ɵɵelementEnd()()(),
                e.ɵɵtemplate(
                  65,
                  ym,
                  5,
                  0,
                  "ng-template",
                  null,
                  30,
                  e.ɵɵtemplateRefExtractor
                )),
              2 & t)
            ) {
              const i = e.ɵɵreference(66);
              e.ɵɵadvance(12),
                e.ɵɵtextInterpolate(e.ɵɵpipeBind1(13, 20, n.trade.fromAmount)),
                e.ɵɵadvance(2),
                e.ɵɵtextInterpolate1(" ", n.trade.fromToken.symbol, " "),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "src",
                  n.trade.fromToken.image || n.DEFAULT_TOKEN_IMAGE,
                  e.ɵɵsanitizeUrl
                ),
                e.ɵɵadvance(3),
                e.ɵɵproperty(
                  "src",
                  n.trade.fromToken.image || n.DEFAULT_TOKEN_IMAGE,
                  e.ɵɵsanitizeUrl
                ),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate(n.trade.fromToken.symbol),
                e.ɵɵadvance(2),
                e.ɵɵtextInterpolate1(
                  " ",
                  n.getBlockchainLabel(n.trade.fromToken.blockchain),
                  " "
                ),
                e.ɵɵadvance(3),
                e.ɵɵproperty(
                  "src",
                  n.trade.toToken.image || n.DEFAULT_TOKEN_IMAGE,
                  e.ɵɵsanitizeUrl
                ),
                e.ɵɵadvance(3),
                e.ɵɵtextInterpolate(n.trade.toToken.symbol),
                e.ɵɵadvance(2),
                e.ɵɵtextInterpolate1(
                  " ",
                  n.getBlockchainLabel(n.trade.toToken.blockchain),
                  " "
                ),
                e.ɵɵadvance(6),
                e.ɵɵtextInterpolate1(" ", n.trade.depositAddress, " "),
                e.ɵɵadvance(1),
                e.ɵɵproperty("cdkCopyToClipboard", n.trade.depositAddress),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", n.trade.extraField),
                e.ɵɵadvance(3),
                e.ɵɵproperty("tuiHint", i)("tuiHintShowDelay", 0)(
                  "tuiHintMode",
                  "onDark"
                ),
                e.ɵɵadvance(9),
                e.ɵɵtextInterpolate1(" ", n.trade.id, ""),
                e.ɵɵadvance(2),
                e.ɵɵproperty("cdkCopyToClipboard", n.trade.id),
                e.ɵɵadvance(5),
                e.ɵɵtextInterpolate2(
                  " ",
                  e.ɵɵpipeBind1(59, 22, n.trade.toAmount),
                  " ",
                  n.trade.toToken.symbol,
                  " "
                ),
                e.ɵɵadvance(6),
                e.ɵɵtextInterpolate(n.trade.receiverAddress);
            }
          },
          dependencies: [m.O5, G.d$, R.D, to, Ce.N],
          styles: [
            "[_ngcontent-%COMP%]:root{--scroll-size: 0px;--primary-color: #00e6ff;--secondary-color: #271e34;--filter-inversion: invert(1);--accent-color: #ffe900;--transparent-line: rgba(0, 0, 0, .1);--primary-background: rgb(246, 246, 246);--form-background: rgb(255, 255, 255);--form-background-transparent: rgba(255, 255, 255, .9);--solid-background: rgb(255, 255, 255);--secondary-background: rgba(0, 0, 0, .035);--iframe-primary-background: rgb(244, 244, 244);--primary-text: rgb(0, 0, 0);--primary-text-invert: rgb(255, 255, 255);--secondary-text: rgba(0, 0, 0, .5);--tui-primary: #00e6ff;--tui-primary-hover: #70ff05;--tui-primary-active: #70ff05;--tui-primary-text: var(--primary-text-invert);--tui-secondary: rgba(255, 255, 255, 1);--tui-secondary-hover: rgba(255, 255, 255, .5);--tui-secondary-active: rgba(255, 255, 255, .5);--tui-secondary-text: var(--primary-text);--tui-link: var(--primary-text);--tui-link-hover: var(--primary-text);--tui-text-02: #3b3a3a;--tui-text-03: var(--tui-text-02);--selection-color: rgb(243 249 243);--error-color: #e9590c;--warning-color: #f2994a}.block-container[_ngcontent-%COMP%]{max-width:542px;margin:0 auto;padding:30px;color:var(--secondary-text);font-size:14px;line-height:120%;background:var(--form-background);border:1px solid var(--transparent-line);border-radius:19px}.arrow-back[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:42px;height:42px;margin-bottom:20px;background:#303030;border-radius:50%;cursor:pointer}.arrow-back[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:6px}.header[_ngcontent-%COMP%]{margin-bottom:20px}.row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:40px}.row[_ngcontent-%COMP%]:first-of-type{margin-top:0}.row-item_small[_ngcontent-%COMP%]{max-width:40%}.row-item__header[_ngcontent-%COMP%]{margin-bottom:3px;color:var(--primary-color)}.row-item__value[_ngcontent-%COMP%]{display:flex;grid-gap:10px;align-items:center;height:-moz-fit-content;height:fit-content;min-height:24px;color:var(--primary-text);font-weight:600;font-size:18px}.row-item__value[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px}.tokens-diagram[_ngcontent-%COMP%]{display:flex;grid-gap:10px;align-items:center;padding:10px;background:#303030;border-radius:12px}.token-diagram[_ngcontent-%COMP%]{display:flex;grid-gap:10px;align-items:center;white-space:nowrap}.token-diagram[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:23px;max-height:23px}.token-diagram__symbol[_ngcontent-%COMP%]{color:var(--primary-text)}.token-diagram__chain[_ngcontent-%COMP%]{font-size:12px}.copy-icon[_ngcontent-%COMP%]{width:18px;height:18px;cursor:pointer}.copy-icon_green[_ngcontent-%COMP%]     svg path{stroke:var(--primary-color)}.additional-info[_ngcontent-%COMP%]{display:flex;grid-gap:16px;align-items:center;max-width:328px}.info-icon[_ngcontent-%COMP%]{width:20px;height:20px}.estimated-time[_ngcontent-%COMP%]{display:flex;grid-gap:9px;align-items:center;justify-content:center;width:100%;font-size:12px}.primary-text[_ngcontent-%COMP%]{color:var(--primary-text)}.delimiter[_ngcontent-%COMP%]{margin-top:20px;background:#333535}.bottom-row[_ngcontent-%COMP%]{display:flex;grid-gap:10px;align-items:center;justify-content:space-between;margin-top:14px}.bottom-row[_ngcontent-%COMP%]:first-of-type{height:24px;margin-top:15px}.bottom-row__value[_ngcontent-%COMP%]{display:flex;grid-gap:10px;align-items:center;font-size:12px}.break-word[_ngcontent-%COMP%]{word-break:break-word}button[_ngcontent-%COMP%]{transition:.2s ease-in-out}button[_ngcontent-%COMP%]:active{transform:scale(.9)}.contact-support-hint[_ngcontent-%COMP%]{max-width:384px;color:var(--secondary-text);font-size:12px;line-height:120%;text-align:center}@media (max-width: 560px){.block-container[_ngcontent-%COMP%]{padding:20px}.row[_ngcontent-%COMP%]:first-of-type{flex-direction:column-reverse;grid-gap:20px;align-items:start}.row[_ngcontent-%COMP%]:nth-of-type(3){flex-direction:column;grid-gap:20px;align-items:start}.row-item_small[_ngcontent-%COMP%]{max-width:unset}}",
          ],
          changeDetection: 0,
        }));
      const Sm = [
        { path: "", component: pr },
        { path: "changenow-post", component: dr },
      ];
      class Ut {}
      (Ut.ɵfac = function (t) {
        return new (t || Ut)();
      }),
        (Ut.ɵmod = e.ɵɵdefineNgModule({ type: Ut })),
        (Ut.ɵinj = e.ɵɵdefineInjector({
          imports: [hr.Bz.forChild(Sm), hr.Bz],
        }));
      var Ar = l(25253);
      class Gt {}
      (Gt.ɵfac = function (t) {
        return new (t || Gt)();
      }),
        (Gt.ɵmod = e.ɵɵdefineNgModule({ type: Gt })),
        (Gt.ɵinj = e.ɵɵdefineInjector({
          providers: [me, ve, qe, gt, ht],
          imports: [m.ez, Ar.m],
        }));
      class Ne {}
      (Ne.ɵfac = function (t) {
        return new (t || Ne)();
      }),
        (Ne.ɵmod = e.ɵɵdefineNgModule({ type: Ne })),
        (Ne.ɵinj = e.ɵɵdefineInjector({
          imports: [
            m.ez,
            Ar.m,
            R.go,
            G.vi,
            Ke.Qf,
            Y.cn,
            h.ReactiveFormsModule,
            Gt,
            m.ez,
            Ar.m,
          ],
        }));
      class Kt {}
      (Kt.ɵfac = function (t) {
        return new (t || Kt)();
      }),
        (Kt.ɵmod = e.ɵɵdefineNgModule({ type: Kt })),
        (Kt.ɵinj = e.ɵɵdefineInjector({
          providers: [Oe],
          imports: [Ne, G.vi, R.go],
        }));
      var io = l(87738),
        ii = l(84620),
        _r = (l(2836), l(28634), l(35640)),
        se = l(46579);
      class Pm {
        constructor(t) {
          this.$implicit = t;
        }
      }
      let km = (() => {
          let r = class {
            constructor(n, i) {
              (this.viewContainer = n), (this.templateRef = i);
            }
            set tuiRepeatTimesOf(n) {
              const i = Math.floor((0, se.uZ)(n, 0, 65536)),
                { length: a } = this.viewContainer;
              n < a ? this.removeContainers(a - n) : this.addContainers(i);
            }
            addContainers(n) {
              for (let i = this.viewContainer.length; i < n; i++)
                this.viewContainer.createEmbeddedView(
                  this.templateRef,
                  new Pm(i)
                );
            }
            removeContainers(n) {
              for (let i = 0; i < n; i++) this.viewContainer.remove();
            }
          };
          return (
            (r.ɵfac = function (n) {
              return new (n || r)(
                e.ɵɵdirectiveInject(e.ViewContainerRef),
                e.ɵɵdirectiveInject(e.TemplateRef)
              );
            }),
            (r.ɵdir = e.ɵɵdefineDirective({
              type: r,
              selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
              inputs: { tuiRepeatTimesOf: "tuiRepeatTimesOf" },
            })),
            (0, C.__decorate)(
              [(0, e.Input)(), (0, K.NH)()],
              r.prototype,
              "tuiRepeatTimesOf",
              null
            ),
            (r = (0, C.__decorate)(
              [
                (0, C.__param)(0, (0, e.Inject)(e.ViewContainerRef)),
                (0, C.__param)(1, (0, e.Inject)(e.TemplateRef)),
              ],
              r
            )),
            r
          );
        })(),
        wm = (() => {
          let r = class {};
          return (
            (r.ɵfac = function (n) {
              return new (n || r)();
            }),
            (r.ɵmod = e.ɵɵdefineNgModule({ type: r })),
            (r.ɵinj = e.ɵɵdefineInjector({})),
            r
          );
        })();
      var oo = l(33703),
        ao = l(37940),
        so = l(69582);
      let Am = (() => {
          let r = class {
            constructor(n) {
              this.numberFormat = n;
            }
            transform(
              n,
              i = null,
              a = this.numberFormat.decimalSeparator,
              s = this.numberFormat.thousandSeparator
            ) {
              return (0, Tr.uf)(n, i, a, s);
            }
          };
          return (
            (r.ɵfac = function (n) {
              return new (n || r)(e.ɵɵdirectiveInject(Ct.HO, 16));
            }),
            (r.ɵpipe = e.ɵɵdefinePipe({
              name: "tuiFormatNumber",
              type: r,
              pure: !0,
            })),
            (r = (0, C.__decorate)(
              [(0, C.__param)(0, (0, e.Inject)(Ct.HO))],
              r
            )),
            r
          );
        })(),
        Em = (() => {
          let r = class {};
          return (
            (r.ɵfac = function (n) {
              return new (n || r)();
            }),
            (r.ɵmod = e.ɵɵdefineNgModule({ type: r })),
            (r.ɵinj = e.ɵɵdefineInjector({})),
            r
          );
        })();
      function oi(r) {
        return isFinite(r) && r >= 0;
      }
      var ur = l(72997),
        Mr = l(69751),
        lo = l(38421),
        Im = l(75797),
        Nm = l(25403);
      function ai(...r) {
        return 1 === (r = (0, Im.k)(r)).length
          ? (0, lo.Xf)(r[0])
          : new Mr.y(
              (function Rm(r) {
                return (t) => {
                  let n = [];
                  for (let i = 0; n && !t.closed && i < r.length; i++)
                    n.push(
                      (0, lo.Xf)(r[i]).subscribe(
                        (0, Nm.x)(t, (a) => {
                          if (n) {
                            for (let s = 0; s < n.length; s++)
                              s !== i && n[s].unsubscribe();
                            n = null;
                          }
                          t.next(a);
                        })
                      )
                    );
                };
              })(r)
            );
      }
      const Bm = ["dotLeft"],
        Fm = ["dotRight"],
        po = { s: 8, m: 16 };
      let Lm = (() => {
        let r = class extends ti.M$ {
          constructor(n, i, a, s) {
            super(n, i),
              (this.documentRef = a),
              (this.fromToTexts$ = s),
              (this.pointerDown$ = new _e.x()),
              (this.min = 0),
              (this.max = 1 / 0),
              (this.segments = 0),
              (this.steps = 0),
              (this.quantum = 0),
              (this.size = "m"),
              (this.keySteps = null),
              (this.focusVisibleLeft = !1),
              (this.focusVisibleRight = !1),
              (this.pluralizeMap = null);
          }
          set pluralize(n) {
            this.pluralizeMap = Array.isArray(n) ? (0, Tr.KA)(n) : n;
          }
          get segmented() {
            return this.segments > 0;
          }
          get discrete() {
            return this.steps > 0;
          }
          get length() {
            return this.max - this.min;
          }
          get computedStep() {
            return this.steps
              ? 1 / this.steps
              : this.quantum
              ? this.quantum / this.length
              : 0.05;
          }
          get isLeftFocusable() {
            return !this.disabled && this.focusable && 100 !== this.right;
          }
          get isRightFocusable() {
            return !this.disabled && this.focusable && 100 !== this.left;
          }
          ngOnInit() {
            super.ngOnInit();
            const n = (0, Je.eh)(this.documentRef, "mousemove"),
              i = (0, Je.eh)(this.documentRef, "mouseup"),
              a = (0, Je.eh)(this.documentRef, "touchmove"),
              s = (0, Je.eh)(this.documentRef, "touchend");
            let c;
            this.pointerDown$
              .pipe(
                (0, v.U)((p) => {
                  const d = p.currentTarget.getBoundingClientRect(),
                    _ =
                      p instanceof MouseEvent
                        ? p.clientX
                        : p.touches[0].clientX,
                    f = (0, se.uZ)(this.getFractionFromEvents(d, _), 0, 1),
                    P = 100 * f - 100 + this.right;
                  c =
                    Math.abs(100 * f - this.left) > Math.abs(P) ||
                    P > 0 ||
                    (0 === this.left && 100 === this.right);
                  const S = (0, se.uZ)(
                      this.getCalibratedFractionFromEvents(d, _, c),
                      0,
                      1
                    ),
                    D = this.getValueFromFraction(this.fractionGuard(S));
                  return this.processValue(D, c), this.processFocus(c), d;
                }),
                (0, N.w)((p) =>
                  ai([a, n]).pipe(
                    (0, v.U)((d) =>
                      this.getCalibratedFractionFromEvents(
                        p,
                        d instanceof MouseEvent
                          ? d.clientX
                          : d.touches[0].clientX,
                        c
                      )
                    ),
                    (0, O.R)(ai([i, s]))
                  )
                ),
                (0, v.U)((p) => this.fractionGuard(p))
              )
              .subscribe((p) => {
                this.processValue(this.getValueFromFraction(p), c);
              });
          }
          ngOnDestroy() {
            super.ngOnDestroy(), this.pointerDown$.complete();
          }
          onMouseDown(n) {
            this.disabled || (n.preventDefault(), this.pointerDown$.next(n));
          }
          onTouchStart(n) {
            this.disabled || (n.preventDefault(), this.pointerDown$.next(n));
          }
          decrement(n) {
            this.processStep(!1, n);
          }
          increment(n) {
            this.processStep(!0, n);
          }
          getSegmentLabel(n) {
            return (0, se.NM)(this.getValueFromFraction(n / this.segments), 2);
          }
          getSegmentPrefix(n, i) {
            return 1 !== this.segments ? "" : 0 === n ? `${i[0]} ` : `${i[1]} `;
          }
          onActiveZone(n) {
            this.updateFocused(n);
          }
          onLeftFocusVisible(n) {
            this.focusVisibleLeft = n;
          }
          onRightFocusVisible(n) {
            this.focusVisibleRight = n;
          }
          getFractionFromValue(n) {
            const i = (n - this.min) / this.length;
            return null !== this.keySteps
              ? this.fractionValueKeyStepConverter(n, !1)
              : (0, se.uZ)(Number.isFinite(i) ? i : 1, 0, 1);
          }
          getValueFromFraction(n) {
            return null !== this.keySteps
              ? this.fractionValueKeyStepConverter(n, !0)
              : (0, se.NM)(this.fractionGuard(n) * this.length + this.min, 7);
          }
          getCalibratedFractionFromEvents(n, i, a) {
            return this.getFractionFromEvents(n, i);
          }
          valueGuard(n) {
            return (0, se.uZ)(
              this.quantum
                ? (0, se.NM)(Math.round(n / this.quantum) * this.quantum, 7)
                : n,
              this.min,
              this.max
            );
          }
          processFocus(n) {
            !this.focusable ||
              !this.dotRight ||
              !this.dotLeft ||
              (0, _r.NY)(
                n ? this.dotRight.nativeElement : this.dotLeft.nativeElement
              );
          }
          fractionValueKeyStepConverter(n, i) {
            const a = [[0, this.min]].concat(this.keySteps, [[100, this.max]]);
            let s = 0,
              c = 100,
              p = this.min,
              d = this.max;
            for (let x = 1; x < a.length; x++)
              if ((i && a[x][0] / 100 > n) || (!i && a[x][1] > n)) {
                (s = a[x - 1][0] || 0),
                  (c = a[x][0]),
                  (p = a[x - 1][1]),
                  (d = a[x][1]);
                break;
              }
            const _ = c - s,
              f = d - p;
            return i
              ? (0, se.NM)(((100 * n - s) / _) * f + p, 7)
              : (0, se.uZ)(((n - p) / f) * _ + s, 0, 100) / 100;
          }
          fractionGuard(n) {
            return (0, se.uZ)(
              this.discrete ? (0, se.q$)(n, 1 / this.steps) : n,
              0,
              1
            );
          }
          getFractionFromEvents(n, i) {
            return (0, se.NM)(
              (i - n.left - po[this.size] / 2) / (n.width - po[this.size]),
              7
            );
          }
        };
        return (
          (r.ɵfac = function (n) {
            return new (n || r)(
              e.ɵɵdirectiveInject(h.NgControl),
              e.ɵɵdirectiveInject(e.ChangeDetectorRef),
              e.ɵɵdirectiveInject(Document),
              e.ɵɵdirectiveInject(ur.Te)
            );
          }),
          (r.ɵdir = e.ɵɵdefineDirective({
            type: r,
            viewQuery: function (n, i) {
              if (
                (1 & n && (e.ɵɵviewQuery(Bm, 5), e.ɵɵviewQuery(Fm, 5)), 2 & n)
              ) {
                let a;
                e.ɵɵqueryRefresh((a = e.ɵɵloadQuery())) &&
                  (i.dotLeft = a.first),
                  e.ɵɵqueryRefresh((a = e.ɵɵloadQuery())) &&
                    (i.dotRight = a.first);
              }
            },
            hostVars: 3,
            hostBindings: function (n, i) {
              2 & n &&
                (e.ɵɵattribute("data-size", i.size),
                e.ɵɵclassProp("_segmented", i.segmented));
            },
            inputs: {
              min: "min",
              max: "max",
              segments: "segments",
              steps: "steps",
              quantum: "quantum",
              size: "size",
              keySteps: "keySteps",
              pluralize: "pluralize",
            },
            features: [e.ɵɵInheritDefinitionFeature],
          })),
          (0, C.__decorate)(
            [(0, e.ViewChild)("dotLeft")],
            r.prototype,
            "dotLeft",
            void 0
          ),
          (0, C.__decorate)(
            [(0, e.ViewChild)("dotRight")],
            r.prototype,
            "dotRight",
            void 0
          ),
          (0, C.__decorate)(
            [(0, e.Input)(), (0, K.TH)()],
            r.prototype,
            "min",
            void 0
          ),
          (0, C.__decorate)(
            [(0, e.Input)(), (0, K.TH)()],
            r.prototype,
            "max",
            void 0
          ),
          (0, C.__decorate)(
            [(0, e.Input)(), (0, K.TH)()],
            r.prototype,
            "segments",
            void 0
          ),
          (0, C.__decorate)(
            [(0, e.Input)(), (0, K.TH)()],
            r.prototype,
            "steps",
            void 0
          ),
          (0, C.__decorate)(
            [
              (0, e.Input)(),
              (0, K.TH)(oi, "Quantum must be a non-negative number"),
            ],
            r.prototype,
            "quantum",
            void 0
          ),
          (0, C.__decorate)(
            [(0, e.Input)(), (0, K.TH)()],
            r.prototype,
            "pluralize",
            null
          ),
          (0, C.__decorate)(
            [(0, e.Input)(), (0, e.HostBinding)("attr.data-size"), (0, K.TH)()],
            r.prototype,
            "size",
            void 0
          ),
          (0, C.__decorate)(
            [(0, e.Input)(), (0, K.TH)()],
            r.prototype,
            "keySteps",
            void 0
          ),
          (0, C.__decorate)(
            [(0, e.HostBinding)("class._segmented")],
            r.prototype,
            "segmented",
            null
          ),
          (r = (0, C.__decorate)([(0, C.__param)(3, (0, e.Inject)(ur.Te))], r)),
          r
        );
      })();
      function $m(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "i18nPlural"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2).$implicit,
            i = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(2, 1, i.getSegmentLabel(n), i.pluralizeMap),
              " "
            );
        }
      }
      function Vm(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span", 12),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "tuiFormatNumber"),
            e.ɵɵtemplate(3, $m, 3, 4, "span", 13),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = t.ngIf,
            i = e.ɵɵnextContext().$implicit,
            a = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate2(
              " ",
              a.getSegmentPrefix(i, n),
              " ",
              e.ɵɵpipeBind1(2, 3, a.getSegmentLabel(i)),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", a.pluralizeMap);
        }
      }
      function jm(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "span", 10),
            e.ɵɵtemplate(1, Vm, 4, 5, "span", 11),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 1, n.fromToTexts$));
        }
      }
      function zm(r, t) {
        if (
          (1 & r &&
            (e.ɵɵelementStart(0, "div", 8),
            e.ɵɵtemplate(1, jm, 3, 3, "span", 9),
            e.ɵɵelementEnd()),
          2 & r)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty("tuiRepeatTimesOf", n.segments + 1);
        }
      }
      var si;
      let yt = (si = class extends Lm {
        constructor(t, n, i, a) {
          super(t, n, i, a);
        }
        get nativeFocusableElement() {
          return this.dotRight ? this.dotRight.nativeElement : null;
        }
        get focused() {
          return (0, _r.zV)(this.nativeFocusableElement);
        }
        get left() {
          return 0;
        }
        get right() {
          return 100 - 100 * this.getFractionFromValue(this.value);
        }
        getFallbackValue() {
          return 0;
        }
        processStep(t) {
          const n = this.getFractionFromValue(this.value),
            i = this.computedStep,
            a = this.getValueFromFraction(t ? n + i : n - i);
          this.processValue(a);
        }
        processValue(t) {
          this.updateValue(this.valueGuard(t));
        }
      });
      (yt.ɵfac = function (t) {
        return new (t || yt)(
          e.ɵɵdirectiveInject(h.NgControl, 10),
          e.ɵɵdirectiveInject(e.ChangeDetectorRef),
          e.ɵɵdirectiveInject(m.K0),
          e.ɵɵdirectiveInject(ur.Te)
        );
      }),
        (yt.ɵcmp = e.ɵɵdefineComponent({
          type: yt,
          selectors: [["tui-slider"]],
          features: [
            e.ɵɵProvidersFeature([
              { provide: Xe.KZ, useExisting: (0, e.forwardRef)(() => si) },
            ]),
            e.ɵɵInheritDefinitionFeature,
          ],
          decls: 8,
          vars: 11,
          consts: [
            [
              1,
              "event-catcher",
              3,
              "tuiActiveZoneChange",
              "mousedown",
              "touchstart",
            ],
            [1, "wrapper"],
            ["class", "segments", 4, "ngIf"],
            ["automation-id", "tui-slider__bar", 1, "bar"],
            [
              "automation-id",
              "tui-slider__left",
              1,
              "dot",
              3,
              "tuiFocusable",
              "tuiFocusVisibleChange",
              "keydown.arrowLeft.prevent",
              "keydown.arrowDown.prevent",
              "keydown.arrowRight.prevent",
              "keydown.arrowUp.prevent",
            ],
            ["dotLeft", ""],
            [
              "automation-id",
              "tui-slider__right",
              1,
              "dot",
              3,
              "tuiFocusable",
              "tuiFocusVisibleChange",
              "keydown.arrowLeft.prevent",
              "keydown.arrowDown.prevent",
              "keydown.arrowRight.prevent",
              "keydown.arrowUp.prevent",
            ],
            ["dotRight", ""],
            [1, "segments"],
            [
              "automation-id",
              "tui-slider__segment",
              "class",
              "segment",
              4,
              "tuiRepeatTimes",
              "tuiRepeatTimesOf",
            ],
            ["automation-id", "tui-slider__segment", 1, "segment"],
            ["class", "number", 4, "ngIf"],
            [1, "number"],
            [4, "ngIf"],
          ],
          template: function (t, n) {
            1 & t &&
              (e.ɵɵelementStart(0, "div", 0),
              e.ɵɵlistener("tuiActiveZoneChange", function (a) {
                return n.onActiveZone(a);
              })("mousedown", function (a) {
                return n.onMouseDown(a);
              })("touchstart", function (a) {
                return n.onTouchStart(a);
              }),
              e.ɵɵelementStart(1, "div", 1),
              e.ɵɵtemplate(2, zm, 2, 1, "div", 2),
              e.ɵɵelementStart(3, "div", 3)(4, "div", 4, 5),
              e.ɵɵlistener("tuiFocusVisibleChange", function (a) {
                return n.onLeftFocusVisible(a);
              })("keydown.arrowLeft.prevent", function () {
                return n.decrement(!1);
              })("keydown.arrowDown.prevent", function () {
                return n.decrement(!1);
              })("keydown.arrowRight.prevent", function () {
                return n.increment(!1);
              })("keydown.arrowUp.prevent", function () {
                return n.increment(!1);
              }),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(6, "div", 6, 7),
              e.ɵɵlistener("tuiFocusVisibleChange", function (a) {
                return n.onRightFocusVisible(a);
              })("keydown.arrowLeft.prevent", function () {
                return n.decrement(!0);
              })("keydown.arrowDown.prevent", function () {
                return n.decrement(!0);
              })("keydown.arrowRight.prevent", function () {
                return n.increment(!0);
              })("keydown.arrowUp.prevent", function () {
                return n.increment(!0);
              }),
              e.ɵɵelementEnd()()()()),
              2 & t &&
                (e.ɵɵadvance(2),
                e.ɵɵproperty("ngIf", n.segmented),
                e.ɵɵadvance(1),
                e.ɵɵstyleProp("left", n.left, "%")("right", n.right, "%"),
                e.ɵɵadvance(1),
                e.ɵɵclassProp(
                  "dot_focus-visible",
                  n.focusVisibleLeft && n.computedFocused
                ),
                e.ɵɵproperty("tuiFocusable", n.isLeftFocusable),
                e.ɵɵadvance(2),
                e.ɵɵclassProp(
                  "dot_focus-visible",
                  n.focusVisibleRight && n.computedFocused
                ),
                e.ɵɵproperty("tuiFocusable", n.isRightFocusable));
          },
          dependencies: [m.O5, km, oo.t, ao.q, so.e, m.Ov, m.Gx, Am],
          styles: [
            "[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);color:var(--tui-base-03);min-height:.125rem;font-size:1rem}[data-size='s'][_nghost-%COMP%]{min-height:.125rem;font-size:.5rem}._segmented[_nghost-%COMP%]{padding-bottom:1.25rem}._disabled[_nghost-%COMP%]{cursor:default;pointer-events:none;opacity:var(--tui-disabled-opacity)}.event-catcher[_ngcontent-%COMP%]{min-height:inherit;border-radius:inherit;padding:.4375rem 0;cursor:pointer}.wrapper[_ngcontent-%COMP%]{position:relative;min-height:inherit;border-radius:inherit;background-color:currentColor;border:solid transparent;border-width:0 1em}.bar[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;margin:0 -1em;border-radius:inherit;background-color:var(--tui-primary)}tui-input-slider[_nghost-%COMP%]   .bar[_ngcontent-%COMP%], tui-input-slider   [_nghost-%COMP%]   .bar[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m)/ 2);border-bottom-left-radius:calc(var(--tui-radius-m) * 5) calc(var(--tui-radius-m) * 1.5)}.dot[_ngcontent-%COMP%]{transition-property:background-color;transition-duration:var(--tui-duration,300ms);transition-timing-function:ease-in-out;position:absolute;top:50%;z-index:1;width:1em;height:1em;transform:translate(0,-50%);border-radius:100%;background-color:var(--tui-primary);outline:0;cursor:ew-resize}.dot[_ngcontent-%COMP%]:last-child{right:0;transform:translate(0,-50%)}.dot[_ngcontent-%COMP%]:hover{background-color:var(--tui-primary-hover)}.dot[_ngcontent-%COMP%]:active{background-color:var(--tui-primary-active)}.dot_focus-visible[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 2px var(--tui-focus)}.segments[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;justify-content:space-between;min-height:inherit;margin:0 -1em}.segments-spacer[_ngcontent-%COMP%]{height:1.625rem}.segment[_ngcontent-%COMP%]{position:relative;height:inherit;width:.25rem;background-color:rgba(0,0,0,.36);pointer-events:none}.segment[_ngcontent-%COMP%]:first-of-type, .segment[_ngcontent-%COMP%]:last-of-type{background-color:transparent}.number[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%,0);top:100%;font:var(--tui-font-text-s);margin-top:.5rem;color:var(--tui-text-02);white-space:nowrap}.segment[_ngcontent-%COMP%]:first-of-type   .number[_ngcontent-%COMP%]{left:-.05em;transform:none}.segment[_ngcontent-%COMP%]:last-of-type   .number[_ngcontent-%COMP%]{left:auto;right:-.05em;transform:none}._disabled[_nghost-%COMP%]   .number[_ngcontent-%COMP%]{color:var(--tui-text-01)}",
            ".dot[_ngcontent-%COMP%]:first-child{display:none}.wrapper[_ngcontent-%COMP%]{border-left:none}.bar[_ngcontent-%COMP%], .segments[_ngcontent-%COMP%]{margin-left:0}",
          ],
          changeDetection: 0,
        })),
        (yt.ctorParameters = () => [
          {
            type: h.NgControl,
            decorators: [
              { type: e.Optional },
              { type: e.Self },
              { type: e.Inject, args: [h.NgControl] },
            ],
          },
          {
            type: e.ChangeDetectorRef,
            decorators: [{ type: e.Inject, args: [e.ChangeDetectorRef] }],
          },
          { type: Document, decorators: [{ type: e.Inject, args: [m.K0] }] },
          { type: Mr.y, decorators: [{ type: e.Inject, args: [ur.Te] }] },
        ]),
        (yt = si =
          (0, C.__decorate)(
            [
              (0, C.__param)(0, (0, e.Optional)()),
              (0, C.__param)(0, (0, e.Self)()),
              (0, C.__param)(0, (0, e.Inject)(h.NgControl)),
              (0, C.__param)(1, (0, e.Inject)(e.ChangeDetectorRef)),
              (0, C.__param)(2, (0, e.Inject)(m.K0)),
              (0, C.__param)(3, (0, e.Inject)(ur.Te)),
            ],
            yt
          ));
      let Ym = (() => {
        let r = class {};
        return (
          (r.ɵfac = function (n) {
            return new (n || r)();
          }),
          (r.ɵmod = e.ɵɵdefineNgModule({ type: r })),
          (r.ɵinj = e.ɵɵdefineInjector({
            imports: [m.ez, wm, oo.u, ao.c, so.A, Em],
          })),
          r
        );
      })();
      var mo = l(46693);
      l(59468);
      let Zm = (() => {
        let r = class {};
        return (
          (r.ɵfac = function (n) {
            return new (n || r)();
          }),
          (r.ɵmod = e.ɵɵdefineNgModule({ type: r })),
          (r.ɵinj = e.ɵɵdefineInjector({})),
          r
        );
      })();
      class Zt {}
      (Zt.ɵfac = function (t) {
        return new (t || Zt)();
      }),
        (Zt.ɵmod = e.ɵɵdefineNgModule({ type: Zt })),
        (Zt.ɵinj = e.ɵɵdefineInjector({
          providers: [lt],
          imports: [
            m.ez,
            Ar.m,
            $e.Jy,
            Ke.Qf,
            h.FormsModule,
            Y.cn,
            ii.E,
            mo.fN,
            Ze.Cl,
            R.go,
            Si.TH,
            wt.dS,
            G.vi,
            Zm,
          ],
        }));
      class Xt {}
      (Xt.ɵfac = function (t) {
        return new (t || Xt)();
      }),
        (Xt.ɵmod = e.ɵɵdefineNgModule({ type: Xt })),
        (Xt.ɵinj = e.ɵɵdefineInjector({
          providers: [ge, ft],
          imports: [
            Ne,
            h.ReactiveFormsModule,
            Y.cn,
            Ke.Qf,
            G.vi,
            R.go,
            Zi.f,
            ii.E,
            io.pc,
            Un.jh,
            mo.fN,
            Gn.Cu,
            wt.dS,
            kr.iK,
            $e.Jy,
          ],
        }));
      var Xm = l(70930),
        Qm = l(50727),
        ci = l(4707);
      const Jm = {
        url: "",
        deserializer: (r) => JSON.parse(r.data),
        serializer: (r) => JSON.stringify(r),
      };
      class li extends _e.u {
        constructor(t, n) {
          if ((super(), (this._socket = null), t instanceof Mr.y))
            (this.destination = n), (this.source = t);
          else {
            const i = (this._config = Object.assign({}, Jm));
            if (((this._output = new _e.x()), "string" == typeof t)) i.url = t;
            else for (const a in t) t.hasOwnProperty(a) && (i[a] = t[a]);
            if (!i.WebSocketCtor && WebSocket) i.WebSocketCtor = WebSocket;
            else if (!i.WebSocketCtor)
              throw new Error("no WebSocket constructor can be found");
            this.destination = new ci.t();
          }
        }
        lift(t) {
          const n = new li(this._config, this.destination);
          return (n.operator = t), (n.source = this), n;
        }
        _resetState() {
          (this._socket = null),
            this.source || (this.destination = new ci.t()),
            (this._output = new _e.x());
        }
        multiplex(t, n, i) {
          const a = this;
          return new Mr.y((s) => {
            try {
              a.next(t());
            } catch (p) {
              s.error(p);
            }
            const c = a.subscribe({
              next: (p) => {
                try {
                  i(p) && s.next(p);
                } catch (d) {
                  s.error(d);
                }
              },
              error: (p) => s.error(p),
              complete: () => s.complete(),
            });
            return () => {
              try {
                a.next(n());
              } catch (p) {
                s.error(p);
              }
              c.unsubscribe();
            };
          });
        }
        _connectSocket() {
          const {
              WebSocketCtor: t,
              protocol: n,
              url: i,
              binaryType: a,
            } = this._config,
            s = this._output;
          let c = null;
          try {
            (c = n ? new t(i, n) : new t(i)),
              (this._socket = c),
              a && (this._socket.binaryType = a);
          } catch (d) {
            return void s.error(d);
          }
          const p = new Qm.w0(() => {
            (this._socket = null), c && 1 === c.readyState && c.close();
          });
          (c.onopen = (d) => {
            const { _socket: _ } = this;
            if (!_) return c.close(), void this._resetState();
            const { openObserver: f } = this._config;
            f && f.next(d);
            const x = this.destination;
            (this.destination = Xm.Lv.create(
              (P) => {
                if (1 === c.readyState)
                  try {
                    const { serializer: S } = this._config;
                    c.send(S(P));
                  } catch (S) {
                    this.destination.error(S);
                  }
              },
              (P) => {
                const { closingObserver: S } = this._config;
                S && S.next(void 0),
                  P && P.code
                    ? c.close(P.code, P.reason)
                    : s.error(
                        new TypeError(
                          "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }"
                        )
                      ),
                  this._resetState();
              },
              () => {
                const { closingObserver: P } = this._config;
                P && P.next(void 0), c.close(), this._resetState();
              }
            )),
              x && x instanceof ci.t && p.add(x.subscribe(this.destination));
          }),
            (c.onerror = (d) => {
              this._resetState(), s.error(d);
            }),
            (c.onclose = (d) => {
              c === this._socket && this._resetState();
              const { closeObserver: _ } = this._config;
              _ && _.next(d), d.wasClean ? s.complete() : s.error(d);
            }),
            (c.onmessage = (d) => {
              try {
                const { deserializer: _ } = this._config;
                s.next(_(d));
              } catch (_) {
                s.error(_);
              }
            });
        }
        _subscribe(t) {
          const { source: n } = this;
          return n
            ? n.subscribe(t)
            : (this._socket || this._connectSocket(),
              this._output.subscribe(t),
              t.add(() => {
                const { _socket: i } = this;
                0 === this._output.observers.length &&
                  (i && (1 === i.readyState || 0 === i.readyState) && i.close(),
                  this._resetState());
              }),
              t);
        }
        unsubscribe() {
          const { _socket: t } = this;
          t && (1 === t.readyState || 0 === t.readyState) && t.close(),
            this._resetState(),
            super.unsubscribe();
        }
      }
      var Qt = l(33216),
        t_ = l(71290),
        n_ = l(13307);
      const r_ = Ri.G.websocketBaseUrl;
      class St {
        constructor(t, n, i, a, s, c, p, d, _) {
          (this.authService = t),
            (this.notificationsService = n),
            (this.onramperFormService = i),
            (this.onramperFormCalculationService = a),
            (this.onramperService = s),
            (this.recentTradesStoreService = c),
            (this.swapFormService = p),
            (this.onramperApiService = d),
            (this.iframeService = _),
            (this.relocateToOnChain = !1),
            this.subscribeOnUserChange(),
            this.subscribeOnForm(),
            this.subscribeOnWidgetOpened();
        }
        checkTradeStatus() {
          var t = this;
          return (0, T.Z)(function* () {
            if (t.iframeService.isIframe) return;
            const n = t.recentTradesStoreService.currentUserRecentTrades.find(
              (i) =>
                (0, t_.I)(i) && i.calculatedStatusFrom === o.TxStatus.PENDING
            );
            if (n) {
              const i = yield t.onramperApiService.getTradeData(
                t.authService.userAddress,
                n.txId
              );
              i.status === Qt.v.COMPLETED || i.status === Qt.v.FAILED
                ? t.recentTradesStoreService.updateTrade({
                    ...n,
                    calculatedStatusFrom:
                      i.status === Qt.v.COMPLETED
                        ? o.TxStatus.SUCCESS
                        : o.TxStatus.FAIL,
                    nativeAmount: i.out_amount,
                  })
                : ((t.onramperFormCalculationService.tradeStatus =
                    u.BUY_NATIVE_IN_PROGRESS),
                  t.notifyProgress(),
                  yield t.setupBalanceCheckTimer(
                    n.txId,
                    n.toToken.blockchain,
                    n.nativeAmount
                  ));
            }
          })();
        }
        subscribeOnUserChange() {
          var t = this;
          this.authService.currentUser$
            .pipe(
              (0, N.w)(
                (n) => (
                  this.intervalSubscription$?.unsubscribe(),
                  n?.address
                    ? (this.checkTradeStatus(),
                      (function e_(r) {
                        return new li(r);
                      })(`${r_}/onramp/transactions_receiver/${n.address}`))
                    : (0, L.of)(null)
                )
              ),
              (0, N.w)(
                (function () {
                  var n = (0, T.Z)(function* (i) {
                    if (i && "message" in i) {
                      const a = JSON.parse(i.message);
                      a?.status && (yield t.parseTransactionInfo(a));
                    }
                  });
                  return function (i) {
                    return n.apply(this, arguments);
                  };
                })()
              )
            )
            .subscribe();
        }
        parseTransactionInfo(t) {
          var n = this;
          return (0, T.Z)(function* () {
            if (t?.status === Qt.v.PENDING)
              n.inputForm &&
                (n.notifyProgress(),
                (n.onramperFormService.widgetOpened = !1),
                (n.onramperFormCalculationService.tradeStatus =
                  u.BUY_NATIVE_IN_PROGRESS),
                (n.currentRecentTrade = {
                  fromFiat: n.inputForm.fromFiat,
                  toToken: n.inputForm.toToken,
                  nativeAmount: t.out_amount,
                  txId: t.transaction_id,
                  timestamp: Date.now(),
                  calculatedStatusFrom: o.TxStatus.PENDING,
                }),
                n.iframeService.isIframe ||
                  n.recentTradesStoreService.saveTrade(
                    n.authService.userAddress,
                    n.currentRecentTrade
                  ),
                yield n.setupBalanceCheckTimer(
                  t.transaction_id,
                  n.inputForm.toToken.blockchain,
                  t.out_amount
                ));
            else if (t?.status === Qt.v.COMPLETED)
              yield n.handleSuccessfulTrade(t.transaction_id, t.out_amount);
            else if (t?.status === Qt.v.FAILED) {
              const i = n.recentTradesStoreService.getSpecificOnramperTrade(
                t.transaction_id
              );
              n.iframeService.isIframe ||
                n.recentTradesStoreService.updateTrade({
                  ...i,
                  calculatedStatusFrom: o.TxStatus.FAIL,
                }),
                n.progressNotificationSubscription$?.unsubscribe(),
                n.onramperFormCalculationService.stopBuyNativeInProgress(),
                n.onramperFormCalculationService.updateRate();
            }
          })();
        }
        setupBalanceCheckTimer(t, n, i) {
          var a = this;
          return (0, T.Z)(function* () {
            const s = a.authService.userAddress,
              c = new M.Z(i).multipliedBy(0.98),
              p = o.Injector.web3PublicService.getWeb3Public(n).getBalance;
            let d = yield p(s);
            a.intervalSubscription$ = (0, xn.F)(2e4)
              .pipe(
                (0, N.w)(
                  (0, T.Z)(function* () {
                    const _ = yield p(s),
                      f = o.Web3Pure.fromWei(_.minus(d));
                    return c.lte(f)
                      ? (yield a.handleSuccessfulTrade(t, f.toFixed()), !0)
                      : ((d = _), !1);
                  })
                ),
                (0, Sr.o)((_) => !_)
              )
              .subscribe();
          })();
        }
        handleSuccessfulTrade(t, n) {
          var i = this;
          return (0, T.Z)(function* () {
            const a = i.iframeService.isIframe
              ? i.currentRecentTrade
              : i.recentTradesStoreService.getSpecificOnramperTrade(t);
            if (
              !a ||
              a.txId !== t ||
              a.calculatedStatusFrom === o.TxStatus.SUCCESS
            )
              return;
            const s = {
              ...a,
              calculatedStatusFrom: o.TxStatus.SUCCESS,
              nativeAmount: n,
            };
            i.iframeService.isIframe
              ? (i.currentRecentTrade = s)
              : i.recentTradesStoreService.updateTrade(s),
              i.progressNotificationSubscription$?.unsubscribe(),
              i.notificationsService.show(new z.Al(Ni.U), {
                status: "success",
                autoClose: 15e3,
                data: { type: "on-chain", withRecentTrades: !0 },
              }),
              i.onramperFormCalculationService.stopBuyNativeInProgress(),
              i.onramperFormCalculationService.updateRate(),
              (i.iframeService.isIframe || i.relocateToOnChain) &&
                !o.EvmWeb3Pure.isNativeAddress(i.inputForm.toToken.address) &&
                (yield i.onramperService.updateSwapFormByRecentTrade(t));
          })();
        }
        notifyProgress() {
          this.progressNotificationSubscription$ =
            this.notificationsService.show(new z.Al(Mi.d), {
              status: "info",
              autoClose: !1,
              data: { withRecentTrades: !0 },
            });
        }
        subscribeOnForm() {
          this.swapFormService.inputValueDistinct$.subscribe(() => {
            this.relocateToOnChain = !1;
          });
        }
        subscribeOnWidgetOpened() {
          this.onramperFormService.widgetOpened$.subscribe((t) => {
            t &&
              ((this.relocateToOnChain = !0),
              (this.inputForm =
                this.onramperFormCalculationService.inputValue));
          });
        }
      }
      (St.ɵfac = function (t) {
        return new (t || St)(
          e.ɵɵinject(j.e),
          e.ɵɵinject(rn.T),
          e.ɵɵinject(Pe),
          e.ɵɵinject(nt),
          e.ɵɵinject(vi.i),
          e.ɵɵinject(yr.o),
          e.ɵɵinject(A.q),
          e.ɵɵinject(n_.L),
          e.ɵɵinject(W.b)
        );
      }),
        (St.ɵprov = e.ɵɵdefineInjectable({ token: St, factory: St.ɵfac }));
      class Jt {
        constructor(t) {}
      }
      (Jt.ɵfac = function (t) {
        return new (t || Jt)(e.ɵɵinject(St));
      }),
        (Jt.ɵmod = e.ɵɵdefineNgModule({ type: Jt })),
        (Jt.ɵinj = e.ɵɵdefineInjector({
          providers: [St, nt, Pe, Le, vt],
          imports: [Ne],
        }));
      class qt {}
      (qt.ɵfac = function (t) {
        return new (t || qt)();
      }),
        (qt.ɵmod = e.ɵɵdefineNgModule({ type: qt })),
        (qt.ɵinj = e.ɵɵdefineInjector({
          providers: [bt, Ae, Ie],
          imports: [
            Ne,
            h.ReactiveFormsModule,
            qi,
            Y.cn,
            Un.jh,
            Gn.Cu,
            R.go,
            G.vi,
          ],
        }));
      class en {}
      (en.ɵfac = function (t) {
        return new (t || en)();
      }),
        (en.ɵmod = e.ɵɵdefineNgModule({ type: en })),
        (en.ɵinj = e.ɵɵdefineInjector({
          providers: [q, ke, be, oe, tt],
          imports: [
            Ut,
            Ne,
            Kt,
            Xt,
            Jt,
            qt,
            Un.jh,
            io.pc,
            ii.E,
            Gn.Cu,
            h.ReactiveFormsModule,
            Ke.Qf,
            Ym,
            Pr.YM,
            qi,
            Y.cn,
            G.vi,
            R.go,
            Zt,
            h.FormsModule,
            wt.dS,
            ld,
            kr.iK,
          ],
        }));
    },
  },
]);
