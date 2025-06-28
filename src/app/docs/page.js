'use client';

import { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DocsPage() {
    const [copiedStates, setCopiedStates] = useState({});

    const copyToClipboard = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedStates(prev => ({ ...prev, [id]: true }));
            setTimeout(() => {
                setCopiedStates(prev => ({ ...prev, [id]: false }));
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const CodeBlock = ({ children, id, title }) => (
        <div className="relative bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
            {title && (
                <div className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                    {title}
                </div>
            )}
            <div className="relative">
                <pre className="p-4 text-sm text-gray-900 dark:text-gray-100 overflow-x-auto font-mono">
                    <code>{children}</code>
                </pre>
                <button
                    onClick={() => copyToClipboard(children, id)}
                    className="absolute top-3 right-3 p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Copy to clipboard"
                >
                    {copiedStates[id] ? (
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    ) : (
                        <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <Header />

            {/* Hero Section */}
            <div className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <FileText className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
                            Integration Guide
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Step-by-step instructions to add the Axto.ai Accessibility Widget to your website
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 pb-20">
                <div className="space-y-16">

                    {/* What You'll Need */}
                    <section>
                        <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-8">What You'll Need</h2>
                        <div className="space-y-4">
                            <p className="text-gray-600 dark:text-gray-400">Website admin access or ability to edit template files</p>
                            <p className="text-gray-600 dark:text-gray-400">A text editor or built-in CMS editor</p>
                            <p className="text-gray-600 dark:text-gray-400">Access to your Axto.ai Web Admin Panel for the script snippet</p>
                        </div>
                    </section>

                    {/* Quick Start */}
                    <section>
                        <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-8">Quick Start</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">Ideal if your site uses a shared header or footer template.</p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">1. Locate the shared template</h3>
                                <div className="text-gray-600 dark:text-gray-400 space-y-2">
                                    <p>Common names: header.php, footer.php, theme.liquid, layout.html</p>
                                    <p>In your CMS, look for "Theme Editor," "Layout," or "Templates"</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">2. Paste the snippet</h3>
                                <div className="text-gray-600 dark:text-gray-400 space-y-2">
                                    <p>Insert the script tag just before the closing head tag for best performance</p>
                                    <p>Alternatively, place it right before the body closing tag if you prefer loading after content</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">3. Save and publish</h3>
                                <div className="text-gray-600 dark:text-gray-400 space-y-2">
                                    <p>Save changes in your editor</p>
                                    <p>Clear any caches if applicable</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">4. Verify</h3>
                                <div className="text-gray-600 dark:text-gray-400 space-y-2">
                                    <p>Open your site in a browser and look for the widget icon</p>
                                    <p>Use Developer Tools Console to confirm the script loaded without errors</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Platform-Specific Instructions */}
                    <section>
                        <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-8">Platform-Specific Instructions</h2>

                        <div className="space-y-12">
                            {/* WordPress */}
                            <div>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-6">WordPress</h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Via Theme Editor</h4>
                                        <ol className="text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
                                            <li>In Admin, go to Appearance → Theme File Editor</li>
                                            <li>Select header.php (or the file containing head tag)</li>
                                            <li>Paste the snippet before the closing head tag and Update File</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Via Plugin</h4>
                                        <ol className="text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
                                            <li>Install Insert Headers and Footers or a similar plugin</li>
                                            <li>Go to Settings → Insert Headers and Footers</li>
                                            <li>Paste the script into Scripts in Header and save</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Via functions.php</h4>
                                        <CodeBlock id="wordpress-functions" title="functions.php">
                                            {`function add_axto_widget() {
    echo '<!-- Paste your Axto.ai script snippet here -->';
}
add_action('wp_head', 'add_axto_widget');`}
                                        </CodeBlock>
                                    </div>
                                </div>
                            </div>

                            {/* Shopify */}
                            <div>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-6">Shopify</h3>
                                <ol className="text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
                                    <li>In Shopify Admin, go to Online Store → Themes</li>
                                    <li>Click Actions → Edit Code on your live theme</li>
                                    <li>Under Layout, open theme.liquid</li>
                                    <li>Paste the snippet before the closing head tag, then Save</li>
                                </ol>
                            </div>

                            {/* Static HTML Sites */}
                            <div>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-6">Static HTML Sites</h3>
                                <ol className="text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
                                    <li>Open each .html file in your editor</li>
                                    <li>Paste the script snippet in the head section of each page</li>
                                    <li>Save and upload back to your server</li>
                                </ol>
                            </div>

                            {/* Other CMS */}
                            <div>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-6">Other CMS (Drupal, Joomla, etc.)</h3>
                                <div className="text-gray-600 dark:text-gray-400 space-y-2">
                                    <p>Look for a Global Header/Footer or Custom Code section in site settings</p>
                                    <p>Paste the snippet into the header area</p>
                                    <p>Save and clear caches</p>
                                </div>
                            </div>

                            {/* Google Tag Manager */}
                            <div>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-6">Google Tag Manager</h3>
                                <ol className="text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
                                    <li>Log in to Google Tag Manager</li>
                                    <li>Create a New Tag - Custom HTML</li>
                                    <li>Paste the Axto.ai snippet into the HTML box</li>
                                    <li>Set Trigger to All Pages and save</li>
                                    <li>Publish your workspace</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    {/* No Shared Template */}
                    <section>
                        <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-8">What If There's No Shared Template?</h2>
                        <div className="space-y-4">
                            <p className="text-gray-600 dark:text-gray-400">
                                If your website doesn't have a global template (e.g., hand-coded pages without includes), you can manually insert the snippet on each page:
                            </p>
                            <div className="text-gray-600 dark:text-gray-400 space-y-2">
                                <p>Open every HTML file and paste the snippet in the head section</p>
                                <p>Quick for small sites (under ~10 pages)</p>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-950/30 border-l-2 border-blue-200 dark:border-blue-800 p-4 rounded-r">
                                <p className="text-blue-800 dark:text-blue-200 text-sm">
                                    <strong>Tip:</strong> If you're not comfortable editing many pages, consider using a simple site builder or ask your hosting support for a basic include mechanism.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Verifying Installation */}
                    <section>
                        <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-8">Verifying Installation</h2>
                        <ol className="text-gray-600 dark:text-gray-400 space-y-3 list-decimal list-inside">
                            <li>Open your website in a browser</li>
                            <li>Right-click - Inspect Element or Developer Tools</li>
                            <li>Go to the Console or Network tab and search for axto-widget.js</li>
                            <li>Confirm the file loads without errors</li>
                            <li>Ensure the widget icon appears on every page</li>
                        </ol>
                    </section>

                </div>
            </div>

            <Footer />
        </div>
    );
} 